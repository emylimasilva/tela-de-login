// models/Usuario.js
// Copilot, me explique o que é o 'constructor' e por que ele é usado nesta classe.
// Resposta (Copilot): O `constructor` é um método especial em classes JavaScript que é executado automaticamente
// quando você cria uma nova instância da classe (com `new Usuario(...)`). Ele serve para inicializar o estado
// do objeto — ou seja, atribuir valores iniciais às propriedades como `nome`, `email` e `senha`.
// Copilot, o que significa o 'this' dentro do constructor?
// Resposta (Copilot): Em métodos de instância (incluindo o `constructor`), `this` refere-se à instância atual
// da classe — o objeto que está sendo construído ou cujo método está sendo executado. Usar `this.nome` cria ou
// acessa a propriedade `nome` daquela instância específica.

class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  validarLogin(emailDigitado, senhaDigitada) {
    return this.email === emailDigitado && this.senha === senhaDigitada;
  }

  exibirInfo() {
    return `Usuário: ${this.nome}, Email: ${this.email}`;
  }
}

// Compatibilidade: Funciona tanto em Node.js (module.exports) quanto em navegador (window.Usuario)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Usuario;
} else {
  window.Usuario = Usuario;
}
