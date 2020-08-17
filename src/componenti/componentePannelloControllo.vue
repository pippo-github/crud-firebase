<template>
    
        <div id='pannelloControlloMainBox'>

            <div>

                    <h2>
                        {{ titolo_pannello_controllo }}
                    </h2>


            <div class='tastiPannelloControllo'>

                    <div class='tasti' v-on:click='manageDB()'>
                        Manage DB
                    </div>

                    <div class='tasti' v-on:click='CRUDonDB()'>
                        CRUD operation on DB
                    </div>

            </div>


            </div>


        </div>


</template>



<script>

import { Bus } from '../main'

export default
{

    data()
    {
        return{
            titolo_pannello_controllo: 'FireBase realtime database'
        }
    },
    methods:
    {
        manageDB(){
            // console.log("manageDB")
            // console.log(Bus)
            Bus.$emit("maneggia-db", { maneggiaDB: true })
        },
        CRUDonDB()
        {
            Bus.$emit("crud-db", { crudDB: true })
        }
    }


}

</script>


<style scoped>

#pannelloControlloMainBox{
    box-sizing: border-box;

    border: solid green 2px;
    
}


#pannelloControlloMainBox > div > h2
{
 color: white;
 background: rgba(47, 9, 47,.88);
 color: white;
 padding: 7px;
 font-family: 'Courier New', Courier, monospace;
 font-size: 1.8em;
 font-style: italic;
}


.tastiPannelloControllo {
    display: flex;
 /* height: 15vh;    */
}

.tasti{
 width: 100%;
 height: 15vh;
 display: flex;
 align-items: center;
 justify-content: space-around;
 background: rgb(16, 93, 16);
 text-align: center;
 border: solid lightgrey 1px;
 margin: 2px;
 color: rgb(219, 197, 197);
 
}

.tasti:hover{
    cursor: pointer;
    background: rgb(53, 5, 53);
    color: white;
    transition: 1s;
}


</style>