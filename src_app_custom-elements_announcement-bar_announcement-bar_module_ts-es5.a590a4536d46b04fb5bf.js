!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(self.webpackChunkangular_cn=self.webpackChunkangular_cn||[]).push([["src_app_custom-elements_announcement-bar_announcement-bar_module_ts"],{126:function(t,r,a){"use strict";a.r(r),a.d(r,{AnnouncementBarModule:function(){return d}});var o=a(1116),c=a(2693),u=a(5425),i=a(7727),s=a(9996),f=a(1374),l=a(5366),m=a(9474);function p(n,e){if(1&n&&(l.TgZ(0,"div",1),l.TgZ(1,"div",2),l._UZ(2,"img",3),l._UZ(3,"p",4),l.TgZ(4,"a",5),l._uU(5,"Learn More"),l.qZA(),l.qZA(),l.qZA()),2&n){var t=l.oxw();l.xp6(2),l.Q6J("src",t.announcement.imageUrl,l.LSH),l.xp6(1),l.Q6J("innerHTML",t.announcement.message,l.oJD),l.xp6(1),l.Q6J("href",t.announcement.linkUrl,l.LSH)}}var g,v=f.bL+"announcements.json",h=function(){var t=function(){function t(e,r){n(this,t),this.http=e,this.logger=r}var r,a,o;return r=t,(a=[{key:"ngOnInit",value:function(){var n=this;this.http.get(v).pipe((0,i.K)(function(e){return n.logger.error(new Error("".concat(v," request failed: ").concat(e.message))),[]}),(0,s.U)(function(e){return n.findCurrentAnnouncement(e)}),(0,i.K)(function(e){return n.logger.error(new Error("".concat(v," contains invalid data: ").concat(e.message))),[]})).subscribe(function(e){return n.announcement=e})}},{key:"findCurrentAnnouncement",value:function(n){return n.filter(function(n){return new Date(n.startDate).valueOf()<Date.now()}).filter(function(n){return new Date(n.endDate).valueOf()>Date.now()})[0]}}])&&e(r.prototype,a),o&&e(r,o),t}();return t.\u0275fac=function(n){return new(n||t)(l.Y36(c.eN),l.Y36(m.Y))},t.\u0275cmp=l.Xpm({type:t,selectors:[["aio-announcement-bar"]],decls:1,vars:1,consts:[["class","homepage-container",4,"ngIf"],[1,"homepage-container"],[1,"announcement-bar"],["alt","",3,"src"],[3,"innerHTML"],[1,"button",3,"href"]],template:function(n,e){1&n&&l.YNc(0,p,6,3,"div",0),2&n&&l.Q6J("ngIf",e.announcement)},directives:[o.O5],encapsulation:2}),t}(),d=((g=function e(){n(this,e),this.customElementComponent=h}).\u0275fac=function(n){return new(n||g)},g.\u0275mod=l.oAB({type:g}),g.\u0275inj=l.cJS({imports:[[o.ez,u.m,c.JF]]}),g)}}])}();
//# sourceMappingURL=src_app_custom-elements_announcement-bar_announcement-bar_module_ts-es5.a590a4536d46b04fb5bf.js.map