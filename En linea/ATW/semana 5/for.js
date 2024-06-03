for(let i=0;i<=10; i++){
    console.log(i);
}

const frutas = ['manzana','pera','limon','sandia'];
for(let f=0;f<frutas.length;f++){
    console.log(frutas[f]);
}

console.log("For con of");
for(let fruta of frutas){
    console.log(fruta);
}

console.log("foreach primera forma");
frutas.forEach(function(fruta){
    console.log(fruta);
});

console.log("Foreach con funciones lambda");

frutas.forEach(f=>{
    console.log(f);
});

const matrix = [
    [2, 4, 6],
    [1, 3, 5],
    [10, 11, 12]
];

console.log("Matriz ");
for(let i=0;i<matrix.length;i++){
    for(let j=0; j<matrix[i].length;j++){
        console.log(matrix[j][i]);
    }
}

//for con objetos
console.log('for con objetos: ');
const persona ={
    nombre: 'Angel',
    profesion: 'Docente',
    ciudad: 'Riobamba',
    telefono: '0996824309'
}

for(let p in persona){
    console.log(p + " : "+persona[p]);
}
