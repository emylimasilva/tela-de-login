# Pull Request: v1 - Tela de Login/Cadastro (staging → main)

## Título
v1: Tela de login/cadastro com validação local

## Descrição
Esta é a V1 do projeto com as funcionalidades da Semana 1, pronta para homologação (staging). O objetivo era entregar a interface de login e cadastro usando POO (classe `Usuario`) com persistência local (LocalStorage) e documentação completa para a prova.

### O que foi feito
- Frontend: `index.html`, `style.css` — formulários de Login e Cadastro (responsivo).
- Lógica: `app.js` — validação de formulários, cadastro, login, mensagens, LocalStorage.
- POO: `models/Usuario.js` — constructor, validarLogin, exibirInfo (compatível browser/Node).
- Documentação: `TEÓRICO.md`, `TESTES.md`, `ROTEIRO_IMEDIATO.md`, `COMMIT_PR_GUIDE.md`, `CHECKLIST.md`, `README_NOVO.md`, entre outros.

### Como testar
1. Rodar localmente:

```powershell
npm install -g http-server
http-server .
# Abrir http://localhost:8080
```
2. Seguir os testes em `TESTES.md` (10 testes manuais).

### Observações de segurança
- `.env.example` disponível como template. Não comitar `.env` com chaves reais.
- Em produção (Semana 2), trocar LocalStorage por MongoDB Atlas + Data API e usar env vars/Secrets.

### Próximos passos (Semana 2)
- Configurar MongoDB Atlas (Data API) e obter API_URL/API_KEY.
- Substituir LocalStorage por Fetch API para persistência remota.
- Configurar Vercel (staging preview; production = main) e adicionar Secrets.

### Pedido
- Esta PR é para revisão e testes em homologação (staging). NÃO FAZER MERGE ainda.

---

Obrigado! :rocket:
