(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"ll+R":function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=function(){function n(n,l){this.contributorService=n,this.locationService=l}return n.prototype.ngOnInit=function(){var n=this,l=this.locationService.search().group||"";this.contributorService.contributors.subscribe(function(u){n.groups=u,n.groupNames=u.map(function(n){return n.name}),n.selectGroup(l)})},n.prototype.selectGroup=function(n){n=n.toLowerCase(),this.selectedGroup=this.groups.find(function(l){return l.name.toLowerCase()===n})||this.groups[0],this.locationService.setSearch("",{group:this.selectedGroup.name})},n}(),r=function(){return function(){this.customElementComponent=o}}(),i=u("Mr+X"),c=u("SMsm"),e=u("Ip0R"),s=u("jn67"),a=function(){function n(){this.noPicture="_no-one.png",this.pictureBase=s.a+"images/bios/"}return n.prototype.flipCard=function(n){n.isFlipped=!n.isFlipped},n}(),b=t.pb({encapsulation:2,styles:[],data:{}});function p(n){return t.Jb(0,[(n()(),t.rb(0,0,null,null,1,"a",[["class","info-item"],["mat-button",""]],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" View Bio "]))],null,null)}function f(n){return t.Jb(0,[(n()(),t.rb(0,0,null,null,2,"a",[["class","info-item icon"],["mat-icon-button",""],["target","_blank"]],[[8,"href",4]],[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==u.stopPropagation()&&t),t},null,null)),(n()(),t.rb(1,0,null,null,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"],["svgIcon","logos:twitter"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,i.b,i.a)),t.qb(2,9158656,null,0,c.b,[t.k,c.d,[8,null],[2,c.a]],{svgIcon:[0,"svgIcon"]},null)],function(n,l){n(l,2,0,"logos:twitter")},function(n,l){n(l,0,0,t.tb(1,"https://twitter.com/",l.component.person.twitter,"")),n(l,1,0,t.Bb(l,2).inline,"primary"!==t.Bb(l,2).color&&"accent"!==t.Bb(l,2).color&&"warn"!==t.Bb(l,2).color)})}function m(n){return t.Jb(0,[(n()(),t.rb(0,0,null,null,3,"a",[["class","info-item icon"],["mat-icon-button",""],["target","_blank"]],[[8,"href",4]],[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==u.stopPropagation()&&t),t},null,null)),(n()(),t.rb(1,0,null,null,2,"mat-icon",[["class","link-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,i.b,i.a)),t.qb(2,9158656,null,0,c.b,[t.k,c.d,[8,null],[2,c.a]],null,null),(n()(),t.Hb(-1,0,["link"]))],function(n,l){n(l,2,0)},function(n,l){n(l,0,0,t.tb(1,"",l.component.person.website,"")),n(l,1,0,t.Bb(l,2).inline,"primary"!==t.Bb(l,2).color&&"accent"!==t.Bb(l,2).color&&"warn"!==t.Bb(l,2).color)})}function g(n){return t.Jb(0,[(n()(),t.rb(0,0,null,null,4,"div",[["class","card-back"]],null,[[null,"click"]],function(n,l,u){var t=!0,o=n.component;return"click"===l&&(t=!1!==o.flipCard(o.person)&&t),t},null,null)),(n()(),t.rb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Hb(2,null,["",""])),(n()(),t.rb(3,0,null,null,1,"p",[["class","contributor-bio"]],null,null,null,null,null)),(n()(),t.Hb(4,null,["",""]))],null,function(n,l){var u=l.component;n(l,2,0,u.person.name),n(l,4,0,u.person.bio)})}function d(n){return t.Jb(0,[(n()(),t.rb(0,0,null,null,16,"div",[["class","contributor-card"]],null,null,null,null,null)),t.Eb(512,null,e.w,e.x,[t.t,t.u,t.k,t.F]),t.qb(2,278528,null,0,e.i,[e.w],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Db(3,{flipped:0}),(n()(),t.rb(4,0,null,null,10,"div",[["class","card-front"]],null,[[null,"click"]],function(n,l,u){var t=!0,o=n.component;return"click"===l&&(t=!1!==o.flipCard(o.person)&&t),t},null,null)),(n()(),t.rb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Hb(6,null,["",""])),(n()(),t.rb(7,0,null,null,7,"div",[["class","contributor-image"]],[[4,"background-image",null]],null,null,null,null)),(n()(),t.rb(8,0,null,null,6,"div",[["class","contributor-info"]],null,null,null,null,null)),(n()(),t.hb(16777216,null,null,1,null,p)),t.qb(10,16384,null,0,e.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(n()(),t.hb(16777216,null,null,1,null,f)),t.qb(12,16384,null,0,e.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(n()(),t.hb(16777216,null,null,1,null,m)),t.qb(14,16384,null,0,e.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(n()(),t.hb(16777216,null,null,1,null,g)),t.qb(16,16384,null,0,e.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component,t=n(l,3,0,u.person.isFlipped);n(l,2,0,"contributor-card",t),n(l,10,0,u.person.bio),n(l,12,0,u.person.twitter),n(l,14,0,u.person.website),n(l,16,0,u.person.isFlipped)},function(n,l){var u=l.component;n(l,6,0,u.person.name),n(l,7,0,"url("+u.pictureBase+(u.person.picture||u.noPicture)+")")})}var h=u("67Y/"),v=u("kR3u"),k=s.a+"contributors.json",w=["Angular","Collaborators","GDE"],O=function(){function n(n){this.http=n,this.contributors=this.getContributors()}return n.prototype.getContributors=function(){var n=this.http.get(k).pipe(Object(h.a)(function(n){var l={};return Object.keys(n).forEach(function(u){var t=n[u];t.groups.forEach(function(n){(l[n]||(l[n]=[])).push(t)})}),l}),Object(h.a)(function(n){return Object.keys(n).map(function(l){var u=w.indexOf(l);return{name:l,order:-1===u?w.length:u,contributors:n[l].sort(C)}}).sort(I)}),Object(v.a)());return n.connect(),n},n}();function C(n,l){return n.name.toUpperCase()>l.name.toUpperCase()?1:-1}function I(n,l){return n.order===l.order?n.name>l.name?1:-1:n.order>l.order?1:-1}var q=u("/lUL"),y=t.pb({encapsulation:2,styles:[],data:{}});function j(n){return t.Jb(0,[(n()(),t.rb(0,0,null,null,1,"a",[["class","button mat-button filter-button"]],[[2,"selected",null]],[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.selectGroup(n.context.$implicit)&&t),t},null,null)),(n()(),t.Hb(1,null,["",""]))],null,function(n,l){n(l,0,0,l.context.$implicit==l.component.selectedGroup.name),n(l,1,0,l.context.$implicit)})}function B(n){return t.Jb(0,[(n()(),t.rb(0,0,null,null,1,"aio-contributor",[],null,null,null,d,b)),t.qb(1,49152,null,0,a,[],{person:[0,"person"]},null)],function(n,l){n(l,1,0,l.context.$implicit)},null)}function J(n){return t.Jb(0,[(n()(),t.rb(0,0,null,null,3,"section",[["class","grid-fluid"]],null,null,null,null,null)),(n()(),t.rb(1,0,null,null,2,"div",[["class","contributor-group"]],null,null,null,null,null)),(n()(),t.hb(16777216,null,null,1,null,B)),t.qb(3,278528,null,0,e.j,[t.R,t.O,t.t],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,3,0,l.component.selectedGroup.contributors)},null)}function F(n){return t.Jb(0,[(n()(),t.rb(0,0,null,null,2,"div",[["class","flex-center group-buttons"]],null,null,null,null,null)),(n()(),t.hb(16777216,null,null,1,null,j)),t.qb(2,278528,null,0,e.j,[t.R,t.O,t.t],{ngForOf:[0,"ngForOf"]},null),(n()(),t.hb(16777216,null,null,1,null,J)),t.qb(4,16384,null,0,e.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,2,0,u.groupNames),n(l,4,0,u.selectedGroup)},null)}function G(n){return t.Jb(0,[(n()(),t.rb(0,0,null,null,1,"aio-contributor-list",[],null,null,null,F,y)),t.qb(1,114688,null,0,o,[O,q.a],null,null)],function(n,l){n(l,1,0)},null)}var R=t.nb("aio-contributor-list",o,G,{},{},[]),z=u("t/Na"),x=u("Fzqc"),S=u("Wf4p"),H=u("ZYjt");u.d(l,"ContributorListModuleNgFactory",function(){return E});var E=t.ob(r,[],function(n){return t.yb([t.zb(512,t.j,t.cb,[[8,[R]],[3,t.j],t.y]),t.zb(4608,e.m,e.l,[t.v,[2,e.B]]),t.zb(4608,O,O,[z.c]),t.zb(1073742336,e.c,e.c,[]),t.zb(1073742336,x.a,x.a,[]),t.zb(1073742336,S.c,S.c,[[2,S.a],[2,H.f]]),t.zb(1073742336,c.c,c.c,[]),t.zb(1073742336,r,r,[])])})}}]);
//# sourceMappingURL=contributor-contributor-list-module-ngfactory-es5.4b569025c22aa9e45483.js.map