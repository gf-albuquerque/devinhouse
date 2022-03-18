//Exercicio 01 M1S03
alert("Esta é minha pagina com JS");

//Ecercicio 02 M1S03
var temCerteza = confirm("Você deseja receber as boas vindas?");
if (temCerteza == true) {
  alert("Bem Vindo a minha pagina");
} else {
  alert("Você não quis, mas também é bem vindo a minha pagina");
}

//Exercicio 03 M1S03
var nomeUsuario = prompt("Você poderia me dizer seu nome?");
alert(`Olá ${nomeUsuario}, é um prazer te conhecer`);

//Exercicio 04 M1S03
//Utilizada varialvel do Exercicio 03 para o nome
var idadeUsuario = prompt(`${nomeUsuario}, você poderia me dizer sua idade`);
var praticaEsporte = confirm(
  `${nomeUsuario}, você gosta de praticar algum esporte?`
);
console.log(nomeUsuario);
console.log(parseInt(idadeUsuario));
console.log(praticaEsporte);

//Exercicio 05 M1S03
//Utilizada varialvel do Exercicio 03 para o nome
var sobrenomeUsuario = prompt(
  `${nomeUsuario}, você poderia me dizer seu sobrenome?`
);
alert(`Que legal então seu nome é ${nomeUsuario} ${sobrenomeUsuario}`);

//Exercicio 06 M1S03
//Utilizada varialvel do Exercicio 03 para o nome
var ultimoNomeUsuario = prompt(
  `Olá ${nomeUsuario}, você pode me dizer seu ultimo sobrenome?`
);
alert(
  `Olá, ${ultimoNomeUsuario.toUpperCase()}. Seu sobrenome contem ${
    ultimoNomeUsuario.length
  } letras.`
);

//Exercicio 07 M1S03
var anoNascimento = prompt("Qual o seu ano de nascimento?");
var anoAtual = prompt("Qual o ano atual?");
var idadeAtual = anoAtual - anoNascimento;

alert(`Sua idade atual é ${idadeAtual} ou ${idadeAtual - 1}`);

//Exercicio 08 M1S03
var operacao = prompt(
  "Qual o tipo de calculo deseja fazer, (soma +), (subtração -), (multiplicação *) ou (divisão /)"
);
var num1 = prompt("Digite o primeiro numero da operação");
var num2 = prompt("Digite o segundo numero da operação");

//formatação para number
num1 = parseInt(num1);
num2 = parseInt(num2);

if (operacao === "+") {
  var resultado = num1 + num2;

  alert(`O resultado do seu calculo é: ${resultado}`);
} else if (operacao === "-") {
  var resultado = num1 - num2;

  alert(`O resultado do seu calculo é: ${resultado}`);
} else if (operacao === "*") {
  var resultado = num1 * num2;

  alert(`O resultado do seu calculo é: ${resultado}`);
} else if (operacao === "/") {
  var resultado = num1 / num2;

  alert(`O resultado do seu calculo é: ${resultado}`);
}

//Exercicio 09 M1S03

var data = new Date();

var hora = data.getHours();
var min = data.getMinutes();

alert(`A hora atual é: ${hora}:${min}`);

//Exercicio 10 M1S03

var valorInicial = prompt("Digite o valor inicial");
var valorRaiz = prompt("Digite um valor para a Raiz");
var progArit = [];
//confirmar que os valores são numeros
valorInicial = parseInt(valorInicial);
valorRaiz = parseInt(valorRaiz);

var operacao = valorInicial + valorRaiz;

progArit.push(valorInicial);
progArit.push(operacao);

for (var i = 2; i < 10; i++) {
  operacao += valorRaiz;
  progArit.push(operacao);
}

var resultado = progArit.toString();

alert(`P.A.: ${resultado}`);
