# ✅ PRÉ-REQUISITOS - Antes de Começar

**Execute este checklist para garantir que tudo está pronto.**

---

## 1️⃣ GIT & GITHUB

### Verificar Git
```powershell
git --version
# Deve retornar: git version 2.x.x
```

✅ Git instalado?

### Verificar Branch
```powershell
cd c:\Users\lima_gabrielly\tela-de-login
git branch
# Deve mostrar:
# * staging
#   main
```

✅ Está em `staging`? (se não: `git checkout staging`)

### Verificar GitHub Acesso
```powershell
git remote -v
# Deve mostrar:
# origin  https://github.com/emylimasilva/tela-de-login.git
```

✅ Remote configurado?

---

## 2️⃣ NODE.JS & NPM

### Verificar Node.js
```powershell
node --version
# Deve retornar: v14.x.x ou superior
```

✅ Node.js instalado?

### Verificar NPM
```powershell
npm --version
# Deve retornar: 6.x.x ou superior
```

✅ npm instalado?

### Verificar Dependências
```powershell
cd c:\Users\lima_gabrielly\tela-de-login
npm list
# Deve listar jest e outras dependências
```

✅ Dependências instaladas? (se não: `npm install`)

---

## 3️⃣ ARQUIVOS ESSENCIAIS

```powershell
cd c:\Users\lima_gabrielly\tela-de-login
```

Verificar se existem:

### Frontend ✅
- [ ] `index.html` existe?
- [ ] `style.css` existe?
- [ ] `app.js` existe?

### Classes ✅
- [ ] `models/Usuario.js` existe?
- [ ] `models/Prato.js` existe?

### Configuração ✅
- [ ] `.gitignore` existe?
- [ ] `.env.example` existe?
- [ ] `package.json` existe?

### Documentação ✅
- [ ] `ROTEIRO_IMEDIATO.md` existe?
- [ ] `TEÓRICO.md` existe?
- [ ] `TESTES.md` existe?

---

## 4️⃣ CONEXÃO INTERNET

### Verificar Conexão
```powershell
ping github.com
# Deve retornar resposta (tempo < 100ms)
```

✅ Conexão com internet OK?

### Verificar GitHub Acesso
```powershell
git remote show origin
# Deve conectar ao GitHub
```

✅ Consegue acessar GitHub?

---

## 5️⃣ EDITOR & TERMINAL

### Verificar VS Code
```
Deve estar aberto com a pasta do projeto
```

✅ VS Code aberto?

### Verificar Terminal
```
Deve ter PowerShell aberto
```

✅ Terminal pronto?

---

## 6️⃣ TESTES RÁPIDOS

### Testar se app roda
```powershell
npm install -g http-server
http-server .
# Deve retornar: Starting up http-server
```

✅ Http-server funciona?

### Testar se Jest roda
```powershell
npm test
# Deve rodar testes
```

✅ Jest funciona? (não precisa passar, só rodar)

---

## 🎯 CHECKLIST FINAL

```
Pré-requisitos para começar ROTEIRO_IMEDIATO.md

Git & GitHub:
  [ ] Git instalado
  [ ] Em branch `staging`
  [ ] Remote configurado
  [ ] Acesso ao GitHub

Node.js & NPM:
  [ ] Node.js instalado
  [ ] npm instalado
  [ ] Dependências instaladas

Arquivos:
  [ ] index.html existe
  [ ] style.css existe
  [ ] app.js existe
  [ ] models/Usuario.js existe
  [ ] ROTEIRO_IMEDIATO.md existe

Conexão:
  [ ] Internet funcionando
  [ ] GitHub acessível

Ferramentas:
  [ ] VS Code aberto
  [ ] Terminal (PowerShell) pronto
  [ ] http-server instalado

Tudo OK?
  [ ] SIM - Próximo passo: ROTEIRO_IMEDIATO.md
  [ ] NÃO - Ver erros abaixo
```

---

## 🆘 PROBLEMAS COMUNS & SOLUÇÕES

### Problema: "Git não reconhecido"
```powershell
# Solução: Reinstalar Git
# Baixar: https://git-scm.com/download/win
# Abrir novo PowerShell depois de instalar
```

### Problema: "Não estou em branch staging"
```powershell
git checkout staging
# Se der erro, criar:
git checkout -b staging
git push origin staging
```

### Problema: "Node.js não reconhecido"
```powershell
# Solução: Reinstalar Node.js
# Baixar: https://nodejs.org/
# Versão LTS recomendada
# Abrir novo PowerShell depois de instalar
```

### Problema: "npm install falha"
```powershell
# Solução 1: Limpar cache
npm cache clean --force

# Solução 2: Deletar node_modules + package-lock.json
rm -r node_modules
rm package-lock.json
npm install
```

### Problema: "http-server não encontrado"
```powershell
# Solução
npm install -g http-server
# Fechar e abrir PowerShell novo
http-server .
```

### Problema: "GitHub acesso negado"
```powershell
# Verificar
git config user.email
git config user.name

# Se vazio, configurar
git config --global user.email "seu@email.com"
git config --global user.name "Seu Nome"

# Se continuar errado, regenerar SSH
# Veja: https://docs.github.com/en/authentication
```

---

## 🎉 PRONTO?

Se todos os checkboxes estão marcados ✅ →

**Próximo passo: Abra `ROTEIRO_IMEDIATO.md`**

---

## 🔧 COMANDO RÁPIDO (Execute Tudo)

```powershell
# Verificar tudo de uma vez
Write-Host "=== GIT ===" -ForegroundColor Green
git --version
git branch
git remote -v

Write-Host "=== NODE ===" -ForegroundColor Green
node --version
npm --version

Write-Host "=== ARQUIVOS ===" -ForegroundColor Green
ls index.html
ls style.css
ls app.js

Write-Host "=== TUDO OK ===" -ForegroundColor Green
Write-Host "Comece: ROTEIRO_IMEDIATO.md" -ForegroundColor Cyan
```

---

**Boa sorte! 🚀**
