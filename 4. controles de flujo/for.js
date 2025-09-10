/*
sintaxys de for 
primero el keyword,condicion, expresion, cuerpo (es una palabra reservada)
partes de la condicion(simpre se va utilizar la comparación) - exprecion inicial, condicion, expresion final
*/
// suma normal inicial=inicial + 1
//incremento inicial ++
//inicial+=1
for (let inicial=1;inicial<10;inicial++){              /* es el sintaxis de for */
    console.log("hola")  
}
//for es usado para acceder o recorrer(iterer) los elementos de una lista o diccionario 
let amigos=[`alex`,`ruth`,`jose ma`,`william`]
console.log(amigos)
console.log(amigos[3])
//existe un metodo para saber la cantidad de elementos que tiene una lista length
console.log(amigos.length)
//para acceder al ultimo elemento podemos hacer uso de metodod length y restarle 1

console.log(amigos[amigos.length - 1])

//ejercio recorrer o iterar la lista de amigos de for 
console.log(amigos[0])
console.log(amigos[1])
console.log(amigos[2])
console.log(amigos[3])

for (let i=0;i<amigos.length;i++){
    console.log(amigos[i])
}


let frutas=[`🍎`,`🍍`,`🍉`,`🍐`,`🍌`,`🍒`]
 
console.log(frutas[frutas.length-3])
for (let i=frutas.length-3;i<frutas.length;i++){
    console.log(frutas[i])
}

for (let i=0;i<frutas.length;i++){
    if(frutas[i]==`🍎` frutas[i]==`🍐`)
        console.log(frutas[i])
}
