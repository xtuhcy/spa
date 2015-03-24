/*! spajs - v0.3.1 - 2015-03-24
* Copyright (c) 2015 memory;*/
(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===a&&(Array.prototype.reduce=function(b){if(this===void 0||this===null)throw new TypeError;var c=Object(this),d=c.length>>>0,e=0,f;if(typeof b!="function")throw new TypeError;if(d==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)f=arguments[1];else do{if(e in c){f=c[e++];break}if(++e>=d)throw new TypeError}while(!0);while(e<d)e in c&&(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function E(a){return a==null?String(a):y[z.call(a)]||"object"}function F(a){return E(a)=="function"}function G(a){return a!=null&&a==a.window}function H(a){return a!=null&&a.nodeType==a.DOCUMENT_NODE}function I(a){return E(a)=="object"}function J(a){return I(a)&&!G(a)&&a.__proto__==Object.prototype}function K(a){return a instanceof Array}function L(a){return typeof a.length=="number"}function M(a){return g.call(a,function(a){return a!=null})}function N(a){return a.length>0?c.fn.concat.apply([],a):a}function O(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function P(a){return a in j?j[a]:j[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function Q(a,b){return typeof b=="number"&&!l[O(a)]?b+"px":b}function R(a){var b,c;return i[a]||(b=h.createElement(a),h.body.appendChild(b),c=k(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),c=="none"&&(c="block"),i[a]=c),i[a]}function S(a){return"children"in a?f.call(a.children):c.map(a.childNodes,function(a){if(a.nodeType==1)return a})}function T(c,d,e){for(b in d)e&&(J(d[b])||K(d[b]))?(J(d[b])&&!J(c[b])&&(c[b]={}),K(d[b])&&!K(c[b])&&(c[b]=[]),T(c[b],d[b],e)):d[b]!==a&&(c[b]=d[b])}function U(b,d){return d===a?c(b):c(b).filter(d)}function V(a,b,c,d){return F(b)?b.call(a,c,d):b}function W(a,b,c){c==null?a.removeAttribute(b):a.setAttribute(b,c)}function X(b,c){var d=b.className,e=d&&d.baseVal!==a;if(c===a)return e?d.baseVal:d;e?d.baseVal=c:b.className=c}function Y(a){var b;try{return a?a=="true"||(a=="false"?!1:a=="null"?null:isNaN(b=Number(a))?/^[\[\{]/.test(a)?c.parseJSON(a):a:b):a}catch(d){return a}}function Z(a,b){b(a);for(var c in a.childNodes)Z(a.childNodes[c],b)}var a,b,c,d,e=[],f=e.slice,g=e.filter,h=window.document,i={},j={},k=h.defaultView.getComputedStyle,l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},m=/^\s*<(\w+|!)[^>]*>/,n=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,o=/^(?:body|html)$/i,p=["val","css","html","text","data","width","height","offset"],q=["after","prepend","before","append"],r=h.createElement("table"),s=h.createElement("tr"),t={tr:h.createElement("tbody"),tbody:r,thead:r,tfoot:r,td:s,th:s,"*":h.createElement("div")},u=/complete|loaded|interactive/,v=/^\.([\w-]+)$/,w=/^#([\w-]*)$/,x=/^[\w-]+$/,y={},z=y.toString,A={},B,C,D=h.createElement("div");return A.matches=function(a,b){if(!a||a.nodeType!==1)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=D).appendChild(a),d=~A.qsa(e,b).indexOf(a),f&&D.removeChild(a),d},B=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},C=function(a){return g.call(a,function(b,c){return a.indexOf(b)==c})},A.fragment=function(b,d,e){b.replace&&(b=b.replace(n,"<$1></$2>")),d===a&&(d=m.test(b)&&RegExp.$1),d in t||(d="*");var g,h,i=t[d];return i.innerHTML=""+b,h=c.each(f.call(i.childNodes),function(){i.removeChild(this)}),J(e)&&(g=c(h),c.each(e,function(a,b){p.indexOf(a)>-1?g[a](b):g.attr(a,b)})),h},A.Z=function(a,b){return a=a||[],a.__proto__=c.fn,a.selector=b||"",a},A.isZ=function(a){return a instanceof A.Z},A.init=function(b,d){if(!b)return A.Z();if(F(b))return c(h).ready(b);if(A.isZ(b))return b;var e;if(K(b))e=M(b);else if(I(b))e=[J(b)?c.extend({},b):b],b=null;else if(m.test(b))e=A.fragment(b.trim(),RegExp.$1,d),b=null;else{if(d!==a)return c(d).find(b);e=A.qsa(h,b)}return A.Z(e,b)},c=function(a,b){return A.init(a,b)},c.extend=function(a){var b,c=f.call(arguments,1);return typeof a=="boolean"&&(b=a,a=c.shift()),c.forEach(function(c){T(a,c,b)}),a},A.qsa=function(a,b){var c;return H(a)&&w.test(b)?(c=a.getElementById(RegExp.$1))?[c]:[]:a.nodeType!==1&&a.nodeType!==9?[]:f.call(v.test(b)?a.getElementsByClassName(RegExp.$1):x.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},c.contains=function(a,b){return a!==b&&a.contains(b)},c.type=E,c.isFunction=F,c.isWindow=G,c.isArray=K,c.isPlainObject=J,c.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.camelCase=B,c.trim=function(a){return a.trim()},c.uuid=0,c.support={},c.expr={},c.map=function(a,b){var c,d=[],e,f;if(L(a))for(e=0;e<a.length;e++)c=b(a[e],e),c!=null&&d.push(c);else for(f in a)c=b(a[f],f),c!=null&&d.push(c);return N(d)},c.each=function(a,b){var c,d;if(L(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.grep=function(a,b){return g.call(a,b)},window.JSON&&(c.parseJSON=JSON.parse),c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){y["[object "+b+"]"]=b.toLowerCase()}),c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,sort:e.sort,indexOf:e.indexOf,concat:e.concat,map:function(a){return c(c.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return u.test(h.readyState)?a(c):h.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b>=0?b:b+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return e.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return F(a)?this.not(this.not(a)):c(g.call(this,function(b){return A.matches(b,a)}))},add:function(a,b){return c(C(this.concat(c(a,b))))},is:function(a){return this.length>0&&A.matches(this[0],a)},not:function(b){var d=[];if(F(b)&&b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e=typeof b=="string"?this.filter(b):L(b)&&F(b.item)?f.call(b):c(b);this.forEach(function(a){e.indexOf(a)<0&&d.push(a)})}return c(d)},has:function(a){return this.filter(function(){return I(a)?c.contains(this,a):c(this).find(a).size()})},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!I(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!I(a)?a:c(a)},find:function(a){var b,d=this;return typeof a=="object"?b=c(a).filter(function(){var a=this;return e.some.call(d,function(b){return c.contains(b,a)})}):this.length==1?b=c(A.qsa(this[0],a)):b=this.map(function(){return A.qsa(this,a)}),b},closest:function(a,b){var d=this[0],e=!1;typeof a=="object"&&(e=c(a));while(d&&!(e?e.indexOf(d)>=0:A.matches(d,a)))d=d!==b&&!H(d)&&d.parentNode;return c(d)},parents:function(a){var b=[],d=this;while(d.length>0)d=c.map(d,function(a){if((a=a.parentNode)&&!H(a)&&b.indexOf(a)<0)return b.push(a),a});return U(b,a)},parent:function(a){return U(C(this.pluck("parentNode")),a)},children:function(a){return U(this.map(function(){return S(this)}),a)},contents:function(){return this.map(function(){return f.call(this.childNodes)})},siblings:function(a){return U(this.map(function(a,b){return g.call(S(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return c.map(this,function(b){return b[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),k(this,"").getPropertyValue("display")=="none"&&(this.style.display=R(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var b=F(a);if(this[0]&&!b)var d=c(a).get(0),e=d.parentNode||this.length>1;return this.each(function(f){c(this).wrapAll(b?a.call(this,f):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){c(this[0]).before(a=c(a));var b;while((b=a.children()).length)a=b.first();c(a).append(this)}return this},wrapInner:function(a){var b=F(a);return this.each(function(d){var e=c(this),f=e.contents(),g=b?a.call(this,d):a;f.length?f.wrapAll(g):e.append(g)})},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(b){return this.each(function(){var d=c(this);(b===a?d.css("display")=="none":b)?d.show():d.hide()})},prev:function(a){return c(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return c(this.pluck("nextElementSibling")).filter(a||"*")},html:function(b){return b===a?this.length>0?this[0].innerHTML:null:this.each(function(a){var d=this.innerHTML;c(this).empty().append(V(this,b,a,d))})},text:function(b){return b===a?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return typeof c=="string"&&d===a?this.length==0||this[0].nodeType!==1?a:c=="value"&&this[0].nodeName=="INPUT"?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(this.nodeType!==1)return;if(I(c))for(b in c)W(this,b,c[b]);else W(this,c,V(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.nodeType===1&&W(this,a)})},prop:function(b,c){return c===a?this[0]&&this[0][b]:this.each(function(a){this[b]=V(this,c,a,this[b])})},data:function(b,c){var d=this.attr("data-"+O(b),c);return d!==null?Y(d):a},val:function(b){return b===a?this[0]&&(this[0].multiple?c(this[0]).find("option").filter(function(a){return this.selected}).pluck("value"):this[0].value):this.each(function(a){this.value=V(this,b,a,this.value)})},offset:function(a){if(a)return this.each(function(b){var d=c(this),e=V(this,a,b,d.offset()),f=d.offsetParent().offset(),g={top:e.top-f.top,left:e.left-f.left};d.css("position")=="static"&&(g.position="relative"),d.css(g)});if(this.length==0)return null;var b=this[0].getBoundingClientRect();return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(a,c){if(arguments.length<2&&typeof a=="string")return this[0]&&(this[0].style[B(a)]||k(this[0],"").getPropertyValue(a));var d="";if(E(a)=="string")!c&&c!==0?this.each(function(){this.style.removeProperty(O(a))}):d=O(a)+":"+Q(a,c);else for(b in a)!a[b]&&a[b]!==0?this.each(function(){this.style.removeProperty(O(b))}):d+=O(b)+":"+Q(b,a[b])+";";return this.each(function(){this.style.cssText+=";"+d})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return e.some.call(this,function(a){return this.test(X(a))},P(a))},addClass:function(a){return this.each(function(b){d=[];var e=X(this),f=V(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&X(this,e+(e?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(c){if(b===a)return X(this,"");d=X(this),V(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(P(a)," ")}),X(this,d.trim())})},toggleClass:function(b,d){return this.each(function(e){var f=c(this),g=V(this,b,e,X(this));g.split(/\s+/g).forEach(function(b){(d===a?!f.hasClass(b):d)?f.addClass(b):f.removeClass(b)})})},scrollTop:function(){if(!this.length)return;return"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY},position:function(){if(!this.length)return;var a=this[0],b=this.offsetParent(),d=this.offset(),e=o.test(b[0].nodeName)?{top:0,left:0}:b.offset();return d.top-=parseFloat(c(a).css("margin-top"))||0,d.left-=parseFloat(c(a).css("margin-left"))||0,e.top+=parseFloat(c(b[0]).css("border-top-width"))||0,e.left+=parseFloat(c(b[0]).css("border-left-width"))||0,{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||h.body;while(a&&!o.test(a.nodeName)&&c(a).css("position")=="static")a=a.offsetParent;return a})}},c.fn.detach=c.fn.remove,["width","height"].forEach(function(b){c.fn[b]=function(d){var e,f=this[0],g=b.replace(/./,function(a){return a[0].toUpperCase()});return d===a?G(f)?f["inner"+g]:H(f)?f.documentElement["offset"+g]:(e=this.offset())&&e[b]:this.each(function(a){f=c(this),f.css(b,V(this,d,a,f[b]()))})}}),q.forEach(function(a,b){var d=b%2;c.fn[a]=function(){var a,e=c.map(arguments,function(b){return a=E(b),a=="object"||a=="array"||b==null?b:A.fragment(b)}),f,g=this.length>1;return e.length<1?this:this.each(function(a,h){f=d?h:h.parentNode,h=b==0?h.nextSibling:b==1?h.firstChild:b==2?h:null,e.forEach(function(a){if(g)a=a.cloneNode(!0);else if(!f)return c(a).remove();Z(f.insertBefore(a,h),function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&!a.src&&window.eval.call(window,a.innerHTML)})})})},c.fn[d?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),A.Z.prototype=c.fn,A.uniq=C,A.deserializeValue=Y,c.zepto=A,c}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(a){function b(a){var b=this.os={},c=this.browser={},d=a.match(/WebKit\/([\d.]+)/),e=a.match(/(Android)\s+([\d.]+)/),f=a.match(/(iPad).*OS\s([\d_]+)/),g=!f&&a.match(/(iPhone\sOS)\s([\d_]+)/),h=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),i=h&&a.match(/TouchPad/),j=a.match(/Kindle\/([\d.]+)/),k=a.match(/Silk\/([\d._]+)/),l=a.match(/(BlackBerry).*Version\/([\d.]+)/),m=a.match(/(BB10).*Version\/([\d.]+)/),n=a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),o=a.match(/PlayBook/),p=a.match(/Chrome\/([\d.]+)/)||a.match(/CriOS\/([\d.]+)/),q=a.match(/Firefox\/([\d.]+)/);if(c.webkit=!!d)c.version=d[1];e&&(b.android=!0,b.version=e[2]),g&&(b.ios=b.iphone=!0,b.version=g[2].replace(/_/g,".")),f&&(b.ios=b.ipad=!0,b.version=f[2].replace(/_/g,".")),h&&(b.webos=!0,b.version=h[2]),i&&(b.touchpad=!0),l&&(b.blackberry=!0,b.version=l[2]),m&&(b.bb10=!0,b.version=m[2]),n&&(b.rimtabletos=!0,b.version=n[2]),o&&(c.playbook=!0),j&&(b.kindle=!0,b.version=j[1]),k&&(c.silk=!0,c.version=k[1]),!k&&b.android&&a.match(/Kindle Fire/)&&(c.silk=!0),p&&(c.chrome=!0,c.version=p[1]),q&&(c.firefox=!0,c.version=q[1]),b.tablet=!!(f||o||e&&!a.match(/Mobile/)||q&&a.match(/Tablet/)),b.phone=!b.tablet&&!!(e||g||h||l||m||p&&a.match(/Android/)||p&&a.match(/CriOS\/([\d.]+)/)||q&&a.match(/Mobile/))}b.call(a,navigator.userAgent),a.__detect=b}(Zepto),function(a){function g(a){return a._zid||(a._zid=d++)}function h(a,b,d,e){b=i(b);if(b.ns)var f=j(b.ns);return(c[g(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||f.test(a.ns))&&(!d||g(a.fn)===g(d))&&(!e||a.sel==e)})}function i(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function j(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function k(b,c,d){a.type(b)!="string"?a.each(b,d):b.split(/\s/).forEach(function(a){d(a,c)})}function l(a,b){return a.del&&(a.e=="focus"||a.e=="blur")||!!b}function m(a){return f[a]||a}function n(b,d,e,h,j,n){var o=g(b),p=c[o]||(c[o]=[]);k(d,e,function(c,d){var e=i(c);e.fn=d,e.sel=h,e.e in f&&(d=function(b){var c=b.relatedTarget;if(!c||c!==this&&!a.contains(this,c))return e.fn.apply(this,arguments)}),e.del=j&&j(d,c);var g=e.del||d;e.proxy=function(a){var c=g.apply(b,[a].concat(a.data));return c===!1&&(a.preventDefault(),a.stopPropagation()),c},e.i=p.length,p.push(e),b.addEventListener(m(e.e),e.proxy,l(e,n))})}function o(a,b,d,e,f){var i=g(a);k(b||"",d,function(b,d){h(a,b,d,e).forEach(function(b){delete c[i][b.i],a.removeEventListener(m(b.e),b.proxy,l(b,f))})})}function t(b){var c,d={originalEvent:b};for(c in b)!r.test(c)&&b[c]!==undefined&&(d[c]=b[c]);return a.each(s,function(a,c){d[a]=function(){return this[c]=p,b[a].apply(b,arguments)},d[c]=q}),d}function u(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0,b.call(this)}}}var b=a.zepto.qsa,c={},d=1,e={},f={mouseenter:"mouseover",mouseleave:"mouseout"};e.click=e.mousedown=e.mouseup=e.mousemove="MouseEvents",a.event={add:n,remove:o},a.proxy=function(b,c){if(a.isFunction(b)){var d=function(){return b.apply(c,arguments)};return d._zid=g(b),d}if(typeof c=="string")return a.proxy(b[c],b);throw new TypeError("expected function")},a.fn.bind=function(a,b){return this.each(function(){n(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){o(this,a,b)})},a.fn.one=function(a,b){return this.each(function(c,d){n(this,a,b,null,function(a,b){return function(){var c=a.apply(d,arguments);return o(d,b,a),c}})})};var p=function(){return!0},q=function(){return!1},r=/^([A-Z]|layer[XY]$)/,s={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(b,c,d){return this.each(function(e,f){n(f,c,d,b,function(c){return function(d){var e,g=a(d.target).closest(b,f).get(0);if(g)return e=a.extend(t(d),{currentTarget:g,liveFired:f}),c.apply(g,[e].concat([].slice.call(arguments,1)))}})})},a.fn.undelegate=function(a,b,c){return this.each(function(){o(this,b,c,a)})},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d){return!c||a.isFunction(c)?this.bind(b,c||d):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return!c||a.isFunction(c)?this.unbind(b,c||d):this.undelegate(c,b,d)},a.fn.trigger=function(b,c){if(typeof b=="string"||a.isPlainObject(b))b=a.Event(b);return u(b),b.data=c,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,g){d=t(typeof b=="string"?a.Event(b):b),d.data=c,d.target=g,a.each(h(g,b.type||b),function(a,b){e=b.proxy(d);if(d.isImmediatePropagationStopped())return!1})}),e},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.each(function(){try{this[b]()}catch(a){}}),this}}),a.Event=function(a,b){typeof a!="string"&&(b=a,a=b.type);var c=document.createEvent(e[a]||"Events"),d=!0;if(b)for(var f in b)f=="bubbles"?d=!!b[f]:c[f]=b[f];return c.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null),c.isDefaultPrevented=function(){return this.defaultPrevented},c}}(Zepto),function($){function triggerAndReturn(a,b,c){var d=$.Event(b);return $(a).trigger(d,c),!d.defaultPrevented}function triggerGlobal(a,b,c,d){if(a.global)return triggerAndReturn(b||document,c,d)}function ajaxStart(a){a.global&&$.active++===0&&triggerGlobal(a,null,"ajaxStart")}function ajaxStop(a){a.global&&!--$.active&&triggerGlobal(a,null,"ajaxStop")}function ajaxBeforeSend(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||triggerGlobal(b,c,"ajaxBeforeSend",[a,b])===!1)return!1;triggerGlobal(b,c,"ajaxSend",[a,b])}function ajaxSuccess(a,b,c){var d=c.context,e="success";c.success.call(d,a,e,b),triggerGlobal(c,d,"ajaxSuccess",[b,c,a]),ajaxComplete(e,b,c)}function ajaxError(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),triggerGlobal(d,e,"ajaxError",[c,d,a]),ajaxComplete(b,c,d)}function ajaxComplete(a,b,c){var d=c.context;c.complete.call(d,b,a),triggerGlobal(c,d,"ajaxComplete",[b,c]),ajaxStop(c)}function empty(){}function mimeToDataType(a){return a&&(a=a.split(";",2)[0]),a&&(a==htmlType?"html":a==jsonType?"json":scriptTypeRE.test(a)?"script":xmlTypeRE.test(a)&&"xml")||"text"}function appendQuery(a,b){return(a+"&"+b).replace(/[&?]{1,2}/,"?")}function serializeData(a){a.processData&&a.data&&$.type(a.data)!="string"&&(a.data=$.param(a.data,a.traditional)),a.data&&(!a.type||a.type.toUpperCase()=="GET")&&(a.url=appendQuery(a.url,a.data))}function parseArguments(a,b,c,d){var e=!$.isFunction(b);return{url:a,data:e?b:undefined,success:e?$.isFunction(c)?c:undefined:b,dataType:e?d||c:c}}function serialize(a,b,c,d){var e,f=$.isArray(b);$.each(b,function(b,g){e=$.type(g),d&&(b=c?d:d+"["+(f?"":b)+"]"),!d&&f?a.add(g.name,g.value):e=="array"||!c&&e=="object"?serialize(a,g,c,b):a.add(b,g)})}var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(a){if("type"in a){var b="jsonp"+ ++jsonpID,c=document.createElement("script"),d=function(){clearTimeout(g),$(c).remove(),delete window[b]},e=function(c){d();if(!c||c=="timeout")window[b]=empty;ajaxError(null,c||"abort",f,a)},f={abort:e},g;return ajaxBeforeSend(f,a)===!1?(e("abort"),!1):(window[b]=function(b){d(),ajaxSuccess(b,f,a)},c.onerror=function(){e("error")},c.src=a.url.replace(/=\?/,"="+b),$("head").append(c),a.timeout>0&&(g=setTimeout(function(){e("timeout")},a.timeout)),f)}return $.ajax(a)},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host),settings.url||(settings.url=window.location.toString()),serializeData(settings),settings.cache===!1&&(settings.url=appendQuery(settings.url,"_="+Date.now()));var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.contentType!==!1&&settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty,clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:$.parseJSON(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,xhr.status?"error":"abort",xhr,settings)}};var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(a,b,c,d){return $.ajax(parseArguments.apply(null,arguments))},$.post=function(a,b,c,d){var e=parseArguments.apply(null,arguments);return e.type="POST",$.ajax(e)},$.getJSON=function(a,b,c){var d=parseArguments.apply(null,arguments);return d.dataType="json",$.ajax(d)},$.fn.load=function(a,b,c){if(!this.length)return this;var d=this,e=a.split(/\s/),f,g=parseArguments(a,b,c),h=g.success;return e.length>1&&(g.url=e[0],f=e[1]),g.success=function(a){d.html(f?$("<div>").html(a.replace(rscript,"")).find(f):a),h&&h.apply(d,arguments)},$.ajax(g),this};var escape=encodeURIComponent;$.param=function(a,b){var c=[];return c.add=function(a,b){this.push(escape(a)+"="+escape(b))},serialize(c,a,b),c.join("&").replace(/%20/g,"+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b=[],c;return a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&(d!="radio"&&d!="checkbox"||this.checked)&&b.push({name:c.attr("name"),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(a,b){function s(a){return t(a.replace(/([a-z])([A-Z])/,"$1-$2"))}function t(a){return a.toLowerCase()}function u(a){return d?d+a:t(a)}var c="",d,e,f,g={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},h=window.document,i=h.createElement("div"),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,k,l,m,n,o,p,q,r={};a.each(g,function(a,e){if(i.style[a+"TransitionProperty"]!==b)return c="-"+t(a)+"-",d=e,!1}),k=c+"transform",r[l=c+"transition-property"]=r[m=c+"transition-duration"]=r[n=c+"transition-timing-function"]=r[o=c+"animation-name"]=r[p=c+"animation-duration"]=r[q=c+"animation-timing-function"]="",a.fx={off:d===b&&i.style.transitionProperty===b,speeds:{_default:400,fast:200,slow:600},cssPrefix:c,transitionEnd:u("TransitionEnd"),animationEnd:u("AnimationEnd")},a.fn.animate=function(b,c,d,e){return a.isPlainObject(c)&&(d=c.easing,e=c.complete,c=c.duration),c&&(c=(typeof c=="number"?c:a.fx.speeds[c]||a.fx.speeds._default)/1e3),this.anim(b,c,d,e)},a.fn.anim=function(c,d,e,f){var g,h={},i,t="",u=this,v,w=a.fx.transitionEnd;d===b&&(d=.4),a.fx.off&&(d=0);if(typeof c=="string")h[o]=c,h[p]=d+"s",h[q]=e||"linear",w=a.fx.animationEnd;else{i=[];for(g in c)j.test(g)?t+=g+"("+c[g]+") ":(h[g]=c[g],i.push(s(g)));t&&(h[k]=t,i.push(k)),d>0&&typeof c=="object"&&(h[l]=i.join(", "),h[m]=d+"s",h[n]=e||"linear")}return v=function(b){if(typeof b!="undefined"){if(b.target!==b.currentTarget)return;a(b.target).unbind(w,v)}a(this).css(r),f&&f.call(this)},d>0&&this.bind(w,v),this.size()&&this.get(0).clientLeft,this.css(h),d<=0&&setTimeout(function(){u.each(function(){v.call(this)})},0),this},i=null}(Zepto)
/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
!function(){function a(a){return a.replace(t,"").replace(u,",").replace(v,"").replace(w,"").replace(x,"").split(y)}function b(a){return"'"+a.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function c(c,d){function e(a){return m+=a.split(/\n/).length-1,k&&(a=a.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),a&&(a=s[1]+b(a)+s[2]+"\n"),a}function f(b){var c=m;if(j?b=j(b,d):g&&(b=b.replace(/\n/g,function(){return m++,"$line="+m+";"})),0===b.indexOf("=")){var e=l&&!/^=[=#]/.test(b);if(b=b.replace(/^=[=#]?|[\s;]*$/g,""),e){var f=b.replace(/\s*\([^\)]+\)/,"");n[f]||/^(include|print)$/.test(f)||(b="$escape("+b+")")}else b="$string("+b+")";b=s[1]+b+s[2]}return g&&(b="$line="+c+";"+b),r(a(b),function(a){if(a&&!p[a]){var b;b="print"===a?u:"include"===a?v:n[a]?"$utils."+a:o[a]?"$helpers."+a:"$data."+a,w+=a+"="+b+",",p[a]=!0}}),b+"\n"}var g=d.debug,h=d.openTag,i=d.closeTag,j=d.parser,k=d.compress,l=d.escape,m=1,p={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},q="".trim,s=q?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],t=q?"$out+=text;return $out;":"$out.push(text);",u="function(){var text=''.concat.apply('',arguments);"+t+"}",v="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+t+"}",w="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(g?"$line=0,":""),x=s[0],y="return new String("+s[3]+");";r(c.split(h),function(a){a=a.split(i);var b=a[0],c=a[1];1===a.length?x+=e(b):(x+=f(b),c&&(x+=e(c)))});var z=w+x+y;g&&(z="try{"+z+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+b(c)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var A=new Function("$data","$filename",z);return A.prototype=n,A}catch(B){throw B.temp="function anonymous($data,$filename) {"+z+"}",B}}var d=function(a,b){return"string"==typeof b?q(b,{filename:a}):g(a,b)};d.version="3.0.0",d.config=function(a,b){e[a]=b};var e=d.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},f=d.cache={};d.render=function(a,b){return q(a,b)};var g=d.renderFile=function(a,b){var c=d.get(a)||p({filename:a,name:"Render Error",message:"Template not found"});return b?c(b):c};d.get=function(a){var b;if(f[a])b=f[a];else if("object"==typeof document){var c=document.getElementById(a);if(c){var d=(c.value||c.innerHTML).replace(/^\s*|\s*$/g,"");b=q(d,{filename:a})}}return b};var h=function(a,b){return"string"!=typeof a&&(b=typeof a,"number"===b?a+="":a="function"===b?h(a.call(a)):""),a},i={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},j=function(a){return i[a]},k=function(a){return h(a).replace(/&(?![\w#]+;)|[<>"']/g,j)},l=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},m=function(a,b){var c,d;if(l(a))for(c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)},n=d.utils={$helpers:{},$include:g,$string:h,$escape:k,$each:m};d.helper=function(a,b){o[a]=b};var o=d.helpers=n.$helpers;d.onerror=function(a){var b="Template Error\n\n";for(var c in a)b+="<"+c+">\n"+a[c]+"\n\n";"object"==typeof console&&console.error(b)};var p=function(a){return d.onerror(a),function(){return"{Template Error}"}},q=d.compile=function(a,b){function d(c){try{return new i(c,h)+""}catch(d){return b.debug?p(d)():(b.debug=!0,q(a,b)(c))}}b=b||{};for(var g in e)void 0===b[g]&&(b[g]=e[g]);var h=b.filename;try{var i=c(a,b)}catch(j){return j.filename=h||"anonymous",j.name="Syntax Error",p(j)}return d.prototype=i.prototype,d.toString=function(){return i.toString()},h&&b.cache&&(f[h]=d),d},r=n.$each,s="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",t=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,u=/[^\w$]+/g,v=new RegExp(["\\b"+s.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),w=/^\d[^,]*|,\d[^,]*/g,x=/^,+|,+$/g,y=/^$|,+/;"function"==typeof define?define(function(){return d}):"undefined"!=typeof exports?module.exports=d:this.template=d}();
var SPA = (function (spa, global) {
    spa.lang = {
        /**
         * 属性复�?
         *
         * @param dist 目标对象
         * @param src 原对�?
         */
        copyProperty: function (dist, src) {
            for (prop in src) {
                dist[prop] = src[prop];
            }
        },
        extend: function (child, parent, funcType) {
            var _child, _parent, _funcType;
            if (arguments.length === 1) {//extend(parent)
                _parent = child;
                function F() {};
                return this.extend(_parent, F);
            } else if (arguments.length === 2) {
                if (typeof arguments[1] === 'function') {//extend(parent, funcType)
                    _parent = child;
                    _funcType = parent;
                    _funcType.prototype = _parent;
                    var extendObject = new _funcType();
                    extendObject._super = _parent;
                    return extendObject;
                } else {//extend(child, parent)
                    _child = child;
                    _parent = parent;
                    var o = this.extend(_parent);
                    this.copyProperty(o, _child);
                    return o;
                }
            } else {
                _child = child;
                _parent = parent;
                _funcType = funcType;
                var o = this.extend(_parent, _funcType);
                this.copyProperty(o, _child);
                return o;
            }
        },
        strictExtend: function (childFunction, parentFunction) {
            var prototype = this.extend(parentFunction.prototype);
            prototype.constructor = child;
            childFunction.prototype = prototype;
        },
        sleep: function (n) {
            var start = new Date().getTime();
            while (true) if (new Date().getTime() - start > n) break;
        }
        ,getUrlHash:function(){
            var hash = location.hash;
            if(hash !== '') {
                hash = hash.substr(1);
            }
            return hash;
        }
        ,cookie:{
            get:function(cName){
                if(document.cookie.length>0){
                    cStart=document.cookie.indexOf(cName + "=");
                    if(cStart!=-1){
                        cStart=cStart + cName.length+1;
                        cEnd=document.cookie.indexOf(";",cStart);
                        if(cEnd==-1) cEnd=document.cookie.length;
                        return document.cookie.substring(cStart,cEnd);
                    }else{
                        return "";
                    }
                }
            }
            ,set:function(c_name,cValue,cExpires,accessPath){
                var exp = new Date();
                exp.setTime(exp.getTime() + cExpires);
                document.cookie = c_name+"="+escape(cValue)+";expires="+exp.toUTCString()+";path=/;domain=."+accessPath;
            }
            ,getDomain:function(){
                var currentUrl = SPA.lang.cookie.getCorrentURL();
                currentUrl = currentUrl.replace(/[^\.]+./,'')
                var urlArray = currentUrl.split('/');
                return urlArray[0];
            }
            ,getCorrentURL:function(){
                var currentUrl=window.location.href;
                if(currentUrl !=null && currentUrl.length>0 && currentUrl.charAt(currentUrl.length-1)=="#"){
                    currentUrl=currentUrl.substring(0,currentUrl.length-1);
                }
                return currentUrl;
            }
        }
        ,string : {
            notEmpty:function(str) {
                if(str !== null && str !== "") {
                    return true;
                }
                return false;
            }
            ,isEmpty:function(str) {
                return !this.notEmpty(str);
            }
            ,substringBefore:function(str, split) {
                var idx = str.indexOf(split);
                if(idx > 0) {
                    return str.substr(0, idx);
                } else {
                    return str;
                }
            }
            ,substringAfter:function(str, split) {
                var idx = str.indexOf(split);
                if(idx > 0) {
                    return str.substr(idx + 1, str.length);
                } else {
                    return str;
                }
            }
            ,substringBeforeLast:function(str, split) {
                var idx = str.lastIndexOf(split);
                if(idx > 0) {
                    return str.substr(0, idx);
                } else {
                    return str;
                }
            }
            ,substringAfterLast:function(str, split) {
                var idx = str.lastIndexOf(split);
                if(idx > 0) {
                    return str.substr(idx + 1, str.length);
                } else {
                    return str;
                }
            }
            ,startsWith: function(str, starts){
                if (starts === '') return true;
                if (str == null || starts == null) return false;
                str = String(str); starts = String(starts);
                return str.length >= starts.length && str.slice(0, starts.length) === starts;
            }
            ,endsWith: function(str, ends){
                if (ends === '') return true;
                if (str == null || ends == null) return false;
                str = String(str); ends = String(ends);
                return str.length >= ends.length && str.slice(str.length - ends.length) === ends;
            }
            ,isNumber:function(input){
                var RE = /^-{0,1}\d*\.{0,1}\d+$/;
                return (RE.test(input));
            }
            ,getRandomString:function(len){
                len = len || 32;
                var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
                var maxPos = $chars.length;
                var pwd = '';
                for (i = 0; i < len; i++) {
                    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
                }
                return pwd;
            }
            ,getParm:function(parm,str){
                if(str.indexOf(parm)>0){
                    var start=str.indexOf(parm);
                    var newString=str.substring(start+1);
                    var end=newString.indexOf('/');
                    if(end==-1){
                        return str.substring(start+1);
                    }else{
                        return str.substring(start+1,start+1+end);
                    };
                }else{
                    return '';
                };
            }
        }
        ,array:{
            pushArray:function(srcArray, destArray) {//[1, 2], [3, 4]=[1,2,3,4]
                for(var i in destArray) {
                    srcArray.push(destArray[i]);
                }
            }
            ,unshiftArray:function(srcArray, destArray) {//[1,2], [3,4]=[3,4,1,2]
                for(var i = (destArray.length - 1); i>=0; i--) {
                    srcArray.unshift(destArray[i]);
                }
            }
        }
        ,date:{
            curDate:function() {
                var curDate=new Date();
                var month=curDate.getMonth()+1;
                if(month<10) month='0'+month;
                var day=curDate.getDate();
                if(day<10) day='0'+day;
                curDate=curDate.getFullYear()+'-'+month+'-'+day;
                return curDate;
            }
            ,format:function(date, format) {
                date = new Date(date);
                var map = {
                    "M": date.getMonth() + 1, //月份
                    "d": date.getDate(), //�?
                    "h": date.getHours(), //小时
                    "m": date.getMinutes(), //�?
                    "s": date.getSeconds(), //�?
                    "q": Math.floor((date.getMonth() + 3) / 3), //季度
                    "S": date.getMilliseconds() //毫秒
                };

                format = format.replace(/([yMdhmsqS])+/g, function(all, t){
                    var v = map[t];
                    if(v !== undefined){
                        if(all.length > 1){
                            v = '0' + v;
                            v = v.substr(v.length-2);
                        }
                        return v;
                    }
                    else if(t === 'y'){
                        return (date.getFullYear() + '').substr(4 - all.length);
                    }
                    return all;
                });
                return format;
            }
        }
        ,jsonToUrl:function(json){//将json格式数据转换为url
            var url = "";
            for(var prop in json) {
                var tmp = prop + "=" + json[prop] + "&";
                url += tmp;
            }
            if(url.length > 1) {
                return url.substr(0, url.length - 1);//去掉最后一�?
            } else {
                return url;
            }
        }
        ,popBox:function(content,time){
            if($('#popBox').length==0){
                var pop=$('<div>'+content+'</div>');
                pop.attr('id','popBox');
                pop.css({'width':'80%','padding':'10px 0','textAlign':'center','background':'rgba(0,0,0,0.5)','color':'#fff','borderRadius':'5px','margin':'0 10%','position':'absolute','top':'40%','zIndex':'1000'});
                $('body').append(pop);
                setTimeout(function(){$(pop).remove()},time*1000);
            }
        }
        ,isUndefined:function(v) {
            return (typeof(v) === 'undefined');
        }
        ,isArray:function(v) {
            return toString.apply(v) === '[object Array]';
        }
    };
    return spa;
}((SPA || {}), this));
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
                    //$(this.container).on(eventName, elSelector, events[eventName]);
                    var container = this.container;
                    $(document).on(eventName, container + " " + elSelector, events[eventName]);
                    console.debug("add event to '" + container + " " +elSelector + "':" + eventName);
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
            if(newView.container) {
                newView.bindEvents();
            }
            if(newView.init) {
                newView.init();
            }
            return newView;
        }

    };
    return spa;
}((SPA || {}), this));
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
var SPA = (function(spa, globals) {

    var validator = {
        notEmpty : function(src) {
            return spa.lang.string.notEmpty(src)
        }
        ,isNumber:function(src) {
            return spa.lang.string.isNumber(src);
        }
        ,min:function(src, min) {
            if(this.isNumber(src)) {
                if(src >= min) {
                    return true;
                }
            }
            return false;
        }
        ,max:function(src, max) {
            if(this.isNumber(src)) {
                if(src <= max) {
                    return true;
                }
            }
            return false;
        }
        ,minLength:function(src, len) {
            return src.length >= len;
        }
        ,maxLength:function(src, len) {
            return src.length <= len;
        }
        ,email:function(src) {
            if(SPA.lang.string.notEmpty(src)){
                var patterns = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
                return patterns.test(src);
            }
            return false;
        }
        ,check:function(o, validate) {
            for(var prop in validate) {//遍历属性
                var validator = validate[prop];
                for(var validFuncName in validator) {//遍历校验规则
                    var parasAndMessage = validator[validFuncName];
                    var src = o[prop];
                    var paras = [src];
                    if(parasAndMessage.hasOwnProperty("params")) {
                        spa.lang.array.pushArray(paras, parasAndMessage.params);
                    }
                    if(this.getValidFunc(validFuncName).apply(this, paras) === false) {
                        var ret = {};
                        ret[prop] = parasAndMessage.message;
                        return ret;
                    }
                }
            }
            return null;
        }
        ,getValidFunc:function(name) {
            for(var prop in this) {
                if(prop === name) {
                    return this[prop];
                }
            }
        }
    }

    spa.validator = {
        Validator : function(){}
        ,create : function(o) {
            return spa.lang.extend(o, validator, this.Validator);
        }
    }

    spa.validator.defaultValidator=spa.validator.create({});

    return spa;
})((SPA || {}), this)
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
var SPA = (function (spa, global) {
    //数据模型基础对象
    var model = {
        server:""
        ,tagName:""
        ,tagParameter:null
        ,dataType:"json"
        ,async:true
        ,cache:false
        ,method:"GET"
        ,validator:spa.validator.defaultValidator
        ,validate:null
        ,cacheTime:0
        ,cacheKey:null
        ,interceptors:[spa.interceptor.viewsInterceptor]
        ,addInterceptorFirst:function(interceptor) {
            this.interceptors.unshift(interceptor);
        }
        ,addInterceptorLast:function(interceptor) {
            this.interceptors.push(interceptor);
        }
        /**
         * 请求数据
         * 默认是ajax请求，可以通过继承覆盖
         *
         * @param paras
         * @param success
         * @param error
         */
        ,getResult:function(paras, success, error) {
            var that = this;
            var type = that.method;
            var data = "";
            if(this.tagParameter !== null) {
                type = "POST";
                data = "parameters=" + spa.lang.jsonToUrl(this.tagParameter);
            }
            var url = this.server;
            if(spa.lang.string.notEmpty(this.tagName)) {
                url = url + "/" + this.tagName;
            }
            var urlParameter = "";
            if(paras !== null) {
                urlParameter = spa.lang.jsonToUrl(paras);
                if(type.toLowerCase() === "get") {
                    url = url + "?" + urlParameter;
                } else {
                    if(data === "") {
                        data = urlParameter;
                    } else {
                        data = data+"&"+urlParameter;
                    }
                }
            }
            console.debug("url = " + url);
            $.ajax({
                url: url
                ,type: type
                ,data : data
                ,dataType: that.dataType
                ,async:that.async
                ,cache:that.cache
                ,success: function(data) {
                    that.json = data;
                    success.call(that, data);
                }
                ,error: function(xhr, type) {
                    error.call(that, xhr, type);
                }
            });
        }
        ,confirm:function(paras, errorCallback) {
            //校验数据
            if(paras !== null && this.validator !== null && this.validate !== null) {
                var valid = this.validator.check(paras, this.validate);
                if(valid !== null) {
                    errorCallback.call(this, valid);
                    return false;
                }
            }
            return true;
        }
        ,request:function(_paras, _views, _errorCallBack) {
            var views=[], paras=null, errorCallBack;
            if(arguments.length === 1) {
                if(_paras instanceof Array) {//request([view])
                    views = _paras;
                } else if(typeof _paras === "function"){//request(callback)
                    errorCallBack = _paras;
                } else {
                    paras = _paras;//request({})
                }
            } else if(arguments.length === 2) {//request({}, viewsOrCallBack)
                paras = _paras;
                if(_views instanceof Array) {//request({}, [view])
                    views = _views;
                } else if(typeof _views === "function") {//request({}, callback)
                    errorCallBack = _views;
                }
            } else {//request({}, [views], callBack)
                paras = _paras;
                views = _views;
                errorCallBack = _errorCallBack;
            }
            //校验数据
            if(errorCallBack) {
                if(!this.confirm(paras, errorCallBack)) {
                    return ;
                }
            }
            var i, interceptors=this.interceptors;
            //显示loading
            for(i in views) {
                views[i].loading();
            }
            //是否有缓存
            if(this.cacheTime > 0) {
                var cacheKey = this.cacheKey;
                if(cacheKey !== null) {
                    var cacheValue = spa.localStorage.get(cacheKey);
                    if(cacheValue) {//缓存没过期
                        console.debug("%s get from cache.", cacheKey);
                        //拦截器
                        for(i in interceptors) {
                            console.debug("interceptor:%o", interceptors[i]);
                            if(!interceptors[i].process(cacheValue, views)) {
                                break;
                            }
                        }
                        return;
                    }
                }
            }
            //请求数据
            this.getResult(paras, function(data) {
                //存缓存
                if(this.cacheTime > 0) {
                    var cacheKey = this.cacheKey;
                    if(cacheKey !== null) {
                        spa.localStorage.set(cacheKey, data, this.cacheTime);
                    }
                }
                //拦截器
                for(i in interceptors) {
                    console.debug("interceptor:%o", interceptors[i]);
                    if(!interceptors[i].process(data, views)) {
                        break;
                    }
                }
            }, function(xhr, type) {
                console.error('xhr : %o', xhr);
                console.error('type : %o', type);
                //缓存里如果存在，读取缓存中的?????
                //error处理
                for(i in views) {
                    views[i].error(this);
                }
            });
        }
        ,notifyView:function(_paras, _views, _errorCallBack) {//请求后通知试图
            if(arguments.length === 1) {
                this.request(_paras);
            } else if(arguments.length === 2) {
                this.request(_paras, _views);
            } else {
                this.request(_paras, _views, _errorCallBack);
            }
        }
        ,callback:function(_paras, _callback, _errorCallBack) {//请求后回调
            var paras=null, callback, errorCallBack;
            if(arguments.length === 1) {//callback(callback)
                callback = _paras;
            } else if(arguments.length === 2) {
                if(typeof _paras === "function") {//callback(callback, errorCallBack)
                    callback = _paras;
                    errorCallBack = _callback;
                } else {//callback(paras, callback);
                    paras = _paras;
                    callback = _callback;
                }
            } else {
                paras = _paras;
                callback = _callback;
                errorCallBack = _errorCallBack;
            }
            //校验数据
            if(errorCallBack) {
                if(!this.confirm(paras, errorCallBack)) {
                    return ;
                }
            }
            //请求数据
            this.getResult(paras, function(data) {//回调
                callback.call(this, data);
            },function(xhr, type) {//错误处理
                console.error('xhr : %o', xhr);
                console.error('xhr : %o', type);
                if(errorCallBack) {
                    errorCallBack.call(this, {error:xhr});
                }
            });
        }
    };
    spa.model = {
        Model : function(){},
        create: function (o, parentModel) {
            var _parentModel = model;
            if(arguments.length == 2) {
                _parentModel = parentModel
            }
            return spa.lang.extend(o, _parentModel, this.Model);
        }
    };
    /**
     * 简单数据模型，不需要访问网络
     *
     * @type {*}
     */
    spa.model.simpleModel = spa.model.create({
        getData:function() {
            return {};
        }
        ,getResult:function(paras, success, error) {
            var data = this.getData();
            success.call(this, data);
        }
    });

    return spa;
}((SPA || {}), this));
var SPA = (function (spa, global) {
    var _config, _routers;
    var matchRouter = function(router, hash) {
        var routerPattern = /\*\w+|(\w*?):(\w+)/g;
        var paramValue=[];
        var hashPattern = new RegExp("^"+router.replace(routerPattern, "$1(\\\S*)")+"$");
        var hashValues = hash.match(hashPattern);
        if (hashValues != null) {
            for (var j = 1; j < hashValues.length; j++) {
                paramValue[j-1]=hashValues[j];
            }
        }
        return {
            match:hashValues != null
            ,params:paramValue
        };
    };
    var onchange = function(event) {
        var hash = spa.lang.getUrlHash();
        console.debug("hash : %s, event : %o", hash, event);
        var hasMatch = false;
        if(spa.lang.isArray(_routers)) {
            for(var i = 0; i < _routers.length; i++) {
                var mapping = _routers[i].mapping;
                var action = _routers[i].action;
                var matchParams = matchRouter(mapping, hash);
                if(matchParams.match) {
                    action.apply(spa.controller, matchParams.params);
                    hasMatch = true;
                }
            }
        } else {
            for(var router in _routers) {
                var matchParams = matchRouter(router, hash);
                if(matchParams.match) {
                    _routers[router].apply(spa.controller, matchParams.params);
                    hasMatch = true;
                    //break;
                }
            }
        }
        if(!hasMatch && !SPA.lang.isUndefined(_config.main)) {
            _routers[_config.main].apply(spa.controller, matchParams.params);
        }
    };
    spa.controller = {
        config:function(config) {
            _config = config;
        }
        ,main:function() {
            if(_config && _config.main) {
                this.jump(_config.main);
            }
        }
        ,listener: function(router) {
            var that = this;
            $(document).ready(function() {
                if(_config && _config.ready) {
                    _config.ready();//全局初始化函数
                }
                if(_config && _config.bindViews) {
                    var bindViews = _config.bindViews;
                    for(var container in bindViews) {
                        var views = bindViews[container];
                        for(var i in views) {
                            views[i].container = container;
                            views[i].bindEvents();
                        }
                    }
                    onchange();
                }
            });
            _routers = router;
            global.addEventListener("hashchange", onchange, false);
        },
        jump:function(hash, append) {
            if(arguments.length == 2 && append) {
                location.hash += hash;
            } else {
                location.hash = "#" + hash;
            }
        }
    }
    return spa;
}((SPA || {}), this));