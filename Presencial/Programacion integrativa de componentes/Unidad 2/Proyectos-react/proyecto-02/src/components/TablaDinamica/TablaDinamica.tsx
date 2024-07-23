import React, { ChangeEvent, FormEvent } from "react";
import './TablaDinamica.css';

interface Row {//props
    id: number;
    name: string;
    age: number;
}

interface TablaDinamicaState {
    rows: Row[];
    newName: string;
    newAge: string;
}

export class TablaDinamica extends React.Component<{}, TablaDinamicaState> {
    state: TablaDinamicaState = {
        rows: [],
        newName: '',
        newAge: ''
    }

    handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ newName: event.target.value });
    }

    handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ newAge: event.target.value });
    }

    handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const newRow: Row = {
            id: Date.now(),//deber
            name: this.state.newName,
            age: parseInt(this.state.newAge)
        }

        this.setState((prevState) => ({
            rows: [...prevState.rows, newRow],
            newName: '',
            newAge: ''
        }));
    }

    handleDelete = (id: number) => {
        this.setState((prevState) => ({
            rows: prevState.rows.filter((row) => row.id !== id)
        }));
    }

    render() {

        const { rows, newName, newAge } = this.state;

        return (
            <div>
                <h2>Tabla Dinámica</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={newName}
                        placeholder="Ingrese el nombre"
                        required
                        onChange={this.handleNameChange}
                    />
                    <input type="number"
                        value={newAge}
                        placeholder="Ingrese la edad"
                        required
                        onChange={this.handleAgeChange}
                    />
                    <button type="submit">Agregar</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.age}</td>
                                <td>
                                    <button
                                        onClick={() => this.handleDelete(row.id)}>Eliminar</button>  
                                    <button>Actualizar</button>                                  
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

}