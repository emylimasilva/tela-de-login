# 📖 TEORIA PARA A PROVA - Do Zero ao Deploy

## 1️⃣ FRAMEWORKS WEB

### Next.js
**O que é?** Framework React que roda no servidor e navegador.
- **Vantagens**: SEO, performance, deploy fácil (Vercel)
- **Uso**: Sites de e-commerce, portfólios, blogs
- **Exemplo**: Você pode reescrever seu projeto em Next.js na Semana 3

### Django
**O que é?** Framework Python full-stack com ORM, admin, autenticação built-in.
- **Vantagens**: Seguro por padrão, grande comunidade, rápido de desenvolver
- **Uso**: Sistemas empresariais, redes sociais, fintech
- **Diferença**: Monolítico (backend + frontend juntos)

### FastAPI
**O que é?** Framework Python minimalista para APIs REST com validação automática.
- **Vantagens**: Rápido, moderno, documentação automática (Swagger)
- **Uso**: Microserviços, APIs, backend para mobile
- **Diferença**: Você construir o frontend separadamente

---

## 2️⃣ INVERSÃO DE CONTROLE (IoC)

**O que é?** Princípio onde o framework controla o fluxo da aplicação, não você.

### Sem IoC (Controle Manual):
```javascript
class MinhaApp {
  constructor() {
    this.usuario = new Usuario(); // Você cria a dependência
    this.banco = new Banco();     // Você cria a dependência
  }
}
```

### Com IoC (Injeção de Dependência):
```javascript
class MinhaApp {
  constructor(usuario, banco) {  // Framework passa as dependências
    this.usuario = usuario;
    this.banco = banco;
  }
}
```

**Vantagem**: Mais flexível, testável, desacoplado.

**No seu projeto**: A classe Usuario não depende de nada (já está desacoplada). Em produção, você usaria um framework como Express (Node) ou Django que gerencia isso.

---

## 3️⃣ SEGURANÇA

### JWT (JSON Web Token)
**O que é?** Token estateless para autenticação.
- **Como funciona**: 
  1. Usuário faz login (email + senha)
  2. Servidor gera JWT (inclui: user_id, exp, secret)
  3. Cliente armazena JWT no localStorage
  4. Cliente envia JWT em cada requisição (header)
  5. Servidor valida JWT e processa requisição

**Vantagem**: Não precisa de sessão no servidor, escalável

### Sessão (Cookie-based)
**O que é?** Servidor armazena dados de quem está logado.
- **Como funciona**:
  1. Usuário faz login
  2. Servidor cria sessão (id único)
  3. Servidor manda cookie ao cliente
  4. Cliente envia cookie em cada requisição
  5. Servidor busca sessão no banco/cache

**Vantagem**: Mais seguro (server-controlled), revogável instantaneamente

**No seu projeto (Semana 1)**: Você usa localStorage (sem token). Em Semana 2, adicionar JWT. Em produção, empresas usam ambos (JWT + Refresh Token).

### OAuth
**O que é?** Login com contas de terceiros (Google, GitHub, Facebook).
- **Fluxo**:
  1. Usuário clica "Entrar com Google"
  2. Redireciona para Google
  3. Usuário autoriza
  4. Google redireciona com código
  5. Seu app valida código com Google
  6. Cria sessão/JWT local

**No seu projeto**: Semana 3 você pode adicionar.

### CORS (Cross-Origin Resource Sharing)
**O que é?** Política de segurança que controla requisições entre domínios.

**Problema**: Seu frontend em `staging.vercel.app` quer chamar MongoDB em `mongodb.com`.

**Solução**: Configurar CORS:
```javascript
// Backend (Express):
app.use(cors({
  origin: 'https://staging.vercel.app',
  credentials: true
}));
```

**No seu projeto**: Quando conectar Fetch API ao MongoDB, pode aparecer erro CORS. Solução: usar MongoDB Data API (já tem CORS habilitado).

