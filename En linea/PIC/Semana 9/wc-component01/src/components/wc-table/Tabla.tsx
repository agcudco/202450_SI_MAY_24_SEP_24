import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'wc-tabla',
    styleUrl: 'Tabla.css',
    shadow: true
})

export class DataTable {
    @Prop() data: { headers: string[], rows: any[][] };

    render() {
        return (
            <table>
                <thead>
                    {
                        this.data.headers.map(header => (
                            <th>{header}</th>
                        ))
                    }
                </thead>
                <tbody>
                    {
                        this.data.rows.map(row => (
                            <tr>
                                {
                                    row.map(cell => (
                                        <td>{cell}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}