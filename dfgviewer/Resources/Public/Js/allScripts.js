function enterFullscreen(){setTimeout(function(){window.dispatchEvent(new Event("resize"))},220),$("body").addClass("fullscreen"),$(".zoom .fullscreen").addClass("active"),Cookies.set("tx-dlf-pageview-zoomFullscreen","true")}function exitFullscreen(){setTimeout(function(){window.dispatchEvent(new Event("resize"))},220),$("body").removeClass("fullscreen"),$(".zoom .fullscreen").removeClass("active"),Cookies.remove("tx-dlf-pageview-zoomFullscreen")}!function(a,b,c){function d(a,b){return typeof a===b}function e(){return"function"!=typeof b.createElement?b.createElement(arguments[0]):u?b.createElementNS.call(b,"http://www.w3.org/2000/svg",arguments[0]):b.createElement.apply(b,arguments)}function f(){var a=b.body;return a||(a=e(u?"svg":"body"),a.fake=!0),a}function g(a,c,d,g){var h,i,j,k,l="modernizr",m=e("div"),n=f();if(parseInt(d,10))for(;d--;)j=e("div"),j.id=g?g[d]:l+(d+1),m.appendChild(j);return h=e("style"),h.type="text/css",h.id="s"+l,(n.fake?n:m).appendChild(h),n.appendChild(m),h.styleSheet?h.styleSheet.cssText=a:h.appendChild(b.createTextNode(a)),m.id=l,n.fake&&(n.style.background="",n.style.overflow="hidden",k=t.style.overflow,t.style.overflow="hidden",t.appendChild(n)),i=c(m,a),n.fake?(n.parentNode.removeChild(n),t.style.overflow=k,t.offsetHeight):m.parentNode.removeChild(m),!!i}function h(a){return a.replace(/([a-z])-([a-z])/g,function(a,b,c){return b+c.toUpperCase()}).replace(/^-/,"")}function i(a,b){return!!~(""+a).indexOf(b)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b,c){var e;for(var f in a)if(a[f]in b)return!1===c?a[f]:(e=b[a[f]],d(e,"function")?j(e,c||b):e);return!1}function l(a){return a.replace(/([A-Z])/g,function(a,b){return"-"+b.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(b,d){var e=b.length;if("CSS"in a&&"supports"in a.CSS){for(;e--;)if(a.CSS.supports(l(b[e]),d))return!0;return!1}if("CSSSupportsRule"in a){for(var f=[];e--;)f.push("("+l(b[e])+":"+d+")");return f=f.join(" or "),g("@supports ("+f+") { #modernizr { position: absolute; } }",function(a){return"absolute"==getComputedStyle(a,null).position})}return c}function n(a,b,f,g){function j(){l&&(delete C.style,delete C.modElem)}if(g=!d(g,"undefined")&&g,!d(f,"undefined")){var k=m(a,f);if(!d(k,"undefined"))return k}for(var l,n,o,p,q,r=["modernizr","tspan","samp"];!C.style&&r.length;)l=!0,C.modElem=e(r.shift()),C.style=C.modElem.style;for(o=a.length,n=0;o>n;n++)if(p=a[n],q=C.style[p],i(p,"-")&&(p=h(p)),C.style[p]!==c){if(g||d(f,"undefined"))return j(),"pfx"!=b||p;try{C.style[p]=f}catch(a){}if(C.style[p]!=q)return j(),"pfx"!=b||p}return j(),!1}function o(a,b,c,e,f){var g=a.charAt(0).toUpperCase()+a.slice(1),h=(a+" "+y.join(g+" ")+g).split(" ");return d(b,"string")||d(b,"undefined")?n(h,b,e,f):(h=(a+" "+A.join(g+" ")+g).split(" "),k(h,b,c))}var p=[],q=[],r={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(a,b){var c=this;setTimeout(function(){b(c[a])},0)},addTest:function(a,b,c){q.push({name:a,fn:b,options:c})},addAsyncTest:function(a){q.push({name:null,fn:a})}},s=function(){};s.prototype=r,s=new s,s.addTest("svg",!!b.createElementNS&&!!b.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var t=b.documentElement,u="svg"===t.nodeName.toLowerCase(),v=r._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];r._prefixes=v;var w=r.testStyles=g;s.addTest("touchevents",function(){var c;if("ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch)c=!0;else{var d=["@media (",v.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");w(d,function(a){c=9===a.offsetTop})}return c});var x="Moz O ms Webkit",y=r._config.usePrefixes?x.split(" "):[];r._cssomPrefixes=y;var z=function(b){var d,e=v.length,f=a.CSSRule;if(void 0===f)return c;if(!b)return!1;if(b=b.replace(/^@/,""),(d=b.replace(/-/g,"_").toUpperCase()+"_RULE")in f)return"@"+b;for(var g=0;e>g;g++){var h=v[g];if(h.toUpperCase()+"_"+d in f)return"@-"+h.toLowerCase()+"-"+b}return!1};r.atRule=z;var A=r._config.usePrefixes?x.toLowerCase().split(" "):[];r._domPrefixes=A;var B={elem:e("modernizr")};s._q.push(function(){delete B.elem});var C={style:B.elem.style};s._q.unshift(function(){delete C.style}),r.testAllProps=o;var D=r.prefixed=function(a,b,c){return 0===a.indexOf("@")?z(a):(-1!=a.indexOf("-")&&(a=h(a)),b?o(a,b,c):o(a,"pfx"))};s.addTest("objectfit",!!D("objectFit"),{aliases:["object-fit"]}),function(){var a,b,c,e,f,g,h;for(var i in q)if(q.hasOwnProperty(i)){if(a=[],b=q[i],b.name&&(a.push(b.name.toLowerCase()),b.options&&b.options.aliases&&b.options.aliases.length))for(c=0;c<b.options.aliases.length;c++)a.push(b.options.aliases[c].toLowerCase());for(e=d(b.fn,"function")?b.fn():b.fn,f=0;f<a.length;f++)g=a[f],h=g.split("."),1===h.length?s[h[0]]=e:(!s[h[0]]||s[h[0]]instanceof Boolean||(s[h[0]]=new Boolean(s[h[0]])),s[h[0]][h[1]]=e),p.push((e?"":"no-")+h.join("-"))}}(),function(a){var b=t.className,c=s._config.classPrefix||"";if(u&&(b=b.baseVal),s._config.enableJSClass){var d=new RegExp("(^|\\s)"+c+"no-js(\\s|$)");b=b.replace(d,"$1"+c+"js$2")}s._config.enableClasses&&(b+=" "+c+a.join(" "+c),u?t.className.baseVal=b:t.className=b)}(p),delete r.addTest,delete r.addAsyncTest;for(var E=0;E<s._q.length;E++)s._q[E]();a.Modernizr=s}(window,document),function(a){var b=!1;if("function"==typeof define&&define.amd&&(define(a),b=!0),"object"==typeof exports&&(module.exports=a(),b=!0),!b){var c=window.Cookies,d=window.Cookies=a();d.noConflict=function(){return window.Cookies=c,d}}}(function(){function a(){for(var a=0,b={};a<arguments.length;a++){var c=arguments[a];for(var d in c)b[d]=c[d]}return b}function b(c){function d(b,e,f){var g;if("undefined"!=typeof document){if(arguments.length>1){if(f=a({path:"/"},d.defaults,f),"number"==typeof f.expires){var h=new Date;h.setMilliseconds(h.getMilliseconds()+864e5*f.expires),f.expires=h}f.expires=f.expires?f.expires.toUTCString():"";try{g=JSON.stringify(e),/^[\{\[]/.test(g)&&(e=g)}catch(a){}e=c.write?c.write(e,b):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),b=encodeURIComponent(String(b)),b=b.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),b=b.replace(/[\(\)]/g,escape);var i="";for(var j in f)f[j]&&(i+="; "+j,!0!==f[j]&&(i+="="+f[j]));return document.cookie=b+"="+e+i}b||(g={});for(var k=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,m=0;m<k.length;m++){var n=k[m].split("="),o=n.slice(1).join("=");'"'===o.charAt(0)&&(o=o.slice(1,-1));try{var p=n[0].replace(l,decodeURIComponent);if(o=c.read?c.read(o,p):c(o,p)||o.replace(l,decodeURIComponent),this.json)try{o=JSON.parse(o)}catch(a){}if(b===p){g=o;break}b||(g[p]=o)}catch(a){}}return g}}return d.set=d,d.get=function(a){return d.call(d,a)},d.getJSON=function(){return d.apply({json:!0},[].slice.call(arguments))},d.defaults={},d.remove=function(b,c){d(b,"",a(c,{expires:-1}))},d.withConverter=b,d}return b(function(){})}),$(document).ready(function(){var a=function(){var a=!1;return function(b){(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))&&(a=!0)}(navigator.userAgent||navigator.vendor||window.opera),a}()?"touchstart":"click";$(".offcanvas-toggle").on(a,function(a){$(this).parent().toggleClass("open")}),$("li.submenu > a").on(a,function(a){return $("li.submenu.open a").not(this).parent().removeClass("open"),$(this).parent().toggleClass("open"),!1}),$("nav .nav-toggle").on(a,function(a){$(this).toggleClass("active"),$("nav .secondary-nav").toggleClass("open")}),$(".calendar-view .contains-issues").on(a,function(a){$(".calendar-view table td.open").not($(this).parent()).removeClass("open"),$(this).parent().toggleClass("open")}),$(".tx-dfgviewer-newspaper-calendar").parents("body").addClass("calendar"),$(".tx-dfgviewer-newspaper-calendar .calendar-list-selection a.select-calendar-view, .tx-dfgviewer-newspaper-calendar .calendar-view").addClass("active"),$(".tx-dfgviewer-newspaper-calendar .calendar-list-selection a").on(a,function(a){if(!$(this).hasClass("active")){var b="."+$(this).attr("class").replace("select-","");$(".tx-dfgviewer-newspaper-calendar .active").removeClass("active"),$(this).addClass("active"),$(b).addClass("active")}}),$("a.fullscreen").on(a,function(){$("body.fullscreen")[0]?exitFullscreen():enterFullscreen()}),$(".provider img").each(function(){(void 0!==this.naturalWidth&&0==this.naturalWidth||"uninitialized"==this.readyState)&&$(this).parents(".provider").addClass("missing-provider-image")}),$(".submenu.downloads ul li")[0]||$("#tab-downloads").replaceWith(function(){return $('<span title="'+$(this).attr("title")+'" class="'+$(this).attr("class")+'" id="'+$(this).attr("id")+'">'+$(this).html()+"</span>")}),Cookies.get("tx-dlf-pageview-zoomFullscreen")&&($("body").addClass("fullscreen static"),$(".zoom .fullscreen").addClass("active")),$("body").removeClass("hidden"),setTimeout(function(){$("body").removeClass("static")},1e3)}),$(document).keyup(function(a){if(27==a.keyCode){if($("body.fullscreen")[0])return exitFullscreen();$(".document-functions .search.open")[0]&&$(".document-functions .search").removeClass("open")}if(70==a.keyCode&&!$("#tx-dfgviewer-sru-query").is(":focus"))return enterFullscreen()});