# taller de repaso de javascript
>[!WARNING]
observacion: Quokka se debe ejecutar en cada archivo

>[!tip] Quokka detecta que en nuestro proyecto tenemos nodejs y lo ejecuta para poder ver la consola en vivo 

## 1. tipos de datos
En javascript se clasifican en dos grandes grupos:
>[!tip] 
javascript tiene funciones predenterminadas por ejemplo para mostrar un mensaje por consola console.log(), para poder verificar que tipo de dato estamos manejando en javascript tmabien tenemos una funcion por defecto llamada typeo()
### Primitivos
son datos que siempre exitiran 
1. numericos
 - enteros positivos
 - enteros negativos
 - decimal negativo 
 - decimal positivo
 - 
2. texto
 - caracteres            - 10001001 - 97 - A
 - caracteres especiales - 01001001 010100101 - 256 -@
 - string
3. booleanos
  - true  - 1
  - false - 0
### Estructurados
1. Array (listas)
   - array de tipo numerico
   - array de tipo string
   - array de tipo mixto
 - como esta estructurado un array en jvascripts
  ![alt text](asstes/imagen.png)
2. objetos(diccionarios)
 aon simbolos a las listas con la unica diferencia que en vez de tner valor e indice sus elementos trabajan con clave:valor
 - como estructurado un objepto en javascript
 - ![alt text](asstes/imagen.png)
## 2. variables constante (enlaces , bindig)
es la tecnica que se usa para poder apuntar a una dreccion en una direccion en memoria y al valor o dato relacionando o que se se encuentre almacenando en ese momento.
tenemos dos pasos para crear una variable/constante
1. primero aclarar la variable/contaste
2. segundo inicializar la variable/constate
   **observaciones** para crear una variable primero tenemos que crear el enlace luego darle el nombre de la variable/constante:para las varibales tenemos las polabras reservadas "keyword","let",var", para las constantes tenemos la palabra reservada "keyword" - "const"
   **recomendaciones** 
   - "let" usar cuando el valor tendra un avariable
   - "const" usar cuando el valor mismo simpre
   - "var" evitar usar, "let","var" ambos nos permiten - - crear variables su unica diferencia es el alcanse ambito o "scope"
   (averiguar)

## 3. operadores
Los operadores son símbolos o palabras que realizan 
Su clasificación general se devide en tres:
1. operadores unarios:             
Los soperadores unarios son  aquellos que estan ubicados a la izquierda del valor y que retornan de nuevo valor.
- operador de navegación 
1. operadores binarios:   
Los operadores binarios son aquellos que estan en medio de dos valores y que retornan un unico valor.
- operador aritmetico 
- operador de comparacion
- operador logicos 
2. operadores ternario:  
 Los operadores ternario son aquellos que evaluan tres valores y que retornan un solo valor 
## 4. conntrol de flujo
nuestros programas en javascript contienen mas de una sentencia y las sentencias son ejecutadas una a una como si fuera una historia, de arriba asia abajo como un camino recto.
### 1. control de decision (if-else)
javascript nos permite crear caminos alternativos en nuestros programas depndiendo de una decision a esto se lo conoce coomo caminos o ejcucion condicional , que ejecutara un sentancia u otra teniendo encuentra la condicion asi podemos crear multiples caminos u opciones en nuetros programas.
si tenemos un condicion verdadera se ejecutara una sentencia si tenemos una condicion false se ejecutara otra sentencia totalmente distinta.**observaiones** la ejecucion condicional rompe el flujo normal de un programa.
### 2. bucles (for) - tarea 
 Ejemplo 1: Imprimir números del 1 al 5
 ````js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Salida: 1 2 3 4 5
````

