Notas técnicas - autenticação e testes

1) Hashing e Salting (explicação simples)

- Hashing:
  - Hashing é uma função unidirecional que transforma uma senha em um valor fixo (o hash).
  - Boa propriedade: não é (praticamente) possível reverter o hash para obter a senha original.
  - Em produção, nunca armazene senhas em texto puro; armazene somente o hash.
  - Exemplos: bcrypt, Argon2, PBKDF2.

- Salting:
  - Salt é um valor aleatório único por usuário que é concatenado à senha antes de aplicar o hash.
  - O salt impede ataques por rainbow tables (tabelas pré-computadas) e faz com que senhas iguais
  apareçam com hashes diferentes.
  - Em conjunto: salt + hashing (com rounds/seleção apropriada) é o padrão de proteção.

2) Edge cases para testar `validarLogin`

- Inputs vazios: email ou senha vazios ou nulos.
- Espaços acidentais: entradas com espaços no início/fim — deve-se considerar `trim()` em muitos casos.
- Diferenças de caixa: e.g., emails geralmente devem ser comparados case-insensitively; senhas são case-sensitive.
- Tipos errados: números, objetos ou arrays passados por engano.
- Valores muito longos: strings excessivamente longas (possível DoS ou problemas de armazenamento).
- Usuarios não encontrados: email que não existe.
- Senha incorreta: verificar mensagem/flag correta sem vazar informação (use mensagens genéricas).
- Ataques de timing: comparar hashes com funções que evitam variações significativas de tempo.

3) Três casos de teste unitário sugeridos para `validarLogin`

Abaixo assumimos uma função `validarLogin(email, senha)` pertencente a uma instância `Usuario`.

- Caso 1 (happy path): email igual ao registrado e senha correta -> retorna true.
- Caso 2 (senha incorreta): email correto, senha errada -> retorna false.
- Caso 3 (entrada vazia): email ou senha vazios -> retorna false (ou lança erro, dependendo da especificação).

Exemplo (pseudocódigo Jest):

```javascript
test('login com credenciais corretas retorna true', () => {
  const u = new Usuario('Teste','t@t.com','senha');
  expect(u.validarLogin('t@t.com','senha')).toBe(true);
});

test('login com senha incorreta retorna false', () => {
  const u = new Usuario('Teste','t@t.com','senha');
  expect(u.validarLogin('t@t.com','senhaErrada')).toBe(false);
});

test('login com campos vazios retorna false', () => {
  const u = new Usuario('Teste','t@t.com','senha');
  expect(u.validarLogin('','')).toBe(false);
});
```

4) Observações rápidas sobre implementação segura

- Faça a verificação de senha no servidor e compare hashes, nunca no cliente.
- Use bibliotecas consolidadas (bcrypt, Argon2). Não invente seu próprio algoritmo.
- Proteja endpoints com rate limiting e monitore tentativas de login.
- Evite mensagens de erro que confirmem se o email existe; prefira mensagens genéricas.

---
Arquivo gerado automaticamente pelo assistente para complementar as explicações no `app.js`.
