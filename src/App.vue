<template>
  <div
    id="mainAppBox"
    v-on:maneggia-db="maneggiaDB($event)"
    v-on:crud-db="crudDB($event)"
    v-on:dati-inseriti="prendiDatiInseriti($event)"
    v-on:azzeraDB="reimpostaDB($event)"
    v-on:inizializzaDB="valoriIniziali($event)"
    v-on:elemento-inserisci="inserisciValori($event)"
    v-on:componente-update-valori="crudUpdateValue($event)"
    v-on:elemento-elimina='eliminaRecord($event)'
    v-on:componente-rimuovi-valori='rimuoviRecord($event)'

  >
    <!-- {{ titolo_app_crud }} -->

    <div class="gestisciDB">
      <!-- <componente-controlli-gestione-db/>
          <componente-inserisci-valori-db/> -->

      <componente-pannello-controllo-db />
 
    </div>



    <div v-if='operationCrudDB'>
      <componente-seleziona-crud-op/>
    </div>

     <div v-if="operationManageDB">
      <componente-controlli-gestione-db />
    </div>

    <div v-if="crudInserisci">
      <componente-inserisci-valori-db />
    </div> 


<!-- 

 i due componenti seguenti ricevono tramite props il vettore contenente i 
 records del DB

-->

    <div v-if="crudUpdate">
      <componente-aggiorna-crud-op v-bind:valoriRecordDB='dbRecords'/>
    </div> 

    <div v-if="crudDelete">
      <componente-elimina-crud-op v-bind:valoriRecordDB='dbRecords'/>
    </div> 



    <div class="outputDB" v-for="(record, idx) in dbRecords" v-bind:key="idx">
      <div class="bloccoDivOutput">
        <div><span> ID: </span> {{ record.id }}</div>

        <div><span> Nikname: </span> {{ record.nikname }}</div>

        <div><span> Msg: </span> {{ record.msg }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import componenteControllaDB              from "./componenti/componenteGestisciDB";
import componenteInseriscivaloriDB        from "./componenti/componenteInserisciValoriDB";
import componentePannelloControlloDB      from "./componenti/componentePannelloControllo";
import componenteSelezionaOperazioneCRUD  from "./componenti/segliOperazioneCRUD";
import componenteAggiornaOpreazioneCRUD   from "./componenti/componenteAggiorna.vue";
import componenteEliminaOpreazioneCRUD   from "./componenti/componenteElimina";

import { Bus } from "./main";

import firebase from "firebase";

const inizializzaDB   = require("../src/componenti/moduloInizializzaDB")
// const valorizzaInitDB = require("../src/componenti/inizializzaDbAggiungiElemento")

const inizializzaDbAggiungiElemento = require('../src/componenti/inizializzaDbAggiungiElemento')

var firebaseConfig = {
  apiKey: "AIzaSyAiMJsXAVTy8zmEfDGGc283hl25-aDe2nw",
  authDomain: "realtime-chat-f9e9c.firebaseapp.com",
  databaseURL: "https://realtime-chat-f9e9c.firebaseio.com",
  projectId: "realtime-chat-f9e9c",
  storageBucket: "realtime-chat-f9e9c.appspot.com",
  messagingSenderId: "287778440119",
  appId: "1:287778440119:web:b99e8561cd577196fb9e32",
  measurementId: "G-11VLBVDQ1W"
};
// Initialize Firebase

// let firebase = {};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.database();

export default {
  components: {
    "componente-controlli-gestione-db": componenteControllaDB,
    "componente-inserisci-valori-db": componenteInseriscivaloriDB,
    "componente-pannello-controllo-db": componentePannelloControlloDB,
    "componente-seleziona-crud-op": componenteSelezionaOperazioneCRUD,
    "componente-aggiorna-crud-op": componenteAggiornaOpreazioneCRUD,
    "componente-elimina-crud-op": componenteEliminaOpreazioneCRUD
  },
  data() {
    return {
      titolo_app_crud: "titolo applicazione crud",

      operationManageDB: false,
      operationCrudDB: false,

      crudInserisci: false,
      crudUpdate: false,
      crudDelete: false,

      db: firebase.database(),
      dbRecords: []
    };
  },

   created() {

     
     let oggettoRitorno = inizializzaDB()
     // console.log("objRet: <<<<<<<<<<<<<<<<<<<<< :: ", oggettoRitorno)

    this.db.ref("messaggi").on("child_added", dbContent => {

      // console.log("Db.val(): ", dbContent.val());

      this.dbRecords.push({ ...dbContent.val(), id: dbContent.key });

      this.db.ref("messaggi").off("child_added");


    });

    Bus.$on("maneggia-db", payLoad => {
      console.log("dati richevuti maneggia-db ::: ", payLoad);
      this.operationManageDB = payLoad;

      this.operationManageDB = true;
      this.operationCrudDB = false;

      this.crudInserisci = false;
      this.crudDelete =  false
      this.crudUpdate = false;


    });

    Bus.$on("crud-db", payLoad => {
      console.log("dati richevuti crud-db ::: ", payLoad);
      this.operationCrudDB = payLoad;

      this.operationManageDB = false;
      this.operationCrudDB = true;

      this.crudInserisci = false;
    });



    Bus.$on("elemento-inserisci", payLoad => {
      console.log("dati richevuti elemento-inserisci ::: ", payLoad);
      this.operationCrudDB = payLoad;

      this.operationManageDB = false;
      this.operationCrudDB = true;


      this.crudInserisci = true;
      this.crudDelete =  false
      this.crudUpdate = false;

    });



    Bus.$on("dati-inseriti", datiIserimetoFromFiglio => {
      console.log("dati ricevuti dal figlio ::: ", datiIserimetoFromFiglio);

      // var randomToAppend = Math.random()
      //   .toString()
      //   .slice(2, 8);



      this.db
        .ref(
          "/messaggi/" + "indice-random-" + oggettoRitorno.msgID + "/" + "nikname/"
        )
        .set(datiIserimetoFromFiglio.username);


      this.db
        .ref("/messaggi/" + "indice-random-" + oggettoRitorno.msgID + "/" + "msg/")
        .set(datiIserimetoFromFiglio.messaggio);



      setTimeout(() => {
        this.dbRecords.push({
          id: "indice-random-" + oggettoRitorno.msgID,
          msg: datiIserimetoFromFiglio.messaggio,
          nikname: datiIserimetoFromFiglio.username
        });
      }, 2500);


    });


    Bus.$on("azzeraDB", (initDBValue) =>{
        console.log("Init db, elemento padre, valore ::: ", initDBValue)
        this.db.ref("messaggi").remove()

        this.dbRecords = []
        

    })


    Bus.$on("inizializzaDB", (initDBValue) =>{
        console.log("Init db, elemento padre, valore ::: ", initDBValue)


        this.dbRecords = []
        this.db.ref("messaggi").remove()


      let oggettoRitorno = inizializzaDbAggiungiElemento(this.db, "jerry", "calà")

      setTimeout(() =>{
        this.dbRecords.push({ id: "indice-random-" + oggettoRitorno.msgID, nikname: oggettoRitorno.nomeUtente, msg: oggettoRitorno.msgUtente })

          oggettoRitorno = inizializzaDbAggiungiElemento(this.db, "pippo", "baudo")
          this.dbRecords.push({ id: "indice-random-" + oggettoRitorno.msgID, nikname: oggettoRitorno.nomeUtente, msg: oggettoRitorno.msgUtente })


      },1500)
      

      // oggettoRitorno = ''

      // oggettoRitorno = inizializzaDbAggiungiElemento(this.db, "pippo", "paudo")

      // this.dbRecords.push({id: oggettoRitorno.msgID, nikname: oggettoRitorno.nomeUtente, msg: oggettoRitorno.msgUtente })


    })

    Bus.$on("elemento-aggiorna", (payLoad) =>{
        // this.db.ref("messaggi/" +  +).

        console.log("app module, dati ricevuti ::: ", payLoad)

              this.crudInserisci = false
              this.crudDelete =  false

              this.crudUpdate = true;

    })


    Bus.$on("componente-update-valori", (valoriUpload) =>{

console.log("componente aggionamento dei valori, hhhhhhhhhhhhhhhhhhhhhh")

const elementoId      = valoriUpload.id
const nikname         = valoriUpload.nikname
const message         = valoriUpload.message


      this.db
        .ref(
          "/messaggi/" +  elementoId + "/" + "nikname/"
        )
        .set(nikname);


      this.db
        .ref("/messaggi/" +  elementoId + "/" + "msg/")
        .set(message);



      
        this.dbRecords.filter( (elemento, idx) =>{
          if(this.dbRecords[idx].id == elementoId)
          {
            // console.log("update dei valori, UGUALI !!! : " + " this.dbRecords[idx].id: " + this.dbRecords[idx].id + " elementoId: " + elementoId)
            this.dbRecords[idx].nikname = nikname;
            this.dbRecords[idx].msg = message;
          }
        })

    })

    
    
    Bus.$on("elemento-elimina", (datiPerElimina) =>{
      console.log("elimina record per ID: " , datiPerElimina)

      this.crudDelete = true;

      this.crudInserisci = false;
      this.crudUpdate = false;


    })

    Bus.$on("componente-rimuovi-valori", (valoriPayLoadRimozione) =>{

      console.log("rimozioni di valori ricevuti ::: " , valoriPayLoadRimozione)

const elementoId      = valoriPayLoadRimozione.id



      this.db
        .ref(
          "/messaggi/" +  elementoId + "/" + "nikname/"
        )
        .remove();


      this.db
        .ref("/messaggi/" +  elementoId + "/" + "msg/")
        .remove();


// this.dbRecords = []

      this.dbRecords.filter( (elemento, idx) =>{
          if(this.dbRecords[idx].id == elementoId)
          {
            console.log("rimozione dei valori, uguali !!! : " + " this.dbRecords[idx].id: " + this.dbRecords[idx].id + " elementoId: " + elementoId)
            this.dbRecords.splice(idx,1);
          }
      })

    })

  }
};
</script>

<style scoped>
#mainAppBox {
  position: relative;
  background-image: linear-gradient(216deg, rgba(77, 77, 77,0.05) 0%, rgba(77, 77, 77,0.05) 25%,rgba(42, 42, 42,0.05) 25%, rgba(42, 42, 42,0.05) 38%,rgba(223, 223, 223,0.05) 38%, rgba(223, 223, 223,0.05) 75%,rgba(36, 36, 36,0.05) 75%, rgba(36, 36, 36,0.05) 100%),linear-gradient(44deg, rgba(128, 128, 128,0.05) 0%, rgba(128, 128, 128,0.05) 34%,rgba(212, 212, 212,0.05) 34%, rgba(212, 212, 212,0.05) 57%,rgba(25, 25, 25,0.05) 57%, rgba(25, 25, 25,0.05) 89%,rgba(135, 135, 135,0.05) 89%, rgba(135, 135, 135,0.05) 100%),linear-gradient(241deg, rgba(55, 55, 55,0.05) 0%, rgba(55, 55, 55,0.05) 14%,rgba(209, 209, 209,0.05) 14%, rgba(209, 209, 209,0.05) 60%,rgba(245, 245, 245,0.05) 60%, rgba(245, 245, 245,0.05) 69%,rgba(164, 164, 164,0.05) 69%, rgba(164, 164, 164,0.05) 100%),linear-gradient(249deg, rgba(248, 248, 248,0.05) 0%, rgba(248, 248, 248,0.05) 32%,rgba(148, 148, 148,0.05) 32%, rgba(148, 148, 148,0.05) 35%,rgba(202, 202, 202,0.05) 35%, rgba(202, 202, 202,0.05) 51%,rgba(181, 181, 181,0.05) 51%, rgba(181, 181, 181,0.05) 100%),linear-gradient(92deg, hsl(214,0%,11%),hsl(214,0%,11%));
  height: 100vh;
}

.outputDB span {
  font-weight: bold;
  color: white;
}

.outputDB {
  border-bottom: solid grey 2px;
  padding: 7px;
  margin: 10px 22px;
  background: green;
  color: rgb(207, 185, 185);
  border-radius: 5px;
}
</style>
