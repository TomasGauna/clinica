"use strict";(self.webpackChunkTP=self.webpackChunkTP||[]).push([[14],{8014:(bt,Z,p)=>{p.r(Z),p.d(Z,{MisTurnosModule:()=>xt});var b=p(6814),C=p(5920),u=p(8537),t=p(4946),P=p(2333),T=p(2425),M=p(5723),g=p(95);function y(o,r){if(1&o&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.Oqu(e.toUpperCase())}}function A(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"td",13),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,a=t.oxw();return t.KtG(a.mostrarAcciones(n))}),t._uU(1),t.qZA()}if(2&o){const e=r.$implicit,i=t.oxw().$implicit;t.xp6(1),t.hij(" ",("id"===e?i[e].substring(0,5):"especialista"===e?i.especialista.apellido:i[e]).toUpperCase()," ")}}function k(o,r){if(1&o&&(t.TgZ(0,"tr",11),t.YNc(1,A,2,1,"td",12),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.obtenerColumnas(e.turnos))}}function E(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.cancelarTurno())}),t._uU(1,"CANCELAR TURNO"),t.qZA()}}function N(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.verResenia())}),t._uU(1,"VER RESE\xd1A"),t.qZA()}}function q(o,r){1&o&&(t.TgZ(0,"button",26),t._uU(1,"ENCUESTA"),t.qZA())}function I(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.calificarAtencion())}),t._uU(1,"CALIFICAR"),t.qZA()}}function J(o,r){if(1&o&&(t.TgZ(0,"div",22),t.YNc(1,E,2,0,"button",23),t.YNc(2,N,2,0,"button",23),t.YNc(3,q,2,0,"button",24),t.YNc(4,I,2,0,"button",23),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.evaluar(e.turno,"cancelar")),t.xp6(1),t.Q6J("ngIf",e.evaluar(e.turno,"resenia")),t.xp6(1),t.Q6J("ngIf",e.evaluar(e.turno,"encuesta")),t.xp6(1),t.Q6J("ngIf",e.evaluar(e.turno,"calificar"))}}function F(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",27)(1,"textarea",28),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw(2);return t.KtG(a.comentario=n)}),t.qZA(),t.TgZ(2,"button",25),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.cancelar(n.turno))}),t._uU(3,"ENVIAR"),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngModel",e.comentario)}}function U(o,r){if(1&o&&(t.TgZ(0,"div",29)(1,"span",30),t._uU(2),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(2),t.Oqu(""!=e.turno.resenia?e.turno.resenia:e.turno.comentario)}}function z(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",27)(1,"textarea",31),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw(2);return t.KtG(a.comentario=n)}),t.qZA(),t.TgZ(2,"button",25),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.calificarA(n.turno))}),t._uU(3,"ENVIAR"),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(1),t.MGl("placeholder","Detalle su experiencia en cuanto a la atencion del especialista ",e.turno.especialista.apellido,"..."),t.Q6J("ngModel",e.comentario)}}function L(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",14)(1,"div",15)(2,"span",16),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.closeModal())}),t._uU(3,"\xd7"),t.qZA(),t.TgZ(4,"h2",17),t._uU(5,"ACCIONES DISPONIBLES PARA ESTE TURNO"),t.qZA(),t.TgZ(6,"p",18),t._uU(7),t.qZA(),t.YNc(8,J,5,4,"div",19),t.YNc(9,F,4,1,"div",20),t.YNc(10,U,3,1,"div",21),t.YNc(11,z,4,2,"div",20),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(7),t.HOy("",e.turno.id.substring(0,5)," - ",e.turno.fecha," - ",e.turno.especialista.apellido," - ",e.turno.especialidad,""),t.xp6(1),t.Q6J("ngIf",e.botones),t.xp6(1),t.Q6J("ngIf",!e.botones&&e.reseniaTxt),t.xp6(1),t.Q6J("ngIf",!e.botones&&e.resenia),t.xp6(1),t.Q6J("ngIf",!e.botones&&e.calificar)}}let S=(()=>{class o{constructor(e,i){this.firestore=e,this.toast=i,this.turnos=[],this.busqueda="",this.comentario="",this.modal=!1,this.fechaActual=new Date,this.botones=!0,this.resenia=!1,this.reseniaTxt=!1,this.calificar=!1,u.C.traerFs("turnos",this.firestore,"fecha").subscribe(n=>{this.turnos=[],n.forEach(a=>{a.paciente.dni===this.paciente.dni&&this.turnos.push(a)})})}ngOnInit(){}obtenerColumnas(e){let i=[];return 0!==e.length&&Object.keys(e[0]).forEach(n=>{"paciente"!=n&&"resenia"!=n&&"comentario"!=n&&i.push(n)}),i}filtrarTurnos(){const e=this.busqueda.toLowerCase().trim();if(""===e)return this.turnos;const i=[],n=a=>{for(const s of a)for(const l in s)if(s[l]?.toString().toLowerCase().includes(e))return!0;return!1};for(const a of this.turnos){const s=a.especialidad,l=a.paciente,d=a.comentario,h=a.especialista,x=a.estado,m=a.fecha,_=a.hora,w=a.id,v=a.resenia;(s&&s.toString().toLowerCase().includes(e)||l&&(l.apellido?.toString().toLowerCase().includes(e)||d?.toString().toLowerCase().includes(e)||h.apellido?.toString().toLowerCase().includes(e)||x?.toString().toLowerCase().includes(e)||m?.toString().toLowerCase().includes(e)||_?.toString().toLowerCase().includes(e)||w?.toString().toLowerCase().includes(e)||v?.toString().toLowerCase().includes(e)||n(l.historial_clinico)))&&i.push(a)}return i}mostrarAcciones(e){this.modal=!0,this.turno=e}closeModal(){this.modal=!1,this.resenia=!1,this.turno=!1,this.botones=!0,this.reseniaTxt=!1,this.comentario=""}construirFecha(e){const i=e.split("-");return new Date(+i[2],+i[1]-1,+i[0])}evaluar(e,i){let n=!1;switch(i){case"cancelar":this.fechaActual<this.construirFecha(e.fecha)&&"realizado"!=e.estado&&"cancelado"!=e.estado&&(n=!0);break;case"encuesta":"realizado"==e.estado&&""!=e.resenia&&(n=!0);break;case"calificar":"realizado"==e.estado&&""==e.comentario&&(n=!0);break;case"resenia":(""!=e.resenia||""!=e.comentario)&&(n=!0)}return n}cancelarTurno(){this.botones=!1,this.reseniaTxt=!0}verResenia(){this.botones=!1,this.resenia=!0}completarEncuesta(){}calificarAtencion(){this.botones=!1,this.calificar=!0}calificarA(e){""!=this.comentario?(e.comentario=this.comentario,u.C.actualizarFs("turnos",e,this.firestore).then(()=>{this.toast.info("Turno calificado..."),this.closeModal()})):this.toast.error("Debe completar el campo...")}cancelar(e){""!=this.comentario?(e.estado="cancelado",e.comentario=this.comentario,u.C.actualizarFs("turnos",e,this.firestore).then(()=>{this.toast.info("Turno cancelado..."),this.closeModal()})):this.toast.error("Debe completar el campo...")}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(M.gg),t.Y36(T._W))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-paciente"]],inputs:{paciente:"paciente"},decls:15,vars:4,consts:[[1,"contenedor"],[1,"input-contenedor"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 8 8",1,"lupa"],["fill","#ffffff","d","M3.5 0C1.57 0 0 1.57 0 3.5S1.57 7 3.5 7c.59 0 1.17-.14 1.66-.41a1 1 0 0 0 .13.13l1 1a1.02 1.02 0 1 0 1.44-1.44l-1-1a1 1 0 0 0-.16-.13c.27-.49.44-1.06.44-1.66c0-1.93-1.57-3.5-3.5-3.5zm0 1C4.89 1 6 2.11 6 3.5c0 .66-.24 1.27-.66 1.72l-.03.03a1 1 0 0 0-.13.13c-.44.4-1.04.63-1.69.63c-1.39 0-2.5-1.11-2.5-2.5s1.11-2.5 2.5-2.5z"],["type","text","placeholder","Buscar por especialista o especialidad...",1,"buscador",3,"ngModel","ngModelChange"],[1,"table-contenedor"],[4,"ngFor","ngForOf"],[1,"table-contenedor",2,"overflow","auto"],[2,"overflow-y","auto"],["style","cursor: pointer;",4,"ngFor","ngForOf"],["class","modal-ventana",4,"ngIf"],[2,"cursor","pointer"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"modal-ventana"],[1,"modal-content-ventana"],[1,"close",3,"click"],[1,"py-5",2,"text-align","center"],[1,"py-2","turno"],["class","btns py-5",4,"ngIf"],["class","textarea py-2",4,"ngIf"],["class","resenia py-4",4,"ngIf"],[1,"btns","py-5"],["class","accion",3,"click",4,"ngIf"],["class","accion",4,"ngIf"],[1,"accion",3,"click"],[1,"accion"],[1,"textarea","py-2"],["placeholder","Ingrese el motivo por el cual cancela...",3,"ngModel","ngModelChange"],[1,"resenia","py-4"],[2,"width","90%"],[3,"ngModel","placeholder","ngModelChange"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3),t.qZA(),t.kcU(),t.TgZ(4,"input",4),t.NdJ("ngModelChange",function(s){return n.busqueda=s}),t.qZA()(),t.TgZ(5,"div",5)(6,"table")(7,"thead")(8,"tr"),t.YNc(9,y,2,1,"th",6),t.qZA()()()(),t.TgZ(10,"div",7)(11,"table")(12,"tbody",8),t.YNc(13,k,2,1,"tr",9),t.qZA()()(),t.YNc(14,L,12,8,"div",10),t.qZA()),2&i&&(t.xp6(4),t.Q6J("ngModel",n.busqueda),t.xp6(5),t.Q6J("ngForOf",n.obtenerColumnas(n.turnos)),t.xp6(4),t.Q6J("ngForOf",n.filtrarTurnos()),t.xp6(1),t.Q6J("ngIf",n.modal))},dependencies:[b.sg,b.O5,g.Fj,g.JJ,g.On],styles:['.contenedor[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;width:100%;height:100%}.input-contenedor[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;gap:15px}.buscador[_ngcontent-%COMP%]{width:67%;padding:10px;box-shadow:#ccdbe8 3px 3px 6px inset,#ffffff80 -3px -3px 6px 1px inset;border:none;border-radius:10px}.buscador[_ngcontent-%COMP%]:focus{outline:none}.table-contenedor[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:70%;max-height:72%;border-radius:10px}table[_ngcontent-%COMP%]{width:100%;font-weight:100;border-collapse:collapse;overflow:hidden;box-shadow:0 0 20px #0000001a;border-radius:10px;table-layout:fixed;text-align:center}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{background-color:#fff3;padding:15px;color:#000}th[_ngcontent-%COMP%]{color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#2d6a4f}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ffffff4d}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{position:relative}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover:before{content:"";position:absolute;inset:-9999px 0;z-index:-1}@media (max-width: 600px){table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{display:block;width:100%}}.lupa[_ngcontent-%COMP%]{width:2.1%}[_ngcontent-%COMP%]::-webkit-scrollbar{width:20px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px gray;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#2D6A4F;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#1c4231}.modal-ventana[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080}.modal-content-ventana[_ngcontent-%COMP%]{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:40%;height:auto;max-height:80%;border-radius:10px}.close[_ngcontent-%COMP%]{color:#aaa;float:right;font-size:28px;font-weight:700;cursor:pointer}.close[_ngcontent-%COMP%]:hover{color:#000}.turno[_ngcontent-%COMP%]{display:flex;text-align:center;justify-content:center;font-weight:700;font-size:20px}.btns[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.accion[_ngcontent-%COMP%]{padding:15px;border-radius:10px;border:none}.accion[_ngcontent-%COMP%]:hover{box-shadow:#0000002b 0 -23px 25px inset,#00000026 0 -36px 30px inset,#0000001a 0 -79px 40px inset,#0000000f 0 2px 1px,#00000017 0 4px 2px,#00000017 0 8px 4px,#00000017 0 16px 8px,#00000017 0 32px 16px;color:#fff}.accion[_ngcontent-%COMP%]:active{box-shadow:#0000001a 0 -23px 25px inset,#00000026 0 -36px 30px inset,#0000001a 0 -79px 40px inset,#0000000f 0 2px 1px,#00000017 0 4px 2px,#00000017 0 8px 4px,#00000017 0 16px 8px,#00000017 0 32px 16px}button[_ngcontent-%COMP%]{padding:.4%;border:none;border-radius:10px;width:auto;background-color:#94e1af;font-size:18px;border:2px solid #94e1af;box-shadow:4px 4px 10px #00000080}.textarea[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;max-height:75%;width:100%;gap:10px}.textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:98%;height:100%}.resenia[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;font-size:20px;width:100%;white-space:pre-wrap}']})}return o})();var Q=p(3519),c=p.n(Q);function Y(o,r){if(1&o&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.Oqu(e.toUpperCase())}}function R(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"td",13),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,a=t.oxw();return t.KtG(a.mostrarAcciones(n))}),t._uU(1),t.qZA()}if(2&o){const e=r.$implicit,i=t.oxw().$implicit;t.xp6(1),t.hij(" ",("id"===e?i[e].substring(0,5):"realizado"===e?i[e]?"si":"no":"paciente"===e?i.paciente.apellido:"especialista"===e?i.especialista.apellido:i[e]).toUpperCase()," ")}}function H(o,r){if(1&o&&(t.TgZ(0,"tr",11),t.YNc(1,R,2,1,"td",12),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.obtenerColumnas(e.turnos))}}function j(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.aceptarTurno(n.turno))}),t._uU(1,"ACEPTAR TURNO"),t.qZA()}}function D(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.rechazarTurno(n.turno))}),t._uU(1,"RECHAZAR TURNO"),t.qZA()}}function G(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.cancelarTurno())}),t._uU(1,"CANCELAR TURNO"),t.qZA()}}function K(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.finalizarTurno())}),t._uU(1,"FINALIZAR TURNO"),t.qZA()}}function V(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.verResenia())}),t._uU(1,"VER RESE\xd1A"),t.qZA()}}function B(o,r){if(1&o&&(t.TgZ(0,"div",22),t.YNc(1,j,2,0,"button",23),t.YNc(2,D,2,0,"button",23),t.YNc(3,G,2,0,"button",23),t.YNc(4,K,2,0,"button",23),t.YNc(5,V,2,0,"button",23),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.evaluar(e.turno,"aceptar")),t.xp6(1),t.Q6J("ngIf",e.evaluar(e.turno,"rechazar")),t.xp6(1),t.Q6J("ngIf",e.evaluar(e.turno,"cancelar")),t.xp6(1),t.Q6J("ngIf",e.evaluar(e.turno,"finalizar")),t.xp6(1),t.Q6J("ngIf",e.evaluar(e.turno,"resenia"))}}function $(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",25)(1,"textarea",26),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw(2);return t.KtG(a.comentario=n)}),t.qZA(),t.TgZ(2,"button",24),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.actualizar(n.turno,"cancelado"))}),t._uU(3,"ENVIAR"),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngModel",e.comentario)}}function X(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",25)(1,"textarea",27),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw(2);return t.KtG(a.comentario=n)}),t.qZA(),t.TgZ(2,"button",24),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.actualizar(n.turno,"rechazado"))}),t._uU(3,"ENVIAR"),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngModel",e.comentario)}}function W(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",25)(1,"textarea",28),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw(2);return t.KtG(a.comentario=n)}),t.qZA(),t.TgZ(2,"button",24),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.finalizarYActualizar(n.turno))}),t._uU(3,"ENVIAR"),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngModel",e.comentario)}}function tt(o,r){if(1&o&&(t.TgZ(0,"div",29)(1,"span",30),t._uU(2),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(2),t.Oqu(e.turno.resenia)}}function et(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",14)(1,"div",15)(2,"span",16),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.closeModal())}),t._uU(3,"\xd7"),t.qZA(),t.TgZ(4,"h2",17),t._uU(5,"ACCIONES DISPONIBLES PARA ESTE TURNO"),t.qZA(),t.TgZ(6,"p",18),t._uU(7),t.qZA(),t.YNc(8,B,6,5,"div",19),t.YNc(9,$,4,1,"div",20),t.YNc(10,X,4,1,"div",20),t.YNc(11,W,4,1,"div",20),t.YNc(12,tt,3,1,"div",21),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(7),t.xDo("",e.turno.id.substring(0,5).toUpperCase()," - ",e.turno.fecha," - ",e.turno.paciente.dni," - ",e.turno.paciente.apellido," - ",e.turno.estado.toUpperCase(),""),t.xp6(1),t.Q6J("ngIf",e.botones),t.xp6(1),t.Q6J("ngIf",!e.botones&&!e.resenia&&e.cancelar),t.xp6(1),t.Q6J("ngIf",!e.botones&&!e.resenia&&e.rechazar),t.xp6(1),t.Q6J("ngIf",!e.botones&&!e.resenia&&e.finalizar),t.xp6(1),t.Q6J("ngIf",!e.botones&&e.resenia)}}let nt=(()=>{class o{constructor(e,i){this.firestore=e,this.toast=i,this.turnos=[],this.busqueda="",this.comentario="",this.modal=!1,this.fechaActual=new Date,this.botones=!0,this.resenia=!1,this.cancelar=!1,this.rechazar=!1,this.finalizar=!1,u.C.traerFs("turnos",this.firestore,"fecha").subscribe(n=>{this.turnos=[],n.forEach(a=>{a.especialista.dni===this.especialista.dni&&this.turnos.push(a)})})}ngOnInit(){}obtenerColumnas(e){let i=[];return 0!==e.length&&Object.keys(e[0]).forEach(n=>{"resenia"!=n&&"comentario"!=n&&"especialista"!=n&&i.push(n)}),i}mostrarAcciones(e){this.modal=!0,this.turno=e}closeModal(){this.modal=!1,this.resenia=!1,this.turno=!1,this.botones=!0,this.rechazar=!1,this.finalizar=!1,this.cancelar=!1}construirFecha(e){const i=e.split("-");return new Date(+i[2],+i[1]-1,+i[0])}filtrarTurnos(){const e=this.busqueda.toLowerCase().trim();if(""===e)return this.turnos;const i=[];return this.turnos.forEach(n=>{const s=n.especialidad,l=n.paciente,d=n.comentario,h=n.especialista,x=n.estado,m=n.fecha,_=n.hora,w=n.id,v=n.resenia;(s&&s.toString().toLowerCase().includes(e)||l&&(l.apellido?.toString().toLowerCase().includes(e)||d?.toString().toLowerCase().includes(e)||h.apellido?.toString().toLowerCase().includes(e)||x?.toString().toLowerCase().includes(e)||m?.toString().toLowerCase().includes(e)||_?.toString().toLowerCase().includes(e)||w?.toString().toLowerCase().includes(e)||v?.toString().toLowerCase().includes(e)||(O=>{for(const f of O)for(const mt in f)if(f[mt]?.toString().toLowerCase().includes(e))return!0;return!1})(l.historial_clinico)))&&i.push(n)}),i}evaluar(e,i){let n=!1;switch(i){case"cancelar":this.fechaActual<this.construirFecha(e.fecha)&&"aceptado"===e.estado&&(n=!0);break;case"rechazar":case"aceptar":this.fechaActual<this.construirFecha(e.fecha)&&"pendiente"===e.estado&&(n=!0);break;case"finalizar":"aceptado"===e.estado&&(n=!0);break;case"resenia":""!=e.resenia&&(n=!0)}return n}cancelarTurno(){this.botones=!1,this.cancelar=!0}verResenia(){this.botones=!1,this.resenia=!0}rechazarTurno(e){this.botones=!1,this.rechazar=!0}aceptarTurno(e){e.estado="aceptado",u.C.actualizarFs("turnos",e,this.firestore).then(()=>{this.toast.info("Turno aceptado..."),this.closeModal()})}finalizarTurno(){this.botones=!1,this.finalizar=!0}actualizar(e,i){""!=this.comentario?(e.estado=i,e.resenia=this.comentario,"rechazado"===i&&(e.fecha="-",e.hora="-"),u.C.actualizarFs("turnos",e,this.firestore).then(()=>{this.toast.info("Turno "+i+"..."),this.closeModal()})):this.toast.error("Debe completar el campo...")}finalizarYActualizar(e){""==this.comentario?c().fire("Atencion..","Debe completar el campo de diagnostico","warning"):c().fire({title:"Completa el formulario",html:'<div style="width:100%; display:flex; flex-direction: column;"><div class="swal2-input-container" style="display:flex; align-items: center; width:100%;"><input id="swal-altura" class="swal2-input" placeholder="*Altura (cm)" required><input id="swal-peso" class="swal2-input" placeholder="*Peso (kg)" required></div><div class="swal2-input-container" style="display:flex; align-items: center; width:100%;"><input id="swal-temperatura" class="swal2-input" placeholder="*Temperatura" required><input id="swal-presion" class="swal2-input" placeholder="*Presi\xf3n(xx-xx)" required></div><div class="swal2-input-container" style="display:flex; align-items: center; width:100%;">  <input id="swal-dato1" class="swal2-input" placeholder="*Dato 1">:  <input id="swal-valor-dato1" class="swal2-input" placeholder="Valor Dato 1"></div><div class="swal2-input-container" style="display:flex; align-items: center; width:100%;">  <input id="swal-dato2" class="swal2-input" placeholder="Dato 2">:  <input id="swal-valor-dato2" class="swal2-input" placeholder="Valor Dato 2"></div><div class="swal2-input-container" style="display:flex; align-items: center; width:100%;">  <input id="swal-dato3" class="swal2-input" placeholder="Dato 3">:  <input id="swal-valor-dato3" class="swal2-input" placeholder="Valor Dato 3"></div></div>',focusConfirm:!1,preConfirm:()=>{const i=(c().getPopup()?.querySelector("#swal-altura")).value,n=(c().getPopup()?.querySelector("#swal-peso")).value,a=(c().getPopup()?.querySelector("#swal-temperatura")).value,s=(c().getPopup()?.querySelector("#swal-presion")).value,l=(c().getPopup()?.querySelector("#swal-dato1")).value,d=(c().getPopup()?.querySelector("#swal-valor-dato1")).value,h=(c().getPopup()?.querySelector("#swal-dato2")).value,x=(c().getPopup()?.querySelector("#swal-valor-dato2")).value,m=(c().getPopup()?.querySelector("#swal-dato3")).value,_=(c().getPopup()?.querySelector("#swal-valor-dato3")).value;return!i||isNaN(parseInt(i))?(c().showValidationMessage("La altura debe ser numerica"),!1):!n||isNaN(parseInt(n))?(c().showValidationMessage("El peso debe ser numerico"),!1):!a||isNaN(parseInt(a))?(c().showValidationMessage("La temperatura debe ser numerica"),!1):s?2!==s.split("-").length?(c().showValidationMessage("La presion es obligatoria"),!1):isNaN(parseInt(s.split("-")[0]))||isNaN(parseInt(s.split("-")[1]))?(c().showValidationMessage('La presion debe tener dos partes numericas, separadas por "-"'),!1):l&&d?{altura:i,peso:n,temperatura:a,presion:s,dato1:l,valorDato1:d,opcional1:h,valorOpcional1:x,opcional2:m,valorOpcional2:_}:(c().showValidationMessage("El dato 1 y el valor 1 son obligatorios"),!1):(c().showValidationMessage("La presion es obligatoria"),!1)},width:"auto"}).then(i=>{if(i.value){const a=e.paciente,_=i.value.opcional1,w=i.value.valorOpcional1,v=i.value.opcional2,O=i.value.valorOpcional2,f={altura:i.value.altura,peso:i.value.peso,temperatura:i.value.temperatura,presion:i.value.presion,fecha:e.fecha};f[i.value.dato1]=i.value.valorDato1,_&&(f[_]=w),v&&(f[v]=O),f.fecha=console.log(a),a.historial_clinico.push(f),e.estado="finalizado",e.resenia=this.comentario,e.paciente=a,u.C.actualizarFs("usuarios",a,this.firestore).then(()=>{u.C.actualizarFs("turnos",e,this.firestore).then(()=>{c().fire("Turno finalizado...","","success"),this.closeModal()})}).catch(()=>{c().fire("Hubo un error...","","error")})}})}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(M.gg),t.Y36(T._W))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-especialista"]],inputs:{especialista:"especialista"},decls:15,vars:4,consts:[[1,"contenedor"],[1,"input-contenedor"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 8 8",1,"lupa"],["fill","#ffffff","d","M3.5 0C1.57 0 0 1.57 0 3.5S1.57 7 3.5 7c.59 0 1.17-.14 1.66-.41a1 1 0 0 0 .13.13l1 1a1.02 1.02 0 1 0 1.44-1.44l-1-1a1 1 0 0 0-.16-.13c.27-.49.44-1.06.44-1.66c0-1.93-1.57-3.5-3.5-3.5zm0 1C4.89 1 6 2.11 6 3.5c0 .66-.24 1.27-.66 1.72l-.03.03a1 1 0 0 0-.13.13c-.44.4-1.04.63-1.69.63c-1.39 0-2.5-1.11-2.5-2.5s1.11-2.5 2.5-2.5z"],["type","text","placeholder","Buscar por especialista o especialidad...",1,"buscador",3,"ngModel","ngModelChange"],[1,"table-contenedor"],[4,"ngFor","ngForOf"],[1,"table-contenedor",2,"overflow","auto"],[2,"overflow-y","auto"],["style","cursor: pointer;",4,"ngFor","ngForOf"],["class","modal-ventana",4,"ngIf"],[2,"cursor","pointer"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"modal-ventana"],[1,"modal-content-ventana"],[1,"close",3,"click"],[1,"py-5",2,"text-align","center"],[1,"py-2","turno"],["class","btns py-5",4,"ngIf"],["class","textarea py-2",4,"ngIf"],["class","resenia py-4",4,"ngIf"],[1,"btns","py-5"],["class","accion",3,"click",4,"ngIf"],[1,"accion",3,"click"],[1,"textarea","py-2"],["placeholder","Ingrese el motivo por el cual cancela...",3,"ngModel","ngModelChange"],["placeholder","Ingrese el motivo por el cual rechaza...",3,"ngModel","ngModelChange"],["placeholder","Ingrese el diagnostico de la consulta y su rese\xf1a...",3,"ngModel","ngModelChange"],[1,"resenia","py-4"],[2,"width","90%"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3),t.qZA(),t.kcU(),t.TgZ(4,"input",4),t.NdJ("ngModelChange",function(s){return n.busqueda=s}),t.qZA()(),t.TgZ(5,"div",5)(6,"table")(7,"thead")(8,"tr"),t.YNc(9,Y,2,1,"th",6),t.qZA()()()(),t.TgZ(10,"div",7)(11,"table")(12,"tbody",8),t.YNc(13,H,2,1,"tr",9),t.qZA()()(),t.YNc(14,et,13,10,"div",10),t.qZA()),2&i&&(t.xp6(4),t.Q6J("ngModel",n.busqueda),t.xp6(5),t.Q6J("ngForOf",n.obtenerColumnas(n.turnos)),t.xp6(4),t.Q6J("ngForOf",n.filtrarTurnos()),t.xp6(1),t.Q6J("ngIf",n.modal))},dependencies:[b.sg,b.O5,g.Fj,g.JJ,g.On],styles:['.contenedor[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;width:100%;height:100%}.tamanio-custom[_ngcontent-%COMP%]{width:100vw!important}.input-contenedor[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;gap:15px}.buscador[_ngcontent-%COMP%]{width:67%;padding:10px;box-shadow:#ccdbe8 3px 3px 6px inset,#ffffff80 -3px -3px 6px 1px inset;border:none;border-radius:10px}.buscador[_ngcontent-%COMP%]:focus{outline:none}.table-contenedor[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:70%;max-height:72%;border-radius:10px}table[_ngcontent-%COMP%]{width:100%;font-weight:100;border-collapse:collapse;overflow:hidden;box-shadow:0 0 20px #0000001a;border-radius:10px;table-layout:fixed;text-align:center}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{background-color:#fff3;padding:15px;color:#000}th[_ngcontent-%COMP%]{color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#1e6091}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ffffff4d}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{position:relative}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover:before{content:"";position:absolute;inset:-9999px 0;z-index:-1}@media (max-width: 600px){table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{display:block;width:100%}}.lupa[_ngcontent-%COMP%]{width:2.1%}[_ngcontent-%COMP%]::-webkit-scrollbar{width:20px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px gray;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#2D6A4F;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#1c4231}.modal-ventana[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080}.modal-content-ventana[_ngcontent-%COMP%]{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:40%;height:auto;max-height:80%;border-radius:10px}.close[_ngcontent-%COMP%]{color:#aaa;float:right;font-size:28px;font-weight:700;cursor:pointer}.close[_ngcontent-%COMP%]:hover{color:#000}.turno[_ngcontent-%COMP%]{display:flex;text-align:center;justify-content:center;font-weight:700;font-size:20px}.btns[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.accion[_ngcontent-%COMP%]{padding:15px;border-radius:10px;border:none}.accion[_ngcontent-%COMP%]:hover{box-shadow:#0000002b 0 -23px 25px inset,#00000026 0 -36px 30px inset,#0000001a 0 -79px 40px inset,#0000000f 0 2px 1px,#00000017 0 4px 2px,#00000017 0 8px 4px,#00000017 0 16px 8px,#00000017 0 32px 16px;color:#fff}.accion[_ngcontent-%COMP%]:active{box-shadow:#0000001a 0 -23px 25px inset,#00000026 0 -36px 30px inset,#0000001a 0 -79px 40px inset,#0000000f 0 2px 1px,#00000017 0 4px 2px,#00000017 0 8px 4px,#00000017 0 16px 8px,#00000017 0 32px 16px}button[_ngcontent-%COMP%]{padding:.4%;border:none;border-radius:10px;width:auto;background-color:#94e1af;font-size:18px;border:2px solid #94e1af;box-shadow:4px 4px 10px #00000080}.textarea[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;max-height:75%;width:100%;gap:10px}.textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:98%;height:100%}.resenia[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;font-size:20px;width:100%;white-space:pre-wrap}']})}return o})();function ot(o,r){1&o&&(t.TgZ(0,"li",8)(1,"a",18),t._uU(2,"Usuarios"),t.qZA()())}function it(o,r){1&o&&(t.TgZ(0,"li",8)(1,"a",19),t._uU(2,"Pacientes"),t.qZA()())}function at(o,r){1&o&&(t.TgZ(0,"li",8)(1,"a",20),t._uU(2,"Mis Turnos"),t.qZA()())}function st(o,r){1&o&&(t.TgZ(0,"li",8)(1,"a",21),t._uU(2,"Turnos"),t.qZA()())}function rt(o,r){1&o&&(t.TgZ(0,"li",8)(1,"a",22),t._uU(2,"Solicitar Turno"),t.qZA()())}function ct(o,r){1&o&&(t.TgZ(0,"button",23),t._uU(1,"LOGIN"),t.qZA())}function lt(o,r){1&o&&(t.TgZ(0,"button",24),t._uU(1,"REGISTRO"),t.qZA())}function pt(o,r){if(1&o&&(t.TgZ(0,"button",25),t._UZ(1,"img",26),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("src",e.foto,t.LSH)}}function ut(o,r){if(1&o&&(t.TgZ(0,"button",27),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(e.user.email.split("@")[0].toUpperCase())}}function dt(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.cerrarSesion())}),t._uU(1,"LOGOUT"),t.qZA()}}function _t(o,r){if(1&o&&(t.TgZ(0,"div",29),t._UZ(1,"app-paciente",30),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("paciente",e.user)}}function ft(o,r){if(1&o&&(t.TgZ(0,"div",29),t._UZ(1,"app-especialista",31),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("especialista",e.user)}}const gt=[{path:"",component:(()=>{class o{constructor(e,i,n,a){this.auth=e,this.toast=i,this.firestore=n,this.router=a,this.admins=[],this.pacientes=[],this.especialistas=[],this.foto="",this.router.events.subscribe(s=>{s instanceof C.m2&&(this.rutaActual=s.url)})}ngOnInit(){u.C.traerFs("usuarios",this.firestore).subscribe(e=>{let i,n,a;e.forEach(s=>{"administrador"===s.perfil?this.admins.push(s):"especialista"===s.perfil?this.especialistas.push(s):this.pacientes.push(s),s.email===this.auth.get_user()?.email&&(this.foto=s.foto)}),this.admins.forEach(s=>{this.auth.get_user()?.email===s.email&&(i=s)}),this.user=this.auth.get_user()?.emailVerified||i?this.auth.get_user():null,this.especialistas.forEach(s=>{s.email===this.auth.get_user()?.email&&(a=s)}),this.pacientes.forEach(s=>{s.email===this.auth.get_user()?.email&&(n=s)}),this.user=n??a??null})}cerrarSesion(){this.toast.info("Cerrando sesion","Espera..."),this.auth.logout()?.then(()=>{setTimeout(()=>{this.toast.success("Cerraste sesion","Todo normal"),this.router.navigateByUrl("home"),this.user=null},2e3)})}estaEnArrayEmail(e,i){let n=!1;return i&&e.forEach(a=>{a.email===i.email&&(n=!0)}),n}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(P.e),t.Y36(T._W),t.Y36(M.gg),t.Y36(C.F0))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-mis-turnos"]],decls:24,vars:14,consts:[[1,"contenedor"],[1,"navbar","navbar-expand-xxl"],[1,"container-fluid"],["src","assets/medico.png","width","2%","routerLink","/home",1,"navbar-brand",2,"cursor","pointer"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarsExampleXxl","aria-controls","navbarsExampleXxl","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarsExampleXxl",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-xl-0"],[1,"nav-item"],["href","/home",1,"nav-link","active"],["class","nav-item",4,"ngIf"],["routerLink","/login",4,"ngIf"],["style","margin-left: 10px;","routerLink","/registro",4,"ngIf"],["style","cursor: pointer; margin-right: 10px; border-radius: 50%;","routerLink","/perfil",4,"ngIf"],["routerLink","/perfil",4,"ngIf"],["style","margin-left: 10px;",3,"click",4,"ngIf"],[2,"height","90%"],["style","width: 100%; height: 100%;",4,"ngIf"],["routerLink","/usuarios",1,"nav-link","active"],["routerLink","/pacientes",1,"nav-link","active"],["routerLink","/mis-turnos",1,"nav-link","active"],["routerLink","/turnos",1,"nav-link","active"],["routerLink","/solicitar-turnos",1,"nav-link","active"],["routerLink","/login"],["routerLink","/registro",2,"margin-left","10px"],["routerLink","/perfil",2,"cursor","pointer","margin-right","10px","border-radius","50%"],["width","30px",3,"src"],["routerLink","/perfil"],[2,"margin-left","10px",3,"click"],[2,"width","100%","height","100%"],[3,"paciente"],[3,"especialista"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"nav",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"button",4),t._UZ(5,"span",5),t.qZA(),t.TgZ(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),t._uU(10,"Home"),t.qZA()(),t.YNc(11,ot,3,0,"li",10),t.YNc(12,it,3,0,"li",10),t.YNc(13,at,3,0,"li",10),t.YNc(14,st,3,0,"li",10),t.YNc(15,rt,3,0,"li",10),t.qZA(),t.YNc(16,ct,2,0,"button",11),t.YNc(17,lt,2,0,"button",12),t.YNc(18,pt,2,1,"button",13),t.YNc(19,ut,2,1,"button",14),t.YNc(20,dt,2,0,"button",15),t.qZA()()(),t.TgZ(21,"div",16),t.YNc(22,_t,2,1,"div",17),t.YNc(23,ft,2,1,"div",17),t.qZA()()),2&i&&(t.xp6(8),t.ekj("activo","/home"===n.rutaActual),t.xp6(3),t.Q6J("ngIf",n.estaEnArrayEmail(n.admins,n.user)),t.xp6(1),t.Q6J("ngIf",n.estaEnArrayEmail(n.especialistas,n.user)),t.xp6(1),t.Q6J("ngIf",n.estaEnArrayEmail(n.pacientes,n.user)||n.estaEnArrayEmail(n.especialistas,n.user)),t.xp6(1),t.Q6J("ngIf",n.estaEnArrayEmail(n.admins,n.user)),t.xp6(1),t.Q6J("ngIf",n.estaEnArrayEmail(n.admins,n.user)||n.estaEnArrayEmail(n.pacientes,n.user)),t.xp6(1),t.Q6J("ngIf",!n.user),t.xp6(1),t.Q6J("ngIf",!n.user),t.xp6(1),t.Q6J("ngIf",n.user),t.xp6(1),t.Q6J("ngIf",n.user),t.xp6(1),t.Q6J("ngIf",n.user),t.xp6(2),t.Q6J("ngIf","paciente"===n.user.perfil),t.xp6(1),t.Q6J("ngIf","especialista"===n.user.perfil))},dependencies:[b.O5,C.rH,S,nt],styles:[".contenedor[_ngcontent-%COMP%]{width:100vw;height:100vh;background-color:#94e1af}.navbar[_ngcontent-%COMP%]{background-color:#d8f3dc;font-size:20px}button[_ngcontent-%COMP%]:hover{background-color:#78d1b6;transform:scale(1.05);color:#fff}button[_ngcontent-%COMP%]{padding:.4%;border:none;border-radius:10px;width:auto;background-color:#94e1af;font-size:18px;border:2px solid #94e1af;box-shadow:4px 4px 10px #00000080}button[_ngcontent-%COMP%]:active{background-color:#537e62}.bd-placeholder-img[_ngcontent-%COMP%]{font-size:1.125rem;text-anchor:middle;-webkit-user-select:none;user-select:none}@media (min-width: 768px){.bd-placeholder-img-lg[_ngcontent-%COMP%]{font-size:3.5rem}}a[_ngcontent-%COMP%]{cursor:pointer}.activo[_ngcontent-%COMP%]{background-color:#94e1af;color:#fff;border-radius:10px}"]})}return o})()}];let ht=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[C.Bz.forChild(gt),C.Bz]})}return o})(),xt=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[b.ez,ht,g.u5]})}return o})()}}]);