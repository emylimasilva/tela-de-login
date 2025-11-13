# 🎯 ROTEIRO IMEDIATO - O QUE FAZER AGORA

## 📌 VOCÊ ESTÁ AQUI (Nov 13, 2025)

Você tem:
- ✅ Classes POO prontas
- ✅ Git configurado
- ✅ Branch staging criada
- ❌ HTML/CSS criados (ACABEI DE CRIAR)
- ❌ App.js integrado (ACABEI DE ATUALIZAR)

---

## 🚀 PRÓXIMOS 7 PASSOS (Hoje - Antes de Dormir)

### PASSO 1: Testar a Aplicação Localmente ⏱️ 10 min
```powershell
npm install -g http-server
cd c:\Users\lima_gabrielly\tela-de-login
http-server .
# Abrir http://localhost:8080 no navegador
```

**O que esperar**: Página com gradiente roxo, formulários funcionando, sem erros no console (F12).

**TESTE RÁPIDO**:
1. Cadastre um usuário (Teste TESTE_1 em TESTES.md)
2. Faça login com essas credenciais
3. Recarregue página (F5) - dados ainda lá?
4. Veja console (F12) - erros em vermelho?

✅ Se tudo ok → Vai para PASSO 2

---

### PASSO 2: Criar 3 Issues no GitHub ⏱️ 5 min

Ir para: https://github.com/emylimasilva/tela-de-login/issues

Clicar em **"New issue"** (3 vezes):

**Issue #1:**
```
Title: [TEÓRICO] Pesquisar Frameworks e IoC
Description:
- Estudar Next.js, Django, FastAPI
- Entender Inversão de Controle
- Documentar em TEÓRICO.md (já feito!)
- Preparar para prova teórica
```

**Issue #2:**
```
Title: [PRÁTICO] Tela Login/Cadastro v1 (LocalStorage)
Description:
- HTML/CSS responsivo ✅
- Classes POO ✅
- Validação de formulários ✅
- Persistência LocalStorage ✅

Próximos: MongoDB, Fetch API
```

**Issue #3:**
```
Title: [DEPLOY] Configurar MongoDB + Vercel (Semana 2)
Description:
- [ ] MongoDB Atlas
- [ ] Fetch API
- [ ] Deploy Staging
- [ ] Deploy Produção
```

---

### PASSO 3: Fazer Primeiro Commit ⏱️ 5 min

```powershell
cd c:\Users\lima_gabrielly\tela-de-login

# Verificar branch
git branch
# Deve estar em: * staging

# Ver status
git status

# Adicionar tudo
git add .

# Commit
git commit -m "feat: Implementar tela de login/cadastro com POO e LocalStorage

- index.html com formulários (login + cadastro)
- style.css responsivo (Flexbox, animações)
- app.js com validações e LocalStorage
- Classe Usuario integrada
- Testes documentados em TESTES.md
- Teoria documentada em TEÓRICO.md"

# Push
git push origin staging
```

✅ Se tudo ok → Você verá mensagem de sucesso

---

### PASSO 4: Criar Pull Request ⏱️ 5 min

1. Ir para: https://github.com/emylimasilva/tela-de-login
2. Clicar em botão amarelo **"Compare & pull request"**
3. Verificar:
   - Base: `main` ✅
   - Compare: `staging` ✅
4. Título:
   ```
   v1: Tela de login/cadastro com validação local
   ```
5. Descrição (colar do arquivo `COMMIT_PR_GUIDE.md` - seção "Passo 4.4")
6. Clicar **"Create pull request"**

✅ **NÃO FAZER MERGE** (esperar Semana 2)

---

### PASSO 5: Verificar CI/CD no GitHub ⏱️ 2 min

GitHub Actions podem rodar (testes automáticos).

Espere até ver ✅ checkmarks verdes.

Se houver ❌ erros, abrir logs e debugar.

---

### PASSO 6: Ler e Documentar a Teoria ⏱️ 30 min

Arquivo já criado: **TEÓRICO.md**

**Ler seções**:
1. Frameworks (Next.js, Django, FastAPI)
2. Inversão de Controle (IoC)
3. Segurança (JWT, OAuth, CORS, .env, OWASP)
4. Deploy (Vercel, SSL)

**Tomar notas** sobre o que NÃO entendeu.

---

### PASSO 7: Preparar Lista de Dúvidas ⏱️ 10 min

Se tiver dúvidas:
- Abra Copilot Chat
- Pergunte sobre conceitos
- Cole respostas em `NOTAS_DUVIDAS.md`

