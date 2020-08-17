// const firebase = require('firebase')

const inizializzDB = require('./moduloInizializzaDB')



 function inizializzaDbAggiungiElemento(dataBase, nikname, message)
{

    let objRitorno =  inizializzDB(nikname, message)


    // let objRitornoUno = inizializzaDB("paperino", "messaggio da paperino")

    dataBase
      .ref(
        "/messaggi/" + "indice-random-" + objRitorno.msgID + "/" + "nikname/"
      )
      .set(objRitorno.nomeUtente);


      dataBase
      .ref("/messaggi/" + "indice-random-" + objRitorno.msgID + "/" + "msg/")
      .set(objRitorno.msgUtente);


    // console.log("inizializzaDbAggiungiElemento, db:::::::", dataBase)

    return objRitorno;

}



module.exports = inizializzaDbAggiungiElemento