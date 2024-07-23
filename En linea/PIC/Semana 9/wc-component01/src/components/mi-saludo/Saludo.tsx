import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'mi-saludo',
    styleUrl: 'Saludo.css',
    shadow: true
})

export class MiSaludo {

    @Prop() name: string;

    @Prop() edad: number;

    render() {
        return <div> Hola soy {this.name} tengo {this.edad} anios</div>;
    }
}
