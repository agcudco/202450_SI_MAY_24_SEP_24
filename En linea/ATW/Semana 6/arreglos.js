console.log("Arrays");

let frutas = ['naranja','manzana','pera','toronja'];

let peliculas = [];

console.log(frutas[2]);

peliculas[0]="Star Wars";

console.log(peliculas[0]);

let myArray = ['Star Wars',23, true,34.5];

//la longitud de un arreglo

let peliculasFav = ['Star Wars','Kill Bill','Alien','Annabelle'];

console.log("la longitud de pelicuas es: "+peliculasFav.length);

console.log('Agregar elementos al array');

peliculasFav.push('Rocky');

for(let i=0;i<peliculasFav.length;i++){
    console.log(peliculasFav[i]);
}

console.log('Agregar elementos al inicio del arrray: unshift');
peliculasFav.unshift('La era del hielo');
for(let i=0;i<peliculasFav.length;i++){
    console.log(peliculasFav[i]);
}

console.log("Eliminar al ultimo elemento: pop");
peliculasFav.pop();

console.log("Eliminar el primer elemento: shift")
peliculasFav.shift();

for(let i=0;i<peliculasFav.length;i++){
    console.log(peliculasFav[i]);
}

console.log("Eliminar elementos especificos con SPLICE");
let colores = ['rojo','azul','violeta','naranja','amarillo'];

console.log("Arreglo original: ",colores);
console.log("ELiminar dos elementos a partir del indicie 1");
let coloresEliminados = colores.splice(1,2);
console.log("Arreglo original despues de eliminar: ",colores);
console.log("Elementos eliminados: ",coloresEliminados);

colores.splice(2,1,"rosa");
console.log("Arreglo: ",colores);

colores.splice(1,1,"negro",'blanco')
console.log("Arreglo: ",colores);

colores.splice(3,0,'Gris','Cian');
console.log("Arreglo: ",colores);