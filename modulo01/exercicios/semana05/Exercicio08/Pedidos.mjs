export class Produto {
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

export class Pedidos {
  nomeCliente;
  numeroPedido;
  dataPedido = new Date().toLocaleDateString();
  estaPago = false;
  listaProdutos = [];

  constructor(nomeCliente, numeroPedido) {
    this.nomeCliente = nomeCliente;
    this.numeroPedido = numeroPedido;
  }
  adicionarProduto(produto) {
    if (produto instanceof Produto) {
      this.listaProdutos.push(produto);
    }
  }
  calcularTotal() {
    let valorTotal = 0;
    this.listaProdutos.forEach((produto) => {
      valorTotal += produto.quantidade * produto.preco;
    });
    return valorTotal;
  }
}
