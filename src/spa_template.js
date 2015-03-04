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
    /**
     * 对日期进行格式化，
     * @param date 要格式化的日期
     * @param format 进行格式化的模式字符串
     *     支持的模式字母有：
     *     y:年,
     *     M:年中的月份(1-12),
     *     d:月份中的天(1-31),
     *     h:小时(0-23),
     *     m:分(0-59),
     *     s:秒(0-59),
     *     S:毫秒(0-999),
     *     q:季度(1-4)
     * @return String
     * @author yanis.wang
     * @see	http://yaniswang.com/frontend/2013/02/16/dateformat-performance/
     */
    template.helper('dateFormat', function (date, format) {
        return spa.lang.date.format(date, format);
    });

    template.helper('week', function(millisec) {
        var week = "";
        var date = new Date();
        date.setTime(millisec);
        if(date.getDay()==0) {
            week="星期日";
        } else if(date.getDay()==1) {
            week="星期一";
        } else if(date.getDay()==2) {
            week="星期二";
        } else if(date.getDay()==3) {
            week="星期三";
        } else if(date.getDay()==4) {
            week="星期四";
        } else if(date.getDay()==5) {
            week="星期五";
        } else if(date.getDay()==6) {
            week="星期六";
        }
        return week;
    });
    return spa;
}((SPA || {}), this));