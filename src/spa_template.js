/**
 * Created by huchengyi on 14-4-11.
 */
var SPA = (function (spa, global) {
    spa.template = {
        render : function(id, data) {
            return template.render(id, data);
        }
    }
    return spa;
}((SPA || {}), this));