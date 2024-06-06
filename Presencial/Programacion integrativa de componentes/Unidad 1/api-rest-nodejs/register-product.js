class RegisterProduct extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: Arial, sans-serif;
                }
                form {
                    max-width: 300px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                }
                input, button {
                    margin-bottom: 10px;
                    padding: 10px;
                    font-size: 1rem;
                }
                button {
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            
            <form id="book-form">
                <input type="text" id="titulo" name="titulo" placeholder="Nombre del libro" required>
                <input type="text" id="autor" name="autor" placeholder="Nombre del autor" required>
                <input type="text" id="editorial" name="editorial" placeholder="Nombre de la editorial" required>
                <input type="number" id="nropaginas" name="nropaginas" placeholder="Numero de paginas" required>
                <input type="number" id="stock" name="stock" placeholder="Stock" required>
                <input type="number" id="estado" name="estado" placeholder="1: Activo - 0: Inactivo" required>
                
                <button type="submit">Registrar Libro</button>
            </form>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this._handleSubmit = (event) => {
            event.preventDefault(); 
            const titulo = this.shadowRoot.querySelector('#titulo').value;
            const autor = this.shadowRoot.querySelector('#autor').value;
            const editorial = this.shadowRoot.querySelector('#editorial').value;
            const nropaginas = this.shadowRoot.querySelector('#nropaginas').value;
            const stock = this.shadowRoot.querySelector('#stock').value;
            const estado = this.shadowRoot.querySelector('#estado').value;

            fetch('http://127.0.0.1:3000/libros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ titulo, autor, editorial,nropaginas,stock,estado}),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Libro registrado:', data);
                alert('Libro registrado con éxito');
                this.limpiarCampos();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al registrar el Libro');
            });
        };

        this.shadowRoot.querySelector('#book-form').addEventListener('submit', this._handleSubmit);
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#book-form').removeEventListener('submit', this._handleSubmit);
    }

    limpiarCampos=()=>{
        this.shadowRoot.querySelector('#titulo').value='';
        this.shadowRoot.querySelector('#autor').value='';
        this.shadowRoot.querySelector('#editorial').value='';
        this.shadowRoot.querySelector('#nropaginas').value='';
        this.shadowRoot.querySelector('#stock').value='';
        this.shadowRoot.querySelector('#estado').value='';
    }
}

customElements.define('register-product', RegisterProduct);
