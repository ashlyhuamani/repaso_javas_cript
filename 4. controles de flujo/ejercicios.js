

let frutas=[`🍎`,`🍍`,`🍉`,`🍐`,`🍌`,`🍒`]
 
if(frutas.length<=0){
    console.log("al menos debes tener dos frutas en tu lista")

}else{
    let contador=0
    while(true){
        if(`🍐` == frutas[contador]){
            console.log(`la 🍐 se encontro en la posicion $ 
            {contador} `)
            break
        }
        contador++
    }
}
