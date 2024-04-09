alert("O número digitado apresentará de acordo com os meses do ano.")

var numero=parseInt(prompt("Digite um número:"))
var mesesano=numero==1? "Janeiro":numero==2?"Fevereiro":numero==3?"Março":numero==4?"Abril":numero==5?"Maio":numero==6?"Junho":numero==7?"Julho":numero==8?"Agosto":numero==9?"Setembro":numero==10?"Outubro":numero==11?"Novembro":numero==12?"Dezembro":"Número inválido!";

alert(mesesano)