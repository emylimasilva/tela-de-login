// models/Artista.js
class Artista {
  constructor(nome, genero) {
    this.nome = nome;
    this.genero = genero;
    this.musicas = [];
  }

  adicionarMusica(musica) {
    if (!musica || !musica.titulo) return false;
    const existe = this.musicas.some(m => m.titulo === musica.titulo);
    if (existe) return false;
    this.musicas.push(musica);
    return true;
  }

  listarMusicas() {
    return this.musicas.map(m => m.exibirInfo()).join('\n');
  }
}

module.exports = Artista;
