/**
 * Created by huchengyi on 14-5-16.
 * 利用本地存储作为ajax请求数据的缓存
 *
 */

var SPA = (function (spa, global) {

    spa.localStorage = {
        set:function(key, value, expired) {
            if(value) {
                if(expired) {
                    var currTime = new Date().getTime();
                    value.__expried__ = currTime +expired;
                }
                var jsonStr = JSON.stringify(value);
                global.localStorage.setItem(key, jsonStr);
            }
        }
        ,get:function(key) {
            var jsonStr = global.localStorage.getItem(key);
            if(jsonStr) {//缓存对象存在
                var jsonObj = JSON.parse(jsonStr);
                var expiredTime = jsonObj.__expried__;
                if(expiredTime) {//如果有超时时间
                    var currTime = new Date().getTime();
                    if(currTime < expiredTime) {//未超时
                        return jsonObj;
                    } else {//对象存在但是超时,undifend
                        return;
                    }
                } else {//如果没有超时时间表示永久不超时
                    return jsonObj;
                }
            }
            return null;
        }
    }

    return spa;
}((SPA || {}), this));