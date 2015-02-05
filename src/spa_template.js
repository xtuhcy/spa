/**
 * Created by huchengyi on 14-4-11.
 */
var SPA = (function (spa, global) {
    spa.template = {
        render : function(id, data) {
            return template.render(id, data);
        }
        ,compile : function(id, tmpl) {
            return template.compile(id, tmpl);
        }
    }
    return spa;
}((SPA || {}), this));