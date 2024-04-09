/*Exemplo de desvio condicional encadado*/

var idade;

alert("Identificação da idade permitida para votar.")

var idade=parseInt(prompt("Digite sua idade:"))

if(idade<16){
    alert("não pode votar")
} else
if (idade <18){
    alert("Voto opcional")
}
else{
    alert("Voto obrigatório")
}
