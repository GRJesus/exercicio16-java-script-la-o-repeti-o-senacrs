//exercicio de laço de repetição
//< mylist.length ele pega o valor atualizado da mylist
//indiferente de quantas variáveis tiver
//var mylist = [1,2,3,4,5,6,7,8,9,10];

//for (var i = 0; i < mylist.length; i++) {
  //console.log(mylist[i]);
//}

//segundo exemplo adicionando valores
//var mylist = [1,2,3,4,5,6,7,8,9,10];
//mylist.push (7);//adiciona valores ao final do mylist
//mylist.push ("Giovane");//adiciona valores ao final do mylist
//javascript permite misturar qualquer tipo de valor, o java não
//permite
//for (var i = 0; i < mylist.length; i++) {
  //console.log(mylist[i]);
//}

//Laços de repetição
//1) Escreva um programa em Javascript que lê 15 valores reais, encontra o maior e o menor deles e mostra o resultado.

var mylist = [];
for (var i = 0; i < 15; i++) {
  mylist.push(parseInt(prompt("Digite aqui")));
  console.log(mylist[i]);
}
var max = mylist[0];//mylist[0] serve para indicar que deve começar do primeiro numero digitado pelo usuário
var min = mylist[0];

for (var i = 0; i < mylist.length; i++) {
  if (mylist[i] < min) {
    min = mylist[i];
  } if (mylist[i] > max) {
    max = mylist[i];
  }
}

document.body.append("Valor mínimo " + min + " e " + "Valor máximo " + max + ".");
