/*As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem 
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e 
escreva o custo total da compra*/

alert("Valor da compra de maças.")

var macas, quantidademacas, duzia;

var quantidademacas = parseInt(prompt("Digite a quantidade de maças compradas:"))

var macas= (1.30 * quantidademacas)

if (quantidademacas>=12){
    var macas=(1 * quantidademacas)
}

alert("Valor total da compra: R$"+ macas+",00")