var sched;sched={timeout:{list:[],func:window.setTimeout,set:function(e,t){return this.func.call(null,e,t)}},interval:{list:[],func:window.setInterval,set:function(e,t){return this.func.call(null,e,t)}},clear:function(){var e,t,n,i,a=[];for(e=0,n=(t=this.timeout.list).length;n>e;++e)i=t[e],clearTimeout(i);for(e=0,n=(t=this.interval.list).length;n>e;++e)i=t[e],clearInterval(i);for(e=0,n=(t=this.animateframe.list).length;n>e;++e)i=t[e],a.push(window.cancelAnimationFrame(i));return a},animateframe:{list:[],func:window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,set:function(e){return this.func.call(window,e)}}},window.setTimeout=function(e,t){var n;return n=sched.timeout.set(e,t),sched.timeout.list.push(n),n},window.setInterval=function(e,t){var n;return n=sched.interval.set(e,t),sched.interval.list.push(n),n},window.requestAnimationFrame=function(e){var t;return t=sched.animateframe.set(e),sched.animateframe.list.push(t),t},delete window.mozRequestAnimationFrame,delete window.webkitRequestAnimationFrame,delete window.msRequestAnimationFrame;/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
// Generated by LiveScript 1.3.1
var plotdb;
plotdb = {};// Generated by LiveScript 1.3.1
var plotdb;
if (!(typeof plotdb != 'undefined' && plotdb !== null)) {
  plotdb = {};
}
plotdb.String = {
  name: 'String',
  'default': "",
  level: 2,
  basetype: [],
  test: function(){
    return true;
  },
  parse: function(it){
    return it || "";
  }
};
plotdb.Order = {
  name: 'Order',
  'default': function(k, v, i){
    return i;
  },
  level: 4,
  basetype: [plotdb.String],
  test: function(v){
    return !!plotdb.OrderTypes.map(function(type){
      return type.test(v);
    }).filter(function(it){
      return it;
    })[0];
  },
  parse: function(it){
    return it;
  },
  order: {
    Ascending: function(a, b){
      if (b > a) {
        return -1;
      } else if (b < a) {
        return 1;
      } else {
        return 0;
      }
    },
    Descending: function(a, b){
      if (b > a) {
        return 1;
      } else if (b < a) {
        return -1;
      } else {
        return 0;
      }
    }
  },
  sort: function(data, fieldname, isAscending){
    var field, types, i$, to$, i, j$, to1$, j, type, sorter;
    isAscending == null && (isAscending = true);
    field = fieldname ? data.map(function(it){
      return it[fieldname];
    }) : data;
    types = plotdb.OrderTypes.map(function(it){
      return it;
    });
    for (i$ = 0, to$ = field.length; i$ < to$; ++i$) {
      i = i$;
      for (j$ = 0, to1$ = types.length; j$ < to1$; ++j$) {
        j = j$;
        if (!types[j].test(field[i])) {
          types[j] = null;
        }
      }
      types = types.filter(fn$);
    }
    type = types[0];
    sorter = ((type || {}).order || this.order)[isAscending ? 'Ascending' : 'Descending'];
    if (fieldname) {
      if (type) {
        for (i$ = 0, to$ = data.length; i$ < to$; ++i$) {
          i = i$;
          data[i][fieldname] = type.parse(data[i][fieldname]);
        }
      }
      return data.sort(function(a, b){
        return sorter(a[fieldname], b[fieldname]);
      });
    } else {
      if (type) {
        for (i$ = 0, to$ = data.length; i$ < to$; ++i$) {
          i = i$;
          data[i] = type.parse(data[i]);
        }
      }
      return data.sort(sorter);
    }
    function fn$(it){
      return it;
    }
  }
};
plotdb.Boolean = {
  name: 'Boolean',
  'default': true,
  level: 8,
  basetype: [plotdb.Order],
  test: function(it){
    return !!/^(true|false|yes|no|[yntf01])$/.exec(it);
  },
  parse: function(it){
    if (it && typeof it === 'string') {
      if (/^(yes|true|[yt])$/.exec(it.trim())) {
        return true;
      }
      if (/\d+/.exec(it.trim()) && it.trim() !== "0") {
        return true;
      }
      return false;
    }
    return !!it;
  },
  order: {
    Descending: function(a, b){
      return b - a;
    },
    Ascending: function(a, b){
      return a - b;
    },
    index: function(it){
      if (it) {
        return 1;
      } else {
        return 0;
      }
    }
  }
};
plotdb.Bit = {
  name: 'Bit',
  'default': 0,
  level: 10,
  basetype: [plotdb.Boolean],
  test: function(it){
    return !!/^[01]$/.exec(it);
  },
  parse: function(it){
    return !it || it === "0" ? 0 : 1;
  },
  order: {
    Descending: function(a, b){
      return b - a;
    },
    Ascending: function(a, b){
      return a - b;
    },
    index: function(it){
      return it;
    }
  }
};
plotdb.Numstring = {
  name: 'Numstring',
  'default': "",
  level: 6,
  basetype: [plotdb.Order],
  test: function(it){
    return /\d+/.exec(it + "");
  },
  parse: function(it){
    var numbers, num, i$, to$, j;
    numbers = [];
    num = it.split
      ? it.split(/\.?[^0-9.]+/g)
      : [it];
    for (i$ = 0, to$ = num.length; i$ < to$; ++i$) {
      j = i$;
      if (num[j]) {
        numbers.push(parseFloat(num[j]));
      }
    }
    return {
      raw: it,
      numbers: numbers,
      len: numbers.length,
      toString: function(){
        return this.raw;
      }
    };
  },
  order: {
    Ascending: function(a, b){
      var na, nb, i$, to$, i, v;
      if (!a) {
        return !b
          ? 0
          : -1;
      }
      na = a.numbers;
      nb = b.numbers;
      for (i$ = 0, to$ = a.len; i$ < to$; ++i$) {
        i = i$;
        v = na[i] - nb[i];
        if (v) {
          return v;
        }
      }
      return a.len - b.len;
    },
    Descending: function(a, b){
      return plotdb.Numstring.order.Ascending(b, a);
    },
    index: function(it){
      return it.numbers[0];
    }
  }
};
plotdb.Number = {
  name: 'Number',
  'default': 0,
  level: 8,
  basetype: [plotdb.Numstring],
  test: function(it){
    return !isNaN(+((it || '') + "").replace(/,/g, '').replace(/%$/, ''));
  },
  parse: function(it){
    if (typeof it === 'string') {
      it = parseFloat(it.replace(/,/g, ''));
      if (/%$/.exec(it)) {
        it = (+it.replace(/%$/, '')) / 100;
      }
    }
    return +it;
  },
  order: {
    Ascending: function(a, b){
      return a - b;
    },
    Descending: function(a, b){
      return b - a;
    },
    index: function(it){
      return it;
    }
  }
};
plotdb.Date = {
  name: 'Date',
  'default': '1970/1/1',
  level: 8,
  basetype: [plotdb.Numstring],
  test: function(it){
    return !/^\d*$/.exec(it) && this.parse(it) ? true : false;
  },
  parse: function(it){
    var d, ret;
    d = new Date(it);
    if (!(d instanceof Date) || isNaN(d.getTime())) {
      ret = /^(\d{1,2})[/-](\d{4})$/.exec(it);
      if (!ret) {
        return null;
      }
      d = new Date(ret[2], parseInt(ret[1]) - 1);
    }
    return {
      raw: it,
      toString: function(){
        return this.raw;
      },
      parsed: d
    };
  },
  order: {
    Ascending: function(a, b){
      return a.parsed.getTime() - b.parsed.getTime();
    },
    Descending: function(a, b){
      return b.parsed.getTime() - a.parsed.getTime();
    },
    index: function(it){
      return it.parsed.getTime();
    }
  }
};
plotdb.Weekday = {
  name: 'Weekday',
  'default': 'Mon',
  level: 8,
  basetype: [plotdb.Order],
  values: {
    abbr: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    zh: ['週一', '週二', '週三', '週四', '週五', '週六', '週日']
  },
  test: function(it){
    var value, k, ref$, v, idx;
    value = typeof it === 'string' ? it.toLowerCase() : it;
    for (k in ref$ = this.values) {
      v = ref$[k];
      idx = v.indexOf(value);
      if (idx >= 0) {
        return true;
      }
    }
    return false;
  },
  parse: function(it){
    return it;
  },
  order: {
    index: function(it){
      var value, k, ref$, v, idx;
      value = it.toLowerCase();
      for (k in ref$ = plotdb.Weekday.values) {
        v = ref$[k];
        idx = v.indexOf(value);
        if (idx >= 0) {
          return idx;
        }
      }
      return -1;
    },
    Ascending: function(a, b){
      a = plotdb.Weekday.order.index(a);
      b = plotdb.Weekday.order.index(b);
      return a - b;
    },
    Descending: function(a, b){
      a = plotdb.Weekday.order.index(a);
      b = plotdb.Weekday.order.index(b);
      return b - a;
    }
  }
};
plotdb.Month = {
  name: 'Month',
  'default': 'Jan',
  level: 8,
  basetype: [plotdb.Order],
  values: {
    abbr: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    en: ['january', 'feburary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
    zh: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },
  test: function(it){
    var value, k, ref$, v, idx;
    value = typeof it === 'string' ? it.toLowerCase() : it;
    for (k in ref$ = this.values) {
      v = ref$[k];
      idx = v.indexOf(value);
      if (idx >= 0) {
        return true;
      }
    }
    return false;
  },
  parse: function(it){
    return it;
  },
  order: {
    index: function(it){
      var value, k, ref$, v, idx;
      value = it.toLowerCase();
      for (k in ref$ = plotdb.Month.values) {
        v = ref$[k];
        idx = v.indexOf(value);
        if (idx >= 0) {
          return idx;
        }
      }
      return -1;
    },
    Ascending: function(a, b){
      a = plotdb.Month.order.index(a);
      b = plotdb.Month.order.index(b);
      return a - b;
    },
    Descending: function(a, b){
      a = plotdb.Month.order.index(a);
      b = plotdb.Month.order.index(b);
      return b - a;
    }
  }
};
plotdb.Range = {
  name: 'Range',
  'default': [0, 1],
  test: function(it){
    return !!plotdb.Range.parse(it);
  },
  parse: function(it){
    var e;
    if (typeof it === 'string') {
      try {
        it = JSON.parse(it);
      } catch (e$) {
        e = e$;
        return false;
      }
    }
    if (Array.isArray(it) && it.length === 2) {
      it[0] = parseFloat(it[0]);
      it[1] = parseFloat(it[1]);
      if (isNaN(it[0]) || isNaN(it[1])) {
        return null;
      }
      return it;
    }
    return null;
  }
};
plotdb.Choice = function(v){
  return {
    'default': "",
    name: 'Choice',
    level: 20,
    test: function(it){
      return v && v.length && in$(it, v);
    },
    values: v
  };
};
plotdb.Color = {
  name: 'Color',
  level: 10,
  test: function(it){
    return !/(rgba?|hsla?)\([0-9.,]+\)|#[0-9a-f]{3,6}|[a-z0-9]+/.exec(it.trim());
  },
  'default': '#dc4521',
  Gray: '#cccccc',
  Positive: '#3f7ab5',
  Negative: '#d93510',
  Neutral: '#cccccc',
  Empty: '#ffffff',
  subtype: {
    negative: "negative",
    positive: "positive",
    neutral: "neutral"
  }
};
plotdb.Palette = {
  name: 'Palette',
  level: 30,
  re: /^((rgb|hsl)\((\s*[0-9.]+\s*,){2}\s*[0-9.]+\s*\)|(rgb|hsl)a\((\s*[0-9.]+\s*,){3}\s*[0-9.]+\s*\)|\#[0-9a-f]{3}|\#[0-9a-f]{6}|[a-zA-Z][a-zA-Z0-9]*)$/,
  test: function(it){
    var e, this$ = this;
    if (!it) {
      return true;
    }
    if (typeof it === typeof "") {
      if (it.charAt(0) !== '[') {
        it = it.split(',');
      } else {
        try {
          it = JSON.parse(it);
        } catch (e$) {
          e = e$;
          return false;
        }
      }
    } else if (Array.isArray(it)) {
      return !it.filter(function(it){
        return !this$.re.exec(it.trim());
      }).length ? true : false;
    } else if (typeof it === 'object') {
      if (!(it.colors != null)) {
        return true;
      }
      if (it.colors.filter(function(it){
        return !it.hex;
      }).length) {
        return true;
      }
    }
    return false;
  },
  parse: function(it){
    var e;
    if (!it) {
      return it;
    }
    if (Array.isArray(it)) {
      return it;
    }
    if (typeof it === typeof "") {
      try {
        return JSON.parse(it);
      } catch (e$) {
        e = e$;
        return it.split(',').map(function(it){
          return {
            hex: it.trim()
          };
        });
      }
    }
    return it;
  },
  'default': {
    colors: ['#1d3263', '#226c87', '#f8d672', '#e48e11', '#e03215', '#ab2321'].map(function(it){
      return {
        hex: it
      };
    })
  },
  plotdb: {
    colors: ['#ed1d78', '#c59b6d', '#8cc63f', '#28aae2'].map(function(it){
      return {
        hex: it
      };
    })
  },
  qualitative: {
    colors: ['#c05ae0', '#cf2d0c', '#e9ab1e', '#86ffb5', '#64dfff', '#003f7d'].map(function(it){
      return {
        hex: it
      };
    })
  },
  binary: {
    colors: ['#ff8356', '#0076a1'].map(function(it){
      return {
        hex: it
      };
    })
  },
  sequential: {
    colors: ['#950431', '#be043e', '#ec326d', '#fc82a9', '#febed2', '#fee6ee'].map(function(it){
      return {
        hex: it
      };
    })
  },
  diverging: {
    colors: ['#74001a', '#cd2149', '#f23971', '#ff84ab', '#ffc3d7', '#f2f2dd', '#b8d9ed', '#81b1d0', '#3d8bb7', '#0071a8', '#003558'].map(function(it){
      return {
        hex: it
      };
    })
  },
  subtype: {
    qualitative: "qualitative",
    binary: "binary",
    sequential: "sequential",
    diverging: "diverging"
  },
  scale: {
    ordinal: function(pal, domain, scale){
      var c, range;
      c = pal.colors;
      range = c.filter(function(it){
        return it.keyword;
      }).map(function(it){
        return it.hex;
      }).concat(c.filter(function(it){
        return !it.keyword;
      }).map(function(it){
        return it.hex;
      }));
      if (!domain) {
        if (scale) {
          domain = scale.domain();
        } else {
          domain = c.map(function(it){
            return it.keyword;
          }).filter(function(it){
            return it;
          });
        }
      }
      if (!scale) {
        scale = d3.scale.ordinal();
      }
      return scale.domain(domain).range(range);
    },
    linear: function(pal, domain, scale){
      var c, range;
      c = pal.colors;
      range = c.filter(function(it){
        return it.keyword;
      }).map(function(it){
        return it.hex;
      }).concat(c.filter(function(it){
        return !it.keyword;
      }).map(function(it){
        return it.hex;
      }));
      if (!domain) {
        if (scale) {
          domain = scale.domain();
        } else {
          domain = c.map(function(it){
            return it.keyword;
          }).filter(function(it){
            return it != null;
          });
        }
      }
      if (!scale) {
        scale = d3.scale.linear();
      }
      if (range.length === 1) {
        range.push(range[0]);
      }
      if (domain.length === 2 && range.length > 2) {
        domain = d3.range(range.length).map(function(it){
          return (domain[1] - domain[0]) * it / (range.length - 1 || 1) + domain[0];
        });
      }
      return scale.domain(domain).range(range);
    }
  }
};
plotdb.OrderTypes = [plotdb.Number, plotdb.Date, plotdb.Numstring, plotdb.Month, plotdb.Weekday, plotdb.Boolean, plotdb.Bit];
plotdb.Types = {
  list: ['Number', 'Numstring', 'Weekday', 'Month', 'Date', 'Boolean', 'Bit', 'Order'],
  resolveArray: function(vals){
    var matchedTypes, i$, to$, j, type, matched, j$, to1$, k;
    matchedTypes = [[0, 'String']];
    for (i$ = 0, to$ = this.list.length; i$ < to$; ++i$) {
      j = i$;
      type = plotdb[this.list[j]];
      matched = true;
      for (j$ = 0, to1$ = vals.length; j$ < to1$; ++j$) {
        k = j$;
        if (!type.test(vals[k])) {
          matched = false;
          break;
        }
      }
      if (matched) {
        matchedTypes.push([plotdb[this.list[j]].level, this.list[j]]);
      }
    }
    matchedTypes.sort(function(a, b){
      return b[0] - a[0];
    });
    type = (matchedTypes[0] || [0, 'String'])[1];
    return type;
  },
  resolveValue: function(val){
    var matchedTypes, i$, to$, j, type;
    matchedTypes = [[0, 'String']];
    for (i$ = 0, to$ = this.list.length; i$ < to$; ++i$) {
      j = i$;
      type = plotdb[this.list[j]];
      if (type.test(val)) {
        matchedTypes.push([plotdb[this.list[j]].level, this.list[j]]);
      }
    }
    matchedTypes.sort(function(a, b){
      return b[0] - a[0];
    });
    type = (matchedTypes[0] || [0, 'String'])[1];
    return type;
  },
  resolve: function(obj){
    var headers, rows, fields, types, i$, to$, i, matchedTypes, j$, to1$, j, type, matched, k$, to2$, k;
    if (Array.isArray(obj)) {
      return this.resolveArray(obj);
    }
    if (typeof obj !== 'object') {
      return this.resolveValue(obj);
    }
    headers = obj.headers, rows = obj.rows, fields = obj.fields;
    types = [];
    for (i$ = 0, to$ = headers.length; i$ < to$; ++i$) {
      i = i$;
      matchedTypes = [];
      for (j$ = 0, to1$ = this.list.length; j$ < to1$; ++j$) {
        j = j$;
        type = plotdb[this.list[j]];
        matched = true;
        for (k$ = 0, to2$ = rows.length; k$ < to2$; ++k$) {
          k = k$;
          if (!type.test(rows[k][i])) {
            matched = false;
            break;
          }
        }
        if (matched) {
          matchedTypes.push([plotdb[this.list[j]].level, this.list[j]]);
        }
      }
      matchedTypes.sort(fn$);
      type = (matchedTypes[0] || [0, 'String'])[1];
      types.push(type);
    }
    return types;
    function fn$(a, b){
      return b[0] - a[0];
    }
  }
};
function in$(x, xs){
  var i = -1, l = xs.length >>> 0;
  while (++i < l) if (x === xs[i]) return true;
  return false;
}// Generated by LiveScript 1.3.1
plotdb.chart = {
  corelib: {},
  create: function(config){
    return import$(import$({}, this.base), config);
  },
  base: {
    dimension: {
      value: {
        type: [],
        require: false
      }
    },
    config: {
      padding: {}
    },
    init: function(){},
    bind: function(){},
    resize: function(){},
    render: function(){}
  },
  dataFromDimension: function(dimension){
    var data, len, k, v, i$, i, ret, that, type, defval, value, parse, j$, to$, j;
    data = [];
    len = Math.max.apply(null, (function(){
      var ref$, results$ = [];
      for (k in ref$ = dimension) {
        v = ref$[k];
        results$.push(v);
      }
      return results$;
    }()).reduce(function(a, b){
      return a.concat(b.fields || []);
    }, []).filter(function(it){
      return it.data;
    }).map(function(it){
      return it.data.length;
    }).concat([0]));
    for (i$ = 0; i$ < len; ++i$) {
      i = i$;
      ret = {};
      for (k in dimension) {
        v = dimension[k];
        if (v.multiple) {
          ret[k] = (v.fields || (v.fields = [])).length ? (v.fields || (v.fields = [])).map(fn$) : null;
          v.fieldName = (v.fields || (v.fields = [])).map(fn1$);
        } else {
          ret[k] = (that = (v.fields || (v.fields = []))[0]) ? (that.data || (that.data = []))[i] : null;
          v.fieldName = (that = (v.fields || (v.fields = []))[0]) ? that.name : null;
        }
        if (ret[k] === null) {
          type = v.type[0] || plotdb.String;
          defval = plotdb[type.name]['default'];
          value = typeof defval === 'function'
            ? defval(k, v, i)
            : type['default'];
          ret[k] = v.multiple ? [value] : value;
        }
        if (v.type && v.type[0] && plotdb[v.type[0].name].parse) {
          parse = plotdb[v.type[0].name].parse;
          if (Array.isArray(ret[k])) {
            for (j$ = 0, to$ = ret[k].length; j$ < to$; ++j$) {
              j = j$;
              ret[k][j] = parse(ret[k][j]);
            }
          } else {
            ret[k] = parse(ret[k]);
          }
        }
      }
      data.push(ret);
    }
    return data;
    function fn$(it){
      return (it.data || (it.data = []))[i];
    }
    function fn1$(it){
      return it.name;
    }
  },
  dataFromHash: function(dimension, source){
    var k, v;
    if (!dimension || !source) {
      return [];
    }
    if (Array.isArray(source)) {
      return source;
    }
    if (typeof source === 'function') {
      source = source();
    }
    for (k in dimension) {
      v = dimension[k];
      v.fields = source[k] || [];
    }
    return plotdb.chart.dataFromDimension(dimension);
  },
  getSampleData: function(chart, dimension){
    dimension == null && (dimension = null);
    return plotdb.chart.dataFromHash(dimension || chart.dimension, chart.sample);
  },
  updateData: function(chart){
    return chart.data = plotdb.chart.dataFromDimension(chart.dimension);
  },
  updateDimension: function(chart){
    var k, ref$, v, results$ = [];
    for (k in ref$ = chart.dimension) {
      v = ref$[k];
      if (Array.isArray(v.type)) {
        results$.push(v.type = v.type.map(fn$));
      }
    }
    return results$;
    function fn$(it){
      if (typeof it === 'object') {
        return it;
      } else {
        return plotdb[it] || {};
      }
    }
  },
  updateAssets: function(chart, assets){
    var ret, i$, len$, file, raw, array, j$, to$, idx;
    assets == null && (assets = []);
    ret = {};
    for (i$ = 0, len$ = assets.length; i$ < len$; ++i$) {
      file = assets[i$];
      raw = atob(file.content);
      array = new Uint8Array(raw.length);
      for (j$ = 0, to$ = raw.length; j$ < to$; ++j$) {
        idx = j$;
        array[idx] = raw.charCodeAt(idx);
      }
      file.blob = new Blob([array], {
        type: file.type
      });
      file.url = URL.createObjectURL(file.blob);
      file.datauri = ["data:", file.type, ";charset=utf-8;base64,", file.content].join("");
      ret[file.name] = file;
    }
    return chart.assets = ret;
  },
  updateConfig: function(chart, config){
    var k, ref$, v, type, results$ = [];
    for (k in ref$ = chart.config) {
      v = ref$[k];
      type = (chart.config[k].type || []).map(fn$);
      if (!(config[k] != null)) {
        config[k] = v['default'];
      } else if (!(config[k].value != null)) {
        config[k] = (v || config[k])['default'];
      } else {
        config[k] = config[k].value;
      }
      if (type[0] && plotdb[type[0]].parse) {
        results$.push(config[k] = plotdb[type[0]].parse(config[k]));
      }
    }
    return results$;
    function fn$(it){
      return it.name;
    }
  }
};
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}// Generated by LiveScript 1.3.1
plotdb.theme = {
  create: function(config){
    return import$(import$({}, this.base), config);
  },
  base: {
    palette: {
      'default': [],
      diverging: [],
      sequential: [],
      binary: [],
      qualitative: [],
      binaryDiverge: [],
      sequentialQualitative: [],
      sequentialSequential: [],
      divergingDiverging: []
    },
    config: {
      padding: {
        type: [plotdb.Number],
        'default': 10
      }
    }
  }
};
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}// Generated by LiveScript 1.3.1
plotdb.data = {
  sample: {
    country: ["Afghanistan", "Albania", "Antarctica", "Algeria", "American Samoa", "Andorra", "Angola", "Antigua and Barbuda", "Azerbaijan", "Argentina", "Australia", "Austria", "Bahamas", "Bahrain", "Bangladesh", "Armenia", "Barbados", "Belgium", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "Belize", "British Indian Ocean Territory", "Solomon Islands", "British Virgin Islands", "Brunei", "Bulgaria", "Myanmar", "Burundi", "Belarus", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Sri Lanka", "Chad", "Chile", "China", "Taiwan", "Christmas Island", "Cocos Keeling Islands", "Colombia", "Comoros", "Mayotte", "Congo, Rep.", "Congo, Dem. Rep.", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Benin", "Denmark", "Dominica", "Dominican Republic", "Ecuador", "El Salvador", "Equatorial Guinea", "Ethiopia", "Eritrea", "Estonia", "Faroe Islands", "Falkland Islands", "SGSSI", "Fiji", "Finland", "Åland Islands", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Djibouti", "Gabon", "Georgia", "Gambia", "Palestine", "Germany", "Ghana", "Gibraltar", "Kiribati", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guyana", "Haiti", "HIMI", "Holy See", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Cote d'Ivoire", "Jamaica", "Japan", "Kazakhstan", "Jordan", "Kenya", "North Korea", "South Korea", "Kuwait", "Kyrgyz Republic", "Lao", "Lebanon", "Lesotho", "Latvia", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Martinique", "Mauritania", "Mauritius", "Mexico", "Monaco", "Mongolia", "Moldova", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Oman", "Namibia", "Nauru", "Nepal", "Netherlands", "Curaçao", "Aruba", "Sint Maarten", "Bonaire, Sint Eustatius and Saba", "New Caledonia", "Vanuatu", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Norway", "Northern Mariana Islands", "United States Minor Outlying Islands", "Micronesia, Fed. Sts.", "Marshall Islands", "Palau", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Guinea-Bissau", "Timor-Leste", "Puerto Rico", "Qatar", "Réunion", "Romania", "Russia", "Rwanda", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Anguilla", "St. Lucia", "Saint Martin", "Saint Pierre and Miquelon", "St. Vincent and the Grenadines", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovak Republic", "Vietnam", "Slovenia", "Somalia", "South Africa", "Zimbabwe", "Spain", "South Sudan", "Sudan", "Western Sahara", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syria", "Tajikistan", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "United Arab Emirates", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "Macedonia, FYR", "Egypt", "United Kingdom", "Guernsey", "Jersey", "Isle of Man", "Tanzania", "United States", "Virgin Islands", "Burkina Faso", "Uruguay", "Uzbekistan", "Venezuela", "Wallis and Futuna", "Samoa", "Yemen", "Zambia"],
    continent: ['Asia', 'Europe', 'America', 'Oceania', 'Australia', 'Africa'],
    category: ['IT', 'RD', 'GM', 'FIN', 'LEGAL', 'HR', 'SALES', 'BD'],
    name: ['James', 'Joe', 'Amelie', 'Yale', 'Doraemon', 'Cindy', 'David', 'Frank', 'Kim', 'Ken', 'Leland', 'Mike', 'Nick', 'Oliver', 'Randy', 'Andy', 'Angelica', 'Zack', 'Alfred', 'Edward', 'Thomas', 'Percy', 'Frankenstein', 'Mary', 'Toby', 'Tim', 'Timonthy', 'Smith', 'Karen', 'Kenny', 'Jim', 'Victor', 'Xavier', 'Jimmy', 'Bob', 'Cynthia', 'Dory', 'Dolce', 'Kirby', 'Gabriel', 'Gabby', 'Watson', 'Wade', 'Wallace', 'Gasper', 'Karmen', 'Ian', 'Larry', 'Rachel', 'Parker', 'Parry', 'Eagle', 'Falcon', 'Hades', 'Helen', 'Sabrinaa', 'Oscar', 'Victoria'],
    fruit: ['Apple', 'Orange', 'Banana', 'Grape', 'Longan', 'Litchi', 'Peach', 'Guava', 'Melon', 'Pineapple', 'Pomelo', 'Durian', 'Berry', 'Pear'],
    weekday: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    generate: function(dimension){
      var ret, res$, i$, to$, i, node, k, v;
      res$ = [];
      for (i$ = 0, to$ = parseInt(Math.random() * 10 + 10); i$ < to$; ++i$) {
        i = i$;
        node = {};
        for (k in dimension) {
          v = dimension[k];
          if (!v.type || !v.type.length) {
            node[k] = this.name[parseInt(Math.random() * this.name.length)];
          } else {
            node[k] = parseInt(Math.random() * 8) + 2;
          }
        }
        res$.push(node);
      }
      ret = res$;
      return ret;
    }
  }
};
(function(){
  var helper, target, k;
  helper = {
    get: function(idx){
      return this[idx % this.length];
    },
    order: function(len){
      var ret, i$, i;
      ret = new Array(len);
      for (i$ = 0; i$ < len; ++i$) {
        i = i$;
        ret[i] = this[i % this.length];
      }
      return ret;
    },
    rand: function(){
      return this[parseInt(Math.random() * this.length)];
    },
    rands: function(len){
      var ret, i$, i;
      ret = new Array(len);
      for (i$ = 0; i$ < len; ++i$) {
        i = i$;
        ret[i] = this[parseInt(Math.random() * this.length)];
      }
      return ret;
    }
  };
  target = ['name', 'country', 'category', 'fruit', 'weekday', 'month', 'continent'];
  return (function(){
    var results$ = [];
    for (k in helper) {
      results$.push(k);
    }
    return results$;
  }()).map(function(h){
    return target.map(function(t){
      return plotdb.data.sample[t][h] = helper[h];
    });
  });
})();
import$(plotdb.data.sample, {
  crimeanWar: {
    "month": {
      "name": "month",
      "data": ["01/04/1854", "01/05/1854", "01/06/1854", "01/07/1854", "01/08/1854", "01/09/1854", "01/10/1854", "01/11/1854", "01/12/1854", "01/01/1855", "01/02/1855", "01/03/1855", "01/04/1855", "01/05/1855", "01/06/1855", "01/07/1855", "01/08/1855", "01/09/1855", "01/10/1855", "01/11/1855", "01/12/1855", "01/01/1856", "01/02/1856", "01/03/1856"]
    },
    "army size": {
      "name": "army size",
      "data": [8571, 23333, 28333, 28722, 30246, 30290, 30643, 29736, 32779, 32393, 30919, 30107, 32252, 35473, 38863, 42647, 44614, 47751, 46852, 37853, 43217, 44212, 43485, 46140]
    },
    "death number by zymotic": {
      "name": "death number by zymotic",
      "data": [1, 12, 11, 359, 828, 788, 503, 844, 1725, 2761, 2120, 1205, 477, 508, 802, 382, 483, 189, 128, 178, 91, 42, 24, 15]
    },
    "death number by wound": {
      "name": "death number by wound",
      "data": [0, 0, 0, 0, 1, 81, 132, 287, 114, 83, 42, 32, 48, 49, 209, 134, 164, 276, 53, 33, 18, 2, 0, 0]
    },
    "death number by other": {
      "name": "death number by other",
      "data": [5, 9, 6, 23, 30, 70, 128, 106, 131, 324, 361, 172, 57, 37, 31, 33, 25, 20, 18, 32, 28, 48, 19, 35]
    },
    "zymotic rate(‰)": {
      "name": "zymotic rate(‰)",
      "data": [1.4, 6.2, 4.7, 150, 328.5, 312.2, 197, 340.6, 631.5, 1022.8, 822.8, 480.3, 177.5, 171.8, 247.6, 107.5, 129.9, 47.5, 32.8, 56.4, 25.3, 11.4, 6.6, 3.9]
    },
    "wound rate(‰)": {
      "name": "wound rate(‰)",
      "data": [0, 0, 0, 0, 0.4, 32.1, 51.7, 115.8, 41.7, 30.7, 16.3, 12.8, 17.9, 16.6, 64.5, 37.7, 44.1, 69.4, 13.6, 10.5, 5, 0.5, 0, 0]
    },
    "other rate(‰)": {
      "name": "other rate(‰)",
      "data": [7, 4.6, 2.5, 9.6, 11.9, 27.7, 50.1, 42.8, 48, 120, 140.1, 68.6, 21.2, 12.5, 9.6, 9.3, 6.7, 5, 4.6, 10.1, 7.8, 13, 5.2, 9.1]
    }
  },
  lifeExpectancy: {
    "1985": {
      "name": "1985",
      "data": ["42.8", "72.2", "67.7", "80", "50", "73.1", "71.9", "70.5", "75.7", "74", "66.2", "67.2", "71.5", "55.8", "73.3", "71.1", "74.6", "71.1", "55", "56", "59.8", "71.5", "67.5", "67.4", "72.9", "71.3", "52", "49.8", "56.3", "58.2", "76.5", "67.2", "49.1", "53.4", "71.8", "66.4", "70.3", "55.4", "52.9", "56.6", "76.3", "57.7", "71.6", "74.3", "76.7", "71.1", "74.7", "60.6", "73.1", "70.5", "70", "61.1", "67.8", "51.9", "50.2", "70.4", "46.3", "64.1", "74.7", "75.7", "60.6", "56.6", "70.2", "74.6", "58.7", "76", "69.1", "62.8", "50.7", "50.5", "65", "53.4", "67.6", "68.9", "77.6", "55.9", "63.4", "63.6", "68.5", "73.7", "74.9", "75.7", "72.6", "77.8", "69.3", "66.4", "63.1", "56.4", "65.9", "69.5", "74.6", "64.7", "54.3", "70.1", "65.3", "60.4", "54.5", "71.9", "71.2", "73.8", "72", "54.5", "50.8", "70.5", "62.7", "46.9", "75.2", "64", "58.9", "67.8", "69.7", "61.8", "66", "60.8", "73.1", "66.1", "47", "56.7", "61.4", "55.2", "76.4", "74.2", "64.9", "45", "55.5", "76.1", "68.4", "61.1", "75.1", "56", "73.1", "67.2", "66", "70.7", "73.1", "75", "69.7", "68.2", "50.3", "69.5", "69.3", "67.5", "62.5", "71.8", "55.8", "72.6", "69.9", "49.5", "73.1", "70.8", "71.8", "60.2", "52.8", "62.8", "76.6", "70.5", "54.9", "68.5", "60", "76.9", "76.9", "68.5", "73", "64.4", "57.9", "70.4", "55.8", "57.5", "68", "68.5", "69.8", "65.2", "62", "52.3", "70", "71.9", "74.7", "74.8", "72.1", "67", "62.3", "72.2", "69.1", "67.4", "57.8", "56.9", "63.5", "51.1"]
    },
    "2000": {
      "name": "2000",
      "data": ["51", "74.2", "73.2", "82.7", "52.6", "73.9", "74.3", "71.4", "79.7", "78.2", "68", "70.3", "73.6", "65.8", "74.3", "68.2", "77.8", "69", "59.2", "63.9", "67.6", "75.2", "51.6", "71.9", "75.5", "71.7", "53.3", "47.5", "60.9", "55", "79.3", "70.1", "46.7", "52.4", "77.2", "71.5", "72.5", "60.2", "52.5", "52.6", "77.7", "52.8", "74.7", "75.9", "79.1", "75", "76.9", "59.6", "73.3", "72.7", "73.2", "68.9", "72.9", "52.4", "49.3", "70.1", "52.5", "64.2", "77.8", "79.1", "58", "60", "72.3", "78.1", "60.2", "78", "70.5", "68.5", "55.6", "51.7", "64.4", "58.6", "68.8", "71.8", "79.9", "61.1", "68.3", "71.2", "69.1", "76.7", "78.8", "79.6", "72.7", "81.1", "73.1", "63.6", "57.4", "59.5", "63.2", "76.3", "77.5", "65.8", "59.5", "70.1", "76.2", "49.8", "55.9", "74.6", "72", "78.2", "73.9", "60.5", "46.3", "73.8", "72.6", "51.1", "79.7", "63.8", "61.8", "71", "75.1", "64.5", "69.3", "61.4", "72", "71.3", "53.6", "61.4", "55", "64.9", "78.1", "78.5", "73.9", "53", "55.8", "78.7", "73.7", "62.6", "76.9", "56.9", "74.1", "74.3", "69", "73.8", "76.7", "77.2", "70.8", "65.4", "50", "72", "69.8", "69.9", "65.3", "76.1", "60", "74.7", "70.9", "52.2", "78.6", "73.3", "75.8", "61.7", "54.3", "57.1", "79.3", "72.4", "64.4", "68.8", "48.7", "79.7", "80", "73.8", "76", "66.3", "54.8", "71.3", "63.6", "59", "69.1", "69.4", "75", "71.5", "63.1", "50", "67.5", "73.8", "77.8", "77.1", "74.6", "67.4", "63", "74.3", "73.5", "72.6", "63.5", "45.7", "50.8", "54.1"]
    },
    "2015": {
      "name": "2015",
      "data": ["57.63", "76", "76.5", "84.1", "61", "75.2", "76.2", "74.4", "81.8", "81", "72.9", "72.3", "79.2", "70.1", "75.8", "70.4", "80.4", "70", "65.5", "70.2", "72.3", "77.9", "66.4", "75.6", "78.7", "74.9", "62.8", "60.4", "68.4", "59.5", "81.7", "74.6", "53.8", "57.7", "79.3", "76.9", "75.8", "64.1", "58.3", "61.9", "80", "60.33", "78", "78.5", "82.6", "78.6", "80.1", "64.63", "74.6", "73.8", "75.2", "71.3", "74.1", "60.63", "62.9", "76.8", "63.6", "66.3", "80.8", "81.9", "60.53", "65.1", "73.3", "81.1", "65.5", "79.8", "71.7", "73.1", "60.8", "53.4", "64.4", "65.3", "72.4", "76.2", "82.8", "66.8", "70.9", "78.5", "72.1", "80.4", "82.4", "82.1", "75.5", "83.5", "78.3", "68.2", "66.63", "62.4", "71.4", "80.7", "80.7", "69", "66.4", "75.7", "78.5", "48.5", "63.9", "76.2", "75.4", "81.1", "77", "64.7", "60.22", "75.1", "79.5", "57.6", "82.1", "65.1", "65.7", "73.9", "74.5", "67", "72.7", "65.3", "75.8", "74.7", "56.4", "67.9", "61", "71.2", "80.6", "80.6", "76.8", "62.2", "61.33", "81.6", "75.7", "66.5", "78.2", "60.6", "73.9", "77.5", "70.2", "77.3", "79.8", "82", "76.8", "73.13", "66.53", "74.5", "72.9", "72.2", "68.8", "78.1", "66.1", "78.1", "73.7", "58.5", "82.1", "76.4", "80.2", "64.1", "58.7", "63.72", "81.7", "76.5", "69.5", "70.5", "51.5", "82", "82.9", "70.26", "79.7", "71", "63.43", "75.1", "72.4", "64.23", "70.5", "71.4", "77.3", "76.5", "67.9", "60.8", "72.1", "76.6", "81.4", "79.1", "77.3", "70.1", "65", "75.8", "75.2", "76.5", "67.6", "58.96", "60.01", "58"]
    },
    "Country": {
      "name": "Country",
      "data": ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Dem. Rep.", "Congo, Rep.", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "North Korea", "South Korea", "Kuwait", "Kyrgyz Republic", "Lao", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macedonia, FYR", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Fed. Sts.", "Moldova", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "St. Lucia", "St. Vincent and the Grenadines", "Samoa", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovak Republic", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "West Bank and Gaza", "Vietnam", "Yemen", "Zambia", "Zimbabwe", "South Sudan"]
    },
    "Continent": {
      "name": "Continent",
      "data": ["Asia", "Europe", "Africa", "Europe", "Africa", "North America", "South America", "Europe", "Oceania", "Europe", "Europe", "North America", "Asia", "Asia", "North America", "Europe", "Europe", "North America", "Africa", "Asia", "South America", "Europe", "Africa", "South America", "Asia", "Europe", "Africa", "Africa", "Asia", "Africa", "North America", "Africa", "Africa", "Africa", "South America", "Asia", "South America", "Africa", "Africa", "Africa", "North America", "Africa", "Europe", "North America", "Europe", "Europe", "Europe", "Africa", "North America", "North America", "South America", "Africa", "North America", "Africa", "Africa", "Europe", "Africa", "Oceania", "Europe", "Europe", "Africa", "Africa", "Europe", "Europe", "Africa", "Europe", "North America", "North America", "Africa", "Africa", "South America", "North America", "North America", "Europe", "Europe", "Asia", "Asia", "Asia", "Asia", "Europe", "Asia", "Europe", "North America", "Asia", "Asia", "Asia", "Africa", "Oceania", "Asia", "Asia", "Asia", "Asia", "Asia", "Europe", "Asia", "Africa", "Africa", "Africa", "Europe", "Europe", "Europe", "Africa", "Africa", "Asia", "Asia", "Africa", "Europe", "Oceania", "Africa", "Africa", "North America", "Oceania", "Europe", "Asia", "Europe", "Africa", "Africa", "Asia", "Africa", "Asia", "Europe", "Oceania", "North America", "Africa", "Africa", "Europe", "Asia", "Asia", "North America", "Oceania", "South America", "South America", "Asia", "Europe", "Europe", "Asia", "Europe", "Asia", "Africa", "North America", "North America", "Oceania", "Africa", "Asia", "Africa", "Europe", "Africa", "Africa", "Asia", "Europe", "Europe", "Oceania", "Africa", "Africa", "Europe", "Asia", "Africa", "South America", "Africa", "Europe", "Europe", "Asia", "Asia", "Asia", "Africa", "Asia", "Asia", "Africa", "Oceania", "North America", "Africa", "Asia", "Asia", "Africa", "Europe", "Asia", "Europe", "North America", "South America", "Asia", "Oceania", "South America", "Asia", "Asia", "Asia", "Africa", "Africa", "Africa"]
    }
  },
  oldFaithful: {
    "eruptions": {
      "name": "eruptions",
      "data": [3.6, 1.8, 3.333, 2.283, 4.533, 2.883, 4.7, 3.6, 1.95, 4.35, 1.833, 3.917, 4.2, 1.75, 4.7, 2.167, 1.75, 4.8, 1.6, 4.25, 1.8, 1.75, 3.45, 3.067, 4.533, 3.6, 1.967, 4.083, 3.85, 4.433, 4.3, 4.467, 3.367, 4.033, 3.833, 2.017, 1.867, 4.833, 1.833, 4.783, 4.35, 1.883, 4.567, 1.75, 4.533, 3.317, 3.833, 2.1, 4.633, 2, 4.8, 4.716, 1.833, 4.833, 1.733, 4.883, 3.717, 1.667, 4.567, 4.317, 2.233, 4.5, 1.75, 4.8, 1.817, 4.4, 4.167, 4.7, 2.067, 4.7, 4.033, 1.967, 4.5, 4, 1.983, 5.067, 2.017, 4.567, 3.883, 3.6, 4.133, 4.333, 4.1, 2.633, 4.067, 4.933, 3.95, 4.517, 2.167, 4, 2.2, 4.333, 1.867, 4.817, 1.833, 4.3, 4.667, 3.75, 1.867, 4.9, 2.483, 4.367, 2.1, 4.5, 4.05, 1.867, 4.7, 1.783, 4.85, 3.683, 4.733, 2.3, 4.9, 4.417, 1.7, 4.633, 2.317, 4.6, 1.817, 4.417, 2.617, 4.067, 4.25, 1.967, 4.6, 3.767, 1.917, 4.5, 2.267, 4.65, 1.867, 4.167, 2.8, 4.333, 1.833, 4.383, 1.883, 4.933, 2.033, 3.733, 4.233, 2.233, 4.533, 4.817, 4.333, 1.983, 4.633, 2.017, 5.1, 1.8, 5.033, 4, 2.4, 4.6, 3.567, 4, 4.5, 4.083, 1.8, 3.967, 2.2, 4.15, 2, 3.833, 3.5, 4.583, 2.367, 5, 1.933, 4.617, 1.917, 2.083, 4.583, 3.333, 4.167, 4.333, 4.5, 2.417, 4, 4.167, 1.883, 4.583, 4.25, 3.767, 2.033, 4.433, 4.083, 1.833, 4.417, 2.183, 4.8, 1.833, 4.8, 4.1, 3.966, 4.233, 3.5, 4.366, 2.25, 4.667, 2.1, 4.35, 4.133, 1.867, 4.6, 1.783, 4.367, 3.85, 1.933, 4.5, 2.383, 4.7, 1.867, 3.833, 3.417, 4.233, 2.4, 4.8, 2, 4.15, 1.867, 4.267, 1.75, 4.483, 4, 4.117, 4.083, 4.267, 3.917, 4.55, 4.083, 2.417, 4.183, 2.217, 4.45, 1.883, 1.85, 4.283, 3.95, 2.333, 4.15, 2.35, 4.933, 2.9, 4.583, 3.833, 2.083, 4.367, 2.133, 4.35, 2.2, 4.45, 3.567, 4.5, 4.15, 3.817, 3.917, 4.45, 2, 4.283, 4.767, 4.533, 1.85, 4.25, 1.983, 2.25, 4.75, 4.117, 2.15, 4.417, 1.817, 4.467]
    },
    "waiting": {
      "name": "waiting",
      "data": [79, 54, 74, 62, 85, 55, 88, 85, 51, 85, 54, 84, 78, 47, 83, 52, 62, 84, 52, 79, 51, 47, 78, 69, 74, 83, 55, 76, 78, 79, 73, 77, 66, 80, 74, 52, 48, 80, 59, 90, 80, 58, 84, 58, 73, 83, 64, 53, 82, 59, 75, 90, 54, 80, 54, 83, 71, 64, 77, 81, 59, 84, 48, 82, 60, 92, 78, 78, 65, 73, 82, 56, 79, 71, 62, 76, 60, 78, 76, 83, 75, 82, 70, 65, 73, 88, 76, 80, 48, 86, 60, 90, 50, 78, 63, 72, 84, 75, 51, 82, 62, 88, 49, 83, 81, 47, 84, 52, 86, 81, 75, 59, 89, 79, 59, 81, 50, 85, 59, 87, 53, 69, 77, 56, 88, 81, 45, 82, 55, 90, 45, 83, 56, 89, 46, 82, 51, 86, 53, 79, 81, 60, 82, 77, 76, 59, 80, 49, 96, 53, 77, 77, 65, 81, 71, 70, 81, 93, 53, 89, 45, 86, 58, 78, 66, 76, 63, 88, 52, 93, 49, 57, 77, 68, 81, 81, 73, 50, 85, 74, 55, 77, 83, 83, 51, 78, 84, 46, 83, 55, 81, 57, 76, 84, 77, 81, 87, 77, 51, 78, 60, 82, 91, 53, 78, 46, 77, 84, 49, 83, 71, 80, 49, 75, 64, 76, 53, 94, 55, 76, 50, 82, 54, 75, 78, 79, 78, 78, 70, 79, 70, 54, 86, 50, 90, 54, 54, 77, 79, 64, 75, 47, 86, 63, 85, 82, 57, 82, 67, 74, 54, 83, 73, 73, 88, 80, 71, 83, 56, 79, 78, 84, 58, 83, 43, 60, 75, 81, 46, 90, 46, 74]
    }
  }
});
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}// Generated by LiveScript 1.3.1
plotdb.config = {
  fontFamily: {
    name: "Font",
    type: [plotdb.String],
    'default': "Arial",
    category: "Global Settings"
  },
  fontSize: {
    name: "Font Size",
    type: [plotdb.Number],
    'default': 13,
    category: "Global Settings"
  },
  duration: {
    name: "Animation Duration",
    type: [plotdb.Number],
    'default': 1.5,
    desc: "Animation Duration, in second (e.g., 1.5)",
    category: "Global Settings"
  },
  background: {
    name: "Background",
    type: [plotdb.Color],
    'default': '#ffffff',
    category: "Global Settings"
  },
  textFill: {
    name: "Text Color",
    type: [plotdb.Color],
    'default': '#000000',
    category: "Global Settings"
  },
  margin: {
    name: "Margin",
    type: [plotdb.Number],
    'default': 10,
    category: "Global Settings"
  },
  aspectRatio: {
    name: "Aspect Ratio",
    type: [plotdb.Boolean],
    'default': true,
    category: "Layout"
  },
  zeroBaseline: {
    name: "Zero Baseline",
    desc: "y Axis starts with zero",
    type: [plotdb.Boolean],
    'default': true,
    category: "Global Settings"
  },
  popupShow: {
    name: "show Popup",
    desc: "show Popup when user hovers over elements",
    type: [plotdb.Boolean],
    'default': true,
    category: "Popup",
    rebindOnChange: true
  },
  boxRoundness: {
    name: "Block Roundness",
    type: [plotdb.Number],
    'default': 0,
    category: "Global Settings"
  },
  palette: {
    name: "Palette",
    type: [plotdb.Palette],
    subtype: plotdb.Palette.subtype.Qualitative,
    'default': {
      colors: [
        {
          hex: '#f4502a'
        }, {
          hex: '#f1c227'
        }, {
          hex: '#008a6d'
        }, {
          hex: '#00acdb'
        }, {
          hex: '#0064a8'
        }
      ]
    },
    category: "Global Settings"
  },
  colorNegative: {
    name: "Negative",
    type: [plotdb.Color],
    desc: "Color for negative values",
    'default': plotdb.Color.Negative,
    subtype: plotdb.Color.subtype.Negative,
    category: "Global Settings"
  },
  colorPositive: {
    name: "Positive",
    type: [plotdb.Color],
    desc: "Color for positive values",
    'default': plotdb.Color.Positive,
    subtype: plotdb.Color.subtype.Positive,
    category: "Global Settings"
  },
  colorNeutral: {
    name: "Neutral",
    type: [plotdb.Color],
    desc: "Color for neutral values",
    'default': plotdb.Color.Neutral,
    subtype: plotdb.Color.subtype.Neutral,
    category: "Global Settings"
  },
  colorEmpty: {
    name: "Empty",
    type: [plotdb.Color],
    desc: "Color for 'no values'",
    'default': plotdb.Color.Empty,
    subtype: plotdb.Color.subtype.Empty,
    category: "Global Settings"
  },
  colorPast: {
    name: "Past",
    type: [plotdb.Color],
    desc: "Color for values in past",
    subtype: plotdb.Color.subtype.Fade,
    category: "Global Settings"
  },
  fill: {
    name: "Fill",
    type: [plotdb.Color],
    'default': '#e03f0e',
    category: "Global Settings"
  },
  fillOpacity: {
    name: "Fill Opacity",
    type: [plotdb.Number],
    'default': 0.6,
    category: "Global Settings"
  },
  stroke: {
    name: "Stroke",
    type: [plotdb.Color],
    desc: "Stroke Color",
    'default': '#999',
    category: "Global Settings"
  },
  geoFill: {
    name: "Fill Color",
    type: [plotdb.Color],
    desc: "Default color for filling geographic path",
    'default': '#eee',
    category: "Geography"
  },
  geoStroke: {
    name: "Stroke Color",
    type: [plotdb.Color],
    desc: "Default color for outline of geographic path",
    'default': '#919191',
    category: "Geography"
  },
  geoStrokeWidth: {
    name: "Stroke Width",
    type: [plotdb.Number],
    desc: "geographic path outline width",
    'default': '1',
    category: "Geography"
  },
  hoverFill: {
    name: "Hovering Fill Color",
    type: [plotdb.Color],
    desc: "Fill color when hovering element",
    'default': '#aaa',
    category: "Color"
  },
  hoverStroke: {
    name: "Hovering Stroke Color",
    type: [plotdb.Color],
    desc: "Stroke color when hovering element",
    'default': '#fff',
    category: "Color"
  },
  connectFill: {
    name: "Fill Color",
    type: [plotdb.Color],
    desc: "Fill color between connection path of data node",
    'default': '#aaa',
    category: "Line"
  },
  connectStroke: {
    name: "Stroke Color",
    type: [plotdb.Color],
    desc: "Stroke color between connection path of data node",
    'default': '#aaa',
    category: "Line"
  },
  connectStrokeWidth: {
    name: "Stroke width",
    type: [plotdb.Number],
    desc: "Stroke size between connection path of data node",
    'default': 2,
    category: "Line"
  },
  connectDashArray: {
    name: "Dash Array",
    type: [plotdb.String],
    desc: "SVG style dash array. '2 4' means 2px line and 4px space.",
    'default': "2 2",
    category: "Line"
  },
  gridShow: {
    name: "Show Grid",
    type: [plotdb.Boolean],
    'default': true,
    category: "Grid"
  },
  gridBackground: {
    name: "Background",
    type: [plotdb.Color],
    'default': '#fff',
    category: "Grid"
  },
  gridStroke: {
    name: "Color",
    type: [plotdb.Color],
    'default': '#ccc',
    category: "Grid"
  },
  gridStrokeWidth: {
    name: "Stroke Width",
    type: [plotdb.Number],
    'default': 1,
    category: "Grid"
  },
  gridFrameStroke: {
    name: "Frame Color",
    type: [plotdb.Color],
    'default': '#ccc',
    category: 'Grid'
  },
  gridFrameStrokeWidth: {
    name: "Frame Width",
    type: [plotdb.Number],
    'default': 3,
    category: 'Grid'
  },
  gridDashArray: {
    name: "Dash Style",
    type: [plotdb.String],
    'default': "2 4",
    category: "Grid",
    desc: "SVG style dash array. '2 4' means 2px line and 4px space."
  },
  padding: {
    name: "Padding",
    type: [plotdb.Number],
    'default': 10,
    category: "Global Settings"
  },
  bubbleSizeMin: {
    name: "Min Size",
    type: [plotdb.Number],
    'default': 0,
    category: "Bubble"
  },
  bubbleSizeMax: {
    name: "Max Size",
    type: [plotdb.Number],
    'default': 20,
    category: "Bubble"
  },
  bubbleFill: {
    name: "Fill Color",
    type: [plotdb.Color],
    'default': '#ffaaaa',
    category: "Bubble"
  },
  bubbleStroke: {
    name: "Stroke Color",
    type: [plotdb.Color],
    'default': '#c01d1d',
    category: "Bubble"
  },
  bubbleStrokeWidth: {
    name: "Stroke Width",
    type: [plotdb.Number],
    'default': '1',
    category: "Bubble"
  },
  bubblePadding: {
    name: "Bubble Padding",
    type: [plotdb.Number],
    'default': 5,
    category: "Bubble"
  },
  barThick: {
    name: "Bar Thickness",
    type: [plotdb.Number],
    'default': 10,
    category: "Layout"
  },
  lineThick: {
    name: "Line Thickness",
    type: [plotdb.Number],
    'default': 10,
    category: "Layout"
  },
  legendShow: {
    name: "Show Legend",
    type: [plotdb.Boolean],
    'default': true,
    category: "Legend"
  },
  legendLabel: {
    name: "Label",
    type: [plotdb.String],
    category: "Legend"
  },
  legendPosition: {
    name: "Position",
    type: [plotdb.Choice(['top', 'left', 'right', 'bottom'])],
    'default': "right",
    category: "Legend"
  },
  otherLabel: {
    name: "Label for 'other'",
    type: [plotdb.String],
    'default': "Other",
    category: "Text"
  },
  showLabel: {
    name: "Show Data Label",
    type: [plotdb.Boolean],
    'default': false,
    category: "Label"
  },
  labelShadowSize: {
    name: "Label Shadow Size",
    type: [plotdb.Number],
    'default': 2,
    category: "Label"
  },
  labelShow: {
    name: "Show Data Label",
    type: [plotdb.Boolean],
    'default': false,
    category: "Label"
  },
  nodeShow: {
    name: "Show Data Dot",
    type: [plotdb.Boolean],
    'default': true,
    category: "Dot"
  },
  nodeSize: {
    name: "Dot Size",
    type: [plotdb.Number],
    'default': 6,
    category: "Dot"
  },
  nodeFill: {
    name: "Fill Color",
    type: [plotdb.Color],
    desc: "fill Dot with this color",
    'default': '#eee',
    category: "Dot"
  },
  nodeStroke: {
    name: "Stroke Color",
    type: [plotdb.Color],
    desc: "draw Dot outline with this color",
    'default': '#919191',
    category: "Dot"
  },
  nodeStrokeWidth: {
    name: "Stroke Width",
    type: [plotdb.Number],
    'default': '1',
    category: "Dot"
  },
  labelPosition: {
    name: "Label Position",
    type: [plotdb.Choice(["in", "out"])],
    'default': "out",
    category: "Switch"
  },
  showPercent: {
    name: "Percentage in Label",
    type: [plotdb.Boolean],
    desc: "Show percentage in data label",
    'default': true,
    category: "Switch"
  },
  xScaleRange: {
    name: "Data Range in X axis",
    type: [plotdb.Range],
    desc: "Enforce chart rendering within this range, in x axis",
    'default': [0, 1],
    category: "Value"
  },
  yScaleRange: {
    name: "Data Range in Y axis",
    type: [plotdb.Range],
    desc: "Enforce chart rendering within this range, in y axis",
    'default': [0, 1],
    category: "Value"
  },
  rScaleRange: {
    name: "Data Range in Circle Radius",
    type: [plotdb.Range],
    desc: "Enforce chart rendering within this range, in circle radius",
    'default': [0, 1],
    category: "Value"
  },
  threshold: {
    name: "Threshold",
    type: [plotdb.Number],
    desc: "data larger than this value will be treated as positive, vice versa.",
    'default': 0,
    category: "Value"
  },
  sort: {
    name: "Sort data",
    type: [plotdb.Choice(['Ascending', 'Descending', 'None'])],
    'default': "Descending",
    category: "Value"
  },
  emptyAs0: {
    name: "Empty as 0",
    type: [plotdb.Boolean],
    desc: "Treat undefined data as 0",
    'default': true,
    category: "Value"
  },
  otherLimit: {
    name: "Small Data Threshold",
    type: [plotdb.Number],
    desc: "Data smaller than this value will be clustered into one set of data",
    'default': 0,
    category: "Value"
  }
  /*
  #Axis
  axisInnerPadding: do
    name: "Axis Inner Tick length"
    type: [plotdb.Number]
    default: 2
    category: "Axis"
  
  axisOutterPadding: do
    name: "Axis Outer Tick length"
    type: [plotdb.Number]
    default: 2
    category: "Axis"
  
  showXAxis: do
    name: "Show Axis"
    type: [plotdb.Boolean]
    default: true
    category: "X Axis"
  
  xAxisShowDomain: do
    name: "Show Baseline"
    default: true
    category: "X Axis"
  
  xAxisTickSizeInner: do
    name: "Inner Tick Size"
    type: [plotdb.Number]
    default: 6
    category: "X Axis"
  
  xAxisTickSizeOuter: do
    name: "Outer Tick Size"
    type: [plotdb.Number]
    default: 6
    category: "X Axis"
  
  xAxisTickPadding: do
    name: "Tick Padding"
    type: [plotdb.Number]
    default: 3
    category: "X Axis"
  
  showYAxis: do
    name: "Show Axis"
    type: [plotdb.Boolean]
    default: true
    category: "Y Axis"
  
  yAxisShowDomain: do
    name: "Show Baseline"
    default: true
    category: "Y Axis"
  
  yAxisTickSizeInner: do
    name: "Inner Tick Size"
    type: [plotdb.Number]
    default: 6
    category: "Y Axis"
  
  yAxisTickSizeOuter: do
    name: "Outer Tick Size"
    type: [plotdb.Number]
    default: 6
    category: "Y Axis"
  
  yAxisTickPadding: do
    name: "Tick Padding"
    type: [plotdb.Number]
    default: 3
    category: "Y Axis"
  
  showRadialAxis: do
    name: "Show Axis"
    type: [plotdb.Boolean]
    default: true
    category: "Radial Axis"
  
  rAxisShowDomain: do
    name: "Show Baseline"
    default: true
    category: "Radial Axis"
  
  rAxisTickSizeInner: do
    name: "Inner Tick Size"
    type: [plotdb.Number]
    default: 6
    category: "Radial Axis"
  
  rAxisTickSizeOuter: do
    name: "Outer Tick Size"
    type: [plotdb.Number]
    default: 6
    category: "Radial Axis"
  
  rAxisTickPadding: do
    name: "Tick Padding"
    type: [plotdb.Number]
    default: 3
    category: "Radial Axis"
  
  showAngularAxis: do
    name: "Show Axis"
    type: [plotdb.Boolean]
    default: true
    category: "Angular Axis"
  
  aAxisShowDomain: do
    name: "Show Baseline"
    default: true
    category: "Angular Axis"
  
  aAxisTickSizeInner: do
    name: "Inner Tick Size"
    type: [plotdb.Number]
    default: 6
    category: "Angular Axis"
  
  aAxisTickSizeOuter: do
    name: "Outer Tick Size"
    type: [plotdb.Number]
    default: 6
    category: "Angular Axis"
  
  aAxisTickPadding: do
    name: "Tick Padding"
    type: [plotdb.Number]
    default: 3
    category: "Angular Axis"
  */,
  lineSmoothing: {
    name: "Line Smoothing",
    'default': "linear",
    type: [plotdb.Choice(['linear', 'step', 'step-before', 'step-after', 'basis', 'bundle', 'cardinal', 'monotone'])],
    category: "Line"
  },
  strokeWidth: {
    name: "Stroke Width",
    type: [plotdb.Number],
    desc: "Default Stroke width",
    'default': '2',
    category: "Global Settings"
  },
  strokeDashArray: {
    name: "Stroke Dash Style",
    type: [plotdb.Number],
    'default': '2',
    desc: "SVG style dash array. '2 4' means 2px line and 4px space.",
    category: "Global Settings"
  }
};
['X', 'Y', 'Radial', 'Angular'].forEach(function(n){
  var p, c, b, v;
  p = n.charAt(0).toLowerCase() + "Axis";
  c = n + " Axis";
  b = [plotdb.Boolean];
  n = [plotdb.Number];
  v = [plotdb.Color];
  plotdb.config[p + "Show"] = {
    name: "Show Axis",
    type: b,
    'default': true,
    category: c
  };
  plotdb.config[p + "ShowDomain"] = {
    name: "Show Basline",
    type: b,
    'default': true,
    category: c
  };
  plotdb.config[p + "TickSizeInner"] = {
    name: "Inner Tick Size",
    type: n,
    'default': 4,
    category: c
  };
  plotdb.config[p + "TickSizeOuter"] = {
    name: "Outer Tick Size",
    type: n,
    'default': 0,
    category: c
  };
  plotdb.config[p + "TickPadding"] = {
    name: "Tick Padding",
    type: n,
    'default': 4,
    category: c
  };
  plotdb.config[p + "Stroke"] = {
    name: "Stroke Color",
    type: v,
    'default': "#000",
    category: c
  };
  plotdb.config[p + "Label"] = {
    name: "Label",
    type: [plotdb.String],
    'default': "",
    category: c
  };
  plotdb.config[p + "TickCount"] = {
    name: "Tick Count",
    type: n,
    'default': 6,
    category: c,
    desc: "Hint on number of tick. Actual number will be decided by program"
  };
  plotdb.config[p + "LabelPosition"] = {
    name: "Label Position",
    type: [plotdb.Choice(['in', 'center'])],
    'default': "center",
    category: c
  };
  plotdb.config[p + "TickDirection"] = {
    name: "Tick Direction",
    type: [plotdb.Choice(['vertical', 'horizontal'])],
    'default': "horizontal",
    category: c
  };
  return plotdb.config[p + "HandleOverlap"] = {
    name: "Overlap Ticks",
    type: [plotdb.Choice(['none', 'hidden', 'offset'])],
    'default': "hidden",
    category: c,
    desc: "How should overlapped ticks be taken care?"
  };
});// Generated by LiveScript 1.3.1
(function(){
  var config, x$, e;
  config = {
    domain: 'localhost',
    domainIO: 'localhost.io',
    urlschema: "http://",
    name: 'plotdb',
    debug: true,
    facebook: {
      clientID: '1546734828988373'
    },
    google: {
      clientID: '1003996266757-4gv30no8ije0sd8d8qsd709dluav0676.apps.googleusercontent.com'
    },
    mode: 1,
    plan: {
      sizeLimits: [1000000, 50000000, 1000000000]
    }
  };
  if (typeof module != 'undefined' && module !== null) {
    module.exports = config;
  } else if (typeof angular != 'undefined' && angular !== null) {
    try {
      x$ = angular.module('plotDB');
      x$.service('plConfig', [].concat(function(){
        return config;
      }));
    } catch (e$) {
      e = e$;
    }
  }
  if (typeof window != 'undefined' && window !== null) {
    return window.plConfig = config;
  }
})();// Generated by LiveScript 1.3.1
plotdb.view = {
  host: plConfig.urlschema + "" + plConfig.domainIO,
  loader: function(key, cb){
    var req;
    req = new XMLHttpRequest();
    req.onload = function(){
      var ret, e;
      try {
        ret = JSON.parse(this.responseText);
        if (Array.isArray(ret)) {
          return cb(ret.map(function(it){
            return new plotdb.view.chart(it, {});
          }));
        } else {
          return cb(new plotdb.view.chart(ret, {}));
        }
      } catch (e$) {
        e = e$;
        console.error("load chart " + key + " failed when parsing response: ");
        return console.error(e);
      }
    };
    if (typeof key === 'number') {
      req.open('get', this.host + "/d/chart/" + key, true);
    } else if (typeof key === 'string') {
      req.open('get', key, true);
    }
    return req.send();
  },
  chart: function(chart, arg$){
    var ref$, theme, fields, root, data, code;
    ref$ = arg$ != null
      ? arg$
      : {}, theme = ref$.theme, fields = ref$.fields, root = ref$.root, data = ref$.data;
    this._ = {
      handler: {},
      _chart: JSON.stringify(chart),
      fields: fields,
      root: root,
      inited: false
    };
    if (chart) {
      code = chart.code.content;
      if (code[0] === '{') {
        code = "(function() { return " + code + "; })();";
      } else {
        code = "(function() { " + code + "; return module.exports; })();";
      }
      this._.chart = chart = import$(eval(code), chart);
    }
    plotdb.chart.updateDimension(chart);
    plotdb.chart.updateConfig(chart, chart.config);
    plotdb.chart.updateAssets(chart, chart.assets);
    if (data) {
      this.data(data);
    }
    if (fields) {
      this.sync(fields);
    }
    if (!data && (fields == null || !fields.length)) {
      this.data(chart.sample);
    }
    if (theme != null) {
      this.theme(theme);
    }
    if (fields != null) {
      this.sync(fields);
    }
    if (root) {
      this.attach(root);
    }
    chart.saveLocal = function(chart, key){
      return function(cb){
        var req;
        req = new XMLHttpRequest();
        req.onload = function(){
          if (cb) {
            return cb();
          }
        };
        req.open('put', plConfig.urlschema + "" + plConfig.domain + "/e/chart/" + key + "/local", true);
        req.setRequestHeader('Content-Type', "application/json;charset=UTF-8");
        return req.send(JSON.stringify(chart.local));
      };
    }(chart, chart.key);
    return this;
  }
};
import$(plotdb.view.chart.prototype, {
  update: function(){
    var this$ = this;
    return ['resize', 'bind', 'render'].map(function(it){
      if (this$._.chart[it]) {
        return this$._.chart[it]();
      }
    });
  },
  loadlib: function(root){
    var libs;
    return libs = this._.chart.library || [];
  },
  attach: function(root){
    var ref$, chart, theme, resize, newClass, e;
    this._.root = root;
    ref$ = {
      chart: (ref$ = this._).chart,
      theme: ref$.theme
    }, chart = ref$.chart, theme = ref$.theme;
    root.setAttribute("class", ((root.getAttribute("class") || "").split(" ").filter(function(it){
      return it !== 'pdb-root';
    }).concat(['pdb-root'])).join(" "));
    root.innerHTML = [chart && chart.style ? "<style type='text/css'>/* <![CDATA[ */" + chart.style.content + "/* ]]> */</style>" : void 8, theme && theme.style ? "<style type='text/css'>/* <![CDATA[ */" + theme.style.content + "/* ]]> */</style>" : void 8, "<div style='position:relative;width:100%;height:100%;'><div style='height:0;'>&nbsp;</div>", chart.doc.content, "</div>", theme && (theme.doc || (theme.doc = {})).content ? theme.doc.content : void 8].join("");
    chart.root = root.querySelector("div:first-of-type");
    resize = function(){
      var this$ = this;
      if (resize.handle) {
        clearTimeout(resize.handle);
      }
      return resize.handle = setTimeout(function(){
        resize.handle = null;
        chart.resize();
        return chart.render();
      }, 500);
    };
    window.addEventListener('resize', function(){
      return resize();
    });
    newClass = (root.getAttribute('class') || "").split(' ').filter(function(it){
      return it !== 'loading';
    }).join(" ").trim();
    try {
      chart.init();
      if (chart.parse) {
        chart.parse();
      }
      chart.resize();
      chart.bind();
      chart.render();
    } catch (e$) {
      e = e$;
      newClass += ' error';
    }
    root.setAttribute('class', newClass);
    return this.inited = true;
  },
  config: function(config){
    return import$(this._.chart.config, config);
  },
  init: function(root){
    return this._.chart.init();
  },
  parse: function(){
    return this._.chart.parse();
  },
  resize: function(){
    return this._.chart.resize();
  },
  bind: function(){
    return this._.chart.bind();
  },
  render: function(){
    return this._.chart.render();
  },
  clone: function(){
    var ref$;
    return new plotdb.view.chart(JSON.parse(this._._chart), {
      theme: (ref$ = this._).theme,
      fields: ref$.fields
    });
  },
  on: function(event, cb){
    var ref$;
    return ((ref$ = this._.handler)[event] || (ref$[event] = [])).push(cb);
  },
  theme: function(theme){
    return this._.theme = import$(eval(theme.code.content), theme);
  },
  data: function(data){
    if (data == null) {
      return this._.data;
    }
    this._.data = data;
    return this.sync();
  },
  sync: function(fields){
    var hash, i$, len$, item, k, ref$, v;
    fields == null && (fields = []);
    if (this._.data) {
      return this._.chart.data = plotdb.chart.dataFromHash(this._.chart.dimension, this._.data);
    }
    hash = {};
    for (i$ = 0, len$ = fields.length; i$ < len$; ++i$) {
      item = fields[i$];
      hash[item.key] = item;
    }
    for (k in ref$ = this._.chart.dimension) {
      v = ref$[k];
      v.fields = (v.fields || []).map(fn$).filter(fn1$);
    }
    plotdb.chart.updateData(this._.chart);
    if (this.inited && this._.chart.parse) {
      return this._.chart.parse();
    }
    function fn$(it){
      return hash[it.key];
    }
    function fn1$(it){
      return it;
    }
  }
});
plotdb.load = function(key, cb){
  return plotdb.view.loader(key, cb);
};
plotdb.render = function(config, cb){
  return plotdb.view.render(config, cb);
};
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}