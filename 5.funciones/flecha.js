//es la nueva vercion de ecma script para laa creacion de funciones, el objetivo de esta funciones 
//el objetivo de esta funcion es facilitar la creacionde la funcion y que el cofigo sea legible
const suma=(a,b)=>{return a+b}
console.log(suma(23,45))

const saludoNombre=nombre=>{
    let mensaje=`hola, ${nombre}`
    return mensaje
}
console.log(saludoNombre("josema"))

const saludo=()=>{
    return "hola"
}
console.log(saludo())
