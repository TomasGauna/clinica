"use strict";(self.webpackChunkTP=self.webpackChunkTP||[]).push([[599],{6599:(y,u,a)=>{a.r(u),a.d(u,{HomeModule:()=>I});var c=a(6814),s=a(5920),p=a(8537),t=a(4946),f=a(2333),g=a(2425),h=a(5723);function d(n,r){1&n&&(t.TgZ(0,"li",8)(1,"a",17),t._uU(2,"Usuarios"),t.qZA()())}function v(n,r){1&n&&(t.TgZ(0,"li",8)(1,"a",18),t._uU(2,"Mis Turnos"),t.qZA()())}function b(n,r){1&n&&(t.TgZ(0,"li",8)(1,"a",19),t._uU(2,"Turnos"),t.qZA()())}function T(n,r){1&n&&(t.TgZ(0,"li",8)(1,"a",20),t._uU(2,"Solicitar Turno"),t.qZA()())}function _(n,r){1&n&&(t.TgZ(0,"li",8)(1,"a",21),t._uU(2,"Mi Perfil"),t.qZA()())}function C(n,r){1&n&&(t.TgZ(0,"button",22),t._uU(1,"LOGIN"),t.qZA())}function Z(n,r){1&n&&(t.TgZ(0,"button",23),t._uU(1,"REGISTRO"),t.qZA())}function x(n,r){if(1&n&&(t.TgZ(0,"button"),t._uU(1),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.Oqu(i.user.email.split("@")[0].toUpperCase())}}function A(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(i);const e=t.oxw();return t.KtG(e.cerrarSesion())}),t._uU(1,"LOGOUT"),t.qZA()}}const E=[{path:"",component:(()=>{class n{constructor(i,o,e,l){this.auth=i,this.toast=o,this.firestore=e,this.router=l,this.admins=[],this.pacientes=[],this.especialistas=[],this.router.events.subscribe(m=>{m instanceof s.m2&&(this.rutaActual=m.url)})}ngOnInit(){p.C.traerFs("usuarios",this.firestore).subscribe(i=>{let o;i.forEach(e=>{"administrador"===e.perfil?this.admins.push(e):"especialista"===e.perfil?this.especialistas.push(e):this.pacientes.push(e)}),this.admins.forEach(e=>{this.auth.get_user()?.email===e.email&&(o=e)}),this.user=this.auth.get_user()?.emailVerified||o?this.auth.get_user():null,console.log(this.user)})}cerrarSesion(){this.toast.info("Cerrando sesion","Espera..."),this.auth.logout()?.then(()=>{setTimeout(()=>{this.toast.success("Cerraste sesion","Todo normal"),this.router.navigateByUrl("home"),this.user=null},2e3)})}estaEnArrayEmail(i,o){let e=!1;return o&&i.forEach(l=>{l.email===o.email&&(e=!0)}),e}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(f.e),t.Y36(g._W),t.Y36(h.gg),t.Y36(s.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:25,vars:11,consts:[[1,"contenedor"],[1,"navbar","navbar-expand-xxl"],[1,"container-fluid"],["src","assets/medico.png","width","2%","routerLink","/home",1,"navbar-brand",2,"cursor","pointer"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarsExampleXxl","aria-controls","navbarsExampleXxl","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarsExampleXxl",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-xl-0"],[1,"nav-item"],["href","/home",1,"nav-link","active"],["class","nav-item",4,"ngIf"],["routerLink","/login",4,"ngIf"],["style","margin-left: 10px;","routerLink","/registro",4,"ngIf"],[4,"ngIf"],["style","margin-left: 10px;",3,"click",4,"ngIf"],[2,"height","90%","text-align","center"],[1,"py-5"],["routerLink","/usuarios",1,"nav-link","active"],["routerLink","/mis-turnos",1,"nav-link","active"],["routerLink","/turnos",1,"nav-link","active"],["routerLink","/solicitar-turnos",1,"nav-link","active"],["routerLink","/perfil",1,"nav-link","active"],["routerLink","/login"],["routerLink","/registro",2,"margin-left","10px"],[2,"margin-left","10px",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"nav",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"button",4),t._UZ(5,"span",5),t.qZA(),t.TgZ(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),t._uU(10,"Home"),t.qZA()(),t.YNc(11,d,3,0,"li",10),t.YNc(12,v,3,0,"li",10),t.YNc(13,b,3,0,"li",10),t.YNc(14,T,3,0,"li",10),t.YNc(15,_,3,0,"li",10),t.qZA(),t.YNc(16,C,2,0,"button",11),t.YNc(17,Z,2,0,"button",12),t.YNc(18,x,2,1,"button",13),t.YNc(19,A,2,0,"button",14),t.qZA()()(),t.TgZ(20,"div",15)(21,"h1",16),t._uU(22,'BIENVENIDX A "CLINICASCRIPT"'),t.qZA(),t.TgZ(23,"p"),t._uU(24," Somos la mejor clinica de autogestion "),t.qZA()()()),2&o&&(t.xp6(8),t.ekj("activo","/home"===e.rutaActual),t.xp6(3),t.Q6J("ngIf",e.estaEnArrayEmail(e.admins,e.user)),t.xp6(1),t.Q6J("ngIf",e.estaEnArrayEmail(e.pacientes,e.user)||e.estaEnArrayEmail(e.especialistas,e.user)),t.xp6(1),t.Q6J("ngIf",e.estaEnArrayEmail(e.admins,e.user)),t.xp6(1),t.Q6J("ngIf",e.estaEnArrayEmail(e.admins,e.user)||e.estaEnArrayEmail(e.pacientes,e.user)),t.xp6(1),t.Q6J("ngIf",e.user),t.xp6(1),t.Q6J("ngIf",!e.user),t.xp6(1),t.Q6J("ngIf",!e.user),t.xp6(1),t.Q6J("ngIf",e.user),t.xp6(1),t.Q6J("ngIf",e.user))},dependencies:[c.O5,s.rH],styles:[".contenedor[_ngcontent-%COMP%]{width:100vw;height:100vh;background-color:#94e1af}.navbar[_ngcontent-%COMP%]{background-color:#d8f3dc;font-size:20px}button[_ngcontent-%COMP%]:hover{background-color:#78d1b6;transform:scale(1.05);color:#fff}button[_ngcontent-%COMP%]{padding:.4%;border:none;border-radius:10px;width:auto;background-color:#94e1af;font-size:18px;border:2px solid #94e1af;box-shadow:4px 4px 10px #00000080}button[_ngcontent-%COMP%]:active{background-color:#537e62}.bd-placeholder-img[_ngcontent-%COMP%]{font-size:1.125rem;text-anchor:middle;-webkit-user-select:none;user-select:none}@media (min-width: 768px){.bd-placeholder-img-lg[_ngcontent-%COMP%]{font-size:3.5rem}}a[_ngcontent-%COMP%]{cursor:pointer}.activo[_ngcontent-%COMP%]{background-color:#94e1af;color:#fff;border-radius:10px}"]})}return n})()}];let k=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(E),s.Bz]})}return n})(),I=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[c.ez,k]})}return n})()}}]);