Ejemplo 2: Recorrer un arreglo y mostrar sus elementos
````js
const frutas = ["manzana", "banana", "cereza"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
// Salida: manzana banana cereza
````
### 3. bucles (while)- tarea con sus ejemplos en codigo 
1. Contar del 1 al 5 usando while
````js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
// Salida: 1 2 3 4 5
````
2.  Sumar números hasta que la suma sea mayor a 20
````js
let suma = 0;
let num = 1;
while (suma <= 20) {
  suma += num;
  console.log(`Sumando ${num}, suma actual: ${suma}`);
  num++;
}
// Salida:
// Sumando 1, suma actual: 1
// Sumando 2, suma actual: 3
// ...
````
3. Recorrer un arreglo con while
````js
const colores = ["rojo", "verde", "azul"];
let index = 0;
while (index < colores.length) {
  console.log(colores[index]);
  index++;
}
// Salida:
// rojo
// verde
// azul
````
## 4. funciones
la funciones en javascript son bloques de codigo que se ejcuta de manera independiente,
podemos decir temabien que son mini programas que tomas datos como entra y retornan
otros datos como salida.
las funciones son fundamentales pear el correcto ordenamiento de nuestro codigo ademas que nos permite separar 
de una maner mas ordenada nuetra logica evita repetir el codigo 
muchas veces.
existen tres tips de funciones 
## tipos de funciones 
#### 1. funciones las declaraciones 
este tipo de funciones es la mas concida y as mas usada 
su estructura es la siguiente:
![alt text](image.png)
````js
````
#### 2 funciones por exprecion 
Función para calcular el cuadrado de un número
````js
const cuadrado = function(num) {
  return num * num;
};
````

 Función para calcular el cubo de un número
 ````js
const cubo = function(num) {
  return num * num * num;
};
````
 Uso de las funciones
 ````js
let numero = 3;
console.log("El cuadrado de", numero, "es:", cuadrado(numero)); // 9
console.log("El cubo de", numero, "es:", cubo(numero));       // 27
````
#### 3 funcion flecha (arrow punction)
1. Función flecha para sumar dos números
````js
const sumar = (a, b) => a + b;
````
 2. Función flecha para verificar si un número es par
 ````js
const esPar = num => num % 2 === 0;
````
3. Función flecha para convertir una cadena a mayúsculas
 ````js
const convertirMayusculas = texto => texto.toUpperCase();
````
Uso de las funciones
````js
console.log(sumar(5, 7));                  // 12
console.log(esPar(10));                     // true
console.log(convertirMayusculas("hola"));  // HOLA
````
## 5. metodos para trabajar con datos estructurados
los metodos son funciones que dan funcionalidades extras a los tipos de datos en los cuales se aplica un metodo es antecidido por un  tipo de dato y un punto ,
**ejemplo**
el ejemplo mas claro de un metodo es el `length`- este metodo nos permite o nos retorna la cantidad de carecteres de string o la cantidad de elementos de una lista.
````js
"hola".length //4
[2,5,4,6,7].length //5
````
>[!TIP] los metodos en su mayoria solo se aplican a tipo de datos spring, lista y objetos, en  su gran parte son aplicados para listas.
#### 5.1. Metodos para string - candenas de texto
#### lenght
devuelve la longitud de una cadena 
````js
let mensaje="hola como estan"
console.log(mensaje.lenght)
//retorna -> 15
````
#### tolowerCase
devuelve una cadena en minusculas
````js
let texto="HOLA"
console.log(texto.tolowerCase())
//retorna -> hola
````
#### toUpperCase
devuelve una cadena en mayuscula
````js
let texto="hola"
console.log(texto.toUpperCase())
//retorna -> HOLA
````
#### concat
combina el texto de 2 o mas cadenas 
````js
let nombre="kcapa"
let saludo="hola"
// let concatenado=nombre+saludo
console.log(saludo.concat(nombre))

let cad1="oh"
let cad2="me"
let can3=" vengo"
console.log(cad1.concat(cad2,cad3))
// retorna -> oh me vengo
````
#### trim 
este metodo elimina los espacios que existen al inicio o final de un cadena o texto 
````js
let texto="hola   "
let nuevotexto=texto.trim() //hola
let otroTexto="hola   "
let nuevoOtroTexto=otrotexto.trim() //hola
````
#### slice 
este metodo nos permite extraer partes de una cadena, especificand sus indices, donde comenzar y hasta donde mostrar .
````js
let parrafo="hola soy percy"
// solo quiero que me muestre percy 
parrafo.slice(9)//percy
parrafo.slice(5,8)//soy
````
#### split
este motodo retorna una lista basandose en un separador que se le indique.
````js
let parrafo="solo se que nada se"
parrafo.split("")//["solo","se","que","nada","se"]
let url="google.com/search?=gatito"
let gatito=url.split("=")//["google.com/search?","gatito"]
console.log(gatito[1])//gatitos
let listafrutas="manzanas,tomate,pera,naranja"
listafrutas,split(",")
````
#### 5.2.Metodos para listas - Arrays
#### Crear una lista 
````js 
let lista=[
````
#### Agregando elemeno de una lista 
````js
lista[0]="manzanas"
````
#### Agregando alemento el final de la lista
el elemento "push" agrega el elemento al final de unaa lista  
````js
lst lista=[]
lista push(manzana)
````
#### Agregando elementos al inicio de una lista 
el metodo `unshitf` agrega un elemntos al inicio de una lista 
````js
let amigos=[`ronny`,`isbet`,`josema`]
amigos.unshitf("ronaled")
// retorna [ronaled, ronny, lisbet, josema]
````
####  Removiendo elementos de una lista 
#### pop
el elemento `pop` al contrario de push extrae el ultimo elemento de una lista .
#### shitf
el elemn¿ento `shitf` al contrarioo de unshitf extrae el primer elemento de una lista. 
#### Eliminando elementos de una lista 
elimina un elemneto en base a su indice 
````js 
let texto=["hola", "como","", "estas"]
delete texto [2]
````
#### aplice 
este metodo eimina el elemento en base a su indice y a la cantidad de elemento a eliminar 
````js
let vocal=[`a`,`e`,`i`,`o`,`u`]
vocal.splice(2,1)
vocal 
````
#### Combinando o uniedno listas (arrays)
#### concat 
este metodo crea un nuevo array que contiene nuevos elementos del array origina siguido por los elementos de uns o mas array proporcionados 
````js 
let amigosPrimaria=["alfredo","luis","edgar"]
let amigosSegundaria=["edison","remy","miguel"]
let amigosSuperior=["josue","marion","handy"]
let friends.concat(amigosPrimaria,amigosSegundaria,amigosSuperior)
friends Array(9)
````
#### Metodos para iterar una lsita 

#### Metodos para objetos 
#### forEach 
este metodo ejecuta una funcion anonima por cada elemento de un array. 
````js
let numero=[1,2,3,4,5,6]
numeros.forEach(n=>{console.log(n+1)})
````
#### map 
este metodo ejecuta una funcion anonima por cada elemento de un array, generando una lista.
````js
let numeros=[1,2,3,4,5,6]
let nuevosNumeros=numeros.map (n=>{return n+1})
console.log(nuewNumber)
````
#### Metodos para buscar elementos en una lsita 
#### includes 
este metodo busca un vaor en especifico y devuelve un valor boleano en caso de encontrar el valor buscado retorna true caso encontrado false.
````js
let vocales=[`a`,`i`,`o`,`u`]
let buscaE=vocales.includes(`e`)
//retorna false
let buscaA=vocales.includes(`a`)
//retorna true 
````
#### filter 
este metodo se usa para encontar un elementos dentro de una lista que cumplan con cierta condicion
````js
let numeros=[2,4,5,7,8,2,6]
//deseo una lista con los numeros que sean menor a 4
let nuevosnumeros=numeros.filter(n=>{n<4})
````
#### find
este metodo se usa para encontrar el primer elemento que cumpla con cierta conndición, a diferencia del `filter` solo retorna un elemento al que coincida con la condicion  
````js
let listanumeros=[10,11,3,20,5]
// devolver el numero menor a 10
let menordiez=listanumero.find(n=>{return n>10})
console.log(menordiez)
//retorna 11 - el primer elemento que coincide con la condicion
````
#### Metodos para objeto
#### creando un objeto
````js
//objeto o diccionario vacio
let objeto={}
````
#### agregamos elementos a un objeto
recuerden que un objeto de un elemento conformado por clave:valor 
````js
objeto["nombre"]="ruth"
objeto["edad"]=18
objeto["cui"]=08674523
````
#### actualizando elementos de nuestro objeto 
para realizar la ctualizacion del valor de un elemento tenemos que acceder a travz de su clave y asignarle el nuevo vallor **observaciones** la clave debe ser la misma a catualizar que no existir crear una nueva
````js
objeto["edad"]=20
````
#### eliminando un elemento de un objeto 
para eliminar un elemn¿ento de un objeto hacemos uso de un operador unario `delete`.
````js
delete objeto.CUI
````
## es6
### arrow function
### destructuracion
este es una tecnica para el desampaquetado de lista u objetos en variables esta tecnica facilita el acceso a los elementos de una lista u objeto 
````js
let alumno={
  "nombre":"miguel",
  "edad":"17"
}
console.log(alumno.nombre )
console.log(aumno["edad"])
//destructuracion 
let {nombre,edad}=alumno

````
### DOM
- segun sus siglas es modelo de objeto de ducumento 
- para web es una api del navegador, eso significa que nos proporciona unna interfaz prar comunicarnos entre html y javascript 
- segun du funcionalidad DOM es el encargdo de convertir documentos `html` y `css` es objetos `javascript`, o en un arbol de objetos.
- para `javascript` el `DOM` es un objeto con el que podemos leer y modificar a nuestro antojo 

la menera como `Dom` nos permite interacturar con nuestros ducumentos `html` y `css` son a travez de `selectores`.

### Selectores 
es la manera de como podremos manipular el `DOM` este el primer paso para dominar para realizar operacines de lectura o modificaciones. 

#### captura de elementos 
#### selectores tradicionales 
estos selctores son metodos del documento por que `DOM `trabaja con el documento .

````js
//selectores por id 
documento.getElementById("mi_div")
//<section id="mi_div></section>
//--selectores por su atributo name 
//<input name="dni" value="345556>
//dni="345556"
document.getElementByName("dni")
//todos los elementos
//--selection por su etiqueta tag
//<h1></h1>
document.getElementBytagName("h1")
//--selectores por su class
//<div class=rojo></div>
document.getElementByClassName("rojo")
````
> [!TIP] en la programacion web `DAW` se hace uso de dos tecnicas,1 .obtecion de datos (get), 2. creacion de datos (set), setter and getter 

##### selectores modernos o avanzados 
````js
//para la captura de un elemento, el el primer elemento que conincida con la busqueda 
document.querySelector()
//busca y obtine el elemento que concida con el nobre del id
document.queryselector(".nombre_clase")
//busca y obtine el elemento que concida con el nombre id
document.querySelectr("#nombre_id")
//busca y obtine el elemento que concida con el nombre de la etiqueta 
document.querySelector("p")
document.querySelector(".input[name="dni"]")

//para acceder a tosos las concidencias 
// esto retorna un array con todas las concidencias
document.querySelectorAll(".nombre_clase")
````
#### acceder a contwnido y actualizar contenido

una vez capturada el elemento con `querySelector` pueden hacer uso de `textContent` para acceder al contenido del elemento, de esta misma forma podemos editar o actualizar el contenido `textConten="hola"` esto es lo que es actualizar el contenido anterior con ell contenido que se le asignando.
`textContent` solo se usa si deseamos agregar contenido de tipo texto. si deseamos setear o agregar contenir do de tipo `html` se devera usa `innerHTML`
````js
//<p id="text"> este es un contenido</p>
let etiquetaP=documet.querySelector("#text")
console.log(etiquetaP.textContec)
//este es un contenido 
etiquetaP.textContent="nuevo texto"
console.log(etiquetP.TextContent)
// nuevo texto
//<div id="contenerdor"></div>
let div=document.querySelector("#contenedor")
div.innerHTML="<pparrafo</p>" este es un 

````