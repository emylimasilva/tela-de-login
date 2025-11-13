/**
 * app.js - Lógica de Aplicação (Integração com Formulários HTML)
 * 
 * Este arquivo conecta a classe Usuario com os formulários HTML.
 * Usa LocalStorage para armazenar dados (Semana 1 - antes de MongoDB).
 * 
 * FLUXO:
 * 1. Usuário preenche formulário (HTML)
 * 2. handleCadastro() ou handleLogin() é chamado
 * 3. Nova instância de Usuario é criada
 * 4. Dados são salvos em LocalStorage (JSON)
 * 5. Interface atualiza com feedback
 */

// ============================================
// ARMAZENAMENTO EM LocalStorage
// ============================================
// Copilot, o que é LocalStorage e para que serve?
// Resposta (Copilot): LocalStorage é um armazenamento no navegador que persiste
// dados mesmo após o navegador fechar. Útil para dados não sensíveis em Semana 1.
// Em produção, usar banco de dados real (MongoDB) em Semana 2.

const STORAGE_KEY = 'usuarios_app';

/**
 * Carrega lista de usuários do LocalStorage
 * Retorna array de objetos ou array vazio se não houver dados
 */
function carregarUsuarios() {
    try {
        const dados = localStorage.getItem(STORAGE_KEY);
        return dados ? JSON.parse(dados) : [];
    } catch (error) {
        console.error('Erro ao carregar usuários:', error);
        return [];
    }
}

/**
 * Salva lista de usuários no LocalStorage
 * Recebe array de usuários (já em formato JSON-pronto)
 */
function salvarUsuarios(usuarios) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
    } catch (error) {
        console.error('Erro ao salvar usuários:', error);
    }
}

// ============================================
// FUNÇÕES DE INTERFACE (Abas e Mensagens)
// ============================================

/**
 * Alterna entre abas (Login / Cadastro)
 * Copilot, como este padrão de toggle de abas funciona?
 * Resposta: Iteramos por todas as abas, removemos classe 'active',
 * depois adicionamos 'active' apenas à aba clicada. Mesmo para botões.
 */
function mostrarAba(nomeAba) {
    // Esconde todas as abas
    document.querySelectorAll('.tab-content').forEach(aba => {
        aba.classList.remove('active');
    });

    // Remove destaque de todos os botões
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Mostra aba selecionada
    document.getElementById(nomeAba).classList.add('active');

    // Destaca botão correspondente
    event.target.classList.add('active');
}

/**
 * Mostra mensagem de sucesso ou erro
 */
function mostrarMensagem(elementId, mensagem, tipo) {
    const elemento = document.getElementById(elementId);
    elemento.textContent = mensagem;
    elemento.className = `message ${tipo}`;

    // Remove mensagem após 4 segundos
    setTimeout(() => {
        elemento.textContent = '';
        elemento.className = 'message';
    }, 4000);
}

/**
 * Atualiza a lista de usuários na interface
 */
function atualizarListaUsuarios() {
    const usuarios = carregarUsuarios();
    const lista = document.getElementById('usuariosList');

    if (usuarios.length === 0) {
        lista.innerHTML = '<p class="empty">Nenhum usuário cadastrado ainda...</p>';
        return;
    }

    lista.innerHTML = usuarios
        .map(user => `
            <div class="usuario-item">
                <strong>${user.nome}</strong> (${user.email})
            </div>
        `)
        .join('');
}

// ============================================
// FUNÇÕES DE NEGÓCIO (Cadastro e Login)
// ============================================

/**
 * Manipula submissão do formulário de CADASTRO
 * Copilot, por que usamos event.preventDefault()?
 * Resposta: preventDefault() evita o comportamento padrão do form (recarregar página).
 * Assim controlamos o que acontece com JavaScript.
 */
