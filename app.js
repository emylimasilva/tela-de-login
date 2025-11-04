// Copilot, crie uma classe Usuario com atributos nome, email e senha.
// Adicione um método para validar login e outro para exibir os dados do usuário.

// Copilot, me explique o que é o 'constructor' e por que ele é usado nesta classe.
// Resposta (Copilot): O `constructor` é um método especial em classes JavaScript que é executado automaticamente
// quando você cria uma nova instância da classe (com `new Usuario(...)`). Ele serve para inicializar o estado
// do objeto — ou seja, atribuir valores iniciais às propriedades como `nome`, `email` e `senha`. Sem o constructor
// você teria que atribuir manualmente essas propriedades após criar o objeto.

// Copilot, o que significa o 'this' dentro do constructor?
// Resposta (Copilot): Em métodos de instância (incluindo o `constructor`), `this` refere-se à instância atual
// da classe — o objeto que está sendo construído ou cujo método está sendo executado. Usar `this.nome` cria ou
// acessa a propriedade `nome` daquela instância específica, diferente de outras instâncias da classe.

// Copilot, por que o método validarLogin precisa usar '===' ao invés de '='?
// Resposta (Copilot): Em JavaScript `=` é o operador de atribuição (atribui valores), `==` compara com coerção
// de tipos (pode converter tipos automaticamente) e `===` é igualdade estrita (compara valor e tipo). Usar `===`
// evita resultados inesperados causados pela coerção de tipos — por exemplo `0 == '0'` é true, mas `0 === '0'` é false.
// Usar `=` por engano quebraria a lógica pois sobrescreveria variáveis em vez de compará-las. Para segurança e
// previsibilidade das comparações, prefira `===`.

// Copilot, o que este método exibirInfo está retornando e onde ele pode ser usado?
// Resposta (Copilot): `exibirInfo()` constrói e retorna uma string contendo informações não sensíveis do usuário
// (nome e email). Essa string pode ser usada em logs, depuração, ou exibida na interface do usuário. Importante:
// nunca inclua a senha em texto claro em retornos, logs ou UI. Em produção, armazene senhas apenas como hashes.

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
