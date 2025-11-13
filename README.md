# 🔐 Tela de Login e Cadastro

Projeto escolar: implementação de uma tela de login e cadastro com POO, validações, testes e pipeline de deploy.
## Tecnologias usadas
- HTML5, CSS3, JavaScript (Vanilla)
- Node.js (dev/test): Jest
- MongoDB Atlas (planejado, Semana 2)
- Vercel (deploy front-end) / Render (opcional para API)

## Como rodar localmente
1. Instale dependências (se necessário):
```powershell
npm install
2. Servir a pasta para testar o HTML (recomendado):
```powershell
npm install -g http-server
cd c:\Users\lima_gabrielly\tela-de-login
http-server .
# Abrir http://localhost:8080
3. Rodar testes unitários (Jest):
```powershell
npm test

## Links de deploy (colar após deploy)
- 🔗 Deploy Front-end (Vercel): https://projeto.vercel.app
- 🔗 API (Render ou outro): https://api-projeto.onrender.com
> Observação: substitua os links acima pelos URLs reais após o deploy.

## Segurança e variáveis de ambiente
- Arquivo `.env.example` contém exemplos de variáveis. Crie um `.env` local com valores reais.
- Nunca comite `.env` para o repositório. O arquivo `.env` já está listado em `.gitignore`.
- Em produção, armazene segredos como "Environment Variables" (Secrets) na Vercel / Render.

### Senhas e hashing
- NUNCA armazene senhas em texto claro.
- Em produção, use uma função de hashing segura (bcrypt, scrypt, argon2) com salt.
- Exemplo (Node.js + bcrypt):
```javascript
const bcrypt = require('bcrypt');
const saltRounds = 10;
const hash = await bcrypt.hash(password, saltRounds);
// Para verificar
const ok = await bcrypt.compare(passwordCandidate, hash);

## Testes e casos de borda (edge cases)
- Verifique validação de campos obrigatórios (nome, email, senha).
- Teste senhas muito curtas (menos de 6 caracteres).
- Teste emails duplicados (não permitir cadastro com email já cadastrado).
- Teste caracteres especiais em nomes, emails inválidos, e payloads vazios.
- Testes unitários com Jest estão em `tests/usuario.test.js`.

## Convenção de commits
Use mensagens claras com prefixos:
- `feat:` implementação de nova funcionalidade (ex: feat: adicionar classe Restaurante)
- `fix:` correção de bug (ex: fix: corrigir validação de email)
- `docs:` alterações em documentação (ex: docs: atualizar README)
- `chore:` tarefas de manutenção (ex: chore: atualizar dependências)

Exemplo de commit:
```text
git commit -m "feat: Adicionar tela de cadastro com validações"
```

## Pull Request e fluxo de entrega
1. Trabalhe na branch `staging` (não faça commit direto em `main`).
2. Faça push para `staging` e abra um Pull Request `staging -> main` com descrição do que foi testado.
3. Após aprovação e testes em staging, faça merge para `main` — o deploy em produção será automático (Vercel).

## Checklist final de entrega (ver `CHECKLIST.md`)
Antes de entregar, verifique:
- [ ] Todos os testes passam (`npm test`)
- [ ] `.env` não está no repositório
- [ ] Links de deploy adicionados ao README
- [ ] Pull Request `staging -> main` criado e revisado

## Autores / Créditos
- Projeto: Emilly Lima Silva
- Auxílio: Copilot / Assistente (documentação e geração de templates)

---

Atualizado: Nov 13, 2025
# tela-de-login

Projeto: tela-de-login

Este repositório contém classes de exemplo em POO e testes unitários Jest para `validarLogin`.

Instalação (Windows Powershell):

```powershell
npm install
npm test
```

Arquivos principais:
- `app.js` - exemplo de uso e referência para `NOTAS.md`.
- `models/` - classes separadas (Usuario, Prato, Restaurante, Musica, Artista).
- `tests/usuario.test.js` - testes Jest para `validarLogin`.
- `NOTAS.md` - explicações sobre hashing/salting, edge cases e casos de teste.

Importante:
- Trabalhe na branch `staging`. Não faça commit direto na `main`.
- `.env.example` deve conter as chaves sem valores reais. O arquivo `.env` com segredos NÃO deve ser comitado.
