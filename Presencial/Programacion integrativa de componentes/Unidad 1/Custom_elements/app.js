class CustomButton extends HTMLElement{
    constructor(){
        super();
        this.addEventListener('click',()=>{
            console.log('Boton personalizado');
            alert('Mi boton');
        });
    }
}

window.customElements.define('mi-boton',CustomButton);

class CustomButton2 extends HTMLButtonElement{
    constructor(){
        super();
        this.addEventListener('click',()=>{
            alert('Boton dos');
        });
    }
}

window.customElements.define('nuevo-boton',CustomButton2,{extends: 'button'});

class Saludar extends HTMLElement{
    constructor(){
        super();
        const contenido = document.querySelector('#tmplSaludo').content;
        this.appendChild(document.importNode(contenido,true));
    }
}

window.customElements.define('nuevo-saludo',Saludar);


class CustomMenu extends HTMLElement{
    constructor(){
        super();

        const opciones = ["Inicio","Productos","Servicios","Contactos","Gestion"];

        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');

        opciones.forEach(opcion=>{
            const item = document.createElement('li');
            item.textContent = opcion;
            menuContainer.appendChild(item);
        });

        this.appendChild(menuContainer);

    }
}

window.customElements.define('nuevo-menu',CustomMenu);