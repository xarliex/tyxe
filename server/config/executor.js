const executor = (sell, buy) => {

    for(i=0; i<sell.length; i++){
        for(j=0; j<buy.length; j++){
          //console.log(i,j)
          if(sell[i].orderQty > buy[j].orderQty){
            //console.log("BUY < SELL")
            //console.log("BUY=====>", buy[j])
            //console.log("SELL=====>", sell[i])
            sell[i].orderQty -= buy[j].orderQty
            buy[j].orderQty -= buy[j].orderQty;
            //console.log("BUY RESTANTE=====>", buy[j])
            //console.log("SELL RESTANTE=====>", sell[i])
          } else if(sell[i].orderQty < buy[j].orderQty){
            //console.log("BUY > SELL")
            //console.log("BUY=====>", buy[j])
            //console.log("SELL=====>", sell[i])
            buy[j].orderQty -= sell[i].orderQty
            sell[i].orderQty -= sell[i].orderQty
            //console.log("BUY RESTANTE=====>", buy[j])
            //console.log("SELL RESTANTE=====>", sell[i])
          } else {
            //console.log("BUY = SELL")
            //console.log("BUY=====>", buy[j])
            //console.log("SELL=====>", sell[i])
            sell[i].orderQty -= sell[i].orderQty
            buy[j].orderQty -= buy[j].orderQty
            //console.log("BUY RESTANTE=====>", buy[j])
            //console.log("SELL RESTANTE=====>", sell[i])
          }
        }
      }
    // sell.forEach( (element,i) => {
    //     (element.orderQty == 0) ? sell.slice(i,1) : 0
    // });  
    // buy.forEach(element => {
    //     (element.orderQty == 0) ? buy.slice(i,1) : 0
    // })
    //JUNTAR LOS DOS ARRAYS DEvolcerlo

    var restantes = buy.concat(sell);
    return restantes
    
}

module.exports = executor;

