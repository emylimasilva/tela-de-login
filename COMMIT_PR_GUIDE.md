# 📝 GUIA: Primeiro Commit + Pull Request (Semana 1)

## 1️⃣ PREPARAR PARA COMMIT

### Passo 1.1: Verificar Branch

Abrir Terminal (PowerShell) na pasta do projeto:

```powershell
cd c:\Users\lima_gabrielly\tela-de-login

# Verificar branch atual
git branch

# Saída esperada:
# * staging
#   main
```

Se **NÃO** estiver em `staging`:
```powershell
git checkout staging
```

### Passo 1.2: Verificar Status

```powershell
git status

# Saída esperada:
# On branch staging
# Changes not staged for commit:
#   modified:   app.js
#   modified:   models/Usuario.js
#   ...
# Untracked files:
#   index.html
#   style.css
#   CHECKLIST.md
#   TEÓRICO.md
#   TESTES.md
```

---

## 2️⃣ FAZER O COMMIT

### Passo 2.1: Adicionar Todos os Arquivos

```powershell
git add .
```

**O que faz**: Prepara todos os arquivos para commit.

### Passo 2.2: Criar o Commit

```powershell
git commit -m "feat: Implementar tela de login/cadastro com POO e LocalStorage

- Criar index.html com formulários de Login e Cadastro
- Criar style.css responsivo com Flexbox e animações
- Atualizar app.js com lógica de frontend (validação, cadastro, login)
- Integrar classe Usuario para validações de login
- Usar LocalStorage para persistir dados de usuários (Semana 1)
- Adicionar comentários explicativos do Copilot
- Adicionar testes manuais (TESTES.md)
- Adicionar documentação teórica (TEÓRICO.md)
"
```

**Explicação da mensagem**:
- Primeira linha: resumo (imperativo, máx 50 caracteres)
- Linha em branco
- Descrição detalhada (máx 72 caracteres por linha)

### Passo 2.3: Verificar Commit

```powershell
git log --oneline -3

# Saída esperada:
# abc1234 feat: Implementar tela de login/cadastro com POO e LocalStorage
# def5678 (commit anterior)
# ghi9012 (commit anterior)
```

---

## 3️⃣ FAZER PUSH PARA STAGING

```powershell
git push origin staging

# Saída esperada:
# Enumerating objects: 8, done.
# Counting objects: 100% (8/8), done.
# To https://github.com/emylimasilva/tela-de-login.git
#  * [new branch]      staging -> staging
```

✅ **Commit está no GitHub em `staging`!**

---

## 4️⃣ CRIAR PULL REQUEST NO GITHUB

### Passo 4.1: Ir ao GitHub

Abrir: https://github.com/emylimasilva/tela-de-login

### Passo 4.2: Clicar em "Pull requests"

Você verá botão amarelo: **"Compare & pull request"**

Se não aparecer, clique em **"Pull requests"** → **"New pull request"**

### Passo 4.3: Configurar PR

1. **Base**: `main` (destino - produção)
2. **Compare**: `staging` (origem - seu trabalho)

Deve aparecer:

```
staging  ──────►  main
   ↑
   Seu trabalho aqui
```

### Passo 4.4: Preencher Informações

**Título**:
```
v1: Tela de login/cadastro com validação local
```

**Descrição** (copiar/colar):
```markdown
# v1 - Tela de Login/Cadastro

## ✅ O que foi feito?

### Frontend (HTML/CSS/JS)
- ✅ Criado `index.html` com formulários de Login e Cadastro
- ✅ Criado `style.css` responsivo com Flexbox, animações e design moderno
- ✅ Atualizado `app.js` com lógica de frontend:
  - Validação de formulários
  - Cadastro de novos usuários
  - Login com verificação
  - Persistência em LocalStorage

### Classes POO
- ✅ Classe `Usuario` com:
  - `constructor(nome, email, senha)`
  - `validarLogin(email, senha)` - retorna boolean
  - `exibirInfo()` - retorna string com dados
- ✅ Comentários explicativos do Copilot (constructor, this, ===)

### Documentação
- ✅ Adicionado `TESTES.md` com 10 testes manuais
- ✅ Adicionado `TEÓRICO.md` para a prova (frameworks, IoC, segurança, deploy)
- ✅ Adicionado `CHECKLIST.md` com status do projeto

### Segurança (Semana 1)
- ✅ `.gitignore` configurado
- ✅ `.env.example` criado (template)
- ✅ Validação básica de inputs

## 🎯 Status
- **Branch**: `staging` (homologação)
- **Ambiente**: LocalStorage (antes de MongoDB)
- **Deploy**: Ainda não feito (Semana 2)

## 🧪 Como Testar?
```bash
npm install -g http-server
http-server .
# Abrir http://localhost:8080
```

Veja `TESTES.md` para testes manuais detalhados.

## 📋 Próximas Etapas (Semana 2)
- [ ] Conectar MongoDB Atlas
- [ ] Configurar Vercel
- [ ] Fazer deploy em staging
- [ ] Fazer merge final para produção

## ⚠️ IMPORTANTE
- **NÃO FAZER MERGE AGORA** - Este PR é apenas para revisão
- Testes locais passando (veja TESTES.md)
- Todos os arquivos sensíveis em .gitignore
```

