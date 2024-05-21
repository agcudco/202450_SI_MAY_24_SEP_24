class MiComponente extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        console.log('se creo el elemento dentro del DOM');
        this.innerHTML = '<h1>Metodo connectedCallback()</h1>';
        this.addEventListener('click',this.clickH1);
    }

    disconnectedCallaback(){
        console.log('Elemento elminado del DOM');
        this.removeEventListener('click',this.clickH1);
    }

    clickH1(){
        alert('Elemento clickeado');
    }
}

window.customElements.define('mi-elemento',MiComponente);