function handleCadastro(event) {
    event.preventDefault();

    const nome = document.getElementById('cadastroNome').value.trim();
    const email = document.getElementById('cadastroEmail').value.trim();
    const senha = document.getElementById('cadastroPassword').value;
    const confirmSenha = document.getElementById('cadastroConfirm').value;

    // Validações
    if (!nome || !email || !senha || !confirmSenha) {
        mostrarMensagem('cadastroMessage', 'Preencha todos os campos!', 'error');
        return;
    }

    if (senha !== confirmSenha) {
        mostrarMensagem('cadastroMessage', 'As senhas não conferem!', 'error');
        return;
    }

    if (senha.length < 6) {
        mostrarMensagem('cadastroMessage', 'Senha deve ter pelo menos 6 caracteres!', 'error');
        return;
    }

    // Carrega usuários existentes
    const usuariosExistentes = carregarUsuarios();

    // Verifica se email já está cadastrado
    const emailJaExiste = usuariosExistentes.some(u => u.email === email);
    if (emailJaExiste) {
        mostrarMensagem('cadastroMessage', 'Este email já está cadastrado!', 'error');
        return;
    }

    // Cria novo usuário usando a classe Usuario
    // Copilot, como a instância de Usuario funciona aqui?
    // Resposta: new Usuario(...) chama o constructor que inicializa
    // as propriedades. Depois usamos JSON.stringify() para converter
    // o objeto em string e salvar no LocalStorage.
    const novoUsuario = new Usuario(nome, email, senha);

    // Salva no LocalStorage
    usuariosExistentes.push({
        nome: novoUsuario.nome,
        email: novoUsuario.email,
        senha: novoUsuario.senha, // ⚠️ NUNCA FAÇA ISSO EM PRODUÇÃO! Ver NOTAS.md
    });
    salvarUsuarios(usuariosExistentes);

    // Feedback ao usuário
    mostrarMensagem('cadastroMessage', `✓ Usuário ${nome} cadastrado com sucesso!`, 'success');

    // Limpa formulário
    document.getElementById('cadastroForm').reset();

    // Atualiza lista
    atualizarListaUsuarios();

    // Volta para aba de login
    setTimeout(() => {
        document.querySelector('.tab-button').click();
    }, 1500);
}

/**
 * Manipula submissão do formulário de LOGIN
 */
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const senha = document.getElementById('loginPassword').value;

    // Carrega usuários
    const usuarios = carregarUsuarios();

    // Procura usuário com este email
    const usuarioEncontrado = usuarios.find(u => u.email === email);

    if (!usuarioEncontrado) {
        mostrarMensagem('loginMessage', 'Email não encontrado!', 'error');
        return;
    }

    // Cria instância da classe Usuario e valida login
    // Copilot, por que criamos uma instância só para validar?
    // Resposta: Porque a lógica de validação está no método validarLogin().
    // Isso segue o princípio de encapsulamento da POO.
    const usuario = new Usuario(usuarioEncontrado.nome, usuarioEncontrado.email, usuarioEncontrado.senha);

    if (usuario.validarLogin(email, senha)) {
        mostrarMensagem('loginMessage', `✓ Bem-vindo, ${usuarioEncontrado.nome}!`, 'success');
        document.getElementById('loginForm').reset();
        
        // Aqui você poderia redirecionar para dashboard, etc.
        console.log('Login bem-sucedido:', usuario.exibirInfo());
    } else {
        mostrarMensagem('loginMessage', 'Email ou senha incorretos!', 'error');
    }
}

/**
 * Limpa todos os dados do LocalStorage
 */
function limparLocalStorage() {
    if (confirm('Deseja realmente limpar todos os usuários?')) {
        localStorage.removeItem(STORAGE_KEY);
        atualizarListaUsuarios();
        mostrarMensagem('loginMessage', 'Dados apagados!', 'success');
    }
}

// ============================================
// INICIALIZAÇÃO DA PÁGINA
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    atualizarListaUsuarios();
    console.log('Aplicação iniciada. LocalStorage em uso (Semana 1).');
});

// ============================================
// EXEMPLOS DE USO - DADOS FALSOS (para testes)
// ============================================
/*
const usuario1 = new Usuario('Emilly Silva', 'emilly@example.com', 'senha123');
console.log(usuario1.exibirInfo());
console.log('Login válido?', usuario1.validarLogin('emilly@example.com', 'senha123'));

const prato1 = new Prato('Risotto', 42.5, ['arroz', 'caldo', 'queijo']);
console.log(prato1.exibirInfo());

const restaurante = new Restaurante('Bom Sabor', 'Rua A, 123');
restaurante.adicionarPrato(prato1);
console.log(restaurante.listarMenu());
*/
