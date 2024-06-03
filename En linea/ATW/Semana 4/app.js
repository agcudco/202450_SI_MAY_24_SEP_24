//mostrar un mensaje en console
console.log("Hola mundo desde JS");

//alert("Inicio de JS");

a = 10;

console.log("valor de a es: "+a);

a = "hola mundo";

console.log("valor de a es: "+a);

/**
 * TIPOS DE DATOS DE DATOS
 */

//strings o cadenas de texto
b = "Hola";
c = "mundo";
d = "desde js";

e = 'otra variable';


let saludo = new String("Hola mundo 2");

console.log(saludo);

nombre = "  Angel Cudco ";

console.log(nombre);

//metodos o funciones sobre strings
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(nombre.trim());
console.log(nombre.startsWith(a));

console.log(nombre.repeat(5));

//numeros
console.log("ENTEROS");
n1 = 10;
n2 = 20;
n3 = n1 + n2;
console.log(n1+" + "+n2+" = "+n3);

let n4 = -10;
let n5 = -20;
let n6 = n4 + n5;
console.log(n6);

const pi = 3.14159;
console.log(3*pi);

let n7 = 19.20;
let n8 = "10";
let n9 = n7 + n8;

console.log(n7+" + "+n8+" + "+n9);

let n10 = n7 + Number(n8);
console.log(n7+" + "+n8+" + "+n10);


//booleanos
let isOpen = true;
const hasAccess = false;

console.log(isOpen + " - "+ hasAccess);

///no definidos
let noAsignado = undefined;
let missing;

//symbol
const sym1 = Symbol('descripcion');
console.log(sym1);

//bigInt 2^253-1
let big1 = 1234567890123456789012345678901234567890n;
console.log(big1);