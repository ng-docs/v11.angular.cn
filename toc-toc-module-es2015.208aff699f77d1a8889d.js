(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+1zh":function(e,t,c){"use strict";c.r(t);var i=c("ofXK"),n=c("NFeN"),s=c("XNiG"),o=c("itXk"),l=c("7Hc7"),a=c("1G5W"),d=c("HDdC"),r=c("Y7HM");class b extends d.a{constructor(e,t=0,c=l.a){super(),this.source=e,this.delayTime=t,this.scheduler=c,(!Object(r.a)(t)||t<0)&&(this.delayTime=0),c&&"function"==typeof c.schedule||(this.scheduler=l.a)}static create(e,t=0,c=l.a){return new b(e,t,c)}static dispatch(e){const{source:t,subscriber:c}=e;return this.add(t.subscribe(c))}_subscribe(e){return this.scheduler.schedule(b.dispatch,this.delayTime,{source:this.source,subscriber:e})}}function p(e,t=0){return function(c){return c.lift(new u(e,t))}}class u{constructor(e,t){this.scheduler=e,this.delay=t}call(e,t){return new b(t,this.delay,this.scheduler).subscribe(e)}}var h=c("JX91"),m=c("fXoL"),f=c("Faly"),g=c("TNhP");const y=["tocItem"];function E(e,t){1&e&&(m.Vb(0,"div",7),m.Gc(1," \u76ee\u5f55 "),m.Tb())}function v(e,t){if(1&e){const e=m.Wb();m.Vb(0,"button",8),m.dc("click",(function(t){return m.vc(e),m.hc(2).toggle(!1)})),m.Gc(1," \u76ee\u5f55 "),m.Qb(2,"mat-icon",9),m.Tb()}if(2&e){const e=m.hc(2);m.Cb("aria-pressed",!e.isCollapsed),m.Ab(2),m.Fb("collapsed",e.isCollapsed)}}function x(e,t){if(1&e&&(m.Vb(0,"li",11,12),m.Qb(2,"a",13),m.Tb()),2&e){const e=m.hc(),t=e.$implicit,c=e.index,i=m.hc(2);m.Db(t.level),m.Fb("secondary","EmbeddedExpandable"===i.type&&c>=i.primaryMax),m.Fb("active",c===i.activeIndex),m.nc("title",t.title),m.Ab(2),m.mc("href",t.href,m.xc)("innerHTML",t.content,m.wc)}}function I(e,t){if(1&e&&(m.Sb(0),m.Ec(1,x,3,8,"li",10),m.Rb()),2&e){const e=t.$implicit,c=m.hc(2);m.Ab(1),m.mc("ngIf","Floating"===c.type||"h1"!==e.level)}}function T(e,t){if(1&e){const e=m.Wb();m.Vb(0,"button",14),m.dc("click",(function(t){return m.vc(e),m.hc(2).toggle()})),m.Tb()}if(2&e){const e=m.hc(2);m.Fb("collapsed",e.isCollapsed),m.Cb("aria-pressed",!e.isCollapsed)}}function w(e,t){if(1&e&&(m.Vb(0,"div",1),m.Ec(1,E,2,0,"div",2),m.Ec(2,v,3,2,"button",3),m.Vb(3,"ul",4),m.Ec(4,I,2,1,"ng-container",5),m.Tb(),m.Ec(5,T,1,2,"button",6),m.Tb()),2&e){const e=m.hc();m.Fb("collapsed",e.isCollapsed),m.Ab(1),m.mc("ngIf","EmbeddedSimple"===e.type),m.Ab(1),m.mc("ngIf","EmbeddedExpandable"===e.type),m.Ab(1),m.Fb("embedded","Floating"!==e.type),m.Ab(1),m.mc("ngForOf",e.tocList),m.Ab(1),m.mc("ngIf","EmbeddedExpandable"===e.type)}}let C=(()=>{class e{constructor(e,t,c){this.scrollService=e,this.tocService=c,this.activeIndex=null,this.type="None",this.isCollapsed=!0,this.isEmbedded=!1,this.onDestroy=new s.a,this.primaryMax=4,this.isEmbedded=-1!==t.nativeElement.className.indexOf("embedded")}ngOnInit(){this.tocService.tocList.pipe(Object(a.a)(this.onDestroy)).subscribe(e=>{this.tocList=e;const t=function(e,t){return e.reduce((e,t)=>(e=>"h1"!==e.level)(t)?e+1:e,0)}(this.tocList);this.type=t>0?this.isEmbedded?t>this.primaryMax?"EmbeddedExpandable":"EmbeddedSimple":"Floating":"None"})}ngAfterViewInit(){this.isEmbedded||Object(o.a)([this.tocService.activeItemIndex.pipe(p(l.a)),this.items.changes.pipe(Object(h.a)(this.items))]).pipe(Object(a.a)(this.onDestroy)).subscribe(([e,t])=>{if(this.activeIndex=e,null===e||e>=t.length)return;const c=t.toArray()[e].nativeElement,i=c.offsetParent,n=c.getBoundingClientRect(),s=i.getBoundingClientRect();n.top>=s.top&&n.bottom<=s.bottom||(i.scrollTop+=n.top-s.top-i.clientHeight/2)})}ngOnDestroy(){this.onDestroy.next()}toggle(e=!0){this.isCollapsed=!this.isCollapsed,e&&this.isCollapsed&&this.toTop()}toTop(){this.scrollService.scrollToTop()}}return e.\u0275fac=function(t){return new(t||e)(m.Pb(f.a),m.Pb(m.k),m.Pb(g.a))},e.\u0275cmp=m.Jb({type:e,selectors:[["aio-toc"]],viewQuery:function(e,t){var c;1&e&&m.Lc(y,!0),2&e&&m.rc(c=m.ec())&&(t.items=c)},decls:1,vars:1,consts:[["class","toc-inner no-print",3,"collapsed",4,"ngIf"],[1,"toc-inner","no-print"],["class","toc-heading embedded",4,"ngIf"],["type","button","class","toc-heading embedded secondary","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"click",4,"ngIf"],[1,"toc-list"],[4,"ngFor","ngForOf"],["type","button","class","toc-more-items embedded material-icons","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"collapsed","click",4,"ngIf"],[1,"toc-heading","embedded"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-heading","embedded","secondary",3,"click"],["svgIcon","keyboard_arrow_right",1,"rotating-icon"],[3,"title","class","secondary","active",4,"ngIf"],[3,"title"],["tocItem",""],[3,"href","innerHTML"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-more-items","embedded","material-icons",3,"click"]],template:function(e,t){1&e&&m.Ec(0,w,6,6,"div",0),2&e&&m.mc("ngIf","None"!==t.type)},directives:[i.k,i.j,n.a],encapsulation:2}),e})();c.d(t,"TocModule",(function(){return F}));let F=(()=>{class e{constructor(){this.customElementComponent=C}}return e.\u0275mod=m.Nb({type:e}),e.\u0275inj=m.Mb({factory:function(t){return new(t||e)},imports:[[i.c,n.b]]}),e})()}}]);
//# sourceMappingURL=toc-toc-module-es2015.208aff699f77d1a8889d.js.map