// models/Usuario.js
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

module.exports = Usuario;
