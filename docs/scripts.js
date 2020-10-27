/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
/**!

 @license
 handlebars v4.0.11

Copyright (C) 2011-2017 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsRuntime = __webpack_require__(2);

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	// Compiler imports

	var _handlebarsCompilerAst = __webpack_require__(35);

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = __webpack_require__(36);

	var _handlebarsCompilerCompiler = __webpack_require__(41);

	var _handlebarsCompilerJavascriptCompiler = __webpack_require__(42);

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = __webpack_require__(39);

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(4);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(21);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(6);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(22);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(10);

	var _decorators = __webpack_require__(18);

	var _logger = __webpack_require__(20);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.11';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$defineProperty = __webpack_require__(7)['default'];

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  try {
	    if (loc) {
	      this.lineNumber = line;

	      // Work around issue under safari where we can't directly set the column value
	      /* istanbul ignore next */
	      if (_Object$defineProperty) {
	        Object.defineProperty(this, 'column', {
	          value: column,
	          enumerable: true
	        });
	      } else {
	        this.column = column;
	      }
	    }
	  } catch (nop) {
	    /* Ignore if the browser is very particular */
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(11);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(12);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(13);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(14);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(15);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(16);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(17);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(19);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$seal = __webpack_require__(23)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(4);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },
	    // An empty object to use as replacement for null-contexts
	    nullContext: _Object$seal({}),

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  // Use the current closure context to save the partial-block if this partial
	  var currentPartialBlock = options.data && options.data['partial-block'];
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    (function () {
	      options.data = _base.createFrame(options.data);
	      // Wrapper function to get access to currentPartialBlock from the closure
	      var fn = options.fn;
	      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        // Restore the partial-block from the closure for the execution of the block
	        // i.e. the part inside the block of the partial call.
	        options.data = _base.createFrame(options.data);
	        options.data['partial-block'] = currentPartialBlock;
	        return fn(context, options);
	      };
	      if (fn.partials) {
	        options.partials = Utils.extend({}, options.partials, fn.partials);
	      }
	    })();
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	module.exports = __webpack_require__(30).Object.seal;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(26);

	__webpack_require__(27)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(28)
	  , core    = __webpack_require__(30)
	  , fails   = __webpack_require__(33);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(29)
	  , core      = __webpack_require__(30)
	  , ctx       = __webpack_require__(31)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(32);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	exports.__esModule = true;
	exports.parse = parse;

	var _parser = __webpack_require__(37);

	var _parser2 = _interopRequireDefault(_parser);

	var _whitespaceControl = __webpack_require__(38);

	var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

	var _helpers = __webpack_require__(40);

	var Helpers = _interopRequireWildcard(_helpers);

	var _utils = __webpack_require__(5);

	exports.parser = _parser2['default'];

	var yy = {};
	_utils.extend(yy, Helpers);

	function parse(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var strip = new _whitespaceControl2['default'](options);
	  return strip.accept(_parser2['default'].parse(input));
	}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	// File ignored in coverage tests via setting in .istanbul.yml
	/* Jison generated parser */
	"use strict";

	exports.__esModule = true;
	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$
	        /**/) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = $$[$0];
	                    break;
	                case 9:
	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:
	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 20:
	                    this.$ = $$[$0];
	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:
	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 27:
	                    this.$ = $$[$0];
	                    break;
	                case 28:
	                    this.$ = $$[$0];
	                    break;
	                case 29:
	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 33:
	                    this.$ = $$[$0];
	                    break;
	                case 34:
	                    this.$ = $$[$0];
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 40:
	                    this.$ = $$[$0];
	                    break;
	                case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:
	                    this.$ = [];
	                    break;
	                case 47:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:
	                    this.$ = [$$[$0]];
	                    break;
	                case 49:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 50:
	                    this.$ = [];
	                    break;
	                case 51:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 58:
	                    this.$ = [];
	                    break;
	                case 59:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 64:
	                    this.$ = [];
	                    break;
	                case 65:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 70:
	                    this.$ = [];
	                    break;
	                case 71:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 78:
	                    this.$ = [];
	                    break;
	                case 79:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 82:
	                    this.$ = [];
	                    break;
	                case 83:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 86:
	                    this.$ = [];
	                    break;
	                case 87:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 90:
	                    this.$ = [];
	                    break;
	                case 91:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 94:
	                    this.$ = [];
	                    break;
	                case 95:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 98:
	                    this.$ = [$$[$0]];
	                    break;
	                case 99:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 100:
	                    this.$ = [$$[$0]];
	                    break;
	                case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
	        defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    if (!recovering) {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                            if (recovering > 0) recovering--;
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, col, lines;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) return token;else return;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== 'undefined') {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START
	        /**/) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
	            }

	            var YYSTATE = YY_START;
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) return 15;

	                    break;
	                case 1:
	                    return 15;
	                    break;
	                case 2:
	                    this.popState();
	                    return 15;

	                    break;
	                case 3:
	                    this.begin('raw');return 15;
	                    break;
	                case 4:
	                    this.popState();
	                    // Should be using `this.topState()` below, but it currently
	                    // returns the second top instead of the first top. Opened an
	                    // issue about it at https://github.com/zaach/jison/issues/291
	                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                        return 15;
	                    } else {
	                        yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
	                        return 'END_RAW_BLOCK';
	                    }

	                    break;
	                case 5:
	                    return 15;
	                    break;
	                case 6:
	                    this.popState();
	                    return 14;

	                    break;
	                case 7:
	                    return 65;
	                    break;
	                case 8:
	                    return 68;
	                    break;
	                case 9:
	                    return 19;
	                    break;
	                case 10:
	                    this.popState();
	                    this.begin('raw');
	                    return 23;

	                    break;
	                case 11:
	                    return 55;
	                    break;
	                case 12:
	                    return 60;
	                    break;
	                case 13:
	                    return 29;
	                    break;
	                case 14:
	                    return 47;
	                    break;
	                case 15:
	                    this.popState();return 44;
	                    break;
	                case 16:
	                    this.popState();return 44;
	                    break;
	                case 17:
	                    return 34;
	                    break;
	                case 18:
	                    return 39;
	                    break;
	                case 19:
	                    return 51;
	                    break;
	                case 20:
	                    return 48;
	                    break;
	                case 21:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin('com');

	                    break;
	                case 22:
	                    this.popState();
	                    return 14;

	                    break;
	                case 23:
	                    return 48;
	                    break;
	                case 24:
	                    return 73;
	                    break;
	                case 25:
	                    return 72;
	                    break;
	                case 26:
	                    return 72;
	                    break;
	                case 27:
	                    return 87;
	                    break;
	                case 28:
	                    // ignore whitespace
	                    break;
	                case 29:
	                    this.popState();return 54;
	                    break;
	                case 30:
	                    this.popState();return 33;
	                    break;
	                case 31:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                    break;
	                case 32:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                    break;
	                case 33:
	                    return 85;
	                    break;
	                case 34:
	                    return 82;
	                    break;
	                case 35:
	                    return 82;
	                    break;
	                case 36:
	                    return 83;
	                    break;
	                case 37:
	                    return 84;
	                    break;
	                case 38:
	                    return 81;
	                    break;
	                case 39:
	                    return 75;
	                    break;
	                case 40:
	                    return 77;
	                    break;
	                case 41:
	                    return 72;
	                    break;
	                case 42:
	                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
	                    break;
	                case 43:
	                    return 'INVALID';
	                    break;
	                case 44:
	                    return 5;
	                    break;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports["default"] = handlebars;
	module.exports = exports["default"];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _visitor = __webpack_require__(39);

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;
	exports.prepareProgram = prepareProgram;
	exports.preparePartialBlock = preparePartialBlock;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function validateClose(open, close) {
	  close = close.path ? close.path.original : close;

	  if (open.path.original !== close) {
	    var errorNode = { loc: open.path.loc };

	    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
	  }
	}

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substr(1, token.length - 2);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, loc) {
	  loc = this.locInfo(loc);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0,
	      depthString = '';

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
	      } else if (part === '..') {
	        depth++;
	        depthString += '../';
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return {
	    type: 'PathExpression',
	    data: data,
	    depth: depth,
	    parts: dig,
	    original: original,
	    loc: loc
	  };
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  var decorator = /\*/.test(open);
	  return {
	    type: decorator ? 'Decorator' : 'MustacheStatement',
	    path: path,
	    params: params,
	    hash: hash,
	    escaped: escaped,
	    strip: strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareRawBlock(openRawBlock, contents, close, locInfo) {
	  validateClose(openRawBlock, close);

	  locInfo = this.locInfo(locInfo);
	  var program = {
	    type: 'Program',
	    body: contents,
	    strip: {},
	    loc: locInfo
	  };

	  return {
	    type: 'BlockStatement',
	    path: openRawBlock.path,
	    params: openRawBlock.params,
	    hash: openRawBlock.hash,
	    program: program,
	    openStrip: {},
	    inverseStrip: {},
	    closeStrip: {},
	    loc: locInfo
	  };
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  if (close && close.path) {
	    validateClose(openBlock, close);
	  }

	  var decorator = /\*/.test(openBlock.open);

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (decorator) {
	      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
	    }

	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return {
	    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
	    path: openBlock.path,
	    params: openBlock.params,
	    hash: openBlock.hash,
	    program: program,
	    inverse: inverse,
	    openStrip: openBlock.strip,
	    inverseStrip: inverseStrip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareProgram(statements, loc) {
	  if (!loc && statements.length) {
	    var firstLoc = statements[0].loc,
	        lastLoc = statements[statements.length - 1].loc;

	    /* istanbul ignore else */
	    if (firstLoc && lastLoc) {
	      loc = {
	        source: firstLoc.source,
	        start: {
	          line: firstLoc.start.line,
	          column: firstLoc.start.column
	        },
	        end: {
	          line: lastLoc.end.line,
	          column: lastLoc.end.column
	        }
	      };
	    }
	  }

	  return {
	    type: 'Program',
	    body: statements,
	    strip: {},
	    loc: loc
	  };
	}

	function preparePartialBlock(open, program, close, locInfo) {
	  validateClose(open, close);

	  return {
	    type: 'PartialBlockStatement',
	    name: open.path,
	    params: open.params,
	    hash: open.hash,
	    program: program,
	    openStrip: open.strip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _ast = __webpack_require__(35);

	var _ast2 = _interopRequireDefault(_ast);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;
	    this.stringParams = options.stringParams;
	    this.trackIds = options.trackIds;

	    options.blockParams = options.blockParams || [];

	    // These changes will propagate to the other compiler components
	    var knownHelpers = options.knownHelpers;
	    options.knownHelpers = {
	      'helperMissing': true,
	      'blockHelperMissing': true,
	      'each': true,
	      'if': true,
	      'unless': true,
	      'with': true,
	      'log': true,
	      'lookup': true
	    };
	    if (knownHelpers) {
	      for (var _name in knownHelpers) {
	        /* istanbul ignore else */
	        if (_name in knownHelpers) {
	          this.options.knownHelpers[_name] = knownHelpers[_name];
	        }
	      }
	    }

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    /* istanbul ignore next: Sanity code */
	    if (!this[node.type]) {
	      throw new _exception2['default']('Unknown type: ' + node.type, node);
	    }

	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  DecoratorBlock: function DecoratorBlock(decorator) {
	    var program = decorator.program && this.compileProgram(decorator.program);
	    var params = this.setupFullMustacheParams(decorator, program, undefined),
	        path = decorator.path;

	    this.useDecorators = true;
	    this.opcode('registerDecorator', params.length, path.original);
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var program = partial.program;
	    if (program) {
	      program = this.compileProgram(partial.program);
	    }

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      if (this.options.explicitPartialContext) {
	        this.opcode('pushLiteral', 'undefined');
	      } else {
	        params.push({ type: 'PathExpression', parts: [], depth: 0 });
	      }
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, program, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },
	  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
	    this.PartialStatement(partialBlock);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache);

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },
	  Decorator: function Decorator(decorator) {
	    this.DecoratorBlock(decorator);
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    path.strict = true;
	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    var path = sexpr.path;
	    path.strict = true;
	    this.accept(path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.strict = true;
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _ast2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts, path.strict);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name2 = sexpr.path.parts[0],
	          options = this.options;

	      if (options.knownHelpers[_name2]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    var value = val.value != null ? val.value : val.original || '';

	    if (this.stringParams) {
	      if (value.replace) {
	        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
	      }

	      if (val.depth) {
	        this.addDepth(val.depth);
	      }
	      this.opcode('getContext', val.depth || 0);
	      this.opcode('pushStringParam', value, val.type);

	      if (val.type === 'SubExpression') {
	        // SubExpressions get evaluated and passed in
	        // in string params mode.
	        this.accept(val);
	      }
	    } else {
	      if (this.trackIds) {
	        var blockParamIndex = undefined;
	        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
	          blockParamIndex = this.blockParamIndex(val.parts[0]);
	        }
	        if (blockParamIndex) {
	          var blockParamChild = val.parts.slice(1).join('.');
	          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
	        } else {
	          value = val.original || value;
	          if (value.replace) {
	            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
	          }

	          this.opcode('pushId', val.type, value);
	        }
	      }
	      this.accept(val);
	    }
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _utils.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
	  }

	  options = options || {};
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var ast = env.parse(input, options),
	      environment = new env.Compiler().compile(ast, options);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, options, env) {
	  if (options === undefined) options = {};

	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  options = _utils.extend({}, options);
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var compiled = undefined;

	  function compileInput() {
	    var ast = env.parse(input, options),
	        environment = new env.Compiler().compile(ast, options),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  function ret(context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  }
	  ret._setup = function (setupOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._setup(setupOptions);
	  };
	  ret._child = function (i, data, blockParams, depths) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._child(i, data, blockParams, depths);
	  };
	  return ret;
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = {
	      type: 'PathExpression',
	      data: false,
	      depth: 0,
	      parts: [literal.original + ''],
	      original: literal.original + '',
	      loc: literal.loc
	    };
	  }
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _base = __webpack_require__(4);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _codeGen = __webpack_require__(43);

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /* , type*/) {
	    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
	      return [parent, '.', name];
	    } else {
	      return [parent, '[', JSON.stringify(name), ']'];
	    }
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend('var decorators = container.decorators;\n');
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    for (var alias in this.aliases) {
	      // eslint-disable-line guard-for-in
	      var node = this.aliases[alias];

	      if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: [], types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name),
	        simple = isSimple ? [helper.name, ' || '] : '';

	    var lookup = ['('].concat(simple, nonHelper);
	    if (!this.options.strict) {
	      lookup.push(' || ', this.aliasable('helpers.helperMissing'));
	    }
	    lookup.push(')');

	    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
	  },

	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var existing = this.matchExistingProgram(child);

	      if (existing == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        var index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	        child.useDepths = this.useDepths;
	        child.useBlockParams = this.useBlockParams;
	      } else {
	        child.index = existing.index;
	        child.name = 'program' + existing.index;

	        this.useDepths = this.useDepths || existing.useDepths;
	        this.useBlockParams = this.useBlockParams || existing.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return environment;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper'),
	        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [callContext].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	/* global define */
	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) {
	    // We don't support this in AMD environments. For these environments, we asusme that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = require('source-map');
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    var pairs = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        var value = castChunk(obj[key], this);
	        if (value !== 'undefined') {
	          pairs.push([this.quotedString(key), ':', value]);
	        }
	      }
	    }

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var skills = {
  master: [],
  expert: [
    { skill: 'HTML', position: 'right', code: 'html' },
    { skill: 'CSS', position: 'right', code: 'css' },
    { skill: 'SCSS', position: 'right', code: 'scss' },
    { skill: 'JavaScript', position: 'left', code: 'js' },
    { skill: 'jQuery', position: 'left', code: 'jq' },
    { skill: 'BootStrap', position: 'right', code: 'bootstrap' }
  ],
  proficient: [
    { skill: 'Angular 2+', position: 'left', code: 'angular' },
    { skill: 'TypeScript', position: 'left', code: 'ts' }
  ],
  familiar: [
    { skill: 'Backbone.js', position: 'left', code: 'backbone' },
    { skill: 'Node.js', position: 'left', code: 'node' },
    { skill: 'ReactJS', position: 'left', code: 'react' },
    { skill: 'Photoshop', position: 'right', code: 'photoshop' }
  ],
  beginner: []
};

var experienceDetails = [
  {
    from: '200709',
    to: '201105',
    organisation: 'R.M.K Engineering College',
    code: 'rmk',
    location: 'Gummudipondi',
    profile: [{ role: 'Under Graduate', description: ['Electrical and Electronics Engineering'] }]
  },
  {
    from: '201109',
    to: '201612',
    organisation: 'Tata Consultancy Services',
    code: 'tcs',
    location: 'Chennai',
    profile: [
      { role: 'Web Developer', description: ['For a Banking client'] },
      { role: 'Production Support Executive', description: ['For a Telecom client'] }
    ]
  },
  {
    from: '201612',
    to: 'Present',
    organisation: 'Cognizant Technology Solutions',
    code: 'cts',
    location: 'Chennai',
    profile: [{ role: 'Senior Web Developer', description: ['For a Logistics client', 'For a Pharmaceutical client'] }]
  }
];

var githubUsername = 'bineeshb';
var reposUrl = `https://api.github.com/users/${githubUsername}/repos?sort=updated&type=all`;
var portfolioUrl = 'https://bineeshb.github.io/';

var contactDetails = [
  { iconClass: 'fa-envelope', displayText: 'bbineesh21@gmail.com', link: 'mailto:bbineesh21@gmail.com' },
  { iconClass: 'fa-linkedin', displayText: 'bineesh-balasubramanian', link: 'https://in.linkedin.com/in/bineesh-balasubramanian-5b9223b5' },
  { iconClass: 'fa-facebook', displayText: 'bineesh.balasubramanian', link: 'https://www.facebook.com/bineesh.balasubramanian' },
  { iconClass: 'fa-github', displayText: 'bineeshb', link: 'https://github.com/bineeshb' }
];

/**
 * Handlebars Helpers
 */
Handlebars.registerHelper('counter', function (index) {
  return index + 1;
});

var $window = $(window);
var sectionLinks = [];

$('body').ready(function () {
  renderSkills();
  renderExperiences();
  getWorks();
  renderFooter();

  $('nav a').each(function () {
    sectionLinks.push($(this).attr('href'));
  });

  $('.nav-bar #nav-menu-btn').click(function () {
    $('.nav-bar').toggleClass('open');
  });

  $('a[href*="#"]:not([href="#"])').click(function () {
    $('.nav-bar').removeClass('open');
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);

        return false;
      }
    }
  });

  $window.on('scroll resize', checkIfInView);
  $window.trigger('scroll');
});

/** 
 * Render Skills
 */
function renderSkills() {
  var $skillsSection = $('#skills .skills-container');
  var $skillsTemplate = $('#skills-template').html();
  var compiledSkills = Handlebars.compile($skillsTemplate);
  var displaySkills = Object.keys(skills).map(function (level) {
    return {
      skillLevel: level,
      technologies: skills[level]
    };
  });
  $skillsSection.html(compiledSkills(displaySkills));
}

/** 
 * Render Experience details
 */
function renderExperiences() {
  var $experienceSection = $('#experience .experience-container');
  var $experienceTemplate = $('#experience-template').html();
  var compiledExpDetails = Handlebars.compile($experienceTemplate);
  experienceDetails.sort(function(exp1, exp2) {
    return exp2.from - exp1.from;
  });
  experienceDetails.forEach(function(exp) {
    exp.from = getMonthYearLabel(exp.from);
    exp.to = getMonthYearLabel(exp.to);
  });
  $experienceSection.html(compiledExpDetails(experienceDetails));
}

/**
 * Returns Month Year label
 * @param {number} yearMonth 
 */
function getMonthYearLabel(yearMonth) {
  var dateString, dateObj;

  if (isFinite(yearMonth)) {
    dateString = yearMonth.substring(0, 4) + '-' + yearMonth.substring(4);
    dateObj = new Date(dateString);

    return months[dateObj.getMonth()] + ' ' + dateObj.getFullYear();
  } else {
    return yearMonth;
  }
}

/**
 * Get Works from online repos 
 */
function getWorks() {
  $.ajax({
    url: reposUrl,
    headers: {
      Accept: 'application/vnd.github.mercy-preview+json'
    },
    success: function (repos) {
      if (repos.length > 0) {
        renderWorks(repos);
      }
    }
  });
}

/**
 * Render Works
 */
function renderWorks(repos) {
  var $ownWorksSection = $('.own-works');
  var $contributedWorksSection = $('.contributed-works');
  var $worksTemplate = $('#works-template').html();
  var compiledWorkDetails = Handlebars.compile($worksTemplate);
  var ownRepos = {
    repos: [],
    isOwn: true,
  };
  var contributedRepos = {
    repos: [],
    isOwn: false,
  };

  repos.filter(function (eachRepo) {
    return (eachRepo.topics && eachRepo.topics.length > 0) || eachRepo.description;
  }).forEach(function (eachRepo) {
    var repoDetails = {
      name: eachRepo.name,
      language: eachRepo.language ? eachRepo.language.toLowerCase() : null,
      topics: eachRepo.topics,
      description: eachRepo.description,
      homepage: (eachRepo.homepage !== portfolioUrl) ? eachRepo.homepage : null,
      repoUrl: eachRepo.svn_url
    };

    if (eachRepo.owner.login === githubUsername) {
      ownRepos.repos.push(repoDetails);
    }
    // else {
    //   contributedRepos.repos.push(repoDetails);
    // }
  });

  if (ownRepos.repos.length > 0) {
    $ownWorksSection.html(compiledWorkDetails(ownRepos));
  }

  if (contributedRepos.repos.length > 0) {
    $contributedWorksSection.html(compiledWorkDetails(contributedRepos));
  }

  if (ownRepos.repos.length > 0 || contributedRepos.repos.length > 0) {
    $('.section-works').removeClass('d-none');
    $('.link-works').removeClass('d-none');
  }
}

/**
 * Render Footer
 */
function renderFooter() {
  var $footerCopyright = $('.copyright-info');
  var $footerTemplate = $('#footer-copyright-template').html();
  var compiledFooter = Handlebars.compile($footerTemplate);
  var currentYear = (new Date()).getFullYear();
  $footerCopyright.html(compiledFooter(currentYear));

  var $footerContact = $('.footer-contact');
  var $footerContactTemplate = $('#footer-contact-template').html();
  var compiledFooterContact = Handlebars.compile($footerContactTemplate);
  $footerContact.html(compiledFooterContact(contactDetails));
}

function checkIfInView() {
  var windowHeight = $window.height();
  var windowTopPos = $window.scrollTop();
  var windowBottomPos = (windowTopPos + windowHeight);

  var linkToBeActive = sectionLinks.find(function (linkId) {
    var sectionPos = $(linkId).offset().top;
    var sectionHeight = $(linkId).height();

    return windowTopPos >= sectionPos && windowTopPos < (sectionPos + sectionHeight);
  });

  if (linkToBeActive) {
    $('nav a[href="' + linkToBeActive + '"]').addClass('active');
    history.pushState(null, null, linkToBeActive);
  }

  sectionLinks.filter(function (linkId) { return linkId !== linkToBeActive })
    .forEach(function (linkId) {
      $('nav a[href="' + linkId + '"]').removeClass('active');
    });

  Array.from($('.animation_elements')).filter(function (el) {
    var $el = $(el);
    var elHeight = $el.outerHeight();
    var elTopPos = $el.offset().top;
    var elBottomPos = elTopPos + elHeight;

    return $el.hasClass('animation_elements') && (elBottomPos >= windowTopPos) && (elTopPos <= windowBottomPos);
  }).forEach(function (el) {
    $(el).removeClass('animation_elements');
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS0zLjEuMS5taW4uanMiLCJoYW5kbGViYXJzLXY0LjAuMTEuanMiLCJkZXRhaWxzLmpzIiwibG9naWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3Z1SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBqUXVlcnkgdjMuMS4xIHwgKGMpIGpRdWVyeSBGb3VuZGF0aW9uIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXHJcbiFmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hLmRvY3VtZW50P2IoYSwhMCk6ZnVuY3Rpb24oYSl7aWYoIWEuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gYihhKX06YihhKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO3ZhciBjPVtdLGQ9YS5kb2N1bWVudCxlPU9iamVjdC5nZXRQcm90b3R5cGVPZixmPWMuc2xpY2UsZz1jLmNvbmNhdCxoPWMucHVzaCxpPWMuaW5kZXhPZixqPXt9LGs9ai50b1N0cmluZyxsPWouaGFzT3duUHJvcGVydHksbT1sLnRvU3RyaW5nLG49bS5jYWxsKE9iamVjdCksbz17fTtmdW5jdGlvbiBwKGEsYil7Yj1ifHxkO3ZhciBjPWIuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtjLnRleHQ9YSxiLmhlYWQuYXBwZW5kQ2hpbGQoYykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKX12YXIgcT1cIjMuMS4xXCIscj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgci5mbi5pbml0KGEsYil9LHM9L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLHQ9L14tbXMtLyx1PS8tKFthLXpdKS9nLHY9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfTtyLmZuPXIucHJvdG90eXBlPXtqcXVlcnk6cSxjb25zdHJ1Y3RvcjpyLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZi5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/Zi5jYWxsKHRoaXMpOmE8MD90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV19LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1yLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYn0sZWFjaDpmdW5jdGlvbihhKXtyZXR1cm4gci5lYWNoKHRoaXMsYSl9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soci5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhmLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKGE8MD9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZjPGI/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOmgsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxyLmV4dGVuZD1yLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fHIuaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aDxpO2grKylpZihudWxsIT0oYT1hcmd1bWVudHNbaF0pKWZvcihiIGluIGEpYz1nW2JdLGQ9YVtiXSxnIT09ZCYmKGomJmQmJihyLmlzUGxhaW5PYmplY3QoZCl8fChlPXIuaXNBcnJheShkKSkpPyhlPyhlPSExLGY9YyYmci5pc0FycmF5KGMpP2M6W10pOmY9YyYmci5pc1BsYWluT2JqZWN0KGMpP2M6e30sZ1tiXT1yLmV4dGVuZChqLGYsZCkpOnZvaWQgMCE9PWQmJihnW2JdPWQpKTtyZXR1cm4gZ30sci5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisocStNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1yLnR5cGUoYSl9LGlzQXJyYXk6QXJyYXkuaXNBcnJheSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7dmFyIGI9ci50eXBlKGEpO3JldHVybihcIm51bWJlclwiPT09Ynx8XCJzdHJpbmdcIj09PWIpJiYhaXNOYU4oYS1wYXJzZUZsb2F0KGEpKX0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXt2YXIgYixjO3JldHVybiEoIWF8fFwiW29iamVjdCBPYmplY3RdXCIhPT1rLmNhbGwoYSkpJiYoIShiPWUoYSkpfHwoYz1sLmNhbGwoYixcImNvbnN0cnVjdG9yXCIpJiZiLmNvbnN0cnVjdG9yLFwiZnVuY3Rpb25cIj09dHlwZW9mIGMmJm0uY2FsbChjKT09PW4pKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9qW2suY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7cChhKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UodCxcIm1zLVwiKS5yZXBsYWNlKHUsdil9LG5vZGVOYW1lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX0sZWFjaDpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MDtpZih3KGEpKXtmb3IoYz1hLmxlbmd0aDtkPGM7ZCsrKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVha31lbHNlIGZvcihkIGluIGEpaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrO3JldHVybiBhfSx0cmltOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6KGErXCJcIikucmVwbGFjZShzLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHxbXTtyZXR1cm4gbnVsbCE9YSYmKHcoT2JqZWN0KGEpKT9yLm1lcmdlKGMsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOmguY2FsbChjLGEpKSxjfSxpbkFycmF5OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbnVsbD09Yj8tMTppLmNhbGwoYixhLGMpfSxtZXJnZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7ZDxjO2QrKylhW2UrK109YltkXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfSxncmVwOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQsZT1bXSxmPTAsZz1hLmxlbmd0aCxoPSFjO2Y8ZztmKyspZD0hYihhW2ZdLGYpLGQhPT1oJiZlLnB1c2goYVtmXSk7cmV0dXJuIGV9LG1hcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPTAsaD1bXTtpZih3KGEpKWZvcihkPWEubGVuZ3RoO2Y8ZDtmKyspZT1iKGFbZl0sZixjKSxudWxsIT1lJiZoLnB1c2goZSk7ZWxzZSBmb3IoZiBpbiBhKWU9YihhW2ZdLGYsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO3JldHVybiBnLmFwcGx5KFtdLGgpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGImJihjPWFbYl0sYj1hLGE9Yyksci5pc0Z1bmN0aW9uKGEpKXJldHVybiBkPWYuY2FsbChhcmd1bWVudHMsMiksZT1mdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGJ8fHRoaXMsZC5jb25jYXQoZi5jYWxsKGFyZ3VtZW50cykpKX0sZS5ndWlkPWEuZ3VpZD1hLmd1aWR8fHIuZ3VpZCsrLGV9LG5vdzpEYXRlLm5vdyxzdXBwb3J0Om99KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihyLmZuW1N5bWJvbC5pdGVyYXRvcl09Y1tTeW1ib2wuaXRlcmF0b3JdKSxyLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe2pbXCJbb2JqZWN0IFwiK2IrXCJdXCJdPWIudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIHcoYSl7dmFyIGI9ISFhJiZcImxlbmd0aFwiaW4gYSYmYS5sZW5ndGgsYz1yLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiIT09YyYmIXIuaXNXaW5kb3coYSkmJihcImFycmF5XCI9PT1jfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGEpfXZhciB4PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHU9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHY9YS5kb2N1bWVudCx3PTAseD0wLHk9aGEoKSx6PWhhKCksQT1oYSgpLEI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWImJihsPSEwKSwwfSxDPXt9Lmhhc093blByb3BlcnR5LEQ9W10sRT1ELnBvcCxGPUQucHVzaCxHPUQucHVzaCxIPUQuc2xpY2UsST1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKylpZihhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0sSj1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsSz1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsTD1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcMC1cXFxceGEwXSkrXCIsTT1cIlxcXFxbXCIrSytcIiooXCIrTCtcIikoPzpcIitLK1wiKihbKl4kfCF+XT89KVwiK0srXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitMK1wiKSl8KVwiK0srXCIqXFxcXF1cIixOPVwiOihcIitMK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitNK1wiKSopfC4qKVxcXFwpfClcIixPPW5ldyBSZWdFeHAoSytcIitcIixcImdcIiksUD1uZXcgUmVnRXhwKFwiXlwiK0srXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0srXCIrJFwiLFwiZ1wiKSxRPW5ldyBSZWdFeHAoXCJeXCIrSytcIiosXCIrSytcIipcIiksUj1uZXcgUmVnRXhwKFwiXlwiK0srXCIqKFs+K35dfFwiK0srXCIpXCIrSytcIipcIiksUz1uZXcgUmVnRXhwKFwiPVwiK0srXCIqKFteXFxcXF0nXFxcIl0qPylcIitLK1wiKlxcXFxdXCIsXCJnXCIpLFQ9bmV3IFJlZ0V4cChOKSxVPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiRcIiksVj17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK0wrXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrTCtcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK0wrXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrTSksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrTiksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrSytcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK0srXCIqKD86KFsrLV18KVwiK0srXCIqKFxcXFxkKyl8KSlcIitLK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK0orXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitLK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitLK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitLK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxXPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWD0vXmhcXGQkL2ksWT0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFo9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sJD0vWyt+XS8sXz1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrSytcIj98KFwiK0srXCIpfC4pXCIsXCJpZ1wiKSxhYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCIweFwiK2ItNjU1MzY7cmV0dXJuIGQhPT1kfHxjP2I6ZDwwP1N0cmluZy5mcm9tQ2hhckNvZGUoZCs2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShkPj4xMHw1NTI5NiwxMDIzJmR8NTYzMjApfSxiYT0vKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxjYT1mdW5jdGlvbihhLGIpe3JldHVybiBiP1wiXFwwXCI9PT1hP1wiXFx1ZmZmZFwiOmEuc2xpY2UoMCwtMSkrXCJcXFxcXCIrYS5jaGFyQ29kZUF0KGEubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KStcIiBcIjpcIlxcXFxcIithfSxkYT1mdW5jdGlvbigpe20oKX0sZWE9dGEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMCYmKFwiZm9ybVwiaW4gYXx8XCJsYWJlbFwiaW4gYSl9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e0cuYXBwbHkoRD1ILmNhbGwodi5jaGlsZE5vZGVzKSx2LmNoaWxkTm9kZXMpLERbdi5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZmEpe0c9e2FwcGx5OkQubGVuZ3RoP2Z1bmN0aW9uKGEsYil7Ri5hcHBseShhLEguY2FsbChiKSl9OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5sZW5ndGgsZD0wO3doaWxlKGFbYysrXT1iW2QrK10pO2EubGVuZ3RoPWMtMX19fWZ1bmN0aW9uIGdhKGEsYixkLGUpe3ZhciBmLGgsaixrLGwsbyxyLHM9YiYmYi5vd25lckRvY3VtZW50LHc9Yj9iLm5vZGVUeXBlOjk7aWYoZD1kfHxbXSxcInN0cmluZ1wiIT10eXBlb2YgYXx8IWF8fDEhPT13JiY5IT09dyYmMTEhPT13KXJldHVybiBkO2lmKCFlJiYoKGI/Yi5vd25lckRvY3VtZW50fHxiOnYpIT09biYmbShiKSxiPWJ8fG4scCkpe2lmKDExIT09dyYmKGw9Wi5leGVjKGEpKSlpZihmPWxbMV0pe2lmKDk9PT13KXtpZighKGo9Yi5nZXRFbGVtZW50QnlJZChmKSkpcmV0dXJuIGQ7aWYoai5pZD09PWYpcmV0dXJuIGQucHVzaChqKSxkfWVsc2UgaWYocyYmKGo9cy5nZXRFbGVtZW50QnlJZChmKSkmJnQoYixqKSYmai5pZD09PWYpcmV0dXJuIGQucHVzaChqKSxkfWVsc2V7aWYobFsyXSlyZXR1cm4gRy5hcHBseShkLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSkpLGQ7aWYoKGY9bFszXSkmJmMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBHLmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGYpKSxkfWlmKGMucXNhJiYhQVthK1wiIFwiXSYmKCFxfHwhcS50ZXN0KGEpKSl7aWYoMSE9PXcpcz1iLHI9YTtlbHNlIGlmKFwib2JqZWN0XCIhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpeyhrPWIuZ2V0QXR0cmlidXRlKFwiaWRcIikpP2s9ay5yZXBsYWNlKGJhLGNhKTpiLnNldEF0dHJpYnV0ZShcImlkXCIsaz11KSxvPWcoYSksaD1vLmxlbmd0aDt3aGlsZShoLS0pb1toXT1cIiNcIitrK1wiIFwiK3NhKG9baF0pO3I9by5qb2luKFwiLFwiKSxzPSQudGVzdChhKSYmcWEoYi5wYXJlbnROb2RlKXx8Yn1pZihyKXRyeXtyZXR1cm4gRy5hcHBseShkLHMucXVlcnlTZWxlY3RvckFsbChyKSksZH1jYXRjaCh4KXt9ZmluYWxseXtrPT09dSYmYi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBpKGEucmVwbGFjZShQLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGhhKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gaWEoYSl7cmV0dXJuIGFbdV09ITAsYX1mdW5jdGlvbiBqYShhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTt0cnl7cmV0dXJuISFhKGIpfWNhdGNoKGMpe3JldHVybiExfWZpbmFsbHl7Yi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYiksYj1udWxsfX1mdW5jdGlvbiBrYShhLGIpe3ZhciBjPWEuc3BsaXQoXCJ8XCIpLGU9Yy5sZW5ndGg7d2hpbGUoZS0tKWQuYXR0ckhhbmRsZVtjW2VdXT1ifWZ1bmN0aW9uIGxhKGEsYil7dmFyIGM9YiYmYSxkPWMmJjE9PT1hLm5vZGVUeXBlJiYxPT09Yi5ub2RlVHlwZSYmYS5zb3VyY2VJbmRleC1iLnNvdXJjZUluZGV4O2lmKGQpcmV0dXJuIGQ7aWYoYyl3aGlsZShjPWMubmV4dFNpYmxpbmcpaWYoYz09PWIpcmV0dXJuLTE7cmV0dXJuIGE/MTotMX1mdW5jdGlvbiBtYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWMmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG5hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PWN8fFwiYnV0dG9uXCI9PT1jKSYmYi50eXBlPT09YX19ZnVuY3Rpb24gb2EoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVyblwiZm9ybVwiaW4gYj9iLnBhcmVudE5vZGUmJmIuZGlzYWJsZWQ9PT0hMT9cImxhYmVsXCJpbiBiP1wibGFiZWxcImluIGIucGFyZW50Tm9kZT9iLnBhcmVudE5vZGUuZGlzYWJsZWQ9PT1hOmIuZGlzYWJsZWQ9PT1hOmIuaXNEaXNhYmxlZD09PWF8fGIuaXNEaXNhYmxlZCE9PSFhJiZlYShiKT09PWE6Yi5kaXNhYmxlZD09PWE6XCJsYWJlbFwiaW4gYiYmYi5kaXNhYmxlZD09PWF9fWZ1bmN0aW9uIHBhKGEpe3JldHVybiBpYShmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixpYShmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIHFhKGEpe3JldHVybiBhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmYX1jPWdhLnN1cHBvcnQ9e30sZj1nYS5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuISFiJiZcIkhUTUxcIiE9PWIubm9kZU5hbWV9LG09Z2Euc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZSxnPWE/YS5vd25lckRvY3VtZW50fHxhOnY7cmV0dXJuIGchPT1uJiY5PT09Zy5ub2RlVHlwZSYmZy5kb2N1bWVudEVsZW1lbnQ/KG49ZyxvPW4uZG9jdW1lbnRFbGVtZW50LHA9IWYobiksdiE9PW4mJihlPW4uZGVmYXVsdFZpZXcpJiZlLnRvcCE9PWUmJihlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsZGEsITEpOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGRhKSksYy5hdHRyaWJ1dGVzPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKG4uY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1ZLnRlc3Qobi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxjLmdldEJ5SWQ9amEoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhbi5nZXRFbGVtZW50c0J5TmFtZXx8IW4uZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoXyxhYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShcImlkXCIpPT09Yn19LGQuZmluZC5JRD1mdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRCeUlkJiZwKXt2YXIgYz1iLmdldEVsZW1lbnRCeUlkKGEpO3JldHVybiBjP1tjXTpbXX19KTooZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKF8sYWEpO3JldHVybiBmdW5jdGlvbihhKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGVOb2RlJiZhLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gYyYmYy52YWx1ZT09PWJ9fSxkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGMsZCxlLGY9Yi5nZXRFbGVtZW50QnlJZChhKTtpZihmKXtpZihjPWYuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpLGMmJmMudmFsdWU9PT1hKXJldHVybltmXTtlPWIuZ2V0RWxlbWVudHNCeU5hbWUoYSksZD0wO3doaWxlKGY9ZVtkKytdKWlmKGM9Zi5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIiksYyYmYy52YWx1ZT09PWEpcmV0dXJuW2ZdfXJldHVybltdfX0pLGQuZmluZC5UQUc9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlUYWdOYW1lP2IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk6Yy5xc2E/Yi5xdWVyeVNlbGVjdG9yQWxsKGEpOnZvaWQgMH06ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9MCxmPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk7aWYoXCIqXCI9PT1hKXt3aGlsZShjPWZbZSsrXSkxPT09Yy5ub2RlVHlwZSYmZC5wdXNoKGMpO3JldHVybiBkfXJldHVybiBmfSxkLmZpbmQuQ0xBU1M9Yy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJnApcmV0dXJuIGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKX0scj1bXSxxPVtdLChjLnFzYT1ZLnRlc3Qobi5xdWVyeVNlbGVjdG9yQWxsKSkmJihqYShmdW5jdGlvbihhKXtvLmFwcGVuZENoaWxkKGEpLmlubmVySFRNTD1cIjxhIGlkPSdcIit1K1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrdStcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGEucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmcS5wdXNoKFwiWypeJF09XCIrSytcIiooPzonJ3xcXFwiXFxcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHEucHVzaChcIlxcXFxbXCIrSytcIiooPzp2YWx1ZXxcIitKK1wiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK3UrXCItXVwiKS5sZW5ndGh8fHEucHVzaChcIn49XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmNoZWNrZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIit1K1wiKypcIikubGVuZ3RofHxxLnB1c2goXCIuIy4rWyt+XVwiKX0pLGphKGZ1bmN0aW9uKGEpe2EuaW5uZXJIVE1MPVwiPGEgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT48c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksYS5hcHBlbmRDaGlsZChiKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmcS5wdXNoKFwibmFtZVwiK0srXCIqWypeJHwhfl0/PVwiKSwyIT09YS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoJiZxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLG8uYXBwZW5kQ2hpbGQoYSkuZGlzYWJsZWQ9ITAsMiE9PWEucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGgmJnEucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSxxLnB1c2goXCIsLio6XCIpfSkpLChjLm1hdGNoZXNTZWxlY3Rvcj1ZLnRlc3Qocz1vLm1hdGNoZXN8fG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxvLm1vek1hdGNoZXNTZWxlY3Rvcnx8by5vTWF0Y2hlc1NlbGVjdG9yfHxvLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmphKGZ1bmN0aW9uKGEpe2MuZGlzY29ubmVjdGVkTWF0Y2g9cy5jYWxsKGEsXCIqXCIpLHMuY2FsbChhLFwiW3MhPScnXTp4XCIpLHIucHVzaChcIiE9XCIsTil9KSxxPXEubGVuZ3RoJiZuZXcgUmVnRXhwKHEuam9pbihcInxcIikpLHI9ci5sZW5ndGgmJm5ldyBSZWdFeHAoci5qb2luKFwifFwiKSksYj1ZLnRlc3Qoby5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdD1ifHxZLnRlc3Qoby5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSxCPWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1ufHxhLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYSk/LTE6Yj09PW58fGIub3duZXJEb2N1bWVudD09PXYmJnQodixiKT8xOms/SShrLGEpLUkoayxiKTowOjQmZD8tMToxKX06ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBjLGQ9MCxlPWEucGFyZW50Tm9kZSxmPWIucGFyZW50Tm9kZSxnPVthXSxoPVtiXTtpZighZXx8IWYpcmV0dXJuIGE9PT1uPy0xOmI9PT1uPzE6ZT8tMTpmPzE6az9JKGssYSktSShrLGIpOjA7aWYoZT09PWYpcmV0dXJuIGxhKGEsYik7Yz1hO3doaWxlKGM9Yy5wYXJlbnROb2RlKWcudW5zaGlmdChjKTtjPWI7d2hpbGUoYz1jLnBhcmVudE5vZGUpaC51bnNoaWZ0KGMpO3doaWxlKGdbZF09PT1oW2RdKWQrKztyZXR1cm4gZD9sYShnW2RdLGhbZF0pOmdbZF09PT12Py0xOmhbZF09PT12PzE6MH0sbik6bn0sZ2EubWF0Y2hlcz1mdW5jdGlvbihhLGIpe3JldHVybiBnYShhLG51bGwsbnVsbCxiKX0sZ2EubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGEsYil7aWYoKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLGI9Yi5yZXBsYWNlKFMsXCI9JyQxJ11cIiksYy5tYXRjaGVzU2VsZWN0b3ImJnAmJiFBW2IrXCIgXCJdJiYoIXJ8fCFyLnRlc3QoYikpJiYoIXF8fCFxLnRlc3QoYikpKXRyeXt2YXIgZD1zLmNhbGwoYSxiKTtpZihkfHxjLmRpc2Nvbm5lY3RlZE1hdGNofHxhLmRvY3VtZW50JiYxMSE9PWEuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIGR9Y2F0Y2goZSl7fXJldHVybiBnYShiLG4sbnVsbCxbYV0pLmxlbmd0aD4wfSxnYS5jb250YWlucz1mdW5jdGlvbihhLGIpe3JldHVybihhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSx0KGEsYil9LGdhLmF0dHI9ZnVuY3Rpb24oYSxiKXsoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSk7dmFyIGU9ZC5hdHRySGFuZGxlW2IudG9Mb3dlckNhc2UoKV0sZj1lJiZDLmNhbGwoZC5hdHRySGFuZGxlLGIudG9Mb3dlckNhc2UoKSk/ZShhLGIsIXApOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09Zj9mOmMuYXR0cmlidXRlc3x8IXA/YS5nZXRBdHRyaWJ1dGUoYik6KGY9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZi5zcGVjaWZpZWQ/Zi52YWx1ZTpudWxsfSxnYS5lc2NhcGU9ZnVuY3Rpb24oYSl7cmV0dXJuKGErXCJcIikucmVwbGFjZShiYSxjYSl9LGdhLmVycm9yPWZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2EpfSxnYS51bmlxdWVTb3J0PWZ1bmN0aW9uKGEpe3ZhciBiLGQ9W10sZT0wLGY9MDtpZihsPSFjLmRldGVjdER1cGxpY2F0ZXMsaz0hYy5zb3J0U3RhYmxlJiZhLnNsaWNlKDApLGEuc29ydChCKSxsKXt3aGlsZShiPWFbZisrXSliPT09YVtmXSYmKGU9ZC5wdXNoKGYpKTt3aGlsZShlLS0pYS5zcGxpY2UoZFtlXSwxKX1yZXR1cm4gaz1udWxsLGF9LGU9Z2EuZ2V0VGV4dD1mdW5jdGlvbihhKXt2YXIgYixjPVwiXCIsZD0wLGY9YS5ub2RlVHlwZTtpZihmKXtpZigxPT09Znx8OT09PWZ8fDExPT09Zil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEudGV4dENvbnRlbnQpcmV0dXJuIGEudGV4dENvbnRlbnQ7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWMrPWUoYSl9ZWxzZSBpZigzPT09Znx8ND09PWYpcmV0dXJuIGEubm9kZVZhbHVlfWVsc2Ugd2hpbGUoYj1hW2QrK10pYys9ZShiKTtyZXR1cm4gY30sZD1nYS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzppYSxtYXRjaDpWLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS5yZXBsYWNlKF8sYWEpLGFbM109KGFbM118fGFbNF18fGFbNV18fFwiXCIpLnJlcGxhY2UoXyxhYSksXCJ+PVwiPT09YVsyXSYmKGFbM109XCIgXCIrYVszXStcIiBcIiksYS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWFbMV0uc2xpY2UoMCwzKT8oYVszXXx8Z2EuZXJyb3IoYVswXSksYVs0XT0rKGFbNF0/YVs1XSsoYVs2XXx8MSk6MiooXCJldmVuXCI9PT1hWzNdfHxcIm9kZFwiPT09YVszXSkpLGFbNV09KyhhWzddK2FbOF18fFwib2RkXCI9PT1hWzNdKSk6YVszXSYmZ2EuZXJyb3IoYVswXSksYX0sUFNFVURPOmZ1bmN0aW9uKGEpe3ZhciBiLGM9IWFbNl0mJmFbMl07cmV0dXJuIFYuQ0hJTEQudGVzdChhWzBdKT9udWxsOihhWzNdP2FbMl09YVs0XXx8YVs1XXx8XCJcIjpjJiZULnRlc3QoYykmJihiPWcoYywhMCkpJiYoYj1jLmluZGV4T2YoXCIpXCIsYy5sZW5ndGgtYiktYy5sZW5ndGgpJiYoYVswXT1hWzBdLnNsaWNlKDAsYiksYVsyXT1jLnNsaWNlKDAsYikpLGEuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoXyxhYSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWE/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWJ9fSxDTEFTUzpmdW5jdGlvbihhKXt2YXIgYj15W2ErXCIgXCJdO3JldHVybiBifHwoYj1uZXcgUmVnRXhwKFwiKF58XCIrSytcIilcIithK1wiKFwiK0srXCJ8JClcIikpJiZ5KGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIudGVzdChcInN0cmluZ1wiPT10eXBlb2YgYS5jbGFzc05hbWUmJmEuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXt2YXIgZT1nYS5hdHRyKGQsYSk7cmV0dXJuIG51bGw9PWU/XCIhPVwiPT09YjohYnx8KGUrPVwiXCIsXCI9XCI9PT1iP2U9PT1jOlwiIT1cIj09PWI/ZSE9PWM6XCJePVwiPT09Yj9jJiYwPT09ZS5pbmRleE9mKGMpOlwiKj1cIj09PWI/YyYmZS5pbmRleE9mKGMpPi0xOlwiJD1cIj09PWI/YyYmZS5zbGljZSgtYy5sZW5ndGgpPT09YzpcIn49XCI9PT1iPyhcIiBcIitlLnJlcGxhY2UoTyxcIiBcIikrXCIgXCIpLmluZGV4T2YoYyk+LTE6XCJ8PVwiPT09YiYmKGU9PT1jfHxlLnNsaWNlKDAsYy5sZW5ndGgrMSk9PT1jK1wiLVwiKSl9fSxDSElMRDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVwibnRoXCIhPT1hLnNsaWNlKDAsMyksZz1cImxhc3RcIiE9PWEuc2xpY2UoLTQpLGg9XCJvZi10eXBlXCI9PT1iO3JldHVybiAxPT09ZCYmMD09PWU/ZnVuY3Rpb24oYSl7cmV0dXJuISFhLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbSxuLG8scD1mIT09Zz9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixxPWIucGFyZW50Tm9kZSxyPWgmJmIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxzPSFpJiYhaCx0PSExO2lmKHEpe2lmKGYpe3doaWxlKHApe209Yjt3aGlsZShtPW1bcF0paWYoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKXJldHVybiExO289cD1cIm9ubHlcIj09PWEmJiFvJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYobz1bZz9xLmZpcnN0Q2hpbGQ6cS5sYXN0Q2hpbGRdLGcmJnMpe209cSxsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uJiZqWzJdLG09biYmcS5jaGlsZE5vZGVzW25dO3doaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKDE9PT1tLm5vZGVUeXBlJiYrK3QmJm09PT1iKXtrW2FdPVt3LG4sdF07YnJlYWt9fWVsc2UgaWYocyYmKG09YixsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uKSx0PT09ITEpd2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSkmJisrdCYmKHMmJihsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxrW2FdPVt3LHRdKSxtPT09YikpYnJlYWs7cmV0dXJuIHQtPWUsdD09PWR8fHQlZD09PTAmJnQvZD49MH19fSxQU0VVRE86ZnVuY3Rpb24oYSxiKXt2YXIgYyxlPWQucHNldWRvc1thXXx8ZC5zZXRGaWx0ZXJzW2EudG9Mb3dlckNhc2UoKV18fGdhLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIithKTtyZXR1cm4gZVt1XT9lKGIpOmUubGVuZ3RoPjE/KGM9W2EsYSxcIlwiLGJdLGQuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShhLnRvTG93ZXJDYXNlKCkpP2lhKGZ1bmN0aW9uKGEsYyl7dmFyIGQsZj1lKGEsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pZD1JKGEsZltnXSksYVtkXT0hKGNbZF09ZltnXSl9KTpmdW5jdGlvbihhKXtyZXR1cm4gZShhLDAsYyl9KTplfX0scHNldWRvczp7bm90OmlhKGZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9W10sZD1oKGEucmVwbGFjZShQLFwiJDFcIikpO3JldHVybiBkW3VdP2lhKGZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGc9ZChhLG51bGwsZSxbXSksaD1hLmxlbmd0aDt3aGlsZShoLS0pKGY9Z1toXSkmJihhW2hdPSEoYltoXT1mKSl9KTpmdW5jdGlvbihhLGUsZil7cmV0dXJuIGJbMF09YSxkKGIsbnVsbCxmLGMpLGJbMF09bnVsbCwhYy5wb3AoKX19KSxoYXM6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBnYShhLGIpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBhPWEucmVwbGFjZShfLGFhKSxmdW5jdGlvbihiKXtyZXR1cm4oYi50ZXh0Q29udGVudHx8Yi5pbm5lclRleHR8fGUoYikpLmluZGV4T2YoYSk+LTF9fSksbGFuZzppYShmdW5jdGlvbihhKXtyZXR1cm4gVS50ZXN0KGF8fFwiXCIpfHxnYS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2EpLGE9YS5yZXBsYWNlKF8sYWEpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oYil7dmFyIGM7ZG8gaWYoYz1wP2IubGFuZzpiLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxiLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuIGM9Yy50b0xvd2VyQ2FzZSgpLGM9PT1hfHwwPT09Yy5pbmRleE9mKGErXCItXCIpO3doaWxlKChiPWIucGFyZW50Tm9kZSkmJjE9PT1iLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oYil7dmFyIGM9YS5sb2NhdGlvbiYmYS5sb2NhdGlvbi5oYXNoO3JldHVybiBjJiZjLnNsaWNlKDEpPT09Yi5pZH0scm9vdDpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW99LGZvY3VzOmZ1bmN0aW9uKGEpe3JldHVybiBhPT09bi5hY3RpdmVFbGVtZW50JiYoIW4uaGFzRm9jdXN8fG4uaGFzRm9jdXMoKSkmJiEhKGEudHlwZXx8YS5ocmVmfHx+YS50YWJJbmRleCl9LGVuYWJsZWQ6b2EoITEpLGRpc2FibGVkOm9hKCEwKSxjaGVja2VkOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiYhIWEuY2hlY2tlZHx8XCJvcHRpb25cIj09PWImJiEhYS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsYS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihhKXtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpaWYoYS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIWQucHNldWRvcy5lbXB0eShhKX0saGVhZGVyOmZ1bmN0aW9uKGEpe3JldHVybiBYLnRlc3QoYS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGEpe3JldHVybiBXLnRlc3QoYS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmXCJidXR0b25cIj09PWEudHlwZXx8XCJidXR0b25cIj09PWJ9LHRleHQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWEudHlwZSYmKG51bGw9PShiPWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09Yi50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6cGEoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0OnBhKGZ1bmN0aW9uKGEsYil7cmV0dXJuW2ItMV19KSxlcTpwYShmdW5jdGlvbihhLGIsYyl7cmV0dXJuW2M8MD9jK2I6Y119KSxldmVuOnBhKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7YzxiO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksb2RkOnBhKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTE7YzxiO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksbHQ6cGEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1jPDA/YytiOmM7LS1kPj0wOylhLnB1c2goZCk7cmV0dXJuIGF9KSxndDpwYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWM8MD9jK2I6YzsrK2Q8YjspYS5wdXNoKGQpO3JldHVybiBhfSl9fSxkLnBzZXVkb3MubnRoPWQucHNldWRvcy5lcTtmb3IoYiBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlkLnBzZXVkb3NbYl09bWEoYik7Zm9yKGIgaW57c3VibWl0OiEwLHJlc2V0OiEwfSlkLnBzZXVkb3NbYl09bmEoYik7ZnVuY3Rpb24gcmEoKXt9cmEucHJvdG90eXBlPWQuZmlsdGVycz1kLnBzZXVkb3MsZC5zZXRGaWx0ZXJzPW5ldyByYSxnPWdhLnRva2VuaXplPWZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGcsaCxpLGosaz16W2ErXCIgXCJdO2lmKGspcmV0dXJuIGI/MDprLnNsaWNlKDApO2g9YSxpPVtdLGo9ZC5wcmVGaWx0ZXI7d2hpbGUoaCl7YyYmIShlPVEuZXhlYyhoKSl8fChlJiYoaD1oLnNsaWNlKGVbMF0ubGVuZ3RoKXx8aCksaS5wdXNoKGY9W10pKSxjPSExLChlPVIuZXhlYyhoKSkmJihjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTplWzBdLnJlcGxhY2UoUCxcIiBcIil9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtmb3IoZyBpbiBkLmZpbHRlcikhKGU9VltnXS5leGVjKGgpKXx8altnXSYmIShlPWpbZ10oZSkpfHwoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZyxtYXRjaGVzOmV9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtpZighYylicmVha31yZXR1cm4gYj9oLmxlbmd0aDpoP2dhLmVycm9yKGEpOnooYSxpKS5zbGljZSgwKX07ZnVuY3Rpb24gc2EoYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aCxkPVwiXCI7YjxjO2IrKylkKz1hW2JdLnZhbHVlO3JldHVybiBkfWZ1bmN0aW9uIHRhKGEsYixjKXt2YXIgZD1iLmRpcixlPWIubmV4dCxmPWV8fGQsZz1jJiZcInBhcmVudE5vZGVcIj09PWYsaD14Kys7cmV0dXJuIGIuZmlyc3Q/ZnVuY3Rpb24oYixjLGUpe3doaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZylyZXR1cm4gYShiLGMsZSk7cmV0dXJuITF9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbT1bdyxoXTtpZihpKXt3aGlsZShiPWJbZF0paWYoKDE9PT1iLm5vZGVUeXBlfHxnKSYmYShiLGMsaSkpcmV0dXJuITB9ZWxzZSB3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGcpaWYobD1iW3VdfHwoYlt1XT17fSksaz1sW2IudW5pcXVlSURdfHwobFtiLnVuaXF1ZUlEXT17fSksZSYmZT09PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSliPWJbZF18fGI7ZWxzZXtpZigoaj1rW2ZdKSYmalswXT09PXcmJmpbMV09PT1oKXJldHVybiBtWzJdPWpbMl07aWYoa1tmXT1tLG1bMl09YShiLGMsaSkpcmV0dXJuITB9cmV0dXJuITF9fWZ1bmN0aW9uIHVhKGEpe3JldHVybiBhLmxlbmd0aD4xP2Z1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmxlbmd0aDt3aGlsZShlLS0paWYoIWFbZV0oYixjLGQpKXJldHVybiExO3JldHVybiEwfTphWzBdfWZ1bmN0aW9uIHZhKGEsYixjKXtmb3IodmFyIGQ9MCxlPWIubGVuZ3RoO2Q8ZTtkKyspZ2EoYSxiW2RdLGMpO3JldHVybiBjfWZ1bmN0aW9uIHdhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGc9W10saD0wLGk9YS5sZW5ndGgsaj1udWxsIT1iO2g8aTtoKyspKGY9YVtoXSkmJihjJiYhYyhmLGQsZSl8fChnLnB1c2goZiksaiYmYi5wdXNoKGgpKSk7cmV0dXJuIGd9ZnVuY3Rpb24geGEoYSxiLGMsZCxlLGYpe3JldHVybiBkJiYhZFt1XSYmKGQ9eGEoZCkpLGUmJiFlW3VdJiYoZT14YShlLGYpKSxpYShmdW5jdGlvbihmLGcsaCxpKXt2YXIgaixrLGwsbT1bXSxuPVtdLG89Zy5sZW5ndGgscD1mfHx2YShifHxcIipcIixoLm5vZGVUeXBlP1toXTpoLFtdKSxxPSFhfHwhZiYmYj9wOndhKHAsbSxhLGgsaSkscj1jP2V8fChmP2E6b3x8ZCk/W106ZzpxO2lmKGMmJmMocSxyLGgsaSksZCl7aj13YShyLG4pLGQoaixbXSxoLGkpLGs9ai5sZW5ndGg7d2hpbGUoay0tKShsPWpba10pJiYocltuW2tdXT0hKHFbbltrXV09bCkpfWlmKGYpe2lmKGV8fGEpe2lmKGUpe2o9W10saz1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJmoucHVzaChxW2tdPWwpO2UobnVsbCxyPVtdLGosaSl9az1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJihqPWU/SShmLGwpOm1ba10pPi0xJiYoZltqXT0hKGdbal09bCkpfX1lbHNlIHI9d2Eocj09PWc/ci5zcGxpY2UobyxyLmxlbmd0aCk6ciksZT9lKG51bGwsZyxyLGkpOkcuYXBwbHkoZyxyKX0pfWZ1bmN0aW9uIHlhKGEpe2Zvcih2YXIgYixjLGUsZj1hLmxlbmd0aCxnPWQucmVsYXRpdmVbYVswXS50eXBlXSxoPWd8fGQucmVsYXRpdmVbXCIgXCJdLGk9Zz8xOjAsaz10YShmdW5jdGlvbihhKXtyZXR1cm4gYT09PWJ9LGgsITApLGw9dGEoZnVuY3Rpb24oYSl7cmV0dXJuIEkoYixhKT4tMX0saCwhMCksbT1bZnVuY3Rpb24oYSxjLGQpe3ZhciBlPSFnJiYoZHx8YyE9PWopfHwoKGI9Yykubm9kZVR5cGU/ayhhLGMsZCk6bChhLGMsZCkpO3JldHVybiBiPW51bGwsZX1dO2k8ZjtpKyspaWYoYz1kLnJlbGF0aXZlW2FbaV0udHlwZV0pbT1bdGEodWEobSksYyldO2Vsc2V7aWYoYz1kLmZpbHRlclthW2ldLnR5cGVdLmFwcGx5KG51bGwsYVtpXS5tYXRjaGVzKSxjW3VdKXtmb3IoZT0rK2k7ZTxmO2UrKylpZihkLnJlbGF0aXZlW2FbZV0udHlwZV0pYnJlYWs7cmV0dXJuIHhhKGk+MSYmdWEobSksaT4xJiZzYShhLnNsaWNlKDAsaS0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09YVtpLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKFAsXCIkMVwiKSxjLGk8ZSYmeWEoYS5zbGljZShpLGUpKSxlPGYmJnlhKGE9YS5zbGljZShlKSksZTxmJiZzYShhKSl9bS5wdXNoKGMpfXJldHVybiB1YShtKX1mdW5jdGlvbiB6YShhLGIpe3ZhciBjPWIubGVuZ3RoPjAsZT1hLmxlbmd0aD4wLGY9ZnVuY3Rpb24oZixnLGgsaSxrKXt2YXIgbCxvLHEscj0wLHM9XCIwXCIsdD1mJiZbXSx1PVtdLHY9aix4PWZ8fGUmJmQuZmluZC5UQUcoXCIqXCIsaykseT13Kz1udWxsPT12PzE6TWF0aC5yYW5kb20oKXx8LjEsej14Lmxlbmd0aDtmb3IoayYmKGo9Zz09PW58fGd8fGspO3MhPT16JiZudWxsIT0obD14W3NdKTtzKyspe2lmKGUmJmwpe289MCxnfHxsLm93bmVyRG9jdW1lbnQ9PT1ufHwobShsKSxoPSFwKTt3aGlsZShxPWFbbysrXSlpZihxKGwsZ3x8bixoKSl7aS5wdXNoKGwpO2JyZWFrfWsmJih3PXkpfWMmJigobD0hcSYmbCkmJnItLSxmJiZ0LnB1c2gobCkpfWlmKHIrPXMsYyYmcyE9PXIpe289MDt3aGlsZShxPWJbbysrXSlxKHQsdSxnLGgpO2lmKGYpe2lmKHI+MCl3aGlsZShzLS0pdFtzXXx8dVtzXXx8KHVbc109RS5jYWxsKGkpKTt1PXdhKHUpfUcuYXBwbHkoaSx1KSxrJiYhZiYmdS5sZW5ndGg+MCYmcitiLmxlbmd0aD4xJiZnYS51bmlxdWVTb3J0KGkpfXJldHVybiBrJiYodz15LGo9diksdH07cmV0dXJuIGM/aWEoZik6Zn1yZXR1cm4gaD1nYS5jb21waWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPVtdLGY9QVthK1wiIFwiXTtpZighZil7Ynx8KGI9ZyhhKSksYz1iLmxlbmd0aDt3aGlsZShjLS0pZj15YShiW2NdKSxmW3VdP2QucHVzaChmKTplLnB1c2goZik7Zj1BKGEsemEoZSxkKSksZi5zZWxlY3Rvcj1hfXJldHVybiBmfSxpPWdhLnNlbGVjdD1mdW5jdGlvbihhLGIsYyxlKXt2YXIgZixpLGosayxsLG09XCJmdW5jdGlvblwiPT10eXBlb2YgYSYmYSxuPSFlJiZnKGE9bS5zZWxlY3Rvcnx8YSk7aWYoYz1jfHxbXSwxPT09bi5sZW5ndGgpe2lmKGk9blswXT1uWzBdLnNsaWNlKDApLGkubGVuZ3RoPjImJlwiSURcIj09PShqPWlbMF0pLnR5cGUmJjk9PT1iLm5vZGVUeXBlJiZwJiZkLnJlbGF0aXZlW2lbMV0udHlwZV0pe2lmKGI9KGQuZmluZC5JRChqLm1hdGNoZXNbMF0ucmVwbGFjZShfLGFhKSxiKXx8W10pWzBdLCFiKXJldHVybiBjO20mJihiPWIucGFyZW50Tm9kZSksYT1hLnNsaWNlKGkuc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWY9Vi5uZWVkc0NvbnRleHQudGVzdChhKT8wOmkubGVuZ3RoO3doaWxlKGYtLSl7aWYoaj1pW2ZdLGQucmVsYXRpdmVbaz1qLnR5cGVdKWJyZWFrO2lmKChsPWQuZmluZFtrXSkmJihlPWwoai5tYXRjaGVzWzBdLnJlcGxhY2UoXyxhYSksJC50ZXN0KGlbMF0udHlwZSkmJnFhKGIucGFyZW50Tm9kZSl8fGIpKSl7aWYoaS5zcGxpY2UoZiwxKSxhPWUubGVuZ3RoJiZzYShpKSwhYSlyZXR1cm4gRy5hcHBseShjLGUpLGM7YnJlYWt9fX1yZXR1cm4obXx8aChhLG4pKShlLGIsIXAsYywhYnx8JC50ZXN0KGEpJiZxYShiLnBhcmVudE5vZGUpfHxiKSxjfSxjLnNvcnRTdGFibGU9dS5zcGxpdChcIlwiKS5zb3J0KEIpLmpvaW4oXCJcIik9PT11LGMuZGV0ZWN0RHVwbGljYXRlcz0hIWwsbSgpLGMuc29ydERldGFjaGVkPWphKGZ1bmN0aW9uKGEpe3JldHVybiAxJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obi5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIikpfSksamEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8a2EoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oYSxiLGMpe2lmKCFjKXJldHVybiBhLmdldEF0dHJpYnV0ZShiLFwidHlwZVwiPT09Yi50b0xvd2VyQ2FzZSgpPzE6Mil9KSxjLmF0dHJpYnV0ZXMmJmphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxrYShcInZhbHVlXCIsZnVuY3Rpb24oYSxiLGMpe2lmKCFjJiZcImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpcmV0dXJuIGEuZGVmYXVsdFZhbHVlfSksamEoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWEuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8a2EoSixmdW5jdGlvbihhLGIsYyl7dmFyIGQ7aWYoIWMpcmV0dXJuIGFbYl09PT0hMD9iLnRvTG93ZXJDYXNlKCk6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZC5zcGVjaWZpZWQ/ZC52YWx1ZTpudWxsfSksZ2F9KGEpO3IuZmluZD14LHIuZXhwcj14LnNlbGVjdG9ycyxyLmV4cHJbXCI6XCJdPXIuZXhwci5wc2V1ZG9zLHIudW5pcXVlU29ydD1yLnVuaXF1ZT14LnVuaXF1ZVNvcnQsci50ZXh0PXguZ2V0VGV4dCxyLmlzWE1MRG9jPXguaXNYTUwsci5jb250YWlucz14LmNvbnRhaW5zLHIuZXNjYXBlU2VsZWN0b3I9eC5lc2NhcGU7dmFyIHk9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9dm9pZCAwIT09Yzt3aGlsZSgoYT1hW2JdKSYmOSE9PWEubm9kZVR5cGUpaWYoMT09PWEubm9kZVR5cGUpe2lmKGUmJnIoYSkuaXMoYykpYnJlYWs7ZC5wdXNoKGEpfXJldHVybiBkfSx6PWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVtdO2E7YT1hLm5leHRTaWJsaW5nKTE9PT1hLm5vZGVUeXBlJiZhIT09YiYmYy5wdXNoKGEpO3JldHVybiBjfSxBPXIuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQsQj0vXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaSxDPS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiBEKGEsYixjKXtyZXR1cm4gci5pc0Z1bmN0aW9uKGIpP3IuZ3JlcChhLGZ1bmN0aW9uKGEsZCl7cmV0dXJuISFiLmNhbGwoYSxkLGEpIT09Y30pOmIubm9kZVR5cGU/ci5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1iIT09Y30pOlwic3RyaW5nXCIhPXR5cGVvZiBiP3IuZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBpLmNhbGwoYixhKT4tMSE9PWN9KTpDLnRlc3QoYik/ci5maWx0ZXIoYixhLGMpOihiPXIuZmlsdGVyKGIsYSksci5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGkuY2FsbChiLGEpPi0xIT09YyYmMT09PWEubm9kZVR5cGV9KSl9ci5maWx0ZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWJbMF07cmV0dXJuIGMmJihhPVwiOm5vdChcIithK1wiKVwiKSwxPT09Yi5sZW5ndGgmJjE9PT1kLm5vZGVUeXBlP3IuZmluZC5tYXRjaGVzU2VsZWN0b3IoZCxhKT9bZF06W106ci5maW5kLm1hdGNoZXMoYSxyLmdyZXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV9KSl9LHIuZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZD10aGlzLmxlbmd0aCxlPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIHRoaXMucHVzaFN0YWNrKHIoYSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtiPGQ7YisrKWlmKHIuY29udGFpbnMoZVtiXSx0aGlzKSlyZXR1cm4hMH0pKTtmb3IoYz10aGlzLnB1c2hTdGFjayhbXSksYj0wO2I8ZDtiKyspci5maW5kKGEsZVtiXSxjKTtyZXR1cm4gZD4xP3IudW5pcXVlU29ydChjKTpjfSxmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEQodGhpcyxhfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEQodGhpcyxhfHxbXSwhMCkpfSxpczpmdW5jdGlvbihhKXtyZXR1cm4hIUQodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgYSYmQS50ZXN0KGEpP3IoYSk6YXx8W10sITEpLmxlbmd0aH19KTt2YXIgRSxGPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSspKSQvLEc9ci5mbi5pbml0PWZ1bmN0aW9uKGEsYixjKXt2YXIgZSxmO2lmKCFhKXJldHVybiB0aGlzO2lmKGM9Y3x8RSxcInN0cmluZ1wiPT10eXBlb2YgYSl7aWYoZT1cIjxcIj09PWFbMF0mJlwiPlwiPT09YVthLmxlbmd0aC0xXSYmYS5sZW5ndGg+PTM/W251bGwsYSxudWxsXTpGLmV4ZWMoYSksIWV8fCFlWzFdJiZiKXJldHVybiFifHxiLmpxdWVyeT8oYnx8YykuZmluZChhKTp0aGlzLmNvbnN0cnVjdG9yKGIpLmZpbmQoYSk7aWYoZVsxXSl7aWYoYj1iIGluc3RhbmNlb2Ygcj9iWzBdOmIsci5tZXJnZSh0aGlzLHIucGFyc2VIVE1MKGVbMV0sYiYmYi5ub2RlVHlwZT9iLm93bmVyRG9jdW1lbnR8fGI6ZCwhMCkpLEIudGVzdChlWzFdKSYmci5pc1BsYWluT2JqZWN0KGIpKWZvcihlIGluIGIpci5pc0Z1bmN0aW9uKHRoaXNbZV0pP3RoaXNbZV0oYltlXSk6dGhpcy5hdHRyKGUsYltlXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGY9ZC5nZXRFbGVtZW50QnlJZChlWzJdKSxmJiYodGhpc1swXT1mLHRoaXMubGVuZ3RoPTEpLHRoaXN9cmV0dXJuIGEubm9kZVR5cGU/KHRoaXNbMF09YSx0aGlzLmxlbmd0aD0xLHRoaXMpOnIuaXNGdW5jdGlvbihhKT92b2lkIDAhPT1jLnJlYWR5P2MucmVhZHkoYSk6YShyKTpyLm1ha2VBcnJheShhLHRoaXMpfTtHLnByb3RvdHlwZT1yLmZuLEU9cihkKTt2YXIgSD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxJPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O3IuZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oYSl7dmFyIGI9cihhLHRoaXMpLGM9Yi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTxjO2ErKylpZihyLmNvbnRhaW5zKHRoaXMsYlthXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MCxlPXRoaXMubGVuZ3RoLGY9W10sZz1cInN0cmluZ1wiIT10eXBlb2YgYSYmcihhKTtpZighQS50ZXN0KGEpKWZvcig7ZDxlO2QrKylmb3IoYz10aGlzW2RdO2MmJmMhPT1iO2M9Yy5wYXJlbnROb2RlKWlmKGMubm9kZVR5cGU8MTEmJihnP2cuaW5kZXgoYyk+LTE6MT09PWMubm9kZVR5cGUmJnIuZmluZC5tYXRjaGVzU2VsZWN0b3IoYyxhKSkpe2YucHVzaChjKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5sZW5ndGg+MT9yLnVuaXF1ZVNvcnQoZik6Zil9LGluZGV4OmZ1bmN0aW9uKGEpe3JldHVybiBhP1wic3RyaW5nXCI9PXR5cGVvZiBhP2kuY2FsbChyKGEpLHRoaXNbMF0pOmkuY2FsbCh0aGlzLGEuanF1ZXJ5P2FbMF06YSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soci51bmlxdWVTb3J0KHIubWVyZ2UodGhpcy5nZXQoKSxyKGEsYikpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWE/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoYSkpfX0pO2Z1bmN0aW9uIEooYSxiKXt3aGlsZSgoYT1hW2JdKSYmMSE9PWEubm9kZVR5cGUpO3JldHVybiBhfXIuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmMTEhPT1iLm5vZGVUeXBlP2I6bnVsbH0scGFyZW50czpmdW5jdGlvbihhKXtyZXR1cm4geShhLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4geShhLFwicGFyZW50Tm9kZVwiLGMpfSxuZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBKKGEsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihhKXtyZXR1cm4gSihhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihhKXtyZXR1cm4geShhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB5KGEsXCJuZXh0U2libGluZ1wiLGMpfSxwcmV2VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB5KGEsXCJwcmV2aW91c1NpYmxpbmdcIixjKX0sc2libGluZ3M6ZnVuY3Rpb24oYSl7cmV0dXJuIHooKGEucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsYSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3JldHVybiB6KGEuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBhLmNvbnRlbnREb2N1bWVudHx8ci5tZXJnZShbXSxhLmNoaWxkTm9kZXMpfX0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGMsZCl7dmFyIGU9ci5tYXAodGhpcyxiLGMpO3JldHVyblwiVW50aWxcIiE9PWEuc2xpY2UoLTUpJiYoZD1jKSxkJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmKGU9ci5maWx0ZXIoZCxlKSksdGhpcy5sZW5ndGg+MSYmKElbYV18fHIudW5pcXVlU29ydChlKSxILnRlc3QoYSkmJmUucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgSz0vW15cXHgyMFxcdFxcclxcblxcZl0rL2c7ZnVuY3Rpb24gTChhKXt2YXIgYj17fTtyZXR1cm4gci5lYWNoKGEubWF0Y2goSyl8fFtdLGZ1bmN0aW9uKGEsYyl7YltjXT0hMH0pLGJ9ci5DYWxsYmFja3M9ZnVuY3Rpb24oYSl7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9MKGEpOnIuZXh0ZW5kKHt9LGEpO3ZhciBiLGMsZCxlLGY9W10sZz1bXSxoPS0xLGk9ZnVuY3Rpb24oKXtmb3IoZT1hLm9uY2UsZD1iPSEwO2cubGVuZ3RoO2g9LTEpe2M9Zy5zaGlmdCgpO3doaWxlKCsraDxmLmxlbmd0aClmW2hdLmFwcGx5KGNbMF0sY1sxXSk9PT0hMSYmYS5zdG9wT25GYWxzZSYmKGg9Zi5sZW5ndGgsYz0hMSl9YS5tZW1vcnl8fChjPSExKSxiPSExLGUmJihmPWM/W106XCJcIil9LGo9e2FkZDpmdW5jdGlvbigpe3JldHVybiBmJiYoYyYmIWImJihoPWYubGVuZ3RoLTEsZy5wdXNoKGMpKSxmdW5jdGlvbiBkKGIpe3IuZWFjaChiLGZ1bmN0aW9uKGIsYyl7ci5pc0Z1bmN0aW9uKGMpP2EudW5pcXVlJiZqLmhhcyhjKXx8Zi5wdXNoKGMpOmMmJmMubGVuZ3RoJiZcInN0cmluZ1wiIT09ci50eXBlKGMpJiZkKGMpfSl9KGFyZ3VtZW50cyksYyYmIWImJmkoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIHIuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oYSxiKXt2YXIgYzt3aGlsZSgoYz1yLmluQXJyYXkoYixmLGMpKT4tMSlmLnNwbGljZShjLDEpLGM8PWgmJmgtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihhKXtyZXR1cm4gYT9yLmluQXJyYXkoYSxmKT4tMTpmLmxlbmd0aD4wfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBmJiYoZj1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sZj1jPVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hZn0sbG9jazpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sY3x8Ynx8KGY9Yz1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWV9LGZpcmVXaXRoOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGV8fChjPWN8fFtdLGM9W2EsYy5zbGljZT9jLnNsaWNlKCk6Y10sZy5wdXNoKGMpLGJ8fGkoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBqLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhZH19O3JldHVybiBqfTtmdW5jdGlvbiBNKGEpe3JldHVybiBhfWZ1bmN0aW9uIE4oYSl7dGhyb3cgYX1mdW5jdGlvbiBPKGEsYixjKXt2YXIgZDt0cnl7YSYmci5pc0Z1bmN0aW9uKGQ9YS5wcm9taXNlKT9kLmNhbGwoYSkuZG9uZShiKS5mYWlsKGMpOmEmJnIuaXNGdW5jdGlvbihkPWEudGhlbik/ZC5jYWxsKGEsYixjKTpiLmNhbGwodm9pZCAwLGEpfWNhdGNoKGEpe2MuY2FsbCh2b2lkIDAsYSl9fXIuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihiKXt2YXIgYz1bW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLHIuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLHIuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLDJdLFtcInJlc29sdmVcIixcImRvbmVcIixyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMCxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwxLFwicmVqZWN0ZWRcIl1dLGQ9XCJwZW5kaW5nXCIsZT17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGYuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSxcImNhdGNoXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIGUudGhlbihudWxsLGEpfSxwaXBlOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzO3JldHVybiByLkRlZmVycmVkKGZ1bmN0aW9uKGIpe3IuZWFjaChjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9ci5pc0Z1bmN0aW9uKGFbZFs0XV0pJiZhW2RbNF1dO2ZbZFsxXV0oZnVuY3Rpb24oKXt2YXIgYT1lJiZlLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthJiZyLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9hLnByb21pc2UoKS5wcm9ncmVzcyhiLm5vdGlmeSkuZG9uZShiLnJlc29sdmUpLmZhaWwoYi5yZWplY3QpOmJbZFswXStcIldpdGhcIl0odGhpcyxlP1thXTphcmd1bWVudHMpfSl9KSxhPW51bGx9KS5wcm9taXNlKCl9LHRoZW46ZnVuY3Rpb24oYixkLGUpe3ZhciBmPTA7ZnVuY3Rpb24gZyhiLGMsZCxlKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgaD10aGlzLGk9YXJndW1lbnRzLGo9ZnVuY3Rpb24oKXt2YXIgYSxqO2lmKCEoYjxmKSl7aWYoYT1kLmFwcGx5KGgsaSksYT09PWMucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7aj1hJiYoXCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGEpJiZhLnRoZW4sci5pc0Z1bmN0aW9uKGopP2U/ai5jYWxsKGEsZyhmLGMsTSxlKSxnKGYsYyxOLGUpKTooZisrLGouY2FsbChhLGcoZixjLE0sZSksZyhmLGMsTixlKSxnKGYsYyxNLGMubm90aWZ5V2l0aCkpKTooZCE9PU0mJihoPXZvaWQgMCxpPVthXSksKGV8fGMucmVzb2x2ZVdpdGgpKGgsaSkpfX0saz1lP2o6ZnVuY3Rpb24oKXt0cnl7aigpfWNhdGNoKGEpe3IuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayYmci5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGEsay5zdGFja1RyYWNlKSxiKzE+PWYmJihkIT09TiYmKGg9dm9pZCAwLGk9W2FdKSxjLnJlamVjdFdpdGgoaCxpKSl9fTtiP2soKTooci5EZWZlcnJlZC5nZXRTdGFja0hvb2smJihrLnN0YWNrVHJhY2U9ci5EZWZlcnJlZC5nZXRTdGFja0hvb2soKSksYS5zZXRUaW1lb3V0KGspKX19cmV0dXJuIHIuRGVmZXJyZWQoZnVuY3Rpb24oYSl7Y1swXVszXS5hZGQoZygwLGEsci5pc0Z1bmN0aW9uKGUpP2U6TSxhLm5vdGlmeVdpdGgpKSxjWzFdWzNdLmFkZChnKDAsYSxyLmlzRnVuY3Rpb24oYik/YjpNKSksY1syXVszXS5hZGQoZygwLGEsci5pc0Z1bmN0aW9uKGQpP2Q6TikpfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP3IuZXh0ZW5kKGEsZSk6ZX19LGY9e307cmV0dXJuIHIuZWFjaChjLGZ1bmN0aW9uKGEsYil7dmFyIGc9YlsyXSxoPWJbNV07ZVtiWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2Q9aH0sY1szLWFdWzJdLmRpc2FibGUsY1swXVsyXS5sb2NrKSxnLmFkZChiWzNdLmZpcmUpLGZbYlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZltiWzBdK1wiV2l0aFwiXSh0aGlzPT09Zj92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGZbYlswXStcIldpdGhcIl09Zy5maXJlV2l0aH0pLGUucHJvbWlzZShmKSxiJiZiLmNhbGwoZixmKSxmfSx3aGVuOmZ1bmN0aW9uKGEpe3ZhciBiPWFyZ3VtZW50cy5sZW5ndGgsYz1iLGQ9QXJyYXkoYyksZT1mLmNhbGwoYXJndW1lbnRzKSxnPXIuRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjKXtkW2FdPXRoaXMsZVthXT1hcmd1bWVudHMubGVuZ3RoPjE/Zi5jYWxsKGFyZ3VtZW50cyk6YywtLWJ8fGcucmVzb2x2ZVdpdGgoZCxlKX19O2lmKGI8PTEmJihPKGEsZy5kb25lKGgoYykpLnJlc29sdmUsZy5yZWplY3QpLFwicGVuZGluZ1wiPT09Zy5zdGF0ZSgpfHxyLmlzRnVuY3Rpb24oZVtjXSYmZVtjXS50aGVuKSkpcmV0dXJuIGcudGhlbigpO3doaWxlKGMtLSlPKGVbY10saChjKSxnLnJlamVjdCk7cmV0dXJuIGcucHJvbWlzZSgpfX0pO3ZhciBQPS9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO3IuRGVmZXJyZWQuZXhjZXB0aW9uSG9vaz1mdW5jdGlvbihiLGMpe2EuY29uc29sZSYmYS5jb25zb2xlLndhcm4mJmImJlAudGVzdChiLm5hbWUpJiZhLmNvbnNvbGUud2FybihcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiK2IubWVzc2FnZSxiLnN0YWNrLGMpfSxyLnJlYWR5RXhjZXB0aW9uPWZ1bmN0aW9uKGIpe2Euc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGJ9KX07dmFyIFE9ci5EZWZlcnJlZCgpO3IuZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIFEudGhlbihhKVtcImNhdGNoXCJdKGZ1bmN0aW9uKGEpe3IucmVhZHlFeGNlcHRpb24oYSl9KSx0aGlzfSxyLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxob2xkUmVhZHk6ZnVuY3Rpb24oYSl7YT9yLnJlYWR5V2FpdCsrOnIucmVhZHkoITApfSxyZWFkeTpmdW5jdGlvbihhKXsoYT09PSEwPy0tci5yZWFkeVdhaXQ6ci5pc1JlYWR5KXx8KHIuaXNSZWFkeT0hMCxhIT09ITAmJi0tci5yZWFkeVdhaXQ+MHx8US5yZXNvbHZlV2l0aChkLFtyXSkpfX0pLHIucmVhZHkudGhlbj1RLnRoZW47ZnVuY3Rpb24gUigpe2QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixSKSxcclxuYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLFIpLHIucmVhZHkoKX1cImNvbXBsZXRlXCI9PT1kLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09ZC5yZWFkeVN0YXRlJiYhZC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/YS5zZXRUaW1lb3V0KHIucmVhZHkpOihkLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsUiksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLFIpKTt2YXIgUz1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1yLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYylTKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLHIuaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChyKGEpLGMpfSkpLGIpKWZvcig7aDxpO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9LFQ9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfHw5PT09YS5ub2RlVHlwZXx8ISthLm5vZGVUeXBlfTtmdW5jdGlvbiBVKCl7dGhpcy5leHBhbmRvPXIuZXhwYW5kbytVLnVpZCsrfVUudWlkPTEsVS5wcm90b3R5cGU9e2NhY2hlOmZ1bmN0aW9uKGEpe3ZhciBiPWFbdGhpcy5leHBhbmRvXTtyZXR1cm4gYnx8KGI9e30sVChhKSYmKGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPWI6T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsdGhpcy5leHBhbmRvLHt2YWx1ZTpiLGNvbmZpZ3VyYWJsZTohMH0pKSksYn0sc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPXRoaXMuY2FjaGUoYSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpZVtyLmNhbWVsQ2FzZShiKV09YztlbHNlIGZvcihkIGluIGIpZVtyLmNhbWVsQ2FzZShkKV09YltkXTtyZXR1cm4gZX0sZ2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHZvaWQgMD09PWI/dGhpcy5jYWNoZShhKTphW3RoaXMuZXhwYW5kb10mJmFbdGhpcy5leHBhbmRvXVtyLmNhbWVsQ2FzZShiKV19LGFjY2VzczpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHZvaWQgMD09PWJ8fGImJlwic3RyaW5nXCI9PXR5cGVvZiBiJiZ2b2lkIDA9PT1jP3RoaXMuZ2V0KGEsYik6KHRoaXMuc2V0KGEsYixjKSx2b2lkIDAhPT1jP2M6Yil9LHJlbW92ZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9YVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PWQpe2lmKHZvaWQgMCE9PWIpe3IuaXNBcnJheShiKT9iPWIubWFwKHIuY2FtZWxDYXNlKTooYj1yLmNhbWVsQ2FzZShiKSxiPWIgaW4gZD9bYl06Yi5tYXRjaChLKXx8W10pLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBkW2JbY11dfSh2b2lkIDA9PT1ifHxyLmlzRW1wdHlPYmplY3QoZCkpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBhW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihhKXt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PWImJiFyLmlzRW1wdHlPYmplY3QoYil9fTt2YXIgVj1uZXcgVSxXPW5ldyBVLFg9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFk9L1tBLVpdL2c7ZnVuY3Rpb24gWihhKXtyZXR1cm5cInRydWVcIj09PWF8fFwiZmFsc2VcIiE9PWEmJihcIm51bGxcIj09PWE/bnVsbDphPT09K2ErXCJcIj8rYTpYLnRlc3QoYSk/SlNPTi5wYXJzZShhKTphKX1mdW5jdGlvbiAkKGEsYixjKXt2YXIgZDtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSlpZihkPVwiZGF0YS1cIitiLnJlcGxhY2UoWSxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPVooYyl9Y2F0Y2goZSl7fVcuc2V0KGEsYixjKX1lbHNlIGM9dm9pZCAwO3JldHVybiBjfXIuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBXLmhhc0RhdGEoYSl8fFYuaGFzRGF0YShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFcuYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1cucmVtb3ZlKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gVi5hY2Nlc3MoYSxiLGMpfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1YucmVtb3ZlKGEsYil9fSksci5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1XLmdldChmKSwxPT09Zi5ub2RlVHlwZSYmIVYuZ2V0KGYsXCJoYXNEYXRhQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1yLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSwkKGYsZCxlW2RdKSkpO1Yuc2V0KGYsXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Vy5zZXQodGhpcyxhKX0pOlModGhpcyxmdW5jdGlvbihiKXt2YXIgYztpZihmJiZ2b2lkIDA9PT1iKXtpZihjPVcuZ2V0KGYsYSksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPSQoZixhKSx2b2lkIDAhPT1jKXJldHVybiBjfWVsc2UgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Vy5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1cucmVtb3ZlKHRoaXMsYSl9KX19KSxyLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2lmKGEpcmV0dXJuIGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9Vi5nZXQoYSxiKSxjJiYoIWR8fHIuaXNBcnJheShjKT9kPVYuYWNjZXNzKGEsYixyLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXX0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPXIucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9ci5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtyLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBWLmdldChhLGMpfHxWLmFjY2VzcyhhLGMse2VtcHR5OnIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Vi5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxyLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP3IucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9ci5xdWV1ZSh0aGlzLGEsYik7ci5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmci5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ci5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9ci5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9Vi5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgXz0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsYWE9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrXytcIikoW2EteiVdKikkXCIsXCJpXCIpLGJhPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxjYT1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1hLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1hLnN0eWxlLmRpc3BsYXkmJnIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpJiZcIm5vbmVcIj09PXIuY3NzKGEsXCJkaXNwbGF5XCIpfSxkYT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX07ZnVuY3Rpb24gZWEoYSxiLGMsZCl7dmFyIGUsZj0xLGc9MjAsaD1kP2Z1bmN0aW9uKCl7cmV0dXJuIGQuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIHIuY3NzKGEsYixcIlwiKX0saT1oKCksaj1jJiZjWzNdfHwoci5jc3NOdW1iZXJbYl0/XCJcIjpcInB4XCIpLGs9KHIuY3NzTnVtYmVyW2JdfHxcInB4XCIhPT1qJiYraSkmJmFhLmV4ZWMoci5jc3MoYSxiKSk7aWYoayYma1szXSE9PWope2o9anx8a1szXSxjPWN8fFtdLGs9K2l8fDE7ZG8gZj1mfHxcIi41XCIsay89ZixyLnN0eWxlKGEsYixrK2opO3doaWxlKGYhPT0oZj1oKCkvaSkmJjEhPT1mJiYtLWcpfXJldHVybiBjJiYoaz0ra3x8K2l8fDAsZT1jWzFdP2srKGNbMV0rMSkqY1syXTorY1syXSxkJiYoZC51bml0PWosZC5zdGFydD1rLGQuZW5kPWUpKSxlfXZhciBmYT17fTtmdW5jdGlvbiBnYShhKXt2YXIgYixjPWEub3duZXJEb2N1bWVudCxkPWEubm9kZU5hbWUsZT1mYVtkXTtyZXR1cm4gZT9lOihiPWMuYm9keS5hcHBlbmRDaGlsZChjLmNyZWF0ZUVsZW1lbnQoZCkpLGU9ci5jc3MoYixcImRpc3BsYXlcIiksYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLFwibm9uZVwiPT09ZSYmKGU9XCJibG9ja1wiKSxmYVtkXT1lLGUpfWZ1bmN0aW9uIGhhKGEsYil7Zm9yKHZhciBjLGQsZT1bXSxmPTAsZz1hLmxlbmd0aDtmPGc7ZisrKWQ9YVtmXSxkLnN0eWxlJiYoYz1kLnN0eWxlLmRpc3BsYXksYj8oXCJub25lXCI9PT1jJiYoZVtmXT1WLmdldChkLFwiZGlzcGxheVwiKXx8bnVsbCxlW2ZdfHwoZC5zdHlsZS5kaXNwbGF5PVwiXCIpKSxcIlwiPT09ZC5zdHlsZS5kaXNwbGF5JiZjYShkKSYmKGVbZl09Z2EoZCkpKTpcIm5vbmVcIiE9PWMmJihlW2ZdPVwibm9uZVwiLFYuc2V0KGQsXCJkaXNwbGF5XCIsYykpKTtmb3IoZj0wO2Y8ZztmKyspbnVsbCE9ZVtmXSYmKGFbZl0uc3R5bGUuZGlzcGxheT1lW2ZdKTtyZXR1cm4gYX1yLmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBoYSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBoYSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGEpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYT9hP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe2NhKHRoaXMpP3IodGhpcykuc2hvdygpOnIodGhpcykuaGlkZSgpfSl9fSk7dmFyIGlhPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLGphPS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKykvaSxrYT0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLGxhPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07bGEub3B0Z3JvdXA9bGEub3B0aW9uLGxhLnRib2R5PWxhLnRmb290PWxhLmNvbGdyb3VwPWxhLmNhcHRpb249bGEudGhlYWQsbGEudGg9bGEudGQ7ZnVuY3Rpb24gbWEoYSxiKXt2YXIgYztyZXR1cm4gYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W10sdm9pZCAwPT09Ynx8YiYmci5ub2RlTmFtZShhLGIpP3IubWVyZ2UoW2FdLGMpOmN9ZnVuY3Rpb24gbmEoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspVi5zZXQoYVtjXSxcImdsb2JhbEV2YWxcIiwhYnx8Vi5nZXQoYltjXSxcImdsb2JhbEV2YWxcIikpfXZhciBvYT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24gcGEoYSxiLGMsZCxlKXtmb3IodmFyIGYsZyxoLGksaixrLGw9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbT1bXSxuPTAsbz1hLmxlbmd0aDtuPG87bisrKWlmKGY9YVtuXSxmfHwwPT09ZilpZihcIm9iamVjdFwiPT09ci50eXBlKGYpKXIubWVyZ2UobSxmLm5vZGVUeXBlP1tmXTpmKTtlbHNlIGlmKG9hLnRlc3QoZikpe2c9Z3x8bC5hcHBlbmRDaGlsZChiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGg9KGphLmV4ZWMoZil8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGk9bGFbaF18fGxhLl9kZWZhdWx0LGcuaW5uZXJIVE1MPWlbMV0rci5odG1sUHJlZmlsdGVyKGYpK2lbMl0saz1pWzBdO3doaWxlKGstLSlnPWcubGFzdENoaWxkO3IubWVyZ2UobSxnLmNoaWxkTm9kZXMpLGc9bC5maXJzdENoaWxkLGcudGV4dENvbnRlbnQ9XCJcIn1lbHNlIG0ucHVzaChiLmNyZWF0ZVRleHROb2RlKGYpKTtsLnRleHRDb250ZW50PVwiXCIsbj0wO3doaWxlKGY9bVtuKytdKWlmKGQmJnIuaW5BcnJheShmLGQpPi0xKWUmJmUucHVzaChmKTtlbHNlIGlmKGo9ci5jb250YWlucyhmLm93bmVyRG9jdW1lbnQsZiksZz1tYShsLmFwcGVuZENoaWxkKGYpLFwic2NyaXB0XCIpLGomJm5hKGcpLGMpe2s9MDt3aGlsZShmPWdbaysrXSlrYS50ZXN0KGYudHlwZXx8XCJcIikmJmMucHVzaChmKX1yZXR1cm4gbH0hZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxiPWEuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxjPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxiLmFwcGVuZENoaWxkKGMpLG8uY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixvLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIHFhPWQuZG9jdW1lbnRFbGVtZW50LHJhPS9ea2V5LyxzYT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sdGE9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiB1YSgpe3JldHVybiEwfWZ1bmN0aW9uIHZhKCl7cmV0dXJuITF9ZnVuY3Rpb24gd2EoKXt0cnl7cmV0dXJuIGQuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fWZ1bmN0aW9uIHhhKGEsYixjLGQsZSxmKXt2YXIgZyxoO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBiKXtcInN0cmluZ1wiIT10eXBlb2YgYyYmKGQ9ZHx8YyxjPXZvaWQgMCk7Zm9yKGggaW4gYil4YShhLGgsYyxkLGJbaF0sZik7cmV0dXJuIGF9aWYobnVsbD09ZCYmbnVsbD09ZT8oZT1jLGQ9Yz12b2lkIDApOm51bGw9PWUmJihcInN0cmluZ1wiPT10eXBlb2YgYz8oZT1kLGQ9dm9pZCAwKTooZT1kLGQ9YyxjPXZvaWQgMCkpLGU9PT0hMSllPXZhO2Vsc2UgaWYoIWUpcmV0dXJuIGE7cmV0dXJuIDE9PT1mJiYoZz1lLGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHIoKS5vZmYoYSksZy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuZ3VpZD1nLmd1aWR8fChnLmd1aWQ9ci5ndWlkKyspKSxhLmVhY2goZnVuY3Rpb24oKXtyLmV2ZW50LmFkZCh0aGlzLGIsZSxkLGMpfSl9ci5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbixvLHAscT1WLmdldChhKTtpZihxKXtjLmhhbmRsZXImJihmPWMsYz1mLmhhbmRsZXIsZT1mLnNlbGVjdG9yKSxlJiZyLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHFhLGUpLGMuZ3VpZHx8KGMuZ3VpZD1yLmd1aWQrKyksKGk9cS5ldmVudHMpfHwoaT1xLmV2ZW50cz17fSksKGc9cS5oYW5kbGUpfHwoZz1xLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgciYmci5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/ci5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goSyl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPXRhLmV4ZWMoYltqXSl8fFtdLG49cD1oWzFdLG89KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbiYmKGw9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxuPShlP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxuLGw9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxrPXIuZXh0ZW5kKHt0eXBlOm4sb3JpZ1R5cGU6cCxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJnIuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6by5qb2luKFwiLlwiKX0sZiksKG09aVtuXSl8fChtPWlbbl09W10sbS5kZWxlZ2F0ZUNvdW50PTAsbC5zZXR1cCYmbC5zZXR1cC5jYWxsKGEsZCxvLGcpIT09ITF8fGEuYWRkRXZlbnRMaXN0ZW5lciYmYS5hZGRFdmVudExpc3RlbmVyKG4sZykpLGwuYWRkJiYobC5hZGQuY2FsbChhLGspLGsuaGFuZGxlci5ndWlkfHwoay5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGspOm0ucHVzaChrKSxyLmV2ZW50Lmdsb2JhbFtuXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG4sbyxwLHE9Vi5oYXNEYXRhKGEpJiZWLmdldChhKTtpZihxJiYoaT1xLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEspfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD10YS5leGVjKGJbal0pfHxbXSxuPXA9aFsxXSxvPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG4pe2w9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxuPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxuLG09aVtuXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrby5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnAhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEsbyxxLmhhbmRsZSkhPT0hMXx8ci5yZW1vdmVFdmVudChhLG4scS5oYW5kbGUpLGRlbGV0ZSBpW25dKX1lbHNlIGZvcihuIGluIGkpci5ldmVudC5yZW1vdmUoYSxuK2Jbal0sYyxkLCEwKTtyLmlzRW1wdHlPYmplY3QoaSkmJlYucmVtb3ZlKGEsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dmFyIGI9ci5ldmVudC5maXgoYSksYyxkLGUsZixnLGgsaT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksaj0oVi5nZXQodGhpcyxcImV2ZW50c1wiKXx8e30pW2IudHlwZV18fFtdLGs9ci5ldmVudC5zcGVjaWFsW2IudHlwZV18fHt9O2ZvcihpWzBdPWIsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspaVtjXT1hcmd1bWVudHNbY107aWYoYi5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxiKSE9PSExKXtoPXIuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGIsaiksYz0wO3doaWxlKChmPWhbYysrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2IuY3VycmVudFRhcmdldD1mLmVsZW0sZD0wO3doaWxlKChnPWYuaGFuZGxlcnNbZCsrXSkmJiFiLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpYi5ybmFtZXNwYWNlJiYhYi5ybmFtZXNwYWNlLnRlc3QoZy5uYW1lc3BhY2UpfHwoYi5oYW5kbGVPYmo9ZyxiLmRhdGE9Zy5kYXRhLGU9KChyLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWUmJihiLnJlc3VsdD1lKT09PSExJiYoYi5wcmV2ZW50RGVmYXVsdCgpLGIuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxiKSxiLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZyxoPVtdLGk9Yi5kZWxlZ2F0ZUNvdW50LGo9YS50YXJnZXQ7aWYoaSYmai5ub2RlVHlwZSYmIShcImNsaWNrXCI9PT1hLnR5cGUmJmEuYnV0dG9uPj0xKSlmb3IoO2ohPT10aGlzO2o9ai5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1qLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09YS50eXBlfHxqLmRpc2FibGVkIT09ITApKXtmb3IoZj1bXSxnPXt9LGM9MDtjPGk7YysrKWQ9YltjXSxlPWQuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09Z1tlXSYmKGdbZV09ZC5uZWVkc0NvbnRleHQ/cihlLHRoaXMpLmluZGV4KGopPi0xOnIuZmluZChlLHRoaXMsbnVsbCxbal0pLmxlbmd0aCksZ1tlXSYmZi5wdXNoKGQpO2YubGVuZ3RoJiZoLnB1c2goe2VsZW06aixoYW5kbGVyczpmfSl9cmV0dXJuIGo9dGhpcyxpPGIubGVuZ3RoJiZoLnB1c2goe2VsZW06aixoYW5kbGVyczpiLnNsaWNlKGkpfSksaH0sYWRkUHJvcDpmdW5jdGlvbihhLGIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLkV2ZW50LnByb3RvdHlwZSxhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ci5pc0Z1bmN0aW9uKGIpP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiBiKHRoaXMub3JpZ2luYWxFdmVudCl9OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbYV19LHNldDpmdW5jdGlvbihiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpifSl9fSl9LGZpeDpmdW5jdGlvbihhKXtyZXR1cm4gYVtyLmV4cGFuZG9dP2E6bmV3IHIuRXZlbnQoYSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT13YSgpJiZ0aGlzLmZvY3VzKXJldHVybiB0aGlzLmZvY3VzKCksITF9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXM9PT13YSgpJiZ0aGlzLmJsdXIpcmV0dXJuIHRoaXMuYmx1cigpLCExfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKFwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmci5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIikpcmV0dXJuIHRoaXMuY2xpY2soKSwhMX0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHIubm9kZU5hbWUoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX19LHIucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYyl9LHIuRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIHIuRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExP3VhOnZhLHRoaXMudGFyZ2V0PWEudGFyZ2V0JiYzPT09YS50YXJnZXQubm9kZVR5cGU/YS50YXJnZXQucGFyZW50Tm9kZTphLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9YS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1hLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1hLGImJnIuZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fHIubm93KCksdm9pZCh0aGlzW3IuZXhwYW5kb109ITApKTpuZXcgci5FdmVudChhLGIpfSxyLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6ci5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6dmEsaXNQcm9wYWdhdGlvblN0b3BwZWQ6dmEsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6dmEsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9dWEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9dWEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPXVhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxyLmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsXCJjaGFyXCI6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ZnVuY3Rpb24oYSl7dmFyIGI9YS5idXR0b247cmV0dXJuIG51bGw9PWEud2hpY2gmJnJhLnRlc3QoYS50eXBlKT9udWxsIT1hLmNoYXJDb2RlP2EuY2hhckNvZGU6YS5rZXlDb2RlOiFhLndoaWNoJiZ2b2lkIDAhPT1iJiZzYS50ZXN0KGEudHlwZSk/MSZiPzE6MiZiPzM6NCZiPzI6MDphLndoaWNofX0sci5ldmVudC5hZGRQcm9wKSxyLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtyLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybiBlJiYoZT09PWR8fHIuY29udGFpbnMoZCxlKSl8fChhLnR5cGU9Zi5vcmlnVHlwZSxjPWYuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYS50eXBlPWIpLGN9fX0pLHIuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4geGEodGhpcyxhLGIsYyxkKX0sb25lOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB4YSh0aGlzLGEsYixjLGQsMSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtpZihhJiZhLnByZXZlbnREZWZhdWx0JiZhLmhhbmRsZU9iailyZXR1cm4gZD1hLmhhbmRsZU9iaixyKGEuZGVsZWdhdGVUYXJnZXQpLm9mZihkLm5hbWVzcGFjZT9kLm9yaWdUeXBlK1wiLlwiK2QubmFtZXNwYWNlOmQub3JpZ1R5cGUsZC5zZWxlY3RvcixkLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2ZvcihlIGluIGEpdGhpcy5vZmYoZSxiLGFbZV0pO3JldHVybiB0aGlzfXJldHVybiBiIT09ITEmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGJ8fChjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9dmEpLHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQucmVtb3ZlKHRoaXMsYSxjLGIpfSl9fSk7dmFyIHlhPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKilbXj5dKilcXC8+L2dpLHphPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLEFhPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksQmE9L150cnVlXFwvKC4qKS8sQ2E9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIERhKGEsYil7cmV0dXJuIHIubm9kZU5hbWUoYSxcInRhYmxlXCIpJiZyLm5vZGVOYW1lKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXXx8YTphfWZ1bmN0aW9uIEVhKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIEZhKGEpe3ZhciBiPUJhLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBHYShhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKFYuaGFzRGF0YShhKSYmKGY9Vi5hY2Nlc3MoYSksZz1WLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7YzxkO2MrKylyLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9Vy5oYXNEYXRhKGEpJiYoaD1XLmFjY2VzcyhhKSxpPXIuZXh0ZW5kKHt9LGgpLFcuc2V0KGIsaSkpfX1mdW5jdGlvbiBIYShhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZpYS50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDpcImlucHV0XCIhPT1jJiZcInRleHRhcmVhXCIhPT1jfHwoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfWZ1bmN0aW9uIElhKGEsYixjLGQpe2I9Zy5hcHBseShbXSxiKTt2YXIgZSxmLGgsaSxqLGssbD0wLG09YS5sZW5ndGgsbj1tLTEscT1iWzBdLHM9ci5pc0Z1bmN0aW9uKHEpO2lmKHN8fG0+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHEmJiFvLmNoZWNrQ2xvbmUmJkFhLnRlc3QocSkpcmV0dXJuIGEuZWFjaChmdW5jdGlvbihlKXt2YXIgZj1hLmVxKGUpO3MmJihiWzBdPXEuY2FsbCh0aGlzLGUsZi5odG1sKCkpKSxJYShmLGIsYyxkKX0pO2lmKG0mJihlPXBhKGIsYVswXS5vd25lckRvY3VtZW50LCExLGEsZCksZj1lLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPWYpLGZ8fGQpKXtmb3IoaD1yLm1hcChtYShlLFwic2NyaXB0XCIpLEVhKSxpPWgubGVuZ3RoO2w8bTtsKyspaj1lLGwhPT1uJiYoaj1yLmNsb25lKGosITAsITApLGkmJnIubWVyZ2UoaCxtYShqLFwic2NyaXB0XCIpKSksYy5jYWxsKGFbbF0saixsKTtpZihpKWZvcihrPWhbaC5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxyLm1hcChoLEZhKSxsPTA7bDxpO2wrKylqPWhbbF0sa2EudGVzdChqLnR5cGV8fFwiXCIpJiYhVi5hY2Nlc3MoaixcImdsb2JhbEV2YWxcIikmJnIuY29udGFpbnMoayxqKSYmKGouc3JjP3IuX2V2YWxVcmwmJnIuX2V2YWxVcmwoai5zcmMpOnAoai50ZXh0Q29udGVudC5yZXBsYWNlKENhLFwiXCIpLGspKX1yZXR1cm4gYX1mdW5jdGlvbiBKYShhLGIsYyl7Zm9yKHZhciBkLGU9Yj9yLmZpbHRlcihiLGEpOmEsZj0wO251bGwhPShkPWVbZl0pO2YrKyljfHwxIT09ZC5ub2RlVHlwZXx8ci5jbGVhbkRhdGEobWEoZCkpLGQucGFyZW50Tm9kZSYmKGMmJnIuY29udGFpbnMoZC5vd25lckRvY3VtZW50LGQpJiZuYShtYShkLFwic2NyaXB0XCIpKSxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCkpO3JldHVybiBhfXIuZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoeWEsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPXIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEoby5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8ci5pc1hNTERvYyhhKSkpZm9yKGc9bWEoaCksZj1tYShhKSxkPTAsZT1mLmxlbmd0aDtkPGU7ZCsrKUhhKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fG1hKGEpLGc9Z3x8bWEoaCksZD0wLGU9Zi5sZW5ndGg7ZDxlO2QrKylHYShmW2RdLGdbZF0pO2Vsc2UgR2EoYSxoKTtyZXR1cm4gZz1tYShoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJm5hKGcsIWkmJm1hKGEsXCJzY3JpcHRcIikpLGh9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGU9ci5ldmVudC5zcGVjaWFsLGY9MDt2b2lkIDAhPT0oYz1hW2ZdKTtmKyspaWYoVChjKSl7aWYoYj1jW1YuZXhwYW5kb10pe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWVbZF0/ci5ldmVudC5yZW1vdmUoYyxkKTpyLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7Y1tWLmV4cGFuZG9dPXZvaWQgMH1jW1cuZXhwYW5kb10mJihjW1cuZXhwYW5kb109dm9pZCAwKX19fSksci5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gSmEodGhpcyxhLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3JldHVybiBKYSh0aGlzLGEpfSx0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBTKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/ci50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWEpfSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIElhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1EYSh0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPURhKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gSWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gSWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKHIuY2xlYW5EYXRhKG1hKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGwhPWEmJmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiByLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBTKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhemEudGVzdChhKSYmIWxhWyhqYS5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9ci5odG1sUHJlZmlsdGVyKGEpO3RyeXtmb3IoO2M8ZDtjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKHIuY2xlYW5EYXRhKG1hKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIElhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMucGFyZW50Tm9kZTtyLmluQXJyYXkodGhpcyxhKTwwJiYoci5jbGVhbkRhdGEobWEodGhpcykpLGMmJmMucmVwbGFjZUNoaWxkKGIsdGhpcykpfSxhKX19KSxyLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9cihhKSxmPWUubGVuZ3RoLTEsZz0wO2c8PWY7ZysrKWM9Zz09PWY/dGhpczp0aGlzLmNsb25lKCEwKSxyKGVbZ10pW2JdKGMpLGguYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSk7dmFyIEthPS9ebWFyZ2luLyxMYT1uZXcgUmVnRXhwKFwiXihcIitfK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLE1hPWZ1bmN0aW9uKGIpe3ZhciBjPWIub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gYyYmYy5vcGVuZXJ8fChjPWEpLGMuZ2V0Q29tcHV0ZWRTdHlsZShiKX07IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYigpe2lmKGkpe2kuc3R5bGUuY3NzVGV4dD1cImJveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7dG9wOjElO3dpZHRoOjUwJVwiLGkuaW5uZXJIVE1MPVwiXCIscWEuYXBwZW5kQ2hpbGQoaCk7dmFyIGI9YS5nZXRDb21wdXRlZFN0eWxlKGkpO2M9XCIxJVwiIT09Yi50b3AsZz1cIjJweFwiPT09Yi5tYXJnaW5MZWZ0LGU9XCI0cHhcIj09PWIud2lkdGgsaS5zdHlsZS5tYXJnaW5SaWdodD1cIjUwJVwiLGY9XCI0cHhcIj09PWIubWFyZ2luUmlnaHQscWEucmVtb3ZlQ2hpbGQoaCksaT1udWxsfX12YXIgYyxlLGYsZyxoPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxpPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLnN0eWxlJiYoaS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsaS5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsby5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09aS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxoLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDo4cHg7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O3BhZGRpbmc6MDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGguYXBwZW5kQ2hpbGQoaSksci5leHRlbmQobyx7cGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBiKCksY30sYm94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGV9LHBpeGVsTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGZ9LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBiKCksZ319KSl9KCk7ZnVuY3Rpb24gTmEoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHxNYShhKSxjJiYoZz1jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl0sXCJcIiE9PWd8fHIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfHwoZz1yLnN0eWxlKGEsYikpLCFvLnBpeGVsTWFyZ2luUmlnaHQoKSYmTGEudGVzdChnKSYmS2EudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSksdm9pZCAwIT09Zz9nK1wiXCI6Z31mdW5jdGlvbiBPYShhLGIpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX12YXIgUGE9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFFhPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxSYT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LFNhPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxUYT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7ZnVuY3Rpb24gVWEoYSl7aWYoYSBpbiBUYSlyZXR1cm4gYTt2YXIgYj1hWzBdLnRvVXBwZXJDYXNlKCkrYS5zbGljZSgxKSxjPVNhLmxlbmd0aDt3aGlsZShjLS0paWYoYT1TYVtjXStiLGEgaW4gVGEpcmV0dXJuIGF9ZnVuY3Rpb24gVmEoYSxiLGMpe3ZhciBkPWFhLmV4ZWMoYik7cmV0dXJuIGQ/TWF0aC5tYXgoMCxkWzJdLShjfHwwKSkrKGRbM118fFwicHhcIik6Yn1mdW5jdGlvbiBXYShhLGIsYyxkLGUpe3ZhciBmLGc9MDtmb3IoZj1jPT09KGQ/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT1iPzE6MDtmPDQ7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPXIuY3NzKGEsYytiYVtmXSwhMCxlKSksZD8oXCJjb250ZW50XCI9PT1jJiYoZy09ci5jc3MoYSxcInBhZGRpbmdcIitiYVtmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1yLmNzcyhhLFwiYm9yZGVyXCIrYmFbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPXIuY3NzKGEsXCJwYWRkaW5nXCIrYmFbZl0sITAsZSksXCJwYWRkaW5nXCIhPT1jJiYoZys9ci5jc3MoYSxcImJvcmRlclwiK2JhW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uIFhhKGEsYixjKXt2YXIgZCxlPSEwLGY9TWEoYSksZz1cImJvcmRlci1ib3hcIj09PXIuY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKTtpZihhLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiYoZD1hLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2JdKSxkPD0wfHxudWxsPT1kKXtpZihkPU5hKGEsYixmKSwoZDwwfHxudWxsPT1kKSYmKGQ9YS5zdHlsZVtiXSksTGEudGVzdChkKSlyZXR1cm4gZDtlPWcmJihvLmJveFNpemluZ1JlbGlhYmxlKCl8fGQ9PT1hLnN0eWxlW2JdKSxkPXBhcnNlRmxvYXQoZCl8fDB9cmV0dXJuIGQrV2EoYSxiLGN8fChnP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGUsZikrXCJweFwifXIuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9TmEoYSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PWM/XCIxXCI6Y319fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOlwiY3NzRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYSYmMyE9PWEubm9kZVR5cGUmJjghPT1hLm5vZGVUeXBlJiZhLnN0eWxlKXt2YXIgZSxmLGcsaD1yLmNhbWVsQ2FzZShiKSxpPWEuc3R5bGU7cmV0dXJuIGI9ci5jc3NQcm9wc1toXXx8KHIuY3NzUHJvcHNbaF09VWEoaCl8fGgpLGc9ci5jc3NIb29rc1tiXXx8ci5jc3NIb29rc1toXSx2b2lkIDA9PT1jP2cmJlwiZ2V0XCJpbiBnJiZ2b2lkIDAhPT0oZT1nLmdldChhLCExLGQpKT9lOmlbYl06KGY9dHlwZW9mIGMsXCJzdHJpbmdcIj09PWYmJihlPWFhLmV4ZWMoYykpJiZlWzFdJiYoYz1lYShhLGIsZSksZj1cIm51bWJlclwiKSxudWxsIT1jJiZjPT09YyYmKFwibnVtYmVyXCI9PT1mJiYoYys9ZSYmZVszXXx8KHIuY3NzTnVtYmVyW2hdP1wiXCI6XCJweFwiKSksby5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1jfHwwIT09Yi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGlbYl09XCJpbmhlcml0XCIpLGcmJlwic2V0XCJpbiBnJiZ2b2lkIDA9PT0oYz1nLnNldChhLGMsZCkpfHwoaVtiXT1jKSksdm9pZCAwKX19LGNzczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaD1yLmNhbWVsQ2FzZShiKTtyZXR1cm4gYj1yLmNzc1Byb3BzW2hdfHwoci5jc3NQcm9wc1toXT1VYShoKXx8aCksZz1yLmNzc0hvb2tzW2JdfHxyLmNzc0hvb2tzW2hdLGcmJlwiZ2V0XCJpbiBnJiYoZT1nLmdldChhLCEwLGMpKSx2b2lkIDA9PT1lJiYoZT1OYShhLGIsZCkpLFwibm9ybWFsXCI9PT1lJiZiIGluIFJhJiYoZT1SYVtiXSksXCJcIj09PWN8fGM/KGY9cGFyc2VGbG9hdChlKSxjPT09ITB8fGlzRmluaXRlKGYpP2Z8fDA6ZSk6ZX19KSxyLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihhLGIpe3IuY3NzSG9va3NbYl09e2dldDpmdW5jdGlvbihhLGMsZCl7aWYoYylyZXR1cm4hUGEudGVzdChyLmNzcyhhLFwiZGlzcGxheVwiKSl8fGEuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJmEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/WGEoYSxiLGQpOmRhKGEsUWEsZnVuY3Rpb24oKXtyZXR1cm4gWGEoYSxiLGQpfSl9LHNldDpmdW5jdGlvbihhLGMsZCl7dmFyIGUsZj1kJiZNYShhKSxnPWQmJldhKGEsYixkLFwiYm9yZGVyLWJveFwiPT09ci5jc3MoYSxcImJveFNpemluZ1wiLCExLGYpLGYpO3JldHVybiBnJiYoZT1hYS5leGVjKGMpKSYmXCJweFwiIT09KGVbM118fFwicHhcIikmJihhLnN0eWxlW2JdPWMsYz1yLmNzcyhhLGIpKSxWYShhLGMsZyl9fX0pLHIuY3NzSG9va3MubWFyZ2luTGVmdD1PYShvLnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihhLGIpe2lmKGIpcmV0dXJuKHBhcnNlRmxvYXQoTmEoYSxcIm1hcmdpbkxlZnRcIikpfHxhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtZGEoYSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KSkrXCJweFwifSksci5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtyLmNzc0hvb2tzW2ErYl09e2V4cGFuZDpmdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPXt9LGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5zcGxpdChcIiBcIik6W2NdO2Q8NDtkKyspZVthK2JhW2RdK2JdPWZbZF18fGZbZC0yXXx8ZlswXTtyZXR1cm4gZX19LEthLnRlc3QoYSl8fChyLmNzc0hvb2tzW2ErYl0uc2V0PVZhKX0pLHIuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUyh0aGlzLGZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9e30sZz0wO2lmKHIuaXNBcnJheShiKSl7Zm9yKGQ9TWEoYSksZT1iLmxlbmd0aDtnPGU7ZysrKWZbYltnXV09ci5jc3MoYSxiW2ddLCExLGQpO3JldHVybiBmfXJldHVybiB2b2lkIDAhPT1jP3Iuc3R5bGUoYSxiLGMpOnIuY3NzKGEsYil9LGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfX0pO2Z1bmN0aW9uIFlhKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBZYS5wcm90b3R5cGUuaW5pdChhLGIsYyxkLGUpfXIuVHdlZW49WWEsWWEucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpZYSxpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmVsZW09YSx0aGlzLnByb3A9Yyx0aGlzLmVhc2luZz1lfHxyLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9Yix0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9ZCx0aGlzLnVuaXQ9Znx8KHIuY3NzTnVtYmVyW2NdP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGE9WWEucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGEmJmEuZ2V0P2EuZ2V0KHRoaXMpOllhLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihhKXt2YXIgYixjPVlhLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9Yj1yLmVhc2luZ1t0aGlzLmVhc2luZ10oYSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qYSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz1iPWEsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKmIrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksYyYmYy5zZXQ/Yy5zZXQodGhpcyk6WWEucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0sWWEucHJvdG90eXBlLmluaXQucHJvdG90eXBlPVlhLnByb3RvdHlwZSxZYS5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIDEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGwhPWEuZWxlbVthLnByb3BdJiZudWxsPT1hLmVsZW0uc3R5bGVbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXTooYj1yLmNzcyhhLmVsZW0sYS5wcm9wLFwiXCIpLGImJlwiYXV0b1wiIT09Yj9iOjApfSxzZXQ6ZnVuY3Rpb24oYSl7ci5meC5zdGVwW2EucHJvcF0/ci5meC5zdGVwW2EucHJvcF0oYSk6MSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbD09YS5lbGVtLnN0eWxlW3IuY3NzUHJvcHNbYS5wcm9wXV0mJiFyLmNzc0hvb2tzW2EucHJvcF0/YS5lbGVtW2EucHJvcF09YS5ub3c6ci5zdHlsZShhLmVsZW0sYS5wcm9wLGEubm93K2EudW5pdCl9fX0sWWEucHJvcEhvb2tzLnNjcm9sbFRvcD1ZYS5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGEpe2EuZWxlbS5ub2RlVHlwZSYmYS5lbGVtLnBhcmVudE5vZGUmJihhLmVsZW1bYS5wcm9wXT1hLm5vdyl9fSxyLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzd2luZzpmdW5jdGlvbihhKXtyZXR1cm4uNS1NYXRoLmNvcyhhKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sci5meD1ZYS5wcm90b3R5cGUuaW5pdCxyLmZ4LnN0ZXA9e307dmFyIFphLCRhLF9hPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxhYj0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIGJiKCl7JGEmJihhLnJlcXVlc3RBbmltYXRpb25GcmFtZShiYiksci5meC50aWNrKCkpfWZ1bmN0aW9uIGNiKCl7cmV0dXJuIGEuc2V0VGltZW91dChmdW5jdGlvbigpe1phPXZvaWQgMH0pLFphPXIubm93KCl9ZnVuY3Rpb24gZGIoYSxiKXt2YXIgYyxkPTAsZT17aGVpZ2h0OmF9O2ZvcihiPWI/MTowO2Q8NDtkKz0yLWIpYz1iYVtkXSxlW1wibWFyZ2luXCIrY109ZVtcInBhZGRpbmdcIitjXT1hO3JldHVybiBiJiYoZS5vcGFjaXR5PWUud2lkdGg9YSksZX1mdW5jdGlvbiBlYihhLGIsYyl7Zm9yKHZhciBkLGU9KGhiLnR3ZWVuZXJzW2JdfHxbXSkuY29uY2F0KGhiLnR3ZWVuZXJzW1wiKlwiXSksZj0wLGc9ZS5sZW5ndGg7ZjxnO2YrKylpZihkPWVbZl0uY2FsbChjLGIsYSkpcmV0dXJuIGR9ZnVuY3Rpb24gZmIoYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGssbD1cIndpZHRoXCJpbiBifHxcImhlaWdodFwiaW4gYixtPXRoaXMsbj17fSxvPWEuc3R5bGUscD1hLm5vZGVUeXBlJiZjYShhKSxxPVYuZ2V0KGEsXCJmeHNob3dcIik7Yy5xdWV1ZXx8KGc9ci5fcXVldWVIb29rcyhhLFwiZnhcIiksbnVsbD09Zy51bnF1ZXVlZCYmKGcudW5xdWV1ZWQ9MCxoPWcuZW1wdHkuZmlyZSxnLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtnLnVucXVldWVkfHxoKCl9KSxnLnVucXVldWVkKyssbS5hbHdheXMoZnVuY3Rpb24oKXttLmFsd2F5cyhmdW5jdGlvbigpe2cudW5xdWV1ZWQtLSxyLnF1ZXVlKGEsXCJmeFwiKS5sZW5ndGh8fGcuZW1wdHkuZmlyZSgpfSl9KSk7Zm9yKGQgaW4gYilpZihlPWJbZF0sX2EudGVzdChlKSl7aWYoZGVsZXRlIGJbZF0sZj1mfHxcInRvZ2dsZVwiPT09ZSxlPT09KHA/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWV8fCFxfHx2b2lkIDA9PT1xW2RdKWNvbnRpbnVlO3A9ITB9bltkXT1xJiZxW2RdfHxyLnN0eWxlKGEsZCl9aWYoaT0hci5pc0VtcHR5T2JqZWN0KGIpLGl8fCFyLmlzRW1wdHlPYmplY3Qobikpe2wmJjE9PT1hLm5vZGVUeXBlJiYoYy5vdmVyZmxvdz1bby5vdmVyZmxvdyxvLm92ZXJmbG93WCxvLm92ZXJmbG93WV0saj1xJiZxLmRpc3BsYXksbnVsbD09aiYmKGo9Vi5nZXQoYSxcImRpc3BsYXlcIikpLGs9ci5jc3MoYSxcImRpc3BsYXlcIiksXCJub25lXCI9PT1rJiYoaj9rPWo6KGhhKFthXSwhMCksaj1hLnN0eWxlLmRpc3BsYXl8fGosaz1yLmNzcyhhLFwiZGlzcGxheVwiKSxoYShbYV0pKSksKFwiaW5saW5lXCI9PT1rfHxcImlubGluZS1ibG9ja1wiPT09ayYmbnVsbCE9aikmJlwibm9uZVwiPT09ci5jc3MoYSxcImZsb2F0XCIpJiYoaXx8KG0uZG9uZShmdW5jdGlvbigpe28uZGlzcGxheT1qfSksbnVsbD09aiYmKGs9by5kaXNwbGF5LGo9XCJub25lXCI9PT1rP1wiXCI6aykpLG8uZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksYy5vdmVyZmxvdyYmKG8ub3ZlcmZsb3c9XCJoaWRkZW5cIixtLmFsd2F5cyhmdW5jdGlvbigpe28ub3ZlcmZsb3c9Yy5vdmVyZmxvd1swXSxvLm92ZXJmbG93WD1jLm92ZXJmbG93WzFdLG8ub3ZlcmZsb3dZPWMub3ZlcmZsb3dbMl19KSksaT0hMTtmb3IoZCBpbiBuKWl8fChxP1wiaGlkZGVuXCJpbiBxJiYocD1xLmhpZGRlbik6cT1WLmFjY2VzcyhhLFwiZnhzaG93XCIse2Rpc3BsYXk6an0pLGYmJihxLmhpZGRlbj0hcCkscCYmaGEoW2FdLCEwKSxtLmRvbmUoZnVuY3Rpb24oKXtwfHxoYShbYV0pLFYucmVtb3ZlKGEsXCJmeHNob3dcIik7Zm9yKGQgaW4gbilyLnN0eWxlKGEsZCxuW2RdKX0pKSxpPWViKHA/cVtkXTowLGQsbSksZCBpbiBxfHwocVtkXT1pLnN0YXJ0LHAmJihpLmVuZD1pLnN0YXJ0LGkuc3RhcnQ9MCkpfX1mdW5jdGlvbiBnYihhLGIpe3ZhciBjLGQsZSxmLGc7Zm9yKGMgaW4gYSlpZihkPXIuY2FtZWxDYXNlKGMpLGU9YltkXSxmPWFbY10sci5pc0FycmF5KGYpJiYoZT1mWzFdLGY9YVtjXT1mWzBdKSxjIT09ZCYmKGFbZF09ZixkZWxldGUgYVtjXSksZz1yLmNzc0hvb2tzW2RdLGcmJlwiZXhwYW5kXCJpbiBnKXtmPWcuZXhwYW5kKGYpLGRlbGV0ZSBhW2RdO2ZvcihjIGluIGYpYyBpbiBhfHwoYVtjXT1mW2NdLGJbY109ZSl9ZWxzZSBiW2RdPWV9ZnVuY3Rpb24gaGIoYSxiLGMpe3ZhciBkLGUsZj0wLGc9aGIucHJlZmlsdGVycy5sZW5ndGgsaD1yLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIGkuZWxlbX0pLGk9ZnVuY3Rpb24oKXtpZihlKXJldHVybiExO2Zvcih2YXIgYj1aYXx8Y2IoKSxjPU1hdGgubWF4KDAsai5zdGFydFRpbWUrai5kdXJhdGlvbi1iKSxkPWMvai5kdXJhdGlvbnx8MCxmPTEtZCxnPTAsaT1qLnR3ZWVucy5sZW5ndGg7ZzxpO2crKylqLnR3ZWVuc1tnXS5ydW4oZik7cmV0dXJuIGgubm90aWZ5V2l0aChhLFtqLGYsY10pLGY8MSYmaT9jOihoLnJlc29sdmVXaXRoKGEsW2pdKSwhMSl9LGo9aC5wcm9taXNlKHtlbGVtOmEscHJvcHM6ci5leHRlbmQoe30sYiksb3B0czpyLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6ci5lYXNpbmcuX2RlZmF1bHR9LGMpLG9yaWdpbmFsUHJvcGVydGllczpiLG9yaWdpbmFsT3B0aW9uczpjLHN0YXJ0VGltZTpaYXx8Y2IoKSxkdXJhdGlvbjpjLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihiLGMpe3ZhciBkPXIuVHdlZW4oYSxqLm9wdHMsYixjLGoub3B0cy5zcGVjaWFsRWFzaW5nW2JdfHxqLm9wdHMuZWFzaW5nKTtyZXR1cm4gai50d2VlbnMucHVzaChkKSxkfSxzdG9wOmZ1bmN0aW9uKGIpe3ZhciBjPTAsZD1iP2oudHdlZW5zLmxlbmd0aDowO2lmKGUpcmV0dXJuIHRoaXM7Zm9yKGU9ITA7YzxkO2MrKylqLnR3ZWVuc1tjXS5ydW4oMSk7cmV0dXJuIGI/KGgubm90aWZ5V2l0aChhLFtqLDEsMF0pLGgucmVzb2x2ZVdpdGgoYSxbaixiXSkpOmgucmVqZWN0V2l0aChhLFtqLGJdKSx0aGlzfX0pLGs9ai5wcm9wcztmb3IoZ2IoayxqLm9wdHMuc3BlY2lhbEVhc2luZyk7ZjxnO2YrKylpZihkPWhiLnByZWZpbHRlcnNbZl0uY2FsbChqLGEsayxqLm9wdHMpKXJldHVybiByLmlzRnVuY3Rpb24oZC5zdG9wKSYmKHIuX3F1ZXVlSG9va3Moai5lbGVtLGoub3B0cy5xdWV1ZSkuc3RvcD1yLnByb3h5KGQuc3RvcCxkKSksZDtyZXR1cm4gci5tYXAoayxlYixqKSxyLmlzRnVuY3Rpb24oai5vcHRzLnN0YXJ0KSYmai5vcHRzLnN0YXJ0LmNhbGwoYSxqKSxyLmZ4LnRpbWVyKHIuZXh0ZW5kKGkse2VsZW06YSxhbmltOmoscXVldWU6ai5vcHRzLnF1ZXVlfSkpLGoucHJvZ3Jlc3Moai5vcHRzLnByb2dyZXNzKS5kb25lKGoub3B0cy5kb25lLGoub3B0cy5jb21wbGV0ZSkuZmFpbChqLm9wdHMuZmFpbCkuYWx3YXlzKGoub3B0cy5hbHdheXMpfXIuQW5pbWF0aW9uPXIuZXh0ZW5kKGhiLHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jcmVhdGVUd2VlbihhLGIpO3JldHVybiBlYShjLmVsZW0sYSxhYS5leGVjKGIpLGMpLGN9XX0sdHdlZW5lcjpmdW5jdGlvbihhLGIpe3IuaXNGdW5jdGlvbihhKT8oYj1hLGE9W1wiKlwiXSk6YT1hLm1hdGNoKEspO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWM9YVtkXSxoYi50d2VlbmVyc1tjXT1oYi50d2VlbmVyc1tjXXx8W10saGIudHdlZW5lcnNbY10udW5zaGlmdChiKX0scHJlZmlsdGVyczpbZmJdLHByZWZpbHRlcjpmdW5jdGlvbihhLGIpe2I/aGIucHJlZmlsdGVycy51bnNoaWZ0KGEpOmhiLnByZWZpbHRlcnMucHVzaChhKX19KSxyLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZT1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9yLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fHIuaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhci5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gci5meC5vZmZ8fGQuaGlkZGVuP2UuZHVyYXRpb249MDpcIm51bWJlclwiIT10eXBlb2YgZS5kdXJhdGlvbiYmKGUuZHVyYXRpb24gaW4gci5meC5zcGVlZHM/ZS5kdXJhdGlvbj1yLmZ4LnNwZWVkc1tlLmR1cmF0aW9uXTplLmR1cmF0aW9uPXIuZnguc3BlZWRzLl9kZWZhdWx0KSxudWxsIT1lLnF1ZXVlJiZlLnF1ZXVlIT09ITB8fChlLnF1ZXVlPVwiZnhcIiksZS5vbGQ9ZS5jb21wbGV0ZSxlLmNvbXBsZXRlPWZ1bmN0aW9uKCl7ci5pc0Z1bmN0aW9uKGUub2xkKSYmZS5vbGQuY2FsbCh0aGlzKSxlLnF1ZXVlJiZyLmRlcXVldWUodGhpcyxlLnF1ZXVlKX0sZX0sci5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5maWx0ZXIoY2EpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTpifSxhLGMsZCl9LGFuaW1hdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ci5pc0VtcHR5T2JqZWN0KGEpLGY9ci5zcGVlZChiLGMsZCksZz1mdW5jdGlvbigpe3ZhciBiPWhiKHRoaXMsci5leHRlbmQoe30sYSksZik7KGV8fFYuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZiLnN0b3AoITApfTtyZXR1cm4gZy5maW5pc2g9ZyxlfHxmLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGcpOnRoaXMucXVldWUoZi5xdWV1ZSxnKX0sc3RvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5zdG9wO2RlbGV0ZSBhLnN0b3AsYihjKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihjPWIsYj1hLGE9dm9pZCAwKSxiJiZhIT09ITEmJnRoaXMucXVldWUoYXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj0hMCxlPW51bGwhPWEmJmErXCJxdWV1ZUhvb2tzXCIsZj1yLnRpbWVycyxnPVYuZ2V0KHRoaXMpO2lmKGUpZ1tlXSYmZ1tlXS5zdG9wJiZkKGdbZV0pO2Vsc2UgZm9yKGUgaW4gZylnW2VdJiZnW2VdLnN0b3AmJmFiLnRlc3QoZSkmJmQoZ1tlXSk7Zm9yKGU9Zi5sZW5ndGg7ZS0tOylmW2VdLmVsZW0hPT10aGlzfHxudWxsIT1hJiZmW2VdLnF1ZXVlIT09YXx8KGZbZV0uYW5pbS5zdG9wKGMpLGI9ITEsZi5zcGxpY2UoZSwxKSk7IWImJmN8fHIuZGVxdWV1ZSh0aGlzLGEpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSE9PSExJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGM9Vi5nZXQodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1yLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsci5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7YjxnO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxyLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9ci5mbltiXTtyLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShkYihiLCEwKSxhLGQsZSl9fSksci5lYWNoKHtzbGlkZURvd246ZGIoXCJzaG93XCIpLHNsaWRlVXA6ZGIoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOmRiKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLHIudGltZXJzPVtdLHIuZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9MCxjPXIudGltZXJzO2ZvcihaYT1yLm5vdygpO2I8Yy5sZW5ndGg7YisrKWE9Y1tiXSxhKCl8fGNbYl0hPT1hfHxjLnNwbGljZShiLS0sMSk7Yy5sZW5ndGh8fHIuZnguc3RvcCgpLFphPXZvaWQgMH0sci5meC50aW1lcj1mdW5jdGlvbihhKXtyLnRpbWVycy5wdXNoKGEpLGEoKT9yLmZ4LnN0YXJ0KCk6ci50aW1lcnMucG9wKCl9LHIuZnguaW50ZXJ2YWw9MTMsci5meC5zdGFydD1mdW5jdGlvbigpeyRhfHwoJGE9YS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/YS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYmIpOmEuc2V0SW50ZXJ2YWwoci5meC50aWNrLHIuZnguaW50ZXJ2YWwpKX0sci5meC5zdG9wPWZ1bmN0aW9uKCl7YS5jYW5jZWxBbmltYXRpb25GcmFtZT9hLmNhbmNlbEFuaW1hdGlvbkZyYW1lKCRhKTphLmNsZWFySW50ZXJ2YWwoJGEpLCRhPW51bGx9LHIuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LHIuZm4uZGVsYXk9ZnVuY3Rpb24oYixjKXtyZXR1cm4gYj1yLmZ4P3IuZnguc3BlZWRzW2JdfHxiOmIsYz1jfHxcImZ4XCIsdGhpcy5xdWV1ZShjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9YS5zZXRUaW1lb3V0KGMsYik7ZC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhclRpbWVvdXQoZSl9fSl9LGZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYj1kLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksYz1iLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7YS50eXBlPVwiY2hlY2tib3hcIixvLmNoZWNrT249XCJcIiE9PWEudmFsdWUsby5vcHRTZWxlY3RlZD1jLnNlbGVjdGVkLGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS52YWx1ZT1cInRcIixhLnR5cGU9XCJyYWRpb1wiLG8ucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWV9KCk7dmFyIGliLGpiPXIuZXhwci5hdHRySGFuZGxlO3IuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFModGhpcyxyLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3IucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksci5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuZ2V0QXR0cmlidXRlP3IucHJvcChhLGIsYyk6KDE9PT1mJiZyLmlzWE1MRG9jKGEpfHwoZT1yLmF0dHJIb29rc1tiLnRvTG93ZXJDYXNlKCldfHwoci5leHByLm1hdGNoLmJvb2wudGVzdChiKT9pYjp2b2lkIDApKSxcclxudm9pZCAwIT09Yz9udWxsPT09Yz92b2lkIHIucmVtb3ZlQXR0cihhLGIpOmUmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6KGQ9ci5maW5kLmF0dHIoYSxiKSxudWxsPT1kP3ZvaWQgMDpkKSl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIW8ucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmci5ub2RlTmFtZShhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTAsZT1iJiZiLm1hdGNoKEspO2lmKGUmJjE9PT1hLm5vZGVUeXBlKXdoaWxlKGM9ZVtkKytdKWEucmVtb3ZlQXR0cmlidXRlKGMpfX0pLGliPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPT09ITE/ci5yZW1vdmVBdHRyKGEsYyk6YS5zZXRBdHRyaWJ1dGUoYyxjKSxjfX0sci5lYWNoKHIuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihhLGIpe3ZhciBjPWpiW2JdfHxyLmZpbmQuYXR0cjtqYltiXT1mdW5jdGlvbihhLGIsZCl7dmFyIGUsZixnPWIudG9Mb3dlckNhc2UoKTtyZXR1cm4gZHx8KGY9amJbZ10samJbZ109ZSxlPW51bGwhPWMoYSxiLGQpP2c6bnVsbCxqYltnXT1mKSxlfX0pO3ZhciBrYj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLGxiPS9eKD86YXxhcmVhKSQvaTtyLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBTKHRoaXMsci5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tyLnByb3BGaXhbYV18fGFdfSl9fSksci5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuIDE9PT1mJiZyLmlzWE1MRG9jKGEpfHwoYj1yLnByb3BGaXhbYl18fGIsZT1yLnByb3BIb29rc1tiXSksdm9pZCAwIT09Yz9lJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOmFbYl09YzplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6YVtiXX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPXIuZmluZC5hdHRyKGEsXCJ0YWJpbmRleFwiKTtyZXR1cm4gYj9wYXJzZUludChiLDEwKTprYi50ZXN0KGEubm9kZU5hbWUpfHxsYi50ZXN0KGEubm9kZU5hbWUpJiZhLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLG8ub3B0U2VsZWN0ZWR8fChyLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfSxzZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO2ImJihiLnNlbGVjdGVkSW5kZXgsYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCl9fSksci5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe3IucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KTtmdW5jdGlvbiBtYihhKXt2YXIgYj1hLm1hdGNoKEspfHxbXTtyZXR1cm4gYi5qb2luKFwiIFwiKX1mdW5jdGlvbiBuYihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9ci5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihyLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtyKHRoaXMpLmFkZENsYXNzKGEuY2FsbCh0aGlzLGIsbmIodGhpcykpKX0pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goSyl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9bmIoYyksZD0xPT09Yy5ub2RlVHlwZSYmXCIgXCIrbWIoZSkrXCIgXCIpe2c9MDt3aGlsZShmPWJbZysrXSlkLmluZGV4T2YoXCIgXCIrZitcIiBcIik8MCYmKGQrPWYrXCIgXCIpO2g9bWIoZCksZSE9PWgmJmMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihyLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtyKHRoaXMpLnJlbW92ZUNsYXNzKGEuY2FsbCh0aGlzLGIsbmIodGhpcykpKX0pO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goSyl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9bmIoYyksZD0xPT09Yy5ub2RlVHlwZSYmXCIgXCIrbWIoZSkrXCIgXCIpe2c9MDt3aGlsZShmPWJbZysrXSl3aGlsZShkLmluZGV4T2YoXCIgXCIrZitcIiBcIik+LTEpZD1kLnJlcGxhY2UoXCIgXCIrZitcIiBcIixcIiBcIik7aD1tYihkKSxlIT09aCYmYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOnIuaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYyl7cih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLG5iKHRoaXMpLGIpLGIpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsZCxlLGY7aWYoXCJzdHJpbmdcIj09PWMpe2Q9MCxlPXIodGhpcyksZj1hLm1hdGNoKEspfHxbXTt3aGlsZShiPWZbZCsrXSllLmhhc0NsYXNzKGIpP2UucmVtb3ZlQ2xhc3MoYik6ZS5hZGRDbGFzcyhiKX1lbHNlIHZvaWQgMCE9PWEmJlwiYm9vbGVhblwiIT09Y3x8KGI9bmIodGhpcyksYiYmVi5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixiKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGJ8fGE9PT0hMT9cIlwiOlYuZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPTA7Yj1cIiBcIithK1wiIFwiO3doaWxlKGM9dGhpc1tkKytdKWlmKDE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrbWIobmIoYykpK1wiIFwiKS5pbmRleE9mKGIpPi0xKXJldHVybiEwO3JldHVybiExfX0pO3ZhciBvYj0vXFxyL2c7ci5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBkPXIuaXNGdW5jdGlvbihhKSx0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGU7MT09PXRoaXMubm9kZVR5cGUmJihlPWQ/YS5jYWxsKHRoaXMsYyxyKHRoaXMpLnZhbCgpKTphLG51bGw9PWU/ZT1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiBlP2UrPVwiXCI6ci5pc0FycmF5KGUpJiYoZT1yLm1hcChlLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6YStcIlwifSkpLGI9ci52YWxIb29rc1t0aGlzLnR5cGVdfHxyLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJzZXRcImluIGImJnZvaWQgMCE9PWIuc2V0KHRoaXMsZSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1lKSl9KTtpZihlKXJldHVybiBiPXIudmFsSG9va3NbZS50eXBlXXx8ci52YWxIb29rc1tlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwiZ2V0XCJpbiBiJiZ2b2lkIDAhPT0oYz1iLmdldChlLFwidmFsdWVcIikpP2M6KGM9ZS52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2Uob2IsXCJcIik6bnVsbD09Yz9cIlwiOmMpfX19KSxyLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPXIuZmluZC5hdHRyKGEsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9Yj9iOm1iKHIudGV4dChhKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT1hLm9wdGlvbnMsZj1hLnNlbGVjdGVkSW5kZXgsZz1cInNlbGVjdC1vbmVcIj09PWEudHlwZSxoPWc/bnVsbDpbXSxpPWc/ZisxOmUubGVuZ3RoO2ZvcihkPWY8MD9pOmc/ZjowO2Q8aTtkKyspaWYoYz1lW2RdLChjLnNlbGVjdGVkfHxkPT09ZikmJiFjLmRpc2FibGVkJiYoIWMucGFyZW50Tm9kZS5kaXNhYmxlZHx8IXIubm9kZU5hbWUoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPXIoYykudmFsKCksZylyZXR1cm4gYjtoLnB1c2goYil9cmV0dXJuIGh9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1yLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9ci5pbkFycmF5KHIudmFsSG9va3Mub3B0aW9uLmdldChkKSxmKT4tMSkmJihjPSEwKTtyZXR1cm4gY3x8KGEuc2VsZWN0ZWRJbmRleD0tMSksZn19fX0pLHIuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtyLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oYSxiKXtpZihyLmlzQXJyYXkoYikpcmV0dXJuIGEuY2hlY2tlZD1yLmluQXJyYXkocihhKS52YWwoKSxiKT4tMX19LG8uY2hlY2tPbnx8KHIudmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6YS52YWx1ZX0pfSk7dmFyIHBiPS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLztyLmV4dGVuZChyLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxlLGYpe3ZhciBnLGgsaSxqLGssbSxuLG89W2V8fGRdLHA9bC5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHE9bC5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGg9aT1lPWV8fGQsMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiYhcGIudGVzdChwK3IuZXZlbnQudHJpZ2dlcmVkKSYmKHAuaW5kZXhPZihcIi5cIik+LTEmJihxPXAuc3BsaXQoXCIuXCIpLHA9cS5zaGlmdCgpLHEuc29ydCgpKSxrPXAuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3AsYj1iW3IuZXhwYW5kb10/YjpuZXcgci5FdmVudChwLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1mPzI6MyxiLm5hbWVzcGFjZT1xLmpvaW4oXCIuXCIpLGIucm5hbWVzcGFjZT1iLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcS5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxiLnJlc3VsdD12b2lkIDAsYi50YXJnZXR8fChiLnRhcmdldD1lKSxjPW51bGw9PWM/W2JdOnIubWFrZUFycmF5KGMsW2JdKSxuPXIuZXZlbnQuc3BlY2lhbFtwXXx8e30sZnx8IW4udHJpZ2dlcnx8bi50cmlnZ2VyLmFwcGx5KGUsYykhPT0hMSkpe2lmKCFmJiYhbi5ub0J1YmJsZSYmIXIuaXNXaW5kb3coZSkpe2ZvcihqPW4uZGVsZWdhdGVUeXBlfHxwLHBiLnRlc3QoaitwKXx8KGg9aC5wYXJlbnROb2RlKTtoO2g9aC5wYXJlbnROb2RlKW8ucHVzaChoKSxpPWg7aT09PShlLm93bmVyRG9jdW1lbnR8fGQpJiZvLnB1c2goaS5kZWZhdWx0Vmlld3x8aS5wYXJlbnRXaW5kb3d8fGEpfWc9MDt3aGlsZSgoaD1vW2crK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1nPjE/ajpuLmJpbmRUeXBlfHxwLG09KFYuZ2V0KGgsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZWLmdldChoLFwiaGFuZGxlXCIpLG0mJm0uYXBwbHkoaCxjKSxtPWsmJmhba10sbSYmbS5hcHBseSYmVChoKSYmKGIucmVzdWx0PW0uYXBwbHkoaCxjKSxiLnJlc3VsdD09PSExJiZiLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBiLnR5cGU9cCxmfHxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxuLl9kZWZhdWx0JiZuLl9kZWZhdWx0LmFwcGx5KG8ucG9wKCksYykhPT0hMXx8IVQoZSl8fGsmJnIuaXNGdW5jdGlvbihlW3BdKSYmIXIuaXNXaW5kb3coZSkmJihpPWVba10saSYmKGVba109bnVsbCksci5ldmVudC50cmlnZ2VyZWQ9cCxlW3BdKCksci5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGkmJihlW2tdPWkpKSxiLnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1yLmV4dGVuZChuZXcgci5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITB9KTtyLmV2ZW50LnRyaWdnZXIoZCxudWxsLGIpfX0pLHIuZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO2lmKGMpcmV0dXJuIHIuZXZlbnQudHJpZ2dlcihhLGIsYywhMCl9fSksci5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe3IuZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLHIuZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX19KSxvLmZvY3VzaW49XCJvbmZvY3VzaW5cImluIGEsby5mb2N1c2lufHxyLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe3IuZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxyLmV2ZW50LmZpeChhKSl9O3IuZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1WLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLFYuYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Vi5hY2Nlc3MoZCxiKS0xO2U/Vi5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxWLnJlbW92ZShkLGIpKX19fSk7dmFyIHFiPWEubG9jYXRpb24scmI9ci5ub3coKSxzYj0vXFw/LztyLnBhcnNlWE1MPWZ1bmN0aW9uKGIpe3ZhciBjO2lmKCFifHxcInN0cmluZ1wiIT10eXBlb2YgYilyZXR1cm4gbnVsbDt0cnl7Yz0obmV3IGEuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoYixcInRleHQveG1sXCIpfWNhdGNoKGQpe2M9dm9pZCAwfXJldHVybiBjJiYhYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8ci5lcnJvcihcIkludmFsaWQgWE1MOiBcIitiKSxjfTt2YXIgdGI9L1xcW1xcXSQvLHViPS9cXHI/XFxuL2csdmI9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLHdiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiB4YihhLGIsYyxkKXt2YXIgZTtpZihyLmlzQXJyYXkoYikpci5lYWNoKGIsZnVuY3Rpb24oYixlKXtjfHx0Yi50ZXN0KGEpP2QoYSxlKTp4YihhK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9ZT9iOlwiXCIpK1wiXVwiLGUsYyxkKX0pO2Vsc2UgaWYoY3x8XCJvYmplY3RcIiE9PXIudHlwZShiKSlkKGEsYik7ZWxzZSBmb3IoZSBpbiBiKXhiKGErXCJbXCIrZStcIl1cIixiW2VdLGMsZCl9ci5wYXJhbT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1mdW5jdGlvbihhLGIpe3ZhciBjPXIuaXNGdW5jdGlvbihiKT9iKCk6YjtkW2QubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG51bGw9PWM/XCJcIjpjKX07aWYoci5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIXIuaXNQbGFpbk9iamVjdChhKSlyLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKXhiKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpfSxyLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHIucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1yLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP3IubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIXIodGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJndiLnRlc3QodGhpcy5ub2RlTmFtZSkmJiF2Yi50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhaWEudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1yKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6ci5pc0FycmF5KGMpP3IubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZSh1YixcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKHViLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciB5Yj0vJTIwL2csemI9LyMuKiQvLEFiPS8oWz8mXSlfPVteJl0qLyxCYj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLENiPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLERiPS9eKD86R0VUfEhFQUQpJC8sRWI9L15cXC9cXC8vLEZiPXt9LEdiPXt9LEhiPVwiKi9cIi5jb25jYXQoXCIqXCIpLEliPWQuY3JlYXRlRWxlbWVudChcImFcIik7SWIuaHJlZj1xYi5ocmVmO2Z1bmN0aW9uIEpiKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1iLGI9XCIqXCIpO3ZhciBkLGU9MCxmPWIudG9Mb3dlckNhc2UoKS5tYXRjaChLKXx8W107aWYoci5pc0Z1bmN0aW9uKGMpKXdoaWxlKGQ9ZltlKytdKVwiK1wiPT09ZFswXT8oZD1kLnNsaWNlKDEpfHxcIipcIiwoYVtkXT1hW2RdfHxbXSkudW5zaGlmdChjKSk6KGFbZF09YVtkXXx8W10pLnB1c2goYyl9fWZ1bmN0aW9uIEtiKGEsYixjLGQpe3ZhciBlPXt9LGY9YT09PUdiO2Z1bmN0aW9uIGcoaCl7dmFyIGk7cmV0dXJuIGVbaF09ITAsci5lYWNoKGFbaF18fFtdLGZ1bmN0aW9uKGEsaCl7dmFyIGo9aChiLGMsZCk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGp8fGZ8fGVbal0/Zj8hKGk9aik6dm9pZCAwOihiLmRhdGFUeXBlcy51bnNoaWZ0KGopLGcoaiksITEpfSksaX1yZXR1cm4gZyhiLmRhdGFUeXBlc1swXSl8fCFlW1wiKlwiXSYmZyhcIipcIil9ZnVuY3Rpb24gTGIoYSxiKXt2YXIgYyxkLGU9ci5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihjIGluIGIpdm9pZCAwIT09YltjXSYmKChlW2NdP2E6ZHx8KGQ9e30pKVtjXT1iW2NdKTtyZXR1cm4gZCYmci5leHRlbmQoITAsYSxkKSxhfWZ1bmN0aW9uIE1iKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY29udGVudHMsaT1hLmRhdGFUeXBlczt3aGlsZShcIipcIj09PWlbMF0paS5zaGlmdCgpLHZvaWQgMD09PWQmJihkPWEubWltZVR5cGV8fGIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKGQpZm9yKGUgaW4gaClpZihoW2VdJiZoW2VdLnRlc3QoZCkpe2kudW5zaGlmdChlKTticmVha31pZihpWzBdaW4gYylmPWlbMF07ZWxzZXtmb3IoZSBpbiBjKXtpZighaVswXXx8YS5jb252ZXJ0ZXJzW2UrXCIgXCIraVswXV0pe2Y9ZTticmVha31nfHwoZz1lKX1mPWZ8fGd9aWYoZilyZXR1cm4gZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdfWZ1bmN0aW9uIE5iKGEsYixjLGQpe3ZhciBlLGYsZyxoLGksaj17fSxrPWEuZGF0YVR5cGVzLnNsaWNlKCk7aWYoa1sxXSlmb3IoZyBpbiBhLmNvbnZlcnRlcnMpaltnLnRvTG93ZXJDYXNlKCldPWEuY29udmVydGVyc1tnXTtmPWsuc2hpZnQoKTt3aGlsZShmKWlmKGEucmVzcG9uc2VGaWVsZHNbZl0mJihjW2EucmVzcG9uc2VGaWVsZHNbZl1dPWIpLCFpJiZkJiZhLmRhdGFGaWx0ZXImJihiPWEuZGF0YUZpbHRlcihiLGEuZGF0YVR5cGUpKSxpPWYsZj1rLnNoaWZ0KCkpaWYoXCIqXCI9PT1mKWY9aTtlbHNlIGlmKFwiKlwiIT09aSYmaSE9PWYpe2lmKGc9altpK1wiIFwiK2ZdfHxqW1wiKiBcIitmXSwhZylmb3IoZSBpbiBqKWlmKGg9ZS5zcGxpdChcIiBcIiksaFsxXT09PWYmJihnPWpbaStcIiBcIitoWzBdXXx8altcIiogXCIraFswXV0pKXtnPT09ITA/Zz1qW2VdOmpbZV0hPT0hMCYmKGY9aFswXSxrLnVuc2hpZnQoaFsxXSkpO2JyZWFrfWlmKGchPT0hMClpZihnJiZhW1widGhyb3dzXCJdKWI9ZyhiKTtlbHNlIHRyeXtiPWcoYil9Y2F0Y2gobCl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjpnP2w6XCJObyBjb252ZXJzaW9uIGZyb20gXCIraStcIiB0byBcIitmfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6Yn19ci5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOnFiLmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6Q2IudGVzdChxYi5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6SGIsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOkpTT04ucGFyc2UsXCJ0ZXh0IHhtbFwiOnIucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP0xiKExiKGEsci5hamF4U2V0dGluZ3MpLGIpOkxiKHIuYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOkpiKEZiKSxhamF4VHJhbnNwb3J0OkpiKEdiKSxhamF4OmZ1bmN0aW9uKGIsYyl7XCJvYmplY3RcIj09dHlwZW9mIGImJihjPWIsYj12b2lkIDApLGM9Y3x8e307dmFyIGUsZixnLGgsaSxqLGssbCxtLG4sbz1yLmFqYXhTZXR1cCh7fSxjKSxwPW8uY29udGV4dHx8byxxPW8uY29udGV4dCYmKHAubm9kZVR5cGV8fHAuanF1ZXJ5KT9yKHApOnIuZXZlbnQscz1yLkRlZmVycmVkKCksdD1yLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHU9by5zdGF0dXNDb2RlfHx7fSx2PXt9LHc9e30seD1cImNhbmNlbGVkXCIseT17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGspe2lmKCFoKXtoPXt9O3doaWxlKGI9QmIuZXhlYyhnKSloW2JbMV0udG9Mb3dlckNhc2UoKV09YlsyXX1iPWhbYS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09Yj9udWxsOmJ9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiBrP2c6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT1rJiYoYT13W2EudG9Mb3dlckNhc2UoKV09d1thLnRvTG93ZXJDYXNlKCldfHxhLHZbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09ayYmKG8ubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKGspeS5hbHdheXMoYVt5LnN0YXR1c10pO2Vsc2UgZm9yKGIgaW4gYSl1W2JdPVt1W2JdLGFbYl1dO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihhKXt2YXIgYj1hfHx4O3JldHVybiBlJiZlLmFib3J0KGIpLEEoMCxiKSx0aGlzfX07aWYocy5wcm9taXNlKHkpLG8udXJsPSgoYnx8by51cmx8fHFiLmhyZWYpK1wiXCIpLnJlcGxhY2UoRWIscWIucHJvdG9jb2wrXCIvL1wiKSxvLnR5cGU9Yy5tZXRob2R8fGMudHlwZXx8by5tZXRob2R8fG8udHlwZSxvLmRhdGFUeXBlcz0oby5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goSyl8fFtcIlwiXSxudWxsPT1vLmNyb3NzRG9tYWluKXtqPWQuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e2ouaHJlZj1vLnVybCxqLmhyZWY9ai5ocmVmLG8uY3Jvc3NEb21haW49SWIucHJvdG9jb2wrXCIvL1wiK0liLmhvc3QhPWoucHJvdG9jb2wrXCIvL1wiK2ouaG9zdH1jYXRjaCh6KXtvLmNyb3NzRG9tYWluPSEwfX1pZihvLmRhdGEmJm8ucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBvLmRhdGEmJihvLmRhdGE9ci5wYXJhbShvLmRhdGEsby50cmFkaXRpb25hbCkpLEtiKEZiLG8sYyx5KSxrKXJldHVybiB5O2w9ci5ldmVudCYmby5nbG9iYWwsbCYmMD09PXIuYWN0aXZlKysmJnIuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxvLnR5cGU9by50eXBlLnRvVXBwZXJDYXNlKCksby5oYXNDb250ZW50PSFEYi50ZXN0KG8udHlwZSksZj1vLnVybC5yZXBsYWNlKHpiLFwiXCIpLG8uaGFzQ29udGVudD9vLmRhdGEmJm8ucHJvY2Vzc0RhdGEmJjA9PT0oby5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmKG8uZGF0YT1vLmRhdGEucmVwbGFjZSh5YixcIitcIikpOihuPW8udXJsLnNsaWNlKGYubGVuZ3RoKSxvLmRhdGEmJihmKz0oc2IudGVzdChmKT9cIiZcIjpcIj9cIikrby5kYXRhLGRlbGV0ZSBvLmRhdGEpLG8uY2FjaGU9PT0hMSYmKGY9Zi5yZXBsYWNlKEFiLFwiJDFcIiksbj0oc2IudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK3JiKysgK24pLG8udXJsPWYrbiksby5pZk1vZGlmaWVkJiYoci5sYXN0TW9kaWZpZWRbZl0mJnkuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsci5sYXN0TW9kaWZpZWRbZl0pLHIuZXRhZ1tmXSYmeS5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLHIuZXRhZ1tmXSkpLChvLmRhdGEmJm8uaGFzQ29udGVudCYmby5jb250ZW50VHlwZSE9PSExfHxjLmNvbnRlbnRUeXBlKSYmeS5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsby5jb250ZW50VHlwZSkseS5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsby5kYXRhVHlwZXNbMF0mJm8uYWNjZXB0c1tvLmRhdGFUeXBlc1swXV0/by5hY2NlcHRzW28uZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1vLmRhdGFUeXBlc1swXT9cIiwgXCIrSGIrXCI7IHE9MC4wMVwiOlwiXCIpOm8uYWNjZXB0c1tcIipcIl0pO2ZvcihtIGluIG8uaGVhZGVycyl5LnNldFJlcXVlc3RIZWFkZXIobSxvLmhlYWRlcnNbbV0pO2lmKG8uYmVmb3JlU2VuZCYmKG8uYmVmb3JlU2VuZC5jYWxsKHAseSxvKT09PSExfHxrKSlyZXR1cm4geS5hYm9ydCgpO2lmKHg9XCJhYm9ydFwiLHQuYWRkKG8uY29tcGxldGUpLHkuZG9uZShvLnN1Y2Nlc3MpLHkuZmFpbChvLmVycm9yKSxlPUtiKEdiLG8sYyx5KSl7aWYoeS5yZWFkeVN0YXRlPTEsbCYmcS50cmlnZ2VyKFwiYWpheFNlbmRcIixbeSxvXSksaylyZXR1cm4geTtvLmFzeW5jJiZvLnRpbWVvdXQ+MCYmKGk9YS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eS5hYm9ydChcInRpbWVvdXRcIil9LG8udGltZW91dCkpO3RyeXtrPSExLGUuc2VuZCh2LEEpfWNhdGNoKHope2lmKGspdGhyb3cgejtBKC0xLHopfX1lbHNlIEEoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24gQShiLGMsZCxoKXt2YXIgaixtLG4sdix3LHg9YztrfHwoaz0hMCxpJiZhLmNsZWFyVGltZW91dChpKSxlPXZvaWQgMCxnPWh8fFwiXCIseS5yZWFkeVN0YXRlPWI+MD80OjAsaj1iPj0yMDAmJmI8MzAwfHwzMDQ9PT1iLGQmJih2PU1iKG8seSxkKSksdj1OYihvLHYseSxqKSxqPyhvLmlmTW9kaWZpZWQmJih3PXkuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihyLmxhc3RNb2RpZmllZFtmXT13KSx3PXkuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihyLmV0YWdbZl09dykpLDIwND09PWJ8fFwiSEVBRFwiPT09by50eXBlP3g9XCJub2NvbnRlbnRcIjozMDQ9PT1iP3g9XCJub3Rtb2RpZmllZFwiOih4PXYuc3RhdGUsbT12LmRhdGEsbj12LmVycm9yLGo9IW4pKToobj14LCFiJiZ4fHwoeD1cImVycm9yXCIsYjwwJiYoYj0wKSkpLHkuc3RhdHVzPWIseS5zdGF0dXNUZXh0PShjfHx4KStcIlwiLGo/cy5yZXNvbHZlV2l0aChwLFttLHgseV0pOnMucmVqZWN0V2l0aChwLFt5LHgsbl0pLHkuc3RhdHVzQ29kZSh1KSx1PXZvaWQgMCxsJiZxLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbeSxvLGo/bTpuXSksdC5maXJlV2l0aChwLFt5LHhdKSxsJiYocS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3ksb10pLC0tci5hY3RpdmV8fHIuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHl9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiByLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiByLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLHIuZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtyW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiByLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxyLmFqYXgoci5leHRlbmQoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9LHIuaXNQbGFpbk9iamVjdChhKSYmYSkpfX0pLHIuX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIHIuYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sci5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIHRoaXNbMF0mJihyLmlzRnVuY3Rpb24oYSkmJihhPWEuY2FsbCh0aGlzWzBdKSksYj1yKGEsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZiLmluc2VydEJlZm9yZSh0aGlzWzBdKSxiLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXM7d2hpbGUoYS5maXJzdEVsZW1lbnRDaGlsZClhPWEuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGF9KS5hcHBlbmQodGhpcykpLHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihhKXtyZXR1cm4gci5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtyKHRoaXMpLndyYXBJbm5lcihhLmNhbGwodGhpcyxiKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1yKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPXIuaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3IodGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wYXJlbnQoYSkubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uKCl7cih0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSksdGhpc319KSxyLmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIXIuZXhwci5wc2V1ZG9zLnZpc2libGUoYSl9LHIuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oYSl7cmV0dXJuISEoYS5vZmZzZXRXaWR0aHx8YS5vZmZzZXRIZWlnaHR8fGEuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpfSxyLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBhLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGIpe319O3ZhciBPYj17MDoyMDAsMTIyMzoyMDR9LFBiPXIuYWpheFNldHRpbmdzLnhocigpO28uY29ycz0hIVBiJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gUGIsby5hamF4PVBiPSEhUGIsci5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGIpe3ZhciBjLGQ7aWYoby5jb3JzfHxQYiYmIWIuY3Jvc3NEb21haW4pcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXt2YXIgZyxoPWIueGhyKCk7aWYoaC5vcGVuKGIudHlwZSxiLnVybCxiLmFzeW5jLGIudXNlcm5hbWUsYi5wYXNzd29yZCksYi54aHJGaWVsZHMpZm9yKGcgaW4gYi54aHJGaWVsZHMpaFtnXT1iLnhockZpZWxkc1tnXTtiLm1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUmJmgub3ZlcnJpZGVNaW1lVHlwZShiLm1pbWVUeXBlKSxiLmNyb3NzRG9tYWlufHxlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGcgaW4gZSloLnNldFJlcXVlc3RIZWFkZXIoZyxlW2ddKTtjPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe2MmJihjPWQ9aC5vbmxvYWQ9aC5vbmVycm9yPWgub25hYm9ydD1oLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiYWJvcnRcIj09PWE/aC5hYm9ydCgpOlwiZXJyb3JcIj09PWE/XCJudW1iZXJcIiE9dHlwZW9mIGguc3RhdHVzP2YoMCxcImVycm9yXCIpOmYoaC5zdGF0dXMsaC5zdGF0dXNUZXh0KTpmKE9iW2guc3RhdHVzXXx8aC5zdGF0dXMsaC5zdGF0dXNUZXh0LFwidGV4dFwiIT09KGgucmVzcG9uc2VUeXBlfHxcInRleHRcIil8fFwic3RyaW5nXCIhPXR5cGVvZiBoLnJlc3BvbnNlVGV4dD97YmluYXJ5OmgucmVzcG9uc2V9Ont0ZXh0OmgucmVzcG9uc2VUZXh0fSxoLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxoLm9ubG9hZD1jKCksZD1oLm9uZXJyb3I9YyhcImVycm9yXCIpLHZvaWQgMCE9PWgub25hYm9ydD9oLm9uYWJvcnQ9ZDpoLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1oLnJlYWR5U3RhdGUmJmEuc2V0VGltZW91dChmdW5jdGlvbigpe2MmJmQoKX0pfSxjPWMoXCJhYm9ydFwiKTt0cnl7aC5zZW5kKGIuaGFzQ29udGVudCYmYi5kYXRhfHxudWxsKX1jYXRjaChpKXtpZihjKXRocm93IGl9fSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fSksci5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGEpe2EuY3Jvc3NEb21haW4mJihhLmNvbnRlbnRzLnNjcmlwdD0hMSl9KSxyLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gci5nbG9iYWxFdmFsKGEpLGF9fX0pLHIuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksci5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihlLGYpe2I9cihcIjxzY3JpcHQ+XCIpLnByb3Aoe2NoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZihcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksZC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBRYj1bXSxSYj0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO3IuYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPVFiLnBvcCgpfHxyLmV4cGFuZG8rXCJfXCIrcmIrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLHIuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoUmIudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYwPT09KGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJlJiLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO2lmKGh8fFwianNvbnBcIj09PWIuZGF0YVR5cGVzWzBdKXJldHVybiBlPWIuanNvbnBDYWxsYmFjaz1yLmlzRnVuY3Rpb24oYi5qc29ucENhbGxiYWNrKT9iLmpzb25wQ2FsbGJhY2soKTpiLmpzb25wQ2FsbGJhY2ssaD9iW2hdPWJbaF0ucmVwbGFjZShSYixcIiQxXCIrZSk6Yi5qc29ucCE9PSExJiYoYi51cmwrPShzYi50ZXN0KGIudXJsKT9cIiZcIjpcIj9cIikrYi5qc29ucCtcIj1cIitlKSxiLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBnfHxyLmVycm9yKGUrXCIgd2FzIG5vdCBjYWxsZWRcIiksZ1swXX0sYi5kYXRhVHlwZXNbMF09XCJqc29uXCIsZj1hW2VdLGFbZV09ZnVuY3Rpb24oKXtnPWFyZ3VtZW50c30sZC5hbHdheXMoZnVuY3Rpb24oKXt2b2lkIDA9PT1mP3IoYSkucmVtb3ZlUHJvcChlKTphW2VdPWYsYltlXSYmKGIuanNvbnBDYWxsYmFjaz1jLmpzb25wQ2FsbGJhY2ssUWIucHVzaChlKSksZyYmci5pc0Z1bmN0aW9uKGYpJiZmKGdbMF0pLGc9Zj12b2lkIDB9KSxcInNjcmlwdFwifSksby5jcmVhdGVIVE1MRG9jdW1lbnQ9ZnVuY3Rpb24oKXt2YXIgYT1kLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5O3JldHVybiBhLmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCIsMj09PWEuY2hpbGROb2Rlcy5sZW5ndGh9KCksci5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybltdO1wiYm9vbGVhblwiPT10eXBlb2YgYiYmKGM9YixiPSExKTt2YXIgZSxmLGc7cmV0dXJuIGJ8fChvLmNyZWF0ZUhUTUxEb2N1bWVudD8oYj1kLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSxlPWIuY3JlYXRlRWxlbWVudChcImJhc2VcIiksZS5ocmVmPWQubG9jYXRpb24uaHJlZixiLmhlYWQuYXBwZW5kQ2hpbGQoZSkpOmI9ZCksZj1CLmV4ZWMoYSksZz0hYyYmW10sZj9bYi5jcmVhdGVFbGVtZW50KGZbMV0pXTooZj1wYShbYV0sYixnKSxnJiZnLmxlbmd0aCYmcihnKS5yZW1vdmUoKSxyLm1lcmdlKFtdLGYuY2hpbGROb2RlcykpfSxyLmZuLmxvYWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPXRoaXMsaD1hLmluZGV4T2YoXCIgXCIpO3JldHVybiBoPi0xJiYoZD1tYihhLnNsaWNlKGgpKSxhPWEuc2xpY2UoMCxoKSksci5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmci5hamF4KHt1cmw6YSx0eXBlOmV8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9yKFwiPGRpdj5cIikuYXBwZW5kKHIucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuYWx3YXlzKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGZ1bmN0aW9uKCl7Yy5hcHBseSh0aGlzLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pfSksdGhpc30sci5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtyLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksci5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHIuZ3JlcChyLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH07ZnVuY3Rpb24gU2IoYSl7cmV0dXJuIHIuaXNXaW5kb3coYSk/YTo5PT09YS5ub2RlVHlwZSYmYS5kZWZhdWx0Vmlld31yLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrPXIuY3NzKGEsXCJwb3NpdGlvblwiKSxsPXIoYSksbT17fTtcInN0YXRpY1wiPT09ayYmKGEuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxoPWwub2Zmc2V0KCksZj1yLmNzcyhhLFwidG9wXCIpLGk9ci5jc3MoYSxcImxlZnRcIiksaj0oXCJhYnNvbHV0ZVwiPT09a3x8XCJmaXhlZFwiPT09aykmJihmK2kpLmluZGV4T2YoXCJhdXRvXCIpPi0xLGo/KGQ9bC5wb3NpdGlvbigpLGc9ZC50b3AsZT1kLmxlZnQpOihnPXBhcnNlRmxvYXQoZil8fDAsZT1wYXJzZUZsb2F0KGkpfHwwKSxyLmlzRnVuY3Rpb24oYikmJihiPWIuY2FsbChhLGMsci5leHRlbmQoe30saCkpKSxudWxsIT1iLnRvcCYmKG0udG9wPWIudG9wLWgudG9wK2cpLG51bGwhPWIubGVmdCYmKG0ubGVmdD1iLmxlZnQtaC5sZWZ0K2UpLFwidXNpbmdcImluIGI/Yi51c2luZy5jYWxsKGEsbSk6bC5jc3MobSl9fSxyLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKGEpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWE/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oYil7ci5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsYSxiKX0pO3ZhciBiLGMsZCxlLGY9dGhpc1swXTtpZihmKXJldHVybiBmLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPyhkPWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksZC53aWR0aHx8ZC5oZWlnaHQ/KGU9Zi5vd25lckRvY3VtZW50LGM9U2IoZSksYj1lLmRvY3VtZW50RWxlbWVudCx7dG9wOmQudG9wK2MucGFnZVlPZmZzZXQtYi5jbGllbnRUb3AsbGVmdDpkLmxlZnQrYy5wYWdlWE9mZnNldC1iLmNsaWVudExlZnR9KTpkKTp7dG9wOjAsbGVmdDowfX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgYSxiLGM9dGhpc1swXSxkPXt0b3A6MCxsZWZ0OjB9O3JldHVyblwiZml4ZWRcIj09PXIuY3NzKGMsXCJwb3NpdGlvblwiKT9iPWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGE9dGhpcy5vZmZzZXRQYXJlbnQoKSxiPXRoaXMub2Zmc2V0KCksci5ub2RlTmFtZShhWzBdLFwiaHRtbFwiKXx8KGQ9YS5vZmZzZXQoKSksZD17dG9wOmQudG9wK3IuY3NzKGFbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxsZWZ0OmQubGVmdCtyLmNzcyhhWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApfSkse3RvcDpiLnRvcC1kLnRvcC1yLmNzcyhjLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6Yi5sZWZ0LWQubGVmdC1yLmNzcyhjLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShhJiZcInN0YXRpY1wiPT09ci5jc3MoYSxcInBvc2l0aW9uXCIpKWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fHFhfSl9fSksci5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPVwicGFnZVlPZmZzZXRcIj09PWI7ci5mblthXT1mdW5jdGlvbihkKXtyZXR1cm4gUyh0aGlzLGZ1bmN0aW9uKGEsZCxlKXt2YXIgZj1TYihhKTtyZXR1cm4gdm9pZCAwPT09ZT9mP2ZbYl06YVtkXTp2b2lkKGY/Zi5zY3JvbGxUbyhjP2YucGFnZVhPZmZzZXQ6ZSxjP2U6Zi5wYWdlWU9mZnNldCk6YVtkXT1lKX0sYSxkLGFyZ3VtZW50cy5sZW5ndGgpfX0pLHIuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSxiKXtyLmNzc0hvb2tzW2JdPU9hKG8ucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihhLGMpe2lmKGMpcmV0dXJuIGM9TmEoYSxiKSxMYS50ZXN0KGMpP3IoYSkucG9zaXRpb24oKVtiXStcInB4XCI6Y30pfSksci5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7ci5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe3IuZm5bZF09ZnVuY3Rpb24oZSxmKXt2YXIgZz1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBlKSxoPWN8fChlPT09ITB8fGY9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBTKHRoaXMsZnVuY3Rpb24oYixjLGUpe3ZhciBmO3JldHVybiByLmlzV2luZG93KGIpPzA9PT1kLmluZGV4T2YoXCJvdXRlclwiKT9iW1wiaW5uZXJcIithXTpiLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1iLm5vZGVUeXBlPyhmPWIuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGIuYm9keVtcInNjcm9sbFwiK2FdLGZbXCJzY3JvbGxcIithXSxiLmJvZHlbXCJvZmZzZXRcIithXSxmW1wib2Zmc2V0XCIrYV0sZltcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09ZT9yLmNzcyhiLGMsaCk6ci5zdHlsZShiLGMsZSxoKX0sYixnP2U6dm9pZCAwLGcpfX0pfSksci5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9uKGEsbnVsbCxiLGMpfSx1bmJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vZmYoYSxudWxsLGIpfSxkZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihiLGEsYyxkKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGEsXCIqKlwiKTp0aGlzLm9mZihiLGF8fFwiKipcIixjKX19KSxyLnBhcnNlSlNPTj1KU09OLnBhcnNlLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gcn0pO3ZhciBUYj1hLmpRdWVyeSxVYj1hLiQ7cmV0dXJuIHIubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09ciYmKGEuJD1VYiksYiYmYS5qUXVlcnk9PT1yJiYoYS5qUXVlcnk9VGIpLHJ9LGJ8fChhLmpRdWVyeT1hLiQ9cikscn0pOyIsIi8qKiFcclxuXHJcbiBAbGljZW5zZVxyXG4gaGFuZGxlYmFycyB2NC4wLjExXHJcblxyXG5Db3B5cmlnaHQgKEMpIDIwMTEtMjAxNyBieSBZZWh1ZGEgS2F0elxyXG5cclxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG5USEUgU09GVFdBUkUuXHJcblxyXG4qL1xyXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xyXG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JylcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxyXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcclxuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JylcclxuXHRcdGV4cG9ydHNbXCJIYW5kbGViYXJzXCJdID0gZmFjdG9yeSgpO1xyXG5cdGVsc2VcclxuXHRcdHJvb3RbXCJIYW5kbGViYXJzXCJdID0gZmFjdG9yeSgpO1xyXG59KSh0aGlzLCBmdW5jdGlvbigpIHtcclxucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcclxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXHJcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcclxuXHJcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cclxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XHJcblxyXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXHJcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcclxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XHJcblxyXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcclxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcclxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXHJcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcclxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxyXG4vKioqKioqLyBcdFx0fTtcclxuXHJcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cclxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xyXG5cclxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcclxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xyXG5cclxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXHJcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XHJcbi8qKioqKiovIFx0fVxyXG5cclxuXHJcbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcclxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xyXG5cclxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxyXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XHJcblxyXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXHJcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcclxuXHJcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXHJcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XHJcbi8qKioqKiovIH0pXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qKioqKiovIChbXHJcbi8qIDAgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xyXG5cclxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5cclxuXHR2YXIgX2hhbmRsZWJhcnNSdW50aW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcclxuXHJcblx0dmFyIF9oYW5kbGViYXJzUnVudGltZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzUnVudGltZSk7XHJcblxyXG5cdC8vIENvbXBpbGVyIGltcG9ydHNcclxuXHJcblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJBc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcclxuXHJcblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJBc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc0NvbXBpbGVyQXN0KTtcclxuXHJcblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJCYXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNik7XHJcblxyXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQxKTtcclxuXHJcblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJKYXZhc2NyaXB0Q29tcGlsZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQyKTtcclxuXHJcblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJKYXZhc2NyaXB0Q29tcGlsZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc0NvbXBpbGVySmF2YXNjcmlwdENvbXBpbGVyKTtcclxuXHJcblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJWaXNpdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XHJcblxyXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyVmlzaXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzQ29tcGlsZXJWaXNpdG9yKTtcclxuXHJcblx0dmFyIF9oYW5kbGViYXJzTm9Db25mbGljdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpO1xyXG5cclxuXHR2YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNOb0NvbmZsaWN0KTtcclxuXHJcblx0dmFyIF9jcmVhdGUgPSBfaGFuZGxlYmFyc1J1bnRpbWUyWydkZWZhdWx0J10uY3JlYXRlO1xyXG5cdGZ1bmN0aW9uIGNyZWF0ZSgpIHtcclxuXHQgIHZhciBoYiA9IF9jcmVhdGUoKTtcclxuXHJcblx0ICBoYi5jb21waWxlID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIuY29tcGlsZShpbnB1dCwgb3B0aW9ucywgaGIpO1xyXG5cdCAgfTtcclxuXHQgIGhiLnByZWNvbXBpbGUgPSBmdW5jdGlvbiAoaW5wdXQsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIF9oYW5kbGViYXJzQ29tcGlsZXJDb21waWxlci5wcmVjb21waWxlKGlucHV0LCBvcHRpb25zLCBoYik7XHJcblx0ICB9O1xyXG5cclxuXHQgIGhiLkFTVCA9IF9oYW5kbGViYXJzQ29tcGlsZXJBc3QyWydkZWZhdWx0J107XHJcblx0ICBoYi5Db21waWxlciA9IF9oYW5kbGViYXJzQ29tcGlsZXJDb21waWxlci5Db21waWxlcjtcclxuXHQgIGhiLkphdmFTY3JpcHRDb21waWxlciA9IF9oYW5kbGViYXJzQ29tcGlsZXJKYXZhc2NyaXB0Q29tcGlsZXIyWydkZWZhdWx0J107XHJcblx0ICBoYi5QYXJzZXIgPSBfaGFuZGxlYmFyc0NvbXBpbGVyQmFzZS5wYXJzZXI7XHJcblx0ICBoYi5wYXJzZSA9IF9oYW5kbGViYXJzQ29tcGlsZXJCYXNlLnBhcnNlO1xyXG5cclxuXHQgIHJldHVybiBoYjtcclxuXHR9XHJcblxyXG5cdHZhciBpbnN0ID0gY3JlYXRlKCk7XHJcblx0aW5zdC5jcmVhdGUgPSBjcmVhdGU7XHJcblxyXG5cdF9oYW5kbGViYXJzTm9Db25mbGljdDJbJ2RlZmF1bHQnXShpbnN0KTtcclxuXHJcblx0aW5zdC5WaXNpdG9yID0gX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IyWydkZWZhdWx0J107XHJcblxyXG5cdGluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XHJcblxyXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGluc3Q7XHJcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XHJcblxyXG4vKioqLyB9KSxcclxuLyogMSAqL1xyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcclxuXHQgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcblx0ICAgIFwiZGVmYXVsdFwiOiBvYmpcclxuXHQgIH07XHJcblx0fTtcclxuXHJcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuXHJcbi8qKiovIH0pLFxyXG4vKiAyICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpWydkZWZhdWx0J107XHJcblxyXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xyXG5cclxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5cclxuXHR2YXIgX2hhbmRsZWJhcnNCYXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcclxuXHJcblx0dmFyIGJhc2UgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaGFuZGxlYmFyc0Jhc2UpO1xyXG5cclxuXHQvLyBFYWNoIG9mIHRoZXNlIGF1Z21lbnQgdGhlIEhhbmRsZWJhcnMgb2JqZWN0LiBObyBuZWVkIHRvIHNldHVwIGhlcmUuXHJcblx0Ly8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcclxuXHJcblx0dmFyIF9oYW5kbGViYXJzU2FmZVN0cmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xyXG5cclxuXHR2YXIgX2hhbmRsZWJhcnNTYWZlU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNTYWZlU3RyaW5nKTtcclxuXHJcblx0dmFyIF9oYW5kbGViYXJzRXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcclxuXHJcblx0dmFyIF9oYW5kbGViYXJzRXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNFeGNlcHRpb24pO1xyXG5cclxuXHR2YXIgX2hhbmRsZWJhcnNVdGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XHJcblxyXG5cdHZhciBVdGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGViYXJzVXRpbHMpO1xyXG5cclxuXHR2YXIgX2hhbmRsZWJhcnNSdW50aW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMik7XHJcblxyXG5cdHZhciBydW50aW1lID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNSdW50aW1lKTtcclxuXHJcblx0dmFyIF9oYW5kbGViYXJzTm9Db25mbGljdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpO1xyXG5cclxuXHR2YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNOb0NvbmZsaWN0KTtcclxuXHJcblx0Ly8gRm9yIGNvbXBhdGliaWxpdHkgYW5kIHVzYWdlIG91dHNpZGUgb2YgbW9kdWxlIHN5c3RlbXMsIG1ha2UgdGhlIEhhbmRsZWJhcnMgb2JqZWN0IGEgbmFtZXNwYWNlXHJcblx0ZnVuY3Rpb24gY3JlYXRlKCkge1xyXG5cdCAgdmFyIGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XHJcblxyXG5cdCAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcclxuXHQgIGhiLlNhZmVTdHJpbmcgPSBfaGFuZGxlYmFyc1NhZmVTdHJpbmcyWydkZWZhdWx0J107XHJcblx0ICBoYi5FeGNlcHRpb24gPSBfaGFuZGxlYmFyc0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXTtcclxuXHQgIGhiLlV0aWxzID0gVXRpbHM7XHJcblx0ICBoYi5lc2NhcGVFeHByZXNzaW9uID0gVXRpbHMuZXNjYXBlRXhwcmVzc2lvbjtcclxuXHJcblx0ICBoYi5WTSA9IHJ1bnRpbWU7XHJcblx0ICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uIChzcGVjKSB7XHJcblx0ICAgIHJldHVybiBydW50aW1lLnRlbXBsYXRlKHNwZWMsIGhiKTtcclxuXHQgIH07XHJcblxyXG5cdCAgcmV0dXJuIGhiO1xyXG5cdH1cclxuXHJcblx0dmFyIGluc3QgPSBjcmVhdGUoKTtcclxuXHRpbnN0LmNyZWF0ZSA9IGNyZWF0ZTtcclxuXHJcblx0X2hhbmRsZWJhcnNOb0NvbmZsaWN0MlsnZGVmYXVsdCddKGluc3QpO1xyXG5cclxuXHRpbnN0WydkZWZhdWx0J10gPSBpbnN0O1xyXG5cclxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBpbnN0O1xyXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xyXG5cclxuLyoqKi8gfSksXHJcbi8qIDMgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XHJcblx0ICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XHJcblx0ICAgIHJldHVybiBvYmo7XHJcblx0ICB9IGVsc2Uge1xyXG5cdCAgICB2YXIgbmV3T2JqID0ge307XHJcblxyXG5cdCAgICBpZiAob2JqICE9IG51bGwpIHtcclxuXHQgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcblx0ICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XHJcblx0ICAgIHJldHVybiBuZXdPYmo7XHJcblx0ICB9XHJcblx0fTtcclxuXHJcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuXHJcbi8qKiovIH0pLFxyXG4vKiA0ICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcclxuXHJcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuXHRleHBvcnRzLkhhbmRsZWJhcnNFbnZpcm9ubWVudCA9IEhhbmRsZWJhcnNFbnZpcm9ubWVudDtcclxuXHJcblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XHJcblxyXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcclxuXHJcblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcclxuXHJcblx0dmFyIF9oZWxwZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XHJcblxyXG5cdHZhciBfZGVjb3JhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xyXG5cclxuXHR2YXIgX2xvZ2dlciA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xyXG5cclxuXHR2YXIgX2xvZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2dnZXIpO1xyXG5cclxuXHR2YXIgVkVSU0lPTiA9ICc0LjAuMTEnO1xyXG5cdGV4cG9ydHMuVkVSU0lPTiA9IFZFUlNJT047XHJcblx0dmFyIENPTVBJTEVSX1JFVklTSU9OID0gNztcclxuXHJcblx0ZXhwb3J0cy5DT01QSUxFUl9SRVZJU0lPTiA9IENPTVBJTEVSX1JFVklTSU9OO1xyXG5cdHZhciBSRVZJU0lPTl9DSEFOR0VTID0ge1xyXG5cdCAgMTogJzw9IDEuMC5yYy4yJywgLy8gMS4wLnJjLjIgaXMgYWN0dWFsbHkgcmV2MiBidXQgZG9lc24ndCByZXBvcnQgaXRcclxuXHQgIDI6ICc9PSAxLjAuMC1yYy4zJyxcclxuXHQgIDM6ICc9PSAxLjAuMC1yYy40JyxcclxuXHQgIDQ6ICc9PSAxLngueCcsXHJcblx0ICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXHJcblx0ICA2OiAnPj0gMi4wLjAtYmV0YS4xJyxcclxuXHQgIDc6ICc+PSA0LjAuMCdcclxuXHR9O1xyXG5cclxuXHRleHBvcnRzLlJFVklTSU9OX0NIQU5HRVMgPSBSRVZJU0lPTl9DSEFOR0VTO1xyXG5cdHZhciBvYmplY3RUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XHJcblxyXG5cdGZ1bmN0aW9uIEhhbmRsZWJhcnNFbnZpcm9ubWVudChoZWxwZXJzLCBwYXJ0aWFscywgZGVjb3JhdG9ycykge1xyXG5cdCAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcclxuXHQgIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcclxuXHQgIHRoaXMuZGVjb3JhdG9ycyA9IGRlY29yYXRvcnMgfHwge307XHJcblxyXG5cdCAgX2hlbHBlcnMucmVnaXN0ZXJEZWZhdWx0SGVscGVycyh0aGlzKTtcclxuXHQgIF9kZWNvcmF0b3JzLnJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnModGhpcyk7XHJcblx0fVxyXG5cclxuXHRIYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xyXG5cdCAgY29uc3RydWN0b3I6IEhhbmRsZWJhcnNFbnZpcm9ubWVudCxcclxuXHJcblx0ICBsb2dnZXI6IF9sb2dnZXIyWydkZWZhdWx0J10sXHJcblx0ICBsb2c6IF9sb2dnZXIyWydkZWZhdWx0J10ubG9nLFxyXG5cclxuXHQgIHJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbiByZWdpc3RlckhlbHBlcihuYW1lLCBmbikge1xyXG5cdCAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcclxuXHQgICAgICBpZiAoZm4pIHtcclxuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTtcclxuXHQgICAgICB9XHJcblx0ICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLmhlbHBlcnMsIG5hbWUpO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xyXG5cdCAgICB9XHJcblx0ICB9LFxyXG5cdCAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24gdW5yZWdpc3RlckhlbHBlcihuYW1lKSB7XHJcblx0ICAgIGRlbGV0ZSB0aGlzLmhlbHBlcnNbbmFtZV07XHJcblx0ICB9LFxyXG5cclxuXHQgIHJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24gcmVnaXN0ZXJQYXJ0aWFsKG5hbWUsIHBhcnRpYWwpIHtcclxuXHQgICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XHJcblx0ICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLnBhcnRpYWxzLCBuYW1lKTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICBpZiAodHlwZW9mIHBhcnRpYWwgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0ICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXR0ZW1wdGluZyB0byByZWdpc3RlciBhIHBhcnRpYWwgY2FsbGVkIFwiJyArIG5hbWUgKyAnXCIgYXMgdW5kZWZpbmVkJyk7XHJcblx0ICAgICAgfVxyXG5cdCAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xyXG5cdCAgICB9XHJcblx0ICB9LFxyXG5cdCAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uIHVucmVnaXN0ZXJQYXJ0aWFsKG5hbWUpIHtcclxuXHQgICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XHJcblx0ICB9LFxyXG5cclxuXHQgIHJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbiByZWdpc3RlckRlY29yYXRvcihuYW1lLCBmbikge1xyXG5cdCAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcclxuXHQgICAgICBpZiAoZm4pIHtcclxuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGRlY29yYXRvcnMnKTtcclxuXHQgICAgICB9XHJcblx0ICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLmRlY29yYXRvcnMsIG5hbWUpO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xyXG5cdCAgICB9XHJcblx0ICB9LFxyXG5cdCAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gdW5yZWdpc3RlckRlY29yYXRvcihuYW1lKSB7XHJcblx0ICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XHJcblx0ICB9XHJcblx0fTtcclxuXHJcblx0dmFyIGxvZyA9IF9sb2dnZXIyWydkZWZhdWx0J10ubG9nO1xyXG5cclxuXHRleHBvcnRzLmxvZyA9IGxvZztcclxuXHRleHBvcnRzLmNyZWF0ZUZyYW1lID0gX3V0aWxzLmNyZWF0ZUZyYW1lO1xyXG5cdGV4cG9ydHMubG9nZ2VyID0gX2xvZ2dlcjJbJ2RlZmF1bHQnXTtcclxuXHJcbi8qKiovIH0pLFxyXG4vKiA1ICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5cdGV4cG9ydHMuZXh0ZW5kID0gZXh0ZW5kO1xyXG5cdGV4cG9ydHMuaW5kZXhPZiA9IGluZGV4T2Y7XHJcblx0ZXhwb3J0cy5lc2NhcGVFeHByZXNzaW9uID0gZXNjYXBlRXhwcmVzc2lvbjtcclxuXHRleHBvcnRzLmlzRW1wdHkgPSBpc0VtcHR5O1xyXG5cdGV4cG9ydHMuY3JlYXRlRnJhbWUgPSBjcmVhdGVGcmFtZTtcclxuXHRleHBvcnRzLmJsb2NrUGFyYW1zID0gYmxvY2tQYXJhbXM7XHJcblx0ZXhwb3J0cy5hcHBlbmRDb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoO1xyXG5cdHZhciBlc2NhcGUgPSB7XHJcblx0ICAnJic6ICcmYW1wOycsXHJcblx0ICAnPCc6ICcmbHQ7JyxcclxuXHQgICc+JzogJyZndDsnLFxyXG5cdCAgJ1wiJzogJyZxdW90OycsXHJcblx0ICBcIidcIjogJyYjeDI3OycsXHJcblx0ICAnYCc6ICcmI3g2MDsnLFxyXG5cdCAgJz0nOiAnJiN4M0Q7J1xyXG5cdH07XHJcblxyXG5cdHZhciBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXHJcblx0ICAgIHBvc3NpYmxlID0gL1smPD5cIidgPV0vO1xyXG5cclxuXHRmdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xyXG5cdCAgcmV0dXJuIGVzY2FwZVtjaHJdO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZXh0ZW5kKG9iaiAvKiAsIC4uLnNvdXJjZSAqLykge1xyXG5cdCAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHQgICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xyXG5cdCAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndW1lbnRzW2ldLCBrZXkpKSB7XHJcblx0ICAgICAgICBvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cdCAgfVxyXG5cclxuXHQgIHJldHVybiBvYmo7XHJcblx0fVxyXG5cclxuXHR2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xyXG5cclxuXHRleHBvcnRzLnRvU3RyaW5nID0gdG9TdHJpbmc7XHJcblx0Ly8gU291cmNlZCBmcm9tIGxvZGFzaFxyXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXN0aWVqcy9sb2Rhc2gvYmxvYi9tYXN0ZXIvTElDRU5TRS50eHRcclxuXHQvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLXN0eWxlICovXHJcblx0dmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XHJcblx0ICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xyXG5cdH07XHJcblx0Ly8gZmFsbGJhY2sgZm9yIG9sZGVyIHZlcnNpb25zIG9mIENocm9tZSBhbmQgU2FmYXJpXHJcblx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuXHRpZiAoaXNGdW5jdGlvbigveC8pKSB7XHJcblx0ICBleHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0ICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcblx0ICB9O1xyXG5cdH1cclxuXHRleHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xyXG5cclxuXHQvKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cclxuXHJcblx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuXHR2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0ICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nIDogZmFsc2U7XHJcblx0fTtcclxuXHJcblx0ZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcclxuXHQvLyBPbGRlciBJRSB2ZXJzaW9ucyBkbyBub3QgZGlyZWN0bHkgc3VwcG9ydCBpbmRleE9mIHNvIHdlIG11c3QgaW1wbGVtZW50IG91ciBvd24sIHNhZGx5LlxyXG5cclxuXHRmdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xyXG5cdCAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0ICAgIGlmIChhcnJheVtpXSA9PT0gdmFsdWUpIHtcclxuXHQgICAgICByZXR1cm4gaTtcclxuXHQgICAgfVxyXG5cdCAgfVxyXG5cdCAgcmV0dXJuIC0xO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcclxuXHQgIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xyXG5cdCAgICAvLyBkb24ndCBlc2NhcGUgU2FmZVN0cmluZ3MsIHNpbmNlIHRoZXkncmUgYWxyZWFkeSBzYWZlXHJcblx0ICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xyXG5cdCAgICAgIHJldHVybiBzdHJpbmcudG9IVE1MKCk7XHJcblx0ICAgIH0gZWxzZSBpZiAoc3RyaW5nID09IG51bGwpIHtcclxuXHQgICAgICByZXR1cm4gJyc7XHJcblx0ICAgIH0gZWxzZSBpZiAoIXN0cmluZykge1xyXG5cdCAgICAgIHJldHVybiBzdHJpbmcgKyAnJztcclxuXHQgICAgfVxyXG5cclxuXHQgICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXHJcblx0ICAgIC8vIHRoZSByZWdleCB0ZXN0IHdpbGwgZG8gdGhpcyB0cmFuc3BhcmVudGx5IGJlaGluZCB0aGUgc2NlbmVzLCBjYXVzaW5nIGlzc3VlcyBpZlxyXG5cdCAgICAvLyBhbiBvYmplY3QncyB0byBzdHJpbmcgaGFzIGVzY2FwZWQgY2hhcmFjdGVycyBpbiBpdC5cclxuXHQgICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XHJcblx0ICB9XHJcblxyXG5cdCAgaWYgKCFwb3NzaWJsZS50ZXN0KHN0cmluZykpIHtcclxuXHQgICAgcmV0dXJuIHN0cmluZztcclxuXHQgIH1cclxuXHQgIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XHJcblx0ICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XHJcblx0ICAgIHJldHVybiB0cnVlO1xyXG5cdCAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcclxuXHQgICAgcmV0dXJuIHRydWU7XHJcblx0ICB9IGVsc2Uge1xyXG5cdCAgICByZXR1cm4gZmFsc2U7XHJcblx0ICB9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjcmVhdGVGcmFtZShvYmplY3QpIHtcclxuXHQgIHZhciBmcmFtZSA9IGV4dGVuZCh7fSwgb2JqZWN0KTtcclxuXHQgIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XHJcblx0ICByZXR1cm4gZnJhbWU7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBibG9ja1BhcmFtcyhwYXJhbXMsIGlkcykge1xyXG5cdCAgcGFyYW1zLnBhdGggPSBpZHM7XHJcblx0ICByZXR1cm4gcGFyYW1zO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XHJcblx0ICByZXR1cm4gKGNvbnRleHRQYXRoID8gY29udGV4dFBhdGggKyAnLicgOiAnJykgKyBpZDtcclxuXHR9XHJcblxyXG4vKioqLyB9KSxcclxuLyogNiAqL1xyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpWydkZWZhdWx0J107XHJcblxyXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcblxyXG5cdHZhciBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcclxuXHJcblx0ZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcclxuXHQgIHZhciBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxyXG5cdCAgICAgIGxpbmUgPSB1bmRlZmluZWQsXHJcblx0ICAgICAgY29sdW1uID0gdW5kZWZpbmVkO1xyXG5cdCAgaWYgKGxvYykge1xyXG5cdCAgICBsaW5lID0gbG9jLnN0YXJ0LmxpbmU7XHJcblx0ICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XHJcblxyXG5cdCAgICBtZXNzYWdlICs9ICcgLSAnICsgbGluZSArICc6JyArIGNvbHVtbjtcclxuXHQgIH1cclxuXHJcblx0ICB2YXIgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XHJcblxyXG5cdCAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXHJcblx0ICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBlcnJvclByb3BzLmxlbmd0aDsgaWR4KyspIHtcclxuXHQgICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XHJcblx0ICB9XHJcblxyXG5cdCAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuXHQgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xyXG5cdCAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFeGNlcHRpb24pO1xyXG5cdCAgfVxyXG5cclxuXHQgIHRyeSB7XHJcblx0ICAgIGlmIChsb2MpIHtcclxuXHQgICAgICB0aGlzLmxpbmVOdW1iZXIgPSBsaW5lO1xyXG5cclxuXHQgICAgICAvLyBXb3JrIGFyb3VuZCBpc3N1ZSB1bmRlciBzYWZhcmkgd2hlcmUgd2UgY2FuJ3QgZGlyZWN0bHkgc2V0IHRoZSBjb2x1bW4gdmFsdWVcclxuXHQgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5cdCAgICAgIGlmIChfT2JqZWN0JGRlZmluZVByb3BlcnR5KSB7XHJcblx0ICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbHVtbicsIHtcclxuXHQgICAgICAgICAgdmFsdWU6IGNvbHVtbixcclxuXHQgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG5cdCAgICAgICAgfSk7XHJcblx0ICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cdCAgfSBjYXRjaCAobm9wKSB7XHJcblx0ICAgIC8qIElnbm9yZSBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IHBhcnRpY3VsYXIgKi9cclxuXHQgIH1cclxuXHR9XHJcblxyXG5cdEV4Y2VwdGlvbi5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcclxuXHJcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gRXhjZXB0aW9uO1xyXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xyXG5cclxuLyoqKi8gfSksXHJcbi8qIDcgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXHRtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IF9fd2VicGFja19yZXF1aXJlX18oOCksIF9fZXNNb2R1bGU6IHRydWUgfTtcclxuXHJcbi8qKiovIH0pLFxyXG4vKiA4ICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcblx0dmFyICQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xyXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XHJcblx0ICByZXR1cm4gJC5zZXREZXNjKGl0LCBrZXksIGRlc2MpO1xyXG5cdH07XHJcblxyXG4vKioqLyB9KSxcclxuLyogOSAqL1xyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XHJcblxyXG5cdHZhciAkT2JqZWN0ID0gT2JqZWN0O1xyXG5cdG1vZHVsZS5leHBvcnRzID0ge1xyXG5cdCAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXHJcblx0ICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxyXG5cdCAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXHJcblx0ICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcclxuXHQgIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXHJcblx0ICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXHJcblx0ICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXHJcblx0ICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXHJcblx0ICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcclxuXHQgIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcclxuXHR9O1xyXG5cclxuLyoqKi8gfSksXHJcbi8qIDEwICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcclxuXHJcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuXHRleHBvcnRzLnJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMgPSByZWdpc3RlckRlZmF1bHRIZWxwZXJzO1xyXG5cclxuXHR2YXIgX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcclxuXHJcblx0dmFyIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcpO1xyXG5cclxuXHR2YXIgX2hlbHBlcnNFYWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XHJcblxyXG5cdHZhciBfaGVscGVyc0VhY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0VhY2gpO1xyXG5cclxuXHR2YXIgX2hlbHBlcnNIZWxwZXJNaXNzaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XHJcblxyXG5cdHZhciBfaGVscGVyc0hlbHBlck1pc3NpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0hlbHBlck1pc3NpbmcpO1xyXG5cclxuXHR2YXIgX2hlbHBlcnNJZiA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xyXG5cclxuXHR2YXIgX2hlbHBlcnNJZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzSWYpO1xyXG5cclxuXHR2YXIgX2hlbHBlcnNMb2cgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcclxuXHJcblx0dmFyIF9oZWxwZXJzTG9nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNMb2cpO1xyXG5cclxuXHR2YXIgX2hlbHBlcnNMb29rdXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcclxuXHJcblx0dmFyIF9oZWxwZXJzTG9va3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNMb29rdXApO1xyXG5cclxuXHR2YXIgX2hlbHBlcnNXaXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XHJcblxyXG5cdHZhciBfaGVscGVyc1dpdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc1dpdGgpO1xyXG5cclxuXHRmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XHJcblx0ICBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XHJcblx0ICBfaGVscGVyc0VhY2gyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xyXG5cdCAgX2hlbHBlcnNIZWxwZXJNaXNzaW5nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcclxuXHQgIF9oZWxwZXJzSWYyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xyXG5cdCAgX2hlbHBlcnNMb2cyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xyXG5cdCAgX2hlbHBlcnNMb29rdXAyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xyXG5cdCAgX2hlbHBlcnNXaXRoMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcclxuXHR9XHJcblxyXG4vKioqLyB9KSxcclxuLyogMTEgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcblxyXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xyXG5cclxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xyXG5cdCAgICB2YXIgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcclxuXHQgICAgICAgIGZuID0gb3B0aW9ucy5mbjtcclxuXHJcblx0ICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XHJcblx0ICAgICAgcmV0dXJuIGZuKHRoaXMpO1xyXG5cdCAgICB9IGVsc2UgaWYgKGNvbnRleHQgPT09IGZhbHNlIHx8IGNvbnRleHQgPT0gbnVsbCkge1xyXG5cdCAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xyXG5cdCAgICB9IGVsc2UgaWYgKF91dGlscy5pc0FycmF5KGNvbnRleHQpKSB7XHJcblx0ICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xyXG5cdCAgICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XHJcblx0ICAgICAgICAgIG9wdGlvbnMuaWRzID0gW29wdGlvbnMubmFtZV07XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcclxuXHQgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XHJcblx0ICAgICAgfVxyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcclxuXHQgICAgICAgIHZhciBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XHJcblx0ICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcclxuXHQgICAgICAgIG9wdGlvbnMgPSB7IGRhdGE6IGRhdGEgfTtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcclxuXHQgICAgfVxyXG5cdCAgfSk7XHJcblx0fTtcclxuXHJcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XHJcblxyXG4vKioqLyB9KSxcclxuLyogMTIgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xyXG5cclxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5cclxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcclxuXHJcblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xyXG5cclxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xyXG5cclxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdlYWNoJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcclxuXHQgICAgaWYgKCFvcHRpb25zKSB7XHJcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICB2YXIgZm4gPSBvcHRpb25zLmZuLFxyXG5cdCAgICAgICAgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcclxuXHQgICAgICAgIGkgPSAwLFxyXG5cdCAgICAgICAgcmV0ID0gJycsXHJcblx0ICAgICAgICBkYXRhID0gdW5kZWZpbmVkLFxyXG5cdCAgICAgICAgY29udGV4dFBhdGggPSB1bmRlZmluZWQ7XHJcblxyXG5cdCAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XHJcblx0ICAgICAgY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSkgKyAnLic7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb250ZXh0KSkge1xyXG5cdCAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmIChvcHRpb25zLmRhdGEpIHtcclxuXHQgICAgICBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XHJcblx0ICAgICAgaWYgKGRhdGEpIHtcclxuXHQgICAgICAgIGRhdGEua2V5ID0gZmllbGQ7XHJcblx0ICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XHJcblx0ICAgICAgICBkYXRhLmZpcnN0ID0gaW5kZXggPT09IDA7XHJcblx0ICAgICAgICBkYXRhLmxhc3QgPSAhIWxhc3Q7XHJcblxyXG5cdCAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XHJcblx0ICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgcmV0ID0gcmV0ICsgZm4oY29udGV4dFtmaWVsZF0sIHtcclxuXHQgICAgICAgIGRhdGE6IGRhdGEsXHJcblx0ICAgICAgICBibG9ja1BhcmFtczogX3V0aWxzLmJsb2NrUGFyYW1zKFtjb250ZXh0W2ZpZWxkXSwgZmllbGRdLCBbY29udGV4dFBhdGggKyBmaWVsZCwgbnVsbF0pXHJcblx0ICAgICAgfSk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmIChjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0ID09PSAnb2JqZWN0Jykge1xyXG5cdCAgICAgIGlmIChfdXRpbHMuaXNBcnJheShjb250ZXh0KSkge1xyXG5cdCAgICAgICAgZm9yICh2YXIgaiA9IGNvbnRleHQubGVuZ3RoOyBpIDwgajsgaSsrKSB7XHJcblx0ICAgICAgICAgIGlmIChpIGluIGNvbnRleHQpIHtcclxuXHQgICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgdmFyIHByaW9yS2V5ID0gdW5kZWZpbmVkO1xyXG5cclxuXHQgICAgICAgIGZvciAodmFyIGtleSBpbiBjb250ZXh0KSB7XHJcblx0ICAgICAgICAgIGlmIChjb250ZXh0Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHQgICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcclxuXHQgICAgICAgICAgICAvLyB0aGUgbGFzdCBpdGVyYXRpb24gd2l0aG91dCBoYXZlIHRvIHNjYW4gdGhlIG9iamVjdCB0d2ljZSBhbmQgY3JlYXRlXHJcblx0ICAgICAgICAgICAgLy8gYW4gaXRlcm1lZGlhdGUga2V5cyBhcnJheS5cclxuXHQgICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xyXG5cdCAgICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihwcmlvcktleSwgaSAtIDEpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICBwcmlvcktleSA9IGtleTtcclxuXHQgICAgICAgICAgICBpKys7XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgIGlmIChwcmlvcktleSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0ICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxLCB0cnVlKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmIChpID09PSAwKSB7XHJcblx0ICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmV0dXJuIHJldDtcclxuXHQgIH0pO1xyXG5cdH07XHJcblxyXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xyXG5cclxuLyoqKi8gfSksXHJcbi8qIDEzICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcclxuXHJcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuXHJcblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xyXG5cclxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xyXG5cclxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdoZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKCkgLyogW2FyZ3MsIF1vcHRpb25zICove1xyXG5cdCAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG5cdCAgICAgIC8vIEEgbWlzc2luZyBmaWVsZCBpbiBhIHt7Zm9vfX0gY29uc3RydWN0LlxyXG5cdCAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgLy8gU29tZW9uZSBpcyBhY3R1YWxseSB0cnlpbmcgdG8gY2FsbCBzb21ldGhpbmcsIGJsb3cgdXAuXHJcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcclxuXHQgICAgfVxyXG5cdCAgfSk7XHJcblx0fTtcclxuXHJcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XHJcblxyXG4vKioqLyB9KSxcclxuLyogMTQgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcblxyXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xyXG5cclxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdpZicsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xyXG5cdCAgICBpZiAoX3V0aWxzLmlzRnVuY3Rpb24oY29uZGl0aW9uYWwpKSB7XHJcblx0ICAgICAgY29uZGl0aW9uYWwgPSBjb25kaXRpb25hbC5jYWxsKHRoaXMpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICAvLyBEZWZhdWx0IGJlaGF2aW9yIGlzIHRvIHJlbmRlciB0aGUgcG9zaXRpdmUgcGF0aCBpZiB0aGUgdmFsdWUgaXMgdHJ1dGh5IGFuZCBub3QgZW1wdHkuXHJcblx0ICAgIC8vIFRoZSBgaW5jbHVkZVplcm9gIG9wdGlvbiBtYXkgYmUgc2V0IHRvIHRyZWF0IHRoZSBjb25kdGlvbmFsIGFzIHB1cmVseSBub3QgZW1wdHkgYmFzZWQgb24gdGhlXHJcblx0ICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXHJcblx0ICAgIGlmICghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCB8fCBfdXRpbHMuaXNFbXB0eShjb25kaXRpb25hbCkpIHtcclxuXHQgICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xyXG5cdCAgICB9XHJcblx0ICB9KTtcclxuXHJcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24gKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzWydpZiddLmNhbGwodGhpcywgY29uZGl0aW9uYWwsIHsgZm46IG9wdGlvbnMuaW52ZXJzZSwgaW52ZXJzZTogb3B0aW9ucy5mbiwgaGFzaDogb3B0aW9ucy5oYXNoIH0pO1xyXG5cdCAgfSk7XHJcblx0fTtcclxuXHJcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XHJcblxyXG4vKioqLyB9KSxcclxuLyogMTUgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcblxyXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uICgpIC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi97XHJcblx0ICAgIHZhciBhcmdzID0gW3VuZGVmaW5lZF0sXHJcblx0ICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcclxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblx0ICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHZhciBsZXZlbCA9IDE7XHJcblx0ICAgIGlmIChvcHRpb25zLmhhc2gubGV2ZWwgIT0gbnVsbCkge1xyXG5cdCAgICAgIGxldmVsID0gb3B0aW9ucy5oYXNoLmxldmVsO1xyXG5cdCAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xyXG5cdCAgICAgIGxldmVsID0gb3B0aW9ucy5kYXRhLmxldmVsO1xyXG5cdCAgICB9XHJcblx0ICAgIGFyZ3NbMF0gPSBsZXZlbDtcclxuXHJcblx0ICAgIGluc3RhbmNlLmxvZy5hcHBseShpbnN0YW5jZSwgYXJncyk7XHJcblx0ICB9KTtcclxuXHR9O1xyXG5cclxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcclxuXHJcbi8qKiovIH0pLFxyXG4vKiAxNiAqL1xyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuXHJcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24gKG9iaiwgZmllbGQpIHtcclxuXHQgICAgcmV0dXJuIG9iaiAmJiBvYmpbZmllbGRdO1xyXG5cdCAgfSk7XHJcblx0fTtcclxuXHJcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XHJcblxyXG4vKioqLyB9KSxcclxuLyogMTcgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcblxyXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xyXG5cclxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd3aXRoJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcclxuXHQgICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbnRleHQpKSB7XHJcblx0ICAgICAgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgdmFyIGZuID0gb3B0aW9ucy5mbjtcclxuXHJcblx0ICAgIGlmICghX3V0aWxzLmlzRW1wdHkoY29udGV4dCkpIHtcclxuXHQgICAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHQgICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XHJcblx0ICAgICAgICBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XHJcblx0ICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIHtcclxuXHQgICAgICAgIGRhdGE6IGRhdGEsXHJcblx0ICAgICAgICBibG9ja1BhcmFtczogX3V0aWxzLmJsb2NrUGFyYW1zKFtjb250ZXh0XSwgW2RhdGEgJiYgZGF0YS5jb250ZXh0UGF0aF0pXHJcblx0ICAgICAgfSk7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcclxuXHQgICAgfVxyXG5cdCAgfSk7XHJcblx0fTtcclxuXHJcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XHJcblxyXG4vKioqLyB9KSxcclxuLyogMTggKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xyXG5cclxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5cdGV4cG9ydHMucmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyA9IHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnM7XHJcblxyXG5cdHZhciBfZGVjb3JhdG9yc0lubGluZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xyXG5cclxuXHR2YXIgX2RlY29yYXRvcnNJbmxpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVjb3JhdG9yc0lubGluZSk7XHJcblxyXG5cdGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMoaW5zdGFuY2UpIHtcclxuXHQgIF9kZWNvcmF0b3JzSW5saW5lMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcclxuXHR9XHJcblxyXG4vKioqLyB9KSxcclxuLyogMTkgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcblxyXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xyXG5cclxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuXHQgIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbiAoZm4sIHByb3BzLCBjb250YWluZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgdmFyIHJldCA9IGZuO1xyXG5cdCAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XHJcblx0ICAgICAgcHJvcHMucGFydGlhbHMgPSB7fTtcclxuXHQgICAgICByZXQgPSBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xyXG5cdCAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHBhcnRpYWxzIHN0YWNrIGZyYW1lIHByaW9yIHRvIGV4ZWMuXHJcblx0ICAgICAgICB2YXIgb3JpZ2luYWwgPSBjb250YWluZXIucGFydGlhbHM7XHJcblx0ICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBfdXRpbHMuZXh0ZW5kKHt9LCBvcmlnaW5hbCwgcHJvcHMucGFydGlhbHMpO1xyXG5cdCAgICAgICAgdmFyIHJldCA9IGZuKGNvbnRleHQsIG9wdGlvbnMpO1xyXG5cdCAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XHJcblx0ICAgICAgICByZXR1cm4gcmV0O1xyXG5cdCAgICAgIH07XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xyXG5cclxuXHQgICAgcmV0dXJuIHJldDtcclxuXHQgIH0pO1xyXG5cdH07XHJcblxyXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xyXG5cclxuLyoqKi8gfSksXHJcbi8qIDIwICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5cclxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcclxuXHJcblx0dmFyIGxvZ2dlciA9IHtcclxuXHQgIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcclxuXHQgIGxldmVsOiAnaW5mbycsXHJcblxyXG5cdCAgLy8gTWFwcyBhIGdpdmVuIGxldmVsIHZhbHVlIHRvIHRoZSBgbWV0aG9kTWFwYCBpbmRleGVzIGFib3ZlLlxyXG5cdCAgbG9va3VwTGV2ZWw6IGZ1bmN0aW9uIGxvb2t1cExldmVsKGxldmVsKSB7XHJcblx0ICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XHJcblx0ICAgICAgdmFyIGxldmVsTWFwID0gX3V0aWxzLmluZGV4T2YobG9nZ2VyLm1ldGhvZE1hcCwgbGV2ZWwudG9Mb3dlckNhc2UoKSk7XHJcblx0ICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcclxuXHQgICAgICAgIGxldmVsID0gbGV2ZWxNYXA7XHJcblx0ICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHJldHVybiBsZXZlbDtcclxuXHQgIH0sXHJcblxyXG5cdCAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcclxuXHQgIGxvZzogZnVuY3Rpb24gbG9nKGxldmVsKSB7XHJcblx0ICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcclxuXHJcblx0ICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcclxuXHQgICAgICB2YXIgbWV0aG9kID0gbG9nZ2VyLm1ldGhvZE1hcFtsZXZlbF07XHJcblx0ICAgICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHtcclxuXHQgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxyXG5cdCAgICAgICAgbWV0aG9kID0gJ2xvZyc7XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVzc2FnZSA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuXHQgICAgICAgIG1lc3NhZ2VbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgY29uc29sZVttZXRob2RdLmFwcGx5KGNvbnNvbGUsIG1lc3NhZ2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcclxuXHQgICAgfVxyXG5cdCAgfVxyXG5cdH07XHJcblxyXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGxvZ2dlcjtcclxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcclxuXHJcbi8qKiovIH0pLFxyXG4vKiAyMSAqL1xyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XHJcblxyXG5cdC8vIEJ1aWxkIG91dCBvdXIgYmFzaWMgU2FmZVN0cmluZyB0eXBlXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5cdGZ1bmN0aW9uIFNhZmVTdHJpbmcoc3RyaW5nKSB7XHJcblx0ICB0aGlzLnN0cmluZyA9IHN0cmluZztcclxuXHR9XHJcblxyXG5cdFNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24gKCkge1xyXG5cdCAgcmV0dXJuICcnICsgdGhpcy5zdHJpbmc7XHJcblx0fTtcclxuXHJcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU2FmZVN0cmluZztcclxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcclxuXHJcbi8qKiovIH0pLFxyXG4vKiAyMiAqL1xyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIF9PYmplY3Qkc2VhbCA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpWydkZWZhdWx0J107XHJcblxyXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IF9fd2VicGFja19yZXF1aXJlX18oMylbJ2RlZmF1bHQnXTtcclxuXHJcblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XHJcblxyXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcblx0ZXhwb3J0cy5jaGVja1JldmlzaW9uID0gY2hlY2tSZXZpc2lvbjtcclxuXHRleHBvcnRzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcblx0ZXhwb3J0cy53cmFwUHJvZ3JhbSA9IHdyYXBQcm9ncmFtO1xyXG5cdGV4cG9ydHMucmVzb2x2ZVBhcnRpYWwgPSByZXNvbHZlUGFydGlhbDtcclxuXHRleHBvcnRzLmludm9rZVBhcnRpYWwgPSBpbnZva2VQYXJ0aWFsO1xyXG5cdGV4cG9ydHMubm9vcCA9IG5vb3A7XHJcblxyXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xyXG5cclxuXHR2YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMpO1xyXG5cclxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XHJcblxyXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XHJcblxyXG5cdHZhciBfYmFzZSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XHJcblxyXG5cdGZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XHJcblx0ICB2YXIgY29tcGlsZXJSZXZpc2lvbiA9IGNvbXBpbGVySW5mbyAmJiBjb21waWxlckluZm9bMF0gfHwgMSxcclxuXHQgICAgICBjdXJyZW50UmV2aXNpb24gPSBfYmFzZS5DT01QSUxFUl9SRVZJU0lPTjtcclxuXHJcblx0ICBpZiAoY29tcGlsZXJSZXZpc2lvbiAhPT0gY3VycmVudFJldmlzaW9uKSB7XHJcblx0ICAgIGlmIChjb21waWxlclJldmlzaW9uIDwgY3VycmVudFJldmlzaW9uKSB7XHJcblx0ICAgICAgdmFyIHJ1bnRpbWVWZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbY3VycmVudFJldmlzaW9uXSxcclxuXHQgICAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XHJcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGFuIG9sZGVyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgKyAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIHJ1bnRpbWVWZXJzaW9ucyArICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVyVmVyc2lvbnMgKyAnKS4nKTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcclxuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYSBuZXdlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICsgJ1BsZWFzZSB1cGRhdGUgeW91ciBydW50aW1lIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVySW5mb1sxXSArICcpLicpO1xyXG5cdCAgICB9XHJcblx0ICB9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xyXG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuXHQgIGlmICghZW52KSB7XHJcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcclxuXHQgIH1cclxuXHQgIGlmICghdGVtcGxhdGVTcGVjIHx8ICF0ZW1wbGF0ZVNwZWMubWFpbikge1xyXG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5rbm93biB0ZW1wbGF0ZSBvYmplY3Q6ICcgKyB0eXBlb2YgdGVtcGxhdGVTcGVjKTtcclxuXHQgIH1cclxuXHJcblx0ICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xyXG5cclxuXHQgIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XHJcblx0ICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHN1ZWRvLXN1cHBvcnRlZCBBUElzLlxyXG5cdCAgZW52LlZNLmNoZWNrUmV2aXNpb24odGVtcGxhdGVTcGVjLmNvbXBpbGVyKTtcclxuXHJcblx0ICBmdW5jdGlvbiBpbnZva2VQYXJ0aWFsV3JhcHBlcihwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XHJcblx0ICAgIGlmIChvcHRpb25zLmhhc2gpIHtcclxuXHQgICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xyXG5cdCAgICAgIGlmIChvcHRpb25zLmlkcykge1xyXG5cdCAgICAgICAgb3B0aW9ucy5pZHNbMF0gPSB0cnVlO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgcGFydGlhbCA9IGVudi5WTS5yZXNvbHZlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xyXG5cdCAgICB2YXIgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcclxuXHJcblx0ICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xyXG5cdCAgICAgIG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXSA9IGVudi5jb21waWxlKHBhcnRpYWwsIHRlbXBsYXRlU3BlYy5jb21waWxlck9wdGlvbnMsIGVudik7XHJcblx0ICAgICAgcmVzdWx0ID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdKGNvbnRleHQsIG9wdGlvbnMpO1xyXG5cdCAgICB9XHJcblx0ICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xyXG5cdCAgICAgIGlmIChvcHRpb25zLmluZGVudCkge1xyXG5cdCAgICAgICAgdmFyIGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcclxuXHQgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcblx0ICAgICAgICAgIGlmICghbGluZXNbaV0gJiYgaSArIDEgPT09IGwpIHtcclxuXHQgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgbGluZXNbaV0gPSBvcHRpb25zLmluZGVudCArIGxpbmVzW2ldO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XHJcblx0ICAgICAgfVxyXG5cdCAgICAgIHJldHVybiByZXN1bHQ7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBjb21waWxlZCB3aGVuIHJ1bm5pbmcgaW4gcnVudGltZS1vbmx5IG1vZGUnKTtcclxuXHQgICAgfVxyXG5cdCAgfVxyXG5cclxuXHQgIC8vIEp1c3QgYWRkIHdhdGVyXHJcblx0ICB2YXIgY29udGFpbmVyID0ge1xyXG5cdCAgICBzdHJpY3Q6IGZ1bmN0aW9uIHN0cmljdChvYmosIG5hbWUpIHtcclxuXHQgICAgICBpZiAoIShuYW1lIGluIG9iaikpIHtcclxuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdcIicgKyBuYW1lICsgJ1wiIG5vdCBkZWZpbmVkIGluICcgKyBvYmopO1xyXG5cdCAgICAgIH1cclxuXHQgICAgICByZXR1cm4gb2JqW25hbWVdO1xyXG5cdCAgICB9LFxyXG5cdCAgICBsb29rdXA6IGZ1bmN0aW9uIGxvb2t1cChkZXB0aHMsIG5hbWUpIHtcclxuXHQgICAgICB2YXIgbGVuID0gZGVwdGhzLmxlbmd0aDtcclxuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0ICAgICAgICBpZiAoZGVwdGhzW2ldICYmIGRlcHRoc1tpXVtuYW1lXSAhPSBudWxsKSB7XHJcblx0ICAgICAgICAgIHJldHVybiBkZXB0aHNbaV1bbmFtZV07XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdCAgICBsYW1iZGE6IGZ1bmN0aW9uIGxhbWJkYShjdXJyZW50LCBjb250ZXh0KSB7XHJcblx0ICAgICAgcmV0dXJuIHR5cGVvZiBjdXJyZW50ID09PSAnZnVuY3Rpb24nID8gY3VycmVudC5jYWxsKGNvbnRleHQpIDogY3VycmVudDtcclxuXHQgICAgfSxcclxuXHJcblx0ICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXHJcblx0ICAgIGludm9rZVBhcnRpYWw6IGludm9rZVBhcnRpYWxXcmFwcGVyLFxyXG5cclxuXHQgICAgZm46IGZ1bmN0aW9uIGZuKGkpIHtcclxuXHQgICAgICB2YXIgcmV0ID0gdGVtcGxhdGVTcGVjW2ldO1xyXG5cdCAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xyXG5cdCAgICAgIHJldHVybiByZXQ7XHJcblx0ICAgIH0sXHJcblxyXG5cdCAgICBwcm9ncmFtczogW10sXHJcblx0ICAgIHByb2dyYW06IGZ1bmN0aW9uIHByb2dyYW0oaSwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xyXG5cdCAgICAgIHZhciBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXHJcblx0ICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcclxuXHQgICAgICBpZiAoZGF0YSB8fCBkZXB0aHMgfHwgYmxvY2tQYXJhbXMgfHwgZGVjbGFyZWRCbG9ja1BhcmFtcykge1xyXG5cdCAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocyk7XHJcblx0ICAgICAgfSBlbHNlIGlmICghcHJvZ3JhbVdyYXBwZXIpIHtcclxuXHQgICAgICAgIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuKTtcclxuXHQgICAgICB9XHJcblx0ICAgICAgcmV0dXJuIHByb2dyYW1XcmFwcGVyO1xyXG5cdCAgICB9LFxyXG5cclxuXHQgICAgZGF0YTogZnVuY3Rpb24gZGF0YSh2YWx1ZSwgZGVwdGgpIHtcclxuXHQgICAgICB3aGlsZSAodmFsdWUgJiYgZGVwdGgtLSkge1xyXG5cdCAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xyXG5cdCAgICAgIH1cclxuXHQgICAgICByZXR1cm4gdmFsdWU7XHJcblx0ICAgIH0sXHJcblx0ICAgIG1lcmdlOiBmdW5jdGlvbiBtZXJnZShwYXJhbSwgY29tbW9uKSB7XHJcblx0ICAgICAgdmFyIG9iaiA9IHBhcmFtIHx8IGNvbW1vbjtcclxuXHJcblx0ICAgICAgaWYgKHBhcmFtICYmIGNvbW1vbiAmJiBwYXJhbSAhPT0gY29tbW9uKSB7XHJcblx0ICAgICAgICBvYmogPSBVdGlscy5leHRlbmQoe30sIGNvbW1vbiwgcGFyYW0pO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgcmV0dXJuIG9iajtcclxuXHQgICAgfSxcclxuXHQgICAgLy8gQW4gZW1wdHkgb2JqZWN0IHRvIHVzZSBhcyByZXBsYWNlbWVudCBmb3IgbnVsbC1jb250ZXh0c1xyXG5cdCAgICBudWxsQ29udGV4dDogX09iamVjdCRzZWFsKHt9KSxcclxuXHJcblx0ICAgIG5vb3A6IGVudi5WTS5ub29wLFxyXG5cdCAgICBjb21waWxlckluZm86IHRlbXBsYXRlU3BlYy5jb21waWxlclxyXG5cdCAgfTtcclxuXHJcblx0ICBmdW5jdGlvbiByZXQoY29udGV4dCkge1xyXG5cdCAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xyXG5cclxuXHQgICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGE7XHJcblxyXG5cdCAgICByZXQuX3NldHVwKG9wdGlvbnMpO1xyXG5cdCAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xyXG5cdCAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcclxuXHQgICAgfVxyXG5cdCAgICB2YXIgZGVwdGhzID0gdW5kZWZpbmVkLFxyXG5cdCAgICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcclxuXHQgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMpIHtcclxuXHQgICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcclxuXHQgICAgICAgIGRlcHRocyA9IGNvbnRleHQgIT0gb3B0aW9ucy5kZXB0aHNbMF0gPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKSA6IG9wdGlvbnMuZGVwdGhzO1xyXG5cdCAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICBkZXB0aHMgPSBbY29udGV4dF07XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiBtYWluKGNvbnRleHQgLyosIG9wdGlvbnMqLykge1xyXG5cdCAgICAgIHJldHVybiAnJyArIHRlbXBsYXRlU3BlYy5tYWluKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XHJcblx0ICAgIH1cclxuXHQgICAgbWFpbiA9IGV4ZWN1dGVEZWNvcmF0b3JzKHRlbXBsYXRlU3BlYy5tYWluLCBtYWluLCBjb250YWluZXIsIG9wdGlvbnMuZGVwdGhzIHx8IFtdLCBkYXRhLCBibG9ja1BhcmFtcyk7XHJcblx0ICAgIHJldHVybiBtYWluKGNvbnRleHQsIG9wdGlvbnMpO1xyXG5cdCAgfVxyXG5cdCAgcmV0LmlzVG9wID0gdHJ1ZTtcclxuXHJcblx0ICByZXQuX3NldHVwID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHQgICAgaWYgKCFvcHRpb25zLnBhcnRpYWwpIHtcclxuXHQgICAgICBjb250YWluZXIuaGVscGVycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmhlbHBlcnMsIGVudi5oZWxwZXJzKTtcclxuXHJcblx0ICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XHJcblx0ICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5wYXJ0aWFscywgZW52LnBhcnRpYWxzKTtcclxuXHQgICAgICB9XHJcblx0ICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsIHx8IHRlbXBsYXRlU3BlYy51c2VEZWNvcmF0b3JzKSB7XHJcblx0ICAgICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmRlY29yYXRvcnMsIGVudi5kZWNvcmF0b3JzKTtcclxuXHQgICAgICB9XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBvcHRpb25zLmhlbHBlcnM7XHJcblx0ICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3B0aW9ucy5wYXJ0aWFscztcclxuXHQgICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcclxuXHQgICAgfVxyXG5cdCAgfTtcclxuXHJcblx0ICByZXQuX2NoaWxkID0gZnVuY3Rpb24gKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcclxuXHQgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyAmJiAhYmxvY2tQYXJhbXMpIHtcclxuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xyXG5cdCAgICB9XHJcblx0ICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzICYmICFkZXB0aHMpIHtcclxuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmV0dXJuIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgdGVtcGxhdGVTcGVjW2ldLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcclxuXHQgIH07XHJcblx0ICByZXR1cm4gcmV0O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xyXG5cdCAgZnVuY3Rpb24gcHJvZyhjb250ZXh0KSB7XHJcblx0ICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XHJcblxyXG5cdCAgICB2YXIgY3VycmVudERlcHRocyA9IGRlcHRocztcclxuXHQgICAgaWYgKGRlcHRocyAmJiBjb250ZXh0ICE9IGRlcHRoc1swXSAmJiAhKGNvbnRleHQgPT09IGNvbnRhaW5lci5udWxsQ29udGV4dCAmJiBkZXB0aHNbMF0gPT09IG51bGwpKSB7XHJcblx0ICAgICAgY3VycmVudERlcHRocyA9IFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmV0dXJuIGZuKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgb3B0aW9ucy5kYXRhIHx8IGRhdGEsIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLCBjdXJyZW50RGVwdGhzKTtcclxuXHQgIH1cclxuXHJcblx0ICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XHJcblxyXG5cdCAgcHJvZy5wcm9ncmFtID0gaTtcclxuXHQgIHByb2cuZGVwdGggPSBkZXB0aHMgPyBkZXB0aHMubGVuZ3RoIDogMDtcclxuXHQgIHByb2cuYmxvY2tQYXJhbXMgPSBkZWNsYXJlZEJsb2NrUGFyYW1zIHx8IDA7XHJcblx0ICByZXR1cm4gcHJvZztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcclxuXHQgIGlmICghcGFydGlhbCkge1xyXG5cdCAgICBpZiAob3B0aW9ucy5uYW1lID09PSAnQHBhcnRpYWwtYmxvY2snKSB7XHJcblx0ICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV07XHJcblx0ICAgIH1cclxuXHQgIH0gZWxzZSBpZiAoIXBhcnRpYWwuY2FsbCAmJiAhb3B0aW9ucy5uYW1lKSB7XHJcblx0ICAgIC8vIFRoaXMgaXMgYSBkeW5hbWljIHBhcnRpYWwgdGhhdCByZXR1cm5lZCBhIHN0cmluZ1xyXG5cdCAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xyXG5cdCAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1twYXJ0aWFsXTtcclxuXHQgIH1cclxuXHQgIHJldHVybiBwYXJ0aWFsO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XHJcblx0ICAvLyBVc2UgdGhlIGN1cnJlbnQgY2xvc3VyZSBjb250ZXh0IHRvIHNhdmUgdGhlIHBhcnRpYWwtYmxvY2sgaWYgdGhpcyBwYXJ0aWFsXHJcblx0ICB2YXIgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcclxuXHQgIG9wdGlvbnMucGFydGlhbCA9IHRydWU7XHJcblx0ICBpZiAob3B0aW9ucy5pZHMpIHtcclxuXHQgICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xyXG5cdCAgfVxyXG5cclxuXHQgIHZhciBwYXJ0aWFsQmxvY2sgPSB1bmRlZmluZWQ7XHJcblx0ICBpZiAob3B0aW9ucy5mbiAmJiBvcHRpb25zLmZuICE9PSBub29wKSB7XHJcblx0ICAgIChmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgb3B0aW9ucy5kYXRhID0gX2Jhc2UuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcclxuXHQgICAgICAvLyBXcmFwcGVyIGZ1bmN0aW9uIHRvIGdldCBhY2Nlc3MgdG8gY3VycmVudFBhcnRpYWxCbG9jayBmcm9tIHRoZSBjbG9zdXJlXHJcblx0ICAgICAgdmFyIGZuID0gb3B0aW9ucy5mbjtcclxuXHQgICAgICBwYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGZ1bmN0aW9uIHBhcnRpYWxCbG9ja1dyYXBwZXIoY29udGV4dCkge1xyXG5cdCAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcclxuXHJcblx0ICAgICAgICAvLyBSZXN0b3JlIHRoZSBwYXJ0aWFsLWJsb2NrIGZyb20gdGhlIGNsb3N1cmUgZm9yIHRoZSBleGVjdXRpb24gb2YgdGhlIGJsb2NrXHJcblx0ICAgICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cclxuXHQgICAgICAgIG9wdGlvbnMuZGF0YSA9IF9iYXNlLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XHJcblx0ICAgICAgICBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGN1cnJlbnRQYXJ0aWFsQmxvY2s7XHJcblx0ICAgICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XHJcblx0ICAgICAgfTtcclxuXHQgICAgICBpZiAoZm4ucGFydGlhbHMpIHtcclxuXHQgICAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcclxuXHQgICAgICB9XHJcblx0ICAgIH0pKCk7XHJcblx0ICB9XHJcblxyXG5cdCAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFsQmxvY2spIHtcclxuXHQgICAgcGFydGlhbCA9IHBhcnRpYWxCbG9jaztcclxuXHQgIH1cclxuXHJcblx0ICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgZm91bmQnKTtcclxuXHQgIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XHJcblx0ICAgIHJldHVybiBwYXJ0aWFsKGNvbnRleHQsIG9wdGlvbnMpO1xyXG5cdCAgfVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gbm9vcCgpIHtcclxuXHQgIHJldHVybiAnJztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcclxuXHQgIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xyXG5cdCAgICBkYXRhID0gZGF0YSA/IF9iYXNlLmNyZWF0ZUZyYW1lKGRhdGEpIDoge307XHJcblx0ICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XHJcblx0ICB9XHJcblx0ICByZXR1cm4gZGF0YTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcclxuXHQgIGlmIChmbi5kZWNvcmF0b3IpIHtcclxuXHQgICAgdmFyIHByb3BzID0ge307XHJcblx0ICAgIHByb2cgPSBmbi5kZWNvcmF0b3IocHJvZywgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGhzICYmIGRlcHRoc1swXSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XHJcblx0ICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XHJcblx0ICB9XHJcblx0ICByZXR1cm4gcHJvZztcclxuXHR9XHJcblxyXG4vKioqLyB9KSxcclxuLyogMjMgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXHRtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IF9fd2VicGFja19yZXF1aXJlX18oMjQpLCBfX2VzTW9kdWxlOiB0cnVlIH07XHJcblxyXG4vKioqLyB9KSxcclxuLyogMjQgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KTtcclxuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMzApLk9iamVjdC5zZWFsO1xyXG5cclxuLyoqKi8gfSksXHJcbi8qIDI1ICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcblx0Ly8gMTkuMS4yLjE3IE9iamVjdC5zZWFsKE8pXHJcblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNik7XHJcblxyXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjcpKCdzZWFsJywgZnVuY3Rpb24oJHNlYWwpe1xyXG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHNlYWwoaXQpe1xyXG5cdCAgICByZXR1cm4gJHNlYWwgJiYgaXNPYmplY3QoaXQpID8gJHNlYWwoaXQpIDogaXQ7XHJcblx0ICB9O1xyXG5cdH0pO1xyXG5cclxuLyoqKi8gfSksXHJcbi8qIDI2ICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcclxuXHJcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XHJcblx0ICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xyXG5cdH07XHJcblxyXG4vKioqLyB9KSxcclxuLyogMjcgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXHQvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcclxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpXHJcblx0ICAsIGNvcmUgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxyXG5cdCAgLCBmYWlscyAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMyk7XHJcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xyXG5cdCAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxyXG5cdCAgICAsIGV4cCA9IHt9O1xyXG5cdCAgZXhwW0tFWV0gPSBleGVjKGZuKTtcclxuXHQgICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcclxuXHR9O1xyXG5cclxuLyoqKi8gfSksXHJcbi8qIDI4ICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcblx0dmFyIGdsb2JhbCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjkpXHJcblx0ICAsIGNvcmUgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXHJcblx0ICAsIGN0eCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzEpXHJcblx0ICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xyXG5cclxuXHR2YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XHJcblx0ICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxyXG5cdCAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcclxuXHQgICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXHJcblx0ICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxyXG5cdCAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcclxuXHQgICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXHJcblx0ICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcclxuXHQgICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXHJcblx0ICAgICwga2V5LCBvd24sIG91dDtcclxuXHQgIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xyXG5cdCAgZm9yKGtleSBpbiBzb3VyY2Upe1xyXG5cdCAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcclxuXHQgICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcclxuXHQgICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xyXG5cdCAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxyXG5cdCAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xyXG5cdCAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcclxuXHQgICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cclxuXHQgICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcclxuXHQgICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcclxuXHQgICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcclxuXHQgICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcclxuXHQgICAgICB2YXIgRiA9IGZ1bmN0aW9uKHBhcmFtKXtcclxuXHQgICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xyXG5cdCAgICAgIH07XHJcblx0ICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xyXG5cdCAgICAgIHJldHVybiBGO1xyXG5cdCAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcclxuXHQgICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xyXG5cdCAgICBpZihJU19QUk9UTykoZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSkpW2tleV0gPSBvdXQ7XHJcblx0ICB9XHJcblx0fTtcclxuXHQvLyB0eXBlIGJpdG1hcFxyXG5cdCRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcclxuXHQkZXhwb3J0LkcgPSAyOyAgLy8gZ2xvYmFsXHJcblx0JGV4cG9ydC5TID0gNDsgIC8vIHN0YXRpY1xyXG5cdCRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xyXG5cdCRleHBvcnQuQiA9IDE2OyAvLyBiaW5kXHJcblx0JGV4cG9ydC5XID0gMzI7IC8vIHdyYXBcclxuXHRtb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XHJcblxyXG4vKioqLyB9KSxcclxuLyogMjkgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xyXG5cclxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxyXG5cdHZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxyXG5cdCAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xyXG5cdGlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXHJcblxyXG4vKioqLyB9KSxcclxuLyogMzAgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xyXG5cclxuXHR2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcxLjIuNid9O1xyXG5cdGlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxyXG5cclxuLyoqKi8gfSksXHJcbi8qIDMxICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcblx0Ly8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXHJcblx0dmFyIGFGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpO1xyXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XHJcblx0ICBhRnVuY3Rpb24oZm4pO1xyXG5cdCAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcclxuXHQgIHN3aXRjaChsZW5ndGgpe1xyXG5cdCAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcclxuXHQgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcclxuXHQgICAgfTtcclxuXHQgICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XHJcblx0ICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XHJcblx0ICAgIH07XHJcblx0ICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xyXG5cdCAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xyXG5cdCAgICB9O1xyXG5cdCAgfVxyXG5cdCAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xyXG5cdCAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcclxuXHQgIH07XHJcblx0fTtcclxuXHJcbi8qKiovIH0pLFxyXG4vKiAzMiAqL1xyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XHJcblxyXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xyXG5cdCAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcclxuXHQgIHJldHVybiBpdDtcclxuXHR9O1xyXG5cclxuLyoqKi8gfSksXHJcbi8qIDMzICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcclxuXHJcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcclxuXHQgIHRyeSB7XHJcblx0ICAgIHJldHVybiAhIWV4ZWMoKTtcclxuXHQgIH0gY2F0Y2goZSl7XHJcblx0ICAgIHJldHVybiB0cnVlO1xyXG5cdCAgfVxyXG5cdH07XHJcblxyXG4vKioqLyB9KSxcclxuLyogMzQgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xyXG5cclxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7LyogZ2xvYmFsIHdpbmRvdyAqL1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuXHJcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKEhhbmRsZWJhcnMpIHtcclxuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcblx0ICB2YXIgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxyXG5cdCAgICAgICRIYW5kbGViYXJzID0gcm9vdC5IYW5kbGViYXJzO1xyXG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuXHQgIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgaWYgKHJvb3QuSGFuZGxlYmFycyA9PT0gSGFuZGxlYmFycykge1xyXG5cdCAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xyXG5cdCAgICB9XHJcblx0ICAgIHJldHVybiBIYW5kbGViYXJzO1xyXG5cdCAgfTtcclxuXHR9O1xyXG5cclxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcclxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXHJcblxyXG4vKioqLyB9KSxcclxuLyogMzUgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcblx0dmFyIEFTVCA9IHtcclxuXHQgIC8vIFB1YmxpYyBBUEkgdXNlZCB0byBldmFsdWF0ZSBkZXJpdmVkIGF0dHJpYnV0ZXMgcmVnYXJkaW5nIEFTVCBub2Rlc1xyXG5cdCAgaGVscGVyczoge1xyXG5cdCAgICAvLyBhIG11c3RhY2hlIGlzIGRlZmluaXRlbHkgYSBoZWxwZXIgaWY6XHJcblx0ICAgIC8vICogaXQgaXMgYW4gZWxpZ2libGUgaGVscGVyLCBhbmRcclxuXHQgICAgLy8gKiBpdCBoYXMgYXQgbGVhc3Qgb25lIHBhcmFtZXRlciBvciBoYXNoIHNlZ21lbnRcclxuXHQgICAgaGVscGVyRXhwcmVzc2lvbjogZnVuY3Rpb24gaGVscGVyRXhwcmVzc2lvbihub2RlKSB7XHJcblx0ICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ1N1YkV4cHJlc3Npb24nIHx8IChub2RlLnR5cGUgPT09ICdNdXN0YWNoZVN0YXRlbWVudCcgfHwgbm9kZS50eXBlID09PSAnQmxvY2tTdGF0ZW1lbnQnKSAmJiAhIShub2RlLnBhcmFtcyAmJiBub2RlLnBhcmFtcy5sZW5ndGggfHwgbm9kZS5oYXNoKTtcclxuXHQgICAgfSxcclxuXHJcblx0ICAgIHNjb3BlZElkOiBmdW5jdGlvbiBzY29wZWRJZChwYXRoKSB7XHJcblx0ICAgICAgcmV0dXJuICgvXlxcLnx0aGlzXFxiLy50ZXN0KHBhdGgub3JpZ2luYWwpXHJcblx0ICAgICAgKTtcclxuXHQgICAgfSxcclxuXHJcblx0ICAgIC8vIGFuIElEIGlzIHNpbXBsZSBpZiBpdCBvbmx5IGhhcyBvbmUgcGFydCwgYW5kIHRoYXQgcGFydCBpcyBub3RcclxuXHQgICAgLy8gYC4uYCBvciBgdGhpc2AuXHJcblx0ICAgIHNpbXBsZUlkOiBmdW5jdGlvbiBzaW1wbGVJZChwYXRoKSB7XHJcblx0ICAgICAgcmV0dXJuIHBhdGgucGFydHMubGVuZ3RoID09PSAxICYmICFBU1QuaGVscGVycy5zY29wZWRJZChwYXRoKSAmJiAhcGF0aC5kZXB0aDtcclxuXHQgICAgfVxyXG5cdCAgfVxyXG5cdH07XHJcblxyXG5cdC8vIE11c3QgYmUgZXhwb3J0ZWQgYXMgYW4gb2JqZWN0IHJhdGhlciB0aGFuIHRoZSByb290IG9mIHRoZSBtb2R1bGUgYXMgdGhlIGppc29uIGxleGVyXHJcblx0Ly8gbXVzdCBtb2RpZnkgdGhlIG9iamVjdCB0byBvcGVyYXRlIHByb3Blcmx5LlxyXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFTVDtcclxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcclxuXHJcbi8qKiovIH0pLFxyXG4vKiAzNiAqL1xyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XHJcblxyXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IF9fd2VicGFja19yZXF1aXJlX18oMylbJ2RlZmF1bHQnXTtcclxuXHJcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuXHRleHBvcnRzLnBhcnNlID0gcGFyc2U7XHJcblxyXG5cdHZhciBfcGFyc2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNyk7XHJcblxyXG5cdHZhciBfcGFyc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlcik7XHJcblxyXG5cdHZhciBfd2hpdGVzcGFjZUNvbnRyb2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM4KTtcclxuXHJcblx0dmFyIF93aGl0ZXNwYWNlQ29udHJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aGl0ZXNwYWNlQ29udHJvbCk7XHJcblxyXG5cdHZhciBfaGVscGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oNDApO1xyXG5cclxuXHR2YXIgSGVscGVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oZWxwZXJzKTtcclxuXHJcblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XHJcblxyXG5cdGV4cG9ydHMucGFyc2VyID0gX3BhcnNlcjJbJ2RlZmF1bHQnXTtcclxuXHJcblx0dmFyIHl5ID0ge307XHJcblx0X3V0aWxzLmV4dGVuZCh5eSwgSGVscGVycyk7XHJcblxyXG5cdGZ1bmN0aW9uIHBhcnNlKGlucHV0LCBvcHRpb25zKSB7XHJcblx0ICAvLyBKdXN0IHJldHVybiBpZiBhbiBhbHJlYWR5LWNvbXBpbGVkIEFTVCB3YXMgcGFzc2VkIGluLlxyXG5cdCAgaWYgKGlucHV0LnR5cGUgPT09ICdQcm9ncmFtJykge1xyXG5cdCAgICByZXR1cm4gaW5wdXQ7XHJcblx0ICB9XHJcblxyXG5cdCAgX3BhcnNlcjJbJ2RlZmF1bHQnXS55eSA9IHl5O1xyXG5cclxuXHQgIC8vIEFsdGVyaW5nIHRoZSBzaGFyZWQgb2JqZWN0IGhlcmUsIGJ1dCB0aGlzIGlzIG9rIGFzIHBhcnNlciBpcyBhIHN5bmMgb3BlcmF0aW9uXHJcblx0ICB5eS5sb2NJbmZvID0gZnVuY3Rpb24gKGxvY0luZm8pIHtcclxuXHQgICAgcmV0dXJuIG5ldyB5eS5Tb3VyY2VMb2NhdGlvbihvcHRpb25zICYmIG9wdGlvbnMuc3JjTmFtZSwgbG9jSW5mbyk7XHJcblx0ICB9O1xyXG5cclxuXHQgIHZhciBzdHJpcCA9IG5ldyBfd2hpdGVzcGFjZUNvbnRyb2wyWydkZWZhdWx0J10ob3B0aW9ucyk7XHJcblx0ICByZXR1cm4gc3RyaXAuYWNjZXB0KF9wYXJzZXIyWydkZWZhdWx0J10ucGFyc2UoaW5wdXQpKTtcclxuXHR9XHJcblxyXG4vKioqLyB9KSxcclxuLyogMzcgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xyXG5cclxuXHQvLyBGaWxlIGlnbm9yZWQgaW4gY292ZXJhZ2UgdGVzdHMgdmlhIHNldHRpbmcgaW4gLmlzdGFuYnVsLnltbFxyXG5cdC8qIEppc29uIGdlbmVyYXRlZCBwYXJzZXIgKi9cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuXHR2YXIgaGFuZGxlYmFycyA9IChmdW5jdGlvbiAoKSB7XHJcblx0ICAgIHZhciBwYXJzZXIgPSB7IHRyYWNlOiBmdW5jdGlvbiB0cmFjZSgpIHt9LFxyXG5cdCAgICAgICAgeXk6IHt9LFxyXG5cdCAgICAgICAgc3ltYm9sc186IHsgXCJlcnJvclwiOiAyLCBcInJvb3RcIjogMywgXCJwcm9ncmFtXCI6IDQsIFwiRU9GXCI6IDUsIFwicHJvZ3JhbV9yZXBldGl0aW9uMFwiOiA2LCBcInN0YXRlbWVudFwiOiA3LCBcIm11c3RhY2hlXCI6IDgsIFwiYmxvY2tcIjogOSwgXCJyYXdCbG9ja1wiOiAxMCwgXCJwYXJ0aWFsXCI6IDExLCBcInBhcnRpYWxCbG9ja1wiOiAxMiwgXCJjb250ZW50XCI6IDEzLCBcIkNPTU1FTlRcIjogMTQsIFwiQ09OVEVOVFwiOiAxNSwgXCJvcGVuUmF3QmxvY2tcIjogMTYsIFwicmF3QmxvY2tfcmVwZXRpdGlvbl9wbHVzMFwiOiAxNywgXCJFTkRfUkFXX0JMT0NLXCI6IDE4LCBcIk9QRU5fUkFXX0JMT0NLXCI6IDE5LCBcImhlbHBlck5hbWVcIjogMjAsIFwib3BlblJhd0Jsb2NrX3JlcGV0aXRpb24wXCI6IDIxLCBcIm9wZW5SYXdCbG9ja19vcHRpb24wXCI6IDIyLCBcIkNMT1NFX1JBV19CTE9DS1wiOiAyMywgXCJvcGVuQmxvY2tcIjogMjQsIFwiYmxvY2tfb3B0aW9uMFwiOiAyNSwgXCJjbG9zZUJsb2NrXCI6IDI2LCBcIm9wZW5JbnZlcnNlXCI6IDI3LCBcImJsb2NrX29wdGlvbjFcIjogMjgsIFwiT1BFTl9CTE9DS1wiOiAyOSwgXCJvcGVuQmxvY2tfcmVwZXRpdGlvbjBcIjogMzAsIFwib3BlbkJsb2NrX29wdGlvbjBcIjogMzEsIFwib3BlbkJsb2NrX29wdGlvbjFcIjogMzIsIFwiQ0xPU0VcIjogMzMsIFwiT1BFTl9JTlZFUlNFXCI6IDM0LCBcIm9wZW5JbnZlcnNlX3JlcGV0aXRpb24wXCI6IDM1LCBcIm9wZW5JbnZlcnNlX29wdGlvbjBcIjogMzYsIFwib3BlbkludmVyc2Vfb3B0aW9uMVwiOiAzNywgXCJvcGVuSW52ZXJzZUNoYWluXCI6IDM4LCBcIk9QRU5fSU5WRVJTRV9DSEFJTlwiOiAzOSwgXCJvcGVuSW52ZXJzZUNoYWluX3JlcGV0aXRpb24wXCI6IDQwLCBcIm9wZW5JbnZlcnNlQ2hhaW5fb3B0aW9uMFwiOiA0MSwgXCJvcGVuSW52ZXJzZUNoYWluX29wdGlvbjFcIjogNDIsIFwiaW52ZXJzZUFuZFByb2dyYW1cIjogNDMsIFwiSU5WRVJTRVwiOiA0NCwgXCJpbnZlcnNlQ2hhaW5cIjogNDUsIFwiaW52ZXJzZUNoYWluX29wdGlvbjBcIjogNDYsIFwiT1BFTl9FTkRCTE9DS1wiOiA0NywgXCJPUEVOXCI6IDQ4LCBcIm11c3RhY2hlX3JlcGV0aXRpb24wXCI6IDQ5LCBcIm11c3RhY2hlX29wdGlvbjBcIjogNTAsIFwiT1BFTl9VTkVTQ0FQRURcIjogNTEsIFwibXVzdGFjaGVfcmVwZXRpdGlvbjFcIjogNTIsIFwibXVzdGFjaGVfb3B0aW9uMVwiOiA1MywgXCJDTE9TRV9VTkVTQ0FQRURcIjogNTQsIFwiT1BFTl9QQVJUSUFMXCI6IDU1LCBcInBhcnRpYWxOYW1lXCI6IDU2LCBcInBhcnRpYWxfcmVwZXRpdGlvbjBcIjogNTcsIFwicGFydGlhbF9vcHRpb24wXCI6IDU4LCBcIm9wZW5QYXJ0aWFsQmxvY2tcIjogNTksIFwiT1BFTl9QQVJUSUFMX0JMT0NLXCI6IDYwLCBcIm9wZW5QYXJ0aWFsQmxvY2tfcmVwZXRpdGlvbjBcIjogNjEsIFwib3BlblBhcnRpYWxCbG9ja19vcHRpb24wXCI6IDYyLCBcInBhcmFtXCI6IDYzLCBcInNleHByXCI6IDY0LCBcIk9QRU5fU0VYUFJcIjogNjUsIFwic2V4cHJfcmVwZXRpdGlvbjBcIjogNjYsIFwic2V4cHJfb3B0aW9uMFwiOiA2NywgXCJDTE9TRV9TRVhQUlwiOiA2OCwgXCJoYXNoXCI6IDY5LCBcImhhc2hfcmVwZXRpdGlvbl9wbHVzMFwiOiA3MCwgXCJoYXNoU2VnbWVudFwiOiA3MSwgXCJJRFwiOiA3MiwgXCJFUVVBTFNcIjogNzMsIFwiYmxvY2tQYXJhbXNcIjogNzQsIFwiT1BFTl9CTE9DS19QQVJBTVNcIjogNzUsIFwiYmxvY2tQYXJhbXNfcmVwZXRpdGlvbl9wbHVzMFwiOiA3NiwgXCJDTE9TRV9CTE9DS19QQVJBTVNcIjogNzcsIFwicGF0aFwiOiA3OCwgXCJkYXRhTmFtZVwiOiA3OSwgXCJTVFJJTkdcIjogODAsIFwiTlVNQkVSXCI6IDgxLCBcIkJPT0xFQU5cIjogODIsIFwiVU5ERUZJTkVEXCI6IDgzLCBcIk5VTExcIjogODQsIFwiREFUQVwiOiA4NSwgXCJwYXRoU2VnbWVudHNcIjogODYsIFwiU0VQXCI6IDg3LCBcIiRhY2NlcHRcIjogMCwgXCIkZW5kXCI6IDEgfSxcclxuXHQgICAgICAgIHRlcm1pbmFsc186IHsgMjogXCJlcnJvclwiLCA1OiBcIkVPRlwiLCAxNDogXCJDT01NRU5UXCIsIDE1OiBcIkNPTlRFTlRcIiwgMTg6IFwiRU5EX1JBV19CTE9DS1wiLCAxOTogXCJPUEVOX1JBV19CTE9DS1wiLCAyMzogXCJDTE9TRV9SQVdfQkxPQ0tcIiwgMjk6IFwiT1BFTl9CTE9DS1wiLCAzMzogXCJDTE9TRVwiLCAzNDogXCJPUEVOX0lOVkVSU0VcIiwgMzk6IFwiT1BFTl9JTlZFUlNFX0NIQUlOXCIsIDQ0OiBcIklOVkVSU0VcIiwgNDc6IFwiT1BFTl9FTkRCTE9DS1wiLCA0ODogXCJPUEVOXCIsIDUxOiBcIk9QRU5fVU5FU0NBUEVEXCIsIDU0OiBcIkNMT1NFX1VORVNDQVBFRFwiLCA1NTogXCJPUEVOX1BBUlRJQUxcIiwgNjA6IFwiT1BFTl9QQVJUSUFMX0JMT0NLXCIsIDY1OiBcIk9QRU5fU0VYUFJcIiwgNjg6IFwiQ0xPU0VfU0VYUFJcIiwgNzI6IFwiSURcIiwgNzM6IFwiRVFVQUxTXCIsIDc1OiBcIk9QRU5fQkxPQ0tfUEFSQU1TXCIsIDc3OiBcIkNMT1NFX0JMT0NLX1BBUkFNU1wiLCA4MDogXCJTVFJJTkdcIiwgODE6IFwiTlVNQkVSXCIsIDgyOiBcIkJPT0xFQU5cIiwgODM6IFwiVU5ERUZJTkVEXCIsIDg0OiBcIk5VTExcIiwgODU6IFwiREFUQVwiLCA4NzogXCJTRVBcIiB9LFxyXG5cdCAgICAgICAgcHJvZHVjdGlvbnNfOiBbMCwgWzMsIDJdLCBbNCwgMV0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzEzLCAxXSwgWzEwLCAzXSwgWzE2LCA1XSwgWzksIDRdLCBbOSwgNF0sIFsyNCwgNl0sIFsyNywgNl0sIFszOCwgNl0sIFs0MywgMl0sIFs0NSwgM10sIFs0NSwgMV0sIFsyNiwgM10sIFs4LCA1XSwgWzgsIDVdLCBbMTEsIDVdLCBbMTIsIDNdLCBbNTksIDVdLCBbNjMsIDFdLCBbNjMsIDFdLCBbNjQsIDVdLCBbNjksIDFdLCBbNzEsIDNdLCBbNzQsIDNdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbNTYsIDFdLCBbNTYsIDFdLCBbNzksIDJdLCBbNzgsIDFdLCBbODYsIDNdLCBbODYsIDFdLCBbNiwgMF0sIFs2LCAyXSwgWzE3LCAxXSwgWzE3LCAyXSwgWzIxLCAwXSwgWzIxLCAyXSwgWzIyLCAwXSwgWzIyLCAxXSwgWzI1LCAwXSwgWzI1LCAxXSwgWzI4LCAwXSwgWzI4LCAxXSwgWzMwLCAwXSwgWzMwLCAyXSwgWzMxLCAwXSwgWzMxLCAxXSwgWzMyLCAwXSwgWzMyLCAxXSwgWzM1LCAwXSwgWzM1LCAyXSwgWzM2LCAwXSwgWzM2LCAxXSwgWzM3LCAwXSwgWzM3LCAxXSwgWzQwLCAwXSwgWzQwLCAyXSwgWzQxLCAwXSwgWzQxLCAxXSwgWzQyLCAwXSwgWzQyLCAxXSwgWzQ2LCAwXSwgWzQ2LCAxXSwgWzQ5LCAwXSwgWzQ5LCAyXSwgWzUwLCAwXSwgWzUwLCAxXSwgWzUyLCAwXSwgWzUyLCAyXSwgWzUzLCAwXSwgWzUzLCAxXSwgWzU3LCAwXSwgWzU3LCAyXSwgWzU4LCAwXSwgWzU4LCAxXSwgWzYxLCAwXSwgWzYxLCAyXSwgWzYyLCAwXSwgWzYyLCAxXSwgWzY2LCAwXSwgWzY2LCAyXSwgWzY3LCAwXSwgWzY3LCAxXSwgWzcwLCAxXSwgWzcwLCAyXSwgWzc2LCAxXSwgWzc2LCAyXV0sXHJcblx0ICAgICAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXl0ZXh0LCB5eWxlbmcsIHl5bGluZW5vLCB5eSwgeXlzdGF0ZSwgJCQsIF8kXHJcblx0ICAgICAgICAvKiovKSB7XHJcblxyXG5cdCAgICAgICAgICAgIHZhciAkMCA9ICQkLmxlbmd0aCAtIDE7XHJcblx0ICAgICAgICAgICAgc3dpdGNoICh5eXN0YXRlKSB7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAkJFskMCAtIDFdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVQcm9ncmFtKCQkWyQwXSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDU6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDg6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdDb21tZW50U3RhdGVtZW50JyxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeXkuc3RyaXBDb21tZW50KCQkWyQwXSksXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDBdLCAkJFskMF0pLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxyXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQ29udGVudFN0YXRlbWVudCcsXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWw6ICQkWyQwXSxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJCRbJDBdLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxyXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVSYXdCbG9jaygkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMF0sIHRoaXMuXyQpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gM10sIHBhcmFtczogJCRbJDAgLSAyXSwgaGFzaDogJCRbJDAgLSAxXSB9O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTM6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlQmxvY2soJCRbJDAgLSAzXSwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCBmYWxzZSwgdGhpcy5fJCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAxNDpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVCbG9jaygkJFskMCAtIDNdLCAkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMF0sIHRydWUsIHRoaXMuXyQpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTU6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IG9wZW46ICQkWyQwIC0gNV0sIHBhdGg6ICQkWyQwIC0gNF0sIHBhcmFtczogJCRbJDAgLSAzXSwgaGFzaDogJCRbJDAgLSAyXSwgYmxvY2tQYXJhbXM6ICQkWyQwIC0gMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNV0sICQkWyQwXSkgfTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDE2OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBwYXRoOiAkJFskMCAtIDRdLCBwYXJhbXM6ICQkWyQwIC0gM10sIGhhc2g6ICQkWyQwIC0gMl0sIGJsb2NrUGFyYW1zOiAkJFskMCAtIDFdLCBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDVdLCAkJFskMF0pIH07XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAxNzpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgcGF0aDogJCRbJDAgLSA0XSwgcGFyYW1zOiAkJFskMCAtIDNdLCBoYXNoOiAkJFskMCAtIDJdLCBibG9ja1BhcmFtczogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA1XSwgJCRbJDBdKSB9O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTg6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gMV0sICQkWyQwIC0gMV0pLCBwcm9ncmFtOiAkJFskMF0gfTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDE5OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGludmVyc2UgPSB5eS5wcmVwYXJlQmxvY2soJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCAkJFskMF0sIGZhbHNlLCB0aGlzLl8kKSxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtID0geXkucHJlcGFyZVByb2dyYW0oW2ludmVyc2VdLCAkJFskMCAtIDFdLmxvYyk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLmNoYWluZWQgPSB0cnVlO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgc3RyaXA6ICQkWyQwIC0gMl0uc3RyaXAsIHByb2dyYW06IHByb2dyYW0sIGNoYWluOiB0cnVlIH07XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjA6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAyMTpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgcGF0aDogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSAyXSwgJCRbJDBdKSB9O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjI6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlTXVzdGFjaGUoJCRbJDAgLSAzXSwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDAgLSA0XSwgeXkuc3RyaXBGbGFncygkJFskMCAtIDRdLCAkJFskMF0pLCB0aGlzLl8kKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDIzOlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZU11c3RhY2hlKCQkWyQwIC0gM10sICQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwIC0gNF0sIHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA0XSwgJCRbJDBdKSwgdGhpcy5fJCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAyNDpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUGFydGlhbFN0YXRlbWVudCcsXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJCRbJDAgLSAzXSxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6ICQkWyQwIC0gMl0sXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaGFzaDogJCRbJDAgLSAxXSxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBpbmRlbnQ6ICcnLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNF0sICQkWyQwXSksXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpXHJcblx0ICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDI1OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVBhcnRpYWxCbG9jaygkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMF0sIHRoaXMuXyQpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjY6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gM10sIHBhcmFtczogJCRbJDAgLSAyXSwgaGFzaDogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA0XSwgJCRbJDBdKSB9O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjc6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAyODpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDI5OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTdWJFeHByZXNzaW9uJyxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAkJFskMCAtIDNdLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogJCRbJDAgLSAyXSxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBoYXNoOiAkJFskMCAtIDFdLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxyXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAzMDpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ0hhc2gnLCBwYWlyczogJCRbJDBdLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDMxOlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnSGFzaFBhaXInLCBrZXk6IHl5LmlkKCQkWyQwIC0gMl0pLCB2YWx1ZTogJCRbJDBdLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDMyOlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkuaWQoJCRbJDAgLSAxXSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAzMzpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDM0OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzU6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdTdHJpbmdMaXRlcmFsJywgdmFsdWU6ICQkWyQwXSwgb3JpZ2luYWw6ICQkWyQwXSwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAzNjpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ051bWJlckxpdGVyYWwnLCB2YWx1ZTogTnVtYmVyKCQkWyQwXSksIG9yaWdpbmFsOiBOdW1iZXIoJCRbJDBdKSwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAzNzpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ0Jvb2xlYW5MaXRlcmFsJywgdmFsdWU6ICQkWyQwXSA9PT0gJ3RydWUnLCBvcmlnaW5hbDogJCRbJDBdID09PSAndHJ1ZScsIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzg6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdVbmRlZmluZWRMaXRlcmFsJywgb3JpZ2luYWw6IHVuZGVmaW5lZCwgdmFsdWU6IHVuZGVmaW5lZCwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAzOTpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ051bGxMaXRlcmFsJywgb3JpZ2luYWw6IG51bGwsIHZhbHVlOiBudWxsLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDQwOlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDE6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA0MjpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVQYXRoKHRydWUsICQkWyQwXSwgdGhpcy5fJCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA0MzpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVQYXRoKGZhbHNlLCAkJFskMF0sIHRoaXMuXyQpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDQ6XHJcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDJdLnB1c2goeyBwYXJ0OiB5eS5pZCgkJFskMF0pLCBvcmlnaW5hbDogJCRbJDBdLCBzZXBhcmF0b3I6ICQkWyQwIC0gMV0gfSk7dGhpcy4kID0gJCRbJDAgLSAyXTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ1OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW3sgcGFydDogeXkuaWQoJCRbJDBdKSwgb3JpZ2luYWw6ICQkWyQwXSB9XTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ2OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA0NzpcclxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDg6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbJCRbJDBdXTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ5OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA1MDpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgNTE6XHJcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDU4OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA1OTpcclxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjQ6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDY1OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA3MDpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzE6XHJcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDc4OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA3OTpcclxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgODI6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDgzOlxyXG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA4NjpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgODc6XHJcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDkwOlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA5MTpcclxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTQ6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDk1OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA5ODpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFskJFskMF1dO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTk6XHJcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDEwMDpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFskJFskMF1dO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTAxOlxyXG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAgdGFibGU6IFt7IDM6IDEsIDQ6IDIsIDU6IFsyLCA0Nl0sIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDg6IFsyLCA0Nl0sIDUxOiBbMiwgNDZdLCA1NTogWzIsIDQ2XSwgNjA6IFsyLCA0Nl0gfSwgeyAxOiBbM10gfSwgeyA1OiBbMSwgNF0gfSwgeyA1OiBbMiwgMl0sIDc6IDUsIDg6IDYsIDk6IDcsIDEwOiA4LCAxMTogOSwgMTI6IDEwLCAxMzogMTEsIDE0OiBbMSwgMTJdLCAxNTogWzEsIDIwXSwgMTY6IDE3LCAxOTogWzEsIDIzXSwgMjQ6IDE1LCAyNzogMTYsIDI5OiBbMSwgMjFdLCAzNDogWzEsIDIyXSwgMzk6IFsyLCAyXSwgNDQ6IFsyLCAyXSwgNDc6IFsyLCAyXSwgNDg6IFsxLCAxM10sIDUxOiBbMSwgMTRdLCA1NTogWzEsIDE4XSwgNTk6IDE5LCA2MDogWzEsIDI0XSB9LCB7IDE6IFsyLCAxXSB9LCB7IDU6IFsyLCA0N10sIDE0OiBbMiwgNDddLCAxNTogWzIsIDQ3XSwgMTk6IFsyLCA0N10sIDI5OiBbMiwgNDddLCAzNDogWzIsIDQ3XSwgMzk6IFsyLCA0N10sIDQ0OiBbMiwgNDddLCA0NzogWzIsIDQ3XSwgNDg6IFsyLCA0N10sIDUxOiBbMiwgNDddLCA1NTogWzIsIDQ3XSwgNjA6IFsyLCA0N10gfSwgeyA1OiBbMiwgM10sIDE0OiBbMiwgM10sIDE1OiBbMiwgM10sIDE5OiBbMiwgM10sIDI5OiBbMiwgM10sIDM0OiBbMiwgM10sIDM5OiBbMiwgM10sIDQ0OiBbMiwgM10sIDQ3OiBbMiwgM10sIDQ4OiBbMiwgM10sIDUxOiBbMiwgM10sIDU1OiBbMiwgM10sIDYwOiBbMiwgM10gfSwgeyA1OiBbMiwgNF0sIDE0OiBbMiwgNF0sIDE1OiBbMiwgNF0sIDE5OiBbMiwgNF0sIDI5OiBbMiwgNF0sIDM0OiBbMiwgNF0sIDM5OiBbMiwgNF0sIDQ0OiBbMiwgNF0sIDQ3OiBbMiwgNF0sIDQ4OiBbMiwgNF0sIDUxOiBbMiwgNF0sIDU1OiBbMiwgNF0sIDYwOiBbMiwgNF0gfSwgeyA1OiBbMiwgNV0sIDE0OiBbMiwgNV0sIDE1OiBbMiwgNV0sIDE5OiBbMiwgNV0sIDI5OiBbMiwgNV0sIDM0OiBbMiwgNV0sIDM5OiBbMiwgNV0sIDQ0OiBbMiwgNV0sIDQ3OiBbMiwgNV0sIDQ4OiBbMiwgNV0sIDUxOiBbMiwgNV0sIDU1OiBbMiwgNV0sIDYwOiBbMiwgNV0gfSwgeyA1OiBbMiwgNl0sIDE0OiBbMiwgNl0sIDE1OiBbMiwgNl0sIDE5OiBbMiwgNl0sIDI5OiBbMiwgNl0sIDM0OiBbMiwgNl0sIDM5OiBbMiwgNl0sIDQ0OiBbMiwgNl0sIDQ3OiBbMiwgNl0sIDQ4OiBbMiwgNl0sIDUxOiBbMiwgNl0sIDU1OiBbMiwgNl0sIDYwOiBbMiwgNl0gfSwgeyA1OiBbMiwgN10sIDE0OiBbMiwgN10sIDE1OiBbMiwgN10sIDE5OiBbMiwgN10sIDI5OiBbMiwgN10sIDM0OiBbMiwgN10sIDM5OiBbMiwgN10sIDQ0OiBbMiwgN10sIDQ3OiBbMiwgN10sIDQ4OiBbMiwgN10sIDUxOiBbMiwgN10sIDU1OiBbMiwgN10sIDYwOiBbMiwgN10gfSwgeyA1OiBbMiwgOF0sIDE0OiBbMiwgOF0sIDE1OiBbMiwgOF0sIDE5OiBbMiwgOF0sIDI5OiBbMiwgOF0sIDM0OiBbMiwgOF0sIDM5OiBbMiwgOF0sIDQ0OiBbMiwgOF0sIDQ3OiBbMiwgOF0sIDQ4OiBbMiwgOF0sIDUxOiBbMiwgOF0sIDU1OiBbMiwgOF0sIDYwOiBbMiwgOF0gfSwgeyA1OiBbMiwgOV0sIDE0OiBbMiwgOV0sIDE1OiBbMiwgOV0sIDE5OiBbMiwgOV0sIDI5OiBbMiwgOV0sIDM0OiBbMiwgOV0sIDM5OiBbMiwgOV0sIDQ0OiBbMiwgOV0sIDQ3OiBbMiwgOV0sIDQ4OiBbMiwgOV0sIDUxOiBbMiwgOV0sIDU1OiBbMiwgOV0sIDYwOiBbMiwgOV0gfSwgeyAyMDogMjUsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDM2LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDQ6IDM3LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDM5OiBbMiwgNDZdLCA0NDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgNDogMzgsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDQ6IFsyLCA0Nl0sIDQ3OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDEzOiA0MCwgMTU6IFsxLCAyMF0sIDE3OiAzOSB9LCB7IDIwOiA0MiwgNTY6IDQxLCA2NDogNDMsIDY1OiBbMSwgNDRdLCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDQ6IDQ1LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDQ3OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDU6IFsyLCAxMF0sIDE0OiBbMiwgMTBdLCAxNTogWzIsIDEwXSwgMTg6IFsyLCAxMF0sIDE5OiBbMiwgMTBdLCAyOTogWzIsIDEwXSwgMzQ6IFsyLCAxMF0sIDM5OiBbMiwgMTBdLCA0NDogWzIsIDEwXSwgNDc6IFsyLCAxMF0sIDQ4OiBbMiwgMTBdLCA1MTogWzIsIDEwXSwgNTU6IFsyLCAxMF0sIDYwOiBbMiwgMTBdIH0sIHsgMjA6IDQ2LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA0NywgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNDgsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDQyLCA1NjogNDksIDY0OiA0MywgNjU6IFsxLCA0NF0sIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMzM6IFsyLCA3OF0sIDQ5OiA1MCwgNjU6IFsyLCA3OF0sIDcyOiBbMiwgNzhdLCA4MDogWzIsIDc4XSwgODE6IFsyLCA3OF0sIDgyOiBbMiwgNzhdLCA4MzogWzIsIDc4XSwgODQ6IFsyLCA3OF0sIDg1OiBbMiwgNzhdIH0sIHsgMjM6IFsyLCAzM10sIDMzOiBbMiwgMzNdLCA1NDogWzIsIDMzXSwgNjU6IFsyLCAzM10sIDY4OiBbMiwgMzNdLCA3MjogWzIsIDMzXSwgNzU6IFsyLCAzM10sIDgwOiBbMiwgMzNdLCA4MTogWzIsIDMzXSwgODI6IFsyLCAzM10sIDgzOiBbMiwgMzNdLCA4NDogWzIsIDMzXSwgODU6IFsyLCAzM10gfSwgeyAyMzogWzIsIDM0XSwgMzM6IFsyLCAzNF0sIDU0OiBbMiwgMzRdLCA2NTogWzIsIDM0XSwgNjg6IFsyLCAzNF0sIDcyOiBbMiwgMzRdLCA3NTogWzIsIDM0XSwgODA6IFsyLCAzNF0sIDgxOiBbMiwgMzRdLCA4MjogWzIsIDM0XSwgODM6IFsyLCAzNF0sIDg0OiBbMiwgMzRdLCA4NTogWzIsIDM0XSB9LCB7IDIzOiBbMiwgMzVdLCAzMzogWzIsIDM1XSwgNTQ6IFsyLCAzNV0sIDY1OiBbMiwgMzVdLCA2ODogWzIsIDM1XSwgNzI6IFsyLCAzNV0sIDc1OiBbMiwgMzVdLCA4MDogWzIsIDM1XSwgODE6IFsyLCAzNV0sIDgyOiBbMiwgMzVdLCA4MzogWzIsIDM1XSwgODQ6IFsyLCAzNV0sIDg1OiBbMiwgMzVdIH0sIHsgMjM6IFsyLCAzNl0sIDMzOiBbMiwgMzZdLCA1NDogWzIsIDM2XSwgNjU6IFsyLCAzNl0sIDY4OiBbMiwgMzZdLCA3MjogWzIsIDM2XSwgNzU6IFsyLCAzNl0sIDgwOiBbMiwgMzZdLCA4MTogWzIsIDM2XSwgODI6IFsyLCAzNl0sIDgzOiBbMiwgMzZdLCA4NDogWzIsIDM2XSwgODU6IFsyLCAzNl0gfSwgeyAyMzogWzIsIDM3XSwgMzM6IFsyLCAzN10sIDU0OiBbMiwgMzddLCA2NTogWzIsIDM3XSwgNjg6IFsyLCAzN10sIDcyOiBbMiwgMzddLCA3NTogWzIsIDM3XSwgODA6IFsyLCAzN10sIDgxOiBbMiwgMzddLCA4MjogWzIsIDM3XSwgODM6IFsyLCAzN10sIDg0OiBbMiwgMzddLCA4NTogWzIsIDM3XSB9LCB7IDIzOiBbMiwgMzhdLCAzMzogWzIsIDM4XSwgNTQ6IFsyLCAzOF0sIDY1OiBbMiwgMzhdLCA2ODogWzIsIDM4XSwgNzI6IFsyLCAzOF0sIDc1OiBbMiwgMzhdLCA4MDogWzIsIDM4XSwgODE6IFsyLCAzOF0sIDgyOiBbMiwgMzhdLCA4MzogWzIsIDM4XSwgODQ6IFsyLCAzOF0sIDg1OiBbMiwgMzhdIH0sIHsgMjM6IFsyLCAzOV0sIDMzOiBbMiwgMzldLCA1NDogWzIsIDM5XSwgNjU6IFsyLCAzOV0sIDY4OiBbMiwgMzldLCA3MjogWzIsIDM5XSwgNzU6IFsyLCAzOV0sIDgwOiBbMiwgMzldLCA4MTogWzIsIDM5XSwgODI6IFsyLCAzOV0sIDgzOiBbMiwgMzldLCA4NDogWzIsIDM5XSwgODU6IFsyLCAzOV0gfSwgeyAyMzogWzIsIDQzXSwgMzM6IFsyLCA0M10sIDU0OiBbMiwgNDNdLCA2NTogWzIsIDQzXSwgNjg6IFsyLCA0M10sIDcyOiBbMiwgNDNdLCA3NTogWzIsIDQzXSwgODA6IFsyLCA0M10sIDgxOiBbMiwgNDNdLCA4MjogWzIsIDQzXSwgODM6IFsyLCA0M10sIDg0OiBbMiwgNDNdLCA4NTogWzIsIDQzXSwgODc6IFsxLCA1MV0gfSwgeyA3MjogWzEsIDM1XSwgODY6IDUyIH0sIHsgMjM6IFsyLCA0NV0sIDMzOiBbMiwgNDVdLCA1NDogWzIsIDQ1XSwgNjU6IFsyLCA0NV0sIDY4OiBbMiwgNDVdLCA3MjogWzIsIDQ1XSwgNzU6IFsyLCA0NV0sIDgwOiBbMiwgNDVdLCA4MTogWzIsIDQ1XSwgODI6IFsyLCA0NV0sIDgzOiBbMiwgNDVdLCA4NDogWzIsIDQ1XSwgODU6IFsyLCA0NV0sIDg3OiBbMiwgNDVdIH0sIHsgNTI6IDUzLCA1NDogWzIsIDgyXSwgNjU6IFsyLCA4Ml0sIDcyOiBbMiwgODJdLCA4MDogWzIsIDgyXSwgODE6IFsyLCA4Ml0sIDgyOiBbMiwgODJdLCA4MzogWzIsIDgyXSwgODQ6IFsyLCA4Ml0sIDg1OiBbMiwgODJdIH0sIHsgMjU6IDU0LCAzODogNTYsIDM5OiBbMSwgNThdLCA0MzogNTcsIDQ0OiBbMSwgNTldLCA0NTogNTUsIDQ3OiBbMiwgNTRdIH0sIHsgMjg6IDYwLCA0MzogNjEsIDQ0OiBbMSwgNTldLCA0NzogWzIsIDU2XSB9LCB7IDEzOiA2MywgMTU6IFsxLCAyMF0sIDE4OiBbMSwgNjJdIH0sIHsgMTU6IFsyLCA0OF0sIDE4OiBbMiwgNDhdIH0sIHsgMzM6IFsyLCA4Nl0sIDU3OiA2NCwgNjU6IFsyLCA4Nl0sIDcyOiBbMiwgODZdLCA4MDogWzIsIDg2XSwgODE6IFsyLCA4Nl0sIDgyOiBbMiwgODZdLCA4MzogWzIsIDg2XSwgODQ6IFsyLCA4Nl0sIDg1OiBbMiwgODZdIH0sIHsgMzM6IFsyLCA0MF0sIDY1OiBbMiwgNDBdLCA3MjogWzIsIDQwXSwgODA6IFsyLCA0MF0sIDgxOiBbMiwgNDBdLCA4MjogWzIsIDQwXSwgODM6IFsyLCA0MF0sIDg0OiBbMiwgNDBdLCA4NTogWzIsIDQwXSB9LCB7IDMzOiBbMiwgNDFdLCA2NTogWzIsIDQxXSwgNzI6IFsyLCA0MV0sIDgwOiBbMiwgNDFdLCA4MTogWzIsIDQxXSwgODI6IFsyLCA0MV0sIDgzOiBbMiwgNDFdLCA4NDogWzIsIDQxXSwgODU6IFsyLCA0MV0gfSwgeyAyMDogNjUsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjY6IDY2LCA0NzogWzEsIDY3XSB9LCB7IDMwOiA2OCwgMzM6IFsyLCA1OF0sIDY1OiBbMiwgNThdLCA3MjogWzIsIDU4XSwgNzU6IFsyLCA1OF0sIDgwOiBbMiwgNThdLCA4MTogWzIsIDU4XSwgODI6IFsyLCA1OF0sIDgzOiBbMiwgNThdLCA4NDogWzIsIDU4XSwgODU6IFsyLCA1OF0gfSwgeyAzMzogWzIsIDY0XSwgMzU6IDY5LCA2NTogWzIsIDY0XSwgNzI6IFsyLCA2NF0sIDc1OiBbMiwgNjRdLCA4MDogWzIsIDY0XSwgODE6IFsyLCA2NF0sIDgyOiBbMiwgNjRdLCA4MzogWzIsIDY0XSwgODQ6IFsyLCA2NF0sIDg1OiBbMiwgNjRdIH0sIHsgMjE6IDcwLCAyMzogWzIsIDUwXSwgNjU6IFsyLCA1MF0sIDcyOiBbMiwgNTBdLCA4MDogWzIsIDUwXSwgODE6IFsyLCA1MF0sIDgyOiBbMiwgNTBdLCA4MzogWzIsIDUwXSwgODQ6IFsyLCA1MF0sIDg1OiBbMiwgNTBdIH0sIHsgMzM6IFsyLCA5MF0sIDYxOiA3MSwgNjU6IFsyLCA5MF0sIDcyOiBbMiwgOTBdLCA4MDogWzIsIDkwXSwgODE6IFsyLCA5MF0sIDgyOiBbMiwgOTBdLCA4MzogWzIsIDkwXSwgODQ6IFsyLCA5MF0sIDg1OiBbMiwgOTBdIH0sIHsgMjA6IDc1LCAzMzogWzIsIDgwXSwgNTA6IDcyLCA2MzogNzMsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY5OiA3NCwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNzI6IFsxLCA4MF0gfSwgeyAyMzogWzIsIDQyXSwgMzM6IFsyLCA0Ml0sIDU0OiBbMiwgNDJdLCA2NTogWzIsIDQyXSwgNjg6IFsyLCA0Ml0sIDcyOiBbMiwgNDJdLCA3NTogWzIsIDQyXSwgODA6IFsyLCA0Ml0sIDgxOiBbMiwgNDJdLCA4MjogWzIsIDQyXSwgODM6IFsyLCA0Ml0sIDg0OiBbMiwgNDJdLCA4NTogWzIsIDQyXSwgODc6IFsxLCA1MV0gfSwgeyAyMDogNzUsIDUzOiA4MSwgNTQ6IFsyLCA4NF0sIDYzOiA4MiwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDgzLCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyNjogODQsIDQ3OiBbMSwgNjddIH0sIHsgNDc6IFsyLCA1NV0gfSwgeyA0OiA4NSwgNjogMywgMTQ6IFsyLCA0Nl0sIDE1OiBbMiwgNDZdLCAxOTogWzIsIDQ2XSwgMjk6IFsyLCA0Nl0sIDM0OiBbMiwgNDZdLCAzOTogWzIsIDQ2XSwgNDQ6IFsyLCA0Nl0sIDQ3OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDQ3OiBbMiwgMjBdIH0sIHsgMjA6IDg2LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDQ6IDg3LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDQ3OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDI2OiA4OCwgNDc6IFsxLCA2N10gfSwgeyA0NzogWzIsIDU3XSB9LCB7IDU6IFsyLCAxMV0sIDE0OiBbMiwgMTFdLCAxNTogWzIsIDExXSwgMTk6IFsyLCAxMV0sIDI5OiBbMiwgMTFdLCAzNDogWzIsIDExXSwgMzk6IFsyLCAxMV0sIDQ0OiBbMiwgMTFdLCA0NzogWzIsIDExXSwgNDg6IFsyLCAxMV0sIDUxOiBbMiwgMTFdLCA1NTogWzIsIDExXSwgNjA6IFsyLCAxMV0gfSwgeyAxNTogWzIsIDQ5XSwgMTg6IFsyLCA0OV0gfSwgeyAyMDogNzUsIDMzOiBbMiwgODhdLCA1ODogODksIDYzOiA5MCwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDkxLCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA2NTogWzIsIDk0XSwgNjY6IDkyLCA2ODogWzIsIDk0XSwgNzI6IFsyLCA5NF0sIDgwOiBbMiwgOTRdLCA4MTogWzIsIDk0XSwgODI6IFsyLCA5NF0sIDgzOiBbMiwgOTRdLCA4NDogWzIsIDk0XSwgODU6IFsyLCA5NF0gfSwgeyA1OiBbMiwgMjVdLCAxNDogWzIsIDI1XSwgMTU6IFsyLCAyNV0sIDE5OiBbMiwgMjVdLCAyOTogWzIsIDI1XSwgMzQ6IFsyLCAyNV0sIDM5OiBbMiwgMjVdLCA0NDogWzIsIDI1XSwgNDc6IFsyLCAyNV0sIDQ4OiBbMiwgMjVdLCA1MTogWzIsIDI1XSwgNTU6IFsyLCAyNV0sIDYwOiBbMiwgMjVdIH0sIHsgMjA6IDkzLCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA3NSwgMzE6IDk0LCAzMzogWzIsIDYwXSwgNjM6IDk1LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogOTYsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzU6IFsyLCA2MF0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNzUsIDMzOiBbMiwgNjZdLCAzNjogOTcsIDYzOiA5OCwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDk5LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc1OiBbMiwgNjZdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDc1LCAyMjogMTAwLCAyMzogWzIsIDUyXSwgNjM6IDEwMSwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDEwMiwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDc1LCAzMzogWzIsIDkyXSwgNjI6IDEwMywgNjM6IDEwNCwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDEwNSwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMzM6IFsxLCAxMDZdIH0sIHsgMzM6IFsyLCA3OV0sIDY1OiBbMiwgNzldLCA3MjogWzIsIDc5XSwgODA6IFsyLCA3OV0sIDgxOiBbMiwgNzldLCA4MjogWzIsIDc5XSwgODM6IFsyLCA3OV0sIDg0OiBbMiwgNzldLCA4NTogWzIsIDc5XSB9LCB7IDMzOiBbMiwgODFdIH0sIHsgMjM6IFsyLCAyN10sIDMzOiBbMiwgMjddLCA1NDogWzIsIDI3XSwgNjU6IFsyLCAyN10sIDY4OiBbMiwgMjddLCA3MjogWzIsIDI3XSwgNzU6IFsyLCAyN10sIDgwOiBbMiwgMjddLCA4MTogWzIsIDI3XSwgODI6IFsyLCAyN10sIDgzOiBbMiwgMjddLCA4NDogWzIsIDI3XSwgODU6IFsyLCAyN10gfSwgeyAyMzogWzIsIDI4XSwgMzM6IFsyLCAyOF0sIDU0OiBbMiwgMjhdLCA2NTogWzIsIDI4XSwgNjg6IFsyLCAyOF0sIDcyOiBbMiwgMjhdLCA3NTogWzIsIDI4XSwgODA6IFsyLCAyOF0sIDgxOiBbMiwgMjhdLCA4MjogWzIsIDI4XSwgODM6IFsyLCAyOF0sIDg0OiBbMiwgMjhdLCA4NTogWzIsIDI4XSB9LCB7IDIzOiBbMiwgMzBdLCAzMzogWzIsIDMwXSwgNTQ6IFsyLCAzMF0sIDY4OiBbMiwgMzBdLCA3MTogMTA3LCA3MjogWzEsIDEwOF0sIDc1OiBbMiwgMzBdIH0sIHsgMjM6IFsyLCA5OF0sIDMzOiBbMiwgOThdLCA1NDogWzIsIDk4XSwgNjg6IFsyLCA5OF0sIDcyOiBbMiwgOThdLCA3NTogWzIsIDk4XSB9LCB7IDIzOiBbMiwgNDVdLCAzMzogWzIsIDQ1XSwgNTQ6IFsyLCA0NV0sIDY1OiBbMiwgNDVdLCA2ODogWzIsIDQ1XSwgNzI6IFsyLCA0NV0sIDczOiBbMSwgMTA5XSwgNzU6IFsyLCA0NV0sIDgwOiBbMiwgNDVdLCA4MTogWzIsIDQ1XSwgODI6IFsyLCA0NV0sIDgzOiBbMiwgNDVdLCA4NDogWzIsIDQ1XSwgODU6IFsyLCA0NV0sIDg3OiBbMiwgNDVdIH0sIHsgMjM6IFsyLCA0NF0sIDMzOiBbMiwgNDRdLCA1NDogWzIsIDQ0XSwgNjU6IFsyLCA0NF0sIDY4OiBbMiwgNDRdLCA3MjogWzIsIDQ0XSwgNzU6IFsyLCA0NF0sIDgwOiBbMiwgNDRdLCA4MTogWzIsIDQ0XSwgODI6IFsyLCA0NF0sIDgzOiBbMiwgNDRdLCA4NDogWzIsIDQ0XSwgODU6IFsyLCA0NF0sIDg3OiBbMiwgNDRdIH0sIHsgNTQ6IFsxLCAxMTBdIH0sIHsgNTQ6IFsyLCA4M10sIDY1OiBbMiwgODNdLCA3MjogWzIsIDgzXSwgODA6IFsyLCA4M10sIDgxOiBbMiwgODNdLCA4MjogWzIsIDgzXSwgODM6IFsyLCA4M10sIDg0OiBbMiwgODNdLCA4NTogWzIsIDgzXSB9LCB7IDU0OiBbMiwgODVdIH0sIHsgNTogWzIsIDEzXSwgMTQ6IFsyLCAxM10sIDE1OiBbMiwgMTNdLCAxOTogWzIsIDEzXSwgMjk6IFsyLCAxM10sIDM0OiBbMiwgMTNdLCAzOTogWzIsIDEzXSwgNDQ6IFsyLCAxM10sIDQ3OiBbMiwgMTNdLCA0ODogWzIsIDEzXSwgNTE6IFsyLCAxM10sIDU1OiBbMiwgMTNdLCA2MDogWzIsIDEzXSB9LCB7IDM4OiA1NiwgMzk6IFsxLCA1OF0sIDQzOiA1NywgNDQ6IFsxLCA1OV0sIDQ1OiAxMTIsIDQ2OiAxMTEsIDQ3OiBbMiwgNzZdIH0sIHsgMzM6IFsyLCA3MF0sIDQwOiAxMTMsIDY1OiBbMiwgNzBdLCA3MjogWzIsIDcwXSwgNzU6IFsyLCA3MF0sIDgwOiBbMiwgNzBdLCA4MTogWzIsIDcwXSwgODI6IFsyLCA3MF0sIDgzOiBbMiwgNzBdLCA4NDogWzIsIDcwXSwgODU6IFsyLCA3MF0gfSwgeyA0NzogWzIsIDE4XSB9LCB7IDU6IFsyLCAxNF0sIDE0OiBbMiwgMTRdLCAxNTogWzIsIDE0XSwgMTk6IFsyLCAxNF0sIDI5OiBbMiwgMTRdLCAzNDogWzIsIDE0XSwgMzk6IFsyLCAxNF0sIDQ0OiBbMiwgMTRdLCA0NzogWzIsIDE0XSwgNDg6IFsyLCAxNF0sIDUxOiBbMiwgMTRdLCA1NTogWzIsIDE0XSwgNjA6IFsyLCAxNF0gfSwgeyAzMzogWzEsIDExNF0gfSwgeyAzMzogWzIsIDg3XSwgNjU6IFsyLCA4N10sIDcyOiBbMiwgODddLCA4MDogWzIsIDg3XSwgODE6IFsyLCA4N10sIDgyOiBbMiwgODddLCA4MzogWzIsIDg3XSwgODQ6IFsyLCA4N10sIDg1OiBbMiwgODddIH0sIHsgMzM6IFsyLCA4OV0gfSwgeyAyMDogNzUsIDYzOiAxMTYsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY3OiAxMTUsIDY4OiBbMiwgOTZdLCA2OTogMTE3LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAzMzogWzEsIDExOF0gfSwgeyAzMjogMTE5LCAzMzogWzIsIDYyXSwgNzQ6IDEyMCwgNzU6IFsxLCAxMjFdIH0sIHsgMzM6IFsyLCA1OV0sIDY1OiBbMiwgNTldLCA3MjogWzIsIDU5XSwgNzU6IFsyLCA1OV0sIDgwOiBbMiwgNTldLCA4MTogWzIsIDU5XSwgODI6IFsyLCA1OV0sIDgzOiBbMiwgNTldLCA4NDogWzIsIDU5XSwgODU6IFsyLCA1OV0gfSwgeyAzMzogWzIsIDYxXSwgNzU6IFsyLCA2MV0gfSwgeyAzMzogWzIsIDY4XSwgMzc6IDEyMiwgNzQ6IDEyMywgNzU6IFsxLCAxMjFdIH0sIHsgMzM6IFsyLCA2NV0sIDY1OiBbMiwgNjVdLCA3MjogWzIsIDY1XSwgNzU6IFsyLCA2NV0sIDgwOiBbMiwgNjVdLCA4MTogWzIsIDY1XSwgODI6IFsyLCA2NV0sIDgzOiBbMiwgNjVdLCA4NDogWzIsIDY1XSwgODU6IFsyLCA2NV0gfSwgeyAzMzogWzIsIDY3XSwgNzU6IFsyLCA2N10gfSwgeyAyMzogWzEsIDEyNF0gfSwgeyAyMzogWzIsIDUxXSwgNjU6IFsyLCA1MV0sIDcyOiBbMiwgNTFdLCA4MDogWzIsIDUxXSwgODE6IFsyLCA1MV0sIDgyOiBbMiwgNTFdLCA4MzogWzIsIDUxXSwgODQ6IFsyLCA1MV0sIDg1OiBbMiwgNTFdIH0sIHsgMjM6IFsyLCA1M10gfSwgeyAzMzogWzEsIDEyNV0gfSwgeyAzMzogWzIsIDkxXSwgNjU6IFsyLCA5MV0sIDcyOiBbMiwgOTFdLCA4MDogWzIsIDkxXSwgODE6IFsyLCA5MV0sIDgyOiBbMiwgOTFdLCA4MzogWzIsIDkxXSwgODQ6IFsyLCA5MV0sIDg1OiBbMiwgOTFdIH0sIHsgMzM6IFsyLCA5M10gfSwgeyA1OiBbMiwgMjJdLCAxNDogWzIsIDIyXSwgMTU6IFsyLCAyMl0sIDE5OiBbMiwgMjJdLCAyOTogWzIsIDIyXSwgMzQ6IFsyLCAyMl0sIDM5OiBbMiwgMjJdLCA0NDogWzIsIDIyXSwgNDc6IFsyLCAyMl0sIDQ4OiBbMiwgMjJdLCA1MTogWzIsIDIyXSwgNTU6IFsyLCAyMl0sIDYwOiBbMiwgMjJdIH0sIHsgMjM6IFsyLCA5OV0sIDMzOiBbMiwgOTldLCA1NDogWzIsIDk5XSwgNjg6IFsyLCA5OV0sIDcyOiBbMiwgOTldLCA3NTogWzIsIDk5XSB9LCB7IDczOiBbMSwgMTA5XSB9LCB7IDIwOiA3NSwgNjM6IDEyNiwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA1OiBbMiwgMjNdLCAxNDogWzIsIDIzXSwgMTU6IFsyLCAyM10sIDE5OiBbMiwgMjNdLCAyOTogWzIsIDIzXSwgMzQ6IFsyLCAyM10sIDM5OiBbMiwgMjNdLCA0NDogWzIsIDIzXSwgNDc6IFsyLCAyM10sIDQ4OiBbMiwgMjNdLCA1MTogWzIsIDIzXSwgNTU6IFsyLCAyM10sIDYwOiBbMiwgMjNdIH0sIHsgNDc6IFsyLCAxOV0gfSwgeyA0NzogWzIsIDc3XSB9LCB7IDIwOiA3NSwgMzM6IFsyLCA3Ml0sIDQxOiAxMjcsIDYzOiAxMjgsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY5OiAxMjksIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzU6IFsyLCA3Ml0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA1OiBbMiwgMjRdLCAxNDogWzIsIDI0XSwgMTU6IFsyLCAyNF0sIDE5OiBbMiwgMjRdLCAyOTogWzIsIDI0XSwgMzQ6IFsyLCAyNF0sIDM5OiBbMiwgMjRdLCA0NDogWzIsIDI0XSwgNDc6IFsyLCAyNF0sIDQ4OiBbMiwgMjRdLCA1MTogWzIsIDI0XSwgNTU6IFsyLCAyNF0sIDYwOiBbMiwgMjRdIH0sIHsgNjg6IFsxLCAxMzBdIH0sIHsgNjU6IFsyLCA5NV0sIDY4OiBbMiwgOTVdLCA3MjogWzIsIDk1XSwgODA6IFsyLCA5NV0sIDgxOiBbMiwgOTVdLCA4MjogWzIsIDk1XSwgODM6IFsyLCA5NV0sIDg0OiBbMiwgOTVdLCA4NTogWzIsIDk1XSB9LCB7IDY4OiBbMiwgOTddIH0sIHsgNTogWzIsIDIxXSwgMTQ6IFsyLCAyMV0sIDE1OiBbMiwgMjFdLCAxOTogWzIsIDIxXSwgMjk6IFsyLCAyMV0sIDM0OiBbMiwgMjFdLCAzOTogWzIsIDIxXSwgNDQ6IFsyLCAyMV0sIDQ3OiBbMiwgMjFdLCA0ODogWzIsIDIxXSwgNTE6IFsyLCAyMV0sIDU1OiBbMiwgMjFdLCA2MDogWzIsIDIxXSB9LCB7IDMzOiBbMSwgMTMxXSB9LCB7IDMzOiBbMiwgNjNdIH0sIHsgNzI6IFsxLCAxMzNdLCA3NjogMTMyIH0sIHsgMzM6IFsxLCAxMzRdIH0sIHsgMzM6IFsyLCA2OV0gfSwgeyAxNTogWzIsIDEyXSB9LCB7IDE0OiBbMiwgMjZdLCAxNTogWzIsIDI2XSwgMTk6IFsyLCAyNl0sIDI5OiBbMiwgMjZdLCAzNDogWzIsIDI2XSwgNDc6IFsyLCAyNl0sIDQ4OiBbMiwgMjZdLCA1MTogWzIsIDI2XSwgNTU6IFsyLCAyNl0sIDYwOiBbMiwgMjZdIH0sIHsgMjM6IFsyLCAzMV0sIDMzOiBbMiwgMzFdLCA1NDogWzIsIDMxXSwgNjg6IFsyLCAzMV0sIDcyOiBbMiwgMzFdLCA3NTogWzIsIDMxXSB9LCB7IDMzOiBbMiwgNzRdLCA0MjogMTM1LCA3NDogMTM2LCA3NTogWzEsIDEyMV0gfSwgeyAzMzogWzIsIDcxXSwgNjU6IFsyLCA3MV0sIDcyOiBbMiwgNzFdLCA3NTogWzIsIDcxXSwgODA6IFsyLCA3MV0sIDgxOiBbMiwgNzFdLCA4MjogWzIsIDcxXSwgODM6IFsyLCA3MV0sIDg0OiBbMiwgNzFdLCA4NTogWzIsIDcxXSB9LCB7IDMzOiBbMiwgNzNdLCA3NTogWzIsIDczXSB9LCB7IDIzOiBbMiwgMjldLCAzMzogWzIsIDI5XSwgNTQ6IFsyLCAyOV0sIDY1OiBbMiwgMjldLCA2ODogWzIsIDI5XSwgNzI6IFsyLCAyOV0sIDc1OiBbMiwgMjldLCA4MDogWzIsIDI5XSwgODE6IFsyLCAyOV0sIDgyOiBbMiwgMjldLCA4MzogWzIsIDI5XSwgODQ6IFsyLCAyOV0sIDg1OiBbMiwgMjldIH0sIHsgMTQ6IFsyLCAxNV0sIDE1OiBbMiwgMTVdLCAxOTogWzIsIDE1XSwgMjk6IFsyLCAxNV0sIDM0OiBbMiwgMTVdLCAzOTogWzIsIDE1XSwgNDQ6IFsyLCAxNV0sIDQ3OiBbMiwgMTVdLCA0ODogWzIsIDE1XSwgNTE6IFsyLCAxNV0sIDU1OiBbMiwgMTVdLCA2MDogWzIsIDE1XSB9LCB7IDcyOiBbMSwgMTM4XSwgNzc6IFsxLCAxMzddIH0sIHsgNzI6IFsyLCAxMDBdLCA3NzogWzIsIDEwMF0gfSwgeyAxNDogWzIsIDE2XSwgMTU6IFsyLCAxNl0sIDE5OiBbMiwgMTZdLCAyOTogWzIsIDE2XSwgMzQ6IFsyLCAxNl0sIDQ0OiBbMiwgMTZdLCA0NzogWzIsIDE2XSwgNDg6IFsyLCAxNl0sIDUxOiBbMiwgMTZdLCA1NTogWzIsIDE2XSwgNjA6IFsyLCAxNl0gfSwgeyAzMzogWzEsIDEzOV0gfSwgeyAzMzogWzIsIDc1XSB9LCB7IDMzOiBbMiwgMzJdIH0sIHsgNzI6IFsyLCAxMDFdLCA3NzogWzIsIDEwMV0gfSwgeyAxNDogWzIsIDE3XSwgMTU6IFsyLCAxN10sIDE5OiBbMiwgMTddLCAyOTogWzIsIDE3XSwgMzQ6IFsyLCAxN10sIDM5OiBbMiwgMTddLCA0NDogWzIsIDE3XSwgNDc6IFsyLCAxN10sIDQ4OiBbMiwgMTddLCA1MTogWzIsIDE3XSwgNTU6IFsyLCAxN10sIDYwOiBbMiwgMTddIH1dLFxyXG5cdCAgICAgICAgZGVmYXVsdEFjdGlvbnM6IHsgNDogWzIsIDFdLCA1NTogWzIsIDU1XSwgNTc6IFsyLCAyMF0sIDYxOiBbMiwgNTddLCA3NDogWzIsIDgxXSwgODM6IFsyLCA4NV0sIDg3OiBbMiwgMThdLCA5MTogWzIsIDg5XSwgMTAyOiBbMiwgNTNdLCAxMDU6IFsyLCA5M10sIDExMTogWzIsIDE5XSwgMTEyOiBbMiwgNzddLCAxMTc6IFsyLCA5N10sIDEyMDogWzIsIDYzXSwgMTIzOiBbMiwgNjldLCAxMjQ6IFsyLCAxMl0sIDEzNjogWzIsIDc1XSwgMTM3OiBbMiwgMzJdIH0sXHJcblx0ICAgICAgICBwYXJzZUVycm9yOiBmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xyXG5cdCAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHIpO1xyXG5cdCAgICAgICAgfSxcclxuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShpbnB1dCkge1xyXG5cdCAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuXHQgICAgICAgICAgICAgICAgc3RhY2sgPSBbMF0sXHJcblx0ICAgICAgICAgICAgICAgIHZzdGFjayA9IFtudWxsXSxcclxuXHQgICAgICAgICAgICAgICAgbHN0YWNrID0gW10sXHJcblx0ICAgICAgICAgICAgICAgIHRhYmxlID0gdGhpcy50YWJsZSxcclxuXHQgICAgICAgICAgICAgICAgeXl0ZXh0ID0gXCJcIixcclxuXHQgICAgICAgICAgICAgICAgeXlsaW5lbm8gPSAwLFxyXG5cdCAgICAgICAgICAgICAgICB5eWxlbmcgPSAwLFxyXG5cdCAgICAgICAgICAgICAgICByZWNvdmVyaW5nID0gMCxcclxuXHQgICAgICAgICAgICAgICAgVEVSUk9SID0gMixcclxuXHQgICAgICAgICAgICAgICAgRU9GID0gMTtcclxuXHQgICAgICAgICAgICB0aGlzLmxleGVyLnNldElucHV0KGlucHV0KTtcclxuXHQgICAgICAgICAgICB0aGlzLmxleGVyLnl5ID0gdGhpcy55eTtcclxuXHQgICAgICAgICAgICB0aGlzLnl5LmxleGVyID0gdGhpcy5sZXhlcjtcclxuXHQgICAgICAgICAgICB0aGlzLnl5LnBhcnNlciA9IHRoaXM7XHJcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmxleGVyLnl5bGxvYyA9PSBcInVuZGVmaW5lZFwiKSB0aGlzLmxleGVyLnl5bGxvYyA9IHt9O1xyXG5cdCAgICAgICAgICAgIHZhciB5eWxvYyA9IHRoaXMubGV4ZXIueXlsbG9jO1xyXG5cdCAgICAgICAgICAgIGxzdGFjay5wdXNoKHl5bG9jKTtcclxuXHQgICAgICAgICAgICB2YXIgcmFuZ2VzID0gdGhpcy5sZXhlci5vcHRpb25zICYmIHRoaXMubGV4ZXIub3B0aW9ucy5yYW5nZXM7XHJcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnl5LnBhcnNlRXJyb3IgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5wYXJzZUVycm9yID0gdGhpcy55eS5wYXJzZUVycm9yO1xyXG5cdCAgICAgICAgICAgIGZ1bmN0aW9uIHBvcFN0YWNrKG4pIHtcclxuXHQgICAgICAgICAgICAgICAgc3RhY2subGVuZ3RoID0gc3RhY2subGVuZ3RoIC0gMiAqIG47XHJcblx0ICAgICAgICAgICAgICAgIHZzdGFjay5sZW5ndGggPSB2c3RhY2subGVuZ3RoIC0gbjtcclxuXHQgICAgICAgICAgICAgICAgbHN0YWNrLmxlbmd0aCA9IGxzdGFjay5sZW5ndGggLSBuO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICBmdW5jdGlvbiBsZXgoKSB7XHJcblx0ICAgICAgICAgICAgICAgIHZhciB0b2tlbjtcclxuXHQgICAgICAgICAgICAgICAgdG9rZW4gPSBzZWxmLmxleGVyLmxleCgpIHx8IDE7XHJcblx0ICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gIT09IFwibnVtYmVyXCIpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHRva2VuID0gc2VsZi5zeW1ib2xzX1t0b2tlbl0gfHwgdG9rZW47XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICB2YXIgc3ltYm9sLFxyXG5cdCAgICAgICAgICAgICAgICBwcmVFcnJvclN5bWJvbCxcclxuXHQgICAgICAgICAgICAgICAgc3RhdGUsXHJcblx0ICAgICAgICAgICAgICAgIGFjdGlvbixcclxuXHQgICAgICAgICAgICAgICAgYSxcclxuXHQgICAgICAgICAgICAgICAgcixcclxuXHQgICAgICAgICAgICAgICAgeXl2YWwgPSB7fSxcclxuXHQgICAgICAgICAgICAgICAgcCxcclxuXHQgICAgICAgICAgICAgICAgbGVuLFxyXG5cdCAgICAgICAgICAgICAgICBuZXdTdGF0ZSxcclxuXHQgICAgICAgICAgICAgICAgZXhwZWN0ZWQ7XHJcblx0ICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuXHQgICAgICAgICAgICAgICAgc3RhdGUgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcclxuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXTtcclxuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wgPT09IG51bGwgfHwgdHlwZW9mIHN5bWJvbCA9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sID0gbGV4KCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB0YWJsZVtzdGF0ZV0gJiYgdGFibGVbc3RhdGVdW3N5bWJvbF07XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09IFwidW5kZWZpbmVkXCIgfHwgIWFjdGlvbi5sZW5ndGggfHwgIWFjdGlvblswXSkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGVyclN0ciA9IFwiXCI7XHJcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIXJlY292ZXJpbmcpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZCA9IFtdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocCBpbiB0YWJsZVtzdGF0ZV0pIGlmICh0aGlzLnRlcm1pbmFsc19bcF0gJiYgcCA+IDIpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQucHVzaChcIidcIiArIHRoaXMudGVybWluYWxzX1twXSArIFwiJ1wiKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4ZXIuc2hvd1Bvc2l0aW9uKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyclN0ciA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArICh5eWxpbmVubyArIDEpICsgXCI6XFxuXCIgKyB0aGlzLmxleGVyLnNob3dQb3NpdGlvbigpICsgXCJcXG5FeHBlY3RpbmcgXCIgKyBleHBlY3RlZC5qb2luKFwiLCBcIikgKyBcIiwgZ290ICdcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCI7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArIChzeW1ib2wgPT0gMSA/IFwiZW5kIG9mIGlucHV0XCIgOiBcIidcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCIpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IoZXJyU3RyLCB7IHRleHQ6IHRoaXMubGV4ZXIubWF0Y2gsIHRva2VuOiB0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wsIGxpbmU6IHRoaXMubGV4ZXIueXlsaW5lbm8sIGxvYzogeXlsb2MsIGV4cGVjdGVkOiBleHBlY3RlZCB9KTtcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICBpZiAoYWN0aW9uWzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgYWN0aW9uLmxlbmd0aCA+IDEpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArIHN0YXRlICsgXCIsIHRva2VuOiBcIiArIHN5bWJvbCk7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb25bMF0pIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHN5bWJvbCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdnN0YWNrLnB1c2godGhpcy5sZXhlci55eXRleHQpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxzdGFjay5wdXNoKHRoaXMubGV4ZXIueXlsbG9jKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGFjdGlvblsxXSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sID0gbnVsbDtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXByZUVycm9yU3ltYm9sKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5bGVuZyA9IHRoaXMubGV4ZXIueXlsZW5nO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eXRleHQgPSB0aGlzLmxleGVyLnl5dGV4dDtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsaW5lbm8gPSB0aGlzLmxleGVyLnl5bGluZW5vO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eWxvYyA9IHRoaXMubGV4ZXIueXlsbG9jO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3ZlcmluZyA+IDApIHJlY292ZXJpbmctLTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wgPSBwcmVFcnJvclN5bWJvbDtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlRXJyb3JTeW1ib2wgPSBudWxsO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsZW4gPSB0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzFdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHl5dmFsLiQgPSB2c3RhY2tbdnN0YWNrLmxlbmd0aCAtIGxlbl07XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgeXl2YWwuXyQgPSB7IGZpcnN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfbGluZSwgbGFzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfbGluZSwgZmlyc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2NvbHVtbiwgbGFzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW4gfTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2VzKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5dmFsLl8kLnJhbmdlID0gW2xzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0ucmFuZ2VbMF0sIGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ucmFuZ2VbMV1dO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICByID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwoeXl2YWwsIHl5dGV4dCwgeXlsZW5nLCB5eWxpbmVubywgdGhpcy55eSwgYWN0aW9uWzFdLCB2c3RhY2ssIGxzdGFjayk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVuKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrID0gc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4gKiAyKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnN0YWNrID0gdnN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgbHN0YWNrID0gbHN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCh0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzBdKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB2c3RhY2sucHVzaCh5eXZhbC4kKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsc3RhY2sucHVzaCh5eXZhbC5fJCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGUgPSB0YWJsZVtzdGFja1tzdGFjay5sZW5ndGggLSAyXV1bc3RhY2tbc3RhY2subGVuZ3RoIC0gMV1dO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gobmV3U3RhdGUpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9O1xyXG5cdCAgICAvKiBKaXNvbiBnZW5lcmF0ZWQgbGV4ZXIgKi9cclxuXHQgICAgdmFyIGxleGVyID0gKGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgIHZhciBsZXhlciA9IHsgRU9GOiAxLFxyXG5cdCAgICAgICAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XHJcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLnl5LnBhcnNlcikge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcihzdHIsIGhhc2gpO1xyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cik7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICB9LFxyXG5cdCAgICAgICAgICAgIHNldElucHV0OiBmdW5jdGlvbiBzZXRJbnB1dChpbnB1dCkge1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9tb3JlID0gdGhpcy5fbGVzcyA9IHRoaXMuZG9uZSA9IGZhbHNlO1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5bGluZW5vID0gdGhpcy55eWxlbmcgPSAwO1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2ggPSAnJztcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjayA9IFsnSU5JVElBTCddO1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYyA9IHsgZmlyc3RfbGluZTogMSwgZmlyc3RfY29sdW1uOiAwLCBsYXN0X2xpbmU6IDEsIGxhc3RfY29sdW1uOiAwIH07XHJcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB0aGlzLnl5bGxvYy5yYW5nZSA9IFswLCAwXTtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xyXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuXHQgICAgICAgICAgICB9LFxyXG5cdCAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiBpbnB1dCgpIHtcclxuXHQgICAgICAgICAgICAgICAgdmFyIGNoID0gdGhpcy5faW5wdXRbMF07XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ICs9IGNoO1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5bGVuZysrO1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCsrO1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLm1hdGNoICs9IGNoO1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZWQgKz0gY2g7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBsaW5lcyA9IGNoLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcclxuXHQgICAgICAgICAgICAgICAgaWYgKGxpbmVzKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGluZW5vKys7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKztcclxuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfY29sdW1uKys7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHRoaXMueXlsbG9jLnJhbmdlWzFdKys7XHJcblxyXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpO1xyXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gY2g7XHJcblx0ICAgICAgICAgICAgfSxcclxuXHQgICAgICAgICAgICB1bnB1dDogZnVuY3Rpb24gdW5wdXQoY2gpIHtcclxuXHQgICAgICAgICAgICAgICAgdmFyIGxlbiA9IGNoLmxlbmd0aDtcclxuXHQgICAgICAgICAgICAgICAgdmFyIGxpbmVzID0gY2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gY2ggKyB0aGlzLl9pbnB1dDtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLnl5dGV4dC5zdWJzdHIoMCwgdGhpcy55eXRleHQubGVuZ3RoIC0gbGVuIC0gMSk7XHJcblx0ICAgICAgICAgICAgICAgIC8vdGhpcy55eWxlbmcgLT0gbGVuO1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCAtPSBsZW47XHJcblx0ICAgICAgICAgICAgICAgIHZhciBvbGRMaW5lcyA9IHRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoIC0gMSk7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCAtIDEpIHRoaXMueXlsaW5lbm8gLT0gbGluZXMubGVuZ3RoIC0gMTtcclxuXHQgICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLnl5bGxvYy5yYW5nZTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jID0geyBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcclxuXHQgICAgICAgICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID8gKGxpbmVzLmxlbmd0aCA9PT0gb2xkTGluZXMubGVuZ3RoID8gdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIDogMCkgKyBvbGRMaW5lc1tvbGRMaW5lcy5sZW5ndGggLSBsaW5lcy5sZW5ndGhdLmxlbmd0aCAtIGxpbmVzWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiAtIGxlblxyXG5cdCAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3JbMF0sIHJbMF0gKyB0aGlzLnl5bGVuZyAtIGxlbl07XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcblx0ICAgICAgICAgICAgfSxcclxuXHQgICAgICAgICAgICBtb3JlOiBmdW5jdGlvbiBtb3JlKCkge1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9tb3JlID0gdHJ1ZTtcclxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcblx0ICAgICAgICAgICAgfSxcclxuXHQgICAgICAgICAgICBsZXNzOiBmdW5jdGlvbiBsZXNzKG4pIHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKG4pKTtcclxuXHQgICAgICAgICAgICB9LFxyXG5cdCAgICAgICAgICAgIHBhc3RJbnB1dDogZnVuY3Rpb24gcGFzdElucHV0KCkge1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgcGFzdCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIHRoaXMubWF0Y2gubGVuZ3RoKTtcclxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIChwYXN0Lmxlbmd0aCA+IDIwID8gJy4uLicgOiAnJykgKyBwYXN0LnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcclxuXHQgICAgICAgICAgICB9LFxyXG5cdCAgICAgICAgICAgIHVwY29taW5nSW5wdXQ6IGZ1bmN0aW9uIHVwY29taW5nSW5wdXQoKSB7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gdGhpcy5tYXRjaDtcclxuXHQgICAgICAgICAgICAgICAgaWYgKG5leHQubGVuZ3RoIDwgMjApIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIG5leHQgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwIC0gbmV4dC5sZW5ndGgpO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgIHJldHVybiAobmV4dC5zdWJzdHIoMCwgMjApICsgKG5leHQubGVuZ3RoID4gMjAgPyAnLi4uJyA6ICcnKSkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xyXG5cdCAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgc2hvd1Bvc2l0aW9uOiBmdW5jdGlvbiBzaG93UG9zaXRpb24oKSB7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBwcmUgPSB0aGlzLnBhc3RJbnB1dCgpO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShwcmUubGVuZ3RoICsgMSkuam9pbihcIi1cIik7XHJcblx0ICAgICAgICAgICAgICAgIHJldHVybiBwcmUgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIFwiXFxuXCIgKyBjICsgXCJeXCI7XHJcblx0ICAgICAgICAgICAgfSxcclxuXHQgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xyXG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5kb25lKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pbnB1dCkgdGhpcy5kb25lID0gdHJ1ZTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIHZhciB0b2tlbiwgbWF0Y2gsIHRlbXBNYXRjaCwgaW5kZXgsIGNvbCwgbGluZXM7XHJcblx0ICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbW9yZSkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eXRleHQgPSAnJztcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2ggPSAnJztcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICB2YXIgcnVsZXMgPSB0aGlzLl9jdXJyZW50UnVsZXMoKTtcclxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdGVtcE1hdGNoID0gdGhpcy5faW5wdXQubWF0Y2godGhpcy5ydWxlc1tydWxlc1tpXV0pO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBNYXRjaCAmJiAoIW1hdGNoIHx8IHRlbXBNYXRjaFswXS5sZW5ndGggPiBtYXRjaFswXS5sZW5ndGgpKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0ZW1wTWF0Y2g7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmZsZXgpIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgbGluZXMgPSBtYXRjaFswXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBpZiAobGluZXMpIHRoaXMueXlsaW5lbm8gKz0gbGluZXMubGVuZ3RoO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MgPSB7IGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmxhc3RfbGluZSxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4sXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID8gbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubWF0Y2goL1xccj9cXG4/LylbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4gKyBtYXRjaFswXS5sZW5ndGggfTtcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ICs9IG1hdGNoWzBdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaCArPSBtYXRjaFswXTtcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IG1hdGNoO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGg7XHJcblx0ICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ107XHJcblx0ICAgICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3JlID0gZmFsc2U7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKG1hdGNoWzBdLmxlbmd0aCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZWQgKz0gbWF0Y2hbMF07XHJcblx0ICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMucGVyZm9ybUFjdGlvbi5jYWxsKHRoaXMsIHRoaXMueXksIHRoaXMsIHJ1bGVzW2luZGV4XSwgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQpIHRoaXMuZG9uZSA9IGZhbHNlO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuKSByZXR1cm4gdG9rZW47ZWxzZSByZXR1cm47XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBcIlwiKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XHJcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKCdMZXhpY2FsIGVycm9yIG9uIGxpbmUgJyArICh0aGlzLnl5bGluZW5vICsgMSkgKyAnLiBVbnJlY29nbml6ZWQgdGV4dC5cXG4nICsgdGhpcy5zaG93UG9zaXRpb24oKSwgeyB0ZXh0OiBcIlwiLCB0b2tlbjogbnVsbCwgbGluZTogdGhpcy55eWxpbmVubyB9KTtcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgbGV4OiBmdW5jdGlvbiBsZXgoKSB7XHJcblx0ICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5uZXh0KCk7XHJcblx0ICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGV4KCk7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICB9LFxyXG5cdCAgICAgICAgICAgIGJlZ2luOiBmdW5jdGlvbiBiZWdpbihjb25kaXRpb24pIHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjay5wdXNoKGNvbmRpdGlvbik7XHJcblx0ICAgICAgICAgICAgfSxcclxuXHQgICAgICAgICAgICBwb3BTdGF0ZTogZnVuY3Rpb24gcG9wU3RhdGUoKSB7XHJcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLnBvcCgpO1xyXG5cdCAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgX2N1cnJlbnRSdWxlczogZnVuY3Rpb24gX2N1cnJlbnRSdWxlcygpIHtcclxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV1dLnJ1bGVzO1xyXG5cdCAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgdG9wU3RhdGU6IGZ1bmN0aW9uIHRvcFN0YXRlKCkge1xyXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDJdO1xyXG5cdCAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgcHVzaFN0YXRlOiBmdW5jdGlvbiBiZWdpbihjb25kaXRpb24pIHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5iZWdpbihjb25kaXRpb24pO1xyXG5cdCAgICAgICAgICAgIH0gfTtcclxuXHQgICAgICAgIGxleGVyLm9wdGlvbnMgPSB7fTtcclxuXHQgICAgICAgIGxleGVyLnBlcmZvcm1BY3Rpb24gPSBmdW5jdGlvbiBhbm9ueW1vdXMoeXksIHl5XywgJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucywgWVlfU1RBUlRcclxuXHQgICAgICAgIC8qKi8pIHtcclxuXHJcblx0ICAgICAgICAgICAgZnVuY3Rpb24gc3RyaXAoc3RhcnQsIGVuZCkge1xyXG5cdCAgICAgICAgICAgICAgICByZXR1cm4geXlfLnl5dGV4dCA9IHl5Xy55eXRleHQuc3Vic3RyKHN0YXJ0LCB5eV8ueXlsZW5nIC0gZW5kKTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIHZhciBZWVNUQVRFID0gWVlfU1RBUlQ7XHJcblx0ICAgICAgICAgICAgc3dpdGNoICgkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zKSB7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuXHQgICAgICAgICAgICAgICAgICAgIGlmICh5eV8ueXl0ZXh0LnNsaWNlKC0yKSA9PT0gXCJcXFxcXFxcXFwiKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXAoMCwgMSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbihcIm11XCIpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5eV8ueXl0ZXh0LnNsaWNlKC0xKSA9PT0gXCJcXFxcXCIpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcCgwLCAxKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKFwiZW11XCIpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKFwibXVcIik7XHJcblx0ICAgICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoeXlfLnl5dGV4dCkgcmV0dXJuIDE1O1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDE6XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTU7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE1O1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDM6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKCdyYXcnKTtyZXR1cm4gMTU7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIGJlIHVzaW5nIGB0aGlzLnRvcFN0YXRlKClgIGJlbG93LCBidXQgaXQgY3VycmVudGx5XHJcblx0ICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm5zIHRoZSBzZWNvbmQgdG9wIGluc3RlYWQgb2YgdGhlIGZpcnN0IHRvcC4gT3BlbmVkIGFuXHJcblx0ICAgICAgICAgICAgICAgICAgICAvLyBpc3N1ZSBhYm91dCBpdCBhdCBodHRwczovL2dpdGh1Yi5jb20vemFhY2gvamlzb24vaXNzdWVzLzI5MVxyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSA9PT0gJ3JhdycpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTU7XHJcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnN1YnN0cig1LCB5eV8ueXlsZW5nIC0gOSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdFTkRfUkFXX0JMT0NLJztcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE1O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNDtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDY1O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgODpcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA2ODtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDk6XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oJ3JhdycpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDIzO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDExOlxyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDU1O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNjA7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAxMzpcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAyOTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDE0OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDQ3O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTU6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDQ0O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTY6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDQ0O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTc6XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMzQ7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAxODpcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAzOTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDE5OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDUxO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjA6XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNDg7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAyMTpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMudW5wdXQoeXlfLnl5dGV4dCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKCdjb20nKTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAyMjpcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNDtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAyMzpcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA0ODtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDI0OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDczO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjU6XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzI7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAyNjpcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3MjtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDI3OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDg3O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjg6XHJcblx0ICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmUgd2hpdGVzcGFjZVxyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjk6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDU0O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzA6XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDMzO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzE6XHJcblx0ICAgICAgICAgICAgICAgICAgICB5eV8ueXl0ZXh0ID0gc3RyaXAoMSwgMikucmVwbGFjZSgvXFxcXFwiL2csICdcIicpO3JldHVybiA4MDtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDMyOlxyXG5cdCAgICAgICAgICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHN0cmlwKDEsIDIpLnJlcGxhY2UoL1xcXFwnL2csIFwiJ1wiKTtyZXR1cm4gODA7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAzMzpcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4NTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDM0OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDgyO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzU6XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODI7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAzNjpcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4MztcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDM3OlxyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDg0O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzg6XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODE7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSAzOTpcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3NTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICBjYXNlIDQwOlxyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDc3O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDE6XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzI7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA0MjpcclxuXHQgICAgICAgICAgICAgICAgICAgIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnJlcGxhY2UoL1xcXFwoW1xcXFxcXF1dKS9nLCAnJDEnKTtyZXR1cm4gNzI7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA0MzpcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnSU5WQUxJRCc7XHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgY2FzZSA0NDpcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA1O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfTtcclxuXHQgICAgICAgIGxleGVyLnJ1bGVzID0gWy9eKD86W15cXHgwMF0qPyg/PShcXHtcXHspKSkvLCAvXig/OlteXFx4MDBdKykvLCAvXig/OlteXFx4MDBdezIsfT8oPz0oXFx7XFx7fFxcXFxcXHtcXHt8XFxcXFxcXFxcXHtcXHt8JCkpKS8sIC9eKD86XFx7XFx7XFx7XFx7KD89W15cXC9dKSkvLCAvXig/Olxce1xce1xce1xce1xcL1teXFxzIVwiIyUtLFxcLlxcLzstPkBcXFstXFxeYFxcey1+XSsoPz1bPX1cXHNcXC8uXSlcXH1cXH1cXH1cXH0pLywgL14oPzpbXlxceDAwXSo/KD89KFxce1xce1xce1xceykpKS8sIC9eKD86W1xcc1xcU10qPy0tKH4pP1xcfVxcfSkvLCAvXig/OlxcKCkvLCAvXig/OlxcKSkvLCAvXig/Olxce1xce1xce1xceykvLCAvXig/OlxcfVxcfVxcfVxcfSkvLCAvXig/Olxce1xceyh+KT8+KS8sIC9eKD86XFx7XFx7KH4pPyM+KS8sIC9eKD86XFx7XFx7KH4pPyNcXCo/KS8sIC9eKD86XFx7XFx7KH4pP1xcLykvLCAvXig/Olxce1xceyh+KT9cXF5cXHMqKH4pP1xcfVxcfSkvLCAvXig/Olxce1xceyh+KT9cXHMqZWxzZVxccyoofik/XFx9XFx9KS8sIC9eKD86XFx7XFx7KH4pP1xcXikvLCAvXig/Olxce1xceyh+KT9cXHMqZWxzZVxcYikvLCAvXig/Olxce1xceyh+KT9cXHspLywgL14oPzpcXHtcXHsofik/JikvLCAvXig/Olxce1xceyh+KT8hLS0pLywgL14oPzpcXHtcXHsofik/IVtcXHNcXFNdKj9cXH1cXH0pLywgL14oPzpcXHtcXHsofik/XFwqPykvLCAvXig/Oj0pLywgL14oPzpcXC5cXC4pLywgL14oPzpcXC4oPz0oWz1+fVxcc1xcLy4pfF0pKSkvLCAvXig/OltcXC8uXSkvLCAvXig/OlxccyspLywgL14oPzpcXH0ofik/XFx9XFx9KS8sIC9eKD86KH4pP1xcfVxcfSkvLCAvXig/OlwiKFxcXFxbXCJdfFteXCJdKSpcIikvLCAvXig/OicoXFxcXFsnXXxbXiddKSonKS8sIC9eKD86QCkvLCAvXig/OnRydWUoPz0oW359XFxzKV0pKSkvLCAvXig/OmZhbHNlKD89KFt+fVxccyldKSkpLywgL14oPzp1bmRlZmluZWQoPz0oW359XFxzKV0pKSkvLCAvXig/Om51bGwoPz0oW359XFxzKV0pKSkvLCAvXig/Oi0/WzAtOV0rKD86XFwuWzAtOV0rKT8oPz0oW359XFxzKV0pKSkvLCAvXig/OmFzXFxzK1xcfCkvLCAvXig/OlxcfCkvLCAvXig/OihbXlxccyFcIiMlLSxcXC5cXC87LT5AXFxbLVxcXmBcXHstfl0rKD89KFs9fn1cXHNcXC8uKXxdKSkpKS8sIC9eKD86XFxbKFxcXFxcXF18W15cXF1dKSpcXF0pLywgL14oPzouKS8sIC9eKD86JCkvXTtcclxuXHQgICAgICAgIGxleGVyLmNvbmRpdGlvbnMgPSB7IFwibXVcIjogeyBcInJ1bGVzXCI6IFs3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjMsIDI0LCAyNSwgMjYsIDI3LCAyOCwgMjksIDMwLCAzMSwgMzIsIDMzLCAzNCwgMzUsIDM2LCAzNywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDRdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImVtdVwiOiB7IFwicnVsZXNcIjogWzJdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImNvbVwiOiB7IFwicnVsZXNcIjogWzZdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcInJhd1wiOiB7IFwicnVsZXNcIjogWzMsIDQsIDVdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIklOSVRJQUxcIjogeyBcInJ1bGVzXCI6IFswLCAxLCA0NF0sIFwiaW5jbHVzaXZlXCI6IHRydWUgfSB9O1xyXG5cdCAgICAgICAgcmV0dXJuIGxleGVyO1xyXG5cdCAgICB9KSgpO1xyXG5cdCAgICBwYXJzZXIubGV4ZXIgPSBsZXhlcjtcclxuXHQgICAgZnVuY3Rpb24gUGFyc2VyKCkge1xyXG5cdCAgICAgICAgdGhpcy55eSA9IHt9O1xyXG5cdCAgICB9UGFyc2VyLnByb3RvdHlwZSA9IHBhcnNlcjtwYXJzZXIuUGFyc2VyID0gUGFyc2VyO1xyXG5cdCAgICByZXR1cm4gbmV3IFBhcnNlcigpO1xyXG5cdH0pKCk7ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBoYW5kbGViYXJzO1xyXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XHJcblxyXG4vKioqLyB9KSxcclxuLyogMzggKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xyXG5cclxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5cclxuXHR2YXIgX3Zpc2l0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM5KTtcclxuXHJcblx0dmFyIF92aXNpdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Zpc2l0b3IpO1xyXG5cclxuXHRmdW5jdGlvbiBXaGl0ZXNwYWNlQ29udHJvbCgpIHtcclxuXHQgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XHJcblxyXG5cdCAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHR9XHJcblx0V2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlID0gbmV3IF92aXNpdG9yMlsnZGVmYXVsdCddKCk7XHJcblxyXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5Qcm9ncmFtID0gZnVuY3Rpb24gKHByb2dyYW0pIHtcclxuXHQgIHZhciBkb1N0YW5kYWxvbmUgPSAhdGhpcy5vcHRpb25zLmlnbm9yZVN0YW5kYWxvbmU7XHJcblxyXG5cdCAgdmFyIGlzUm9vdCA9ICF0aGlzLmlzUm9vdFNlZW47XHJcblx0ICB0aGlzLmlzUm9vdFNlZW4gPSB0cnVlO1xyXG5cclxuXHQgIHZhciBib2R5ID0gcHJvZ3JhbS5ib2R5O1xyXG5cdCAgZm9yICh2YXIgaSA9IDAsIGwgPSBib2R5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG5cdCAgICB2YXIgY3VycmVudCA9IGJvZHlbaV0sXHJcblx0ICAgICAgICBzdHJpcCA9IHRoaXMuYWNjZXB0KGN1cnJlbnQpO1xyXG5cclxuXHQgICAgaWYgKCFzdHJpcCkge1xyXG5cdCAgICAgIGNvbnRpbnVlO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICB2YXIgX2lzUHJldldoaXRlc3BhY2UgPSBpc1ByZXZXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCksXHJcblx0ICAgICAgICBfaXNOZXh0V2hpdGVzcGFjZSA9IGlzTmV4dFdoaXRlc3BhY2UoYm9keSwgaSwgaXNSb290KSxcclxuXHQgICAgICAgIG9wZW5TdGFuZGFsb25lID0gc3RyaXAub3BlblN0YW5kYWxvbmUgJiYgX2lzUHJldldoaXRlc3BhY2UsXHJcblx0ICAgICAgICBjbG9zZVN0YW5kYWxvbmUgPSBzdHJpcC5jbG9zZVN0YW5kYWxvbmUgJiYgX2lzTmV4dFdoaXRlc3BhY2UsXHJcblx0ICAgICAgICBpbmxpbmVTdGFuZGFsb25lID0gc3RyaXAuaW5saW5lU3RhbmRhbG9uZSAmJiBfaXNQcmV2V2hpdGVzcGFjZSAmJiBfaXNOZXh0V2hpdGVzcGFjZTtcclxuXHJcblx0ICAgIGlmIChzdHJpcC5jbG9zZSkge1xyXG5cdCAgICAgIG9taXRSaWdodChib2R5LCBpLCB0cnVlKTtcclxuXHQgICAgfVxyXG5cdCAgICBpZiAoc3RyaXAub3Blbikge1xyXG5cdCAgICAgIG9taXRMZWZ0KGJvZHksIGksIHRydWUpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpZiAoZG9TdGFuZGFsb25lICYmIGlubGluZVN0YW5kYWxvbmUpIHtcclxuXHQgICAgICBvbWl0UmlnaHQoYm9keSwgaSk7XHJcblxyXG5cdCAgICAgIGlmIChvbWl0TGVmdChib2R5LCBpKSkge1xyXG5cdCAgICAgICAgLy8gSWYgd2UgYXJlIG9uIGEgc3RhbmRhbG9uZSBub2RlLCBzYXZlIHRoZSBpbmRlbnQgaW5mbyBmb3IgcGFydGlhbHNcclxuXHQgICAgICAgIGlmIChjdXJyZW50LnR5cGUgPT09ICdQYXJ0aWFsU3RhdGVtZW50Jykge1xyXG5cdCAgICAgICAgICAvLyBQdWxsIG91dCB0aGUgd2hpdGVzcGFjZSBmcm9tIHRoZSBmaW5hbCBsaW5lXHJcblx0ICAgICAgICAgIGN1cnJlbnQuaW5kZW50ID0gLyhbIFxcdF0rJCkvLmV4ZWMoYm9keVtpIC0gMV0ub3JpZ2luYWwpWzFdO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cdCAgICBpZiAoZG9TdGFuZGFsb25lICYmIG9wZW5TdGFuZGFsb25lKSB7XHJcblx0ICAgICAgb21pdFJpZ2h0KChjdXJyZW50LnByb2dyYW0gfHwgY3VycmVudC5pbnZlcnNlKS5ib2R5KTtcclxuXHJcblx0ICAgICAgLy8gU3RyaXAgb3V0IHRoZSBwcmV2aW91cyBjb250ZW50IG5vZGUgaWYgaXQncyB3aGl0ZXNwYWNlIG9ubHlcclxuXHQgICAgICBvbWl0TGVmdChib2R5LCBpKTtcclxuXHQgICAgfVxyXG5cdCAgICBpZiAoZG9TdGFuZGFsb25lICYmIGNsb3NlU3RhbmRhbG9uZSkge1xyXG5cdCAgICAgIC8vIEFsd2F5cyBzdHJpcCB0aGUgbmV4dCBub2RlXHJcblx0ICAgICAgb21pdFJpZ2h0KGJvZHksIGkpO1xyXG5cclxuXHQgICAgICBvbWl0TGVmdCgoY3VycmVudC5pbnZlcnNlIHx8IGN1cnJlbnQucHJvZ3JhbSkuYm9keSk7XHJcblx0ICAgIH1cclxuXHQgIH1cclxuXHJcblx0ICByZXR1cm4gcHJvZ3JhbTtcclxuXHR9O1xyXG5cclxuXHRXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuQmxvY2tTdGF0ZW1lbnQgPSBXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuRGVjb3JhdG9yQmxvY2sgPSBXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuUGFydGlhbEJsb2NrU3RhdGVtZW50ID0gZnVuY3Rpb24gKGJsb2NrKSB7XHJcblx0ICB0aGlzLmFjY2VwdChibG9jay5wcm9ncmFtKTtcclxuXHQgIHRoaXMuYWNjZXB0KGJsb2NrLmludmVyc2UpO1xyXG5cclxuXHQgIC8vIEZpbmQgdGhlIGludmVyc2UgcHJvZ3JhbSB0aGF0IGlzIGludm9sZWQgd2l0aCB3aGl0ZXNwYWNlIHN0cmlwcGluZy5cclxuXHQgIHZhciBwcm9ncmFtID0gYmxvY2sucHJvZ3JhbSB8fCBibG9jay5pbnZlcnNlLFxyXG5cdCAgICAgIGludmVyc2UgPSBibG9jay5wcm9ncmFtICYmIGJsb2NrLmludmVyc2UsXHJcblx0ICAgICAgZmlyc3RJbnZlcnNlID0gaW52ZXJzZSxcclxuXHQgICAgICBsYXN0SW52ZXJzZSA9IGludmVyc2U7XHJcblxyXG5cdCAgaWYgKGludmVyc2UgJiYgaW52ZXJzZS5jaGFpbmVkKSB7XHJcblx0ICAgIGZpcnN0SW52ZXJzZSA9IGludmVyc2UuYm9keVswXS5wcm9ncmFtO1xyXG5cclxuXHQgICAgLy8gV2FsayB0aGUgaW52ZXJzZSBjaGFpbiB0byBmaW5kIHRoZSBsYXN0IGludmVyc2UgdGhhdCBpcyBhY3R1YWxseSBpbiB0aGUgY2hhaW4uXHJcblx0ICAgIHdoaWxlIChsYXN0SW52ZXJzZS5jaGFpbmVkKSB7XHJcblx0ICAgICAgbGFzdEludmVyc2UgPSBsYXN0SW52ZXJzZS5ib2R5W2xhc3RJbnZlcnNlLmJvZHkubGVuZ3RoIC0gMV0ucHJvZ3JhbTtcclxuXHQgICAgfVxyXG5cdCAgfVxyXG5cclxuXHQgIHZhciBzdHJpcCA9IHtcclxuXHQgICAgb3BlbjogYmxvY2sub3BlblN0cmlwLm9wZW4sXHJcblx0ICAgIGNsb3NlOiBibG9jay5jbG9zZVN0cmlwLmNsb3NlLFxyXG5cclxuXHQgICAgLy8gRGV0ZXJtaW5lIHRoZSBzdGFuZGFsb25lIGNhbmRpYWN5LiBCYXNpY2FsbHkgZmxhZyBvdXIgY29udGVudCBhcyBiZWluZyBwb3NzaWJseSBzdGFuZGFsb25lXHJcblx0ICAgIC8vIHNvIG91ciBwYXJlbnQgY2FuIGRldGVybWluZSBpZiB3ZSBhY3R1YWxseSBhcmUgc3RhbmRhbG9uZVxyXG5cdCAgICBvcGVuU3RhbmRhbG9uZTogaXNOZXh0V2hpdGVzcGFjZShwcm9ncmFtLmJvZHkpLFxyXG5cdCAgICBjbG9zZVN0YW5kYWxvbmU6IGlzUHJldldoaXRlc3BhY2UoKGZpcnN0SW52ZXJzZSB8fCBwcm9ncmFtKS5ib2R5KVxyXG5cdCAgfTtcclxuXHJcblx0ICBpZiAoYmxvY2sub3BlblN0cmlwLmNsb3NlKSB7XHJcblx0ICAgIG9taXRSaWdodChwcm9ncmFtLmJvZHksIG51bGwsIHRydWUpO1xyXG5cdCAgfVxyXG5cclxuXHQgIGlmIChpbnZlcnNlKSB7XHJcblx0ICAgIHZhciBpbnZlcnNlU3RyaXAgPSBibG9jay5pbnZlcnNlU3RyaXA7XHJcblxyXG5cdCAgICBpZiAoaW52ZXJzZVN0cmlwLm9wZW4pIHtcclxuXHQgICAgICBvbWl0TGVmdChwcm9ncmFtLmJvZHksIG51bGwsIHRydWUpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpZiAoaW52ZXJzZVN0cmlwLmNsb3NlKSB7XHJcblx0ICAgICAgb21pdFJpZ2h0KGZpcnN0SW52ZXJzZS5ib2R5LCBudWxsLCB0cnVlKTtcclxuXHQgICAgfVxyXG5cdCAgICBpZiAoYmxvY2suY2xvc2VTdHJpcC5vcGVuKSB7XHJcblx0ICAgICAgb21pdExlZnQobGFzdEludmVyc2UuYm9keSwgbnVsbCwgdHJ1ZSk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIC8vIEZpbmQgc3RhbmRhbG9uZSBlbHNlIHN0YXRtZW50c1xyXG5cdCAgICBpZiAoIXRoaXMub3B0aW9ucy5pZ25vcmVTdGFuZGFsb25lICYmIGlzUHJldldoaXRlc3BhY2UocHJvZ3JhbS5ib2R5KSAmJiBpc05leHRXaGl0ZXNwYWNlKGZpcnN0SW52ZXJzZS5ib2R5KSkge1xyXG5cdCAgICAgIG9taXRMZWZ0KHByb2dyYW0uYm9keSk7XHJcblx0ICAgICAgb21pdFJpZ2h0KGZpcnN0SW52ZXJzZS5ib2R5KTtcclxuXHQgICAgfVxyXG5cdCAgfSBlbHNlIGlmIChibG9jay5jbG9zZVN0cmlwLm9wZW4pIHtcclxuXHQgICAgb21pdExlZnQocHJvZ3JhbS5ib2R5LCBudWxsLCB0cnVlKTtcclxuXHQgIH1cclxuXHJcblx0ICByZXR1cm4gc3RyaXA7XHJcblx0fTtcclxuXHJcblx0V2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLkRlY29yYXRvciA9IFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5NdXN0YWNoZVN0YXRlbWVudCA9IGZ1bmN0aW9uIChtdXN0YWNoZSkge1xyXG5cdCAgcmV0dXJuIG11c3RhY2hlLnN0cmlwO1xyXG5cdH07XHJcblxyXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5QYXJ0aWFsU3RhdGVtZW50ID0gV2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLkNvbW1lbnRTdGF0ZW1lbnQgPSBmdW5jdGlvbiAobm9kZSkge1xyXG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuXHQgIHZhciBzdHJpcCA9IG5vZGUuc3RyaXAgfHwge307XHJcblx0ICByZXR1cm4ge1xyXG5cdCAgICBpbmxpbmVTdGFuZGFsb25lOiB0cnVlLFxyXG5cdCAgICBvcGVuOiBzdHJpcC5vcGVuLFxyXG5cdCAgICBjbG9zZTogc3RyaXAuY2xvc2VcclxuXHQgIH07XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gaXNQcmV2V2hpdGVzcGFjZShib2R5LCBpLCBpc1Jvb3QpIHtcclxuXHQgIGlmIChpID09PSB1bmRlZmluZWQpIHtcclxuXHQgICAgaSA9IGJvZHkubGVuZ3RoO1xyXG5cdCAgfVxyXG5cclxuXHQgIC8vIE5vZGVzIHRoYXQgZW5kIHdpdGggbmV3bGluZXMgYXJlIGNvbnNpZGVyZWQgd2hpdGVzcGFjZSAoYnV0IGFyZSBzcGVjaWFsXHJcblx0ICAvLyBjYXNlZCBmb3Igc3RyaXAgb3BlcmF0aW9ucylcclxuXHQgIHZhciBwcmV2ID0gYm9keVtpIC0gMV0sXHJcblx0ICAgICAgc2libGluZyA9IGJvZHlbaSAtIDJdO1xyXG5cdCAgaWYgKCFwcmV2KSB7XHJcblx0ICAgIHJldHVybiBpc1Jvb3Q7XHJcblx0ICB9XHJcblxyXG5cdCAgaWYgKHByZXYudHlwZSA9PT0gJ0NvbnRlbnRTdGF0ZW1lbnQnKSB7XHJcblx0ICAgIHJldHVybiAoc2libGluZyB8fCAhaXNSb290ID8gL1xccj9cXG5cXHMqPyQvIDogLyhefFxccj9cXG4pXFxzKj8kLykudGVzdChwcmV2Lm9yaWdpbmFsKTtcclxuXHQgIH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gaXNOZXh0V2hpdGVzcGFjZShib2R5LCBpLCBpc1Jvb3QpIHtcclxuXHQgIGlmIChpID09PSB1bmRlZmluZWQpIHtcclxuXHQgICAgaSA9IC0xO1xyXG5cdCAgfVxyXG5cclxuXHQgIHZhciBuZXh0ID0gYm9keVtpICsgMV0sXHJcblx0ICAgICAgc2libGluZyA9IGJvZHlbaSArIDJdO1xyXG5cdCAgaWYgKCFuZXh0KSB7XHJcblx0ICAgIHJldHVybiBpc1Jvb3Q7XHJcblx0ICB9XHJcblxyXG5cdCAgaWYgKG5leHQudHlwZSA9PT0gJ0NvbnRlbnRTdGF0ZW1lbnQnKSB7XHJcblx0ICAgIHJldHVybiAoc2libGluZyB8fCAhaXNSb290ID8gL15cXHMqP1xccj9cXG4vIDogL15cXHMqPyhcXHI/XFxufCQpLykudGVzdChuZXh0Lm9yaWdpbmFsKTtcclxuXHQgIH1cclxuXHR9XHJcblxyXG5cdC8vIE1hcmtzIHRoZSBub2RlIHRvIHRoZSByaWdodCBvZiB0aGUgcG9zaXRpb24gYXMgb21pdHRlZC5cclxuXHQvLyBJLmUuIHt7Zm9vfX0nICcgd2lsbCBtYXJrIHRoZSAnICcgbm9kZSBhcyBvbWl0dGVkLlxyXG5cdC8vXHJcblx0Ly8gSWYgaSBpcyB1bmRlZmluZWQsIHRoZW4gdGhlIGZpcnN0IGNoaWxkIHdpbGwgYmUgbWFya2VkIGFzIHN1Y2guXHJcblx0Ly9cclxuXHQvLyBJZiBtdWxpdHBsZSBpcyB0cnV0aHkgdGhlbiBhbGwgd2hpdGVzcGFjZSB3aWxsIGJlIHN0cmlwcGVkIG91dCB1bnRpbCBub24td2hpdGVzcGFjZVxyXG5cdC8vIGNvbnRlbnQgaXMgbWV0LlxyXG5cdGZ1bmN0aW9uIG9taXRSaWdodChib2R5LCBpLCBtdWx0aXBsZSkge1xyXG5cdCAgdmFyIGN1cnJlbnQgPSBib2R5W2kgPT0gbnVsbCA/IDAgOiBpICsgMV07XHJcblx0ICBpZiAoIWN1cnJlbnQgfHwgY3VycmVudC50eXBlICE9PSAnQ29udGVudFN0YXRlbWVudCcgfHwgIW11bHRpcGxlICYmIGN1cnJlbnQucmlnaHRTdHJpcHBlZCkge1xyXG5cdCAgICByZXR1cm47XHJcblx0ICB9XHJcblxyXG5cdCAgdmFyIG9yaWdpbmFsID0gY3VycmVudC52YWx1ZTtcclxuXHQgIGN1cnJlbnQudmFsdWUgPSBjdXJyZW50LnZhbHVlLnJlcGxhY2UobXVsdGlwbGUgPyAvXlxccysvIDogL15bIFxcdF0qXFxyP1xcbj8vLCAnJyk7XHJcblx0ICBjdXJyZW50LnJpZ2h0U3RyaXBwZWQgPSBjdXJyZW50LnZhbHVlICE9PSBvcmlnaW5hbDtcclxuXHR9XHJcblxyXG5cdC8vIE1hcmtzIHRoZSBub2RlIHRvIHRoZSBsZWZ0IG9mIHRoZSBwb3NpdGlvbiBhcyBvbWl0dGVkLlxyXG5cdC8vIEkuZS4gJyAne3tmb299fSB3aWxsIG1hcmsgdGhlICcgJyBub2RlIGFzIG9taXR0ZWQuXHJcblx0Ly9cclxuXHQvLyBJZiBpIGlzIHVuZGVmaW5lZCB0aGVuIHRoZSBsYXN0IGNoaWxkIHdpbGwgYmUgbWFya2VkIGFzIHN1Y2guXHJcblx0Ly9cclxuXHQvLyBJZiBtdWxpdHBsZSBpcyB0cnV0aHkgdGhlbiBhbGwgd2hpdGVzcGFjZSB3aWxsIGJlIHN0cmlwcGVkIG91dCB1bnRpbCBub24td2hpdGVzcGFjZVxyXG5cdC8vIGNvbnRlbnQgaXMgbWV0LlxyXG5cdGZ1bmN0aW9uIG9taXRMZWZ0KGJvZHksIGksIG11bHRpcGxlKSB7XHJcblx0ICB2YXIgY3VycmVudCA9IGJvZHlbaSA9PSBudWxsID8gYm9keS5sZW5ndGggLSAxIDogaSAtIDFdO1xyXG5cdCAgaWYgKCFjdXJyZW50IHx8IGN1cnJlbnQudHlwZSAhPT0gJ0NvbnRlbnRTdGF0ZW1lbnQnIHx8ICFtdWx0aXBsZSAmJiBjdXJyZW50LmxlZnRTdHJpcHBlZCkge1xyXG5cdCAgICByZXR1cm47XHJcblx0ICB9XHJcblxyXG5cdCAgLy8gV2Ugb21pdCB0aGUgbGFzdCBub2RlIGlmIGl0J3Mgd2hpdGVzcGFjZSBvbmx5IGFuZCBub3QgcHJlY2VlZGVkIGJ5IGEgbm9uLWNvbnRlbnQgbm9kZS5cclxuXHQgIHZhciBvcmlnaW5hbCA9IGN1cnJlbnQudmFsdWU7XHJcblx0ICBjdXJyZW50LnZhbHVlID0gY3VycmVudC52YWx1ZS5yZXBsYWNlKG11bHRpcGxlID8gL1xccyskLyA6IC9bIFxcdF0rJC8sICcnKTtcclxuXHQgIGN1cnJlbnQubGVmdFN0cmlwcGVkID0gY3VycmVudC52YWx1ZSAhPT0gb3JpZ2luYWw7XHJcblx0ICByZXR1cm4gY3VycmVudC5sZWZ0U3RyaXBwZWQ7XHJcblx0fVxyXG5cclxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBXaGl0ZXNwYWNlQ29udHJvbDtcclxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcclxuXHJcbi8qKiovIH0pLFxyXG4vKiAzOSAqL1xyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XHJcblxyXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcblxyXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcclxuXHJcblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcclxuXHJcblx0ZnVuY3Rpb24gVmlzaXRvcigpIHtcclxuXHQgIHRoaXMucGFyZW50cyA9IFtdO1xyXG5cdH1cclxuXHJcblx0VmlzaXRvci5wcm90b3R5cGUgPSB7XHJcblx0ICBjb25zdHJ1Y3RvcjogVmlzaXRvcixcclxuXHQgIG11dGF0aW5nOiBmYWxzZSxcclxuXHJcblx0ICAvLyBWaXNpdHMgYSBnaXZlbiB2YWx1ZS4gSWYgbXV0YXRpbmcsIHdpbGwgcmVwbGFjZSB0aGUgdmFsdWUgaWYgbmVjZXNzYXJ5LlxyXG5cdCAgYWNjZXB0S2V5OiBmdW5jdGlvbiBhY2NlcHRLZXkobm9kZSwgbmFtZSkge1xyXG5cdCAgICB2YXIgdmFsdWUgPSB0aGlzLmFjY2VwdChub2RlW25hbWVdKTtcclxuXHQgICAgaWYgKHRoaXMubXV0YXRpbmcpIHtcclxuXHQgICAgICAvLyBIYWNreSBzYW5pdHkgY2hlY2s6IFRoaXMgbWF5IGhhdmUgYSBmZXcgZmFsc2UgcG9zaXRpdmVzIGZvciB0eXBlIGZvciB0aGUgaGVscGVyXHJcblx0ICAgICAgLy8gbWV0aG9kcyBidXQgd2lsbCBnZW5lcmFsbHkgZG8gdGhlIHJpZ2h0IHRoaW5nIHdpdGhvdXQgYSBsb3Qgb2Ygb3ZlcmhlYWQuXHJcblx0ICAgICAgaWYgKHZhbHVlICYmICFWaXNpdG9yLnByb3RvdHlwZVt2YWx1ZS50eXBlXSkge1xyXG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1VuZXhwZWN0ZWQgbm9kZSB0eXBlIFwiJyArIHZhbHVlLnR5cGUgKyAnXCIgZm91bmQgd2hlbiBhY2NlcHRpbmcgJyArIG5hbWUgKyAnIG9uICcgKyBub2RlLnR5cGUpO1xyXG5cdCAgICAgIH1cclxuXHQgICAgICBub2RlW25hbWVdID0gdmFsdWU7XHJcblx0ICAgIH1cclxuXHQgIH0sXHJcblxyXG5cdCAgLy8gUGVyZm9ybXMgYW4gYWNjZXB0IG9wZXJhdGlvbiB3aXRoIGFkZGVkIHNhbml0eSBjaGVjayB0byBlbnN1cmVcclxuXHQgIC8vIHJlcXVpcmVkIGtleXMgYXJlIG5vdCByZW1vdmVkLlxyXG5cdCAgYWNjZXB0UmVxdWlyZWQ6IGZ1bmN0aW9uIGFjY2VwdFJlcXVpcmVkKG5vZGUsIG5hbWUpIHtcclxuXHQgICAgdGhpcy5hY2NlcHRLZXkobm9kZSwgbmFtZSk7XHJcblxyXG5cdCAgICBpZiAoIW5vZGVbbmFtZV0pIHtcclxuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXShub2RlLnR5cGUgKyAnIHJlcXVpcmVzICcgKyBuYW1lKTtcclxuXHQgICAgfVxyXG5cdCAgfSxcclxuXHJcblx0ICAvLyBUcmF2ZXJzZXMgYSBnaXZlbiBhcnJheS4gSWYgbXV0YXRpbmcsIGVtcHR5IHJlc3Buc2VzIHdpbGwgYmUgcmVtb3ZlZFxyXG5cdCAgLy8gZm9yIGNoaWxkIGVsZW1lbnRzLlxyXG5cdCAgYWNjZXB0QXJyYXk6IGZ1bmN0aW9uIGFjY2VwdEFycmF5KGFycmF5KSB7XHJcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcblx0ICAgICAgdGhpcy5hY2NlcHRLZXkoYXJyYXksIGkpO1xyXG5cclxuXHQgICAgICBpZiAoIWFycmF5W2ldKSB7XHJcblx0ICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XHJcblx0ICAgICAgICBpLS07XHJcblx0ICAgICAgICBsLS07XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblx0ICB9LFxyXG5cclxuXHQgIGFjY2VwdDogZnVuY3Rpb24gYWNjZXB0KG9iamVjdCkge1xyXG5cdCAgICBpZiAoIW9iamVjdCkge1xyXG5cdCAgICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IFNhbml0eSBjb2RlICovXHJcblx0ICAgIGlmICghdGhpc1tvYmplY3QudHlwZV0pIHtcclxuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5rbm93biB0eXBlOiAnICsgb2JqZWN0LnR5cGUsIG9iamVjdCk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmICh0aGlzLmN1cnJlbnQpIHtcclxuXHQgICAgICB0aGlzLnBhcmVudHMudW5zaGlmdCh0aGlzLmN1cnJlbnQpO1xyXG5cdCAgICB9XHJcblx0ICAgIHRoaXMuY3VycmVudCA9IG9iamVjdDtcclxuXHJcblx0ICAgIHZhciByZXQgPSB0aGlzW29iamVjdC50eXBlXShvYmplY3QpO1xyXG5cclxuXHQgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wYXJlbnRzLnNoaWZ0KCk7XHJcblxyXG5cdCAgICBpZiAoIXRoaXMubXV0YXRpbmcgfHwgcmV0KSB7XHJcblx0ICAgICAgcmV0dXJuIHJldDtcclxuXHQgICAgfSBlbHNlIGlmIChyZXQgIT09IGZhbHNlKSB7XHJcblx0ICAgICAgcmV0dXJuIG9iamVjdDtcclxuXHQgICAgfVxyXG5cdCAgfSxcclxuXHJcblx0ICBQcm9ncmFtOiBmdW5jdGlvbiBQcm9ncmFtKHByb2dyYW0pIHtcclxuXHQgICAgdGhpcy5hY2NlcHRBcnJheShwcm9ncmFtLmJvZHkpO1xyXG5cdCAgfSxcclxuXHJcblx0ICBNdXN0YWNoZVN0YXRlbWVudDogdmlzaXRTdWJFeHByZXNzaW9uLFxyXG5cdCAgRGVjb3JhdG9yOiB2aXNpdFN1YkV4cHJlc3Npb24sXHJcblxyXG5cdCAgQmxvY2tTdGF0ZW1lbnQ6IHZpc2l0QmxvY2ssXHJcblx0ICBEZWNvcmF0b3JCbG9jazogdmlzaXRCbG9jayxcclxuXHJcblx0ICBQYXJ0aWFsU3RhdGVtZW50OiB2aXNpdFBhcnRpYWwsXHJcblx0ICBQYXJ0aWFsQmxvY2tTdGF0ZW1lbnQ6IGZ1bmN0aW9uIFBhcnRpYWxCbG9ja1N0YXRlbWVudChwYXJ0aWFsKSB7XHJcblx0ICAgIHZpc2l0UGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwpO1xyXG5cclxuXHQgICAgdGhpcy5hY2NlcHRLZXkocGFydGlhbCwgJ3Byb2dyYW0nKTtcclxuXHQgIH0sXHJcblxyXG5cdCAgQ29udGVudFN0YXRlbWVudDogZnVuY3Rpb24gQ29udGVudFN0YXRlbWVudCgpIC8qIGNvbnRlbnQgKi97fSxcclxuXHQgIENvbW1lbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbW1lbnRTdGF0ZW1lbnQoKSAvKiBjb21tZW50ICove30sXHJcblxyXG5cdCAgU3ViRXhwcmVzc2lvbjogdmlzaXRTdWJFeHByZXNzaW9uLFxyXG5cclxuXHQgIFBhdGhFeHByZXNzaW9uOiBmdW5jdGlvbiBQYXRoRXhwcmVzc2lvbigpIC8qIHBhdGggKi97fSxcclxuXHJcblx0ICBTdHJpbmdMaXRlcmFsOiBmdW5jdGlvbiBTdHJpbmdMaXRlcmFsKCkgLyogc3RyaW5nICove30sXHJcblx0ICBOdW1iZXJMaXRlcmFsOiBmdW5jdGlvbiBOdW1iZXJMaXRlcmFsKCkgLyogbnVtYmVyICove30sXHJcblx0ICBCb29sZWFuTGl0ZXJhbDogZnVuY3Rpb24gQm9vbGVhbkxpdGVyYWwoKSAvKiBib29sICove30sXHJcblx0ICBVbmRlZmluZWRMaXRlcmFsOiBmdW5jdGlvbiBVbmRlZmluZWRMaXRlcmFsKCkgLyogbGl0ZXJhbCAqL3t9LFxyXG5cdCAgTnVsbExpdGVyYWw6IGZ1bmN0aW9uIE51bGxMaXRlcmFsKCkgLyogbGl0ZXJhbCAqL3t9LFxyXG5cclxuXHQgIEhhc2g6IGZ1bmN0aW9uIEhhc2goaGFzaCkge1xyXG5cdCAgICB0aGlzLmFjY2VwdEFycmF5KGhhc2gucGFpcnMpO1xyXG5cdCAgfSxcclxuXHQgIEhhc2hQYWlyOiBmdW5jdGlvbiBIYXNoUGFpcihwYWlyKSB7XHJcblx0ICAgIHRoaXMuYWNjZXB0UmVxdWlyZWQocGFpciwgJ3ZhbHVlJyk7XHJcblx0ICB9XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gdmlzaXRTdWJFeHByZXNzaW9uKG11c3RhY2hlKSB7XHJcblx0ICB0aGlzLmFjY2VwdFJlcXVpcmVkKG11c3RhY2hlLCAncGF0aCcpO1xyXG5cdCAgdGhpcy5hY2NlcHRBcnJheShtdXN0YWNoZS5wYXJhbXMpO1xyXG5cdCAgdGhpcy5hY2NlcHRLZXkobXVzdGFjaGUsICdoYXNoJyk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHZpc2l0QmxvY2soYmxvY2spIHtcclxuXHQgIHZpc2l0U3ViRXhwcmVzc2lvbi5jYWxsKHRoaXMsIGJsb2NrKTtcclxuXHJcblx0ICB0aGlzLmFjY2VwdEtleShibG9jaywgJ3Byb2dyYW0nKTtcclxuXHQgIHRoaXMuYWNjZXB0S2V5KGJsb2NrLCAnaW52ZXJzZScpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiB2aXNpdFBhcnRpYWwocGFydGlhbCkge1xyXG5cdCAgdGhpcy5hY2NlcHRSZXF1aXJlZChwYXJ0aWFsLCAnbmFtZScpO1xyXG5cdCAgdGhpcy5hY2NlcHRBcnJheShwYXJ0aWFsLnBhcmFtcyk7XHJcblx0ICB0aGlzLmFjY2VwdEtleShwYXJ0aWFsLCAnaGFzaCcpO1xyXG5cdH1cclxuXHJcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gVmlzaXRvcjtcclxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcclxuXHJcbi8qKiovIH0pLFxyXG4vKiA0MCAqL1xyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XHJcblxyXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcblx0ZXhwb3J0cy5Tb3VyY2VMb2NhdGlvbiA9IFNvdXJjZUxvY2F0aW9uO1xyXG5cdGV4cG9ydHMuaWQgPSBpZDtcclxuXHRleHBvcnRzLnN0cmlwRmxhZ3MgPSBzdHJpcEZsYWdzO1xyXG5cdGV4cG9ydHMuc3RyaXBDb21tZW50ID0gc3RyaXBDb21tZW50O1xyXG5cdGV4cG9ydHMucHJlcGFyZVBhdGggPSBwcmVwYXJlUGF0aDtcclxuXHRleHBvcnRzLnByZXBhcmVNdXN0YWNoZSA9IHByZXBhcmVNdXN0YWNoZTtcclxuXHRleHBvcnRzLnByZXBhcmVSYXdCbG9jayA9IHByZXBhcmVSYXdCbG9jaztcclxuXHRleHBvcnRzLnByZXBhcmVCbG9jayA9IHByZXBhcmVCbG9jaztcclxuXHRleHBvcnRzLnByZXBhcmVQcm9ncmFtID0gcHJlcGFyZVByb2dyYW07XHJcblx0ZXhwb3J0cy5wcmVwYXJlUGFydGlhbEJsb2NrID0gcHJlcGFyZVBhcnRpYWxCbG9jaztcclxuXHJcblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xyXG5cclxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xyXG5cclxuXHRmdW5jdGlvbiB2YWxpZGF0ZUNsb3NlKG9wZW4sIGNsb3NlKSB7XHJcblx0ICBjbG9zZSA9IGNsb3NlLnBhdGggPyBjbG9zZS5wYXRoLm9yaWdpbmFsIDogY2xvc2U7XHJcblxyXG5cdCAgaWYgKG9wZW4ucGF0aC5vcmlnaW5hbCAhPT0gY2xvc2UpIHtcclxuXHQgICAgdmFyIGVycm9yTm9kZSA9IHsgbG9jOiBvcGVuLnBhdGgubG9jIH07XHJcblxyXG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXShvcGVuLnBhdGgub3JpZ2luYWwgKyBcIiBkb2Vzbid0IG1hdGNoIFwiICsgY2xvc2UsIGVycm9yTm9kZSk7XHJcblx0ICB9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBTb3VyY2VMb2NhdGlvbihzb3VyY2UsIGxvY0luZm8pIHtcclxuXHQgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG5cdCAgdGhpcy5zdGFydCA9IHtcclxuXHQgICAgbGluZTogbG9jSW5mby5maXJzdF9saW5lLFxyXG5cdCAgICBjb2x1bW46IGxvY0luZm8uZmlyc3RfY29sdW1uXHJcblx0ICB9O1xyXG5cdCAgdGhpcy5lbmQgPSB7XHJcblx0ICAgIGxpbmU6IGxvY0luZm8ubGFzdF9saW5lLFxyXG5cdCAgICBjb2x1bW46IGxvY0luZm8ubGFzdF9jb2x1bW5cclxuXHQgIH07XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpZCh0b2tlbikge1xyXG5cdCAgaWYgKC9eXFxbLipcXF0kLy50ZXN0KHRva2VuKSkge1xyXG5cdCAgICByZXR1cm4gdG9rZW4uc3Vic3RyKDEsIHRva2VuLmxlbmd0aCAtIDIpO1xyXG5cdCAgfSBlbHNlIHtcclxuXHQgICAgcmV0dXJuIHRva2VuO1xyXG5cdCAgfVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc3RyaXBGbGFncyhvcGVuLCBjbG9zZSkge1xyXG5cdCAgcmV0dXJuIHtcclxuXHQgICAgb3Blbjogb3Blbi5jaGFyQXQoMikgPT09ICd+JyxcclxuXHQgICAgY2xvc2U6IGNsb3NlLmNoYXJBdChjbG9zZS5sZW5ndGggLSAzKSA9PT0gJ34nXHJcblx0ICB9O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc3RyaXBDb21tZW50KGNvbW1lbnQpIHtcclxuXHQgIHJldHVybiBjb21tZW50LnJlcGxhY2UoL15cXHtcXHt+P1xcIS0/LT8vLCAnJykucmVwbGFjZSgvLT8tP34/XFx9XFx9JC8sICcnKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHByZXBhcmVQYXRoKGRhdGEsIHBhcnRzLCBsb2MpIHtcclxuXHQgIGxvYyA9IHRoaXMubG9jSW5mbyhsb2MpO1xyXG5cclxuXHQgIHZhciBvcmlnaW5hbCA9IGRhdGEgPyAnQCcgOiAnJyxcclxuXHQgICAgICBkaWcgPSBbXSxcclxuXHQgICAgICBkZXB0aCA9IDAsXHJcblx0ICAgICAgZGVwdGhTdHJpbmcgPSAnJztcclxuXHJcblx0ICBmb3IgKHZhciBpID0gMCwgbCA9IHBhcnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG5cdCAgICB2YXIgcGFydCA9IHBhcnRzW2ldLnBhcnQsXHJcblxyXG5cdCAgICAvLyBJZiB3ZSBoYXZlIFtdIHN5bnRheCB0aGVuIHdlIGRvIG5vdCB0cmVhdCBwYXRoIHJlZmVyZW5jZXMgYXMgb3BlcmF0b3JzLFxyXG5cdCAgICAvLyBpLmUuIGZvby5bdGhpc10gcmVzb2x2ZXMgdG8gYXBwcm94aW1hdGVseSBjb250ZXh0LmZvb1sndGhpcyddXHJcblx0ICAgIGlzTGl0ZXJhbCA9IHBhcnRzW2ldLm9yaWdpbmFsICE9PSBwYXJ0O1xyXG5cdCAgICBvcmlnaW5hbCArPSAocGFydHNbaV0uc2VwYXJhdG9yIHx8ICcnKSArIHBhcnQ7XHJcblxyXG5cdCAgICBpZiAoIWlzTGl0ZXJhbCAmJiAocGFydCA9PT0gJy4uJyB8fCBwYXJ0ID09PSAnLicgfHwgcGFydCA9PT0gJ3RoaXMnKSkge1xyXG5cdCAgICAgIGlmIChkaWcubGVuZ3RoID4gMCkge1xyXG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0ludmFsaWQgcGF0aDogJyArIG9yaWdpbmFsLCB7IGxvYzogbG9jIH0pO1xyXG5cdCAgICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xyXG5cdCAgICAgICAgZGVwdGgrKztcclxuXHQgICAgICAgIGRlcHRoU3RyaW5nICs9ICcuLi8nO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICBkaWcucHVzaChwYXJ0KTtcclxuXHQgICAgfVxyXG5cdCAgfVxyXG5cclxuXHQgIHJldHVybiB7XHJcblx0ICAgIHR5cGU6ICdQYXRoRXhwcmVzc2lvbicsXHJcblx0ICAgIGRhdGE6IGRhdGEsXHJcblx0ICAgIGRlcHRoOiBkZXB0aCxcclxuXHQgICAgcGFydHM6IGRpZyxcclxuXHQgICAgb3JpZ2luYWw6IG9yaWdpbmFsLFxyXG5cdCAgICBsb2M6IGxvY1xyXG5cdCAgfTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHByZXBhcmVNdXN0YWNoZShwYXRoLCBwYXJhbXMsIGhhc2gsIG9wZW4sIHN0cmlwLCBsb2NJbmZvKSB7XHJcblx0ICAvLyBNdXN0IHVzZSBjaGFyQXQgdG8gc3VwcG9ydCBJRSBwcmUtMTBcclxuXHQgIHZhciBlc2NhcGVGbGFnID0gb3Blbi5jaGFyQXQoMykgfHwgb3Blbi5jaGFyQXQoMiksXHJcblx0ICAgICAgZXNjYXBlZCA9IGVzY2FwZUZsYWcgIT09ICd7JyAmJiBlc2NhcGVGbGFnICE9PSAnJic7XHJcblxyXG5cdCAgdmFyIGRlY29yYXRvciA9IC9cXCovLnRlc3Qob3Blbik7XHJcblx0ICByZXR1cm4ge1xyXG5cdCAgICB0eXBlOiBkZWNvcmF0b3IgPyAnRGVjb3JhdG9yJyA6ICdNdXN0YWNoZVN0YXRlbWVudCcsXHJcblx0ICAgIHBhdGg6IHBhdGgsXHJcblx0ICAgIHBhcmFtczogcGFyYW1zLFxyXG5cdCAgICBoYXNoOiBoYXNoLFxyXG5cdCAgICBlc2NhcGVkOiBlc2NhcGVkLFxyXG5cdCAgICBzdHJpcDogc3RyaXAsXHJcblx0ICAgIGxvYzogdGhpcy5sb2NJbmZvKGxvY0luZm8pXHJcblx0ICB9O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcHJlcGFyZVJhd0Jsb2NrKG9wZW5SYXdCbG9jaywgY29udGVudHMsIGNsb3NlLCBsb2NJbmZvKSB7XHJcblx0ICB2YWxpZGF0ZUNsb3NlKG9wZW5SYXdCbG9jaywgY2xvc2UpO1xyXG5cclxuXHQgIGxvY0luZm8gPSB0aGlzLmxvY0luZm8obG9jSW5mbyk7XHJcblx0ICB2YXIgcHJvZ3JhbSA9IHtcclxuXHQgICAgdHlwZTogJ1Byb2dyYW0nLFxyXG5cdCAgICBib2R5OiBjb250ZW50cyxcclxuXHQgICAgc3RyaXA6IHt9LFxyXG5cdCAgICBsb2M6IGxvY0luZm9cclxuXHQgIH07XHJcblxyXG5cdCAgcmV0dXJuIHtcclxuXHQgICAgdHlwZTogJ0Jsb2NrU3RhdGVtZW50JyxcclxuXHQgICAgcGF0aDogb3BlblJhd0Jsb2NrLnBhdGgsXHJcblx0ICAgIHBhcmFtczogb3BlblJhd0Jsb2NrLnBhcmFtcyxcclxuXHQgICAgaGFzaDogb3BlblJhd0Jsb2NrLmhhc2gsXHJcblx0ICAgIHByb2dyYW06IHByb2dyYW0sXHJcblx0ICAgIG9wZW5TdHJpcDoge30sXHJcblx0ICAgIGludmVyc2VTdHJpcDoge30sXHJcblx0ICAgIGNsb3NlU3RyaXA6IHt9LFxyXG5cdCAgICBsb2M6IGxvY0luZm9cclxuXHQgIH07XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBwcmVwYXJlQmxvY2sob3BlbkJsb2NrLCBwcm9ncmFtLCBpbnZlcnNlQW5kUHJvZ3JhbSwgY2xvc2UsIGludmVydGVkLCBsb2NJbmZvKSB7XHJcblx0ICBpZiAoY2xvc2UgJiYgY2xvc2UucGF0aCkge1xyXG5cdCAgICB2YWxpZGF0ZUNsb3NlKG9wZW5CbG9jaywgY2xvc2UpO1xyXG5cdCAgfVxyXG5cclxuXHQgIHZhciBkZWNvcmF0b3IgPSAvXFwqLy50ZXN0KG9wZW5CbG9jay5vcGVuKTtcclxuXHJcblx0ICBwcm9ncmFtLmJsb2NrUGFyYW1zID0gb3BlbkJsb2NrLmJsb2NrUGFyYW1zO1xyXG5cclxuXHQgIHZhciBpbnZlcnNlID0gdW5kZWZpbmVkLFxyXG5cdCAgICAgIGludmVyc2VTdHJpcCA9IHVuZGVmaW5lZDtcclxuXHJcblx0ICBpZiAoaW52ZXJzZUFuZFByb2dyYW0pIHtcclxuXHQgICAgaWYgKGRlY29yYXRvcikge1xyXG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmV4cGVjdGVkIGludmVyc2UgYmxvY2sgb24gZGVjb3JhdG9yJywgaW52ZXJzZUFuZFByb2dyYW0pO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpZiAoaW52ZXJzZUFuZFByb2dyYW0uY2hhaW4pIHtcclxuXHQgICAgICBpbnZlcnNlQW5kUHJvZ3JhbS5wcm9ncmFtLmJvZHlbMF0uY2xvc2VTdHJpcCA9IGNsb3NlLnN0cmlwO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpbnZlcnNlU3RyaXAgPSBpbnZlcnNlQW5kUHJvZ3JhbS5zdHJpcDtcclxuXHQgICAgaW52ZXJzZSA9IGludmVyc2VBbmRQcm9ncmFtLnByb2dyYW07XHJcblx0ICB9XHJcblxyXG5cdCAgaWYgKGludmVydGVkKSB7XHJcblx0ICAgIGludmVydGVkID0gaW52ZXJzZTtcclxuXHQgICAgaW52ZXJzZSA9IHByb2dyYW07XHJcblx0ICAgIHByb2dyYW0gPSBpbnZlcnRlZDtcclxuXHQgIH1cclxuXHJcblx0ICByZXR1cm4ge1xyXG5cdCAgICB0eXBlOiBkZWNvcmF0b3IgPyAnRGVjb3JhdG9yQmxvY2snIDogJ0Jsb2NrU3RhdGVtZW50JyxcclxuXHQgICAgcGF0aDogb3BlbkJsb2NrLnBhdGgsXHJcblx0ICAgIHBhcmFtczogb3BlbkJsb2NrLnBhcmFtcyxcclxuXHQgICAgaGFzaDogb3BlbkJsb2NrLmhhc2gsXHJcblx0ICAgIHByb2dyYW06IHByb2dyYW0sXHJcblx0ICAgIGludmVyc2U6IGludmVyc2UsXHJcblx0ICAgIG9wZW5TdHJpcDogb3BlbkJsb2NrLnN0cmlwLFxyXG5cdCAgICBpbnZlcnNlU3RyaXA6IGludmVyc2VTdHJpcCxcclxuXHQgICAgY2xvc2VTdHJpcDogY2xvc2UgJiYgY2xvc2Uuc3RyaXAsXHJcblx0ICAgIGxvYzogdGhpcy5sb2NJbmZvKGxvY0luZm8pXHJcblx0ICB9O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcHJlcGFyZVByb2dyYW0oc3RhdGVtZW50cywgbG9jKSB7XHJcblx0ICBpZiAoIWxvYyAmJiBzdGF0ZW1lbnRzLmxlbmd0aCkge1xyXG5cdCAgICB2YXIgZmlyc3RMb2MgPSBzdGF0ZW1lbnRzWzBdLmxvYyxcclxuXHQgICAgICAgIGxhc3RMb2MgPSBzdGF0ZW1lbnRzW3N0YXRlbWVudHMubGVuZ3RoIC0gMV0ubG9jO1xyXG5cclxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuXHQgICAgaWYgKGZpcnN0TG9jICYmIGxhc3RMb2MpIHtcclxuXHQgICAgICBsb2MgPSB7XHJcblx0ICAgICAgICBzb3VyY2U6IGZpcnN0TG9jLnNvdXJjZSxcclxuXHQgICAgICAgIHN0YXJ0OiB7XHJcblx0ICAgICAgICAgIGxpbmU6IGZpcnN0TG9jLnN0YXJ0LmxpbmUsXHJcblx0ICAgICAgICAgIGNvbHVtbjogZmlyc3RMb2Muc3RhcnQuY29sdW1uXHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAgZW5kOiB7XHJcblx0ICAgICAgICAgIGxpbmU6IGxhc3RMb2MuZW5kLmxpbmUsXHJcblx0ICAgICAgICAgIGNvbHVtbjogbGFzdExvYy5lbmQuY29sdW1uXHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfTtcclxuXHQgICAgfVxyXG5cdCAgfVxyXG5cclxuXHQgIHJldHVybiB7XHJcblx0ICAgIHR5cGU6ICdQcm9ncmFtJyxcclxuXHQgICAgYm9keTogc3RhdGVtZW50cyxcclxuXHQgICAgc3RyaXA6IHt9LFxyXG5cdCAgICBsb2M6IGxvY1xyXG5cdCAgfTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHByZXBhcmVQYXJ0aWFsQmxvY2sob3BlbiwgcHJvZ3JhbSwgY2xvc2UsIGxvY0luZm8pIHtcclxuXHQgIHZhbGlkYXRlQ2xvc2Uob3BlbiwgY2xvc2UpO1xyXG5cclxuXHQgIHJldHVybiB7XHJcblx0ICAgIHR5cGU6ICdQYXJ0aWFsQmxvY2tTdGF0ZW1lbnQnLFxyXG5cdCAgICBuYW1lOiBvcGVuLnBhdGgsXHJcblx0ICAgIHBhcmFtczogb3Blbi5wYXJhbXMsXHJcblx0ICAgIGhhc2g6IG9wZW4uaGFzaCxcclxuXHQgICAgcHJvZ3JhbTogcHJvZ3JhbSxcclxuXHQgICAgb3BlblN0cmlwOiBvcGVuLnN0cmlwLFxyXG5cdCAgICBjbG9zZVN0cmlwOiBjbG9zZSAmJiBjbG9zZS5zdHJpcCxcclxuXHQgICAgbG9jOiB0aGlzLmxvY0luZm8obG9jSW5mbylcclxuXHQgIH07XHJcblx0fVxyXG5cclxuLyoqKi8gfSksXHJcbi8qIDQxICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUgbmV3LWNhcCAqL1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xyXG5cclxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5cdGV4cG9ydHMuQ29tcGlsZXIgPSBDb21waWxlcjtcclxuXHRleHBvcnRzLnByZWNvbXBpbGUgPSBwcmVjb21waWxlO1xyXG5cdGV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XHJcblxyXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcclxuXHJcblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcclxuXHJcblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XHJcblxyXG5cdHZhciBfYXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSk7XHJcblxyXG5cdHZhciBfYXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FzdCk7XHJcblxyXG5cdHZhciBzbGljZSA9IFtdLnNsaWNlO1xyXG5cclxuXHRmdW5jdGlvbiBDb21waWxlcigpIHt9XHJcblxyXG5cdC8vIHRoZSBmb3VuZEhlbHBlciByZWdpc3RlciB3aWxsIGRpc2FtYmlndWF0ZSBoZWxwZXIgbG9va3VwIGZyb20gZmluZGluZyBhXHJcblx0Ly8gZnVuY3Rpb24gaW4gYSBjb250ZXh0LiBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgbXVzdGFjaGUgY29tcGF0aWJpbGl0eSwgd2hpY2hcclxuXHQvLyByZXF1aXJlcyB0aGF0IGNvbnRleHQgZnVuY3Rpb25zIGluIGJsb2NrcyBhcmUgZXZhbHVhdGVkIGJ5IGJsb2NrSGVscGVyTWlzc2luZyxcclxuXHQvLyBhbmQgdGhlbiBwcm9jZWVkIGFzIGlmIHRoZSByZXN1bHRpbmcgdmFsdWUgd2FzIHByb3ZpZGVkIHRvIGJsb2NrSGVscGVyTWlzc2luZy5cclxuXHJcblx0Q29tcGlsZXIucHJvdG90eXBlID0ge1xyXG5cdCAgY29tcGlsZXI6IENvbXBpbGVyLFxyXG5cclxuXHQgIGVxdWFsczogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XHJcblx0ICAgIHZhciBsZW4gPSB0aGlzLm9wY29kZXMubGVuZ3RoO1xyXG5cdCAgICBpZiAob3RoZXIub3Bjb2Rlcy5sZW5ndGggIT09IGxlbikge1xyXG5cdCAgICAgIHJldHVybiBmYWxzZTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG5cdCAgICAgIHZhciBvcGNvZGUgPSB0aGlzLm9wY29kZXNbaV0sXHJcblx0ICAgICAgICAgIG90aGVyT3Bjb2RlID0gb3RoZXIub3Bjb2Rlc1tpXTtcclxuXHQgICAgICBpZiAob3Bjb2RlLm9wY29kZSAhPT0gb3RoZXJPcGNvZGUub3Bjb2RlIHx8ICFhcmdFcXVhbHMob3Bjb2RlLmFyZ3MsIG90aGVyT3Bjb2RlLmFyZ3MpKSB7XHJcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICAvLyBXZSBrbm93IHRoYXQgbGVuZ3RoIGlzIHRoZSBzYW1lIGJldHdlZW4gdGhlIHR3byBhcnJheXMgYmVjYXVzZSB0aGV5IGFyZSBkaXJlY3RseSB0aWVkXHJcblx0ICAgIC8vIHRvIHRoZSBvcGNvZGUgYmVoYXZpb3IgYWJvdmUuXHJcblx0ICAgIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0ICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuW2ldLmVxdWFscyhvdGhlci5jaGlsZHJlbltpXSkpIHtcclxuXHQgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHJldHVybiB0cnVlO1xyXG5cdCAgfSxcclxuXHJcblx0ICBndWlkOiAwLFxyXG5cclxuXHQgIGNvbXBpbGU6IGZ1bmN0aW9uIGNvbXBpbGUocHJvZ3JhbSwgb3B0aW9ucykge1xyXG5cdCAgICB0aGlzLnNvdXJjZU5vZGUgPSBbXTtcclxuXHQgICAgdGhpcy5vcGNvZGVzID0gW107XHJcblx0ICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuXHQgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHQgICAgdGhpcy5zdHJpbmdQYXJhbXMgPSBvcHRpb25zLnN0cmluZ1BhcmFtcztcclxuXHQgICAgdGhpcy50cmFja0lkcyA9IG9wdGlvbnMudHJhY2tJZHM7XHJcblxyXG5cdCAgICBvcHRpb25zLmJsb2NrUGFyYW1zID0gb3B0aW9ucy5ibG9ja1BhcmFtcyB8fCBbXTtcclxuXHJcblx0ICAgIC8vIFRoZXNlIGNoYW5nZXMgd2lsbCBwcm9wYWdhdGUgdG8gdGhlIG90aGVyIGNvbXBpbGVyIGNvbXBvbmVudHNcclxuXHQgICAgdmFyIGtub3duSGVscGVycyA9IG9wdGlvbnMua25vd25IZWxwZXJzO1xyXG5cdCAgICBvcHRpb25zLmtub3duSGVscGVycyA9IHtcclxuXHQgICAgICAnaGVscGVyTWlzc2luZyc6IHRydWUsXHJcblx0ICAgICAgJ2Jsb2NrSGVscGVyTWlzc2luZyc6IHRydWUsXHJcblx0ICAgICAgJ2VhY2gnOiB0cnVlLFxyXG5cdCAgICAgICdpZic6IHRydWUsXHJcblx0ICAgICAgJ3VubGVzcyc6IHRydWUsXHJcblx0ICAgICAgJ3dpdGgnOiB0cnVlLFxyXG5cdCAgICAgICdsb2cnOiB0cnVlLFxyXG5cdCAgICAgICdsb29rdXAnOiB0cnVlXHJcblx0ICAgIH07XHJcblx0ICAgIGlmIChrbm93bkhlbHBlcnMpIHtcclxuXHQgICAgICBmb3IgKHZhciBfbmFtZSBpbiBrbm93bkhlbHBlcnMpIHtcclxuXHQgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcblx0ICAgICAgICBpZiAoX25hbWUgaW4ga25vd25IZWxwZXJzKSB7XHJcblx0ICAgICAgICAgIHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNbX25hbWVdID0ga25vd25IZWxwZXJzW19uYW1lXTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHJldHVybiB0aGlzLmFjY2VwdChwcm9ncmFtKTtcclxuXHQgIH0sXHJcblxyXG5cdCAgY29tcGlsZVByb2dyYW06IGZ1bmN0aW9uIGNvbXBpbGVQcm9ncmFtKHByb2dyYW0pIHtcclxuXHQgICAgdmFyIGNoaWxkQ29tcGlsZXIgPSBuZXcgdGhpcy5jb21waWxlcigpLFxyXG5cdCAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXHJcblx0ICAgIHJlc3VsdCA9IGNoaWxkQ29tcGlsZXIuY29tcGlsZShwcm9ncmFtLCB0aGlzLm9wdGlvbnMpLFxyXG5cdCAgICAgICAgZ3VpZCA9IHRoaXMuZ3VpZCsrO1xyXG5cclxuXHQgICAgdGhpcy51c2VQYXJ0aWFsID0gdGhpcy51c2VQYXJ0aWFsIHx8IHJlc3VsdC51c2VQYXJ0aWFsO1xyXG5cclxuXHQgICAgdGhpcy5jaGlsZHJlbltndWlkXSA9IHJlc3VsdDtcclxuXHQgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCByZXN1bHQudXNlRGVwdGhzO1xyXG5cclxuXHQgICAgcmV0dXJuIGd1aWQ7XHJcblx0ICB9LFxyXG5cclxuXHQgIGFjY2VwdDogZnVuY3Rpb24gYWNjZXB0KG5vZGUpIHtcclxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IFNhbml0eSBjb2RlICovXHJcblx0ICAgIGlmICghdGhpc1tub2RlLnR5cGVdKSB7XHJcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1Vua25vd24gdHlwZTogJyArIG5vZGUudHlwZSwgbm9kZSk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHRoaXMuc291cmNlTm9kZS51bnNoaWZ0KG5vZGUpO1xyXG5cdCAgICB2YXIgcmV0ID0gdGhpc1tub2RlLnR5cGVdKG5vZGUpO1xyXG5cdCAgICB0aGlzLnNvdXJjZU5vZGUuc2hpZnQoKTtcclxuXHQgICAgcmV0dXJuIHJldDtcclxuXHQgIH0sXHJcblxyXG5cdCAgUHJvZ3JhbTogZnVuY3Rpb24gUHJvZ3JhbShwcm9ncmFtKSB7XHJcblx0ICAgIHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy51bnNoaWZ0KHByb2dyYW0uYmxvY2tQYXJhbXMpO1xyXG5cclxuXHQgICAgdmFyIGJvZHkgPSBwcm9ncmFtLmJvZHksXHJcblx0ICAgICAgICBib2R5TGVuZ3RoID0gYm9keS5sZW5ndGg7XHJcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9keUxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgdGhpcy5hY2NlcHQoYm9keVtpXSk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy5zaGlmdCgpO1xyXG5cclxuXHQgICAgdGhpcy5pc1NpbXBsZSA9IGJvZHlMZW5ndGggPT09IDE7XHJcblx0ICAgIHRoaXMuYmxvY2tQYXJhbXMgPSBwcm9ncmFtLmJsb2NrUGFyYW1zID8gcHJvZ3JhbS5ibG9ja1BhcmFtcy5sZW5ndGggOiAwO1xyXG5cclxuXHQgICAgcmV0dXJuIHRoaXM7XHJcblx0ICB9LFxyXG5cclxuXHQgIEJsb2NrU3RhdGVtZW50OiBmdW5jdGlvbiBCbG9ja1N0YXRlbWVudChibG9jaykge1xyXG5cdCAgICB0cmFuc2Zvcm1MaXRlcmFsVG9QYXRoKGJsb2NrKTtcclxuXHJcblx0ICAgIHZhciBwcm9ncmFtID0gYmxvY2sucHJvZ3JhbSxcclxuXHQgICAgICAgIGludmVyc2UgPSBibG9jay5pbnZlcnNlO1xyXG5cclxuXHQgICAgcHJvZ3JhbSA9IHByb2dyYW0gJiYgdGhpcy5jb21waWxlUHJvZ3JhbShwcm9ncmFtKTtcclxuXHQgICAgaW52ZXJzZSA9IGludmVyc2UgJiYgdGhpcy5jb21waWxlUHJvZ3JhbShpbnZlcnNlKTtcclxuXHJcblx0ICAgIHZhciB0eXBlID0gdGhpcy5jbGFzc2lmeVNleHByKGJsb2NrKTtcclxuXHJcblx0ICAgIGlmICh0eXBlID09PSAnaGVscGVyJykge1xyXG5cdCAgICAgIHRoaXMuaGVscGVyU2V4cHIoYmxvY2ssIHByb2dyYW0sIGludmVyc2UpO1xyXG5cdCAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzaW1wbGUnKSB7XHJcblx0ICAgICAgdGhpcy5zaW1wbGVTZXhwcihibG9jayk7XHJcblxyXG5cdCAgICAgIC8vIG5vdyB0aGF0IHRoZSBzaW1wbGUgbXVzdGFjaGUgaXMgcmVzb2x2ZWQsIHdlIG5lZWQgdG9cclxuXHQgICAgICAvLyBldmFsdWF0ZSBpdCBieSBleGVjdXRpbmcgYGJsb2NrSGVscGVyTWlzc2luZ2BcclxuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcclxuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBpbnZlcnNlKTtcclxuXHQgICAgICB0aGlzLm9wY29kZSgnZW1wdHlIYXNoJyk7XHJcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2Jsb2NrVmFsdWUnLCBibG9jay5wYXRoLm9yaWdpbmFsKTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICB0aGlzLmFtYmlndW91c1NleHByKGJsb2NrLCBwcm9ncmFtLCBpbnZlcnNlKTtcclxuXHJcblx0ICAgICAgLy8gbm93IHRoYXQgdGhlIHNpbXBsZSBtdXN0YWNoZSBpcyByZXNvbHZlZCwgd2UgbmVlZCB0b1xyXG5cdCAgICAgIC8vIGV2YWx1YXRlIGl0IGJ5IGV4ZWN1dGluZyBgYmxvY2tIZWxwZXJNaXNzaW5nYFxyXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIHByb2dyYW0pO1xyXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xyXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdlbXB0eUhhc2gnKTtcclxuXHQgICAgICB0aGlzLm9wY29kZSgnYW1iaWd1b3VzQmxvY2tWYWx1ZScpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICB0aGlzLm9wY29kZSgnYXBwZW5kJyk7XHJcblx0ICB9LFxyXG5cclxuXHQgIERlY29yYXRvckJsb2NrOiBmdW5jdGlvbiBEZWNvcmF0b3JCbG9jayhkZWNvcmF0b3IpIHtcclxuXHQgICAgdmFyIHByb2dyYW0gPSBkZWNvcmF0b3IucHJvZ3JhbSAmJiB0aGlzLmNvbXBpbGVQcm9ncmFtKGRlY29yYXRvci5wcm9ncmFtKTtcclxuXHQgICAgdmFyIHBhcmFtcyA9IHRoaXMuc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMoZGVjb3JhdG9yLCBwcm9ncmFtLCB1bmRlZmluZWQpLFxyXG5cdCAgICAgICAgcGF0aCA9IGRlY29yYXRvci5wYXRoO1xyXG5cclxuXHQgICAgdGhpcy51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcclxuXHQgICAgdGhpcy5vcGNvZGUoJ3JlZ2lzdGVyRGVjb3JhdG9yJywgcGFyYW1zLmxlbmd0aCwgcGF0aC5vcmlnaW5hbCk7XHJcblx0ICB9LFxyXG5cclxuXHQgIFBhcnRpYWxTdGF0ZW1lbnQ6IGZ1bmN0aW9uIFBhcnRpYWxTdGF0ZW1lbnQocGFydGlhbCkge1xyXG5cdCAgICB0aGlzLnVzZVBhcnRpYWwgPSB0cnVlO1xyXG5cclxuXHQgICAgdmFyIHByb2dyYW0gPSBwYXJ0aWFsLnByb2dyYW07XHJcblx0ICAgIGlmIChwcm9ncmFtKSB7XHJcblx0ICAgICAgcHJvZ3JhbSA9IHRoaXMuY29tcGlsZVByb2dyYW0ocGFydGlhbC5wcm9ncmFtKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgdmFyIHBhcmFtcyA9IHBhcnRpYWwucGFyYW1zO1xyXG5cdCAgICBpZiAocGFyYW1zLmxlbmd0aCA+IDEpIHtcclxuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5zdXBwb3J0ZWQgbnVtYmVyIG9mIHBhcnRpYWwgYXJndW1lbnRzOiAnICsgcGFyYW1zLmxlbmd0aCwgcGFydGlhbCk7XHJcblx0ICAgIH0gZWxzZSBpZiAoIXBhcmFtcy5sZW5ndGgpIHtcclxuXHQgICAgICBpZiAodGhpcy5vcHRpb25zLmV4cGxpY2l0UGFydGlhbENvbnRleHQpIHtcclxuXHQgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsICd1bmRlZmluZWQnKTtcclxuXHQgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgcGFyYW1zLnB1c2goeyB0eXBlOiAnUGF0aEV4cHJlc3Npb24nLCBwYXJ0czogW10sIGRlcHRoOiAwIH0pO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgdmFyIHBhcnRpYWxOYW1lID0gcGFydGlhbC5uYW1lLm9yaWdpbmFsLFxyXG5cdCAgICAgICAgaXNEeW5hbWljID0gcGFydGlhbC5uYW1lLnR5cGUgPT09ICdTdWJFeHByZXNzaW9uJztcclxuXHQgICAgaWYgKGlzRHluYW1pYykge1xyXG5cdCAgICAgIHRoaXMuYWNjZXB0KHBhcnRpYWwubmFtZSk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHRoaXMuc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMocGFydGlhbCwgcHJvZ3JhbSwgdW5kZWZpbmVkLCB0cnVlKTtcclxuXHJcblx0ICAgIHZhciBpbmRlbnQgPSBwYXJ0aWFsLmluZGVudCB8fCAnJztcclxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5wcmV2ZW50SW5kZW50ICYmIGluZGVudCkge1xyXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhcHBlbmRDb250ZW50JywgaW5kZW50KTtcclxuXHQgICAgICBpbmRlbnQgPSAnJztcclxuXHQgICAgfVxyXG5cclxuXHQgICAgdGhpcy5vcGNvZGUoJ2ludm9rZVBhcnRpYWwnLCBpc0R5bmFtaWMsIHBhcnRpYWxOYW1lLCBpbmRlbnQpO1xyXG5cdCAgICB0aGlzLm9wY29kZSgnYXBwZW5kJyk7XHJcblx0ICB9LFxyXG5cdCAgUGFydGlhbEJsb2NrU3RhdGVtZW50OiBmdW5jdGlvbiBQYXJ0aWFsQmxvY2tTdGF0ZW1lbnQocGFydGlhbEJsb2NrKSB7XHJcblx0ICAgIHRoaXMuUGFydGlhbFN0YXRlbWVudChwYXJ0aWFsQmxvY2spO1xyXG5cdCAgfSxcclxuXHJcblx0ICBNdXN0YWNoZVN0YXRlbWVudDogZnVuY3Rpb24gTXVzdGFjaGVTdGF0ZW1lbnQobXVzdGFjaGUpIHtcclxuXHQgICAgdGhpcy5TdWJFeHByZXNzaW9uKG11c3RhY2hlKTtcclxuXHJcblx0ICAgIGlmIChtdXN0YWNoZS5lc2NhcGVkICYmICF0aGlzLm9wdGlvbnMubm9Fc2NhcGUpIHtcclxuXHQgICAgICB0aGlzLm9wY29kZSgnYXBwZW5kRXNjYXBlZCcpO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhcHBlbmQnKTtcclxuXHQgICAgfVxyXG5cdCAgfSxcclxuXHQgIERlY29yYXRvcjogZnVuY3Rpb24gRGVjb3JhdG9yKGRlY29yYXRvcikge1xyXG5cdCAgICB0aGlzLkRlY29yYXRvckJsb2NrKGRlY29yYXRvcik7XHJcblx0ICB9LFxyXG5cclxuXHQgIENvbnRlbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbnRlbnRTdGF0ZW1lbnQoY29udGVudCkge1xyXG5cdCAgICBpZiAoY29udGVudC52YWx1ZSkge1xyXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhcHBlbmRDb250ZW50JywgY29udGVudC52YWx1ZSk7XHJcblx0ICAgIH1cclxuXHQgIH0sXHJcblxyXG5cdCAgQ29tbWVudFN0YXRlbWVudDogZnVuY3Rpb24gQ29tbWVudFN0YXRlbWVudCgpIHt9LFxyXG5cclxuXHQgIFN1YkV4cHJlc3Npb246IGZ1bmN0aW9uIFN1YkV4cHJlc3Npb24oc2V4cHIpIHtcclxuXHQgICAgdHJhbnNmb3JtTGl0ZXJhbFRvUGF0aChzZXhwcik7XHJcblx0ICAgIHZhciB0eXBlID0gdGhpcy5jbGFzc2lmeVNleHByKHNleHByKTtcclxuXHJcblx0ICAgIGlmICh0eXBlID09PSAnc2ltcGxlJykge1xyXG5cdCAgICAgIHRoaXMuc2ltcGxlU2V4cHIoc2V4cHIpO1xyXG5cdCAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdoZWxwZXInKSB7XHJcblx0ICAgICAgdGhpcy5oZWxwZXJTZXhwcihzZXhwcik7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgdGhpcy5hbWJpZ3VvdXNTZXhwcihzZXhwcik7XHJcblx0ICAgIH1cclxuXHQgIH0sXHJcblx0ICBhbWJpZ3VvdXNTZXhwcjogZnVuY3Rpb24gYW1iaWd1b3VzU2V4cHIoc2V4cHIsIHByb2dyYW0sIGludmVyc2UpIHtcclxuXHQgICAgdmFyIHBhdGggPSBzZXhwci5wYXRoLFxyXG5cdCAgICAgICAgbmFtZSA9IHBhdGgucGFydHNbMF0sXHJcblx0ICAgICAgICBpc0Jsb2NrID0gcHJvZ3JhbSAhPSBudWxsIHx8IGludmVyc2UgIT0gbnVsbDtcclxuXHJcblx0ICAgIHRoaXMub3Bjb2RlKCdnZXRDb250ZXh0JywgcGF0aC5kZXB0aCk7XHJcblxyXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcclxuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgaW52ZXJzZSk7XHJcblxyXG5cdCAgICBwYXRoLnN0cmljdCA9IHRydWU7XHJcblx0ICAgIHRoaXMuYWNjZXB0KHBhdGgpO1xyXG5cclxuXHQgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUFtYmlndW91cycsIG5hbWUsIGlzQmxvY2spO1xyXG5cdCAgfSxcclxuXHJcblx0ICBzaW1wbGVTZXhwcjogZnVuY3Rpb24gc2ltcGxlU2V4cHIoc2V4cHIpIHtcclxuXHQgICAgdmFyIHBhdGggPSBzZXhwci5wYXRoO1xyXG5cdCAgICBwYXRoLnN0cmljdCA9IHRydWU7XHJcblx0ICAgIHRoaXMuYWNjZXB0KHBhdGgpO1xyXG5cdCAgICB0aGlzLm9wY29kZSgncmVzb2x2ZVBvc3NpYmxlTGFtYmRhJyk7XHJcblx0ICB9LFxyXG5cclxuXHQgIGhlbHBlclNleHByOiBmdW5jdGlvbiBoZWxwZXJTZXhwcihzZXhwciwgcHJvZ3JhbSwgaW52ZXJzZSkge1xyXG5cdCAgICB2YXIgcGFyYW1zID0gdGhpcy5zZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhzZXhwciwgcHJvZ3JhbSwgaW52ZXJzZSksXHJcblx0ICAgICAgICBwYXRoID0gc2V4cHIucGF0aCxcclxuXHQgICAgICAgIG5hbWUgPSBwYXRoLnBhcnRzWzBdO1xyXG5cclxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNbbmFtZV0pIHtcclxuXHQgICAgICB0aGlzLm9wY29kZSgnaW52b2tlS25vd25IZWxwZXInLCBwYXJhbXMubGVuZ3RoLCBuYW1lKTtcclxuXHQgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMua25vd25IZWxwZXJzT25seSkge1xyXG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdZb3Ugc3BlY2lmaWVkIGtub3duSGVscGVyc09ubHksIGJ1dCB1c2VkIHRoZSB1bmtub3duIGhlbHBlciAnICsgbmFtZSwgc2V4cHIpO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgIHBhdGguc3RyaWN0ID0gdHJ1ZTtcclxuXHQgICAgICBwYXRoLmZhbHN5ID0gdHJ1ZTtcclxuXHJcblx0ICAgICAgdGhpcy5hY2NlcHQocGF0aCk7XHJcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUhlbHBlcicsIHBhcmFtcy5sZW5ndGgsIHBhdGgub3JpZ2luYWwsIF9hc3QyWydkZWZhdWx0J10uaGVscGVycy5zaW1wbGVJZChwYXRoKSk7XHJcblx0ICAgIH1cclxuXHQgIH0sXHJcblxyXG5cdCAgUGF0aEV4cHJlc3Npb246IGZ1bmN0aW9uIFBhdGhFeHByZXNzaW9uKHBhdGgpIHtcclxuXHQgICAgdGhpcy5hZGREZXB0aChwYXRoLmRlcHRoKTtcclxuXHQgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCBwYXRoLmRlcHRoKTtcclxuXHJcblx0ICAgIHZhciBuYW1lID0gcGF0aC5wYXJ0c1swXSxcclxuXHQgICAgICAgIHNjb3BlZCA9IF9hc3QyWydkZWZhdWx0J10uaGVscGVycy5zY29wZWRJZChwYXRoKSxcclxuXHQgICAgICAgIGJsb2NrUGFyYW1JZCA9ICFwYXRoLmRlcHRoICYmICFzY29wZWQgJiYgdGhpcy5ibG9ja1BhcmFtSW5kZXgobmFtZSk7XHJcblxyXG5cdCAgICBpZiAoYmxvY2tQYXJhbUlkKSB7XHJcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2xvb2t1cEJsb2NrUGFyYW0nLCBibG9ja1BhcmFtSWQsIHBhdGgucGFydHMpO1xyXG5cdCAgICB9IGVsc2UgaWYgKCFuYW1lKSB7XHJcblx0ICAgICAgLy8gQ29udGV4dCByZWZlcmVuY2UsIGkuZS4gYHt7Zm9vIC59fWAgb3IgYHt7Zm9vIC4ufX1gXHJcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hDb250ZXh0Jyk7XHJcblx0ICAgIH0gZWxzZSBpZiAocGF0aC5kYXRhKSB7XHJcblx0ICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSB0cnVlO1xyXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdsb29rdXBEYXRhJywgcGF0aC5kZXB0aCwgcGF0aC5wYXJ0cywgcGF0aC5zdHJpY3QpO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdsb29rdXBPbkNvbnRleHQnLCBwYXRoLnBhcnRzLCBwYXRoLmZhbHN5LCBwYXRoLnN0cmljdCwgc2NvcGVkKTtcclxuXHQgICAgfVxyXG5cdCAgfSxcclxuXHJcblx0ICBTdHJpbmdMaXRlcmFsOiBmdW5jdGlvbiBTdHJpbmdMaXRlcmFsKHN0cmluZykge1xyXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFN0cmluZycsIHN0cmluZy52YWx1ZSk7XHJcblx0ICB9LFxyXG5cclxuXHQgIE51bWJlckxpdGVyYWw6IGZ1bmN0aW9uIE51bWJlckxpdGVyYWwobnVtYmVyKSB7XHJcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsIG51bWJlci52YWx1ZSk7XHJcblx0ICB9LFxyXG5cclxuXHQgIEJvb2xlYW5MaXRlcmFsOiBmdW5jdGlvbiBCb29sZWFuTGl0ZXJhbChib29sKSB7XHJcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsIGJvb2wudmFsdWUpO1xyXG5cdCAgfSxcclxuXHJcblx0ICBVbmRlZmluZWRMaXRlcmFsOiBmdW5jdGlvbiBVbmRlZmluZWRMaXRlcmFsKCkge1xyXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCAndW5kZWZpbmVkJyk7XHJcblx0ICB9LFxyXG5cclxuXHQgIE51bGxMaXRlcmFsOiBmdW5jdGlvbiBOdWxsTGl0ZXJhbCgpIHtcclxuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgJ251bGwnKTtcclxuXHQgIH0sXHJcblxyXG5cdCAgSGFzaDogZnVuY3Rpb24gSGFzaChoYXNoKSB7XHJcblx0ICAgIHZhciBwYWlycyA9IGhhc2gucGFpcnMsXHJcblx0ICAgICAgICBpID0gMCxcclxuXHQgICAgICAgIGwgPSBwYWlycy5sZW5ndGg7XHJcblxyXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaEhhc2gnKTtcclxuXHJcblx0ICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcblx0ICAgICAgdGhpcy5wdXNoUGFyYW0ocGFpcnNbaV0udmFsdWUpO1xyXG5cdCAgICB9XHJcblx0ICAgIHdoaWxlIChpLS0pIHtcclxuXHQgICAgICB0aGlzLm9wY29kZSgnYXNzaWduVG9IYXNoJywgcGFpcnNbaV0ua2V5KTtcclxuXHQgICAgfVxyXG5cdCAgICB0aGlzLm9wY29kZSgncG9wSGFzaCcpO1xyXG5cdCAgfSxcclxuXHJcblx0ICAvLyBIRUxQRVJTXHJcblx0ICBvcGNvZGU6IGZ1bmN0aW9uIG9wY29kZShuYW1lKSB7XHJcblx0ICAgIHRoaXMub3Bjb2Rlcy5wdXNoKHsgb3Bjb2RlOiBuYW1lLCBhcmdzOiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGxvYzogdGhpcy5zb3VyY2VOb2RlWzBdLmxvYyB9KTtcclxuXHQgIH0sXHJcblxyXG5cdCAgYWRkRGVwdGg6IGZ1bmN0aW9uIGFkZERlcHRoKGRlcHRoKSB7XHJcblx0ICAgIGlmICghZGVwdGgpIHtcclxuXHQgICAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHRoaXMudXNlRGVwdGhzID0gdHJ1ZTtcclxuXHQgIH0sXHJcblxyXG5cdCAgY2xhc3NpZnlTZXhwcjogZnVuY3Rpb24gY2xhc3NpZnlTZXhwcihzZXhwcikge1xyXG5cdCAgICB2YXIgaXNTaW1wbGUgPSBfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuc2ltcGxlSWQoc2V4cHIucGF0aCk7XHJcblxyXG5cdCAgICB2YXIgaXNCbG9ja1BhcmFtID0gaXNTaW1wbGUgJiYgISF0aGlzLmJsb2NrUGFyYW1JbmRleChzZXhwci5wYXRoLnBhcnRzWzBdKTtcclxuXHJcblx0ICAgIC8vIGEgbXVzdGFjaGUgaXMgYW4gZWxpZ2libGUgaGVscGVyIGlmOlxyXG5cdCAgICAvLyAqIGl0cyBpZCBpcyBzaW1wbGUgKGEgc2luZ2xlIHBhcnQsIG5vdCBgdGhpc2Agb3IgYC4uYClcclxuXHQgICAgdmFyIGlzSGVscGVyID0gIWlzQmxvY2tQYXJhbSAmJiBfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuaGVscGVyRXhwcmVzc2lvbihzZXhwcik7XHJcblxyXG5cdCAgICAvLyBpZiBhIG11c3RhY2hlIGlzIGFuIGVsaWdpYmxlIGhlbHBlciBidXQgbm90IGEgZGVmaW5pdGVcclxuXHQgICAgLy8gaGVscGVyLCBpdCBpcyBhbWJpZ3VvdXMsIGFuZCB3aWxsIGJlIHJlc29sdmVkIGluIGEgbGF0ZXJcclxuXHQgICAgLy8gcGFzcyBvciBhdCBydW50aW1lLlxyXG5cdCAgICB2YXIgaXNFbGlnaWJsZSA9ICFpc0Jsb2NrUGFyYW0gJiYgKGlzSGVscGVyIHx8IGlzU2ltcGxlKTtcclxuXHJcblx0ICAgIC8vIGlmIGFtYmlndW91cywgd2UgY2FuIHBvc3NpYmx5IHJlc29sdmUgdGhlIGFtYmlndWl0eSBub3dcclxuXHQgICAgLy8gQW4gZWxpZ2libGUgaGVscGVyIGlzIG9uZSB0aGF0IGRvZXMgbm90IGhhdmUgYSBjb21wbGV4IHBhdGgsIGkuZS4gYHRoaXMuZm9vYCwgYC4uL2Zvb2AgZXRjLlxyXG5cdCAgICBpZiAoaXNFbGlnaWJsZSAmJiAhaXNIZWxwZXIpIHtcclxuXHQgICAgICB2YXIgX25hbWUyID0gc2V4cHIucGF0aC5wYXJ0c1swXSxcclxuXHQgICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHJcblx0ICAgICAgaWYgKG9wdGlvbnMua25vd25IZWxwZXJzW19uYW1lMl0pIHtcclxuXHQgICAgICAgIGlzSGVscGVyID0gdHJ1ZTtcclxuXHQgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMua25vd25IZWxwZXJzT25seSkge1xyXG5cdCAgICAgICAgaXNFbGlnaWJsZSA9IGZhbHNlO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgaWYgKGlzSGVscGVyKSB7XHJcblx0ICAgICAgcmV0dXJuICdoZWxwZXInO1xyXG5cdCAgICB9IGVsc2UgaWYgKGlzRWxpZ2libGUpIHtcclxuXHQgICAgICByZXR1cm4gJ2FtYmlndW91cyc7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgcmV0dXJuICdzaW1wbGUnO1xyXG5cdCAgICB9XHJcblx0ICB9LFxyXG5cclxuXHQgIHB1c2hQYXJhbXM6IGZ1bmN0aW9uIHB1c2hQYXJhbXMocGFyYW1zKSB7XHJcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsID0gcGFyYW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG5cdCAgICAgIHRoaXMucHVzaFBhcmFtKHBhcmFtc1tpXSk7XHJcblx0ICAgIH1cclxuXHQgIH0sXHJcblxyXG5cdCAgcHVzaFBhcmFtOiBmdW5jdGlvbiBwdXNoUGFyYW0odmFsKSB7XHJcblx0ICAgIHZhciB2YWx1ZSA9IHZhbC52YWx1ZSAhPSBudWxsID8gdmFsLnZhbHVlIDogdmFsLm9yaWdpbmFsIHx8ICcnO1xyXG5cclxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XHJcblx0ICAgICAgaWYgKHZhbHVlLnJlcGxhY2UpIHtcclxuXHQgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXihcXC4/XFwuXFwvKSovZywgJycpLnJlcGxhY2UoL1xcLy9nLCAnLicpO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgaWYgKHZhbC5kZXB0aCkge1xyXG5cdCAgICAgICAgdGhpcy5hZGREZXB0aCh2YWwuZGVwdGgpO1xyXG5cdCAgICAgIH1cclxuXHQgICAgICB0aGlzLm9wY29kZSgnZ2V0Q29udGV4dCcsIHZhbC5kZXB0aCB8fCAwKTtcclxuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaFN0cmluZ1BhcmFtJywgdmFsdWUsIHZhbC50eXBlKTtcclxuXHJcblx0ICAgICAgaWYgKHZhbC50eXBlID09PSAnU3ViRXhwcmVzc2lvbicpIHtcclxuXHQgICAgICAgIC8vIFN1YkV4cHJlc3Npb25zIGdldCBldmFsdWF0ZWQgYW5kIHBhc3NlZCBpblxyXG5cdCAgICAgICAgLy8gaW4gc3RyaW5nIHBhcmFtcyBtb2RlLlxyXG5cdCAgICAgICAgdGhpcy5hY2NlcHQodmFsKTtcclxuXHQgICAgICB9XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcclxuXHQgICAgICAgIHZhciBibG9ja1BhcmFtSW5kZXggPSB1bmRlZmluZWQ7XHJcblx0ICAgICAgICBpZiAodmFsLnBhcnRzICYmICFfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuc2NvcGVkSWQodmFsKSAmJiAhdmFsLmRlcHRoKSB7XHJcblx0ICAgICAgICAgIGJsb2NrUGFyYW1JbmRleCA9IHRoaXMuYmxvY2tQYXJhbUluZGV4KHZhbC5wYXJ0c1swXSk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICBpZiAoYmxvY2tQYXJhbUluZGV4KSB7XHJcblx0ICAgICAgICAgIHZhciBibG9ja1BhcmFtQ2hpbGQgPSB2YWwucGFydHMuc2xpY2UoMSkuam9pbignLicpO1xyXG5cdCAgICAgICAgICB0aGlzLm9wY29kZSgncHVzaElkJywgJ0Jsb2NrUGFyYW0nLCBibG9ja1BhcmFtSW5kZXgsIGJsb2NrUGFyYW1DaGlsZCk7XHJcblx0ICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICB2YWx1ZSA9IHZhbC5vcmlnaW5hbCB8fCB2YWx1ZTtcclxuXHQgICAgICAgICAgaWYgKHZhbHVlLnJlcGxhY2UpIHtcclxuXHQgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL150aGlzKD86XFwufCQpLywgJycpLnJlcGxhY2UoL15cXC5cXC8vLCAnJykucmVwbGFjZSgvXlxcLiQvLCAnJyk7XHJcblx0ICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoSWQnLCB2YWwudHlwZSwgdmFsdWUpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHQgICAgICB0aGlzLmFjY2VwdCh2YWwpO1xyXG5cdCAgICB9XHJcblx0ICB9LFxyXG5cclxuXHQgIHNldHVwRnVsbE11c3RhY2hlUGFyYW1zOiBmdW5jdGlvbiBzZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhzZXhwciwgcHJvZ3JhbSwgaW52ZXJzZSwgb21pdEVtcHR5KSB7XHJcblx0ICAgIHZhciBwYXJhbXMgPSBzZXhwci5wYXJhbXM7XHJcblx0ICAgIHRoaXMucHVzaFBhcmFtcyhwYXJhbXMpO1xyXG5cclxuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XHJcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xyXG5cclxuXHQgICAgaWYgKHNleHByLmhhc2gpIHtcclxuXHQgICAgICB0aGlzLmFjY2VwdChzZXhwci5oYXNoKTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICB0aGlzLm9wY29kZSgnZW1wdHlIYXNoJywgb21pdEVtcHR5KTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmV0dXJuIHBhcmFtcztcclxuXHQgIH0sXHJcblxyXG5cdCAgYmxvY2tQYXJhbUluZGV4OiBmdW5jdGlvbiBibG9ja1BhcmFtSW5kZXgobmFtZSkge1xyXG5cdCAgICBmb3IgKHZhciBkZXB0aCA9IDAsIGxlbiA9IHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy5sZW5ndGg7IGRlcHRoIDwgbGVuOyBkZXB0aCsrKSB7XHJcblx0ICAgICAgdmFyIGJsb2NrUGFyYW1zID0gdGhpcy5vcHRpb25zLmJsb2NrUGFyYW1zW2RlcHRoXSxcclxuXHQgICAgICAgICAgcGFyYW0gPSBibG9ja1BhcmFtcyAmJiBfdXRpbHMuaW5kZXhPZihibG9ja1BhcmFtcywgbmFtZSk7XHJcblx0ICAgICAgaWYgKGJsb2NrUGFyYW1zICYmIHBhcmFtID49IDApIHtcclxuXHQgICAgICAgIHJldHVybiBbZGVwdGgsIHBhcmFtXTtcclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHQgIH1cclxuXHR9O1xyXG5cclxuXHRmdW5jdGlvbiBwcmVjb21waWxlKGlucHV0LCBvcHRpb25zLCBlbnYpIHtcclxuXHQgIGlmIChpbnB1dCA9PSBudWxsIHx8IHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgJiYgaW5wdXQudHlwZSAhPT0gJ1Byb2dyYW0nKSB7XHJcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdZb3UgbXVzdCBwYXNzIGEgc3RyaW5nIG9yIEhhbmRsZWJhcnMgQVNUIHRvIEhhbmRsZWJhcnMucHJlY29tcGlsZS4gWW91IHBhc3NlZCAnICsgaW5wdXQpO1xyXG5cdCAgfVxyXG5cclxuXHQgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdCAgaWYgKCEoJ2RhdGEnIGluIG9wdGlvbnMpKSB7XHJcblx0ICAgIG9wdGlvbnMuZGF0YSA9IHRydWU7XHJcblx0ICB9XHJcblx0ICBpZiAob3B0aW9ucy5jb21wYXQpIHtcclxuXHQgICAgb3B0aW9ucy51c2VEZXB0aHMgPSB0cnVlO1xyXG5cdCAgfVxyXG5cclxuXHQgIHZhciBhc3QgPSBlbnYucGFyc2UoaW5wdXQsIG9wdGlvbnMpLFxyXG5cdCAgICAgIGVudmlyb25tZW50ID0gbmV3IGVudi5Db21waWxlcigpLmNvbXBpbGUoYXN0LCBvcHRpb25zKTtcclxuXHQgIHJldHVybiBuZXcgZW52LkphdmFTY3JpcHRDb21waWxlcigpLmNvbXBpbGUoZW52aXJvbm1lbnQsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY29tcGlsZShpbnB1dCwgb3B0aW9ucywgZW52KSB7XHJcblx0ICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKSBvcHRpb25zID0ge307XHJcblxyXG5cdCAgaWYgKGlucHV0ID09IG51bGwgfHwgdHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyAmJiBpbnB1dC50eXBlICE9PSAnUHJvZ3JhbScpIHtcclxuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1lvdSBtdXN0IHBhc3MgYSBzdHJpbmcgb3IgSGFuZGxlYmFycyBBU1QgdG8gSGFuZGxlYmFycy5jb21waWxlLiBZb3UgcGFzc2VkICcgKyBpbnB1dCk7XHJcblx0ICB9XHJcblxyXG5cdCAgb3B0aW9ucyA9IF91dGlscy5leHRlbmQoe30sIG9wdGlvbnMpO1xyXG5cdCAgaWYgKCEoJ2RhdGEnIGluIG9wdGlvbnMpKSB7XHJcblx0ICAgIG9wdGlvbnMuZGF0YSA9IHRydWU7XHJcblx0ICB9XHJcblx0ICBpZiAob3B0aW9ucy5jb21wYXQpIHtcclxuXHQgICAgb3B0aW9ucy51c2VEZXB0aHMgPSB0cnVlO1xyXG5cdCAgfVxyXG5cclxuXHQgIHZhciBjb21waWxlZCA9IHVuZGVmaW5lZDtcclxuXHJcblx0ICBmdW5jdGlvbiBjb21waWxlSW5wdXQoKSB7XHJcblx0ICAgIHZhciBhc3QgPSBlbnYucGFyc2UoaW5wdXQsIG9wdGlvbnMpLFxyXG5cdCAgICAgICAgZW52aXJvbm1lbnQgPSBuZXcgZW52LkNvbXBpbGVyKCkuY29tcGlsZShhc3QsIG9wdGlvbnMpLFxyXG5cdCAgICAgICAgdGVtcGxhdGVTcGVjID0gbmV3IGVudi5KYXZhU2NyaXB0Q29tcGlsZXIoKS5jb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zLCB1bmRlZmluZWQsIHRydWUpO1xyXG5cdCAgICByZXR1cm4gZW52LnRlbXBsYXRlKHRlbXBsYXRlU3BlYyk7XHJcblx0ICB9XHJcblxyXG5cdCAgLy8gVGVtcGxhdGUgaXMgb25seSBjb21waWxlZCBvbiBmaXJzdCB1c2UgYW5kIGNhY2hlZCBhZnRlciB0aGF0IHBvaW50LlxyXG5cdCAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIGV4ZWNPcHRpb25zKSB7XHJcblx0ICAgIGlmICghY29tcGlsZWQpIHtcclxuXHQgICAgICBjb21waWxlZCA9IGNvbXBpbGVJbnB1dCgpO1xyXG5cdCAgICB9XHJcblx0ICAgIHJldHVybiBjb21waWxlZC5jYWxsKHRoaXMsIGNvbnRleHQsIGV4ZWNPcHRpb25zKTtcclxuXHQgIH1cclxuXHQgIHJldC5fc2V0dXAgPSBmdW5jdGlvbiAoc2V0dXBPcHRpb25zKSB7XHJcblx0ICAgIGlmICghY29tcGlsZWQpIHtcclxuXHQgICAgICBjb21waWxlZCA9IGNvbXBpbGVJbnB1dCgpO1xyXG5cdCAgICB9XHJcblx0ICAgIHJldHVybiBjb21waWxlZC5fc2V0dXAoc2V0dXBPcHRpb25zKTtcclxuXHQgIH07XHJcblx0ICByZXQuX2NoaWxkID0gZnVuY3Rpb24gKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcclxuXHQgICAgaWYgKCFjb21waWxlZCkge1xyXG5cdCAgICAgIGNvbXBpbGVkID0gY29tcGlsZUlucHV0KCk7XHJcblx0ICAgIH1cclxuXHQgICAgcmV0dXJuIGNvbXBpbGVkLl9jaGlsZChpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcclxuXHQgIH07XHJcblx0ICByZXR1cm4gcmV0O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYXJnRXF1YWxzKGEsIGIpIHtcclxuXHQgIGlmIChhID09PSBiKSB7XHJcblx0ICAgIHJldHVybiB0cnVlO1xyXG5cdCAgfVxyXG5cclxuXHQgIGlmIChfdXRpbHMuaXNBcnJheShhKSAmJiBfdXRpbHMuaXNBcnJheShiKSAmJiBhLmxlbmd0aCA9PT0gYi5sZW5ndGgpIHtcclxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgaWYgKCFhcmdFcXVhbHMoYVtpXSwgYltpXSkpIHtcclxuXHQgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHQgICAgcmV0dXJuIHRydWU7XHJcblx0ICB9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB0cmFuc2Zvcm1MaXRlcmFsVG9QYXRoKHNleHByKSB7XHJcblx0ICBpZiAoIXNleHByLnBhdGgucGFydHMpIHtcclxuXHQgICAgdmFyIGxpdGVyYWwgPSBzZXhwci5wYXRoO1xyXG5cdCAgICAvLyBDYXN0aW5nIHRvIHN0cmluZyBoZXJlIHRvIG1ha2UgZmFsc2UgYW5kIDAgbGl0ZXJhbCB2YWx1ZXMgcGxheSBuaWNlbHkgd2l0aCB0aGUgcmVzdFxyXG5cdCAgICAvLyBvZiB0aGUgc3lzdGVtLlxyXG5cdCAgICBzZXhwci5wYXRoID0ge1xyXG5cdCAgICAgIHR5cGU6ICdQYXRoRXhwcmVzc2lvbicsXHJcblx0ICAgICAgZGF0YTogZmFsc2UsXHJcblx0ICAgICAgZGVwdGg6IDAsXHJcblx0ICAgICAgcGFydHM6IFtsaXRlcmFsLm9yaWdpbmFsICsgJyddLFxyXG5cdCAgICAgIG9yaWdpbmFsOiBsaXRlcmFsLm9yaWdpbmFsICsgJycsXHJcblx0ICAgICAgbG9jOiBsaXRlcmFsLmxvY1xyXG5cdCAgICB9O1xyXG5cdCAgfVxyXG5cdH1cclxuXHJcbi8qKiovIH0pLFxyXG4vKiA0MiAqL1xyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XHJcblxyXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcblxyXG5cdHZhciBfYmFzZSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XHJcblxyXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcclxuXHJcblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcclxuXHJcblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XHJcblxyXG5cdHZhciBfY29kZUdlbiA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpO1xyXG5cclxuXHR2YXIgX2NvZGVHZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29kZUdlbik7XHJcblxyXG5cdGZ1bmN0aW9uIExpdGVyYWwodmFsdWUpIHtcclxuXHQgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIEphdmFTY3JpcHRDb21waWxlcigpIHt9XHJcblxyXG5cdEphdmFTY3JpcHRDb21waWxlci5wcm90b3R5cGUgPSB7XHJcblx0ICAvLyBQVUJMSUMgQVBJOiBZb3UgY2FuIG92ZXJyaWRlIHRoZXNlIG1ldGhvZHMgaW4gYSBzdWJjbGFzcyB0byBwcm92aWRlXHJcblx0ICAvLyBhbHRlcm5hdGl2ZSBjb21waWxlZCBmb3JtcyBmb3IgbmFtZSBsb29rdXAgYW5kIGJ1ZmZlcmluZyBzZW1hbnRpY3NcclxuXHQgIG5hbWVMb29rdXA6IGZ1bmN0aW9uIG5hbWVMb29rdXAocGFyZW50LCBuYW1lIC8qICwgdHlwZSovKSB7XHJcblx0ICAgIGlmIChKYXZhU2NyaXB0Q29tcGlsZXIuaXNWYWxpZEphdmFTY3JpcHRWYXJpYWJsZU5hbWUobmFtZSkpIHtcclxuXHQgICAgICByZXR1cm4gW3BhcmVudCwgJy4nLCBuYW1lXTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICByZXR1cm4gW3BhcmVudCwgJ1snLCBKU09OLnN0cmluZ2lmeShuYW1lKSwgJ10nXTtcclxuXHQgICAgfVxyXG5cdCAgfSxcclxuXHQgIGRlcHRoZWRMb29rdXA6IGZ1bmN0aW9uIGRlcHRoZWRMb29rdXAobmFtZSkge1xyXG5cdCAgICByZXR1cm4gW3RoaXMuYWxpYXNhYmxlKCdjb250YWluZXIubG9va3VwJyksICcoZGVwdGhzLCBcIicsIG5hbWUsICdcIiknXTtcclxuXHQgIH0sXHJcblxyXG5cdCAgY29tcGlsZXJJbmZvOiBmdW5jdGlvbiBjb21waWxlckluZm8oKSB7XHJcblx0ICAgIHZhciByZXZpc2lvbiA9IF9iYXNlLkNPTVBJTEVSX1JFVklTSU9OLFxyXG5cdCAgICAgICAgdmVyc2lvbnMgPSBfYmFzZS5SRVZJU0lPTl9DSEFOR0VTW3JldmlzaW9uXTtcclxuXHQgICAgcmV0dXJuIFtyZXZpc2lvbiwgdmVyc2lvbnNdO1xyXG5cdCAgfSxcclxuXHJcblx0ICBhcHBlbmRUb0J1ZmZlcjogZnVuY3Rpb24gYXBwZW5kVG9CdWZmZXIoc291cmNlLCBsb2NhdGlvbiwgZXhwbGljaXQpIHtcclxuXHQgICAgLy8gRm9yY2UgYSBzb3VyY2UgYXMgdGhpcyBzaW1wbGlmaWVzIHRoZSBtZXJnZSBsb2dpYy5cclxuXHQgICAgaWYgKCFfdXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XHJcblx0ICAgICAgc291cmNlID0gW3NvdXJjZV07XHJcblx0ICAgIH1cclxuXHQgICAgc291cmNlID0gdGhpcy5zb3VyY2Uud3JhcChzb3VyY2UsIGxvY2F0aW9uKTtcclxuXHJcblx0ICAgIGlmICh0aGlzLmVudmlyb25tZW50LmlzU2ltcGxlKSB7XHJcblx0ICAgICAgcmV0dXJuIFsncmV0dXJuICcsIHNvdXJjZSwgJzsnXTtcclxuXHQgICAgfSBlbHNlIGlmIChleHBsaWNpdCkge1xyXG5cdCAgICAgIC8vIFRoaXMgaXMgYSBjYXNlIHdoZXJlIHRoZSBidWZmZXIgb3BlcmF0aW9uIG9jY3VycyBhcyBhIGNoaWxkIG9mIGFub3RoZXJcclxuXHQgICAgICAvLyBjb25zdHJ1Y3QsIGdlbmVyYWxseSBicmFjZXMuIFdlIGhhdmUgdG8gZXhwbGljaXRseSBvdXRwdXQgdGhlc2UgYnVmZmVyXHJcblx0ICAgICAgLy8gb3BlcmF0aW9ucyB0byBlbnN1cmUgdGhhdCB0aGUgZW1pdHRlZCBjb2RlIGdvZXMgaW4gdGhlIGNvcnJlY3QgbG9jYXRpb24uXHJcblx0ICAgICAgcmV0dXJuIFsnYnVmZmVyICs9ICcsIHNvdXJjZSwgJzsnXTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICBzb3VyY2UuYXBwZW5kVG9CdWZmZXIgPSB0cnVlO1xyXG5cdCAgICAgIHJldHVybiBzb3VyY2U7XHJcblx0ICAgIH1cclxuXHQgIH0sXHJcblxyXG5cdCAgaW5pdGlhbGl6ZUJ1ZmZlcjogZnVuY3Rpb24gaW5pdGlhbGl6ZUJ1ZmZlcigpIHtcclxuXHQgICAgcmV0dXJuIHRoaXMucXVvdGVkU3RyaW5nKCcnKTtcclxuXHQgIH0sXHJcblx0ICAvLyBFTkQgUFVCTElDIEFQSVxyXG5cclxuXHQgIGNvbXBpbGU6IGZ1bmN0aW9uIGNvbXBpbGUoZW52aXJvbm1lbnQsIG9wdGlvbnMsIGNvbnRleHQsIGFzT2JqZWN0KSB7XHJcblx0ICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuXHQgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHQgICAgdGhpcy5zdHJpbmdQYXJhbXMgPSB0aGlzLm9wdGlvbnMuc3RyaW5nUGFyYW1zO1xyXG5cdCAgICB0aGlzLnRyYWNrSWRzID0gdGhpcy5vcHRpb25zLnRyYWNrSWRzO1xyXG5cdCAgICB0aGlzLnByZWNvbXBpbGUgPSAhYXNPYmplY3Q7XHJcblxyXG5cdCAgICB0aGlzLm5hbWUgPSB0aGlzLmVudmlyb25tZW50Lm5hbWU7XHJcblx0ICAgIHRoaXMuaXNDaGlsZCA9ICEhY29udGV4dDtcclxuXHQgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dCB8fCB7XHJcblx0ICAgICAgZGVjb3JhdG9yczogW10sXHJcblx0ICAgICAgcHJvZ3JhbXM6IFtdLFxyXG5cdCAgICAgIGVudmlyb25tZW50czogW11cclxuXHQgICAgfTtcclxuXHJcblx0ICAgIHRoaXMucHJlYW1ibGUoKTtcclxuXHJcblx0ICAgIHRoaXMuc3RhY2tTbG90ID0gMDtcclxuXHQgICAgdGhpcy5zdGFja1ZhcnMgPSBbXTtcclxuXHQgICAgdGhpcy5hbGlhc2VzID0ge307XHJcblx0ICAgIHRoaXMucmVnaXN0ZXJzID0geyBsaXN0OiBbXSB9O1xyXG5cdCAgICB0aGlzLmhhc2hlcyA9IFtdO1xyXG5cdCAgICB0aGlzLmNvbXBpbGVTdGFjayA9IFtdO1xyXG5cdCAgICB0aGlzLmlubGluZVN0YWNrID0gW107XHJcblx0ICAgIHRoaXMuYmxvY2tQYXJhbXMgPSBbXTtcclxuXHJcblx0ICAgIHRoaXMuY29tcGlsZUNoaWxkcmVuKGVudmlyb25tZW50LCBvcHRpb25zKTtcclxuXHJcblx0ICAgIHRoaXMudXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHMgfHwgZW52aXJvbm1lbnQudXNlRGVwdGhzIHx8IGVudmlyb25tZW50LnVzZURlY29yYXRvcnMgfHwgdGhpcy5vcHRpb25zLmNvbXBhdDtcclxuXHQgICAgdGhpcy51c2VCbG9ja1BhcmFtcyA9IHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgZW52aXJvbm1lbnQudXNlQmxvY2tQYXJhbXM7XHJcblxyXG5cdCAgICB2YXIgb3Bjb2RlcyA9IGVudmlyb25tZW50Lm9wY29kZXMsXHJcblx0ICAgICAgICBvcGNvZGUgPSB1bmRlZmluZWQsXHJcblx0ICAgICAgICBmaXJzdExvYyA9IHVuZGVmaW5lZCxcclxuXHQgICAgICAgIGkgPSB1bmRlZmluZWQsXHJcblx0ICAgICAgICBsID0gdW5kZWZpbmVkO1xyXG5cclxuXHQgICAgZm9yIChpID0gMCwgbCA9IG9wY29kZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcblx0ICAgICAgb3Bjb2RlID0gb3Bjb2Rlc1tpXTtcclxuXHJcblx0ICAgICAgdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uID0gb3Bjb2RlLmxvYztcclxuXHQgICAgICBmaXJzdExvYyA9IGZpcnN0TG9jIHx8IG9wY29kZS5sb2M7XHJcblx0ICAgICAgdGhpc1tvcGNvZGUub3Bjb2RlXS5hcHBseSh0aGlzLCBvcGNvZGUuYXJncyk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIC8vIEZsdXNoIGFueSB0cmFpbGluZyBjb250ZW50IHRoYXQgbWlnaHQgYmUgcGVuZGluZy5cclxuXHQgICAgdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uID0gZmlyc3RMb2M7XHJcblx0ICAgIHRoaXMucHVzaFNvdXJjZSgnJyk7XHJcblxyXG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5cdCAgICBpZiAodGhpcy5zdGFja1Nsb3QgfHwgdGhpcy5pbmxpbmVTdGFjay5sZW5ndGggfHwgdGhpcy5jb21waWxlU3RhY2subGVuZ3RoKSB7XHJcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0NvbXBpbGUgY29tcGxldGVkIHdpdGggY29udGVudCBsZWZ0IG9uIHN0YWNrJyk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmICghdGhpcy5kZWNvcmF0b3JzLmlzRW1wdHkoKSkge1xyXG5cdCAgICAgIHRoaXMudXNlRGVjb3JhdG9ycyA9IHRydWU7XHJcblxyXG5cdCAgICAgIHRoaXMuZGVjb3JhdG9ycy5wcmVwZW5kKCd2YXIgZGVjb3JhdG9ycyA9IGNvbnRhaW5lci5kZWNvcmF0b3JzO1xcbicpO1xyXG5cdCAgICAgIHRoaXMuZGVjb3JhdG9ycy5wdXNoKCdyZXR1cm4gZm47Jyk7XHJcblxyXG5cdCAgICAgIGlmIChhc09iamVjdCkge1xyXG5cdCAgICAgICAgdGhpcy5kZWNvcmF0b3JzID0gRnVuY3Rpb24uYXBwbHkodGhpcywgWydmbicsICdwcm9wcycsICdjb250YWluZXInLCAnZGVwdGgwJywgJ2RhdGEnLCAnYmxvY2tQYXJhbXMnLCAnZGVwdGhzJywgdGhpcy5kZWNvcmF0b3JzLm1lcmdlKCldKTtcclxuXHQgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgdGhpcy5kZWNvcmF0b3JzLnByZXBlbmQoJ2Z1bmN0aW9uKGZuLCBwcm9wcywgY29udGFpbmVyLCBkZXB0aDAsIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcXG4nKTtcclxuXHQgICAgICAgIHRoaXMuZGVjb3JhdG9ycy5wdXNoKCd9XFxuJyk7XHJcblx0ICAgICAgICB0aGlzLmRlY29yYXRvcnMgPSB0aGlzLmRlY29yYXRvcnMubWVyZ2UoKTtcclxuXHQgICAgICB9XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgdGhpcy5kZWNvcmF0b3JzID0gdW5kZWZpbmVkO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICB2YXIgZm4gPSB0aGlzLmNyZWF0ZUZ1bmN0aW9uQ29udGV4dChhc09iamVjdCk7XHJcblx0ICAgIGlmICghdGhpcy5pc0NoaWxkKSB7XHJcblx0ICAgICAgdmFyIHJldCA9IHtcclxuXHQgICAgICAgIGNvbXBpbGVyOiB0aGlzLmNvbXBpbGVySW5mbygpLFxyXG5cdCAgICAgICAgbWFpbjogZm5cclxuXHQgICAgICB9O1xyXG5cclxuXHQgICAgICBpZiAodGhpcy5kZWNvcmF0b3JzKSB7XHJcblx0ICAgICAgICByZXQubWFpbl9kID0gdGhpcy5kZWNvcmF0b3JzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxyXG5cdCAgICAgICAgcmV0LnVzZURlY29yYXRvcnMgPSB0cnVlO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgdmFyIF9jb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cdCAgICAgIHZhciBwcm9ncmFtcyA9IF9jb250ZXh0LnByb2dyYW1zO1xyXG5cdCAgICAgIHZhciBkZWNvcmF0b3JzID0gX2NvbnRleHQuZGVjb3JhdG9ycztcclxuXHJcblx0ICAgICAgZm9yIChpID0gMCwgbCA9IHByb2dyYW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG5cdCAgICAgICAgaWYgKHByb2dyYW1zW2ldKSB7XHJcblx0ICAgICAgICAgIHJldFtpXSA9IHByb2dyYW1zW2ldO1xyXG5cdCAgICAgICAgICBpZiAoZGVjb3JhdG9yc1tpXSkge1xyXG5cdCAgICAgICAgICAgIHJldFtpICsgJ19kJ10gPSBkZWNvcmF0b3JzW2ldO1xyXG5cdCAgICAgICAgICAgIHJldC51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgaWYgKHRoaXMuZW52aXJvbm1lbnQudXNlUGFydGlhbCkge1xyXG5cdCAgICAgICAgcmV0LnVzZVBhcnRpYWwgPSB0cnVlO1xyXG5cdCAgICAgIH1cclxuXHQgICAgICBpZiAodGhpcy5vcHRpb25zLmRhdGEpIHtcclxuXHQgICAgICAgIHJldC51c2VEYXRhID0gdHJ1ZTtcclxuXHQgICAgICB9XHJcblx0ICAgICAgaWYgKHRoaXMudXNlRGVwdGhzKSB7XHJcblx0ICAgICAgICByZXQudXNlRGVwdGhzID0gdHJ1ZTtcclxuXHQgICAgICB9XHJcblx0ICAgICAgaWYgKHRoaXMudXNlQmxvY2tQYXJhbXMpIHtcclxuXHQgICAgICAgIHJldC51c2VCbG9ja1BhcmFtcyA9IHRydWU7XHJcblx0ICAgICAgfVxyXG5cdCAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGF0KSB7XHJcblx0ICAgICAgICByZXQuY29tcGF0ID0gdHJ1ZTtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIGlmICghYXNPYmplY3QpIHtcclxuXHQgICAgICAgIHJldC5jb21waWxlciA9IEpTT04uc3RyaW5naWZ5KHJldC5jb21waWxlcik7XHJcblxyXG5cdCAgICAgICAgdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uID0geyBzdGFydDogeyBsaW5lOiAxLCBjb2x1bW46IDAgfSB9O1xyXG5cdCAgICAgICAgcmV0ID0gdGhpcy5vYmplY3RMaXRlcmFsKHJldCk7XHJcblxyXG5cdCAgICAgICAgaWYgKG9wdGlvbnMuc3JjTmFtZSkge1xyXG5cdCAgICAgICAgICByZXQgPSByZXQudG9TdHJpbmdXaXRoU291cmNlTWFwKHsgZmlsZTogb3B0aW9ucy5kZXN0TmFtZSB9KTtcclxuXHQgICAgICAgICAgcmV0Lm1hcCA9IHJldC5tYXAgJiYgcmV0Lm1hcC50b1N0cmluZygpO1xyXG5cdCAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgcmV0ID0gcmV0LnRvU3RyaW5nKCk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIHJldC5jb21waWxlck9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICByZXR1cm4gcmV0O1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgIHJldHVybiBmbjtcclxuXHQgICAgfVxyXG5cdCAgfSxcclxuXHJcblx0ICBwcmVhbWJsZTogZnVuY3Rpb24gcHJlYW1ibGUoKSB7XHJcblx0ICAgIC8vIHRyYWNrIHRoZSBsYXN0IGNvbnRleHQgcHVzaGVkIGludG8gcGxhY2UgdG8gYWxsb3cgc2tpcHBpbmcgdGhlXHJcblx0ICAgIC8vIGdldENvbnRleHQgb3Bjb2RlIHdoZW4gaXQgd291bGQgYmUgYSBub29wXHJcblx0ICAgIHRoaXMubGFzdENvbnRleHQgPSAwO1xyXG5cdCAgICB0aGlzLnNvdXJjZSA9IG5ldyBfY29kZUdlbjJbJ2RlZmF1bHQnXSh0aGlzLm9wdGlvbnMuc3JjTmFtZSk7XHJcblx0ICAgIHRoaXMuZGVjb3JhdG9ycyA9IG5ldyBfY29kZUdlbjJbJ2RlZmF1bHQnXSh0aGlzLm9wdGlvbnMuc3JjTmFtZSk7XHJcblx0ICB9LFxyXG5cclxuXHQgIGNyZWF0ZUZ1bmN0aW9uQ29udGV4dDogZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25Db250ZXh0KGFzT2JqZWN0KSB7XHJcblx0ICAgIHZhciB2YXJEZWNsYXJhdGlvbnMgPSAnJztcclxuXHJcblx0ICAgIHZhciBsb2NhbHMgPSB0aGlzLnN0YWNrVmFycy5jb25jYXQodGhpcy5yZWdpc3RlcnMubGlzdCk7XHJcblx0ICAgIGlmIChsb2NhbHMubGVuZ3RoID4gMCkge1xyXG5cdCAgICAgIHZhckRlY2xhcmF0aW9ucyArPSAnLCAnICsgbG9jYWxzLmpvaW4oJywgJyk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIC8vIEdlbmVyYXRlIG1pbmltaXplciBhbGlhcyBtYXBwaW5nc1xyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBXaGVuIHVzaW5nIHRydWUgU291cmNlTm9kZXMsIHRoaXMgd2lsbCB1cGRhdGUgYWxsIHJlZmVyZW5jZXMgdG8gdGhlIGdpdmVuIGFsaWFzXHJcblx0ICAgIC8vIGFzIHRoZSBzb3VyY2Ugbm9kZXMgYXJlIHJldXNlZCBpbiBzaXR1LiBGb3IgdGhlIG5vbi1zb3VyY2Ugbm9kZSBjb21waWxhdGlvbiBtb2RlLFxyXG5cdCAgICAvLyBhbGlhc2VzIHdpbGwgbm90IGJlIHVzZWQsIGJ1dCB0aGlzIGNhc2UgaXMgYWxyZWFkeSBiZWluZyBydW4gb24gdGhlIGNsaWVudCBhbmRcclxuXHQgICAgLy8gd2UgYXJlbid0IGNvbmNlcm4gYWJvdXQgbWluaW1pemluZyB0aGUgdGVtcGxhdGUgc2l6ZS5cclxuXHQgICAgdmFyIGFsaWFzQ291bnQgPSAwO1xyXG5cdCAgICBmb3IgKHZhciBhbGlhcyBpbiB0aGlzLmFsaWFzZXMpIHtcclxuXHQgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGd1YXJkLWZvci1pblxyXG5cdCAgICAgIHZhciBub2RlID0gdGhpcy5hbGlhc2VzW2FsaWFzXTtcclxuXHJcblx0ICAgICAgaWYgKHRoaXMuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShhbGlhcykgJiYgbm9kZS5jaGlsZHJlbiAmJiBub2RlLnJlZmVyZW5jZUNvdW50ID4gMSkge1xyXG5cdCAgICAgICAgdmFyRGVjbGFyYXRpb25zICs9ICcsIGFsaWFzJyArICsrYWxpYXNDb3VudCArICc9JyArIGFsaWFzO1xyXG5cdCAgICAgICAgbm9kZS5jaGlsZHJlblswXSA9ICdhbGlhcycgKyBhbGlhc0NvdW50O1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgdmFyIHBhcmFtcyA9IFsnY29udGFpbmVyJywgJ2RlcHRoMCcsICdoZWxwZXJzJywgJ3BhcnRpYWxzJywgJ2RhdGEnXTtcclxuXHJcblx0ICAgIGlmICh0aGlzLnVzZUJsb2NrUGFyYW1zIHx8IHRoaXMudXNlRGVwdGhzKSB7XHJcblx0ICAgICAgcGFyYW1zLnB1c2goJ2Jsb2NrUGFyYW1zJyk7XHJcblx0ICAgIH1cclxuXHQgICAgaWYgKHRoaXMudXNlRGVwdGhzKSB7XHJcblx0ICAgICAgcGFyYW1zLnB1c2goJ2RlcHRocycpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICAvLyBQZXJmb3JtIGEgc2Vjb25kIHBhc3Mgb3ZlciB0aGUgb3V0cHV0IHRvIG1lcmdlIGNvbnRlbnQgd2hlbiBwb3NzaWJsZVxyXG5cdCAgICB2YXIgc291cmNlID0gdGhpcy5tZXJnZVNvdXJjZSh2YXJEZWNsYXJhdGlvbnMpO1xyXG5cclxuXHQgICAgaWYgKGFzT2JqZWN0KSB7XHJcblx0ICAgICAgcGFyYW1zLnB1c2goc291cmNlKTtcclxuXHJcblx0ICAgICAgcmV0dXJuIEZ1bmN0aW9uLmFwcGx5KHRoaXMsIHBhcmFtcyk7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMuc291cmNlLndyYXAoWydmdW5jdGlvbignLCBwYXJhbXMuam9pbignLCcpLCAnKSB7XFxuICAnLCBzb3VyY2UsICd9J10pO1xyXG5cdCAgICB9XHJcblx0ICB9LFxyXG5cdCAgbWVyZ2VTb3VyY2U6IGZ1bmN0aW9uIG1lcmdlU291cmNlKHZhckRlY2xhcmF0aW9ucykge1xyXG5cdCAgICB2YXIgaXNTaW1wbGUgPSB0aGlzLmVudmlyb25tZW50LmlzU2ltcGxlLFxyXG5cdCAgICAgICAgYXBwZW5kT25seSA9ICF0aGlzLmZvcmNlQnVmZmVyLFxyXG5cdCAgICAgICAgYXBwZW5kRmlyc3QgPSB1bmRlZmluZWQsXHJcblx0ICAgICAgICBzb3VyY2VTZWVuID0gdW5kZWZpbmVkLFxyXG5cdCAgICAgICAgYnVmZmVyU3RhcnQgPSB1bmRlZmluZWQsXHJcblx0ICAgICAgICBidWZmZXJFbmQgPSB1bmRlZmluZWQ7XHJcblx0ICAgIHRoaXMuc291cmNlLmVhY2goZnVuY3Rpb24gKGxpbmUpIHtcclxuXHQgICAgICBpZiAobGluZS5hcHBlbmRUb0J1ZmZlcikge1xyXG5cdCAgICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XHJcblx0ICAgICAgICAgIGxpbmUucHJlcGVuZCgnICArICcpO1xyXG5cdCAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgYnVmZmVyU3RhcnQgPSBsaW5lO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgYnVmZmVyRW5kID0gbGluZTtcclxuXHQgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XHJcblx0ICAgICAgICAgIGlmICghc291cmNlU2Vlbikge1xyXG5cdCAgICAgICAgICAgIGFwcGVuZEZpcnN0ID0gdHJ1ZTtcclxuXHQgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICBidWZmZXJTdGFydC5wcmVwZW5kKCdidWZmZXIgKz0gJyk7XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICAgICAgYnVmZmVyRW5kLmFkZCgnOycpO1xyXG5cdCAgICAgICAgICBidWZmZXJTdGFydCA9IGJ1ZmZlckVuZCA9IHVuZGVmaW5lZDtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBzb3VyY2VTZWVuID0gdHJ1ZTtcclxuXHQgICAgICAgIGlmICghaXNTaW1wbGUpIHtcclxuXHQgICAgICAgICAgYXBwZW5kT25seSA9IGZhbHNlO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHQgICAgfSk7XHJcblxyXG5cdCAgICBpZiAoYXBwZW5kT25seSkge1xyXG5cdCAgICAgIGlmIChidWZmZXJTdGFydCkge1xyXG5cdCAgICAgICAgYnVmZmVyU3RhcnQucHJlcGVuZCgncmV0dXJuICcpO1xyXG5cdCAgICAgICAgYnVmZmVyRW5kLmFkZCgnOycpO1xyXG5cdCAgICAgIH0gZWxzZSBpZiAoIXNvdXJjZVNlZW4pIHtcclxuXHQgICAgICAgIHRoaXMuc291cmNlLnB1c2goJ3JldHVybiBcIlwiOycpO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICB2YXJEZWNsYXJhdGlvbnMgKz0gJywgYnVmZmVyID0gJyArIChhcHBlbmRGaXJzdCA/ICcnIDogdGhpcy5pbml0aWFsaXplQnVmZmVyKCkpO1xyXG5cclxuXHQgICAgICBpZiAoYnVmZmVyU3RhcnQpIHtcclxuXHQgICAgICAgIGJ1ZmZlclN0YXJ0LnByZXBlbmQoJ3JldHVybiBidWZmZXIgKyAnKTtcclxuXHQgICAgICAgIGJ1ZmZlckVuZC5hZGQoJzsnKTtcclxuXHQgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgdGhpcy5zb3VyY2UucHVzaCgncmV0dXJuIGJ1ZmZlcjsnKTtcclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmICh2YXJEZWNsYXJhdGlvbnMpIHtcclxuXHQgICAgICB0aGlzLnNvdXJjZS5wcmVwZW5kKCd2YXIgJyArIHZhckRlY2xhcmF0aW9ucy5zdWJzdHJpbmcoMikgKyAoYXBwZW5kRmlyc3QgPyAnJyA6ICc7XFxuJykpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICByZXR1cm4gdGhpcy5zb3VyY2UubWVyZ2UoKTtcclxuXHQgIH0sXHJcblxyXG5cdCAgLy8gW2Jsb2NrVmFsdWVdXHJcblx0ICAvL1xyXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgdmFsdWVcclxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcmV0dXJuIHZhbHVlIG9mIGJsb2NrSGVscGVyTWlzc2luZ1xyXG5cdCAgLy9cclxuXHQgIC8vIFRoZSBwdXJwb3NlIG9mIHRoaXMgb3Bjb2RlIGlzIHRvIHRha2UgYSBibG9jayBvZiB0aGUgZm9ybVxyXG5cdCAgLy8gYHt7I3RoaXMuZm9vfX0uLi57ey90aGlzLmZvb319YCwgcmVzb2x2ZSB0aGUgdmFsdWUgb2YgYGZvb2AsIGFuZFxyXG5cdCAgLy8gcmVwbGFjZSBpdCBvbiB0aGUgc3RhY2sgd2l0aCB0aGUgcmVzdWx0IG9mIHByb3Blcmx5XHJcblx0ICAvLyBpbnZva2luZyBibG9ja0hlbHBlck1pc3NpbmcuXHJcblx0ICBibG9ja1ZhbHVlOiBmdW5jdGlvbiBibG9ja1ZhbHVlKG5hbWUpIHtcclxuXHQgICAgdmFyIGJsb2NrSGVscGVyTWlzc2luZyA9IHRoaXMuYWxpYXNhYmxlKCdoZWxwZXJzLmJsb2NrSGVscGVyTWlzc2luZycpLFxyXG5cdCAgICAgICAgcGFyYW1zID0gW3RoaXMuY29udGV4dE5hbWUoMCldO1xyXG5cdCAgICB0aGlzLnNldHVwSGVscGVyQXJncyhuYW1lLCAwLCBwYXJhbXMpO1xyXG5cclxuXHQgICAgdmFyIGJsb2NrTmFtZSA9IHRoaXMucG9wU3RhY2soKTtcclxuXHQgICAgcGFyYW1zLnNwbGljZSgxLCAwLCBibG9ja05hbWUpO1xyXG5cclxuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChibG9ja0hlbHBlck1pc3NpbmcsICdjYWxsJywgcGFyYW1zKSk7XHJcblx0ICB9LFxyXG5cclxuXHQgIC8vIFthbWJpZ3VvdXNCbG9ja1ZhbHVlXVxyXG5cdCAgLy9cclxuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIGludmVyc2UsIHByb2dyYW0sIHZhbHVlXHJcblx0ICAvLyBDb21waWxlciB2YWx1ZSwgYmVmb3JlOiBsYXN0SGVscGVyPXZhbHVlIG9mIGxhc3QgZm91bmQgaGVscGVyLCBpZiBhbnlcclxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlciwgaWYgbm8gbGFzdEhlbHBlcjogc2FtZSBhcyBbYmxvY2tWYWx1ZV1cclxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlciwgaWYgbGFzdEhlbHBlcjogdmFsdWVcclxuXHQgIGFtYmlndW91c0Jsb2NrVmFsdWU6IGZ1bmN0aW9uIGFtYmlndW91c0Jsb2NrVmFsdWUoKSB7XHJcblx0ICAgIC8vIFdlJ3JlIGJlaW5nIGEgYml0IGNoZWVreSBhbmQgcmV1c2luZyB0aGUgb3B0aW9ucyB2YWx1ZSBmcm9tIHRoZSBwcmlvciBleGVjXHJcblx0ICAgIHZhciBibG9ja0hlbHBlck1pc3NpbmcgPSB0aGlzLmFsaWFzYWJsZSgnaGVscGVycy5ibG9ja0hlbHBlck1pc3NpbmcnKSxcclxuXHQgICAgICAgIHBhcmFtcyA9IFt0aGlzLmNvbnRleHROYW1lKDApXTtcclxuXHQgICAgdGhpcy5zZXR1cEhlbHBlckFyZ3MoJycsIDAsIHBhcmFtcywgdHJ1ZSk7XHJcblxyXG5cdCAgICB0aGlzLmZsdXNoSW5saW5lKCk7XHJcblxyXG5cdCAgICB2YXIgY3VycmVudCA9IHRoaXMudG9wU3RhY2soKTtcclxuXHQgICAgcGFyYW1zLnNwbGljZSgxLCAwLCBjdXJyZW50KTtcclxuXHJcblx0ICAgIHRoaXMucHVzaFNvdXJjZShbJ2lmICghJywgdGhpcy5sYXN0SGVscGVyLCAnKSB7ICcsIGN1cnJlbnQsICcgPSAnLCB0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoYmxvY2tIZWxwZXJNaXNzaW5nLCAnY2FsbCcsIHBhcmFtcyksICd9J10pO1xyXG5cdCAgfSxcclxuXHJcblx0ICAvLyBbYXBwZW5kQ29udGVudF1cclxuXHQgIC8vXHJcblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cclxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXHJcblx0ICAvL1xyXG5cdCAgLy8gQXBwZW5kcyB0aGUgc3RyaW5nIHZhbHVlIG9mIGBjb250ZW50YCB0byB0aGUgY3VycmVudCBidWZmZXJcclxuXHQgIGFwcGVuZENvbnRlbnQ6IGZ1bmN0aW9uIGFwcGVuZENvbnRlbnQoY29udGVudCkge1xyXG5cdCAgICBpZiAodGhpcy5wZW5kaW5nQ29udGVudCkge1xyXG5cdCAgICAgIGNvbnRlbnQgPSB0aGlzLnBlbmRpbmdDb250ZW50ICsgY29udGVudDtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICB0aGlzLnBlbmRpbmdMb2NhdGlvbiA9IHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgdGhpcy5wZW5kaW5nQ29udGVudCA9IGNvbnRlbnQ7XHJcblx0ICB9LFxyXG5cclxuXHQgIC8vIFthcHBlbmRdXHJcblx0ICAvL1xyXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogdmFsdWUsIC4uLlxyXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cclxuXHQgIC8vXHJcblx0ICAvLyBDb2VyY2VzIGB2YWx1ZWAgdG8gYSBTdHJpbmcgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGN1cnJlbnQgYnVmZmVyLlxyXG5cdCAgLy9cclxuXHQgIC8vIElmIGB2YWx1ZWAgaXMgdHJ1dGh5LCBvciAwLCBpdCBpcyBjb2VyY2VkIGludG8gYSBzdHJpbmcgYW5kIGFwcGVuZGVkXHJcblx0ICAvLyBPdGhlcndpc2UsIHRoZSBlbXB0eSBzdHJpbmcgaXMgYXBwZW5kZWRcclxuXHQgIGFwcGVuZDogZnVuY3Rpb24gYXBwZW5kKCkge1xyXG5cdCAgICBpZiAodGhpcy5pc0lubGluZSgpKSB7XHJcblx0ICAgICAgdGhpcy5yZXBsYWNlU3RhY2soZnVuY3Rpb24gKGN1cnJlbnQpIHtcclxuXHQgICAgICAgIHJldHVybiBbJyAhPSBudWxsID8gJywgY3VycmVudCwgJyA6IFwiXCInXTtcclxuXHQgICAgICB9KTtcclxuXHJcblx0ICAgICAgdGhpcy5wdXNoU291cmNlKHRoaXMuYXBwZW5kVG9CdWZmZXIodGhpcy5wb3BTdGFjaygpKSk7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgdmFyIGxvY2FsID0gdGhpcy5wb3BTdGFjaygpO1xyXG5cdCAgICAgIHRoaXMucHVzaFNvdXJjZShbJ2lmICgnLCBsb2NhbCwgJyAhPSBudWxsKSB7ICcsIHRoaXMuYXBwZW5kVG9CdWZmZXIobG9jYWwsIHVuZGVmaW5lZCwgdHJ1ZSksICcgfSddKTtcclxuXHQgICAgICBpZiAodGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSkge1xyXG5cdCAgICAgICAgdGhpcy5wdXNoU291cmNlKFsnZWxzZSB7ICcsIHRoaXMuYXBwZW5kVG9CdWZmZXIoXCInJ1wiLCB1bmRlZmluZWQsIHRydWUpLCAnIH0nXSk7XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblx0ICB9LFxyXG5cclxuXHQgIC8vIFthcHBlbmRFc2NhcGVkXVxyXG5cdCAgLy9cclxuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IHZhbHVlLCAuLi5cclxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXHJcblx0ICAvL1xyXG5cdCAgLy8gRXNjYXBlIGB2YWx1ZWAgYW5kIGFwcGVuZCBpdCB0byB0aGUgYnVmZmVyXHJcblx0ICBhcHBlbmRFc2NhcGVkOiBmdW5jdGlvbiBhcHBlbmRFc2NhcGVkKCkge1xyXG5cdCAgICB0aGlzLnB1c2hTb3VyY2UodGhpcy5hcHBlbmRUb0J1ZmZlcihbdGhpcy5hbGlhc2FibGUoJ2NvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uJyksICcoJywgdGhpcy5wb3BTdGFjaygpLCAnKSddKSk7XHJcblx0ICB9LFxyXG5cclxuXHQgIC8vIFtnZXRDb250ZXh0XVxyXG5cdCAgLy9cclxuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxyXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cclxuXHQgIC8vIENvbXBpbGVyIHZhbHVlLCBhZnRlcjogbGFzdENvbnRleHQ9ZGVwdGhcclxuXHQgIC8vXHJcblx0ICAvLyBTZXQgdGhlIHZhbHVlIG9mIHRoZSBgbGFzdENvbnRleHRgIGNvbXBpbGVyIHZhbHVlIHRvIHRoZSBkZXB0aFxyXG5cdCAgZ2V0Q29udGV4dDogZnVuY3Rpb24gZ2V0Q29udGV4dChkZXB0aCkge1xyXG5cdCAgICB0aGlzLmxhc3RDb250ZXh0ID0gZGVwdGg7XHJcblx0ICB9LFxyXG5cclxuXHQgIC8vIFtwdXNoQ29udGV4dF1cclxuXHQgIC8vXHJcblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cclxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogY3VycmVudENvbnRleHQsIC4uLlxyXG5cdCAgLy9cclxuXHQgIC8vIFB1c2hlcyB0aGUgdmFsdWUgb2YgdGhlIGN1cnJlbnQgY29udGV4dCBvbnRvIHRoZSBzdGFjay5cclxuXHQgIHB1c2hDb250ZXh0OiBmdW5jdGlvbiBwdXNoQ29udGV4dCgpIHtcclxuXHQgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHRoaXMuY29udGV4dE5hbWUodGhpcy5sYXN0Q29udGV4dCkpO1xyXG5cdCAgfSxcclxuXHJcblx0ICAvLyBbbG9va3VwT25Db250ZXh0XVxyXG5cdCAgLy9cclxuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxyXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBjdXJyZW50Q29udGV4dFtuYW1lXSwgLi4uXHJcblx0ICAvL1xyXG5cdCAgLy8gTG9va3MgdXAgdGhlIHZhbHVlIG9mIGBuYW1lYCBvbiB0aGUgY3VycmVudCBjb250ZXh0IGFuZCBwdXNoZXNcclxuXHQgIC8vIGl0IG9udG8gdGhlIHN0YWNrLlxyXG5cdCAgbG9va3VwT25Db250ZXh0OiBmdW5jdGlvbiBsb29rdXBPbkNvbnRleHQocGFydHMsIGZhbHN5LCBzdHJpY3QsIHNjb3BlZCkge1xyXG5cdCAgICB2YXIgaSA9IDA7XHJcblxyXG5cdCAgICBpZiAoIXNjb3BlZCAmJiB0aGlzLm9wdGlvbnMuY29tcGF0ICYmICF0aGlzLmxhc3RDb250ZXh0KSB7XHJcblx0ICAgICAgLy8gVGhlIGRlcHRoZWQgcXVlcnkgaXMgZXhwZWN0ZWQgdG8gaGFuZGxlIHRoZSB1bmRlZmluZWQgbG9naWMgZm9yIHRoZSByb290IGxldmVsIHRoYXRcclxuXHQgICAgICAvLyBpcyBpbXBsZW1lbnRlZCBiZWxvdywgc28gd2UgZXZhbHVhdGUgdGhhdCBkaXJlY3RseSBpbiBjb21wYXQgbW9kZVxyXG5cdCAgICAgIHRoaXMucHVzaCh0aGlzLmRlcHRoZWRMb29rdXAocGFydHNbaSsrXSkpO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgIHRoaXMucHVzaENvbnRleHQoKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgdGhpcy5yZXNvbHZlUGF0aCgnY29udGV4dCcsIHBhcnRzLCBpLCBmYWxzeSwgc3RyaWN0KTtcclxuXHQgIH0sXHJcblxyXG5cdCAgLy8gW2xvb2t1cEJsb2NrUGFyYW1dXHJcblx0ICAvL1xyXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXHJcblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGJsb2NrUGFyYW1bbmFtZV0sIC4uLlxyXG5cdCAgLy9cclxuXHQgIC8vIExvb2tzIHVwIHRoZSB2YWx1ZSBvZiBgcGFydHNgIG9uIHRoZSBnaXZlbiBibG9jayBwYXJhbSBhbmQgcHVzaGVzXHJcblx0ICAvLyBpdCBvbnRvIHRoZSBzdGFjay5cclxuXHQgIGxvb2t1cEJsb2NrUGFyYW06IGZ1bmN0aW9uIGxvb2t1cEJsb2NrUGFyYW0oYmxvY2tQYXJhbUlkLCBwYXJ0cykge1xyXG5cdCAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdHJ1ZTtcclxuXHJcblx0ICAgIHRoaXMucHVzaChbJ2Jsb2NrUGFyYW1zWycsIGJsb2NrUGFyYW1JZFswXSwgJ11bJywgYmxvY2tQYXJhbUlkWzFdLCAnXSddKTtcclxuXHQgICAgdGhpcy5yZXNvbHZlUGF0aCgnY29udGV4dCcsIHBhcnRzLCAxKTtcclxuXHQgIH0sXHJcblxyXG5cdCAgLy8gW2xvb2t1cERhdGFdXHJcblx0ICAvL1xyXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXHJcblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGRhdGEsIC4uLlxyXG5cdCAgLy9cclxuXHQgIC8vIFB1c2ggdGhlIGRhdGEgbG9va3VwIG9wZXJhdG9yXHJcblx0ICBsb29rdXBEYXRhOiBmdW5jdGlvbiBsb29rdXBEYXRhKGRlcHRoLCBwYXJ0cywgc3RyaWN0KSB7XHJcblx0ICAgIGlmICghZGVwdGgpIHtcclxuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ2RhdGEnKTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ2NvbnRhaW5lci5kYXRhKGRhdGEsICcgKyBkZXB0aCArICcpJyk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHRoaXMucmVzb2x2ZVBhdGgoJ2RhdGEnLCBwYXJ0cywgMCwgdHJ1ZSwgc3RyaWN0KTtcclxuXHQgIH0sXHJcblxyXG5cdCAgcmVzb2x2ZVBhdGg6IGZ1bmN0aW9uIHJlc29sdmVQYXRoKHR5cGUsIHBhcnRzLCBpLCBmYWxzeSwgc3RyaWN0KSB7XHJcblx0ICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcblxyXG5cdCAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5zdHJpY3QgfHwgdGhpcy5vcHRpb25zLmFzc3VtZU9iamVjdHMpIHtcclxuXHQgICAgICB0aGlzLnB1c2goc3RyaWN0TG9va3VwKHRoaXMub3B0aW9ucy5zdHJpY3QgJiYgc3RyaWN0LCB0aGlzLCBwYXJ0cywgdHlwZSkpO1xyXG5cdCAgICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgdmFyIGxlbiA9IHBhcnRzLmxlbmd0aDtcclxuXHQgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG5cdCAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xyXG5cdCAgICAgIHRoaXMucmVwbGFjZVN0YWNrKGZ1bmN0aW9uIChjdXJyZW50KSB7XHJcblx0ICAgICAgICB2YXIgbG9va3VwID0gX3RoaXMubmFtZUxvb2t1cChjdXJyZW50LCBwYXJ0c1tpXSwgdHlwZSk7XHJcblx0ICAgICAgICAvLyBXZSB3YW50IHRvIGVuc3VyZSB0aGF0IHplcm8gYW5kIGZhbHNlIGFyZSBoYW5kbGVkIHByb3Blcmx5IGlmIHRoZSBjb250ZXh0IChmYWxzeSBmbGFnKVxyXG5cdCAgICAgICAgLy8gbmVlZHMgdG8gaGF2ZSB0aGUgc3BlY2lhbCBoYW5kbGluZyBmb3IgdGhlc2UgdmFsdWVzLlxyXG5cdCAgICAgICAgaWYgKCFmYWxzeSkge1xyXG5cdCAgICAgICAgICByZXR1cm4gWycgIT0gbnVsbCA/ICcsIGxvb2t1cCwgJyA6ICcsIGN1cnJlbnRdO1xyXG5cdCAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbiB1c2UgZ2VuZXJpYyBmYWxzeSBoYW5kbGluZ1xyXG5cdCAgICAgICAgICByZXR1cm4gWycgJiYgJywgbG9va3VwXTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9KTtcclxuXHQgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWxvb3AtZnVuYyAqL1xyXG5cdCAgICB9XHJcblx0ICB9LFxyXG5cclxuXHQgIC8vIFtyZXNvbHZlUG9zc2libGVMYW1iZGFdXHJcblx0ICAvL1xyXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogdmFsdWUsIC4uLlxyXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXNvbHZlZCB2YWx1ZSwgLi4uXHJcblx0ICAvL1xyXG5cdCAgLy8gSWYgdGhlIGB2YWx1ZWAgaXMgYSBsYW1iZGEsIHJlcGxhY2UgaXQgb24gdGhlIHN0YWNrIGJ5XHJcblx0ICAvLyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBsYW1iZGFcclxuXHQgIHJlc29sdmVQb3NzaWJsZUxhbWJkYTogZnVuY3Rpb24gcmVzb2x2ZVBvc3NpYmxlTGFtYmRhKCkge1xyXG5cdCAgICB0aGlzLnB1c2goW3RoaXMuYWxpYXNhYmxlKCdjb250YWluZXIubGFtYmRhJyksICcoJywgdGhpcy5wb3BTdGFjaygpLCAnLCAnLCB0aGlzLmNvbnRleHROYW1lKDApLCAnKSddKTtcclxuXHQgIH0sXHJcblxyXG5cdCAgLy8gW3B1c2hTdHJpbmdQYXJhbV1cclxuXHQgIC8vXHJcblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cclxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogc3RyaW5nLCBjdXJyZW50Q29udGV4dCwgLi4uXHJcblx0ICAvL1xyXG5cdCAgLy8gVGhpcyBvcGNvZGUgaXMgZGVzaWduZWQgZm9yIHVzZSBpbiBzdHJpbmcgbW9kZSwgd2hpY2hcclxuXHQgIC8vIHByb3ZpZGVzIHRoZSBzdHJpbmcgdmFsdWUgb2YgYSBwYXJhbWV0ZXIgYWxvbmcgd2l0aCBpdHNcclxuXHQgIC8vIGRlcHRoIHJhdGhlciB0aGFuIHJlc29sdmluZyBpdCBpbW1lZGlhdGVseS5cclxuXHQgIHB1c2hTdHJpbmdQYXJhbTogZnVuY3Rpb24gcHVzaFN0cmluZ1BhcmFtKHN0cmluZywgdHlwZSkge1xyXG5cdCAgICB0aGlzLnB1c2hDb250ZXh0KCk7XHJcblx0ICAgIHRoaXMucHVzaFN0cmluZyh0eXBlKTtcclxuXHJcblx0ICAgIC8vIElmIGl0J3MgYSBzdWJleHByZXNzaW9uLCB0aGUgc3RyaW5nIHJlc3VsdFxyXG5cdCAgICAvLyB3aWxsIGJlIHB1c2hlZCBhZnRlciB0aGlzIG9wY29kZS5cclxuXHQgICAgaWYgKHR5cGUgIT09ICdTdWJFeHByZXNzaW9uJykge1xyXG5cdCAgICAgIGlmICh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJykge1xyXG5cdCAgICAgICAgdGhpcy5wdXNoU3RyaW5nKHN0cmluZyk7XHJcblx0ICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbChzdHJpbmcpO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cdCAgfSxcclxuXHJcblx0ICBlbXB0eUhhc2g6IGZ1bmN0aW9uIGVtcHR5SGFzaChvbWl0RW1wdHkpIHtcclxuXHQgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcclxuXHQgICAgICB0aGlzLnB1c2goJ3t9Jyk7IC8vIGhhc2hJZHNcclxuXHQgICAgfVxyXG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcclxuXHQgICAgICB0aGlzLnB1c2goJ3t9Jyk7IC8vIGhhc2hDb250ZXh0c1xyXG5cdCAgICAgIHRoaXMucHVzaCgne30nKTsgLy8gaGFzaFR5cGVzXHJcblx0ICAgIH1cclxuXHQgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKG9taXRFbXB0eSA/ICd1bmRlZmluZWQnIDogJ3t9Jyk7XHJcblx0ICB9LFxyXG5cdCAgcHVzaEhhc2g6IGZ1bmN0aW9uIHB1c2hIYXNoKCkge1xyXG5cdCAgICBpZiAodGhpcy5oYXNoKSB7XHJcblx0ICAgICAgdGhpcy5oYXNoZXMucHVzaCh0aGlzLmhhc2gpO1xyXG5cdCAgICB9XHJcblx0ICAgIHRoaXMuaGFzaCA9IHsgdmFsdWVzOiBbXSwgdHlwZXM6IFtdLCBjb250ZXh0czogW10sIGlkczogW10gfTtcclxuXHQgIH0sXHJcblx0ICBwb3BIYXNoOiBmdW5jdGlvbiBwb3BIYXNoKCkge1xyXG5cdCAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcclxuXHQgICAgdGhpcy5oYXNoID0gdGhpcy5oYXNoZXMucG9wKCk7XHJcblxyXG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xyXG5cdCAgICAgIHRoaXMucHVzaCh0aGlzLm9iamVjdExpdGVyYWwoaGFzaC5pZHMpKTtcclxuXHQgICAgfVxyXG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcclxuXHQgICAgICB0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGhhc2guY29udGV4dHMpKTtcclxuXHQgICAgICB0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGhhc2gudHlwZXMpKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgdGhpcy5wdXNoKHRoaXMub2JqZWN0TGl0ZXJhbChoYXNoLnZhbHVlcykpO1xyXG5cdCAgfSxcclxuXHJcblx0ICAvLyBbcHVzaFN0cmluZ11cclxuXHQgIC8vXHJcblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cclxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcXVvdGVkU3RyaW5nKHN0cmluZyksIC4uLlxyXG5cdCAgLy9cclxuXHQgIC8vIFB1c2ggYSBxdW90ZWQgdmVyc2lvbiBvZiBgc3RyaW5nYCBvbnRvIHRoZSBzdGFja1xyXG5cdCAgcHVzaFN0cmluZzogZnVuY3Rpb24gcHVzaFN0cmluZyhzdHJpbmcpIHtcclxuXHQgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHRoaXMucXVvdGVkU3RyaW5nKHN0cmluZykpO1xyXG5cdCAgfSxcclxuXHJcblx0ICAvLyBbcHVzaExpdGVyYWxdXHJcblx0ICAvL1xyXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXHJcblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHZhbHVlLCAuLi5cclxuXHQgIC8vXHJcblx0ICAvLyBQdXNoZXMgYSB2YWx1ZSBvbnRvIHRoZSBzdGFjay4gVGhpcyBvcGVyYXRpb24gcHJldmVudHNcclxuXHQgIC8vIHRoZSBjb21waWxlciBmcm9tIGNyZWF0aW5nIGEgdGVtcG9yYXJ5IHZhcmlhYmxlIHRvIGhvbGRcclxuXHQgIC8vIGl0LlxyXG5cdCAgcHVzaExpdGVyYWw6IGZ1bmN0aW9uIHB1c2hMaXRlcmFsKHZhbHVlKSB7XHJcblx0ICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCh2YWx1ZSk7XHJcblx0ICB9LFxyXG5cclxuXHQgIC8vIFtwdXNoUHJvZ3JhbV1cclxuXHQgIC8vXHJcblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cclxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcHJvZ3JhbShndWlkKSwgLi4uXHJcblx0ICAvL1xyXG5cdCAgLy8gUHVzaCBhIHByb2dyYW0gZXhwcmVzc2lvbiBvbnRvIHRoZSBzdGFjay4gVGhpcyB0YWtlc1xyXG5cdCAgLy8gYSBjb21waWxlLXRpbWUgZ3VpZCBhbmQgY29udmVydHMgaXQgaW50byBhIHJ1bnRpbWUtYWNjZXNzaWJsZVxyXG5cdCAgLy8gZXhwcmVzc2lvbi5cclxuXHQgIHB1c2hQcm9ncmFtOiBmdW5jdGlvbiBwdXNoUHJvZ3JhbShndWlkKSB7XHJcblx0ICAgIGlmIChndWlkICE9IG51bGwpIHtcclxuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwodGhpcy5wcm9ncmFtRXhwcmVzc2lvbihndWlkKSk7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKG51bGwpO1xyXG5cdCAgICB9XHJcblx0ICB9LFxyXG5cclxuXHQgIC8vIFtyZWdpc3RlckRlY29yYXRvcl1cclxuXHQgIC8vXHJcblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxyXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cclxuXHQgIC8vXHJcblx0ICAvLyBQb3BzIG9mZiB0aGUgZGVjb3JhdG9yJ3MgcGFyYW1ldGVycywgaW52b2tlcyB0aGUgZGVjb3JhdG9yLFxyXG5cdCAgLy8gYW5kIGluc2VydHMgdGhlIGRlY29yYXRvciBpbnRvIHRoZSBkZWNvcmF0b3JzIGxpc3QuXHJcblx0ICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gcmVnaXN0ZXJEZWNvcmF0b3IocGFyYW1TaXplLCBuYW1lKSB7XHJcblx0ICAgIHZhciBmb3VuZERlY29yYXRvciA9IHRoaXMubmFtZUxvb2t1cCgnZGVjb3JhdG9ycycsIG5hbWUsICdkZWNvcmF0b3InKSxcclxuXHQgICAgICAgIG9wdGlvbnMgPSB0aGlzLnNldHVwSGVscGVyQXJncyhuYW1lLCBwYXJhbVNpemUpO1xyXG5cclxuXHQgICAgdGhpcy5kZWNvcmF0b3JzLnB1c2goWydmbiA9ICcsIHRoaXMuZGVjb3JhdG9ycy5mdW5jdGlvbkNhbGwoZm91bmREZWNvcmF0b3IsICcnLCBbJ2ZuJywgJ3Byb3BzJywgJ2NvbnRhaW5lcicsIG9wdGlvbnNdKSwgJyB8fCBmbjsnXSk7XHJcblx0ICB9LFxyXG5cclxuXHQgIC8vIFtpbnZva2VIZWxwZXJdXHJcblx0ICAvL1xyXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cclxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcmVzdWx0IG9mIGhlbHBlciBpbnZvY2F0aW9uXHJcblx0ICAvL1xyXG5cdCAgLy8gUG9wcyBvZmYgdGhlIGhlbHBlcidzIHBhcmFtZXRlcnMsIGludm9rZXMgdGhlIGhlbHBlcixcclxuXHQgIC8vIGFuZCBwdXNoZXMgdGhlIGhlbHBlcidzIHJldHVybiB2YWx1ZSBvbnRvIHRoZSBzdGFjay5cclxuXHQgIC8vXHJcblx0ICAvLyBJZiB0aGUgaGVscGVyIGlzIG5vdCBmb3VuZCwgYGhlbHBlck1pc3NpbmdgIGlzIGNhbGxlZC5cclxuXHQgIGludm9rZUhlbHBlcjogZnVuY3Rpb24gaW52b2tlSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSwgaXNTaW1wbGUpIHtcclxuXHQgICAgdmFyIG5vbkhlbHBlciA9IHRoaXMucG9wU3RhY2soKSxcclxuXHQgICAgICAgIGhlbHBlciA9IHRoaXMuc2V0dXBIZWxwZXIocGFyYW1TaXplLCBuYW1lKSxcclxuXHQgICAgICAgIHNpbXBsZSA9IGlzU2ltcGxlID8gW2hlbHBlci5uYW1lLCAnIHx8ICddIDogJyc7XHJcblxyXG5cdCAgICB2YXIgbG9va3VwID0gWycoJ10uY29uY2F0KHNpbXBsZSwgbm9uSGVscGVyKTtcclxuXHQgICAgaWYgKCF0aGlzLm9wdGlvbnMuc3RyaWN0KSB7XHJcblx0ICAgICAgbG9va3VwLnB1c2goJyB8fCAnLCB0aGlzLmFsaWFzYWJsZSgnaGVscGVycy5oZWxwZXJNaXNzaW5nJykpO1xyXG5cdCAgICB9XHJcblx0ICAgIGxvb2t1cC5wdXNoKCcpJyk7XHJcblxyXG5cdCAgICB0aGlzLnB1c2godGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKGxvb2t1cCwgJ2NhbGwnLCBoZWxwZXIuY2FsbFBhcmFtcykpO1xyXG5cdCAgfSxcclxuXHJcblx0ICAvLyBbaW52b2tlS25vd25IZWxwZXJdXHJcblx0ICAvL1xyXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cclxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcmVzdWx0IG9mIGhlbHBlciBpbnZvY2F0aW9uXHJcblx0ICAvL1xyXG5cdCAgLy8gVGhpcyBvcGVyYXRpb24gaXMgdXNlZCB3aGVuIHRoZSBoZWxwZXIgaXMga25vd24gdG8gZXhpc3QsXHJcblx0ICAvLyBzbyBhIGBoZWxwZXJNaXNzaW5nYCBmYWxsYmFjayBpcyBub3QgcmVxdWlyZWQuXHJcblx0ICBpbnZva2VLbm93bkhlbHBlcjogZnVuY3Rpb24gaW52b2tlS25vd25IZWxwZXIocGFyYW1TaXplLCBuYW1lKSB7XHJcblx0ICAgIHZhciBoZWxwZXIgPSB0aGlzLnNldHVwSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSk7XHJcblx0ICAgIHRoaXMucHVzaCh0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoaGVscGVyLm5hbWUsICdjYWxsJywgaGVscGVyLmNhbGxQYXJhbXMpKTtcclxuXHQgIH0sXHJcblxyXG5cdCAgLy8gW2ludm9rZUFtYmlndW91c11cclxuXHQgIC8vXHJcblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBpbnZlcnNlLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxyXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXN1bHQgb2YgZGlzYW1iaWd1YXRpb25cclxuXHQgIC8vXHJcblx0ICAvLyBUaGlzIG9wZXJhdGlvbiBpcyB1c2VkIHdoZW4gYW4gZXhwcmVzc2lvbiBsaWtlIGB7e2Zvb319YFxyXG5cdCAgLy8gaXMgcHJvdmlkZWQsIGJ1dCB3ZSBkb24ndCBrbm93IGF0IGNvbXBpbGUtdGltZSB3aGV0aGVyIGl0XHJcblx0ICAvLyBpcyBhIGhlbHBlciBvciBhIHBhdGguXHJcblx0ICAvL1xyXG5cdCAgLy8gVGhpcyBvcGVyYXRpb24gZW1pdHMgbW9yZSBjb2RlIHRoYW4gdGhlIG90aGVyIG9wdGlvbnMsXHJcblx0ICAvLyBhbmQgY2FuIGJlIGF2b2lkZWQgYnkgcGFzc2luZyB0aGUgYGtub3duSGVscGVyc2AgYW5kXHJcblx0ICAvLyBga25vd25IZWxwZXJzT25seWAgZmxhZ3MgYXQgY29tcGlsZS10aW1lLlxyXG5cdCAgaW52b2tlQW1iaWd1b3VzOiBmdW5jdGlvbiBpbnZva2VBbWJpZ3VvdXMobmFtZSwgaGVscGVyQ2FsbCkge1xyXG5cdCAgICB0aGlzLnVzZVJlZ2lzdGVyKCdoZWxwZXInKTtcclxuXHJcblx0ICAgIHZhciBub25IZWxwZXIgPSB0aGlzLnBvcFN0YWNrKCk7XHJcblxyXG5cdCAgICB0aGlzLmVtcHR5SGFzaCgpO1xyXG5cdCAgICB2YXIgaGVscGVyID0gdGhpcy5zZXR1cEhlbHBlcigwLCBuYW1lLCBoZWxwZXJDYWxsKTtcclxuXHJcblx0ICAgIHZhciBoZWxwZXJOYW1lID0gdGhpcy5sYXN0SGVscGVyID0gdGhpcy5uYW1lTG9va3VwKCdoZWxwZXJzJywgbmFtZSwgJ2hlbHBlcicpO1xyXG5cclxuXHQgICAgdmFyIGxvb2t1cCA9IFsnKCcsICcoaGVscGVyID0gJywgaGVscGVyTmFtZSwgJyB8fCAnLCBub25IZWxwZXIsICcpJ107XHJcblx0ICAgIGlmICghdGhpcy5vcHRpb25zLnN0cmljdCkge1xyXG5cdCAgICAgIGxvb2t1cFswXSA9ICcoaGVscGVyID0gJztcclxuXHQgICAgICBsb29rdXAucHVzaCgnICE9IG51bGwgPyBoZWxwZXIgOiAnLCB0aGlzLmFsaWFzYWJsZSgnaGVscGVycy5oZWxwZXJNaXNzaW5nJykpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICB0aGlzLnB1c2goWycoJywgbG9va3VwLCBoZWxwZXIucGFyYW1zSW5pdCA/IFsnKSwoJywgaGVscGVyLnBhcmFtc0luaXRdIDogW10sICcpLCcsICcodHlwZW9mIGhlbHBlciA9PT0gJywgdGhpcy5hbGlhc2FibGUoJ1wiZnVuY3Rpb25cIicpLCAnID8gJywgdGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKCdoZWxwZXInLCAnY2FsbCcsIGhlbHBlci5jYWxsUGFyYW1zKSwgJyA6IGhlbHBlcikpJ10pO1xyXG5cdCAgfSxcclxuXHJcblx0ICAvLyBbaW52b2tlUGFydGlhbF1cclxuXHQgIC8vXHJcblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBjb250ZXh0LCAuLi5cclxuXHQgIC8vIE9uIHN0YWNrIGFmdGVyOiByZXN1bHQgb2YgcGFydGlhbCBpbnZvY2F0aW9uXHJcblx0ICAvL1xyXG5cdCAgLy8gVGhpcyBvcGVyYXRpb24gcG9wcyBvZmYgYSBjb250ZXh0LCBpbnZva2VzIGEgcGFydGlhbCB3aXRoIHRoYXQgY29udGV4dCxcclxuXHQgIC8vIGFuZCBwdXNoZXMgdGhlIHJlc3VsdCBvZiB0aGUgaW52b2NhdGlvbiBiYWNrLlxyXG5cdCAgaW52b2tlUGFydGlhbDogZnVuY3Rpb24gaW52b2tlUGFydGlhbChpc0R5bmFtaWMsIG5hbWUsIGluZGVudCkge1xyXG5cdCAgICB2YXIgcGFyYW1zID0gW10sXHJcblx0ICAgICAgICBvcHRpb25zID0gdGhpcy5zZXR1cFBhcmFtcyhuYW1lLCAxLCBwYXJhbXMpO1xyXG5cclxuXHQgICAgaWYgKGlzRHluYW1pYykge1xyXG5cdCAgICAgIG5hbWUgPSB0aGlzLnBvcFN0YWNrKCk7XHJcblx0ICAgICAgZGVsZXRlIG9wdGlvbnMubmFtZTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgaWYgKGluZGVudCkge1xyXG5cdCAgICAgIG9wdGlvbnMuaW5kZW50ID0gSlNPTi5zdHJpbmdpZnkoaW5kZW50KTtcclxuXHQgICAgfVxyXG5cdCAgICBvcHRpb25zLmhlbHBlcnMgPSAnaGVscGVycyc7XHJcblx0ICAgIG9wdGlvbnMucGFydGlhbHMgPSAncGFydGlhbHMnO1xyXG5cdCAgICBvcHRpb25zLmRlY29yYXRvcnMgPSAnY29udGFpbmVyLmRlY29yYXRvcnMnO1xyXG5cclxuXHQgICAgaWYgKCFpc0R5bmFtaWMpIHtcclxuXHQgICAgICBwYXJhbXMudW5zaGlmdCh0aGlzLm5hbWVMb29rdXAoJ3BhcnRpYWxzJywgbmFtZSwgJ3BhcnRpYWwnKSk7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgcGFyYW1zLnVuc2hpZnQobmFtZSk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGF0KSB7XHJcblx0ICAgICAgb3B0aW9ucy5kZXB0aHMgPSAnZGVwdGhzJztcclxuXHQgICAgfVxyXG5cdCAgICBvcHRpb25zID0gdGhpcy5vYmplY3RMaXRlcmFsKG9wdGlvbnMpO1xyXG5cdCAgICBwYXJhbXMucHVzaChvcHRpb25zKTtcclxuXHJcblx0ICAgIHRoaXMucHVzaCh0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoJ2NvbnRhaW5lci5pbnZva2VQYXJ0aWFsJywgJycsIHBhcmFtcykpO1xyXG5cdCAgfSxcclxuXHJcblx0ICAvLyBbYXNzaWduVG9IYXNoXVxyXG5cdCAgLy9cclxuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IHZhbHVlLCAuLi4sIGhhc2gsIC4uLlxyXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi4sIGhhc2gsIC4uLlxyXG5cdCAgLy9cclxuXHQgIC8vIFBvcHMgYSB2YWx1ZSBvZmYgdGhlIHN0YWNrIGFuZCBhc3NpZ25zIGl0IHRvIHRoZSBjdXJyZW50IGhhc2hcclxuXHQgIGFzc2lnblRvSGFzaDogZnVuY3Rpb24gYXNzaWduVG9IYXNoKGtleSkge1xyXG5cdCAgICB2YXIgdmFsdWUgPSB0aGlzLnBvcFN0YWNrKCksXHJcblx0ICAgICAgICBjb250ZXh0ID0gdW5kZWZpbmVkLFxyXG5cdCAgICAgICAgdHlwZSA9IHVuZGVmaW5lZCxcclxuXHQgICAgICAgIGlkID0gdW5kZWZpbmVkO1xyXG5cclxuXHQgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcclxuXHQgICAgICBpZCA9IHRoaXMucG9wU3RhY2soKTtcclxuXHQgICAgfVxyXG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcclxuXHQgICAgICB0eXBlID0gdGhpcy5wb3BTdGFjaygpO1xyXG5cdCAgICAgIGNvbnRleHQgPSB0aGlzLnBvcFN0YWNrKCk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xyXG5cdCAgICBpZiAoY29udGV4dCkge1xyXG5cdCAgICAgIGhhc2guY29udGV4dHNba2V5XSA9IGNvbnRleHQ7XHJcblx0ICAgIH1cclxuXHQgICAgaWYgKHR5cGUpIHtcclxuXHQgICAgICBoYXNoLnR5cGVzW2tleV0gPSB0eXBlO1xyXG5cdCAgICB9XHJcblx0ICAgIGlmIChpZCkge1xyXG5cdCAgICAgIGhhc2guaWRzW2tleV0gPSBpZDtcclxuXHQgICAgfVxyXG5cdCAgICBoYXNoLnZhbHVlc1trZXldID0gdmFsdWU7XHJcblx0ICB9LFxyXG5cclxuXHQgIHB1c2hJZDogZnVuY3Rpb24gcHVzaElkKHR5cGUsIG5hbWUsIGNoaWxkKSB7XHJcblx0ICAgIGlmICh0eXBlID09PSAnQmxvY2tQYXJhbScpIHtcclxuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ2Jsb2NrUGFyYW1zWycgKyBuYW1lWzBdICsgJ10ucGF0aFsnICsgbmFtZVsxXSArICddJyArIChjaGlsZCA/ICcgKyAnICsgSlNPTi5zdHJpbmdpZnkoJy4nICsgY2hpbGQpIDogJycpKTtcclxuXHQgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUGF0aEV4cHJlc3Npb24nKSB7XHJcblx0ICAgICAgdGhpcy5wdXNoU3RyaW5nKG5hbWUpO1xyXG5cdCAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTdWJFeHByZXNzaW9uJykge1xyXG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgndHJ1ZScpO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgnbnVsbCcpO1xyXG5cdCAgICB9XHJcblx0ICB9LFxyXG5cclxuXHQgIC8vIEhFTFBFUlNcclxuXHJcblx0ICBjb21waWxlcjogSmF2YVNjcmlwdENvbXBpbGVyLFxyXG5cclxuXHQgIGNvbXBpbGVDaGlsZHJlbjogZnVuY3Rpb24gY29tcGlsZUNoaWxkcmVuKGVudmlyb25tZW50LCBvcHRpb25zKSB7XHJcblx0ICAgIHZhciBjaGlsZHJlbiA9IGVudmlyb25tZW50LmNoaWxkcmVuLFxyXG5cdCAgICAgICAgY2hpbGQgPSB1bmRlZmluZWQsXHJcblx0ICAgICAgICBjb21waWxlciA9IHVuZGVmaW5lZDtcclxuXHJcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcblx0ICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcclxuXHQgICAgICBjb21waWxlciA9IG5ldyB0aGlzLmNvbXBpbGVyKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxyXG5cclxuXHQgICAgICB2YXIgZXhpc3RpbmcgPSB0aGlzLm1hdGNoRXhpc3RpbmdQcm9ncmFtKGNoaWxkKTtcclxuXHJcblx0ICAgICAgaWYgKGV4aXN0aW5nID09IG51bGwpIHtcclxuXHQgICAgICAgIHRoaXMuY29udGV4dC5wcm9ncmFtcy5wdXNoKCcnKTsgLy8gUGxhY2Vob2xkZXIgdG8gcHJldmVudCBuYW1lIGNvbmZsaWN0cyBmb3IgbmVzdGVkIGNoaWxkcmVuXHJcblx0ICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNvbnRleHQucHJvZ3JhbXMubGVuZ3RoO1xyXG5cdCAgICAgICAgY2hpbGQuaW5kZXggPSBpbmRleDtcclxuXHQgICAgICAgIGNoaWxkLm5hbWUgPSAncHJvZ3JhbScgKyBpbmRleDtcclxuXHQgICAgICAgIHRoaXMuY29udGV4dC5wcm9ncmFtc1tpbmRleF0gPSBjb21waWxlci5jb21waWxlKGNoaWxkLCBvcHRpb25zLCB0aGlzLmNvbnRleHQsICF0aGlzLnByZWNvbXBpbGUpO1xyXG5cdCAgICAgICAgdGhpcy5jb250ZXh0LmRlY29yYXRvcnNbaW5kZXhdID0gY29tcGlsZXIuZGVjb3JhdG9ycztcclxuXHQgICAgICAgIHRoaXMuY29udGV4dC5lbnZpcm9ubWVudHNbaW5kZXhdID0gY2hpbGQ7XHJcblxyXG5cdCAgICAgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCBjb21waWxlci51c2VEZXB0aHM7XHJcblx0ICAgICAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdGhpcy51c2VCbG9ja1BhcmFtcyB8fCBjb21waWxlci51c2VCbG9ja1BhcmFtcztcclxuXHQgICAgICAgIGNoaWxkLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzO1xyXG5cdCAgICAgICAgY2hpbGQudXNlQmxvY2tQYXJhbXMgPSB0aGlzLnVzZUJsb2NrUGFyYW1zO1xyXG5cdCAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICBjaGlsZC5pbmRleCA9IGV4aXN0aW5nLmluZGV4O1xyXG5cdCAgICAgICAgY2hpbGQubmFtZSA9ICdwcm9ncmFtJyArIGV4aXN0aW5nLmluZGV4O1xyXG5cclxuXHQgICAgICAgIHRoaXMudXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHMgfHwgZXhpc3RpbmcudXNlRGVwdGhzO1xyXG5cdCAgICAgICAgdGhpcy51c2VCbG9ja1BhcmFtcyA9IHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgZXhpc3RpbmcudXNlQmxvY2tQYXJhbXM7XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblx0ICB9LFxyXG5cdCAgbWF0Y2hFeGlzdGluZ1Byb2dyYW06IGZ1bmN0aW9uIG1hdGNoRXhpc3RpbmdQcm9ncmFtKGNoaWxkKSB7XHJcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmNvbnRleHQuZW52aXJvbm1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0ICAgICAgdmFyIGVudmlyb25tZW50ID0gdGhpcy5jb250ZXh0LmVudmlyb25tZW50c1tpXTtcclxuXHQgICAgICBpZiAoZW52aXJvbm1lbnQgJiYgZW52aXJvbm1lbnQuZXF1YWxzKGNoaWxkKSkge1xyXG5cdCAgICAgICAgcmV0dXJuIGVudmlyb25tZW50O1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cdCAgfSxcclxuXHJcblx0ICBwcm9ncmFtRXhwcmVzc2lvbjogZnVuY3Rpb24gcHJvZ3JhbUV4cHJlc3Npb24oZ3VpZCkge1xyXG5cdCAgICB2YXIgY2hpbGQgPSB0aGlzLmVudmlyb25tZW50LmNoaWxkcmVuW2d1aWRdLFxyXG5cdCAgICAgICAgcHJvZ3JhbVBhcmFtcyA9IFtjaGlsZC5pbmRleCwgJ2RhdGEnLCBjaGlsZC5ibG9ja1BhcmFtc107XHJcblxyXG5cdCAgICBpZiAodGhpcy51c2VCbG9ja1BhcmFtcyB8fCB0aGlzLnVzZURlcHRocykge1xyXG5cdCAgICAgIHByb2dyYW1QYXJhbXMucHVzaCgnYmxvY2tQYXJhbXMnKTtcclxuXHQgICAgfVxyXG5cdCAgICBpZiAodGhpcy51c2VEZXB0aHMpIHtcclxuXHQgICAgICBwcm9ncmFtUGFyYW1zLnB1c2goJ2RlcHRocycpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICByZXR1cm4gJ2NvbnRhaW5lci5wcm9ncmFtKCcgKyBwcm9ncmFtUGFyYW1zLmpvaW4oJywgJykgKyAnKSc7XHJcblx0ICB9LFxyXG5cclxuXHQgIHVzZVJlZ2lzdGVyOiBmdW5jdGlvbiB1c2VSZWdpc3RlcihuYW1lKSB7XHJcblx0ICAgIGlmICghdGhpcy5yZWdpc3RlcnNbbmFtZV0pIHtcclxuXHQgICAgICB0aGlzLnJlZ2lzdGVyc1tuYW1lXSA9IHRydWU7XHJcblx0ICAgICAgdGhpcy5yZWdpc3RlcnMubGlzdC5wdXNoKG5hbWUpO1xyXG5cdCAgICB9XHJcblx0ICB9LFxyXG5cclxuXHQgIHB1c2g6IGZ1bmN0aW9uIHB1c2goZXhwcikge1xyXG5cdCAgICBpZiAoIShleHByIGluc3RhbmNlb2YgTGl0ZXJhbCkpIHtcclxuXHQgICAgICBleHByID0gdGhpcy5zb3VyY2Uud3JhcChleHByKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgdGhpcy5pbmxpbmVTdGFjay5wdXNoKGV4cHIpO1xyXG5cdCAgICByZXR1cm4gZXhwcjtcclxuXHQgIH0sXHJcblxyXG5cdCAgcHVzaFN0YWNrTGl0ZXJhbDogZnVuY3Rpb24gcHVzaFN0YWNrTGl0ZXJhbChpdGVtKSB7XHJcblx0ICAgIHRoaXMucHVzaChuZXcgTGl0ZXJhbChpdGVtKSk7XHJcblx0ICB9LFxyXG5cclxuXHQgIHB1c2hTb3VyY2U6IGZ1bmN0aW9uIHB1c2hTb3VyY2Uoc291cmNlKSB7XHJcblx0ICAgIGlmICh0aGlzLnBlbmRpbmdDb250ZW50KSB7XHJcblx0ICAgICAgdGhpcy5zb3VyY2UucHVzaCh0aGlzLmFwcGVuZFRvQnVmZmVyKHRoaXMuc291cmNlLnF1b3RlZFN0cmluZyh0aGlzLnBlbmRpbmdDb250ZW50KSwgdGhpcy5wZW5kaW5nTG9jYXRpb24pKTtcclxuXHQgICAgICB0aGlzLnBlbmRpbmdDb250ZW50ID0gdW5kZWZpbmVkO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpZiAoc291cmNlKSB7XHJcblx0ICAgICAgdGhpcy5zb3VyY2UucHVzaChzb3VyY2UpO1xyXG5cdCAgICB9XHJcblx0ICB9LFxyXG5cclxuXHQgIHJlcGxhY2VTdGFjazogZnVuY3Rpb24gcmVwbGFjZVN0YWNrKGNhbGxiYWNrKSB7XHJcblx0ICAgIHZhciBwcmVmaXggPSBbJygnXSxcclxuXHQgICAgICAgIHN0YWNrID0gdW5kZWZpbmVkLFxyXG5cdCAgICAgICAgY3JlYXRlZFN0YWNrID0gdW5kZWZpbmVkLFxyXG5cdCAgICAgICAgdXNlZExpdGVyYWwgPSB1bmRlZmluZWQ7XHJcblxyXG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5cdCAgICBpZiAoIXRoaXMuaXNJbmxpbmUoKSkge1xyXG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdyZXBsYWNlU3RhY2sgb24gbm9uLWlubGluZScpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICAvLyBXZSB3YW50IHRvIG1lcmdlIHRoZSBpbmxpbmUgc3RhdGVtZW50IGludG8gdGhlIHJlcGxhY2VtZW50IHN0YXRlbWVudCB2aWEgJywnXHJcblx0ICAgIHZhciB0b3AgPSB0aGlzLnBvcFN0YWNrKHRydWUpO1xyXG5cclxuXHQgICAgaWYgKHRvcCBpbnN0YW5jZW9mIExpdGVyYWwpIHtcclxuXHQgICAgICAvLyBMaXRlcmFscyBkbyBub3QgbmVlZCB0byBiZSBpbmxpbmVkXHJcblx0ICAgICAgc3RhY2sgPSBbdG9wLnZhbHVlXTtcclxuXHQgICAgICBwcmVmaXggPSBbJygnLCBzdGFja107XHJcblx0ICAgICAgdXNlZExpdGVyYWwgPSB0cnVlO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgIC8vIEdldCBvciBjcmVhdGUgdGhlIGN1cnJlbnQgc3RhY2sgbmFtZSBmb3IgdXNlIGJ5IHRoZSBpbmxpbmVcclxuXHQgICAgICBjcmVhdGVkU3RhY2sgPSB0cnVlO1xyXG5cdCAgICAgIHZhciBfbmFtZSA9IHRoaXMuaW5jclN0YWNrKCk7XHJcblxyXG5cdCAgICAgIHByZWZpeCA9IFsnKCgnLCB0aGlzLnB1c2goX25hbWUpLCAnID0gJywgdG9wLCAnKSddO1xyXG5cdCAgICAgIHN0YWNrID0gdGhpcy50b3BTdGFjaygpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICB2YXIgaXRlbSA9IGNhbGxiYWNrLmNhbGwodGhpcywgc3RhY2spO1xyXG5cclxuXHQgICAgaWYgKCF1c2VkTGl0ZXJhbCkge1xyXG5cdCAgICAgIHRoaXMucG9wU3RhY2soKTtcclxuXHQgICAgfVxyXG5cdCAgICBpZiAoY3JlYXRlZFN0YWNrKSB7XHJcblx0ICAgICAgdGhpcy5zdGFja1Nsb3QtLTtcclxuXHQgICAgfVxyXG5cdCAgICB0aGlzLnB1c2gocHJlZml4LmNvbmNhdChpdGVtLCAnKScpKTtcclxuXHQgIH0sXHJcblxyXG5cdCAgaW5jclN0YWNrOiBmdW5jdGlvbiBpbmNyU3RhY2soKSB7XHJcblx0ICAgIHRoaXMuc3RhY2tTbG90Kys7XHJcblx0ICAgIGlmICh0aGlzLnN0YWNrU2xvdCA+IHRoaXMuc3RhY2tWYXJzLmxlbmd0aCkge1xyXG5cdCAgICAgIHRoaXMuc3RhY2tWYXJzLnB1c2goJ3N0YWNrJyArIHRoaXMuc3RhY2tTbG90KTtcclxuXHQgICAgfVxyXG5cdCAgICByZXR1cm4gdGhpcy50b3BTdGFja05hbWUoKTtcclxuXHQgIH0sXHJcblx0ICB0b3BTdGFja05hbWU6IGZ1bmN0aW9uIHRvcFN0YWNrTmFtZSgpIHtcclxuXHQgICAgcmV0dXJuICdzdGFjaycgKyB0aGlzLnN0YWNrU2xvdDtcclxuXHQgIH0sXHJcblx0ICBmbHVzaElubGluZTogZnVuY3Rpb24gZmx1c2hJbmxpbmUoKSB7XHJcblx0ICAgIHZhciBpbmxpbmVTdGFjayA9IHRoaXMuaW5saW5lU3RhY2s7XHJcblx0ICAgIHRoaXMuaW5saW5lU3RhY2sgPSBbXTtcclxuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGlubGluZVN0YWNrLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0ICAgICAgdmFyIGVudHJ5ID0gaW5saW5lU3RhY2tbaV07XHJcblx0ICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcblx0ICAgICAgaWYgKGVudHJ5IGluc3RhbmNlb2YgTGl0ZXJhbCkge1xyXG5cdCAgICAgICAgdGhpcy5jb21waWxlU3RhY2sucHVzaChlbnRyeSk7XHJcblx0ICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIHZhciBzdGFjayA9IHRoaXMuaW5jclN0YWNrKCk7XHJcblx0ICAgICAgICB0aGlzLnB1c2hTb3VyY2UoW3N0YWNrLCAnID0gJywgZW50cnksICc7J10pO1xyXG5cdCAgICAgICAgdGhpcy5jb21waWxlU3RhY2sucHVzaChzdGFjayk7XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblx0ICB9LFxyXG5cdCAgaXNJbmxpbmU6IGZ1bmN0aW9uIGlzSW5saW5lKCkge1xyXG5cdCAgICByZXR1cm4gdGhpcy5pbmxpbmVTdGFjay5sZW5ndGg7XHJcblx0ICB9LFxyXG5cclxuXHQgIHBvcFN0YWNrOiBmdW5jdGlvbiBwb3BTdGFjayh3cmFwcGVkKSB7XHJcblx0ICAgIHZhciBpbmxpbmUgPSB0aGlzLmlzSW5saW5lKCksXHJcblx0ICAgICAgICBpdGVtID0gKGlubGluZSA/IHRoaXMuaW5saW5lU3RhY2sgOiB0aGlzLmNvbXBpbGVTdGFjaykucG9wKCk7XHJcblxyXG5cdCAgICBpZiAoIXdyYXBwZWQgJiYgaXRlbSBpbnN0YW5jZW9mIExpdGVyYWwpIHtcclxuXHQgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICBpZiAoIWlubGluZSkge1xyXG5cdCAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuXHQgICAgICAgIGlmICghdGhpcy5zdGFja1Nsb3QpIHtcclxuXHQgICAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0ludmFsaWQgc3RhY2sgcG9wJyk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICB0aGlzLnN0YWNrU2xvdC0tO1xyXG5cdCAgICAgIH1cclxuXHQgICAgICByZXR1cm4gaXRlbTtcclxuXHQgICAgfVxyXG5cdCAgfSxcclxuXHJcblx0ICB0b3BTdGFjazogZnVuY3Rpb24gdG9wU3RhY2soKSB7XHJcblx0ICAgIHZhciBzdGFjayA9IHRoaXMuaXNJbmxpbmUoKSA/IHRoaXMuaW5saW5lU3RhY2sgOiB0aGlzLmNvbXBpbGVTdGFjayxcclxuXHQgICAgICAgIGl0ZW0gPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcclxuXHJcblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG5cdCAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIExpdGVyYWwpIHtcclxuXHQgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICByZXR1cm4gaXRlbTtcclxuXHQgICAgfVxyXG5cdCAgfSxcclxuXHJcblx0ICBjb250ZXh0TmFtZTogZnVuY3Rpb24gY29udGV4dE5hbWUoY29udGV4dCkge1xyXG5cdCAgICBpZiAodGhpcy51c2VEZXB0aHMgJiYgY29udGV4dCkge1xyXG5cdCAgICAgIHJldHVybiAnZGVwdGhzWycgKyBjb250ZXh0ICsgJ10nO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgIHJldHVybiAnZGVwdGgnICsgY29udGV4dDtcclxuXHQgICAgfVxyXG5cdCAgfSxcclxuXHJcblx0ICBxdW90ZWRTdHJpbmc6IGZ1bmN0aW9uIHF1b3RlZFN0cmluZyhzdHIpIHtcclxuXHQgICAgcmV0dXJuIHRoaXMuc291cmNlLnF1b3RlZFN0cmluZyhzdHIpO1xyXG5cdCAgfSxcclxuXHJcblx0ICBvYmplY3RMaXRlcmFsOiBmdW5jdGlvbiBvYmplY3RMaXRlcmFsKG9iaikge1xyXG5cdCAgICByZXR1cm4gdGhpcy5zb3VyY2Uub2JqZWN0TGl0ZXJhbChvYmopO1xyXG5cdCAgfSxcclxuXHJcblx0ICBhbGlhc2FibGU6IGZ1bmN0aW9uIGFsaWFzYWJsZShuYW1lKSB7XHJcblx0ICAgIHZhciByZXQgPSB0aGlzLmFsaWFzZXNbbmFtZV07XHJcblx0ICAgIGlmIChyZXQpIHtcclxuXHQgICAgICByZXQucmVmZXJlbmNlQ291bnQrKztcclxuXHQgICAgICByZXR1cm4gcmV0O1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICByZXQgPSB0aGlzLmFsaWFzZXNbbmFtZV0gPSB0aGlzLnNvdXJjZS53cmFwKG5hbWUpO1xyXG5cdCAgICByZXQuYWxpYXNhYmxlID0gdHJ1ZTtcclxuXHQgICAgcmV0LnJlZmVyZW5jZUNvdW50ID0gMTtcclxuXHJcblx0ICAgIHJldHVybiByZXQ7XHJcblx0ICB9LFxyXG5cclxuXHQgIHNldHVwSGVscGVyOiBmdW5jdGlvbiBzZXR1cEhlbHBlcihwYXJhbVNpemUsIG5hbWUsIGJsb2NrSGVscGVyKSB7XHJcblx0ICAgIHZhciBwYXJhbXMgPSBbXSxcclxuXHQgICAgICAgIHBhcmFtc0luaXQgPSB0aGlzLnNldHVwSGVscGVyQXJncyhuYW1lLCBwYXJhbVNpemUsIHBhcmFtcywgYmxvY2tIZWxwZXIpO1xyXG5cdCAgICB2YXIgZm91bmRIZWxwZXIgPSB0aGlzLm5hbWVMb29rdXAoJ2hlbHBlcnMnLCBuYW1lLCAnaGVscGVyJyksXHJcblx0ICAgICAgICBjYWxsQ29udGV4dCA9IHRoaXMuYWxpYXNhYmxlKHRoaXMuY29udGV4dE5hbWUoMCkgKyAnICE9IG51bGwgPyAnICsgdGhpcy5jb250ZXh0TmFtZSgwKSArICcgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KScpO1xyXG5cclxuXHQgICAgcmV0dXJuIHtcclxuXHQgICAgICBwYXJhbXM6IHBhcmFtcyxcclxuXHQgICAgICBwYXJhbXNJbml0OiBwYXJhbXNJbml0LFxyXG5cdCAgICAgIG5hbWU6IGZvdW5kSGVscGVyLFxyXG5cdCAgICAgIGNhbGxQYXJhbXM6IFtjYWxsQ29udGV4dF0uY29uY2F0KHBhcmFtcylcclxuXHQgICAgfTtcclxuXHQgIH0sXHJcblxyXG5cdCAgc2V0dXBQYXJhbXM6IGZ1bmN0aW9uIHNldHVwUGFyYW1zKGhlbHBlciwgcGFyYW1TaXplLCBwYXJhbXMpIHtcclxuXHQgICAgdmFyIG9wdGlvbnMgPSB7fSxcclxuXHQgICAgICAgIGNvbnRleHRzID0gW10sXHJcblx0ICAgICAgICB0eXBlcyA9IFtdLFxyXG5cdCAgICAgICAgaWRzID0gW10sXHJcblx0ICAgICAgICBvYmplY3RBcmdzID0gIXBhcmFtcyxcclxuXHQgICAgICAgIHBhcmFtID0gdW5kZWZpbmVkO1xyXG5cclxuXHQgICAgaWYgKG9iamVjdEFyZ3MpIHtcclxuXHQgICAgICBwYXJhbXMgPSBbXTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgb3B0aW9ucy5uYW1lID0gdGhpcy5xdW90ZWRTdHJpbmcoaGVscGVyKTtcclxuXHQgICAgb3B0aW9ucy5oYXNoID0gdGhpcy5wb3BTdGFjaygpO1xyXG5cclxuXHQgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcclxuXHQgICAgICBvcHRpb25zLmhhc2hJZHMgPSB0aGlzLnBvcFN0YWNrKCk7XHJcblx0ICAgIH1cclxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XHJcblx0ICAgICAgb3B0aW9ucy5oYXNoVHlwZXMgPSB0aGlzLnBvcFN0YWNrKCk7XHJcblx0ICAgICAgb3B0aW9ucy5oYXNoQ29udGV4dHMgPSB0aGlzLnBvcFN0YWNrKCk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHZhciBpbnZlcnNlID0gdGhpcy5wb3BTdGFjaygpLFxyXG5cdCAgICAgICAgcHJvZ3JhbSA9IHRoaXMucG9wU3RhY2soKTtcclxuXHJcblx0ICAgIC8vIEF2b2lkIHNldHRpbmcgZm4gYW5kIGludmVyc2UgaWYgbmVpdGhlciBhcmUgc2V0LiBUaGlzIGFsbG93c1xyXG5cdCAgICAvLyBoZWxwZXJzIHRvIGRvIGEgY2hlY2sgZm9yIGBpZiAob3B0aW9ucy5mbilgXHJcblx0ICAgIGlmIChwcm9ncmFtIHx8IGludmVyc2UpIHtcclxuXHQgICAgICBvcHRpb25zLmZuID0gcHJvZ3JhbSB8fCAnY29udGFpbmVyLm5vb3AnO1xyXG5cdCAgICAgIG9wdGlvbnMuaW52ZXJzZSA9IGludmVyc2UgfHwgJ2NvbnRhaW5lci5ub29wJztcclxuXHQgICAgfVxyXG5cclxuXHQgICAgLy8gVGhlIHBhcmFtZXRlcnMgZ28gb24gdG8gdGhlIHN0YWNrIGluIG9yZGVyIChtYWtpbmcgc3VyZSB0aGF0IHRoZXkgYXJlIGV2YWx1YXRlZCBpbiBvcmRlcilcclxuXHQgICAgLy8gc28gd2UgbmVlZCB0byBwb3AgdGhlbSBvZmYgdGhlIHN0YWNrIGluIHJldmVyc2Ugb3JkZXJcclxuXHQgICAgdmFyIGkgPSBwYXJhbVNpemU7XHJcblx0ICAgIHdoaWxlIChpLS0pIHtcclxuXHQgICAgICBwYXJhbSA9IHRoaXMucG9wU3RhY2soKTtcclxuXHQgICAgICBwYXJhbXNbaV0gPSBwYXJhbTtcclxuXHJcblx0ICAgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcclxuXHQgICAgICAgIGlkc1tpXSA9IHRoaXMucG9wU3RhY2soKTtcclxuXHQgICAgICB9XHJcblx0ICAgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XHJcblx0ICAgICAgICB0eXBlc1tpXSA9IHRoaXMucG9wU3RhY2soKTtcclxuXHQgICAgICAgIGNvbnRleHRzW2ldID0gdGhpcy5wb3BTdGFjaygpO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgaWYgKG9iamVjdEFyZ3MpIHtcclxuXHQgICAgICBvcHRpb25zLmFyZ3MgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KHBhcmFtcyk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XHJcblx0ICAgICAgb3B0aW9ucy5pZHMgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KGlkcyk7XHJcblx0ICAgIH1cclxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XHJcblx0ICAgICAgb3B0aW9ucy50eXBlcyA9IHRoaXMuc291cmNlLmdlbmVyYXRlQXJyYXkodHlwZXMpO1xyXG5cdCAgICAgIG9wdGlvbnMuY29udGV4dHMgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KGNvbnRleHRzKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5kYXRhKSB7XHJcblx0ICAgICAgb3B0aW9ucy5kYXRhID0gJ2RhdGEnO1xyXG5cdCAgICB9XHJcblx0ICAgIGlmICh0aGlzLnVzZUJsb2NrUGFyYW1zKSB7XHJcblx0ICAgICAgb3B0aW9ucy5ibG9ja1BhcmFtcyA9ICdibG9ja1BhcmFtcyc7XHJcblx0ICAgIH1cclxuXHQgICAgcmV0dXJuIG9wdGlvbnM7XHJcblx0ICB9LFxyXG5cclxuXHQgIHNldHVwSGVscGVyQXJnczogZnVuY3Rpb24gc2V0dXBIZWxwZXJBcmdzKGhlbHBlciwgcGFyYW1TaXplLCBwYXJhbXMsIHVzZVJlZ2lzdGVyKSB7XHJcblx0ICAgIHZhciBvcHRpb25zID0gdGhpcy5zZXR1cFBhcmFtcyhoZWxwZXIsIHBhcmFtU2l6ZSwgcGFyYW1zKTtcclxuXHQgICAgb3B0aW9ucyA9IHRoaXMub2JqZWN0TGl0ZXJhbChvcHRpb25zKTtcclxuXHQgICAgaWYgKHVzZVJlZ2lzdGVyKSB7XHJcblx0ICAgICAgdGhpcy51c2VSZWdpc3Rlcignb3B0aW9ucycpO1xyXG5cdCAgICAgIHBhcmFtcy5wdXNoKCdvcHRpb25zJyk7XHJcblx0ICAgICAgcmV0dXJuIFsnb3B0aW9ucz0nLCBvcHRpb25zXTtcclxuXHQgICAgfSBlbHNlIGlmIChwYXJhbXMpIHtcclxuXHQgICAgICBwYXJhbXMucHVzaChvcHRpb25zKTtcclxuXHQgICAgICByZXR1cm4gJyc7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcblx0ICAgIH1cclxuXHQgIH1cclxuXHR9O1xyXG5cclxuXHQoZnVuY3Rpb24gKCkge1xyXG5cdCAgdmFyIHJlc2VydmVkV29yZHMgPSAoJ2JyZWFrIGVsc2UgbmV3IHZhcicgKyAnIGNhc2UgZmluYWxseSByZXR1cm4gdm9pZCcgKyAnIGNhdGNoIGZvciBzd2l0Y2ggd2hpbGUnICsgJyBjb250aW51ZSBmdW5jdGlvbiB0aGlzIHdpdGgnICsgJyBkZWZhdWx0IGlmIHRocm93JyArICcgZGVsZXRlIGluIHRyeScgKyAnIGRvIGluc3RhbmNlb2YgdHlwZW9mJyArICcgYWJzdHJhY3QgZW51bSBpbnQgc2hvcnQnICsgJyBib29sZWFuIGV4cG9ydCBpbnRlcmZhY2Ugc3RhdGljJyArICcgYnl0ZSBleHRlbmRzIGxvbmcgc3VwZXInICsgJyBjaGFyIGZpbmFsIG5hdGl2ZSBzeW5jaHJvbml6ZWQnICsgJyBjbGFzcyBmbG9hdCBwYWNrYWdlIHRocm93cycgKyAnIGNvbnN0IGdvdG8gcHJpdmF0ZSB0cmFuc2llbnQnICsgJyBkZWJ1Z2dlciBpbXBsZW1lbnRzIHByb3RlY3RlZCB2b2xhdGlsZScgKyAnIGRvdWJsZSBpbXBvcnQgcHVibGljIGxldCB5aWVsZCBhd2FpdCcgKyAnIG51bGwgdHJ1ZSBmYWxzZScpLnNwbGl0KCcgJyk7XHJcblxyXG5cdCAgdmFyIGNvbXBpbGVyV29yZHMgPSBKYXZhU2NyaXB0Q29tcGlsZXIuUkVTRVJWRURfV09SRFMgPSB7fTtcclxuXHJcblx0ICBmb3IgKHZhciBpID0gMCwgbCA9IHJlc2VydmVkV29yZHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcblx0ICAgIGNvbXBpbGVyV29yZHNbcmVzZXJ2ZWRXb3Jkc1tpXV0gPSB0cnVlO1xyXG5cdCAgfVxyXG5cdH0pKCk7XHJcblxyXG5cdEphdmFTY3JpcHRDb21waWxlci5pc1ZhbGlkSmF2YVNjcmlwdFZhcmlhYmxlTmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcblx0ICByZXR1cm4gIUphdmFTY3JpcHRDb21waWxlci5SRVNFUlZFRF9XT1JEU1tuYW1lXSAmJiAvXlthLXpBLVpfJF1bMC05YS16QS1aXyRdKiQvLnRlc3QobmFtZSk7XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gc3RyaWN0TG9va3VwKHJlcXVpcmVUZXJtaW5hbCwgY29tcGlsZXIsIHBhcnRzLCB0eXBlKSB7XHJcblx0ICB2YXIgc3RhY2sgPSBjb21waWxlci5wb3BTdGFjaygpLFxyXG5cdCAgICAgIGkgPSAwLFxyXG5cdCAgICAgIGxlbiA9IHBhcnRzLmxlbmd0aDtcclxuXHQgIGlmIChyZXF1aXJlVGVybWluYWwpIHtcclxuXHQgICAgbGVuLS07XHJcblx0ICB9XHJcblxyXG5cdCAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG5cdCAgICBzdGFjayA9IGNvbXBpbGVyLm5hbWVMb29rdXAoc3RhY2ssIHBhcnRzW2ldLCB0eXBlKTtcclxuXHQgIH1cclxuXHJcblx0ICBpZiAocmVxdWlyZVRlcm1pbmFsKSB7XHJcblx0ICAgIHJldHVybiBbY29tcGlsZXIuYWxpYXNhYmxlKCdjb250YWluZXIuc3RyaWN0JyksICcoJywgc3RhY2ssICcsICcsIGNvbXBpbGVyLnF1b3RlZFN0cmluZyhwYXJ0c1tpXSksICcpJ107XHJcblx0ICB9IGVsc2Uge1xyXG5cdCAgICByZXR1cm4gc3RhY2s7XHJcblx0ICB9XHJcblx0fVxyXG5cclxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBKYXZhU2NyaXB0Q29tcGlsZXI7XHJcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XHJcblxyXG4vKioqLyB9KSxcclxuLyogNDMgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXHQvKiBnbG9iYWwgZGVmaW5lICovXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5cclxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcclxuXHJcblx0dmFyIFNvdXJjZU5vZGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdHRyeSB7XHJcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5cdCAgaWYgKGZhbHNlKSB7XHJcblx0ICAgIC8vIFdlIGRvbid0IHN1cHBvcnQgdGhpcyBpbiBBTUQgZW52aXJvbm1lbnRzLiBGb3IgdGhlc2UgZW52aXJvbm1lbnRzLCB3ZSBhc3VzbWUgdGhhdFxyXG5cdCAgICAvLyB0aGV5IGFyZSBydW5uaW5nIG9uIHRoZSBicm93c2VyIGFuZCB0aHVzIGhhdmUgbm8gbmVlZCBmb3IgdGhlIHNvdXJjZS1tYXAgbGlicmFyeS5cclxuXHQgICAgdmFyIFNvdXJjZU1hcCA9IHJlcXVpcmUoJ3NvdXJjZS1tYXAnKTtcclxuXHQgICAgU291cmNlTm9kZSA9IFNvdXJjZU1hcC5Tb3VyY2VOb2RlO1xyXG5cdCAgfVxyXG5cdH0gY2F0Y2ggKGVycikge31cclxuXHQvKiBOT1AgKi9cclxuXHJcblx0LyogaXN0YW5idWwgaWdub3JlIGlmOiB0ZXN0ZWQgYnV0IG5vdCBjb3ZlcmVkIGluIGlzdGFuYnVsIGR1ZSB0byBkaXN0IGJ1aWxkICAqL1xyXG5cdGlmICghU291cmNlTm9kZSkge1xyXG5cdCAgU291cmNlTm9kZSA9IGZ1bmN0aW9uIChsaW5lLCBjb2x1bW4sIHNyY0ZpbGUsIGNodW5rcykge1xyXG5cdCAgICB0aGlzLnNyYyA9ICcnO1xyXG5cdCAgICBpZiAoY2h1bmtzKSB7XHJcblx0ICAgICAgdGhpcy5hZGQoY2h1bmtzKTtcclxuXHQgICAgfVxyXG5cdCAgfTtcclxuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcblx0ICBTb3VyY2VOb2RlLnByb3RvdHlwZSA9IHtcclxuXHQgICAgYWRkOiBmdW5jdGlvbiBhZGQoY2h1bmtzKSB7XHJcblx0ICAgICAgaWYgKF91dGlscy5pc0FycmF5KGNodW5rcykpIHtcclxuXHQgICAgICAgIGNodW5rcyA9IGNodW5rcy5qb2luKCcnKTtcclxuXHQgICAgICB9XHJcblx0ICAgICAgdGhpcy5zcmMgKz0gY2h1bmtzO1xyXG5cdCAgICB9LFxyXG5cdCAgICBwcmVwZW5kOiBmdW5jdGlvbiBwcmVwZW5kKGNodW5rcykge1xyXG5cdCAgICAgIGlmIChfdXRpbHMuaXNBcnJheShjaHVua3MpKSB7XHJcblx0ICAgICAgICBjaHVua3MgPSBjaHVua3Muam9pbignJyk7XHJcblx0ICAgICAgfVxyXG5cdCAgICAgIHRoaXMuc3JjID0gY2h1bmtzICsgdGhpcy5zcmM7XHJcblx0ICAgIH0sXHJcblx0ICAgIHRvU3RyaW5nV2l0aFNvdXJjZU1hcDogZnVuY3Rpb24gdG9TdHJpbmdXaXRoU291cmNlTWFwKCkge1xyXG5cdCAgICAgIHJldHVybiB7IGNvZGU6IHRoaXMudG9TdHJpbmcoKSB9O1xyXG5cdCAgICB9LFxyXG5cdCAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMuc3JjO1xyXG5cdCAgICB9XHJcblx0ICB9O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2FzdENodW5rKGNodW5rLCBjb2RlR2VuLCBsb2MpIHtcclxuXHQgIGlmIChfdXRpbHMuaXNBcnJheShjaHVuaykpIHtcclxuXHQgICAgdmFyIHJldCA9IFtdO1xyXG5cclxuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNodW5rLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0ICAgICAgcmV0LnB1c2goY29kZUdlbi53cmFwKGNodW5rW2ldLCBsb2MpKTtcclxuXHQgICAgfVxyXG5cdCAgICByZXR1cm4gcmV0O1xyXG5cdCAgfSBlbHNlIGlmICh0eXBlb2YgY2h1bmsgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgY2h1bmsgPT09ICdudW1iZXInKSB7XHJcblx0ICAgIC8vIEhhbmRsZSBwcmltaXRpdmVzIHRoYXQgdGhlIFNvdXJjZU5vZGUgd2lsbCB0aHJvdyB1cCBvblxyXG5cdCAgICByZXR1cm4gY2h1bmsgKyAnJztcclxuXHQgIH1cclxuXHQgIHJldHVybiBjaHVuaztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIENvZGVHZW4oc3JjRmlsZSkge1xyXG5cdCAgdGhpcy5zcmNGaWxlID0gc3JjRmlsZTtcclxuXHQgIHRoaXMuc291cmNlID0gW107XHJcblx0fVxyXG5cclxuXHRDb2RlR2VuLnByb3RvdHlwZSA9IHtcclxuXHQgIGlzRW1wdHk6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XHJcblx0ICAgIHJldHVybiAhdGhpcy5zb3VyY2UubGVuZ3RoO1xyXG5cdCAgfSxcclxuXHQgIHByZXBlbmQ6IGZ1bmN0aW9uIHByZXBlbmQoc291cmNlLCBsb2MpIHtcclxuXHQgICAgdGhpcy5zb3VyY2UudW5zaGlmdCh0aGlzLndyYXAoc291cmNlLCBsb2MpKTtcclxuXHQgIH0sXHJcblx0ICBwdXNoOiBmdW5jdGlvbiBwdXNoKHNvdXJjZSwgbG9jKSB7XHJcblx0ICAgIHRoaXMuc291cmNlLnB1c2godGhpcy53cmFwKHNvdXJjZSwgbG9jKSk7XHJcblx0ICB9LFxyXG5cclxuXHQgIG1lcmdlOiBmdW5jdGlvbiBtZXJnZSgpIHtcclxuXHQgICAgdmFyIHNvdXJjZSA9IHRoaXMuZW1wdHkoKTtcclxuXHQgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChsaW5lKSB7XHJcblx0ICAgICAgc291cmNlLmFkZChbJyAgJywgbGluZSwgJ1xcbiddKTtcclxuXHQgICAgfSk7XHJcblx0ICAgIHJldHVybiBzb3VyY2U7XHJcblx0ICB9LFxyXG5cclxuXHQgIGVhY2g6IGZ1bmN0aW9uIGVhY2goaXRlcikge1xyXG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5zb3VyY2UubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHQgICAgICBpdGVyKHRoaXMuc291cmNlW2ldKTtcclxuXHQgICAgfVxyXG5cdCAgfSxcclxuXHJcblx0ICBlbXB0eTogZnVuY3Rpb24gZW1wdHkoKSB7XHJcblx0ICAgIHZhciBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhdGlvbiB8fCB7IHN0YXJ0OiB7fSB9O1xyXG5cdCAgICByZXR1cm4gbmV3IFNvdXJjZU5vZGUobG9jLnN0YXJ0LmxpbmUsIGxvYy5zdGFydC5jb2x1bW4sIHRoaXMuc3JjRmlsZSk7XHJcblx0ICB9LFxyXG5cdCAgd3JhcDogZnVuY3Rpb24gd3JhcChjaHVuaykge1xyXG5cdCAgICB2YXIgbG9jID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jdXJyZW50TG9jYXRpb24gfHwgeyBzdGFydDoge30gfSA6IGFyZ3VtZW50c1sxXTtcclxuXHJcblx0ICAgIGlmIChjaHVuayBpbnN0YW5jZW9mIFNvdXJjZU5vZGUpIHtcclxuXHQgICAgICByZXR1cm4gY2h1bms7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGNodW5rID0gY2FzdENodW5rKGNodW5rLCB0aGlzLCBsb2MpO1xyXG5cclxuXHQgICAgcmV0dXJuIG5ldyBTb3VyY2VOb2RlKGxvYy5zdGFydC5saW5lLCBsb2Muc3RhcnQuY29sdW1uLCB0aGlzLnNyY0ZpbGUsIGNodW5rKTtcclxuXHQgIH0sXHJcblxyXG5cdCAgZnVuY3Rpb25DYWxsOiBmdW5jdGlvbiBmdW5jdGlvbkNhbGwoZm4sIHR5cGUsIHBhcmFtcykge1xyXG5cdCAgICBwYXJhbXMgPSB0aGlzLmdlbmVyYXRlTGlzdChwYXJhbXMpO1xyXG5cdCAgICByZXR1cm4gdGhpcy53cmFwKFtmbiwgdHlwZSA/ICcuJyArIHR5cGUgKyAnKCcgOiAnKCcsIHBhcmFtcywgJyknXSk7XHJcblx0ICB9LFxyXG5cclxuXHQgIHF1b3RlZFN0cmluZzogZnVuY3Rpb24gcXVvdGVkU3RyaW5nKHN0cikge1xyXG5cdCAgICByZXR1cm4gJ1wiJyArIChzdHIgKyAnJykucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFwnKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLnJlcGxhY2UoL1xcci9nLCAnXFxcXHInKS5yZXBsYWNlKC9cXHUyMDI4L2csICdcXFxcdTIwMjgnKSAvLyBQZXIgRWNtYS0yNjIgNy4zICsgNy44LjRcclxuXHQgICAgLnJlcGxhY2UoL1xcdTIwMjkvZywgJ1xcXFx1MjAyOScpICsgJ1wiJztcclxuXHQgIH0sXHJcblxyXG5cdCAgb2JqZWN0TGl0ZXJhbDogZnVuY3Rpb24gb2JqZWN0TGl0ZXJhbChvYmopIHtcclxuXHQgICAgdmFyIHBhaXJzID0gW107XHJcblxyXG5cdCAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcblx0ICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0ICAgICAgICB2YXIgdmFsdWUgPSBjYXN0Q2h1bmsob2JqW2tleV0sIHRoaXMpO1xyXG5cdCAgICAgICAgaWYgKHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xyXG5cdCAgICAgICAgICBwYWlycy5wdXNoKFt0aGlzLnF1b3RlZFN0cmluZyhrZXkpLCAnOicsIHZhbHVlXSk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICB2YXIgcmV0ID0gdGhpcy5nZW5lcmF0ZUxpc3QocGFpcnMpO1xyXG5cdCAgICByZXQucHJlcGVuZCgneycpO1xyXG5cdCAgICByZXQuYWRkKCd9Jyk7XHJcblx0ICAgIHJldHVybiByZXQ7XHJcblx0ICB9LFxyXG5cclxuXHQgIGdlbmVyYXRlTGlzdDogZnVuY3Rpb24gZ2VuZXJhdGVMaXN0KGVudHJpZXMpIHtcclxuXHQgICAgdmFyIHJldCA9IHRoaXMuZW1wdHkoKTtcclxuXHJcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbnRyaWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0ICAgICAgaWYgKGkpIHtcclxuXHQgICAgICAgIHJldC5hZGQoJywnKTtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHJldC5hZGQoY2FzdENodW5rKGVudHJpZXNbaV0sIHRoaXMpKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmV0dXJuIHJldDtcclxuXHQgIH0sXHJcblxyXG5cdCAgZ2VuZXJhdGVBcnJheTogZnVuY3Rpb24gZ2VuZXJhdGVBcnJheShlbnRyaWVzKSB7XHJcblx0ICAgIHZhciByZXQgPSB0aGlzLmdlbmVyYXRlTGlzdChlbnRyaWVzKTtcclxuXHQgICAgcmV0LnByZXBlbmQoJ1snKTtcclxuXHQgICAgcmV0LmFkZCgnXScpO1xyXG5cclxuXHQgICAgcmV0dXJuIHJldDtcclxuXHQgIH1cclxuXHR9O1xyXG5cclxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBDb2RlR2VuO1xyXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xyXG5cclxuLyoqKi8gfSlcclxuLyoqKioqKi8gXSlcclxufSk7XHJcbjsiLCJ2YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xyXG5cclxudmFyIHNraWxscyA9IHtcclxuICBtYXN0ZXI6IFtdLFxyXG4gIGV4cGVydDogW1xyXG4gICAgeyBza2lsbDogJ0hUTUwnLCBwb3NpdGlvbjogJ3JpZ2h0JywgY29kZTogJ2h0bWwnIH0sXHJcbiAgICB7IHNraWxsOiAnQ1NTJywgcG9zaXRpb246ICdyaWdodCcsIGNvZGU6ICdjc3MnIH0sXHJcbiAgICB7IHNraWxsOiAnU0NTUycsIHBvc2l0aW9uOiAncmlnaHQnLCBjb2RlOiAnc2NzcycgfSxcclxuICAgIHsgc2tpbGw6ICdKYXZhU2NyaXB0JywgcG9zaXRpb246ICdsZWZ0JywgY29kZTogJ2pzJyB9LFxyXG4gICAgeyBza2lsbDogJ2pRdWVyeScsIHBvc2l0aW9uOiAnbGVmdCcsIGNvZGU6ICdqcScgfSxcclxuICAgIHsgc2tpbGw6ICdCb290U3RyYXAnLCBwb3NpdGlvbjogJ3JpZ2h0JywgY29kZTogJ2Jvb3RzdHJhcCcgfVxyXG4gIF0sXHJcbiAgcHJvZmljaWVudDogW1xyXG4gICAgeyBza2lsbDogJ0FuZ3VsYXIgMisnLCBwb3NpdGlvbjogJ2xlZnQnLCBjb2RlOiAnYW5ndWxhcicgfSxcclxuICAgIHsgc2tpbGw6ICdUeXBlU2NyaXB0JywgcG9zaXRpb246ICdsZWZ0JywgY29kZTogJ3RzJyB9XHJcbiAgXSxcclxuICBmYW1pbGlhcjogW1xyXG4gICAgeyBza2lsbDogJ0JhY2tib25lLmpzJywgcG9zaXRpb246ICdsZWZ0JywgY29kZTogJ2JhY2tib25lJyB9LFxyXG4gICAgeyBza2lsbDogJ05vZGUuanMnLCBwb3NpdGlvbjogJ2xlZnQnLCBjb2RlOiAnbm9kZScgfSxcclxuICAgIHsgc2tpbGw6ICdSZWFjdEpTJywgcG9zaXRpb246ICdsZWZ0JywgY29kZTogJ3JlYWN0JyB9LFxyXG4gICAgeyBza2lsbDogJ1Bob3Rvc2hvcCcsIHBvc2l0aW9uOiAncmlnaHQnLCBjb2RlOiAncGhvdG9zaG9wJyB9XHJcbiAgXSxcclxuICBiZWdpbm5lcjogW11cclxufTtcclxuXHJcbnZhciBleHBlcmllbmNlRGV0YWlscyA9IFtcclxuICB7XHJcbiAgICBmcm9tOiAnMjAwNzA5JyxcclxuICAgIHRvOiAnMjAxMTA1JyxcclxuICAgIG9yZ2FuaXNhdGlvbjogJ1IuTS5LIEVuZ2luZWVyaW5nIENvbGxlZ2UnLFxyXG4gICAgY29kZTogJ3JtaycsXHJcbiAgICBsb2NhdGlvbjogJ0d1bW11ZGlwb25kaScsXHJcbiAgICBwcm9maWxlOiBbeyByb2xlOiAnVW5kZXIgR3JhZHVhdGUnLCBkZXNjcmlwdGlvbjogWydFbGVjdHJpY2FsIGFuZCBFbGVjdHJvbmljcyBFbmdpbmVlcmluZyddIH1dXHJcbiAgfSxcclxuICB7XHJcbiAgICBmcm9tOiAnMjAxMTA5JyxcclxuICAgIHRvOiAnMjAxNjEyJyxcclxuICAgIG9yZ2FuaXNhdGlvbjogJ1RhdGEgQ29uc3VsdGFuY3kgU2VydmljZXMnLFxyXG4gICAgY29kZTogJ3RjcycsXHJcbiAgICBsb2NhdGlvbjogJ0NoZW5uYWknLFxyXG4gICAgcHJvZmlsZTogW1xyXG4gICAgICB7IHJvbGU6ICdXZWIgRGV2ZWxvcGVyJywgZGVzY3JpcHRpb246IFsnRm9yIGEgQmFua2luZyBjbGllbnQnXSB9LFxyXG4gICAgICB7IHJvbGU6ICdQcm9kdWN0aW9uIFN1cHBvcnQgRXhlY3V0aXZlJywgZGVzY3JpcHRpb246IFsnRm9yIGEgVGVsZWNvbSBjbGllbnQnXSB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBmcm9tOiAnMjAxNjEyJyxcclxuICAgIHRvOiAnUHJlc2VudCcsXHJcbiAgICBvcmdhbmlzYXRpb246ICdDb2duaXphbnQgVGVjaG5vbG9neSBTb2x1dGlvbnMnLFxyXG4gICAgY29kZTogJ2N0cycsXHJcbiAgICBsb2NhdGlvbjogJ0NoZW5uYWknLFxyXG4gICAgcHJvZmlsZTogW3sgcm9sZTogJ1NlbmlvciBXZWIgRGV2ZWxvcGVyJywgZGVzY3JpcHRpb246IFsnRm9yIGEgTG9naXN0aWNzIGNsaWVudCcsICdGb3IgYSBQaGFybWFjZXV0aWNhbCBjbGllbnQnXSB9XVxyXG4gIH1cclxuXTtcclxuXHJcbnZhciBnaXRodWJVc2VybmFtZSA9ICdiaW5lZXNoYic7XHJcbnZhciByZXBvc1VybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7Z2l0aHViVXNlcm5hbWV9L3JlcG9zP3NvcnQ9dXBkYXRlZCZ0eXBlPWFsbGA7XHJcbnZhciBwb3J0Zm9saW9VcmwgPSAnaHR0cHM6Ly9iaW5lZXNoYi5naXRodWIuaW8vJztcclxuXHJcbnZhciBjb250YWN0RGV0YWlscyA9IFtcclxuICB7IGljb25DbGFzczogJ2ZhLWVudmVsb3BlJywgZGlzcGxheVRleHQ6ICdiYmluZWVzaDIxQGdtYWlsLmNvbScsIGxpbms6ICdtYWlsdG86YmJpbmVlc2gyMUBnbWFpbC5jb20nIH0sXHJcbiAgeyBpY29uQ2xhc3M6ICdmYS1saW5rZWRpbicsIGRpc3BsYXlUZXh0OiAnYmluZWVzaC1iYWxhc3VicmFtYW5pYW4nLCBsaW5rOiAnaHR0cHM6Ly9pbi5saW5rZWRpbi5jb20vaW4vYmluZWVzaC1iYWxhc3VicmFtYW5pYW4tNWI5MjIzYjUnIH0sXHJcbiAgeyBpY29uQ2xhc3M6ICdmYS1mYWNlYm9vaycsIGRpc3BsYXlUZXh0OiAnYmluZWVzaC5iYWxhc3VicmFtYW5pYW4nLCBsaW5rOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2JpbmVlc2guYmFsYXN1YnJhbWFuaWFuJyB9LFxyXG4gIHsgaWNvbkNsYXNzOiAnZmEtZ2l0aHViJywgZGlzcGxheVRleHQ6ICdiaW5lZXNoYicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vYmluZWVzaGInIH1cclxuXTtcclxuIiwiLyoqXHJcbiAqIEhhbmRsZWJhcnMgSGVscGVyc1xyXG4gKi9cclxuSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcignY291bnRlcicsIGZ1bmN0aW9uIChpbmRleCkge1xyXG4gIHJldHVybiBpbmRleCArIDE7XHJcbn0pO1xyXG5cclxudmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcbnZhciBzZWN0aW9uTGlua3MgPSBbXTtcclxuXHJcbiQoJ2JvZHknKS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgcmVuZGVyU2tpbGxzKCk7XHJcbiAgcmVuZGVyRXhwZXJpZW5jZXMoKTtcclxuICBnZXRXb3JrcygpO1xyXG4gIHJlbmRlckZvb3RlcigpO1xyXG5cclxuICAkKCduYXYgYScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgc2VjdGlvbkxpbmtzLnB1c2goJCh0aGlzKS5hdHRyKCdocmVmJykpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcubmF2LWJhciAjbmF2LW1lbnUtYnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLm5hdi1iYXInKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gIH0pO1xyXG5cclxuICAkKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5uYXYtYmFyJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XHJcbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XHJcbiAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcclxuXHJcbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkd2luZG93Lm9uKCdzY3JvbGwgcmVzaXplJywgY2hlY2tJZkluVmlldyk7XHJcbiAgJHdpbmRvdy50cmlnZ2VyKCdzY3JvbGwnKTtcclxufSk7XHJcblxyXG4vKiogXHJcbiAqIFJlbmRlciBTa2lsbHNcclxuICovXHJcbmZ1bmN0aW9uIHJlbmRlclNraWxscygpIHtcclxuICB2YXIgJHNraWxsc1NlY3Rpb24gPSAkKCcjc2tpbGxzIC5za2lsbHMtY29udGFpbmVyJyk7XHJcbiAgdmFyICRza2lsbHNUZW1wbGF0ZSA9ICQoJyNza2lsbHMtdGVtcGxhdGUnKS5odG1sKCk7XHJcbiAgdmFyIGNvbXBpbGVkU2tpbGxzID0gSGFuZGxlYmFycy5jb21waWxlKCRza2lsbHNUZW1wbGF0ZSk7XHJcbiAgdmFyIGRpc3BsYXlTa2lsbHMgPSBPYmplY3Qua2V5cyhza2lsbHMpLm1hcChmdW5jdGlvbiAobGV2ZWwpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNraWxsTGV2ZWw6IGxldmVsLFxyXG4gICAgICB0ZWNobm9sb2dpZXM6IHNraWxsc1tsZXZlbF1cclxuICAgIH07XHJcbiAgfSk7XHJcbiAgJHNraWxsc1NlY3Rpb24uaHRtbChjb21waWxlZFNraWxscyhkaXNwbGF5U2tpbGxzKSk7XHJcbn1cclxuXHJcbi8qKiBcclxuICogUmVuZGVyIEV4cGVyaWVuY2UgZGV0YWlsc1xyXG4gKi9cclxuZnVuY3Rpb24gcmVuZGVyRXhwZXJpZW5jZXMoKSB7XHJcbiAgdmFyICRleHBlcmllbmNlU2VjdGlvbiA9ICQoJyNleHBlcmllbmNlIC5leHBlcmllbmNlLWNvbnRhaW5lcicpO1xyXG4gIHZhciAkZXhwZXJpZW5jZVRlbXBsYXRlID0gJCgnI2V4cGVyaWVuY2UtdGVtcGxhdGUnKS5odG1sKCk7XHJcbiAgdmFyIGNvbXBpbGVkRXhwRGV0YWlscyA9IEhhbmRsZWJhcnMuY29tcGlsZSgkZXhwZXJpZW5jZVRlbXBsYXRlKTtcclxuICBleHBlcmllbmNlRGV0YWlscy5zb3J0KGZ1bmN0aW9uKGV4cDEsIGV4cDIpIHtcclxuICAgIHJldHVybiBleHAyLmZyb20gLSBleHAxLmZyb207XHJcbiAgfSk7XHJcbiAgZXhwZXJpZW5jZURldGFpbHMuZm9yRWFjaChmdW5jdGlvbihleHApIHtcclxuICAgIGV4cC5mcm9tID0gZ2V0TW9udGhZZWFyTGFiZWwoZXhwLmZyb20pO1xyXG4gICAgZXhwLnRvID0gZ2V0TW9udGhZZWFyTGFiZWwoZXhwLnRvKTtcclxuICB9KTtcclxuICAkZXhwZXJpZW5jZVNlY3Rpb24uaHRtbChjb21waWxlZEV4cERldGFpbHMoZXhwZXJpZW5jZURldGFpbHMpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgTW9udGggWWVhciBsYWJlbFxyXG4gKiBAcGFyYW0ge251bWJlcn0geWVhck1vbnRoIFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TW9udGhZZWFyTGFiZWwoeWVhck1vbnRoKSB7XHJcbiAgdmFyIGRhdGVTdHJpbmcsIGRhdGVPYmo7XHJcblxyXG4gIGlmIChpc0Zpbml0ZSh5ZWFyTW9udGgpKSB7XHJcbiAgICBkYXRlU3RyaW5nID0geWVhck1vbnRoLnN1YnN0cmluZygwLCA0KSArICctJyArIHllYXJNb250aC5zdWJzdHJpbmcoNCk7XHJcbiAgICBkYXRlT2JqID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XHJcblxyXG4gICAgcmV0dXJuIG1vbnRoc1tkYXRlT2JqLmdldE1vbnRoKCldICsgJyAnICsgZGF0ZU9iai5nZXRGdWxsWWVhcigpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4geWVhck1vbnRoO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBXb3JrcyBmcm9tIG9ubGluZSByZXBvcyBcclxuICovXHJcbmZ1bmN0aW9uIGdldFdvcmtzKCkge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IHJlcG9zVXJsLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQuZ2l0aHViLm1lcmN5LXByZXZpZXcranNvbidcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVwb3MpIHtcclxuICAgICAgaWYgKHJlcG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZW5kZXJXb3JrcyhyZXBvcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbmRlciBXb3Jrc1xyXG4gKi9cclxuZnVuY3Rpb24gcmVuZGVyV29ya3MocmVwb3MpIHtcclxuICB2YXIgJG93bldvcmtzU2VjdGlvbiA9ICQoJy5vd24td29ya3MnKTtcclxuICB2YXIgJGNvbnRyaWJ1dGVkV29ya3NTZWN0aW9uID0gJCgnLmNvbnRyaWJ1dGVkLXdvcmtzJyk7XHJcbiAgdmFyICR3b3Jrc1RlbXBsYXRlID0gJCgnI3dvcmtzLXRlbXBsYXRlJykuaHRtbCgpO1xyXG4gIHZhciBjb21waWxlZFdvcmtEZXRhaWxzID0gSGFuZGxlYmFycy5jb21waWxlKCR3b3Jrc1RlbXBsYXRlKTtcclxuICB2YXIgb3duUmVwb3MgPSB7XHJcbiAgICByZXBvczogW10sXHJcbiAgICBpc093bjogdHJ1ZSxcclxuICB9O1xyXG4gIHZhciBjb250cmlidXRlZFJlcG9zID0ge1xyXG4gICAgcmVwb3M6IFtdLFxyXG4gICAgaXNPd246IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIHJlcG9zLmZpbHRlcihmdW5jdGlvbiAoZWFjaFJlcG8pIHtcclxuICAgIHJldHVybiAoZWFjaFJlcG8udG9waWNzICYmIGVhY2hSZXBvLnRvcGljcy5sZW5ndGggPiAwKSB8fCBlYWNoUmVwby5kZXNjcmlwdGlvbjtcclxuICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChlYWNoUmVwbykge1xyXG4gICAgdmFyIHJlcG9EZXRhaWxzID0ge1xyXG4gICAgICBuYW1lOiBlYWNoUmVwby5uYW1lLFxyXG4gICAgICBsYW5ndWFnZTogZWFjaFJlcG8ubGFuZ3VhZ2UgPyBlYWNoUmVwby5sYW5ndWFnZS50b0xvd2VyQ2FzZSgpIDogbnVsbCxcclxuICAgICAgdG9waWNzOiBlYWNoUmVwby50b3BpY3MsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBlYWNoUmVwby5kZXNjcmlwdGlvbixcclxuICAgICAgaG9tZXBhZ2U6IChlYWNoUmVwby5ob21lcGFnZSAhPT0gcG9ydGZvbGlvVXJsKSA/IGVhY2hSZXBvLmhvbWVwYWdlIDogbnVsbCxcclxuICAgICAgcmVwb1VybDogZWFjaFJlcG8uc3ZuX3VybFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZWFjaFJlcG8ub3duZXIubG9naW4gPT09IGdpdGh1YlVzZXJuYW1lKSB7XHJcbiAgICAgIG93blJlcG9zLnJlcG9zLnB1c2gocmVwb0RldGFpbHMpO1xyXG4gICAgfVxyXG4gICAgLy8gZWxzZSB7XHJcbiAgICAvLyAgIGNvbnRyaWJ1dGVkUmVwb3MucmVwb3MucHVzaChyZXBvRGV0YWlscyk7XHJcbiAgICAvLyB9XHJcbiAgfSk7XHJcblxyXG4gIGlmIChvd25SZXBvcy5yZXBvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAkb3duV29ya3NTZWN0aW9uLmh0bWwoY29tcGlsZWRXb3JrRGV0YWlscyhvd25SZXBvcykpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbnRyaWJ1dGVkUmVwb3MucmVwb3MubGVuZ3RoID4gMCkge1xyXG4gICAgJGNvbnRyaWJ1dGVkV29ya3NTZWN0aW9uLmh0bWwoY29tcGlsZWRXb3JrRGV0YWlscyhjb250cmlidXRlZFJlcG9zKSk7XHJcbiAgfVxyXG5cclxuICBpZiAob3duUmVwb3MucmVwb3MubGVuZ3RoID4gMCB8fCBjb250cmlidXRlZFJlcG9zLnJlcG9zLmxlbmd0aCA+IDApIHtcclxuICAgICQoJy5zZWN0aW9uLXdvcmtzJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmxpbmstd29ya3MnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmVuZGVyIEZvb3RlclxyXG4gKi9cclxuZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xyXG4gIHZhciAkZm9vdGVyQ29weXJpZ2h0ID0gJCgnLmNvcHlyaWdodC1pbmZvJyk7XHJcbiAgdmFyICRmb290ZXJUZW1wbGF0ZSA9ICQoJyNmb290ZXItY29weXJpZ2h0LXRlbXBsYXRlJykuaHRtbCgpO1xyXG4gIHZhciBjb21waWxlZEZvb3RlciA9IEhhbmRsZWJhcnMuY29tcGlsZSgkZm9vdGVyVGVtcGxhdGUpO1xyXG4gIHZhciBjdXJyZW50WWVhciA9IChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpO1xyXG4gICRmb290ZXJDb3B5cmlnaHQuaHRtbChjb21waWxlZEZvb3RlcihjdXJyZW50WWVhcikpO1xyXG5cclxuICB2YXIgJGZvb3RlckNvbnRhY3QgPSAkKCcuZm9vdGVyLWNvbnRhY3QnKTtcclxuICB2YXIgJGZvb3RlckNvbnRhY3RUZW1wbGF0ZSA9ICQoJyNmb290ZXItY29udGFjdC10ZW1wbGF0ZScpLmh0bWwoKTtcclxuICB2YXIgY29tcGlsZWRGb290ZXJDb250YWN0ID0gSGFuZGxlYmFycy5jb21waWxlKCRmb290ZXJDb250YWN0VGVtcGxhdGUpO1xyXG4gICRmb290ZXJDb250YWN0Lmh0bWwoY29tcGlsZWRGb290ZXJDb250YWN0KGNvbnRhY3REZXRhaWxzKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSWZJblZpZXcoKSB7XHJcbiAgdmFyIHdpbmRvd0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XHJcbiAgdmFyIHdpbmRvd1RvcFBvcyA9ICR3aW5kb3cuc2Nyb2xsVG9wKCk7XHJcbiAgdmFyIHdpbmRvd0JvdHRvbVBvcyA9ICh3aW5kb3dUb3BQb3MgKyB3aW5kb3dIZWlnaHQpO1xyXG5cclxuICB2YXIgbGlua1RvQmVBY3RpdmUgPSBzZWN0aW9uTGlua3MuZmluZChmdW5jdGlvbiAobGlua0lkKSB7XHJcbiAgICB2YXIgc2VjdGlvblBvcyA9ICQobGlua0lkKS5vZmZzZXQoKS50b3A7XHJcbiAgICB2YXIgc2VjdGlvbkhlaWdodCA9ICQobGlua0lkKS5oZWlnaHQoKTtcclxuXHJcbiAgICByZXR1cm4gd2luZG93VG9wUG9zID49IHNlY3Rpb25Qb3MgJiYgd2luZG93VG9wUG9zIDwgKHNlY3Rpb25Qb3MgKyBzZWN0aW9uSGVpZ2h0KTtcclxuICB9KTtcclxuXHJcbiAgaWYgKGxpbmtUb0JlQWN0aXZlKSB7XHJcbiAgICAkKCduYXYgYVtocmVmPVwiJyArIGxpbmtUb0JlQWN0aXZlICsgJ1wiXScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGxpbmtUb0JlQWN0aXZlKTtcclxuICB9XHJcblxyXG4gIHNlY3Rpb25MaW5rcy5maWx0ZXIoZnVuY3Rpb24gKGxpbmtJZCkgeyByZXR1cm4gbGlua0lkICE9PSBsaW5rVG9CZUFjdGl2ZSB9KVxyXG4gICAgLmZvckVhY2goZnVuY3Rpb24gKGxpbmtJZCkge1xyXG4gICAgICAkKCduYXYgYVtocmVmPVwiJyArIGxpbmtJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgQXJyYXkuZnJvbSgkKCcuYW5pbWF0aW9uX2VsZW1lbnRzJykpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcclxuICAgIHZhciAkZWwgPSAkKGVsKTtcclxuICAgIHZhciBlbEhlaWdodCA9ICRlbC5vdXRlckhlaWdodCgpO1xyXG4gICAgdmFyIGVsVG9wUG9zID0gJGVsLm9mZnNldCgpLnRvcDtcclxuICAgIHZhciBlbEJvdHRvbVBvcyA9IGVsVG9wUG9zICsgZWxIZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuICRlbC5oYXNDbGFzcygnYW5pbWF0aW9uX2VsZW1lbnRzJykgJiYgKGVsQm90dG9tUG9zID49IHdpbmRvd1RvcFBvcykgJiYgKGVsVG9wUG9zIDw9IHdpbmRvd0JvdHRvbVBvcyk7XHJcbiAgfSkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICQoZWwpLnJlbW92ZUNsYXNzKCdhbmltYXRpb25fZWxlbWVudHMnKTtcclxuICB9KTtcclxufVxyXG4iXX0=