### Passo 4.5: Revisar Antes de Submeter

Verificar:
- ✅ Base = `main` (destino correto)
- ✅ Compare = `staging` (origem correta)
- ✅ Título claro
- ✅ Descrição detalhada
- ✅ Botão de merge visível (mas NÃO clicar!)

### Passo 4.6: Criar o PR

Clique em **"Create pull request"**

✅ **PR Criado!**

---

## 5️⃣ VERIFICAR PR NO GITHUB

### Após criar:

1. GitHub faz testes automáticos (pode levar 1-2 min)
2. Você verá checkmarks verdes: ✅ All checks passed
3. Aparece botão **"Merge pull request"** (NÃO CLICAR AGORA!)

### Deixar comentário (opcional mas recomendado):

Em "Conversation", escreva:

```
@emylimasilva

Esta é a V1 do projeto, pronta para testes em homologação (staging).

Tarefas concluídas:
✅ HTML/CSS responsivo
✅ Formulários de login/cadastro
✅ Classes POO com explicações
✅ LocalStorage funcional
✅ Validação básica

Próximos passos:
⏳ MongoDB Atlas (Semana 2)
⏳ Deploy em Vercel
⏳ Testes em staging

Todos os testes manuais passando. Veja TESTES.md para detalhes.
```

---

## 📊 FLUXO VISUAL

```
Seu computador (Local)
        ↓
git add .
git commit
        ↓
git push origin staging
        ↓
GitHub - Branch staging
        ↓
Cria Pull Request
staging → main
        ↓
GitHub Actions (Testes)
        ↓
✅ Checks Passed
        ↓
PR aguardando review
(NÃO FAZER MERGE)
        ↓
Semana 2: Faz merge manual
```

---

## ⚠️ ERROS COMUNS

### Erro: "Nothing to commit, working tree clean"

**Causa**: Você já fez commit recente.

**Solução**: Coloque mais uma linha no `app.js` e tente novamente.

```powershell
# Ver últimos commits
git log --oneline -5
```

### Erro: "Your branch is ahead of origin/staging"

**Causa**: Commits locais não foram pushed.

**Solução**:
```powershell
git push origin staging
```

### Erro: "Please tell me who you are" ao commitar

**Causa**: Git não sabe seu email/nome.

**Solução**:
```powershell
git config --global user.email "seu@email.com"
git config --global user.name "Seu Nome"
git commit -m "..."
```

### Erro: "Merge conflict"

**Causa**: Outra pessoa modificou o mesmo arquivo.

**Solução** (Semana 1, improvável):
```powershell
git pull origin staging
# Edite os conflitos manualmente
# Depois: git add . && git commit
```

---

## ✅ CHECKLIST FINAL

- [ ] Testei a aplicação localmente (http-server)
- [ ] Todos os 10 testes passam (TESTES.md)
- [ ] Rodei `git status` e não há "untracked" perigosos
- [ ] Rodei `git add .`
- [ ] Rodei `git commit -m "..."`
- [ ] Rodei `git push origin staging`
- [ ] Acessei GitHub e a branch `staging` tem meus arquivos
- [ ] Criei Pull Request `staging → main`
- [ ] Preenchi título e descrição do PR
- [ ] **NÃO CLIQUEI em "Merge pull request"**

---

## 🎉 PRONTO!

Seu primeiro commit e PR estão no GitHub!

**Próximos passos**:
1. Esperar feedback (ou avançar se for trabalho individual)
2. Semana 2: Começar MongoDB
3. Semana 2: Deploy em Vercel
4. Semana 2: Fazer merge final

---

## 🔗 LINKS RÁPIDOS

- [Seu repo](https://github.com/emylimasilva/tela-de-login)
- [Pull Requests](https://github.com/emylimasilva/tela-de-login/pulls)
- [Git Docs](https://git-scm.com/doc)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

Sucesso! 🚀
