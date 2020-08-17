<template>
    

    <div id='compopnenteInserimantoValoriDBMainBox'>

                <h2>
                    Insert data on firebase DB
                </h2>

            <div class='boxGestisciDBControlliInput'> 




                <div class='controlliDB'>


                            <form>


                            <div class='bloccoControlli'>

                                
                                <div>

                                
                                <div>
                                    <label for=""> Insert nikname </label>
                                </div>
                                <div>
                                    <input v-model='nikName' type="text" class="controlli">
                                </div>
                                
                                </div>


                                <div>

                                
                                <div >
                                    <label for=""> Insert message </label>
                                </div>
                                <div>
                                    <input v-model='userMsg' type="text" class="controlli">
                                </div>

                                <div>
                                    <button v-on:click.prevent='prendiValori()'>send value </button>
                                </div>
                                
                                </div>

                        </div>

                                
                                

                            </form>


                </div>


            </div>

    </div>

</template>


<script>

import { Bus } from '../main'

export default {
    data()
    {
        return{
            titiolo_componente: '',
            nikName: '',
            userMsg: '',
            datiComponente: {}
         }
    },
    methods:
    {
        prendiValori(){
            console.log("prendiValori(), chiamata")

            this.datiComponente.messaggio = this.userMsg
            this.datiComponente.username  = this.nikName

            Bus.$emit("dati-inseriti", (this.datiComponente))

            // console.log('this.datiComponente: ' , this.datiComponente)

        }
    }
    


}
</script>


<style scoped>

#compopnenteInserimantoValoriDBMainBox{
    position: relative;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    background: rgb(7, 3, 59);
    color: white;

    border: solid yellow 2px;

    

}

 #compopnenteInserimantoValoriDBMainBox > h2{
    color: rgb(184, 54, 54);
    padding: 11px 0px 7px 10px;
    font-family: courier;
}

.bloccoControlli{
    box-sizing: border-box;
    text-align: center;
}

.bloccoControlli  label{
    box-sizing: border-box;
    width: 100%;
    padding: 7px;
    display: block;
    background: rgb(10, 121, 34);
    text-align: left;
}


.bloccoControlli  input[type=text]{
    padding: 7px;
    width: 100%;
}

.bloccoControlli  button{

    width: calc(100% - 8px); 
    margin: 4px auto;
    

    box-sizing: border-box;
}


.bloccoControlli  button:hover{
cursor: pointer;
background: rgb(155, 216, 155);
outline: none;
border-radius: 2px;
}

.bloccoControlli  input[type=text]:focus{

background: rgb(161, 67, 67);
color: white;

}

</style>