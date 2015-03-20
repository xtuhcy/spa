# spajs

单页应用MVC框架

依赖zepto和artTemplate，已经将zepto和artTemplate编译进项目中.

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
3. 对数据的拦截处理
4. 数据获取后的回调

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
如果model的数据不是通过ajax获得，而是来自本地的一些数据，可以继承自SPA.model.simpleModel，重写getData方法，返回需要的数据。

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
2. 视图定义
3. 视图渲染方法render(data)
4. 数据加载中渲染方法loading()
5. 数据获取错误渲染方法error(model)
6. 事件处理

####模板语言artTemplate

1. 本地模板定义：本地模板定义在页面中，如下：
```html
    <script id="book" type="text/html">
    <ul class="list">
        <%for(i = 0; i < list.length; i ++) {%>
        <li id="<%=i%>" class="book"><%=list[i]%></li>
        <%}%>
    </ul>
    </script>
```

2.远程模板定义：模板可以按需从远程下载

####视图定义
1.本地视图定义
    页面中加入：
    <script id="book" type="text/html">
    <ul class="list">
        <%for(i = 0; i < list.length; i ++) {%>
        <li id="<%=i%>" class="book"><%=list[i]%></li>
        <%}%>
    </ul>
    </script>
    定义视图对象：
    ajh.bookView = SPA.view.create({
        templateId:"book"
    });
2.远程视图定义
    将模板内容放入template文件下，book.html
    ajh.bookView = SPA.view.create({
        template:"template/book.html"
    });

##view和model的结合使用
    model1.notifyView({parametes}, [view1, view2])

    model1.callback({parameters}, function(data){

    }, function(error){

    });
## Examples
    http://cs.i139.cn/aijuhui/aijuhui/dist/index.html

## Contributing
    memory.hu

## License
Copyright (c) 2014 huchengyi  
Licensed under the MIT license.
