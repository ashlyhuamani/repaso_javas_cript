let numeros=[3,4,7,8,5,4]
let [a,b]=numeros

let [,c,,d]=numeros

let[h,...rest]=numeros
rest

let alumno={
    "nombre":"ronny",
    "edad":20
}
alumno["dni"]=23456789
//spread opation ...
let actualizaAlumno={...alumno,"t_sangre":"b+"}
let {nombre,t_sangre}=actualizaAlumno
nombre
t_sangre 

// agregar con el operador spread las letras faltantes  de
//las vocales 
//primera forma
let vocales=[`a`,`e`]
let vocalesfaltantes=[`i`,`o`,`u`]
unirvocales=[...vocales,...vocalesfaltantes]
unirvocales
//segunda forma
let completavocales=[...vocales,`i`,`o`,`u`]
completavocales
//tercera forma 
let [firtsvocales,secondsvocales]=[`a`,`e`]
let vocalescompletas=[firtsvocales,secondsvocales,`i`,`o`,`u`]
vocalescompletas



let texto="hola como estan alumnos"
let nuevalista=[...texto]
nuevalista