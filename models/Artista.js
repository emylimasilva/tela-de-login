// models/Artista.js
// Copilot, me explique esta classe Artista. O que é o 'constructor'?
// Resposta (Copilot): A classe `Artista` representa um músico ou banda com propriedades
// como `nome` e `genero`. O `constructor` inicializa essas propriedades e uma lista de músicas.
class Artista {
  constructor(nome, genero) {
    this.nome = nome;
    this.genero = genero;
    this.musicas = [];
  }

  // Copilot, por que este método 'adicionarMusica' é útil?
  // Resposta (Copilot): `adicionarMusica` organiza a inclusão de `Musica` na lista do artista.
  // Centralizar essa lógica permite validações (como evitar duplicatas) e manter invariantes.
  adicionarMusica(musica) {
    if (!musica || !musica.titulo) return false;
    const existe = this.musicas.some(m => m.titulo === musica.titulo);
    if (existe) return false;
    this.musicas.push(musica);
    return true;
  }

  // Copilot, o que é 'this' neste contexto?
  // Resposta (Copilot): Aqui, `this` refere-se à instância do `Artista` — ou seja, o objeto
  // que contém `nome`, `genero` e `musicas`. Métodos que usam `this` operam sobre os dados dessa
  // instância específica.
  listarMusicas() {
    return this.musicas.map(m => m.exibirInfo()).join('\n');
  }
}

module.exports = Artista;
