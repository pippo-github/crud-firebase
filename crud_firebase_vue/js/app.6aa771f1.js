(function(e){function t(t){for(var n,a,r=t[0],c=t[1],l=t[2],u=0,m=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,r=1;r<i.length;r++){var c=i[r];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},o={app:0},s=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"060a":function(e,t,i){},"06df":function(e,t,i){},"090b":function(e,t,i){var n=i("b2cf");function o(e,t,i){var o=n(t,i);return e.ref("/messaggi/indice-random-"+o.msgID+"/nikname/").set(o.nomeUtente),e.ref("/messaggi/indice-random-"+o.msgID+"/msg/").set(o.msgUtente),o}e.exports=o},"23ca":function(e,t,i){"use strict";var n=i("06df"),o=i.n(n);o.a},"241e":function(e,t,i){},"2ea2":function(e,t,i){},"44a1":function(e,t,i){"use strict";var n=i("060a"),o=i.n(n);o.a},"56d7":function(e,t,i){"use strict";i.r(t),i.d(t,"Bus",(function(){return Z}));i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"mainAppBox"},on:{"maneggia-db":function(t){return e.maneggiaDB(t)},"crud-db":function(t){return e.crudDB(t)},"dati-inseriti":function(t){return e.prendiDatiInseriti(t)},azzeraDB:function(t){return e.reimpostaDB(t)},inizializzaDB:function(t){return e.valoriIniziali(t)},"elemento-inserisci":function(t){return e.inserisciValori(t)},"componente-update-valori":function(t){return e.crudUpdateValue(t)},"elemento-elimina":function(t){return e.eliminaRecord(t)},"componente-rimuovi-valori":function(t){return e.rimuoviRecord(t)}}},[i("div",{staticClass:"gestisciDB"},[i("componente-pannello-controllo-db")],1),e.operationCrudDB?i("div",[i("componente-seleziona-crud-op")],1):e._e(),e.operationManageDB?i("div",[i("componente-controlli-gestione-db")],1):e._e(),e.crudInserisci?i("div",[i("componente-inserisci-valori-db")],1):e._e(),e.crudUpdate?i("div",[i("componente-aggiorna-crud-op",{attrs:{valoriRecordDB:e.dbRecords}})],1):e._e(),e.crudDelete?i("div",[i("componente-elimina-crud-op",{attrs:{valoriRecordDB:e.dbRecords}})],1):e._e(),e._l(e.dbRecords,(function(t,n){return i("div",{key:n,staticClass:"outputDB"},[i("div",{staticClass:"bloccoDivOutput"},[i("div",[i("span",[e._v(" ID: ")]),e._v(" "+e._s(t.id))]),i("div",[i("span",[e._v(" Nikname: ")]),e._v(" "+e._s(t.nikname))]),i("div",[i("span",[e._v(" Msg: ")]),e._v(" "+e._s(t.msg))])])])}))],2)},s=[],a=(i("4de4"),i("a434"),i("5530")),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"compopnenteGestisciDBMainBox"}},[i("h2",[e._v(" Control firebase DB ")]),i("div",{staticClass:"boxGestisciDBControlliInput"},[i("div",{staticClass:"controlliDB"},[i("button",{on:{click:function(t){return e.resetDB()}}},[e._v(" reset db ")]),i("button",{on:{click:function(t){return e.initDB()}}},[e._v(" init db ")])])])])},c=[],l={data:function(){return{title_GestisciDB:""}},methods:{resetDB:function(){console.log("reset db"),Z.$emit("azzeraDB",{reset:1})},initDB:function(){console.log("init db"),Z.$emit("inizializzaDB",{init:1})}}},d=l,u=(i("23ca"),i("2877")),m=Object(u["a"])(d,r,c,!1,null,"7acde213",null),g=m.exports,p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"compopnenteInserimantoValoriDBMainBox"}},[i("h2",[e._v(" Insert data on firebase DB ")]),i("div",{staticClass:"boxGestisciDBControlliInput"},[i("div",{staticClass:"controlliDB"},[i("form",[i("div",{staticClass:"bloccoControlli"},[i("div",[e._m(0),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.nikName,expression:"nikName"}],staticClass:"controlli",attrs:{type:"text"},domProps:{value:e.nikName},on:{input:function(t){t.target.composing||(e.nikName=t.target.value)}}})])]),i("div",[e._m(1),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.userMsg,expression:"userMsg"}],staticClass:"controlli",attrs:{type:"text"},domProps:{value:e.userMsg},on:{input:function(t){t.target.composing||(e.userMsg=t.target.value)}}})]),i("div",[i("button",{on:{click:function(t){return t.preventDefault(),e.prendiValori()}}},[e._v("send value ")])])])])])])])])},v=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("label",{attrs:{for:""}},[e._v(" Insert nikname ")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("label",{attrs:{for:""}},[e._v(" Insert message ")])])}],f={data:function(){return{titiolo_componente:"",nikName:"",userMsg:"",datiComponente:{}}},methods:{prendiValori:function(){console.log("prendiValori(), chiamata"),this.datiComponente.messaggio=this.userMsg,this.datiComponente.username=this.nikName,Z.$emit("dati-inseriti",this.datiComponente)}}},b=f,h=(i("96cb"),Object(u["a"])(b,p,v,!1,null,"6682ac8b",null)),D=h.exports,_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"pannelloControlloMainBox"}},[i("div",[i("h2",[e._v(" "+e._s(e.titolo_pannello_controllo)+" ")]),i("div",{staticClass:"tastiPannelloControllo"},[i("div",{staticClass:"tasti",on:{click:function(t){return e.manageDB()}}},[e._v(" Manage DB ")]),i("div",{staticClass:"tasti",on:{click:function(t){return e.CRUDonDB()}}},[e._v(" CRUD operation on DB ")])])])])},I=[],B={data:function(){return{titolo_pannello_controllo:"FireBase realtime database"}},methods:{manageDB:function(){Z.$emit("maneggia-db",{maneggiaDB:!0})},CRUDonDB:function(){Z.$emit("crud-db",{crudDB:!0})}}},M=B,x=(i("44a1"),Object(u["a"])(M,_,I,!1,null,"1f164e0a",null)),y=x.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"scegliOpCRUDMainBox"}},[i("div",{staticClass:"elemetiSelezione"},[i("div",{staticClass:"elementi",on:{click:function(t){return e.inserisci()}}},[i("div",[e._v(" Insert ")])]),i("div",{staticClass:"elementi",on:{click:function(t){return e.aggiorna()}}},[i("div",[e._v(" Update ")])]),i("div",{staticClass:"elementi",on:{click:function(t){return e.elimina()}}},[i("div",[e._v(" Remove ")])])])])},k=[],N={data:function(){return{titolo_segli_crud_op:""}},methods:{inserisci:function(){console.log("inserisci"),Z.$emit("elemento-inserisci",{inserisci:!0})},aggiorna:function(){console.log("aggiorna"),Z.$emit("elemento-aggiorna",{aggiorna:!0})},elimina:function(){console.log("elimina"),Z.$emit("elemento-elimina",{elimina:!0})}}},C=N,R=(i("a2c2"),Object(u["a"])(C,$,k,!1,null,"3610dbc6",null)),j=R.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"componenteAggiornaMainBox"}},[i("h2",[e._v(" "+e._s(e.titolo_update)+" ")]),i("div",{ref:"messageBoxIdNull",staticStyle:{display:"none"}},[e._v(" id is necessary, please select one ")]),i("form",{on:{submit:function(t){return t.preventDefault(),e.inviaDati()}}},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedID,expression:"selectedID"}],ref:"selOption",attrs:{id:"selectdID"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedID=t.target.multiple?i:i[0]}}},e._l(e.valoriRecordDB,(function(t,n){return i("option",{key:n,domProps:{value:t.id}},[e._v(" "+e._s(t.id)+" ")])})),0),i("div",[e._m(0),i("div",[i("input",{attrs:{type:"text",readonly:""},domProps:{value:e.selectedID}})])]),i("div",[e._m(1),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.nikname,expression:"nikname"}],attrs:{type:"text"},domProps:{value:e.nikname},on:{input:function(t){t.target.composing||(e.nikname=t.target.value)}}})])]),i("div",[e._m(2),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._m(3)])])])},z=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("label",{attrs:{for:""}},[e._v("ID:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("label",{attrs:{for:""}},[e._v("Nikname:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("label",{attrs:{for:""}},[e._v("Message:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("button",[e._v(" update value ")])])}],w={props:["valoriRecordDB"],data:function(){return{titolo_update:"Update value on firebase DB",nikname:"",message:"",selectedID:"",idIsNull:!0,ojbValori:{}}},methods:{inviaDati:function(){var e=this;console.log(" componente update -- inviaDati"),this.ojbValori.id=this.selectedID,this.ojbValori.nikname=this.nikname,this.ojbValori.message=this.message,0!=this.ojbValori.id&&(this.idIsNull=!1),this.idIsNull?(this.$refs.messageBoxIdNull.style.display="block",this.$refs.messageBoxIdNull.classList.remove("messageOperation"),this.$refs.messageBoxIdNull.classList.add("messageOperation")):(console.log("ojbValori: ",this.ojbValori),Z.$emit("componente-update-valori",this.ojbValori),this.$refs.messageBoxIdNull.style.background="green",this.$refs.messageBoxIdNull.style.color="white",this.$refs.messageBoxIdNull.style.display="block",this.$refs.messageBoxIdNull.innerText="operation complished",this.$refs.messageBoxIdNull.classList.remove("messageOperation"),this.$refs.messageBoxIdNull.classList.add("messageOperation"),setTimeout((function(){e.$refs.messageBoxIdNull.style.display="none"}),3e3))}},mounted:function(){}},U=w,V=(i("81d5"),Object(u["a"])(U,O,z,!1,null,"6a7f0ccb",null)),L=V.exports,P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"componenteAggiornaMainBox"}},[i("h2",[e._v(" "+e._s(e.titolo_remove)+" ")]),i("div",{attrs:{id:"contenitoreMessaggioOperazione"}},[i("div",{ref:"idIsNecessaryMessage",staticClass:"boxMessaggi"},[e._v(" id is necessary, please select one ")]),i("div",{ref:"successMessage",staticClass:"boxMessaggi"},[e._v(" operation complished ")])]),i("form",{on:{submit:function(t){return t.preventDefault(),e.inviaDati()}}},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedID,expression:"selectedID"}],ref:"selOption",attrs:{id:"selectdID"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedID=t.target.multiple?i:i[0]}}},e._l(e.valoriRecordDB,(function(t,n){return i("option",{key:n,domProps:{value:t.id}},[e._v(" "+e._s(t.id)+" ")])})),0),i("div",[i("button",{attrs:{disabled:e.valoriRecordDB.length<=0}},[e._v(" remove document ")])])])])},E=[],S={props:["valoriRecordDB"],data:function(){return{titolo_remove:"Delete value on firebase DB",selectedID:"",idIsNull:!0,ojbValori:{}}},methods:{inviaDati:function(){var e=this;console.log(" componente rimuovi -- inviaDati"),console.log("this.selectedID ::: :  "+this.selectedID),this.ojbValori.id=this.selectedID,0!=this.ojbValori.id&&(this.idIsNull=!1),console.clear(),"undefined"===typeof this.selectedID||""===this.selectedID?(console.log("(this.selectedID.length == 0 000000000000000000000000000"),setTimeout((function(){e.$refs.successMessage.classList.add("boxMessaggi")}),0),this.$refs.idIsNecessaryMessage.classList.remove("boxMessaggi"),this.$refs.idIsNecessaryMessage.classList.add("mostraMessaggioIDMancante")):(console.log("(this.selectedID.length != 0 1111111111111111111111"),setTimeout((function(){e.$refs.successMessage.classList.remove("boxMessaggi")}),0),this.$refs.idIsNecessaryMessage.classList.add("boxMessaggi"),this.$refs.idIsNecessaryMessage.classList.remove("mostraMessaggioIDMancante"),setTimeout((function(){e.$refs.successMessage.classList.add("boxMessaggi")}),2550)),(this.idIsNull||"undefined"===typeof this.idIsNull)&&(console.log("ID nullo selezionane uno !!! "),this.$refs.idIsNecessaryMessage.classList.remove("boxMessaggi"),this.$refs.idIsNecessaryMessage.classList.add("mostraMessaggioIDMancante")),this.idIsNull||(this.$refs.successMessage.classList.remove("boxMessaggi"),this.$refs.successMessage.classList.add("mostraMessaggioOperazioneSuccesso"),Z.$emit("componente-rimuovi-valori",this.ojbValori),console.log(this.$refs.idIsNecessaryMessage),this.selectedID="")}}},A=S,T=(i("e323"),Object(u["a"])(A,P,E,!1,null,"1aa53f1b",null)),G=T.exports,J=i("8aa5"),F=i.n(J),K=i("b2cf"),Q=i("090b"),W={apiKey:"AIzaSyAiMJsXAVTy8zmEfDGGc283hl25-aDe2nw",authDomain:"realtime-chat-f9e9c.firebaseapp.com",databaseURL:"https://realtime-chat-f9e9c.firebaseio.com",projectId:"realtime-chat-f9e9c",storageBucket:"realtime-chat-f9e9c.appspot.com",messagingSenderId:"287778440119",appId:"1:287778440119:web:b99e8561cd577196fb9e32",measurementId:"G-11VLBVDQ1W"};F.a.initializeApp(W),F.a.database();var X={components:{"componente-controlli-gestione-db":g,"componente-inserisci-valori-db":D,"componente-pannello-controllo-db":y,"componente-seleziona-crud-op":j,"componente-aggiorna-crud-op":L,"componente-elimina-crud-op":G},data:function(){return{titolo_app_crud:"titolo applicazione crud",operationManageDB:!1,operationCrudDB:!1,crudInserisci:!1,crudUpdate:!1,crudDelete:!1,db:F.a.database(),dbRecords:[]}},created:function(){var e=this,t=K();this.db.ref("messaggi").on("child_added",(function(t){e.dbRecords.push(Object(a["a"])(Object(a["a"])({},t.val()),{},{id:t.key})),e.db.ref("messaggi").off("child_added")})),Z.$on("maneggia-db",(function(t){console.log("dati richevuti maneggia-db ::: ",t),e.operationManageDB=t,e.operationManageDB=!0,e.operationCrudDB=!1,e.crudInserisci=!1,e.crudDelete=!1,e.crudUpdate=!1})),Z.$on("crud-db",(function(t){console.log("dati richevuti crud-db ::: ",t),e.operationCrudDB=t,e.operationManageDB=!1,e.operationCrudDB=!0,e.crudInserisci=!1})),Z.$on("elemento-inserisci",(function(t){console.log("dati richevuti elemento-inserisci ::: ",t),e.operationCrudDB=t,e.operationManageDB=!1,e.operationCrudDB=!0,e.crudInserisci=!0,e.crudDelete=!1,e.crudUpdate=!1})),Z.$on("dati-inseriti",(function(i){console.log("dati ricevuti dal figlio ::: ",i),e.db.ref("/messaggi/indice-random-"+t.msgID+"/nikname/").set(i.username),e.db.ref("/messaggi/indice-random-"+t.msgID+"/msg/").set(i.messaggio),setTimeout((function(){e.dbRecords.push({id:"indice-random-"+t.msgID,msg:i.messaggio,nikname:i.username})}),2500)})),Z.$on("azzeraDB",(function(t){console.log("Init db, elemento padre, valore ::: ",t),e.db.ref("messaggi").remove(),e.dbRecords=[]})),Z.$on("inizializzaDB",(function(t){console.log("Init db, elemento padre, valore ::: ",t),e.dbRecords=[],e.db.ref("messaggi").remove();var i=Q(e.db,"jerry","calà");setTimeout((function(){e.dbRecords.push({id:"indice-random-"+i.msgID,nikname:i.nomeUtente,msg:i.msgUtente}),i=Q(e.db,"pippo","baudo"),e.dbRecords.push({id:"indice-random-"+i.msgID,nikname:i.nomeUtente,msg:i.msgUtente})}),1500)})),Z.$on("elemento-aggiorna",(function(t){console.log("app module, dati ricevuti ::: ",t),e.crudInserisci=!1,e.crudDelete=!1,e.crudUpdate=!0})),Z.$on("componente-update-valori",(function(t){console.log("componente aggionamento dei valori, hhhhhhhhhhhhhhhhhhhhhh");var i=t.id,n=t.nikname,o=t.message;e.db.ref("/messaggi/"+i+"/nikname/").set(n),e.db.ref("/messaggi/"+i+"/msg/").set(o),e.dbRecords.filter((function(t,s){e.dbRecords[s].id==i&&(e.dbRecords[s].nikname=n,e.dbRecords[s].msg=o)}))})),Z.$on("elemento-elimina",(function(t){console.log("elimina record per ID: ",t),e.crudDelete=!0,e.crudInserisci=!1,e.crudUpdate=!1})),Z.$on("componente-rimuovi-valori",(function(t){console.log("rimozioni di valori ricevuti ::: ",t);var i=t.id;e.db.ref("/messaggi/"+i+"/nikname/").remove(),e.db.ref("/messaggi/"+i+"/msg/").remove(),e.dbRecords.filter((function(t,n){e.dbRecords[n].id==i&&(console.log("rimozione dei valori, uguali !!! :  this.dbRecords[idx].id: "+e.dbRecords[n].id+" elementoId: "+i),e.dbRecords.splice(n,1))}))}))}},q=X,H=(i("c402"),Object(u["a"])(q,o,s,!1,null,"0fb5844b",null)),Y=H.exports,Z=new n["a"];new n["a"]({el:"#crudApp",render:function(e){return e(Y)}})},"5c7b":function(e,t,i){},"81d5":function(e,t,i){"use strict";var n=i("2ea2"),o=i.n(n);o.a},"96cb":function(e,t,i){"use strict";var n=i("5c7b"),o=i.n(n);o.a},a2c2:function(e,t,i){"use strict";var n=i("aee8"),o=i.n(n);o.a},aee8:function(e,t,i){},b2cf:function(e,t,i){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=Math.random().toString().slice(2,8),n=new Object;return n.nomeUtente=e,n.msgUtente=t,n.msgID=i,n}i("fb6a"),i("d3b7"),i("25f0"),e.exports=n},c402:function(e,t,i){"use strict";var n=i("241e"),o=i.n(n);o.a},e323:function(e,t,i){"use strict";var n=i("e93b"),o=i.n(n);o.a},e93b:function(e,t,i){}});
//# sourceMappingURL=app.6aa771f1.js.map