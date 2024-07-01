export class CustomMenu extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:'open'});
        const template = document.createElement('template');
        template.innerHTML=`        
            <style>
                nav{
                    background-color: #444;
                    color: white;
                    padding: 1rem;
                }
                nav ul{
                    list-style-type: none;
                    padding: 0;
                }
                nav ul li{
                    display: inline;
                    margin-right: 1rem;
                    color: white;
                }
                a{
                    color: white;
                }
            </style>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        `;

        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('my-menu',CustomMenu);