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
                    var extendObject = new _funcType();
                    extendObject._super = _parent;
                    return extendObject;
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
            var hash = location.hash;
            if(hash !== '') {
                hash = hash.substr(1);
            }
            return hash;
        }
        ,cookie:{
            get:function(cName){
                if(document.cookie.length>0){
                    cStart=document.cookie.indexOf(cName + "=");
                    if(cStart!=-1){
                        cStart=cStart + cName.length+1;
                        cEnd=document.cookie.indexOf(";",cStart);
                        if(cEnd==-1) cEnd=document.cookie.length;
                        return document.cookie.substring(cStart,cEnd);
                    }else{
                        return "";
                    }
                }
            }
            ,set:function(c_name,cValue,cExpires,accessPath){
                var exp = new Date();
                exp.setTime(exp.getTime() + cExpires);
                document.cookie = c_name+"="+escape(cValue)+";expires="+exp.toUTCString()+";path=/;domain=."+accessPath;
            }
            ,getDomain:function(){
                var currentUrl = SPA.lang.cookie.getCorrentURL();
                currentUrl = currentUrl.replace(/[^\.]+./,'')
                var urlArray = currentUrl.split('/');
                return urlArray[0];
            }
            ,getCorrentURL:function(){
                var currentUrl=window.location.href;
                if(currentUrl !=null && currentUrl.length>0 && currentUrl.charAt(currentUrl.length-1)=="#"){
                    currentUrl=currentUrl.substring(0,currentUrl.length-1);
                }
                return currentUrl;
            }
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
            ,getRandomString:function(len){
                len = len || 32;
                var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
                var maxPos = $chars.length;
                var pwd = '';
                for (i = 0; i < len; i++) {
                    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
                }
                return pwd;
            }
            ,getParm:function(parm,str){
                if(str.indexOf(parm)>0){
                    var start=str.indexOf(parm);
                    var newString=str.substring(start+1);
                    var end=newString.indexOf('/');
                    if(end==-1){
                        return str.substring(start+1);
                    }else{
                        return str.substring(start+1,start+1+end);
                    };
                }else{
                    return '';
                };
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
        ,date:{
            curDate:function() {
                var curDate=new Date();
                var month=curDate.getMonth()+1;
                if(month<10) month='0'+(month+1);
                var day=curDate.getDate();
                if(day<10) day='0'+day;
                curDate=curDate.getFullYear()+'-'+month+'-'+day;
                return curDate;
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
        },popBox:function(content,time){
            if($('#popBox').length==0){
                var pop=$('<div>'+content+'</div>');
                pop.attr('id','popBox');
                pop.css({'width':'80%','padding':'10px 0','textAlign':'center','background':'rgba(0,0,0,0.5)','color':'#fff','borderRadius':'5px','margin':'0 10%','position':'absolute','top':'40%','zIndex':'1000'});
                $('body').append(pop);
                setTimeout(function(){$(pop).remove()},time*1000);
            }
        },isUndefined:function(v) {
            return (typeof(v) === 'undefined');
        }
    };
    return spa;
}((SPA || {}), this));