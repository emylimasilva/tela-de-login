// models/Restaurante.js
class Restaurante {
  constructor(nome, endereco, pratos = []) {
    this.nome = nome;
    this.endereco = endereco;
    this.pratos = pratos;
  }

  adicionarPrato(prato) {
    if (!prato || !prato.nome) return false;
    const existe = this.pratos.some(p => p.nome === prato.nome);
    if (existe) return false;
    this.pratos.push(prato);
    return true;
  }

  listarMenu() {
    return this.pratos.map(p => p.exibirInfo()).join('\n');
  }
}

module.exports = Restaurante;