### .env (Environment Variables)
**O que é?** Arquivo com configurações sensíveis.

```
API_URL=https://...
API_KEY=sua-chave-secreta
JWT_SECRET=abc123xyz
DB_PASSWORD=senhadobanco
```

**Por que .env deve estar em .gitignore?**
Se você subir para GitHub sem adicionar ao .gitignore:
- Hackers veem suas chaves no histórico do Git
- Alguém cria instâncias na sua conta AWS/MongoDB
- Seu banco de dados é acessado por terceiros
- Você acaba pagando centenas de dólares

**Solução Correta**:
```bash
# Arquivo .gitignore
.env
node_modules/

# Arquivo .env (NUNCA COMMITAR)
API_KEY=sk-1234567890abcdef

# Arquivo .env.example (PODE COMMITAR)
API_KEY=
```

### OWASP (Top 10 Vulnerabilidades)
1. **Injection (SQL/NoSQL)**: Validar TODOS os inputs
2. **Broken Auth**: Use bcrypt para hash de senha
3. **XSS**: Escape HTML/JavaScript
4. **CSRF**: Use tokens únicos
5. **Sensitive Data Exposure**: Use HTTPS sempre
6. **Broken Access**: Valide permissões no backend
7. **XXE**: Desabilite XML parsing
8. **Broken Objects**: Valide IDs antes de retornar dados
9. **Log/Monitoring**: Registre tentativas de login
10. **Broken Config**: Nunca deixe modo debug em produção

**No seu projeto**: 
- ✅ Validação básica (Semana 1)
- ⏳ Hash de senha com bcrypt (Semana 2)
- ⏳ JWT para token (Semana 2)
- ⏳ HTTPS via Vercel (Semana 2)

---

## 4️⃣ DEPLOY

### Vercel
**O que é?** Plataforma de deploy otimizada para Next.js/Frontend.

**Como funciona**:
1. Você conecta seu GitHub
2. Vercel monitora branches
3. `staging` → Preview Deployment
4. `main` → Production Deployment
5. Cada push dispara deploy automático (CI/CD)

**No seu projeto**:
- Branch `staging` → https://projeto-staging.vercel.app
- Branch `main` → https://projeto.vercel.app

### SSL/HTTPS
**O que é?** Criptografia entre navegador e servidor.

**Importância**: 
- Navegador: 🔒 indica site seguro
- Google: Favorece sites HTTPS no ranking
- Dados: Email/senha/cartão criptografados
- OWASP: Exigência #5

**Vercel**: Fornece SSL automaticamente (domínio vercel.app)

Para domínio customizado (ex: meusite.com):
- Comprar domínio (GoDaddy, Namecheap)
- Apontar DNS para Vercel
- Vercel gera certificado Let's Encrypt grátis

---

## 5️⃣ MONGODB ATLAS

**O que é?** Banco de dados NoSQL gerenciado na nuvem.

**Estrutura**:
```
Cluster
├─ Database
│  ├─ Collection "usuarios"
│  │  ├─ { _id, nome, email, senha_hash }
│  │  └─ { _id, nome, email, senha_hash }
│  └─ Collection "musicas"
│     └─ { _id, titulo, artista }
```

**Data API**: Interface REST para MongoDB (sem Node.js necessário!)

```javascript
// Fetch API → MongoDB
const response = await fetch('https://seu-cluster.mongodb.com/api/atlas/v2/...', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'api-key': process.env.API_KEY
  },
  body: JSON.stringify({
    collection: 'usuarios',
    database: 'meu_app',
    dataSource: 'Cluster0',
    document: {
      nome: 'João',
      email: 'joao@mail.com',
      senha_hash: bcrypt('senha123')
    }
  })
});
```

---

## 6️⃣ GIT E CI/CD

