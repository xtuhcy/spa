/**
 * Created by huchengyi on 14-4-11.
 */
var SPA = (function (spa, global) {
    //数据模型基础对象
    var model = {
        server:""
        ,tagName:""
        ,tagParameter:null
        ,dataType:"json"
        ,async:true
        ,method:"GET"
        ,validator:spa.validator.defaultValidator
        ,validate:null
        ,cacheTime:0
        ,cacheKey:null
        ,interceptors:[spa.interceptor.viewsInterceptor]
        ,addInterceptorFirst:function(interceptor) {
            this.interceptors.unshift(interceptor);
        }
        ,addInterceptorLast:function(interceptor) {
            this.interceptors.push(interceptor);
        }
        /**
         * 请求数据
         * 默认是ajax请求，可以通过继承覆盖
         *
         * @param paras
         * @param success
         * @param error
         */
        ,getResult:function(paras, success, error) {
            var that = this;
            var type = that.method;
            var data = "";
            if(this.tagParameter !== null) {
                type = "POST";
                data = "parameters=" + spa.lang.jsonToUrl(this.tagParameter);
            }
            var url = this.server;
            if(spa.lang.string.notEmpty(this.tagName)) {
                url = url + "/" + this.tagName;
            }
            var urlParameter = "";
            if(paras !== null) {
                urlParameter = spa.lang.jsonToUrl(paras);
                if(type.toLowerCase() === "get") {
                    url = url + "?" + urlParameter;
                } else {
                    if(data === "") {
                        data = urlParameter;
                    } else {
                        data = data+"&"+urlParameter;
                    }
                }
            }
            console.debug("url = " + url);
            $.ajax({
                url: url
                ,type: type
                ,data : data
                ,dataType: that.dataType
                ,async:that.async
                ,success: function(data) {
                    that.json = data;
                    success.call(that, data);
                }
                ,error: function(xhr, type) {
                    error.call(that, xhr, type);
                }
            });
        }
        ,confirm:function(paras, errorCallback) {
            //校验数据
            if(paras !== null && this.validator !== null && this.validate !== null) {
                var valid = this.validator.check(paras, this.validate);
                if(valid !== null) {
                    errorCallback.call(this, valid);
                    return false;
                }
            }
            return true;
        }
        ,request:function(_paras, _views, _errorCallBack) {
            var views=[], paras=null, errorCallBack;
            if(arguments.length === 1) {
                if(_paras instanceof Array) {//request([view])
                    views = _paras;
                } else if(typeof _paras === "function"){//request(callback)
                    errorCallBack = _paras;
                } else {
                    paras = _paras;//request({})
                }
            } else if(arguments.length === 2) {//request({}, viewsOrCallBack)
                paras = _paras;
                if(_views instanceof Array) {//request({}, [view])
                    views = _views;
                } else if(typeof _views === "function") {//request({}, callback)
                    errorCallBack = _views;
                }
            } else {//request({}, [views], callBack)
                paras = _paras;
                views = _views;
                errorCallBack = _errorCallBack;
            }
            //校验数据
            if(errorCallBack) {
                if(!this.confirm(paras, errorCallBack)) {
                    return ;
                }
            }
            var i, interceptors=this.interceptors;
            //显示loading
            for(i in views) {
                views[i].loading();
            }
            //是否有缓存
            if(this.cacheTime > 0) {
                var cacheKey = this.cacheKey;
                if(cacheKey !== null) {
                    var cacheValue = spa.localStorage.get(cacheKey);
                    if(cacheValue) {//缓存没过期
                        console.debug("%s get from cache.", cacheKey);
                        //拦截器
                        for(i in interceptors) {
                            console.debug("interceptor:%o", interceptors[i]);
                            if(!interceptors[i].process(cacheValue, views)) {
                                break;
                            }
                        }
                        return;
                    }
                }
            }
            //请求数据
            this.getResult(paras, function(data) {
                //存缓存
                if(this.cacheTime > 0) {
                    var cacheKey = this.cacheKey;
                    if(cacheKey !== null) {
                        spa.localStorage.set(cacheKey, data, this.cacheTime);
                    }
                }
                //拦截器
                for(i in interceptors) {
                    console.debug("interceptor:%o", interceptors[i]);
                    if(!interceptors[i].process(data, views)) {
                        break;
                    }
                }
            }, function(xhr, type) {
                console.error('xhr : %o', xhr);
                console.error('type : %o', type);
                //缓存里如果存在，读取缓存中的?????
                //error处理
                for(i in views) {
                    views[i].error(this);
                }
            });
        }
        ,notifyView:function(_paras, _views, _errorCallBack) {//请求后通知试图
            if(arguments.length === 1) {
                this.request(_paras);
            } else if(arguments.length === 2) {
                this.request(_paras, _views);
            } else {
                this.request(_paras, _views, _errorCallBack);
            }
        }
        ,callback:function(_paras, _callback, _errorCallBack) {//请求后回调
            var paras=null, callback, errorCallBack;
            if(arguments.length === 1) {//callback(callback)
                callback = _paras;
            } else if(arguments.length === 2) {
                if(typeof _paras === "function") {//callback(callback, errorCallBack)
                    callback = _paras;
                    errorCallBack = _callback;
                } else {//callback(paras, callback);
                    paras = _paras;
                    callback = _callback;
                }
            } else {
                paras = _paras;
                callback = _callback;
                errorCallBack = _errorCallBack;
            }
            //校验数据
            if(errorCallBack) {
                if(!this.confirm(paras, errorCallBack)) {
                    return ;
                }
            }
            //请求数据
            this.getResult(paras, function(data) {//回调
                callback.call(this, data);
            },function(xhr, type) {//错误处理
                console.error('xhr : %o', xhr);
                console.error('xhr : %o', type);
                if(errorCallBack) {
                    errorCallBack.call(this, {error:xhr});
                }
            });
        }
    };
    spa.model = {
        Model : function(){},
        create: function (o, parentModel) {
            var _parentModel = model;
            if(arguments.length == 2) {
                _parentModel = parentModel
            }
            return spa.lang.extend(o, _parentModel, this.Model);
        }
    };
    /**
     * 简单数据模型，不需要访问网络
     *
     * @type {*}
     */
    spa.model.simpleModel = spa.model.create({
        getData:function() {
            return {};
        }
        ,getResult:function(paras, success, error) {
            var data = this.getData();
            success.call(this, data);
        }
    });

    return spa;
}((SPA || {}), this));