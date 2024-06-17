const num1 = document.getElementById('txtNumero1');
const num2 = document.getElementById('txtNumero2');
const btnSuma = document.getElementById('btnSumar');
const txtResultado = document.getElementById('resultado');

btnSuma.addEventListener('click', () => {
    const numero1 = parseFloat(num1.value);
    const numero2 = parseFloat(num2.value);

    const suma = numero1 + numero2;
    txtResultado.textContent = `Resultado: ${suma}`;
});
