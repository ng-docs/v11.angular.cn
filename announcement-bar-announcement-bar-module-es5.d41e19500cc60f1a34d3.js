!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"5UAH":function(t,r,c){"use strict";c.r(r),c.d(r,"AnnouncementBarModule",function(){return d});var o=c("ofXK"),a=c("tk/3"),i=c("PCNd"),u=c("JIr8"),s=c("lJxs"),f=c("jn67"),b=c("fXoL"),l=c("vHPH");function m(n,e){if(1&n&&(b.Rb(0,"div",1),b.Rb(1,"div",2),b.Nb(2,"img",3),b.Nb(3,"p",4),b.Rb(4,"a",5),b.Ac(5,"Learn More"),b.Qb(),b.Qb(),b.Qb()),2&n){var t=b.cc();b.Ab(2),b.hc("src",t.announcement.imageUrl,b.sc),b.Ab(1),b.hc("innerHTML",t.announcement.message,b.rc),b.Ab(1),b.hc("href",t.announcement.linkUrl,b.sc)}}var p,h,g=f.a+"announcements.json",v=((h=function(){function t(e,r){n(this,t),this.http=e,this.logger=r}var r,c,o;return r=t,(c=[{key:"ngOnInit",value:function(){var n=this;this.http.get(g).pipe(Object(u.a)(function(e){return n.logger.error(new Error("".concat(g," request failed: ").concat(e.message))),[]}),Object(s.a)(function(e){return n.findCurrentAnnouncement(e)}),Object(u.a)(function(e){return n.logger.error(new Error("".concat(g," contains invalid data: ").concat(e.message))),[]})).subscribe(function(e){return n.announcement=e})}},{key:"findCurrentAnnouncement",value:function(n){return n.filter(function(n){return new Date(n.startDate).valueOf()<Date.now()}).filter(function(n){return new Date(n.endDate).valueOf()>Date.now()})[0]}}])&&e(r.prototype,c),o&&e(r,o),t}()).\u0275fac=function(n){return new(n||h)(b.Mb(a.a),b.Mb(l.a))},h.\u0275cmp=b.Gb({type:h,selectors:[["aio-announcement-bar"]],decls:1,vars:1,consts:[["class","homepage-container",4,"ngIf"],[1,"homepage-container"],[1,"announcement-bar"],["alt","",3,"src"],[3,"innerHTML"],[1,"button",3,"href"]],template:function(n,e){1&n&&b.zc(0,m,6,3,"div",0),2&n&&b.hc("ngIf",e.announcement)},directives:[o.k],encapsulation:2}),h),d=((p=function e(){n(this,e),this.customElementComponent=v}).\u0275mod=b.Kb({type:p}),p.\u0275inj=b.Jb({factory:function(n){return new(n||p)},imports:[[o.c,i.a,a.b]]}),p)}}])}();
//# sourceMappingURL=announcement-bar-announcement-bar-module-es5.d41e19500cc60f1a34d3.js.map