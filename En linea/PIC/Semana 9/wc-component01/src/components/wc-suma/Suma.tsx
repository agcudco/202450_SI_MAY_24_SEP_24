import { Component, State, h } from "@stencil/core";

@Component({
    tag: 'wc-suma',
    styleUrl: 'Suma.css',
    shadow: true
})

export class Suma {

    @State() num1: number = 0;
    @State() num2: number = 0;
    @State() suma: number = 0;

    handleNum1Change(event) {
        this.num1 = parseFloat(event.target.value) || 0;
        this.calcularSuma();
    }

    handleNum2Change(event) {
        this.num2 = parseFloat(event.target.value) || 0;
        this.calcularSuma();
    }

    calcularSuma() {
        this.suma = this.num1 + this.num2;
    }

    render() {
        return (
            <div>
                <input
                    type="number"
                    placeholder="Ingrese el numero 1"
                    onInput={(event) => this.handleNum1Change(event)}
                />
                <input
                    type="number"
                    placeholder="Ingrese el numero 2"
                    onInput={(event) => this.handleNum2Change(event)}
                />
                <div>Resultado: {this.suma}</div>
            </div>
        );

    }
}