<template>
  <div id="componenteAggiornaMainBox">
    <h2>
      {{ titolo_remove }}
    </h2>


    <div id='contenitoreMessaggioOperazione'>

        <div class='boxMessaggi' ref='idIsNecessaryMessage' >

                id is necessary, please select one

        </div>

        
        <div class='boxMessaggi' ref='successMessage' >

                operation complished

        </div>




    </div>


    <form @submit.prevent="inviaDati()">
      <select id="selectdID" v-model='selectedID' ref='selOption' >
        <option 
          v-for="(record, idx) in valoriRecordDB"
          v-bind:key="idx"
          v-bind:value="record.id"  
        >

          {{ record.id }}

        </option>        
      </select>

        <div>
            <button v-bind:disabled='valoriRecordDB.length <= 0 '>
                remove document
            </button>
        </div>

      <!-- </div> -->
    </form>
  </div>
</template>

<script>

import { Bus } from '../main'

export default {
  props: ["valoriRecordDB"],

  data() {
    return {
      titolo_remove: "Delete value on firebase DB",


    //   nikname: '',
    //   message: '',
      selectedID: '',

      idIsNull: true,
      ojbValori: {}

    }
  },

methods:
{

      inviaDati()
      {


              console.log(" componente rimuovi -- inviaDati")

              console.log('this.selectedID ::: :  ' + this.selectedID )

              this.ojbValori.id       = this.selectedID;

              if(this.ojbValori.id != 0)
              {
                  this.idIsNull = false 
              } 

      console.clear()



        if(typeof this.selectedID === 'undefined' || this.selectedID === '' )
        {

          console.log('(this.selectedID.length == 0 000000000000000000000000000')
        setTimeout(() => {
          this.$refs.successMessage.classList.add('boxMessaggi')  
        }, 0);


        this.$refs.idIsNecessaryMessage.classList.remove('boxMessaggi')
        this.$refs.idIsNecessaryMessage.classList.add('mostraMessaggioIDMancante')


        // commentando le seguenti righe, lascia il messaggio ID mancante a schermo

        // setTimeout(() => {
        //   this.$refs.idIsNecessaryMessage.classList.add('boxMessaggi')  
        // }, 2550);

        }
          else
          {

              console.log('(this.selectedID.length != 0 1111111111111111111111')

          setTimeout(() => {
            this.$refs.successMessage.classList.remove('boxMessaggi')  
          }, 0);


          this.$refs.idIsNecessaryMessage.classList.add('boxMessaggi')
          this.$refs.idIsNecessaryMessage.classList.remove('mostraMessaggioIDMancante')

          setTimeout(() => {
            this.$refs.successMessage.classList.add('boxMessaggi')  
          }, 2550);

          }
                  if(this.idIsNull || typeof this.idIsNull === 'undefined'){
                    console.log("ID nullo selezionane uno !!! ")

                      this.$refs.idIsNecessaryMessage.classList.remove('boxMessaggi')
                      this.$refs.idIsNecessaryMessage.classList.add('mostraMessaggioIDMancante')

                      // commentando le seguenti righe, lascia il messaggio ID mancante a schermo

                      // setTimeout(() => {
                      //   this.$refs.idIsNecessaryMessage.classList.add('boxMessaggi')
                      // }, 3000);
                  }

                  if(!this.idIsNull){

                    this.$refs.successMessage.classList.remove('boxMessaggi')
                    this.$refs.successMessage.classList.add('mostraMessaggioOperazioneSuccesso')

                                // console.log("ojbValori: " , this.ojbValori)
                                Bus.$emit("componente-rimuovi-valori", this.ojbValori)

                    console.log(this.$refs.idIsNecessaryMessage)

                    this.selectedID = '';

                  }

            }

        } // methods

}; // export default

</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#componenteAggiornaMainBox {
  border: solid red 1px;
  /* height: 15vh; */
  background: rgb(49, 4, 19);
  padding: 3px;
}

#componenteAggiornaMainBox h2 {
    color: rgb(184, 54, 54);
    padding: 11px 0px 7px 10px;
    font-family: courier;
}

#selectdID {
  width: 100%;
  background: rgb(9, 9, 47);
  color: white;
  padding: 3px;
  font-family: courier;
}

#componenteAggiornaMainBox select {
  margin: 11px 0 22px 0;
}

#componenteAggiornaMainBox label {
  color: mediumseagreen;
  padding: 2px;
}

#componenteAggiornaMainBox input[type="text"] {
  width: 100%;
}

#componenteAggiornaMainBox button {
  margin-top: 2px;
  width: 100%;
}


#contenitoreMessaggioOperazione{
  position: relative;
  z-index: 100;
  color: white;
  margin: 2px;
}


.boxMessaggi
{
 position: relative;
  color: white;
    border: solid white 2px;
padding: 5px;
}

.boxMessaggi:nth-child(1)
{
  display: none;
}


.boxMessaggi:nth-child(2)
{
  display: none;
}


.mostraMessaggioIDMancante
{
  /* display: 'block'; */

border: solid lightblue 1px;
 color: rgb(225, 233, 217);
 background: rgb(163, 19, 19);
 padding: 7px;
 text-transform: uppercase;
 display: block;
 animation: fadeIt 5s;
 opacity: 1;

  animation: animaMsgIdNecessary 1s forwards;

}

.mostraMessaggioOperazioneSuccesso
{
  /* display: 'block'; */

border: solid lightblue 1px;
 color: rgb(225, 233, 217);
 background: rgb(4, 85, 42);
 padding: 7px;
 text-transform: uppercase;
 display: block;
 animation: fadeIt 5s;
 opacity: 1;

  animation: animaMsgSuccesso 1s
}


@keyframes animaMsgSuccesso {
  
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}


@keyframes animaMsgIdNecessary {
  
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
    color: orange;
  }
}


/* .messageOperation{
 border: solid lightblue 1px;
 color: rgb(128, 243, 20);
 background: rgb(163, 19, 19);
 padding: 7px;
 text-transform: uppercase;
 display: block;
 animation: fadeIt 5s;
 opacity: 1;
}

@keyframes fadeIt
{
    0%{
        opacity: 1
    }
    100%{
        opacity: 0
    }
} */

</style>
