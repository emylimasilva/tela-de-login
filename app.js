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

// ----------------------------
// Exemplos adicionais de POO (gerados via Copilot)
// Para cada classe abaixo collei respostas de exemplo do Copilot como comentários
// pedindo explicações sobre a classe, o constructor, o 'this' e métodos importantes.
// ----------------------------

// Copilot, me explique esta classe Restaurante. O que é o 'constructor'?
// Resposta (Copilot): A classe `Restaurante` representa um estabelecimento que contém um
// conjunto de pratos (menu) e operações para gerenciar esse menu. O `constructor` é o
// método especial chamado quando criamos um novo `Restaurante` com `new`. Ele inicializa
// o estado do objeto, como `nome` e a lista de `pratos` vazia ou recebida como argumento.
class Restaurante {
  constructor(nome, endereco, pratos = []) {
    // 'this' refere-se à instância do restaurante criado
    this.nome = nome;
    this.endereco = endereco;
    this.pratos = pratos; // array de instâncias de Prato
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

// Copilot, me explique esta classe Prato. O que é o 'constructor'?
// Resposta (Copilot): A classe `Prato` modela um item do menu com propriedades como
// `nome`, `preco` e `ingredientes`. O `constructor` define essas propriedades quando
// um novo prato é criado.
class Prato {
  constructor(nome, preco, ingredientes = []) {
    this.nome = nome;
    this.preco = preco;
    this.ingredientes = ingredientes;
  }

  // Copilot, o que este método 'exibirInfo' retorna e quando usar?
  // Resposta (Copilot): `exibirInfo` retorna uma string com informações não sensíveis do prato
  // (nome e preço). Útil para logs, listagens e interfaces onde detalhes básicos são necessários.
  exibirInfo() {
    return `${this.nome} - R$ ${this.preco.toFixed(2)}`;
  }
}

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

// Pequeno exemplo demonstrando uso das classes
const prato1 = new Prato('Risotto', 42.5, ['arroz', 'caldo', 'queijo']);
const prato2 = new Prato('Salada', 18.0, ['alface', 'tomate']);
const restaurante = new Restaurante('Bom Sabor', 'Rua A, 123');
restaurante.adicionarPrato(prato1);
restaurante.adicionarPrato(prato2);

const artista = new Artista('Banda Exemplo', 'Rock');
const musica1 = new Musica('Canção A', 210);
artista.adicionarMusica(musica1);

console.log('\n--- Menu do Restaurante ---');
console.log(restaurante.listarMenu());
console.log('\n--- Músicas do Artista ---');
console.log(artista.listarMusicas());
