<template>
    

    <div id='scegliOpCRUDMainBox'>

        <div class='elemetiSelezione'>

                <div class='elementi' v-on:click='inserisci()'>
                    <div>
                        Insert
                    </div> 
                </div>

                <div class='elementi'  v-on:click='aggiorna()'>
                    <div>
                        Update
                    </div> 
                </div>

                <div class='elementi' v-on:click='elimina()'>
                    <div>
                        Remove
                    </div> 
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
            titolo_segli_crud_op: ''
        } 
    },

    methods:
    {
        inserisci()
        {
            console.log("inserisci")
            Bus.$emit("elemento-inserisci",{ inserisci: true })
        },

        aggiorna()
        {
            console.log("aggiorna")
            Bus.$emit("elemento-aggiorna",{ aggiorna: true })

        },

        elimina()
        {
            console.log("elimina")
            Bus.$emit("elemento-elimina",{ elimina: true })
        }

    }
}
</script>

<style scoped>

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

#scegliOpCRUDMainBox{
    border: solid green 1px;
}

.elemetiSelezione{
    text-align: center;
    display: flex;
    height: 7vh;
    padding: 3px;
}

.elementi{
    display: flex;
/* flex: 1; */

    /* height: 100%; */
    width: 100%;
    border: solid blue 1px;
    background: rgb(195, 5, 37);
    align-items: center;
    color: white;
    

}

.elementi div{
    width: 100%;
    text-align: center;
}


.elementi:hover{
cursor: pointer;
color: green;
}



</style>