### Branch Strategy
```
main (Produção - Sempre funciona)
├─ staging (Homologação - Testa antes de prod)
│  ├─ feature/login
│  ├─ feature/cadastro
│  └─ bugfix/validacao
```

### Pull Request (PR)
**O que é?** Proposta de mudança no código.

**Fluxo**:
1. Você trabalha em `feature/login`
2. Cria PR `feature/login → staging`
3. Time revisa código
4. Se OK, faz merge
5. Volta para `feature/login` e continua

**No seu projeto**:
```
staging (Semana 1 - Seu trabalho aqui)
↓ Semana 1: Cria PR `staging → main` (sem merge)
↓ Semana 2: Testa em staging
↓ Semana 2: Faz merge final `staging → main`
```

### CI/CD (Continuous Integration/Deployment)
**CI**: Testar código automaticamente
**CD**: Deploy automático após testes

**Exemplo Vercel**:
```
Você faz: git push origin staging
        ↓
Vercel recebe webhook
        ↓
Roda testes (npm test)
        ↓
Build projeto
        ↓
Deploy em https://projeto-staging.vercel.app
        ↓
Você testa no navegador
```

---

## 🎯 FLUXO COMPLETO DO SEU PROJETO

```
SEMANA 1: Frontend Local
┌─────────────────────────────────────────┐
│ Você escreve:                           │
│ - HTML/CSS (index.html + style.css)    │
│ - Classes POO (models/Usuario.js)      │
│ - Frontend Logic (app.js)              │
│ - LocalStorage para dados              │
│                                         │
│ Tools: VS Code + Git                   │
│ Teste: Abrir index.html no navegador   │
└─────────────────────────────────────────┘
         ↓
    git commit
    git push origin staging
         ↓
  Pull Request criado
 (NÃO faz merge ainda)

SEMANA 2: Backend + Deploy
┌─────────────────────────────────────────┐
│ Você configura:                         │
│ - MongoDB Atlas (DB real)              │
│ - .env com chaves (API_URL, API_KEY)  │
│ - Fetch API em app.js                  │
│ - Vercel conta                          │
│                                         │
│ Vercel auto-detecta branch staging:    │
│ Faz Preview Deploy                     │
│ → https://projeto-staging.vercel.app   │
└─────────────────────────────────────────┘
         ↓
    Testa em staging
    Tudo funcionando?
         ↓
    Volta ao GitHub
    Faz merge `staging → main`
         ↓
  Vercel detecta merge
  Production Deploy
  → https://projeto.vercel.app
         ↓
    🎉 LIVE EM PRODUÇÃO!

PROVA
└─ Explique cada conceito acima
```

---

## 💾 RESUMO PARA MEMORIZAR NA PROVA

| Conceito | Resumo |
|----------|--------|
| **Framework** | Código reutilizável que organiza seu projeto |
| **IoC** | Framework controla fluxo, não você |
| **JWT** | Token stateless para autenticação |
| **Sessão** | Dados armazenados no servidor |
| **OAuth** | Login com contas de terceiros |
| **CORS** | Controla requisições entre domínios |
| **.env** | Arquivo com segredos (NÃO COMMITAR) |
| **OWASP** | Top 10 vulnerabilidades web |
| **Vercel** | Deploy automático de frontend |
| **MongoDB** | Banco NoSQL gerenciado |
| **Data API** | Interface REST para MongoDB |
| **CI/CD** | Testar e deploy automático |
| **Branch** | Linha de desenvolvimento isolada |
| **PR** | Proposta de mudança no código |
| **SSL/HTTPS** | Criptografia web (segurança) |

---

## 🔗 LINKS ÚTEIS

- [Next.js Docs](https://nextjs.org)
- [Django Docs](https://www.djangoproject.com)
- [FastAPI Docs](https://fastapi.tiangolo.com)
- [JWT Intro](https://jwt.io/introduction)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Vercel Docs](https://vercel.com/docs)

---

Preparado para a prova! 🚀
