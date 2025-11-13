# 🔐 Tela de Login e Cadastro - Projeto Escolar

**Projeto de Atividade: Do Zero ao Deploy**

Um projeto educacional completo sobre desenvolvimento web profissional, com foco em:
- ✅ POO (Programação Orientada a Objetos)
- ✅ Frontend (HTML/CSS/JavaScript)
- ✅ Backend (MongoDB + API)
- ✅ DevOps (Git, GitHub, CI/CD, Vercel)

---

## 📋 Status do Projeto

```
SEMANA 1 ✅ FEITO
├─ HTML/CSS Responsivo
├─ Classes POO com Comentários
├─ Validação de Formulários
├─ LocalStorage para Dados
└─ PR Criado (sem merge)

SEMANA 2 ⏳ PRÓXIMO
├─ MongoDB Atlas
├─ Fetch API
├─ Deploy Vercel
└─ Merge Final
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js + npm instalados
- Git configurado

### Instalação

```powershell
# Instalar dependências
npm install

# Rodar servidor local (para testar HTML)
npm install -g http-server
http-server .

# Abrir no navegador
# http://localhost:8080
```

### Rodar Testes Jest

```powershell
npm test
```

---

## 📁 Estrutura do Projeto

```
tela-de-login/
│
├─ 🌐 FRONTEND
│  ├─ index.html           # Formulários de Login/Cadastro
│  ├─ style.css            # Estilos responsivos
│  └─ app.js               # Lógica de frontend (validação, LocalStorage)
│
├─ 🏗️ CLASSES (POO)
│  └─ models/
│     ├─ Usuario.js        # Classe principal (login, cadastro)
│     ├─ Prato.js          # Exemplo de classe adicional
│     ├─ Restaurante.js    # Exemplo de classe adicional
│     ├─ Artista.js        # Exemplo de classe adicional
│     └─ Musica.js         # Exemplo de classe adicional
│
├─ 🧪 TESTES
│  └─ tests/
│     └─ usuario.test.js   # Testes Jest
│
├─ 📚 DOCUMENTAÇÃO
│  ├─ README.md            # Este arquivo
│  ├─ ROTEIRO_IMEDIATO.md  # O que fazer agora (7 passos)
│  ├─ CHECKLIST.md         # Status completo
│  ├─ TEÓRICO.md           # Teoria para prova
│  ├─ TESTES.md            # 10 testes manuais
│  ├─ COMMIT_PR_GUIDE.md   # Como fazer commit/PR
│  └─ NOTAS.md             # Notas técnicas
│
├─ ⚙️ CONFIG
│  ├─ .env                 # Segredos (NÃO commitar!)
│  ├─ .env.example         # Template público
│  ├─ .gitignore           # Arquivos ignorados
│  └─ package.json         # Dependências
```

---

## 🎯 Arquivos Importantes & Guias

| Arquivo | Propósito | Ler Quando |
|---------|-----------|-----------|
| **ROTEIRO_IMEDIATO.md** | 7 passos para começar AGORA | Agora mesmo! |
| **TESTES.md** | 10 testes manuais para validar | Antes de commit |
| **CHECKLIST.md** | Status completo do projeto | Acompanhar progresso |
| **TEÓRICO.md** | Frameworks, IoC, Segurança, Deploy | Estudar para prova |
| **COMMIT_PR_GUIDE.md** | Como fazer commit + PR | Semana 1 - antes de push |
| **NOTAS.md** | Detalhes técnicos (hashing, edge cases) | Aprofundar conhecimento |

---

## 🔑 Conceitos Principais

### 1. POO (Programação Orientada a Objetos)
Classe `Usuario` com:
- **Constructor**: Inicializa nome, email, senha
- **validarLogin()**: Compara email/senha digitados
- **exibirInfo()**: Retorna dados não-sensíveis

```javascript
const usuario = new Usuario('João', 'joao@mail.com', 'senha123');
console.log(usuario.validarLogin('joao@mail.com', 'senha123')); // true
```

### 2. Frontend + LocalStorage (Semana 1)
- Formulários HTML validados
- CSS responsivo (mobile/desktop)
- Dados persistem em LocalStorage (navegador)
- Sem conexão com servidor ainda

### 3. Backend + MongoDB (Semana 2)
- MongoDB Atlas (banco NoSQL na nuvem)
- Data API (interface REST)
- Fetch API (comunicação frontend ↔ backend)
- Dados persistem em servidor (não só navegador)

### 4. Deploy em Vercel
- Preview Deploy (branch `staging`)
- Production Deploy (branch `main`)
- CI/CD automático (GitHub + Vercel)
- SSL/HTTPS automático

---

## 🌳 Fluxo de Branches (Git)

```
main (Produção - Always Works) ← NÃO FAÇA COMMIT AQUI!
  ↑
  │ Pull Request (revisar)
  │
