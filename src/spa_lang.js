/*
 * spa_lang
 * https://github.com/huchengyi/spa_lang
 *
 * Copyright (c) 2014 huchengyi
 * Licensed under the MIT license.
 */

var SPA = (function (spa, global) {
    spa.lang = {
        /**
         * 属性复制
         *
         * @param dist 目标对象
         * @param src 原对象
         */
        copyProperty: function (dist, src) {
            for (prop in src) {
                dist[prop] = src[prop];
            }
        },
        extend: function (child, parent, funcType) {
            var _child, _parent, _funcType;
            if (arguments.length === 1) {//extend(parent)
                _parent = child;
                function F() {};
                return this.extend(_parent, F);
            } else if (arguments.length === 2) {
                if (typeof arguments[1] === 'function') {//extend(parent, funcType)
                    _parent = child;
                    _funcType = parent;
                    _funcType.prototype = _parent;
                    return new _funcType();
                } else {//extend(child, parent)
                    _child = child;
                    _parent = parent;
                    var o = this.extend(_parent);
                    this.copyProperty(o, _child);
                    return o;
                }
            } else {
                _child = child;
                _parent = parent;
                _funcType = funcType;
                var o = this.extend(_parent, _funcType);
                this.copyProperty(o, _child);
                return o;
            }
        },
        strictExtend: function (childFunction, parentFunction) {
            var prototype = this.extend(parentFunction.prototype);
            prototype.constructor = child;
            childFunction.prototype = prototype;
        },
        sleep: function (n) {
            var start = new Date().getTime();
            while (true) if (new Date().getTime() - start > n) break;
        }
        ,getUrlHash:function(){
            return location.hash.substr(1);
        }
        ,string : {
            notEmpty:function(str) {
                if(str !== null && str !== "") {
                    return true;
                }
                return false;
            }
            ,isEmpty:function(str) {
                return !this.notEmpty(str);
            }
            ,substringBefore:function(str, split) {
                var idx = str.indexOf(split);
                if(idx > 0) {
                    return str.substr(0, idx);
                } else {
                    return str;
                }
            }
            ,substringAfter:function(str, split) {
                var idx = str.indexOf(split);
                if(idx > 0) {
                    return str.substr(idx + 1, str.length);
                } else {
                    return str;
                }
            }
            ,startsWith: function(str, starts){
                if (starts === '') return true;
                if (str == null || starts == null) return false;
                str = String(str); starts = String(starts);
                return str.length >= starts.length && str.slice(0, starts.length) === starts;
            }
            ,endsWith: function(str, ends){
                if (ends === '') return true;
                if (str == null || ends == null) return false;
                str = String(str); ends = String(ends);
                return str.length >= ends.length && str.slice(str.length - ends.length) === ends;
            }
            ,isNumber:function(input){
                var RE = /^-{0,1}\d*\.{0,1}\d+$/;
                return (RE.test(input));
            }
        }
        ,array:{
            pushArray:function(srcArray, destArray) {//[1, 2], [3, 4]=[1,2,3,4]
                for(var i in destArray) {
                    srcArray.push(destArray[i]);
                }
            }
            ,unshiftArray:function(srcArray, destArray) {//[1,2], [3,4]=[3,4,1,2]
                for(var i = (destArray.length - 1); i>=0; i--) {
                    srcArray.unshift(destArray[i]);
                }
            }
        }
        ,jsonToUrl:function(json){//将json格式数据转换为url
            var url = "";
            for(var prop in json) {
                var tmp = prop + "=" + json[prop] + "&";
                url += tmp;
            }
            if(url.length > 1) {
                return url.substr(0, url.length - 1);//去掉最后一个&
            } else {
                return url;
            }
        }
    };
    return spa;
}((SPA || {}), this));