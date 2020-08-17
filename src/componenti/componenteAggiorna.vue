<template>
  <div id="componenteAggiornaMainBox">
    <h2>
      {{ titolo_update }}
    </h2>

    <div ref='messageBoxIdNull' style='display: none'>

            id is necessary, please select one

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
        <div>
          <label for="">ID:</label>
        </div>

        <div>
          <input type="text" readonly 
          v-bind:value='selectedID'
          />
        </div>
      </div>

      <div>
        <div>
          <label for="">Nikname:</label>
        </div>

        <div>
          <input type="text" 
          v-model='nikname'
          />
        </div>
      </div>

      <div>
        <div>
          <label for="">Message:</label>
        </div>

        <div>
          <input type="text" 
          v-model='message'
          />
        </div>

        <div>
            <button>
                update value
            </button>
        </div>

      </div>
    </form>
  </div>
</template>

<script>

import { Bus } from '../main'

export default {
  props: ["valoriRecordDB"],

  data() {
    return {
      titolo_update: "Update value on firebase DB",


      nikname: '',
      message: '',
      selectedID: '',

      idIsNull: true,
      ojbValori: {}

    }
  },
  methods:{
      inviaDati()
      {
        console.log(" componente update -- inviaDati")

        this.ojbValori.id       = this.selectedID;
        this.ojbValori.nikname  = this.nikname;
        this.ojbValori.message  = this.message;

        if(this.ojbValori.id != 0)
        {
            this.idIsNull = false 
        }

        if(!this.idIsNull){

            console.log("ojbValori: " , this.ojbValori)
            Bus.$emit("componente-update-valori", this.ojbValori)
            
            this.$refs.messageBoxIdNull.style.background = 'green'
            this.$refs.messageBoxIdNull.style.color = 'white'
            this.$refs.messageBoxIdNull.style.display = 'block'
            
            this.$refs.messageBoxIdNull.innerText= 'operation complished'

            this.$refs.messageBoxIdNull.classList.remove("messageOperation")
            this.$refs.messageBoxIdNull.classList.add("messageOperation")


            setTimeout(() => {
                this.$refs.messageBoxIdNull.style.display = 'none'
            }, 3000);     
        }
        else{
         this.$refs.messageBoxIdNull.style.display = 'block'

            this.$refs.messageBoxIdNull.classList.remove("messageOperation")
            this.$refs.messageBoxIdNull.classList.add("messageOperation")

         }

      }

  },
mounted() {

// non riesco a posizionare l'elemnto options
// perchè questo viene creato dopo che la pagina viene
// caricata, quindi cercando d'impostarlo ottengo
// try to set undefined property .....
 
    // here is the Vue code
        // console.log(this.$refs.selOption.options)
 

// document.onreadystatechange = () => { 
//     if (document.readyState == "complete") { 
//           console.log(this.$refs.selOption.options[1].selected = 1)
//     }
// }
 

}


};
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

.messageOperation{
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
}

</style>
