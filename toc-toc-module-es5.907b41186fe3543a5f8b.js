!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],i=!0,o=!1,r=void 0;try{for(var c,a=e[Symbol.iterator]();!(i=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);i=!0);}catch(l){o=!0,r=l}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return a(this,n)}}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+1zh":function(t,i,a){"use strict";a.r(i),a.d(i,"TocModule",function(){return _});var l=a("ofXK"),s=a("NFeN"),u=a("XNiG"),d=a("itXk"),f=a("7Hc7"),b=a("1G5W"),p=a("HDdC"),h=a("Y7HM"),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(i,e);var t=c(i);function i(e){var o,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.a;return n(this,i),(o=t.call(this)).source=e,o.delayTime=r,o.scheduler=c,(!Object(h.a)(r)||r<0)&&(o.delayTime=0),c&&"function"==typeof c.schedule||(o.scheduler=f.a),o}return o(i,[{key:"_subscribe",value:function(e){return this.scheduler.schedule(i.dispatch,this.delayTime,{source:this.source,subscriber:e})}}],[{key:"create",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.a;return new i(e,t,n)}},{key:"dispatch",value:function(e){var t=e.source,n=e.subscriber;return this.add(t.subscribe(n))}}]),i}(p.a);function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return n.lift(new m(e,t))}}var m=function(){function e(t,i){n(this,e),this.scheduler=t,this.delay=i}return o(e,[{key:"call",value:function(e,t){return new y(t,this.delay,this.scheduler).subscribe(e)}}]),e}(),g=a("JX91"),E=a("fXoL"),w=a("Faly"),x=a("TNhP"),O=["tocItem"];function I(e,t){1&e&&(E.Rb(0,"div",7),E.Ac(1," \u76ee\u5f55 "),E.Qb())}function k(e,t){if(1&e){var n=E.Sb();E.Rb(0,"button",8),E.Yb("click",function(){return E.qc(n),E.cc(2).toggle(!1)}),E.Ac(1," \u76ee\u5f55 "),E.Nb(2,"mat-icon",9),E.Qb()}if(2&e){var i=E.cc(2);E.Bb("aria-pressed",!i.isCollapsed),E.Ab(2),E.Eb("collapsed",i.isCollapsed)}}function j(e,t){if(1&e&&(E.Rb(0,"li",11,12),E.Nb(2,"a",13),E.Qb()),2&e){var n=E.cc(),i=n.$implicit,o=n.index,r=E.cc(2);E.Cb(i.level),E.Eb("secondary","EmbeddedExpandable"===r.type&&o>=r.primaryMax)("active",o===r.activeIndex),E.ic("title",i.title),E.Ab(2),E.hc("href",i.href,E.sc)("innerHTML",i.content,E.rc)}}function A(e,t){if(1&e&&(E.Pb(0),E.zc(1,j,3,10,"li",10),E.Ob()),2&e){var n=t.$implicit,i=E.cc(2);E.Ab(1),E.hc("ngIf","Floating"===i.type||"h1"!==n.level)}}function S(e,t){if(1&e){var n=E.Sb();E.Rb(0,"button",14),E.Yb("click",function(){return E.qc(n),E.cc(2).toggle()}),E.Qb()}if(2&e){var i=E.cc(2);E.Eb("collapsed",i.isCollapsed),E.Bb("aria-pressed",!i.isCollapsed)}}function C(e,t){if(1&e&&(E.Rb(0,"div",1),E.zc(1,I,2,0,"div",2),E.zc(2,k,3,3,"button",3),E.Rb(3,"ul",4),E.zc(4,A,2,1,"ng-container",5),E.Qb(),E.zc(5,S,1,3,"button",6),E.Qb()),2&e){var n=E.cc();E.Eb("collapsed",n.isCollapsed),E.Ab(1),E.hc("ngIf","EmbeddedSimple"===n.type),E.Ab(1),E.hc("ngIf","EmbeddedExpandable"===n.type),E.Ab(1),E.Eb("embedded","Floating"!==n.type),E.Ab(1),E.hc("ngForOf",n.tocList),E.Ab(1),E.hc("ngIf","EmbeddedExpandable"===n.type)}}var T,R,M=((R=function(){function t(e,i,o){n(this,t),this.scrollService=e,this.tocService=o,this.activeIndex=null,this.type="None",this.isCollapsed=!0,this.isEmbedded=!1,this.onDestroy=new u.a,this.primaryMax=4,this.isEmbedded=-1!==i.nativeElement.className.indexOf("embedded")}return o(t,[{key:"ngOnInit",value:function(){var e=this;this.tocService.tocList.pipe(Object(b.a)(this.onDestroy)).subscribe(function(t){e.tocList=t;var n,i=(n=function(e){return"h1"!==e.level},e.tocList.reduce(function(e,t){return n(t)?e+1:e},0));e.type=i>0?e.isEmbedded?i>e.primaryMax?"EmbeddedExpandable":"EmbeddedSimple":"Floating":"None"})}},{key:"ngAfterViewInit",value:function(){var t=this;this.isEmbedded||Object(d.b)([this.tocService.activeItemIndex.pipe(v(f.a)),this.items.changes.pipe(Object(g.a)(this.items))]).pipe(Object(b.a)(this.onDestroy)).subscribe(function(n){var i=e(n,2),o=i[0],r=i[1];if(t.activeIndex=o,!(null===o||o>=r.length)){var c=r.toArray()[o].nativeElement,a=c.offsetParent,l=c.getBoundingClientRect(),s=a.getBoundingClientRect();l.top>=s.top&&l.bottom<=s.bottom||(a.scrollTop+=l.top-s.top-a.clientHeight/2)}})}},{key:"ngOnDestroy",value:function(){this.onDestroy.next()}},{key:"toggle",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.isCollapsed=!this.isCollapsed,e&&this.isCollapsed&&this.toTop()}},{key:"toTop",value:function(){this.scrollService.scrollToTop()}}]),t}()).\u0275fac=function(e){return new(e||R)(E.Mb(w.a),E.Mb(E.l),E.Mb(x.a))},R.\u0275cmp=E.Gb({type:R,selectors:[["aio-toc"]],viewQuery:function(e,t){var n;1&e&&E.Ec(O,!0),2&e&&E.mc(n=E.Zb())&&(t.items=n)},decls:1,vars:1,consts:[["class","toc-inner no-print",3,"collapsed",4,"ngIf"],[1,"toc-inner","no-print"],["class","toc-heading embedded",4,"ngIf"],["type","button","class","toc-heading embedded secondary","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"click",4,"ngIf"],[1,"toc-list"],[4,"ngFor","ngForOf"],["type","button","class","toc-more-items embedded material-icons","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"collapsed","click",4,"ngIf"],[1,"toc-heading","embedded"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-heading","embedded","secondary",3,"click"],["svgIcon","keyboard_arrow_right",1,"rotating-icon"],[3,"title","class","secondary","active",4,"ngIf"],[3,"title"],["tocItem",""],[3,"href","innerHTML"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-more-items","embedded","material-icons",3,"click"]],template:function(e,t){1&e&&E.zc(0,C,6,8,"div",0),2&e&&E.hc("ngIf","None"!==t.type)},directives:[l.k,l.j,s.a],encapsulation:2}),R),_=((T=function e(){n(this,e),this.customElementComponent=M}).\u0275mod=E.Kb({type:T}),T.\u0275inj=E.Jb({factory:function(e){return new(e||T)},imports:[[l.c,s.b]]}),T)}}])}();
//# sourceMappingURL=toc-toc-module-es5.907b41186fe3543a5f8b.js.map