const imagenes = document.querySelectorAll('.carrusel img');
const btnAnterior = document.querySelector('.btnAnterior');
const btnSiguiente = document.querySelector('.btnSiguiente');

let indiceActual = 0;

btnAnterior.addEventListener('click', () => {
    indiceActual--;
    console.log("indice actual: "+indiceActual);
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
        console.log("indice actual: "+indiceActual);
    }
    mostrarImagenes(indiceActual);
});

btnSiguiente.addEventListener('click', () => {
    indiceActual++;
    console.log("indice actual: "+indiceActual);
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
        console.log("indice actual: "+indiceActual);
    }
    mostrarImagenes(indiceActual);
});

function mostrarImagenes(indice) {
    imagenes.forEach((imagen, i) => {
        imagen.style.display = 'none';
    });

    imagenes[indice].style.display = 'block';
}

mostrarImagenes(indiceActual);