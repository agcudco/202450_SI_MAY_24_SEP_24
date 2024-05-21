class MenuPersonalizado extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        //container del menu
        this.menuContainer = document.createElement('div');
        this.menuContainer.classList.add('menu-container');

        const style = document.createElement('style');
        style.textContent = `
            .menu-container {
                display: flex;
                flex-direction: column;
                background-color: #333;
                color: white;
                width: 200px;
                border-radius: 8px;
                font-family: Arial, sans-serif;
            }

            .menu-item{
                padding: 10px 15px;
                cursor:  pointer;
                transition: background-color 0.3s;
            }

            .menu-item:hover{
                background-color:#444;
            }
        `;

        this.menuItems = ['Home','About','Services','Contact','Espe'];

        this.menuItems.forEach(menuItem =>{
            const item = document.createElement('div');
            item.textContent = menuItem;
            item.classList.add('menu-item');
            this.menuContainer.appendChild(item);
        });

        this.shadowRoot.append(style,this.menuContainer);
        
    }

    connectedCallback(){
        console.log("Elemento creeado en el DOM");
        this.menuContainer.querySelectorAll('.menu-item').forEach(item =>{
            item.addEventListener('click',this.handleItemClick);
        });
    }

    disconnectedCallback(){
        console.log("Elemento destruido en el DOM");
        this.menuContainer.querySelectorAll('.menu-item').forEach(item =>{
            item.removeEventListener('click',this.handleItemClick);
        });
    }    

    handleItemClick(event){
        alert(`El elemento ${event.target.textContent} fue clickeado`);
    }
}

window.customElements.define('mi-menu',MenuPersonalizado);