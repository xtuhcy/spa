/**
 * Created by huchengyi on 14-5-16.
 */

var SPA = (function (spa, global) {

    spa.localStorage = {
        set:function(key, value, expired) {
            if(value) {
                var currTime = new Date().getTime();
                value.__expried__ = currTime +expired;
                var jsonStr = JSON.stringify(value);
                global.localStorage.setItem(key, jsonStr);
            }
        }
        ,get:function(key) {
            var jsonStr = global.localStorage.getItem(key);
            if(jsonStr) {
                var jsonObj = JSON.parse(jsonStr);
                var expiredTime = jsonObj.__expried__;
                var currTime = new Date().getTime();
                if(currTime < expiredTime) {//未超时
                    return jsonObj;
                }
            }
            return null;
        }
    }

    return spa;
}((SPA || {}), this));