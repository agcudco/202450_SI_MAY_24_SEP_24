class Calculadora extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.getElementById('calculator-template').content.cloneNode(true);

        const style = document.createElement('style');
        style.textContent = `
            .calculator {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 10px;
                max-width: 200px;
                margin: auto;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 10px;
                box-shadow: 0 0 10px rgb(0, 0, 0, 0.1);
            }

            .calculator input{
                grid-column: span 4;
                padding: 10px;
                font-size: 1.2em;
                text-align: right;
            }

            .calculator button{
                padding: 15px;
                font-size: 1em;
                border: none;
                border-radius: 5px;
                background-color: #f0f0f0;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            .calculator button:hover{
                background-color: #ddd;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(template);

        this.display = shadow.getElementById('display');
        this.buttons = shadow.querySelectorAll('button');
        this.currentValue = '';
        this.previusValue = '';
        this.operator = '';

        this.buttons.forEach(button => {
            button.addEventListener('click', () => this.onButtonClick(button));
        });
    }

    onButtonClick(button) {
        const value = button.textContent;
        if (!isNaN(value) || value === '.') {
            this.appendNumber(value);
        } else if (value === '=') {
            this.calculate();
        } else {
            this.setOperator(value);
        }
    }

    appendNumber(number) {
        if (this.currentValue.includes('.') && number === '.') return;
        this.currentValue += number;
        this.updateDisplay();
    }

    setOperator(operator) {
        if (this.currentValue === '') return;
        if (this.currentValue !== '') {
            this.calculate();
        }
        this.operator = operator;
        this.previusValue = this.currentValue;
        this.currentValue = '';
    }

    calculate() {
        let result;

        const prev = parseFloat(this.previusValue);
        const current = parseFloat(this.currentValue);

        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case 'x':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }

        this.currentValue = result;
        this.operator = '';
        this.previusValue = '';
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.value = this.currentValue;
    }
}

customElements.define('mi-calculadora', Calculadora);
