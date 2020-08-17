<template>
    

    <div id='compopnenteGestisciDBMainBox'>

                <h2>
                    Control firebase DB
                </h2>

            <div class='boxGestisciDBControlliInput'> 




                <div class='controlliDB'>

                    <button v-on:click='resetDB()'> reset db </button>
                    <button v-on:click='initDB()'> init db </button>

                </div>


            </div>

    </div>

</template>


<script>

import { Bus } from '../main'

export default {
    data(){
        return{
            title_GestisciDB: '',
        }        
    },methods:
    {
        resetDB()
        {
            console.log("reset db")
            Bus.$emit("azzeraDB",{ reset: 1 } )
        },

        initDB()
        {
            console.log("init db")
            Bus.$emit("inizializzaDB", { init: 1 } )
        }

    }
}
</script>


<style scoped>

#compopnenteGestisciDBMainBox{
    position: relative;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    background: rgb(7, 3, 59);

}

#compopnenteGestisciDBMainBox > h2{
    color: white;
    padding: 11px 0px 7px 10px;
    font-family: courier;
}

.boxGestisciDBControlliInput{
    display: flex;
    border: solid rgba(255, 0, 0,.4) 11px;
    padding: 11px;
    flex: 1;
}

.controlliDB{
    flex: 1;
}

.controlliDB  button{
    width: 100%;
}


.controlliDB  button:hover{
    cursor: pointer;
}


</style>