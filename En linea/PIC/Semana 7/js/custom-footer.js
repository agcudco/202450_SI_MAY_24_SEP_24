export class CustomFooter extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');

        template.innerHTML = `
            <style>
                footer{
                    background-color:#333;
                    color:white;
                    text-align:center;
                    padding: 1rem;
                    width:100%;
                    bottom:0;
                    position:fixed;
                }
            </style>
            <footer>
                <slot name="text-footer">Texto del pie</slot>
            </footer>
        `;

        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('my-footer', CustomFooter);