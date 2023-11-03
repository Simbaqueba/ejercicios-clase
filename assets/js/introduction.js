//name = $name = _name

let nombre = 'Pepe';
let arreglo = [1,4,68,32];

console.log(`él se llama ${nombre}\naa`); //print("él se llama", nombre, "\naa")

let a=5;
let b= 10;
console.log(`La suma es ${a+b}`);
console.log()
document.write(`hello <br><h1>world</h1>`)

/*Operadores
Comparación
== Igual ("2" = 2, true)
=== Identico ("2" = 2, false)
!= Diferente
!== Totalmente diferente
<, >, <=, >=

Logicos 
&& = And
| | = Or
! = No

*/



let num1 = parseInt(prompt("Escribir el primer número"))
console.log(`${num1}`);
let num2 = parseInt(prompt("Escribir el primer número"))
console.log(`${num2}`);

function sumar(num1, num2) {
    return num1 + num2;
}
function resta(num1, num2) {
    return num1 - num2;
}
function multi(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}
function div2(num1, num2) {
    return num1 % num2;
}

document.write(`Suma: ${sumar(num1,num2)}<br>`)
document.write(`Resta: ${resta(num1,num2)}<br>`)
document.write(`Multiplicación: ${multi(num1,num2)}<br>`)
document.write(`División: ${div(num1,num2)}<br>`)
document.write(`Sobrante: ${div2(num1,num2)}<br>`)

