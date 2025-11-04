// models/Prato.js
class Prato {
  constructor(nome, preco, ingredientes = []) {
    this.nome = nome;
    this.preco = preco;
    this.ingredientes = ingredientes;
  }

  exibirInfo() {
    return `${this.nome} - R$ ${this.preco.toFixed(2)}`;
  }
}

module.exports = Prato;
