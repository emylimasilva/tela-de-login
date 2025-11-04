// models/Musica.js
class Musica {
  constructor(titulo, duracao) {
    this.titulo = titulo;
    this.duracao = duracao; // em segundos
  }

  exibirInfo() {
    const minutos = Math.floor(this.duracao / 60);
    const segundos = this.duracao % 60;
    return `${this.titulo} (${minutos}:${String(segundos).padStart(2, '0')})`;
  }

  tocar() {
    return `Tocando: ${this.titulo}`;
  }
}

module.exports = Musica;
