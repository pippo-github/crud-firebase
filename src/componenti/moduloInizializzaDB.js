 function  inizializzaDB(nikName = '', messaggio = '')
{

    var randomToAppend =  Math.random()
    .toString()
    .slice(2, 8);

    let objReturn = new Object()

    objReturn.nomeUtente = nikName
    objReturn.msgUtente  = messaggio
    objReturn.msgID      = randomToAppend


     return objReturn;

}

module.exports = inizializzaDB