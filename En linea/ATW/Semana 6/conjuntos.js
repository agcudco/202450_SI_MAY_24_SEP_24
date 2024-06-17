let conjunto = new Set();

conjunto.add(1);
conjunto.add(3);
conjunto.add(5);
conjunto.add(7);

console.log('Elementos del conjunto: ',conjunto);

conjunto.add(10).add(20).add(30);

console.log('ELementos mediante un foreach');
conjunto.forEach(elemento=>{
    console.log(elemento);
});


let conjunto2 = new Set(['Juanito','Jaimito','Pepito','Mary']);
console.log(conjunto2);

conjunto2.delete('Pepito');
console.log(conjunto2);

let arrayFromSet = Array.from(conjunto);
console.log(conjunto);
console.log(arrayFromSet);