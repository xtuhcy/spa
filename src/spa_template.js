/**
 * Created by huchengyi on 14-4-11.
 */
var SPA = (function (spa, global) {
    spa.template = {
        render : function(id, data) {
            return template.render(id, data);
        }
        ,compile : function(id, tmpl) {
            if(id) {
                return template.compile(id, tmpl);
            } else {
                return template.compile(tmpl);
            }
        }
    }
    return spa;
}((SPA || {}), this));