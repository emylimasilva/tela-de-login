// Copilot, crie uma classe Usuario com atributos nome, email e senha.
// Adicione um método para validar login e outro para exibir os dados do usuário.

// Copilot, me explique o que é o 'constructor' e por que ele é usado nesta classe.
// Copilot, o que significa o 'this' dentro do constructor?
// Copilot, por que o método validarLogin precisa usar '===' ao invés de '='?
// Copilot, o que este método exibirInfo está retornando e onde ele pode ser usado?

// Respostas (cole as explicações da IA aqui como comentários):
// O constructor é um método especial que é chamado quando um novo objeto é criado a partir da classe. Ele serve para inicializar os atributos (propriedades) do objeto com os valores fornecidos.
// 'this' refere-se à instância atual da classe  ou seja, ao objeto que está sendo criado ou cujo método está sendo executado. Usamos 'this.nome' para acessar/atribuir a propriedade 'nome' daquele objeto.
// Em JavaScript, '===' é o operador de igualdade estrita que compara valor e tipo. Ele previne conversões implícitas e evita falsos positivos. Usar '=' atribui valor, enquanto '==' faz comparação com coerção de tipo.
// O método exibirInfo retorna uma string com informações do usuário (nome e email). Pode ser usado para debug, logs ou para exibir o nome/email no front-end. NUNCA retorne ou logue a senha em texto simples. Em produção, senhas devem ser armazenadas como hash.

class Usuario {
  // O constructor inicializa os atributos do usuário.
  constructor(nome, email, senha) {
    // 'this' aponta para a instância do objeto
    this.nome = nome;
    this.email = email;
    // Em produção, armazene apenas hashes de senha
    this.senha = senha;
  }

  // Validação simples de login (comparação local).
  // Em um sistema real isso aconteceria no servidor com senha comparada por hash.
  validarLogin(emailDigitado, senhaDigitada) {
    // '===' compara valor e tipo  é mais seguro que '==' e '=' é atribuição
    return this.email === emailDigitado && this.senha === senhaDigitada;
  }

  // Retorna informações não sensíveis do usuário.
  exibirInfo() {
    return `Usuário: ${this.nome}, Email: ${this.email}`;
  }
}

// Exemplo de uso (dados falsos para teste)
const usuario1 = new Usuario('Emilly Silva', 'emilly@example.com', 'senha123');

// Copilot, explique passo-a-passo o que acontece nas linhas abaixo.
console.log(usuario1.exibirInfo());
console.log('Login válido?', usuario1.validarLogin('emilly@example.com', 'senha123')); // deve ser true
