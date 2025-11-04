// models/Musica.js
// Copilot, me explique esta classe Musica. O que é o 'constructor' e por que um método 'tocar' pode ser útil?
// Resposta (Copilot): A classe `Musica` modela uma faixa com `titulo` e `duracao`. O `constructor`
// inicializa estes valores. Um método `tocar` (ou `render`) pode ser útil para encapsular a ação
// de reproduzir ou simular a reprodução da faixa, deixando a lógica de reprodução concentrada.
class Musica {
  constructor(titulo, duracao) {
    this.titulo = titulo;
    this.duracao = duracao; // em segundos
  }

  // Copilot, por que este método 'exibirInfo' é útil?
  // Resposta (Copilot): `exibirInfo` fornece uma representação legível da música, útil em listas
  // e logs. Métodos pequenos e focados como esse facilitam a reutilização.
  exibirInfo() {
    const minutos = Math.floor(this.duracao / 60);
    const segundos = this.duracao % 60;
    return `${this.titulo} (${minutos}:${String(segundos).padStart(2, '0')})`;
  }

  // Simula a reprodução — em apps reais você delegaria ao player.
  tocar() {
    // 'this' aqui é a instancia da Musica que foi chamada
    return `Tocando: ${this.titulo}`;
  }
}

module.exports = Musica;
