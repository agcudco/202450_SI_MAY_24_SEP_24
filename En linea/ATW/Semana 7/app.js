const entradas = document.getElementById('entradas');
const tituloEntrada = document.getElementById('tituloEntrada');
const contenidoEntrada = document.getElementById('contenidoEntrada');
const btnAgregarEntrada = document.getElementById('agregarEntrada');

btnAgregarEntrada.addEventListener('click',function(){
    const nuevaEntrada = document.createElement('div');
    nuevaEntrada.classList.add('entrada');

    const titulo = document.createElement('h3');
    titulo.textContent = tituloEntrada.value;

    const parrafo = document.createElement('p');
    parrafo.textContent=contenidoEntrada.value;
    
    nuevaEntrada.appendChild(titulo);
    nuevaEntrada.appendChild(parrafo);
    
    entradas.appendChild(nuevaEntrada);

    tituloEntrada.value='';
    contenidoEntrada.value='';
});