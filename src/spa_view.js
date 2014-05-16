/*
 * spa_view
 * https://github.com/huchengyi/spa_view
 *
 * Copyright (c) 2014 huchengyi
 * Licensed under the MIT license.
 */

var SPA = (function (spa, global) {
    var view = {
        templateId: "",//视图模板id
        //container: "",//视图容器
        events: null,//视图包含的事件
        render: function (data) {
            var html;
            if (arguments.length === 1) {
                html = spa.template.render(this.templateId, data);
            } else {
                html = $("#"+this.templateId).html();
            }
            $(this.container).html(html);
        },
        show: function (data) {
            if (arguments.length === 1) {
                this.render(data);
            } else if (arguments.length === 0) {
                this.render();
            }
        },
        remove:function() {
            $(this.container).html("");
        },
        loading: function () {
            //显示加载中
            //$(this.container).html('load...');
        },
        error: function (model) {
            //加载失败
            //$(this.container).html('网络错误');
        }
        ,bindEvents:function() {
            //处理事件监听
            var elementEvents, elSelector, events, eventName;
            elementEvents = this.events;//视图定义的所有事件
            for (elSelector in elementEvents) {//需要监听的元素
                events = elementEvents[elSelector];
                for (eventName in events) {//事件
                    //$(newView.container).off(eventName, elSelector);
                    $(this.container).on(eventName, elSelector, events[eventName]);
                    console.debug("add event to " + this.container + " " +elSelector + ":" + eventName);
                }
            }
        }
    };
    spa.view = {
        //视图类型
        View: function () {
        },
        //创建一个视图
        create: function (o, parentView) {
            var _parentView = view;
            if (arguments.length == 2) {
                _parentView = parentView
            }
            var newView = spa.lang.extend(o, _parentView, this.View);
            newView.bindEvents();
            return newView;
        }

    };
    return spa;
}((SPA || {}), this));