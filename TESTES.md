# 🧪 GUIA DE TESTES - Tela de Login/Cadastro

## ✅ COMO TESTAR LOCALMENTE

### PASSO 1: Instalar HTTP Server (para servir o HTML)

```powershell
# Instalar globalmente
npm install -g http-server

# Ou instalar localmente no projeto
npm install --save-dev http-server
```

### PASSO 2: Rodar o Servidor

```powershell
# Na pasta do projeto c:\Users\lima_gabrielly\tela-de-login
cd c:\Users\lima_gabrielly\tela-de-login

# Rodar o servidor
http-server .

# Saída esperada:
# Starting up http-server, serving .
# Available on:
#   http://localhost:8080
#   http://127.0.0.1:8080
# Hit CTRL-C to stop the server
```

### PASSO 3: Abrir no Navegador

Abrir: **http://localhost:8080**

Você deve ver:
- ✅ Tela com fundo gradiente roxo
- ✅ Formulário de Login (aba ativa)
- ✅ Aba de Cadastro
- ✅ Seção "Usuários Cadastrados"

---

## 🎯 TESTES FUNCIONAIS

### TESTE 1: Cadastro com Sucesso

1. Clique na aba **"Cadastro"**
2. Preencha:
   - **Nome**: João Silva
   - **Email**: joao@test.com
   - **Senha**: senha123
   - **Confirmar Senha**: senha123
3. Clique em **"Cadastrar"**

**Resultado Esperado**:
- ✅ Mensagem verde: "✓ Usuário João Silva cadastrado com sucesso!"
- ✅ Formulário limpo
- ✅ Volta automaticamente para aba Login
- ✅ "Usuários Cadastrados" mostra: "João Silva (joao@test.com)"

---

### TESTE 2: Validação de Senhas Diferentes

1. Na aba **"Cadastro"**
2. Preencha:
   - **Nome**: Maria
   - **Email**: maria@test.com
   - **Senha**: senha123
   - **Confirmar Senha**: senha456 (DIFERENTE!)
3. Clique em **"Cadastrar"**

**Resultado Esperado**:
- ❌ Mensagem vermelha: "As senhas não conferem!"
- ❌ Formulário NÃO limpo
- ❌ Usuário NÃO cadastrado

---

### TESTE 3: Senha Muito Curta

1. Na aba **"Cadastro"**
2. Preencha:
   - **Nome**: Pedro
   - **Email**: pedro@test.com
   - **Senha**: 123 (MENOS de 6 caracteres!)
   - **Confirmar Senha**: 123
3. Clique em **"Cadastrar"**

**Resultado Esperado**:
- ❌ Mensagem vermelha: "Senha deve ter pelo menos 6 caracteres!"

---

### TESTE 4: Email Já Cadastrado

1. Primeira: Cadastre "joao@test.com" (TESTE 1)
2. Depois: Tente cadastrar NOVAMENTE com "joao@test.com"

**Resultado Esperado**:
- ❌ Mensagem vermelha: "Este email já está cadastrado!"

---

### TESTE 5: Login com Sucesso

1. Cadastre um usuário (use TESTE 1)
2. Aba **"Login"** (padrão)
3. Preencha:
   - **Email**: joao@test.com
   - **Senha**: senha123
4. Clique em **"Entrar"**

**Resultado Esperado**:
- ✅ Mensagem verde: "✓ Bem-vindo, João Silva!"
- ✅ Console mostra: `Login bem-sucedido: Usuário: João Silva, Email: joao@test.com`
- ✅ Formulário limpo

**Como ver Console?**
Pressione: **F12** → Aba **"Console"**

---

### TESTE 6: Login com Email Errado

1. Na aba **"Login"**
2. Preencha:
   - **Email**: ninguem@test.com (não existe!)
   - **Senha**: senha123
3. Clique em **"Entrar"**

**Resultado Esperado**:
- ❌ Mensagem vermelha: "Email não encontrado!"

