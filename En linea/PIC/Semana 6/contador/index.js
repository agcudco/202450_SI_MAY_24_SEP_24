class MyCounter extends HTMLElement {
    constructor() {
        super();

        //creacion del contenido del shadow dom
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');

        wrapper.innerHTML = `
            <style>
                div{
                    font-family:Arial, sans-serif;
                    display: inline-block;
                    padding: 10px;
                    border-radius: 5px;
                    background-color: #f9f9f9;
                }
                button{
                    font-size: 1.2em;
                    padding: 5px 10px;
                    margin: 0 5px;
                    border: none;
                    border-radius: 3px;
                    background: #007bff;
                    color: white;
                }
                button:hover{
                    background: #0056b3;
                }
            </style>
            <div>
                <button id="btnRestar">-</button>
                <span id="count">0</span>
                <button id="btnSUmar">+</button>
            </div>
        `;
        this.shadowRoot.append(wrapper);
        this.count = 0;
    }

    increment() {
        this.cont++;
        this.updateCount();
    }

    decrement() {
        this.cont--;
        this.updateCount();
    }

    updateCount() {
        this.shadowRoot.getElementById('count').textContent = this.count;
    }

    connectedCallback(){
        this.shadowRoot.getElementById('btnRestar').addEventListener('click',()=>this.decrement());
        this.shadowRoot.getElementById('btnSUmar').addEventListener('click',()=>this.increment());
    }

}

window.customElements.define("my-counter", MyCounter);