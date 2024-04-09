/*) Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso 
contrário escrever NÃO É MAIOR QUE 10! */

var valor; 

alert("Verificação se o valor inserido é maior que 10.")

var valor = parseInt(prompt("Digite um valor:"));

if (valor > 10){
    alert("Valor é maior que 10!")
}
else{
    alert("Valor é menor que 10!")
}