Exemplos:
- "Explique OAuth de forma simples"
- "Por que JWT é melhor que sessão?"
- "O que é CORS?"

---

## 🎯 FIM DO DIA = STATUS

```
✅ Aplicação local testada e funcionando
✅ 3 Issues criadas no GitHub
✅ Primeiro commit feito
✅ Pull Request criado (sem merge)
✅ Teoria documentada
✅ Pronto para Semana 2 (MongoDB + Deploy)
```

---

## ⏱️ TEMPO TOTAL: ~70 minutos

Se terminar cedo, começa estudar MongoDB (Semana 2):
- Criar conta https://www.mongodb.com/cloud/atlas
- Criar Cluster
- Gerar API Key

---

## 🚨 IMPORTANTE

**NÃO FAÇA**:
- ❌ Não faz merge do PR agora (Semana 2)
- ❌ Não instala MongoDB localmente (usar Atlas)
- ❌ Não faz commit direto na `main`
- ❌ Não suba arquivo `.env` com chaves reais

**SEMPRE FAÇA**:
- ✅ Sempre trabalhe em `staging`
- ✅ Sempre teste localmente antes de push
- ✅ Sempre escreva mensagens de commit descritivas
- ✅ Sempre adicione comentários de explicação (Copilot)

---

## 📚 DOCUMENTOS QUE CRIEI PARA VOCÊ

| Arquivo | Propósito | Status |
|---------|-----------|--------|
| `index.html` | Formulários UI | ✅ Criado |
| `style.css` | Estilos | ✅ Criado |
| `app.js` | Lógica frontend | ✅ Atualizado |
| `models/Usuario.js` | Classe + compatibilidade navegador | ✅ Atualizado |
| `CHECKLIST.md` | Status completo do projeto | ✅ Criado |
| `TEÓRICO.md` | Teoria para prova | ✅ Criado |
| `TESTES.md` | 10 testes manuais | ✅ Criado |
| `COMMIT_PR_GUIDE.md` | Como fazer commit/PR | ✅ Criado |
| Este arquivo | Roteiro imediato | 👈 Você está aqui |

---

## 💾 ESTRUTURA FINAL

```
tela-de-login/
├─ index.html          ✅ Formulários
├─ style.css           ✅ Estilos
├─ app.js              ✅ Lógica
├─ models/
│  ├─ Usuario.js       ✅ (atualizado)
│  ├─ Prato.js         ✅
│  ├─ Restaurante.js   ✅
│  ├─ Artista.js       ✅
│  ├─ Musica.js        ✅
├─ tests/
│  └─ usuario.test.js  ✅
├─ .env                🔲 (Semana 2)
├─ .env.example        ✅
├─ .gitignore          ✅
├─ package.json        ✅
├─ README.md           ✅
├─ CHECKLIST.md        ✅ (novo)
├─ TEÓRICO.md          ✅ (novo)
├─ TESTES.md           ✅ (novo)
└─ COMMIT_PR_GUIDE.md  ✅ (novo)
```

---

## 🤔 FAQ RÁPIDO

**P: Posso fazer merge agora?**
R: Não! Espera Semana 2 quando MongoDB estiver pronto.

**P: Onde fico sabendo se o teste passou?**
R: Abra http://localhost:8080 e procure por bugs. Veja TESTES.md.

**P: E se encontrar erro?**
R: Abra Console (F12) → procure by erro em vermelho → procure a linha em app.js.

**P: Como adiciono MongoDB?**
R: Semana 2! Agora é só LocalStorage.

**P: Vercel vai funcionar com LocalStorage?**
R: Sim, mas Semana 2 você troca por MongoDB.

**P: Como estudo a teoria?**
R: Leia TEÓRICO.md + use Copilot Chat para dúvidas.

---

## 🎉 CHECKLIST FINAL

Antes de dormir, marque as que fez:

- [ ] Rodei `http-server .` e testei
- [ ] Criei 3 issues no GitHub
- [ ] Fiz `git add . && git commit`
- [ ] Fiz `git push origin staging`
- [ ] Criei Pull Request (sem merge)
- [ ] Li TEÓRICO.md
- [ ] Documentei dúvidas (se houver)

Se todas estiverem ✅ → **PRONTO PARA SEMANA 2!**

---

## 📞 DÚVIDAS?

Se ficar preso:
1. Procura no Google: "javascript [seu problema]"
2. Copia o erro do Console (F12) e procura
3. Pergunta ao Copilot Chat
4. Posta no GitHub Discussions (se houver)

---

Boa sorte! 🚀

Começar AGORA com PASSO 1! ⏱️
