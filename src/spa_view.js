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
        width:0,
        height:0,
        //container: "",//视图容器
        events: null,//视图包含的事件
        render: function (data) {
            $(this.container).html(this.compileTemplate(data));
            this.width = $(this.container).width;
            this.height = $(this.container).height;
        },
        loadTemplate:function(success) {
            var that = this;
            if(this.template) {//编译远程模板
                $.get(this.template, function(tmpl){
                    that.compileTemplate = spa.template.compile(tmpl);
                    if(success) {
                        success.call(that);
                    }
                });
            } else {//编译本地模板
                var tmpl = $("#"+this.templateId).html();
                this.compileTemplate = spa.template.compile(tmpl);
                success.call(that);
            }
        },
        show: function (data) {
            if(!this.compileTemplate) {//编译模板
                var that = this;
                this.loadTemplate(function() {
                    if (data) {
                        that.render(data);
                    } else {
                        that.render();
                    }
                });
            } else {
                if (arguments.length === 1) {
                    this.render(data);
                } else if (arguments.length === 0) {
                    this.render();
                }
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