function calcular() {
  let elementoPai = document.body;
  let operacao = document.getElementById("selecao").value;
  let primeiroNumero = parseInt(document.getElementById("n1").value);
  let segundoNumero = parseInt(document.getElementById("n2").value);
  let criaParagrafo = document.createElement("p");
  let resultado = 0;

  switch (operacao) {
    case "somar":
      resultado = primeiroNumero + segundoNumero;
      break;
    case "subtrair":
      resultado = primeiroNumero - segundoNumero;
      break;
    case "multiplicar":
      resultado = primeiroNumero * segundoNumero;
      break;
    case "dividir":
      resultado = primeiroNumero / segundoNumero;
      break;
  }
  criaParagrafo.appendChild(document.createTextNode(resultado));
  elementoPai.appendChild(criaParagrafo);
}
