class Produto {
  nome;
  preco;
  emEstoque;
  quantidade;
  constructor(nome, preco, emEstoque, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.emEstoque = emEstoque;
    this.quantidade = quantidade;
  }
}

class Pedidos {
  nomeCliente;
  numeroPedido;
  dataPedido = new Date().toLocaleDateString();
  estaPago = false;
  listaProdutos = [];

  constructor(numeroPedido, nomeCliente) {
    this.nomeCliente = nomeCliente;
    this.numeroPedido = numeroPedido;
  }
}