---

### TESTE 7: Login com Senha Errada

1. Cadastre um usuário (use TESTE 1)
2. Na aba **"Login"**
3. Preencha:
   - **Email**: joao@test.com (CORRETO)
   - **Senha**: senhaerrada (ERRADA!)
4. Clique em **"Entrar"**

**Resultado Esperado**:
- ❌ Mensagem vermelha: "Email ou senha incorretos!"

---

### TESTE 8: Campos Obrigatórios

1. Na aba **"Cadastro"**
2. Deixe tudo em branco
3. Clique em **"Cadastrar"**

**Resultado Esperado**:
- ❌ Navegador mostra validação de HTML (campo obrigatório)
- ❌ Mensagem vermelha: "Preencha todos os campos!"

---

### TESTE 9: LocalStorage Persiste

1. Cadastre 2 usuários (TESTE 1 + TESTE 2)
2. Atualize a página (F5)
3. Verifique "Usuários Cadastrados"

**Resultado Esperado**:
- ✅ Ambos os usuários ainda aparecem!
- ✅ Dados persistiram no LocalStorage

**Como ver LocalStorage?**
Pressione: **F12** → **"Application"** → **"Local Storage"** → `http://localhost:8080`
Procure por chave: `usuarios_app`

---

### TESTE 10: Limpar LocalStorage

1. Cadastre usuários
2. Clique no botão **"Limpar Dados"**
3. Confirme no popup "Deseja realmente limpar todos os usuários?"

**Resultado Esperado**:
- ✅ Mensagem verde: "Dados apagados!"
- ✅ "Usuários Cadastrados" volta a: "Nenhum usuário cadastrado ainda..."

---

## 📊 TABELA DE TESTES

| # | Teste | Status |
|---|-------|--------|
| 1 | Cadastro com sucesso | ⏳ Fazer |
| 2 | Validação senhas diferentes | ⏳ Fazer |
| 3 | Senha muito curta | ⏳ Fazer |
| 4 | Email já cadastrado | ⏳ Fazer |
| 5 | Login com sucesso | ⏳ Fazer |
| 6 | Login email errado | ⏳ Fazer |
| 7 | Login senha errada | ⏳ Fazer |
| 8 | Campos obrigatórios | ⏳ Fazer |
| 9 | LocalStorage persiste | ⏳ Fazer |
| 10 | Limpar dados | ⏳ Fazer |

---

## 🐛 TROUBLESHOOTING

### Problema: "http-server não encontrado"
**Solução**:
```powershell
npm install -g http-server
# Fecha PowerShell e abre novamente
http-server .
```

### Problema: "Porta 8080 já em uso"
**Solução**:
```powershell
# Rodar em porta diferente
http-server . -p 3000
# Abrir: http://localhost:3000
```

### Problema: Usuários desaparecem ao recarregar
**Solução**: LocalStorage apenas funciona via HTTP, não via `file://`
- Use `http-server` (como acima)
- NÃO clique duas vezes no HTML

### Problema: Mensagens não aparecem
**Solução**: Abrir Console (F12) e procurar erros
- Mensagens aparecem por 4 segundos
- Se fechar aba rapidamente, pode não ver

---

## ✅ CHECKLIST PARA SUBMIT

Antes de commitar, verific

ue:

- [ ] `http-server .` roda sem erros
- [ ] Página abre em http://localhost:8080
- [ ] Todos os 10 testes passam (veja tabela acima)
- [ ] Console (F12) não tem erros em vermelho
- [ ] LocalStorage salva dados
- [ ] Responsividade funciona (redimensionar janela)
- [ ] Botões e formulários respondem ao clique

---

## 🎯 PRÓXIMO PASSO

Após testes aprovados:
```powershell
git add .
git commit -m "feat: Tela de login/cadastro com validação local"
git push origin staging
```

Depois criar Pull Request no GitHub!

---

Tudo ok? 🚀
