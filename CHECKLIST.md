# 📋 CHECKLIST DO PROJETO - Tela de Login/Cadastro

## ✅ SEMANA 1 - DESENVOLVIMENTO (Atual)

### ✅ CONCLUÍDO AGORA:
- [x] **HTML/CSS Responsivo** (`index.html` + `style.css`)
  - Formulário de Login
  - Formulário de Cadastro (com abas)
  - Design responsivo (mobile/desktop)
  - Animações e transições

- [x] **Integração Front-End com Classes POO** (`app.js`)
  - `handleCadastro()` - valida e salva novo usuário
  - `handleLogin()` - valida login usando classe Usuario
  - `mostrarAba()` - alterna entre abas
  - `carregarUsuarios()` e `salvarUsuarios()` - LocalStorage
  - Comentários explicativos do Copilot

- [x] **Classes POO com Explicações** (já existiam)
  - `models/Usuario.js` com constructor, validarLogin, exibirInfo
  - `models/Prato.js`, `Restaurante.js`, `Artista.js`, `Musica.js`
  - Todos com comentários explicativos do Copilot

- [x] **Segurança Básica**
  - `.gitignore` criado
  - `.env.example` criado
  - Branch `staging` existe
   - `.env.example` atualizado com `DB_URL` e `JWT_SECRET`
   - Confirme que o arquivo real `.env` está listado em `.gitignore` (VERIFICADO)

### ❌ AINDA FALTA (PRIORITÁRIO):

1. **GitHub Issues** → Criar 5-8 issues no repositório para organizar tarefas
2. **Primeiro Commit + PR (Semana 1)**
   ```
   git add .
   git commit -m "feat: Tela de login/cadastro com POO e LocalStorage"
   git push origin staging
   ```
   Depois abrir PR `staging → main` (NÃO FAZER MERGE)

3. **Testar a aplicação no navegador**
   - Abrir `index.html` em http://localhost (ou http-server)
   - Cadastrar usuário
   - Fazer login
   - Verificar se dados aparecem em LocalStorage

---

## 📅 SEMANA 2 - DEPLOY EM PRODUÇÃO

### ❌ AINDA FALTA:

4. **Teoria Documentada** (Para a Prova)
   - [ ] Pesquisar e documentar em `TEÓRICO.md`:
     - Frameworks: Next.js, Django, FastAPI
     - Inversão de Controle (IoC)
     - JWT vs Sessão
     - OAuth
     - CORS
     - OWASP
     - Vercel

5. **MongoDB Atlas** (Banco de Dados Real)
   - [ ] Criar conta em https://www.mongodb.com/cloud/atlas
   - [ ] Criar Cluster
   - [ ] Gerar usuário e API Key
   - [ ] Liberar IP 0.0.0.0/0
   - [ ] Criar Data API
   - [ ] Anotar: `API_URL` e `API_KEY`

6. **Arquivo .env**
   - [ ] Criar `.env` (não commitar!)
   - Exemplo:
     ```
     API_URL=https://seu-cluster.mongodb.com/api/atlas/v2/...
     API_KEY=sua-chave-secreta-aqui
     ```

7. **Conectar Front ao MongoDB** (app.js)
   - [ ] Substituir LocalStorage por Fetch API
   - [ ] Chamar MongoDB Data API para salvar/recuperar usuários
   - [ ] Usar `process.env.API_URL` e `process.env.API_KEY`

8. **Deploy em Vercel (Staging)**
   - [ ] Criar conta https://vercel.com (com GitHub)
   - [ ] Importar repositório
   - [ ] Configurar Environment Variables (Secrets)
   - [ ] Fazer deploy da branch `staging`
   - [ ] Testar em https://projeto-staging.vercel.app

9. **Merge Final para Produção**
   - [ ] Ir ao GitHub
   - [ ] Abrir PR `staging → main` (criada na Semana 1)
   - [ ] Fazer MERGE
   - [ ] Vercel automaticamente faz deploy na `main`
   - [ ] Site live em https://projeto.vercel.app

10. **Prova Teórica**
    - [ ] Usar prompt DevOps no Copilot Chat
    - [ ] Documentar respostas
    - [ ] Entregar relatório explicando todo o fluxo

---

## 🎯 PRÓXIMOS PASSOS IMEDIATOS:

### 1. Testar a Aplicação
```powershell
# Terminal: instalar http-server para testar
npm install -g http-server

# Na pasta do projeto
http-server .

# Abrir em http://localhost:8080
```

### 2. Criar GitHub Issues
Ir até: https://github.com/emylimasilva/tela-de-login/issues

Criar:
- Issue #1: Criar estrutura HTML/CSS base ✓ FEITO
- Issue #2: Modelar classes de POO ✓ FEITO
- Issue #3: Integrar Front-End com Classes
- Issue #4: Configurar MongoDB Atlas
- Issue #5: Deploy em Vercel (Staging)
- Issue #6: Merge para Produção
- Issue #7: Documentar Teoria (DevOps/Segurança)

