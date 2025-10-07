let objeto={}
// objeto: si la clave existe lo crea
// si la clave existe entonces actualiza el valor 
objeto["nombre"]="ruth"
objeto["nombre"]="jose"
objeto["edad"]=20
console.log(objeto)

//notacion de tipo punto
console.log(objeto.nombre)
//notacion de tipo llaves
console.log(objeto["nombre"])
console.log(objeto)

for (n in objeto){
    console.log(objeto[n])
}
// console.log(objeto.values(objeto))
// console.log(objeto)

