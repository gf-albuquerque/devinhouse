// Exercicio 01

let idade = prompt("Digite sua idade");

if (idade <= 15) {
  console.log("Jovens - Indivíduos de até 15 anos");
} else if (idade >= 16 && idade <= 64) {
  console.log("Adultos - Indivíduos com idade entre 16 até 64 anos");
} else if (idade >= 65) {
  console.log("Idosos - Indivíduos de 65 anos em diante");
} else {
  console.log("Digite uma idade valida!");
}

//Exercicio 02

function operacao(numberOne, numberTwo, operation) {
  let result = 0;
  switch (operation) {
    case "+":
      result = numberOne + numberTwo;
      console.log(result);
      break;
    case "-":
      result = numberOne - numberTwo;
      console.log(result);
      break;
    case "*":
      result = numberOne * numberTwo;
      console.log(result);
      break;
    case "/":
      result = numberOne / numberTwo;
      console.log(result);
      break;
    default:
      console.log("A operação nao está disponivel!");
  }
}

operacao(2, 2, "+");
operacao(3, 2, "-");
operacao(4, 2, "*");
operacao(5, 2, "/");
operacao(2, 2, "teste");

//Exercicio 03

let numero = prompt("Digite um numero para saber se é par ou impar!");

numero % 2 != 0
  ? console.log("O numero é impar!")
  : console.log("O numero é par!");

//Exercicio 04

for (let i = 0; i <= 10; i++) {
  let resultado = 2 * i;
  console.log(`2 x ${i} = ${resultado}`);
}

//Exercicio 05

var animais = [
  { animal: "Cachorro", raca: "Akita" },
  { animal: "Cachorro", raca: "Boxer" },
  { animal: "Cachorro", raca: "Dálmata" },
  { animal: "Cachorro", raca: "Pastor alemão" },
  { animal: "Gato", raca: "Persa" },
  { animal: "Gato", raca: "Sphynx" },
  { animal: "Gato", raca: "Siamês" },
];

animais.forEach((element) => console.log(`${element.animal}: ${element.raca}`));

//Exercicio 06

let impares = 0;
let contador = 0;

while (impares < 10) {
  contador++;
  if (contador % 2 != 0) {
    impares++;
  }
  console.log(`O valor do contador é: ${contador}, o de ímpares é: ${impares}`);
}

//Exercicio 07

const array = [0, 32, 45, 50, 75, 80, 99, 120];

let map = array.map((element) => Math.round(((element - 32) * 5) / 9));
console.log(`A temperatura é: ${map}`);

//Exercicio 08

const cidades1 = [
  { nome: "Patos de Minas", populacao: 153585 },
  { nome: "Lages", populacao: 157349 },
  { nome: "Ibiúna", populacao: 79479 },
  { nome: "Maringá", populacao: 403063 },
  { nome: "Curitiba", populacao: 1963726 },
  { nome: "Florianópolis", populacao: 508826 },
  { nome: "Pato Branco", populacao: 84779 },
];

const filtroCidades = cidades1.filter((cidade) => cidade.populacao > 200000);
let ordenacao = filtroCidades.sort((a, b) => b.populacao - a.populacao);
const mapeamento = ordenacao.map((x) => {
  console.log(`A cidade ${x.nome} possui mais ${x.populacao} habitantes!`);
});

console.log(mapeamento);

//Exercicio 09

const cidades = [
  { nome: "Patos de Minas", populacao: 153585 },
  { nome: "Lages", populacao: 157349 },
  { nome: "Ibiúna", populacao: 79479 },
  { nome: "Maringá", populacao: 403063 },
  { nome: "Curitiba", populacao: 1963726 },
  { nome: "Florianópolis", populacao: 508826 },
  { nome: "Pato Branco", populacao: 84779 },
];

let verificacao = cidades.some((cidade) =>
  cidade.nome.toLowerCase().includes("florianópolis")
);
console.log(verificacao);

//Exercicio 10

let contasClientes = [
  { id: 1, saldo: 500 },
  { id: 2, saldo: 30000 },
  { id: 3, saldo: 50 },
];

const SACAR = "SACAR";
const DEPOSITAR = "DEPOSITAR";

const idConta = (id) => contasClientes.find((conta) => conta.id === id);

const validacao = (valor, operacao, operacaoFinal) => {
  if (!operacao) {
    console.log("Conta inválida");
    return;
  }
  if (valor <= 0) {
    console.log("Valor inválido");
    return false;
  }
  if (operacaoFinal === SACAR && valor > operacao.saldo) {
    console.log("Saldo insuficiente");
    return false;
  }
  return true;
};
const novoSaldo = (id, saldo) => {
  contasClientes = contasClientes.map((conta) =>
    conta.id === id ? { ...conta, saldo } : conta
  );
  console.log(`Seu saldo atual é: ${saldo}`);
};

const saque = (id, valor) => {
  const operacao = idConta(id);
  if (validacao(valor, operacao, SACAR)) {
    const saldo = operacao.saldo - valor;
    novoSaldo(id, saldo);
  }
};
const deposito = (id, valor) => {
  const operacao = idConta(id);
  if (validacao(valor, operacao, DEPOSITAR)) {
    const saldo = operacao.saldo + valor;
    novoSaldo(id, saldo);
  }
};

deposito(1, 200);
deposito(5, 200);
deposito(1, -100);
saque(2, 10000);
saque(5, 10000);
saque(2, 50000);

console.table(contasClientes);
