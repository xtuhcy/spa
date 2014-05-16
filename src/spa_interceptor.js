/**
 * Created by huchengyi on 14-4-17.
 */
var SPA = (function (spa, global) {
    var interceptor = {
        process:function(data, views) {

        }
    };
    spa.interceptor = {
        Interceptor : function(){}
        ,create:function(o) {
            return spa.lang.extend(o, interceptor, this.Interceptor);
        }
    };
    //全局的拦截器
    spa.interceptor.viewsInterceptor = spa.interceptor.create({
        process:function(data, views) {
            for(var i in views) {
                views[i].show(data);
            }
            return true;
        }
    });
    return spa;
}((SPA || {}), this));