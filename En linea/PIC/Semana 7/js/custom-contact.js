export class CustomContact extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'});

        const template = document.createElement('template');

        template.innerHTML=`
            <style>
                #custom-contact{
                    text-align:center;
                }
            </style>
            <div id="custom-contact">
                <slot name="nombre">Default name</slot>
                <slot name="telefono">Default phone</slot>
                <slot name="correo">Default mail</slot>
            </div>
        `;

        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("my-contact",CustomContact);