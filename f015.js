/* Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). */

var valor;

alert("Verificação se o valor fornecido é positivo ou negativo")

var valor = parseFloat(prompt("Digite um valor:"))

if (valor >= 0){
    alert("Valor fornecido é positivo!")
}

else {
    alert("Valor fornecido é negativo!")
}
