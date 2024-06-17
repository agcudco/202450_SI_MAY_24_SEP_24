let mapa = new Map();

mapa.set(1921,'Einsten')
    .set(1901,'Roentgen')
    .set(1902,'Zeeman');


console.log(mapa);

console.log('longitud del mapa: ',mapa.size);

console.log(mapa.get(1902));

console.log(mapa.delete(1921));

console.log(mapa.delete(2019));

console.log(mapa);

mapa.forEach((valor,clave)=>{
    console.log(`Clave: ${clave} y valor: ${valor}`);
});

let arrayFromMap = Array.from(mapa);
console.log(arrayFromMap);