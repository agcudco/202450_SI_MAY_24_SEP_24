let matriz = [
    [2, 5, 8],
    [1, 3, 5],
    [10, 12, 14],
    [3, 6, 9]
];

console.log(matriz[0][2]);

matriz[1][1] = 0;

console.log(matriz);

matriz.push([20, 21, 22]);

matriz.push([35, 36, 37]);

console.log(matriz);


matriz.forEach((fila,i)=>{
    fila.forEach((elemento,j)=>{
        console.log(`Elemento en la fila ${i}, columna ${j} es: ${elemento}`);
    });
});


console.log('impresion tradicional');

for(let f=0; f<matriz.length;f++){
    for(let c=0;c<matriz[f].length;c++){
        console.log(`El elemento de la fila: ${f}, columna ${c} es: ${matriz[f][c]}`);
    }
}