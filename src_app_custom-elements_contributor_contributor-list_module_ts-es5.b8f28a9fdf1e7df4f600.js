!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function r(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}(self.webpackChunkangular_cn=self.webpackChunkangular_cn||[]).push([["src_app_custom-elements_contributor_contributor-list_module_ts"],{9211:function(t,e,o){"use strict";o.r(e),o.d(e,{ContributorListModule:function(){return J}});var i=o(1116),c=o(4431),u=o(5366),s=o(9996),a=o(7296),p=o(1374),f=o(2693),l=p.bL+"contributors.json",g=["Angular","Collaborators","GDE"],b=function(){var t=function(){function t(r){n(this,t),this.http=r,this.contributors=this.getContributors()}return r(t,[{key:"getContributors",value:function(){var n=this.http.get(l).pipe((0,s.U)(function(n){var t={};return Object.keys(n).forEach(function(r){var e=n[r];e.groups.forEach(function(n){(t[n]||(t[n]=[])).push(e)})}),t}),(0,s.U)(function(n){return Object.keys(n).map(function(t){var r=g.indexOf(t);return{name:t,order:-1===r?g.length:r,contributors:n[t].sort(d)}}).sort(m)}),(0,a.C)());return n.connect(),n}}]),t}();return t.\u0275fac=function(n){return new(n||t)(u.LFG(f.eN))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac}),t}();function d(n,t){return n.name.toUpperCase()>t.name.toUpperCase()?1:-1}function m(n,t){return n.order===t.order?n.name>t.name?1:-1:n.order>t.order?1:-1}var v=o(2981);function h(n,t){1&n&&(u.TgZ(0,"a",7),u._uU(1," View Bio "),u.qZA())}function k(n,t){if(1&n&&(u.TgZ(0,"a",8),u.NdJ("click",function(n){return n.stopPropagation()}),u._UZ(1,"mat-icon",9),u.qZA()),2&n){var r=u.oxw();u.MGl("href","https://twitter.com/",r.person.twitter,"",u.LSH)}}function Z(n,t){if(1&n&&(u.TgZ(0,"a",8),u.NdJ("click",function(n){return n.stopPropagation()}),u.TgZ(1,"mat-icon",10),u._uU(2,"link"),u.qZA(),u.qZA()),2&n){var r=u.oxw();u.s9C("href",r.person.website,u.LSH)}}function w(n,t){if(1&n){var r=u.EpF();u.TgZ(0,"div",11),u.NdJ("click",function(){u.CHM(r);var n=u.oxw();return n.flipCard(n.person)})("keyup.enter",function(){u.CHM(r);var n=u.oxw();return n.flipCard(n.person)}),u.TgZ(1,"h3"),u._uU(2),u.qZA(),u.TgZ(3,"p",12),u._uU(4),u.qZA(),u.qZA()}if(2&n){var e=u.oxw();u.xp6(2),u.Oqu(e.person.name),u.xp6(2),u.Oqu(e.person.bio)}}var C=function(n){return{flipped:n}},x=function(){var t=function(){function t(){n(this,t),this.noPicture="_no-one.png",this.pictureBase=p.bL+"images/bios/"}return r(t,[{key:"flipCard",value:function(n){n.isFlipped=!n.isFlipped}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["aio-contributor"]],inputs:{person:"person"},decls:10,vars:10,consts:[[1,"contributor-card",3,"ngClass"],[1,"card-front",3,"click","keyup.enter"],[1,"contributor-image"],[1,"contributor-info"],["mat-button","","class","info-item",4,"ngIf"],["mat-icon-button","","class","info-item icon","target","_blank",3,"href","click",4,"ngIf"],["class","card-back",3,"click","keyup.enter",4,"ngIf"],["mat-button","",1,"info-item"],["mat-icon-button","","target","_blank",1,"info-item","icon",3,"href","click"],["svgIcon","logos:twitter"],[1,"link-icon"],[1,"card-back",3,"click","keyup.enter"],[1,"contributor-bio"]],template:function(n,t){1&n&&(u.TgZ(0,"div",0),u.TgZ(1,"div",1),u.NdJ("click",function(){return t.flipCard(t.person)})("keyup.enter",function(){return t.flipCard(t.person)}),u.TgZ(2,"h3"),u._uU(3),u.qZA(),u.TgZ(4,"div",2),u.TgZ(5,"div",3),u.YNc(6,h,2,0,"a",4),u.YNc(7,k,2,1,"a",5),u.YNc(8,Z,3,1,"a",5),u.qZA(),u.qZA(),u.qZA(),u.YNc(9,w,5,2,"div",6),u.qZA()),2&n&&(u.Q6J("ngClass",u.VKq(8,C,t.person.isFlipped)),u.xp6(3),u.Oqu(t.person.name),u.xp6(1),u.Udp("background-image","url("+t.pictureBase+(t.person.picture||t.noPicture)+")"),u.xp6(2),u.Q6J("ngIf",t.person.bio),u.xp6(1),u.Q6J("ngIf",t.person.twitter),u.xp6(1),u.Q6J("ngIf",t.person.website),u.xp6(1),u.Q6J("ngIf",t.person.isFlipped))},directives:[i.mk,i.O5,c.Hw],encapsulation:2}),t}();function y(n,t){if(1&n){var r=u.EpF();u.TgZ(0,"a",3),u.NdJ("click",function(){var n=u.CHM(r).$implicit;return u.oxw().selectGroup(n)})("keyup.enter",function(){var n=u.CHM(r).$implicit;return u.oxw().selectGroup(n)}),u._uU(1),u.qZA()}if(2&n){var e=t.$implicit,o=u.oxw();u.ekj("selected",e==o.selectedGroup.name),u.xp6(1),u.Oqu(e)}}function q(n,t){1&n&&u._UZ(0,"aio-contributor",7),2&n&&u.Q6J("person",t.$implicit)}function _(n,t){if(1&n&&(u.TgZ(0,"section",4),u.TgZ(1,"div",5),u.YNc(2,q,1,1,"aio-contributor",6),u.qZA(),u.qZA()),2&n){var r=u.oxw();u.xp6(2),u.Q6J("ngForOf",r.selectedGroup.contributors)}}var A,T=function(){var t=function(){function t(r,e){n(this,t),this.contributorService=r,this.locationService=e}return r(t,[{key:"ngOnInit",value:function(){var n=this,t=this.locationService.search().group||"";this.contributorService.contributors.subscribe(function(r){n.groups=r,n.groupNames=r.map(function(n){return n.name}),n.selectGroup(t)})}},{key:"selectGroup",value:function(n){n=n.toLowerCase(),this.selectedGroup=this.groups.find(function(t){return t.name.toLowerCase()===n})||this.groups[0],this.locationService.setSearch("",{group:this.selectedGroup.name})}}]),t}();return t.\u0275fac=function(n){return new(n||t)(u.Y36(b),u.Y36(v.a))},t.\u0275cmp=u.Xpm({type:t,selectors:[["aio-contributor-list"]],decls:3,vars:2,consts:[[1,"flex-center","group-buttons"],["class","button mat-button filter-button",3,"selected","click","keyup.enter",4,"ngFor","ngForOf"],["class","grid-fluid",4,"ngIf"],[1,"button","mat-button","filter-button",3,"click","keyup.enter"],[1,"grid-fluid"],[1,"contributor-group"],[3,"person",4,"ngFor","ngForOf"],[3,"person"]],template:function(n,t){1&n&&(u.TgZ(0,"div",0),u.YNc(1,y,2,3,"a",1),u.qZA(),u.YNc(2,_,3,1,"section",2)),2&n&&(u.xp6(1),u.Q6J("ngForOf",t.groupNames),u.xp6(1),u.Q6J("ngIf",t.selectedGroup))},directives:[i.sg,i.O5,x],encapsulation:2}),t}(),J=((A=function t(){n(this,t),this.customElementComponent=T}).\u0275fac=function(n){return new(n||A)},A.\u0275mod=u.oAB({type:A}),A.\u0275inj=u.cJS({providers:[b],imports:[[i.ez,c.Ps]]}),A)}}])}();
//# sourceMappingURL=src_app_custom-elements_contributor_contributor-list_module_ts-es5.b8f28a9fdf1e7df4f600.js.map