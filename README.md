# spajs

单页应用MVC框架

依赖zepto和artTemplate，已经将zepto和artTemplate编译进项目中.
0.2.6之前采用artTemplate2.x
0.3.0开始采用artTempate3.x使用简洁语法

## 下载和使用
### 下载
    npm install --save-dev spajs.js

### 使用
    <script src="dist/spajs.min.js"></script>

## 使用手册
###Model-和数据相关的都放这里
model负责数据处理，所有和数据相关的业务逻辑都放在这里，model关心的几个要点:

1. 数据怎么获取
2. 请求参数的校验
3. 数据获取后的回调

####创建一个典型的ajax的model
    var mainModel = SPA.model.create({
        server: "http://host:port/remoting/main"
    });

上面是创建一个典型的利用ajax获取服务器端数据的model，数据接口地址http://host:port/remoting/main

####model的继承
    var parentModel = SPA.model.create({
        server: "http://host:port/remoting"
    });

    var demoModel = SPA.model.create({
            tagName: "demo"
        }, parentModel);

1. parentModel是指定一个sever为http://host:port/remoting的基类
2. demoModel继承parentModel,demoModel最终会访问http://host:port/remoting/demo接口

####简单model
    menuModel = SPA.model.create({
        getData:function() {
            return {
                menu1:"菜单1"
                ,menu2:"菜单2"
            }
        }
    }, SPA.model.simpleModel);
上面的model数据来源于本地定义的变量，继承自SPA.model.simpleModel

####本地存储model
_(Coming soon)_

####数据校验
    loginModel = SPA.model.create({
        server:"http://host:port/remoting/login"
        ,validate:{
            email:{
                email:{
                    message:"必须是邮箱"
                }
            }
            ,password:{
                minLength:{
                    params:[6]
                    ,message:"长度不能小于6"
                }
                ,maxLength:{
                    params:[12]
                    ,message:"长度不能大于12"
                }
            }
        }
    });
    loginModel.request({
        email:"test@test.com"
        ,password:"123456"
    }, function(error) {
        if(error.email) {
            console.error(error.email);
        } else if(error.password) {
            console.error(error.password);
        }
    })

上面对登录的邮箱和密码输入进行校验，目前内置的校验规则有：

1. notEmpty
2. isNumber
3. min
4. max
5. minLength
6. maxLength
7. email

####数据获取后的回调
spa框架对数据获取后的回调是基于过滤器的设计

data->filter1(callback)->filter2(callback)……

```javascript

    loginInterceptor = SPA.interceptor.create({
        process:function(data, views) {
            return true;
        }
    });
```

上面是创建一个过滤器，data为返回的数据，views为需要通知的视图。返回true会传递到下一个过滤器，返回false则不再传递

```javascript

    spa.interceptor.viewsInterceptor = spa.interceptor.create({
        process:function(data, views) {
            for(var i in views) {
                views[i].show(data);
            }
            return true;
        }
    });
```

上面是spa框架内置的视图回调过滤器，默认情况都会调用该过滤器。该过滤器会将数据通知各个视图进行显示。

```javascript

    baseModel = SPA.model.create({
        server:"remoting"
        ,interceptors:[loginInterceptor, SPA.interceptor.viewsInterceptor]
    });
```

上面在定义model时加入了2个过滤器

###View-和界面相关的都放这里
view负责界面的渲染，目前采用artTemplate作为模板语言，view关心的几个要点：

1. 模板语言artTemplate
2. 视图渲染方法render(data)
3. 数据加载中渲染方法loading()
4. 数据获取错误渲染方法error(model)
5. 事件处理

####模板语言artTemplate

1. 创建模板

```html

    <script id="book" type="text/html">
    <ul class="list">
        <%for(i = 0; i < list.length; i ++) {%>
        <li id="<%=i%>" class="book"><%=list[i]%></li>
        <%}%>
    </ul>
    </script>
```



## Examples
_(Coming soon)___

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

_Also, please don't edit files in the "dist" subdirectory as they are generated via Grunt. You'll find source code in the "lib" subdirectory!_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 huchengyi  
Licensed under the MIT license.
