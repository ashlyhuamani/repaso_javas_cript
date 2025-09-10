//operadores unarios
//operador de negacion 
//operador esta es la izquierda del valor como resultado obtenemos otro valor
let negacion= !false
//exprecion es u valor complejo que sera solucionado y nos producira o retorna un nuevo valor
console.log(negacion)
//operadores binarios
//son los que evaluan dos valores y nos dan como resultado un nuevo valor
let suma=34+20
let resta=4-2
let producto=4*5
let devicion=3/3
let potencia=3**2
let residuo=10%3
console.log(potencia)
// tarea operadores  de comparacion 
// Los operadores de comparación se utilizan para comparar dos valores y devolver un valor booleano (true o false).
let a = 5;
let b = 10;

console.log(a == b);  // false (igualdad)
console.log(a != b);  // true  (diferente)
console.log(a > b);   // false (mayor que)
console.log(a < b);   // true  (menor que)
console.log(a >= 5);  // true  (mayor o igual que)
console.log(b <= 10); // true  (menor o igual que)
//operador logicos
//Los operadores lógicos combinan expresiones booleanas y devuelven true o false.

//&& (AND): verdadero si ambas expresiones son verdaderas.
//|| (OR): verdadero si al menos una expresión es verdadera.
//! (NOT): invierte el valor booleano.
let x = true;
let y = false;

console.log(x && y); // false
console.log(x || y); // true
console.log(!x);     // false
console.log(!y);     // true

//operador ternario
//1. el primer valor deve ser un valor boleano
//2. el segundo valor se mostrara si el primer valor es verdadero
//3. el tercero valor se mostrara si el valor es falso
//Es una forma corta de escribir una expresión condicional.
//Sintaxis: 
//condición ? expresión_si_verdadero : expresión_si_falso;
//ejemplo:
let edad= 18;
let puedeEntrar = (edad >= 18) ? "Puede entrar" : "No puede entrar";
console.log(puedeEntrar);