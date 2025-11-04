// Uso dos modelos em `models/` (classes separadas)
const Usuario = require('./models/Usuario');
const Prato = require('./models/Prato');
const Restaurante = require('./models/Restaurante');
const Artista = require('./models/Artista');
const Musica = require('./models/Musica');

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

// Exemplo de uso (dados falsos para teste)
const usuario1 = new Usuario('Emilly Silva', 'emilly@example.com', 'senha123');

// Copilot, explique passo-a-passo o que acontece nas linhas abaixo.
console.log(usuario1.exibirInfo());
console.log('Login válido?', usuario1.validarLogin('emilly@example.com', 'senha123')); // deve ser true

// As classes e explicações foram movidas para a pasta `models/`.
// Este arquivo mantém apenas exemplos de uso e referências às notas.

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

// Explicações extras (hashing/salting, edge cases, testes) foram adicionadas em NOTAS.md
// Consulte `NOTAS.md` para detalhes de segurança e casos de teste sugeridos.
