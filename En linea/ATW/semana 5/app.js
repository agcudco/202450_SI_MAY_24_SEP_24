console.log("Estructuras de control");

//IF

//random()*21
let nota1 = Math.random()*20;

let nota = Math.round(nota1 * 100)/100;

/// numero aleatorio en un rango
//Math.random()*(max - min )+min;
let aletorio = Math.random()*(20 - 15)+15;
console.log("Numero random "+aletorio);

console.log("Nota aleatoria: "+nota);

if(nota < 13.99){
    console.log("Ud esta reprobado");
    let promedio = nota + 0.25;
    console.log("su nota final es: "+promedio);
}else if(nota > 14 && nota < 18){
    console.log("Su rendimiento fue aceptable");
}else if(nota >= 19 && nota < 20){
    console.log("Ud es un estudiante admirable");
}else if(nota == 20){
    console.log("Ud esta exonerado");
}
else{
    console.log("Ud APROBO");
    let notaFinal = nota + 0.25;
    console.log("Su nota final es: "+notaFinal);
}

//operador con el operador ternario
aletorio < 18 ? console.log("verdad") : console.log("no cumple");

/// estructura switch
let diaAl = Math.random()*(9 - 1)+1;
let dia = Math.floor(diaAl);

switch(dia){
    case 1: 
        alert(dia + " Es lunes");
        break;
    case 2:
        alert(dia + " Es martes");
        break;
    case 3:
        alert(dia + " Es miercoles");
        break;
    case 4:
        alert(dia + " Es jueves");
        break;
    case 5:
        alert(dia + " Es viernes");
        break;
    case 6:
        alert(dia + " Es sabado");
        break;
    case 7:
        alert(dia + " Es domingo");
        break;
    
    default:
        alert(dia +" Numero no valido");
}


let fruta = 'Platano';

switch(fruta){
    case 'Manzana':
        console.log("Las manzanas son rojas");
        
    case 'Naranja':
        console.log("Las naranjas son anaranjadas");
        
    case 'Platano':
        console.log("El Platano es amarillo");
        
    case 'Frutilla':
        console.log("La frutilla es roja");
        break;
    default:
        console.log('Fruta desconocida');
}

//bucle while
let num = 1;

while (num < 10 ){
    console.log("valor de num es: "+num);
    num++;
}



let car = 'a';

while(car==='a'){
    let numero = Math.floor(Math.random()*10);
    if(numero!=5){
        console.log("Numero generado "+numero);
    }else{
        console.log("Numero generado "+numero);
        car='b';
    }
}

let cont = 0;

do{    
    cont = Math.floor(Math.random()*12);
    console.log("valor del contador: "+cont);
}while(cont!=10);


