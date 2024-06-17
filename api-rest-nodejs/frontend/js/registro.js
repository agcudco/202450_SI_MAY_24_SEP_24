class RegistroProductos extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host{
                    display:block;
                }
                form{
                    max-width: 300px;
                    display: flex;
                    flex-direction: column;
                    margin: 0 auto;
                }

                input, button{
                    padding: 10px;
                    margin-bottom: 10px;
                    font-size: 1rem;
                }

                button{
                    background-color: greenyellow;
                    color: white;
                    cursor: pointer;
                    border: none;
                }

                button:hover{
                    background-color: red;
                    color: black;
                }
            </style>
            <form id="form-libros">
                <input type="text" id="titulo" name="titulo" placeholder="Ingrese el titulo" required>
                <input type="text" id="autor" name="autor" placeholder="Ingrese el autor" required>
                <input type="text" id="editorial" name="editorial" placeholder="Ingrese la editorial" required>
                <input type="number" id="nropaginas" name="nropaginas" placeholder="Ingrese el numero de paginas" required>
                <input type="number" id="stock" name="stock" placeholder="Ingrese el stock" required>
                <input type="number" id="estado" name="estado" placeholder="1: Activo - 0: Inactivo" required>
                <button type="submit">Guardar</button>
            </form>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.handleSubmit = (event) => {
            event.preventDefault();
            const titulo = this.shadowRoot.querySelector('#titulo').value;
            const autor = this.shadowRoot.querySelector('#autor').value;
            const editorial = this.shadowRoot.querySelector('#editorial').value;
            const nropaginas = this.shadowRoot.querySelector('#nropaginas').value;
            const stock = this.shadowRoot.querySelector('#stock').value;
            const estado = this.shadowRoot.querySelector('#estado').value;

            fetch('http://localhost:3000/libros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ titulo, autor, editorial, nropaginas, stock, estado })
            })
                .then(response => response.json())
                .then(data => {
                    alert('Libro registrado exitosamente', data);
                    this.limpiarCampos();
                })
                .catch(error => {
                    alert("Error al registrar ", error);
                })
        }
        this.shadowRoot.querySelector('#form-libros').addEventListener('submit', this.handleSubmit);
    }

    disconnectedCallback(){
        this.shadowRoot.querySelector('#form-libros').removeEventListener('submit', this.handleSubmit);
    }

    limpiarCampos = () => {
        this.shadowRoot.querySelector('#titulo').value='';
        this.shadowRoot.querySelector('#autor').value='';
        this.shadowRoot.querySelector('#editorial').value='';
        this.shadowRoot.querySelector('#nropaginas').value='';
        this.shadowRoot.querySelector('#stock').value='';
        this.shadowRoot.querySelector('#estado').value='';
    }

}

window.customElements.define("registro-libros", RegistroProductos);