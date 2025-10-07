let datosAlumno={
    "nombre":"antonio",
    "apellido":"panqueñueba"
}
//agregar edad y sexo
//actualizar el apellido 
// eliminar sexo

let alumno=[
    {"nombre":"ruth","edad":19,"CUI":23456789 },
    {"nombre":"Flor","edad":18,"CUI":64732297},
    {"nombre":"ashly","edad":19,"CUI":54673278 }
]
// deseo mostrar una lista solo se los menores a 19 
let listaMenores=alumno.filter(al=>al.edad<19)
console.log(listaMenores)
// actualizar la lista de objetos y agregale el genero femenino
// a todos 
let listaActualizada=alumno.map(el=>{
    return el["genero"]="femenino"
})
console.log(listaActualizada)