/**
 * Created by huchengyi on 14-4-20.
 */

var SPA = (function(spa, globals) {

    var validator = {
        notEmpty : function(src) {
            return spa.lang.string.notEmpty(src)
        }
        ,isNumber:function(src) {
            return spa.lang.string.isNumber(src);
        }
        ,min:function(src, min) {
            if(this.isNumber(src)) {
                if(src >= min) {
                    return true;
                }
            }
            return false;
        }
        ,max:function(src, max) {
            if(this.isNumber(src)) {
                if(src <= max) {
                    return true;
                }
            }
            return false;
        }
        ,minLength:function(src, len) {
            return src.length >= len;
        }
        ,maxLength:function(src, len) {
            return src.length <= len;
        }
        ,email:function(src) {
            if(SPA.lang.string.notEmpty(src)){
                var patterns = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
                return patterns.test(src);
            }
            return false;
        }
        ,check:function(o, validate) {
            for(var prop in validate) {//遍历属性
                var validator = validate[prop];
                for(var validFuncName in validator) {//遍历校验规则
                    var parasAndMessage = validator[validFuncName];
                    var src = o[prop];
                    var paras = [src];
                    if(parasAndMessage.hasOwnProperty("params")) {
                        spa.lang.array.pushArray(paras, parasAndMessage.params);
                    }
                    if(this.getValidFunc(validFuncName).apply(this, paras) === false) {
                        var ret = {};
                        ret[prop] = parasAndMessage.message;
                        return ret;
                    }
                }
            }
            return null;
        }
        ,getValidFunc:function(name) {
            for(var prop in this) {
                if(prop === name) {
                    return this[prop];
                }
            }
        }
    }

    spa.validator = {
        Validator : function(){}
        ,create : function(o) {
            return spa.lang.extend(o, validator, this.Validator);
        }
    }

    spa.validator.defaultValidator=spa.validator.create({});

    return spa;
})((SPA || {}), this)