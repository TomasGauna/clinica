"use strict";(self.webpackChunkTP=self.webpackChunkTP||[]).push([[599],{6599:(O,u,a)=>{a.r(u),a.d(u,{HomeModule:()=>U});var l=a(6814),s=a(5920),p=a(8537),e=a(4946),g=a(2333),d=a(2425),f=a(5723);function h(n,r){1&n&&(e.TgZ(0,"li",8)(1,"a",20),e._uU(2,"Usuarios"),e.qZA()())}function _(n,r){1&n&&(e.TgZ(0,"li",8)(1,"a",21),e._uU(2,"Pacientes"),e.qZA()())}function b(n,r){1&n&&(e.TgZ(0,"li",8)(1,"a",22),e._uU(2,"Mis Turnos"),e.qZA()())}function v(n,r){1&n&&(e.TgZ(0,"li",8)(1,"a",23),e._uU(2,"Turnos"),e.qZA()())}function Z(n,r){1&n&&(e.TgZ(0,"li",8)(1,"a",24),e._uU(2,"Solicitar Turno"),e.qZA()())}function C(n,r){1&n&&(e.TgZ(0,"button",25),e._uU(1,"LOGIN"),e.qZA())}function T(n,r){1&n&&(e.TgZ(0,"button",26),e._uU(1,"REGISTRO"),e.qZA())}function x(n,r){if(1&n&&(e.TgZ(0,"button",27),e._UZ(1,"img",28),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.Q6J("src",i.foto,e.LSH)}}function A(n,r){if(1&n&&(e.TgZ(0,"button",29),e._uU(1),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.Oqu(i.user.email.split("@")[0].toUpperCase())}}function E(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(i);const t=e.oxw();return e.KtG(t.cerrarSesion())}),e._uU(1,"LOGOUT"),e.qZA()}}const y=[{path:"",component:(()=>{class n{constructor(i,o,t,c){this.auth=i,this.toast=o,this.firestore=t,this.router=c,this.admins=[],this.pacientes=[],this.especialistas=[],this.foto="",this.router.events.subscribe(m=>{m instanceof s.m2&&(this.rutaActual=m.url)})}ngOnInit(){p.C.traerFs("usuarios",this.firestore).subscribe(i=>{let o;i.forEach(t=>{"administrador"===t.perfil?this.admins.push(t):"especialista"===t.perfil?this.especialistas.push(t):this.pacientes.push(t),t.email===this.auth.get_user()?.email&&(this.foto=t.foto)}),this.admins.forEach(t=>{this.auth.get_user()?.email===t.email&&(o=t)}),this.user=this.auth.get_user()?.emailVerified||o?this.auth.get_user():null,console.log(this.user)})}cerrarSesion(){this.toast.info("Cerrando sesion","Espera..."),this.auth.logout()?.then(()=>{setTimeout(()=>{this.toast.success("Cerraste sesion","Todo normal"),this.router.navigateByUrl("home"),this.user=null},2e3)})}estaEnArrayEmail(i,o){let t=!1;return o&&i.forEach(c=>{c.email===o.email&&(t=!0)}),t}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(g.e),e.Y36(d._W),e.Y36(f.gg),e.Y36(s.F0))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:50,vars:12,consts:[[1,"contenedor"],[1,"navbar","navbar-expand-xxl"],[1,"container-fluid"],["src","assets/medico.png","width","2%","routerLink","/home",1,"navbar-brand",2,"cursor","pointer"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarsExampleXxl","aria-controls","navbarsExampleXxl","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarsExampleXxl",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-xl-0"],[1,"nav-item"],["href","/home",1,"nav-link","active"],["class","nav-item",4,"ngIf"],["routerLink","/login",4,"ngIf"],["style","margin-left: 10px;","routerLink","/registro",4,"ngIf"],["style","cursor: pointer; margin-right: 10px; border-radius: 50%;","routerLink","/perfil",4,"ngIf"],["routerLink","/perfil",4,"ngIf"],["style","margin-left: 10px;",3,"click",4,"ngIf"],[2,"display","flex","flex-direction","column","align-items","center","justify-content","center","height","90%","text-align","center","font-family","Arial, sans-serif","margin","0","padding","0","color","#333"],["src","assets/medico.png",1,"image","rotate-center"],[1,"tracking-in-expand"],[1,"scale-in-center"],["routerLink","/usuarios",1,"nav-link","active"],["routerLink","/pacientes",1,"nav-link","active"],["routerLink","/mis-turnos",1,"nav-link","active"],["routerLink","/turnos",1,"nav-link","active"],["routerLink","/solicitar-turnos",1,"nav-link","active"],["routerLink","/login"],["routerLink","/registro",2,"margin-left","10px"],["routerLink","/perfil",2,"cursor","pointer","margin-right","10px","border-radius","50%"],["width","30px",3,"src"],["routerLink","/perfil"],[2,"margin-left","10px",3,"click"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"nav",1)(2,"div",2),e._UZ(3,"img",3),e.TgZ(4,"button",4),e._UZ(5,"span",5),e.qZA(),e.TgZ(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),e._uU(10,"Home"),e.qZA()(),e.YNc(11,h,3,0,"li",10),e.YNc(12,_,3,0,"li",10),e.YNc(13,b,3,0,"li",10),e.YNc(14,v,3,0,"li",10),e.YNc(15,Z,3,0,"li",10),e.qZA(),e.YNc(16,C,2,0,"button",11),e.YNc(17,T,2,0,"button",12),e.YNc(18,x,2,1,"button",13),e.YNc(19,A,2,1,"button",14),e.YNc(20,E,2,0,"button",15),e.qZA()()(),e.TgZ(21,"div",16)(22,"header"),e._UZ(23,"img",17),e.TgZ(24,"h1",18),e._uU(25,"Bienvenido a CLINICASCRIPT"),e.qZA()(),e.TgZ(26,"section",19)(27,"h2"),e._uU(28,"Nuestra Misi\xf3n"),e.qZA(),e.TgZ(29,"p"),e._uU(30," En CLINICASCRIPT, nos dedicamos a proporcionar atenci\xf3n m\xe9dica integral y de calidad para el bienestar de nuestros pacientes. Somos un equipo de profesionales comprometidos con la salud y la satisfacci\xf3n de quienes conf\xedan en nosotros. "),e.qZA(),e.TgZ(31,"h2"),e._uU(32,"Nuestros Servicios"),e.qZA(),e.TgZ(33,"p"),e._uU(34," Ofrecemos una amplia gama de servicios m\xe9dicos que abarcan desde consultas generales hasta tratamientos especializados. Nuestro enfoque multidisciplinario nos permite proporcionar una atenci\xf3n integral y personalizada para cada individuo. "),e.qZA(),e.TgZ(35,"h2"),e._uU(36,"\xbfPor qu\xe9 elegirnos?"),e.qZA(),e.TgZ(37,"ul")(38,"li"),e._uU(39,"Profesionales Cualificados: Nuestro equipo m\xe9dico est\xe1 formado por expertos en sus respectivos campos."),e.qZA(),e.TgZ(40,"li"),e._uU(41,"Tecnolog\xeda Avanzada: Utilizamos tecnolog\xeda de vanguardia para diagn\xf3sticos precisos y tratamientos efectivos."),e.qZA(),e.TgZ(42,"li"),e._uU(43,"Atenci\xf3n Personalizada: Nos preocupamos por cada paciente de manera \xfanica."),e.qZA(),e.TgZ(44,"li"),e._uU(45,"Ambiente C\xe1lido y Acogedor: Queremos que se sienta c\xf3modo y seguro durante su visita."),e.qZA()(),e.TgZ(46,"h2"),e._uU(47,"Cont\xe1ctenos"),e.qZA(),e.TgZ(48,"p"),e._uU(49," Estamos aqu\xed para responder a sus preguntas y programar su pr\xf3xima cita. No dude en comunicarse con nosotros para obtener m\xe1s informaci\xf3n sobre nuestros servicios. "),e.qZA()()()()),2&o&&(e.xp6(8),e.ekj("activo","/home"===t.rutaActual),e.xp6(3),e.Q6J("ngIf",t.estaEnArrayEmail(t.admins,t.user)),e.xp6(1),e.Q6J("ngIf",t.estaEnArrayEmail(t.especialistas,t.user)),e.xp6(1),e.Q6J("ngIf",t.estaEnArrayEmail(t.pacientes,t.user)||t.estaEnArrayEmail(t.especialistas,t.user)),e.xp6(1),e.Q6J("ngIf",t.estaEnArrayEmail(t.admins,t.user)),e.xp6(1),e.Q6J("ngIf",t.estaEnArrayEmail(t.admins,t.user)||t.estaEnArrayEmail(t.pacientes,t.user)),e.xp6(1),e.Q6J("ngIf",!t.user),e.xp6(1),e.Q6J("ngIf",!t.user),e.xp6(1),e.Q6J("ngIf",t.user),e.xp6(1),e.Q6J("ngIf",t.user),e.xp6(1),e.Q6J("ngIf",t.user))},dependencies:[l.O5,s.rH],styles:[".contenedor[_ngcontent-%COMP%]{width:100vw;height:100vh;overflow:auto;background-color:#94e1af}.navbar[_ngcontent-%COMP%]{background-color:#d8f3dc;font-size:20px}button[_ngcontent-%COMP%]:hover{background-color:#78d1b6;transform:scale(1.05);color:#fff}button[_ngcontent-%COMP%]{padding:.4%;border:none;border-radius:10px;width:auto;background-color:#94e1af;font-size:18px;border:2px solid #94e1af;box-shadow:4px 4px 10px #00000080}button[_ngcontent-%COMP%]:active{background-color:#537e62}.bd-placeholder-img[_ngcontent-%COMP%]{font-size:1.125rem;text-anchor:middle;-webkit-user-select:none;user-select:none}@media (min-width: 768px){.bd-placeholder-img-lg[_ngcontent-%COMP%]{font-size:3.5rem}}a[_ngcontent-%COMP%]{cursor:pointer}.activo[_ngcontent-%COMP%]{background-color:#94e1af;color:#fff;border-radius:10px}header[_ngcontent-%COMP%]{padding:1em;text-align:center}section[_ngcontent-%COMP%]{max-width:1000px;margin:2em auto;padding:1em;box-shadow:0 0 10px #0000001a}p[_ngcontent-%COMP%]{line-height:1.6}.image[_ngcontent-%COMP%]{width:30%}.tracking-in-expand[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_tracking-in-expand 1.5s cubic-bezier(.215,.61,.355,1) both}@keyframes _ngcontent-%COMP%_tracking-in-expand{0%{letter-spacing:-.5em;opacity:0}40%{opacity:.6}to{opacity:1}}.scale-in-center[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_scale-in-center 1.5s cubic-bezier(.25,.46,.45,.94) both}@keyframes _ngcontent-%COMP%_scale-in-center{0%{transform:scale(0);opacity:1}to{transform:scale(1);opacity:1}}.rotate-center[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_rotate-center 2s ease-in-out both}@keyframes _ngcontent-%COMP%_rotate-center{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]})}return n})()}];let k=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[s.Bz.forChild(y),s.Bz]})}return n})(),U=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[l.ez,k]})}return n})()}}]);