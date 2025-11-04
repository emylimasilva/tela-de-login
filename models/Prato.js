// models/Prato.js
// Copilot, me explique esta classe Prato. O que é o 'constructor'?
// Resposta (Copilot): A classe `Prato` modela um item do menu com propriedades como
// `nome`, `preco` e `ingredientes`. O `constructor` define essas propriedades quando
// um novo prato é criado.
class Prato {
  constructor(nome, preco, ingredientes = []) {
    this.nome = nome;
    this.preco = preco;
    this.ingredientes = ingredientes;
  }

  // Copilot, o que este método 'exibirInfo' retorna e quando usar?
  // Resposta (Copilot): `exibirInfo` retorna uma string com informações não sensíveis do prato
  // (nome e preço). Útil para logs, listagens e interfaces onde detalhes básicos são necessários.
  exibirInfo() {
    return `${this.nome} - R$ ${this.preco.toFixed(2)}`;
  }
}

module.exports = Prato;
