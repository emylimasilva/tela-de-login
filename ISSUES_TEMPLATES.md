# Templates para Issues (copiar/colar no GitHub)

Abaixo estão 3 issues prontas que você pode criar no repositório (GitHub → Issues → New issue). Copie o título e a descrição de cada bloco.

---

Issue 1
Title: [TEÓRICO] Pesquisar Frameworks e Inversão de Controle (IoC)

Description:
```
Objetivo:
- Pesquisar profundamente os frameworks: Next.js, Django e FastAPI.
- Entender Inversão de Controle (IoC) e Injeção de Dependência.

Entregáveis:
- Atualizar `TEÓRICO.md` com resumos e referências.
- Escrever um mini-ensaio (1-2 parágrafos) comparando os 3 frameworks e indicando quando usar cada um.
- Adicionar 3 fontes/links confiáveis.

Critérios de aceitação:
- TEÓRICO.md atualizado com as seções solicitadas.
- Mini-ensaio adicionado ao final de TEÓRICO.md.
```

---

Issue 2
Title: [PRÁTICO] Tela Login/Cadastro v1 (LocalStorage)

Description:
```
Objetivo:
- Finalizar a interface de login e cadastro usando HTML/CSS/JS com dados locais (LocalStorage) para a Semana 1.

Tarefas:
- Testar `index.html`, `style.css` e `app.js` localmente (http-server).
- Corrigir bugs visuais ou de validação encontrados durante os testes.
- Garantir que os 10 testes manuais em `TESTES.md` passem.
- Adicionar instruções de uso no README ou no COMMIT_PR_GUIDE.md.

Critérios de aceitação:
- Todos os testes em TESTES.md passam.
- Interface responsiva em mobile e desktop.
- Formulários validam corretamente (senhas, campos obrigatórios, email duplicado).
```

---

Issue 3
Title: [DEPLOY] MongoDB Atlas + Vercel (Semana 2)

Description:
```
Objetivo:
- Preparar backend e deploy: MongoDB Atlas (Data API) e Vercel.

Tarefas:
- Criar conta no MongoDB Atlas e criar um Cluster.
- Criar um Database (ex: `tela_login_db`) e a coleção `usuarios`.
- Gerar Data API e anotar `API_URL` e `API_KEY`.
- Criar `.env` local com as variáveis:
  - API_URL=https://...
  - API_KEY=...
- Configurar Vercel: conectar repositório, definir Production Branch = `main`.
- Adicionar as environment variables (Secrets) na dashboard da Vercel para `staging` e `main`.
- Atualizar `app.js` para usar Fetch API apontando para a Data API em vez de LocalStorage.

Critérios de aceitação:
- Staging deployment funcionando (preview link do Vercel) com dados reais do Atlas.
- Variáveis seguras como Secrets (não expor `.env`).
```

---

# Instruções rápidas
1. No GitHub, abra a aba Issues do repositório.
2. Clique em "New issue" e cole o **Title** e a **Description** do Issue 1.
3. Repita para Issue 2 e Issue 3.

Depois de criar as issues, volte aqui e eu marco o próximo passo no TODO (já está em progresso: verificar branch staging).