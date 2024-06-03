//var, let, const
const gravedad = 9.81;

let velocidad = 20;

function suma(){
    let a = 20;
    let b = 30;
    return a+b+velocidad;
}

console.log(suma());

let c = suma();

console.log(c);

//expresiones

// == comprobar si dos variables son iguales

if(gravedad == 9.81){
    console.log("Son iguales");
}else{
    console.log("NO son iguales");
}


console.log(gravedad === 9.81);


if(gravedad != 9.81){
    console.log("Son diferentes");
}else{
    console.log("NO son diferentes");
}

if(velocidad > 100){
    console.log("Es mayor");
}else{
    console.log("Es menor");
}

///and y or
if(velocidad >= 10 && gravedad <= 5){
    console.log("Afirmativo");
}else{
    console.log("No se cumple");
}

if(velocidad >= 10 || gravedad <= 5){
    console.log("Afirmativo");
}else{
    console.log("No se cumple");
}

console.log(gravedad>10);

console.log(velocidad >= 10 && gravedad <= 5 );
console.log(velocidad >= 10 || gravedad <= 5);


let edad = 18;

if(edad < 18){
    console.log("Menor de edad");
}else if(edad >=18 && edad <65){
    console.log("Adulto");
}else if(edad >=65 && edad <75){
    console.log("Tercera edad");
}else{
    console.log("Adulto mayor");
}