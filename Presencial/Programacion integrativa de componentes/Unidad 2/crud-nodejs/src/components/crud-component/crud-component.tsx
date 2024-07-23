import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'crud-component',
  styleUrl: 'crud-component.css',
  shadow: true,
})
export class CrudComponent {

  @State() libros: any[] = [];
  @State() libro = {
    "id": null,
    "titulo": "",
    "autor": "",
    "editorial": "",
    "nropaginas": "",
    "stock": "",
    "estado": ""
  };

  baseUrl = 'http://localhost:3000/libros';

  componentWillLoad() {
    this.fetchLibros();
  }

  //devolver libros
  async fetchLibros() {
    try {
      const response = await fetch(this.baseUrl);
      const data = await response.json();
      this.libros = data;
    } catch (error) {
      console.log('Error fetching libros', error);
    }
  }


  //registrar libros
  async createLibro() {
    try {
      await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.libro)
      });
      this.fetchLibros();
      this.resetForm();
    } catch (error) {
      console.log('Error creating libros', error);
    }
  }

  async updateLibro(id) {
    try {
      await fetch(`${this.baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.libro)
      });
      this.fetchLibros();
      this.resetForm();
    } catch (error) {
      console.log('Error updating libros', error);
    }
  }

  async deleteLibro(id) {
    try {
      await fetch(`${this.baseUrl}/${id}`, {
        method: 'DELETE'
      });
      this.fetchLibros();
      this.resetForm();
    } catch (error) {
      console.log('Error deleting libros', error);
    }
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.libro = { ...this.libro, [name]: value };
  }

  resetForm() {
    this.libro = {
      "id": "",
      "titulo": "",
      "autor": "",
      "editorial": "",
      "nropaginas": "",
      "stock": "",
      "estado": ""
    }
  }

  render() {
    return (
      <div>
        <h1>Listado de Libros</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.libro.id ? this.updateLibro(this.libro.id) : this.createLibro();
          }}
        >
          <input type="text"
            name='titulo'
            value={this.libro.titulo}
            placeholder='Título'
            onInput={(event) => this.handleInputChange(event)}
          />

          <input type="text"
            name='autor'
            value={this.libro.autor}
            placeholder='Autor'
            onInput={(event) => this.handleInputChange(event)}
          />

          <input type="text"
            name='editorial'
            value={this.libro.editorial}
            placeholder='Editorial'
            onInput={(event) => this.handleInputChange(event)}
          />

          <input type="number"
            name='nopaginas'
            value={this.libro.nropaginas}
            placeholder='Nro de paginas'
            onInput={(event) => this.handleInputChange(event)}
          />

          <input type="number"
            name='stock'
            value={this.libro.stock}
            placeholder='Unidades disponibles'
            onInput={(event) => this.handleInputChange(event)}
          />

          <input type="number"
            name='estado'
            value={this.libro.estado}
            placeholder='1: Disponbible - 0: No disponible'
            onInput={(event) => this.handleInputChange(event)}
          />
          <button type='submit'>{this.libro.id ? 'Actualizar' : 'Crear'} Libro</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Titulo</th>
              <th>Autor</th>
              <th>Editorial</th>
              <th>Nro paginas</th>
              <th>Stock</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.libros.map((libro) => (
              <tr>
                <td>{libro.id}</td>
                <td>{libro.titulo}</td>
                <td>{libro.autor}</td>
                <td>{libro.editorial}</td>
                <td>{libro.nropaginas}</td>
                <td>{libro.stock}</td>
                <td>{libro.estado}</td>
                <td>
                  <button onClick={() => (this.libro = libro)}>Actualizar</button>
                  <button onClick={() => this.deleteLibro(libro.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