staging (Homologação - Seu trabalho aqui!)
  ├─ feature/login
  ├─ feature/cadastro
  └─ bugfix/validacao
```

**Regra de Ouro**: `main` = código que está em produção. `staging` = ambiente de testes.

---

## ⚠️ Segurança - NÃO FAÇA

```plaintext
❌ Não commitar arquivo .env (contém chaves!)
❌ Não fazer commit direto na main
❌ Não armazenar senhas em texto claro (usar bcrypt)
❌ Não expor chaves de API no código
❌ Não usar '==' em vez de '===' em validações
```

---

## 📖 Como Estudar Para a Prova

1. Leia **TEÓRICO.md** (conceitos principais)
2. Entenda o fluxo: Local → Staging → Produção
3. Use Copilot Chat para esclarecer dúvidas
4. Use prompt do **passo 12** da atividade original

**Conceitos avaliados**:
- [ ] O que é um Framework?
- [ ] Inversão de Controle (IoC)
- [ ] JWT vs Sessão
- [ ] OAuth
- [ ] CORS
- [ ] .env e .gitignore (segurança)
- [ ] CI/CD (o que Vercel faz)
- [ ] Branch strategy
- [ ] Pull Request workflow
- [ ] Deploy staging vs produção

---

## 🧪 Testes

### Jest (Testes Unitários)
```powershell
npm test
```

Testa:
- `validarLogin()` com dados corretos/incorretos
- Edge cases

### Manuais (Navegador)
```powershell
http-server .
# Abrir http://localhost:8080
# Seguir TESTES.md (10 testes)
```

Testa:
- UI responsiva
- Validação de formulários
- LocalStorage persistência
- Mensagens de erro/sucesso

---

## 📱 Responsividade

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (< 768px)

Usar Ctrl+Shift+I (F12) no navegador → Toggle device toolbar

---

## 🔄 Próximos Passos (Semana 2)

1. **MongoDB Atlas**
   - Criar cluster
   - Gerar Data API
   - Anotar chaves (.env)

2. **Fetch API**
   - Substituir LocalStorage
   - Chamar MongoDB via HTTP

3. **Vercel Deploy**
   - Conectar GitHub
   - Configurar env vars
   - Deploy staging + produção

4. **Merge Final**
   - Após testes em staging
   - Merge `staging → main`
   - Vercel faz deploy automático

---

## 🎓 Atividade Original

Esta é uma atividade escolar com critérios:
1. ✅ Teoria (Frameworks, IoC, Segurança)
2. ✅ Planejamento (Issues no GitHub)
3. ✅ Git profissional (Branches, PRs)
4. ✅ POO (Classes + Explicações Copilot)
5. ✅ Frontend (HTML/CSS/JS)
6. ✅ Backend (MongoDB - Semana 2)
7. ✅ Deploy (Vercel - Semana 2)
8. ✅ Prova (Explicar todo o fluxo DevOps)

---

## 👨‍💻 Autor

Projeto escolar | Estudante: Emilly Lima Silva | Novembro 2025

---

## 📚 Referências

- [JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js Docs](https://nodejs.org/en/docs/)
- [Git Docs](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com)
- [Vercel Docs](https://vercel.com/docs)
- [MongoDB Docs](https://docs.mongodb.com)
- [OWASP](https://owasp.org)

---

## 🆘 Troubleshooting

**Problema**: "Module not found"
- Solução: `npm install`

**Problema**: "Port 8080 already in use"
- Solução: `http-server . -p 3000`

**Problema**: "Dados desaparecem ao recarregar"
- Solução: Use `http-server` (não `file://`), dados em LocalStorage

**Problema**: Não consegue fazer push
- Solução: `git config --global user.email "seu@email.com"`

Mais: veja `TESTES.md` → Troubleshooting

---

## 📞 Questões?

- Leia **ROTEIRO_IMEDIATO.md**
- Consulte **TEÓRICO.md**
- Use Copilot Chat
- Revise **TESTES.md**

---

**Boa sorte! 🚀**

Última atualização: Nov 13, 2025