### 3. Primeiro Commit (Semana 1)
```powershell
# Verificar branch
git branch

# Se não estiver em staging:
git checkout staging

# Adicionar files
git add .

# Commit
git commit -m "feat: Implementar tela de login/cadastro com POO e LocalStorage

- Criar index.html com formulários Login e Cadastro
- Criar style.css responsivo com animações
- Atualizar app.js com lógica de frontend
- Integrar classe Usuario para validações
- Usar LocalStorage para armazenar usuários (Semana 1)
- Adicionar comentários explicativos do Copilot
"

# Push
git push origin staging
```

### 4. Criar Pull Request
- Ir ao GitHub
- Branch `staging` → Pull Request para `main`
- Título: "v1: Tela de login/cadastro pronta para staging"
- Descrição: "Esta é a V1 do projeto com formulários HTML/CSS, classes POO, e LocalStorage. Pronta para testes antes de conectar MongoDB."
- **NÃO FAZER MERGE AINDA**

---

## ✅ CHECKLIST FINAL DE ENTREGA (1 a 12)

Marque cada item quando concluído. Objetivo: fechar ciclo CI/CD (staging → produção).

1) [x] TEÓRICO: pesquisa e documento em `TEÓRICO.md` (Frameworks, IoC, segurança)
2) [x] PLANEJAMENTO: Issues criadas (3 issues principais) — ver `ISSUES_TEMPLATES.md`
3) [ ] GIT: Verificar branch `staging` e trabalhar nela
4) [ ] PRÁTICO: Testar aplicação localmente (http-server) e validar `TESTES.md`
5) [ ] GIT: Fazer commit e push para `staging`
6) [ ] GIT: Abrir Pull Request `staging → main` (colar `PR_V1_DESCRIPTION.md`) — NÃO MERGEAR ainda
7) [ ] SEGURANÇA: Criar `.env` local com as variáveis reais (ver `.env.example`) — NÃO COMITAR
8) [ ] BACKEND: Criar MongoDB Atlas (Cluster, Data API) e anotar `API_URL`/`API_KEY`
9) [ ] INTEGRAÇÃO: Atualizar `app.js` para usar Fetch API com `API_URL`/`API_KEY`
10) [ ] DEPLOY: Configurar Vercel (Production = main) e adicionar environment variables (secrets)
11) [ ] TESTES AUTOMATIZADOS: Garantir que os testes unitários (Jest) passam na CI (rodar `npm test` no pipeline)
12) [ ] MERGE FINAL: Após testes em staging, fazer merge `staging → main` e verificar deploy em produção

---

Atualizado: Nov 13, 2025

---

## 📚 REFERÊNCIAS E EXPLICAÇÕES

### O que cada arquivo faz?

| Arquivo | Propósito | Status |
|---------|-----------|--------|
| `index.html` | Interface (formulários) | ✅ Criado |
| `style.css` | Estilos responsivos | ✅ Criado |
| `app.js` | Lógica de negócio (frontend) | ✅ Atualizado |
| `models/Usuario.js` | Classe POO | ✅ Modificado (compatível navegador) |
| `.env` | Segredos (NÃO commitar) | ⏳ Será criado Semana 2 |
| `.env.example` | Template público | ✅ Existe |
| `.gitignore` | Arquivos ignorados | ✅ Correto |

### Copilot: Como explicar cada conceito?

- **Constructor**: Método especial que inicializa objetos
- **This**: Referência à instância atual
- **===**: Comparação estrita (valor e tipo)
- **LocalStorage**: Armazenamento persistente no navegador
- **Validação**: Verificar dados antes de salvar
- **Responsividade**: CSS Flexbox + Media Queries
- **Fetch API**: Comunicação entre Frontend e Backend/MongoDB

---

## 🚀 FLUXO COMPLETO VISUAL

```
SEMANA 1 (Agora)
├─ HTML/CSS ✅
├─ Classes POO ✅
├─ Frontend (app.js) ✅
├─ Commit → staging ⏳
└─ Pull Request ⏳

SEMANA 2
├─ MongoDB Atlas 🔲
├─ Fetch API 🔲
├─ Deploy Staging 🔲
└─ Deploy Produção 🔲

PROVA
└─ Explicar fluxo DevOps 🔲
```

---

## ⚠️ IMPORTANTE

1. **NUNCA** commitar `.env` (contém segredos!)
2. **NUNCA** fazer commit direto em `main` (use `staging`)
3. **SEMPRE** criar branch `staging` antes de trabalhar
4. **SEMPRE** testar no navegador antes de commitar
5. **SEMPRE** adicionar comentários do Copilot explicando código

---

Atualizado: Nov 13, 2025
