/**
 * Created by huchengyi on 14-4-11.
 * 控制层：
 * 根据url的hash
 */
var SPA = (function (spa, global) {
    var _config, _routers;
    var matchRouter = function(router, hash) {
        var routerPattern = /\*\w+|(\w*?):(\w+)/g;
        var paramValue=[];
        var hashPattern = new RegExp("^"+router.replace(routerPattern, "$1(\\\S*)")+"$");
        var hashValues = hash.match(hashPattern);
        if (hashValues != null) {
            for (var j = 1; j < hashValues.length; j++) {
                paramValue[j-1]=hashValues[j];
            }
        }
        return {
            match:hashValues != null
            ,params:paramValue
        };
    };
    var onchange = function(event) {
        var hash = spa.lang.getUrlHash();
        console.debug("hash : %s, event : %o", hash, event);
        var hasMatch = false;
        for(var router in _routers) {
            var matchParams = matchRouter(router, hash);
            if(matchParams.match) {
                _routers[router].apply(spa.controller, matchParams.params);
                hasMatch = true;
                //break;
            }
        }
        if(!hasMatch && !SPA.lang.isUndefined(_config.main)) {
            _routers[_config.main].apply(spa.controller, matchParams.params);
        }
    };
    spa.controller = {
        config:function(config) {
            _config = config;
        }
        ,main:function() {
            if(_config && _config.main) {
                this.jump(_config.main);
            }
        }
        ,listener: function(router) {
            var that = this;
            $(document).ready(function() {
                if(_config && _config.ready) {
                    _config.ready();//全局初始化函数
                }
                if(_config && _config.bindViews) {
                    var bindViews = _config.bindViews;
                    for(var container in bindViews) {
                        var views = bindViews[container];
                        for(var i in views) {
                            views[i].container = container;
                            views[i].bindEvents();
                        }
                    }
                    /*var hash = spa.lang.getUrlHash();
                    if(hash !== _config.main) {//当前hash不是入口
                        that.jump(_config.main + "/" + hash);
                    } else {
                        onchange();
                    }*/
                    onchange();
                }
            });
            _routers = router;
            /*document.addEventListener("load", onchange, false);*/
            global.addEventListener("hashchange", onchange, false);
        },
        jump:function(hash, append) {
            if(arguments.length == 2 && append) {
                location.hash += hash;
            } else {
                location.hash = "#" + hash;
            }
        }
    }
    return spa;
}((SPA || {}), this));