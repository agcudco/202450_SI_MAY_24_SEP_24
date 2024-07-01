export class CustomHeader extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:'open'});

        const template = document.createElement('template');

        template.innerHTML=`
            <style>
                header{
                    background-color:#333;
                    color:white;
                    text-align:center;
                    padding: 1rem;
                }
            </style>
            <header>
                <slot name="text-header">Texto por defecto</slot>
            </header>
        `;

        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('my-header',CustomHeader);