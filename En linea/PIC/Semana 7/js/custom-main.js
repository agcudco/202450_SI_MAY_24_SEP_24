export class CustomMain extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                main{
                    padding: 1rem;
                }

                table{
                    width: 100%;
                    border-collapse: collapse;
                }

                table, th, td {
                    border: 1px solid blue;
                }

                thead{
                    background-color: #444;
                    color: white;
                }

                th, td {
                    padding: 0.5rem;
                    text-align: left;
                }
            </style>
            <main>
                <slot name="table-content">Table Text</slot>
                <table id="product-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </main>
        `;

        shadow.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const products = [
            {id:1,name:'Laptop hp i9',price:'$500'},
            {id:2,name:'Laptop hp gamer i9',price:'$1500'},
            {id:3,name:'External Hard Disk 8TB',price:'$600'},
            {id:4,name:'Flash Memory 64GB',price:'$50'}
        ];

        const tableBody = this.shadowRoot.querySelector('#product-table tbody');
        products.forEach(product =>{
            const row = document.createElement('tr');
            row.innerHTML=`
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

customElements.define('my-main', CustomMain);