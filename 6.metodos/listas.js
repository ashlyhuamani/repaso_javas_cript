let lista=[]
lista[0]="manzana"
lista[1]="pera"
console.log(lista.length)
console.log(lista)

// 1 crear una lsita vacia y agregar una manera automatica los nuemeros
//pares que exiten entre 0 y 20
let nuemerosPares=[]
for(let i=1 ; i<=20; i++){
    if(i%2==0){
        nuemerosPares[nuemerosPares.length]=i
    }
}

let amigos=[`e`,`i`,`o`]
amigos.unshift(`a`)
amigos.unshift(`u`)
console.log(amigos)

let frutas=[]
let cerecita=frutas.pop()
cerecita 
frutas 

let texto=["hola","como","estas"]

const mifuncion=a=>{}
let nuemeros=["1","2","3","4","5","6"]
nuemeros.forEach(n=>{n})

let fruit=[`pera`,`higo`,`tomate`]
let estapera=fruit.includes(`pera`)
console.log(estapera)

let listaNumero=[10,11,3,20,5]
//obtener en una lista los numeros mayores a 10
let mayordiez=listaNumero.filter(n=>{return n> 10})
console.log(mayordiez)

// de una lista de numero del 1 a 10 usando un filter eliminar
// el numero 1
let unoaldiez=[1,2,3,4,5,6,7,8,9,10]
let listasinuno=unoaldiez.filter(n=>{return n!=1})
console.log(listasinuno)
