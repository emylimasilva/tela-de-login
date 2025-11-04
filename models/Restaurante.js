// models/Restaurante.js
// Copilot, me explique esta classe Restaurante. O que é o 'constructor'?
// Resposta (Copilot): A classe `Restaurante` representa um estabelecimento que contém um
// conjunto de pratos (menu) e operações para gerenciar esse menu. O `constructor` é o
// método especial chamado quando criamos um novo `Restaurante` com `new`. Ele inicializa
// o estado do objeto, como `nome` e a lista de `pratos` vazia ou recebida como argumento.

class Restaurante {
  constructor(nome, endereco, pratos = []) {
    this.nome = nome;
    this.endereco = endereco;
    this.pratos = pratos;
  }

  // Copilot, por que este método 'adicionarPrato' é útil?
  // Resposta (Copilot): `adicionarPrato` encapsula a lógica de inserir um prato no menu.
  // Centralizar essa lógica evita duplicação e permite validações (ex.: não adicionar
  // pratos com mesmo nome) antes de modificar o estado interno.
  adicionarPrato(prato) {
    if (!prato || !prato.nome) return false;
    const existe = this.pratos.some(p => p.nome === prato.nome);
    if (existe) return false;
    this.pratos.push(prato);
    return true;
  }

  // Copilot, por que este método 'listarMenu' é útil?
  // Resposta (Copilot): `listarMenu` fornece uma visão do menu atual do restaurante,
  // útil para renderizar em UI, gerar relatórios ou depuração. Ele separa a forma de
  // exibição da lógica de armazenamento.
  listarMenu() {
    return this.pratos.map(p => p.exibirInfo()).join('\n');
  }
}

module.exports = Restaurante;
