// Função para criptografar as senhas
function encrypt(text) {
    return btoa(text.split('').map((char) => 
        String.fromCharCode(char.charCodeAt(0) + 1)
    ).join(''));
}

// Senhas criptografadas
const senhasFrases = {
    'WUtRODQ3': "Programar não é apenas escrever código, é treinar sua mente para resolver problemas de forma lógica e criativa.",
    'TlFUMjU5': "A lógica de programação é a chave para transformar ideias em realidade digital.",
    'V01KNjMx': "Errar faz parte do aprendizado; cada bug corrigido é um passo a mais na jornada do conhecimento.",
    'QlZSNDky': "Aprender a programar é como aprender um novo idioma: no começo parece difícil, mas depois você começa a pensar nessa nova linguagem.",
    'SFlMNzUz': "Não tenha medo de desafios, cada problema resolvido fortalece sua lógica e sua capacidade de programar melhor.",
    'WkZEMTY4': "A lógica de programação não ensina apenas a criar softwares, ensina a pensar melhor sobre o mundo.",
    'Q1VFOTy1': "Cada linha de código que você escreve hoje é um degrau a mais rumo à sua evolução como programador.",
    'S0dTMzc0': "Grandes programadores não nasceram sabendo; eles apenas nunca desistiram de aprender.",
    'UFlXNTgx': "A programação é como um quebra-cabeça: cada pedaço de lógica que você aprende ajuda a montar uma solução incrível! 🚀"
};

function verificarSenha() {
    const senha = document.getElementById('senhaInput').value.toUpperCase();
    const mensagemDiv = document.getElementById('mensagem');
    
    // Criptografa a senha digitada para comparar com as senhas armazenadas
    const senhaCriptografada = encrypt(senha);
    
    if (senhasFrases[senhaCriptografada]) {
        mensagemDiv.textContent = senhasFrases[senhaCriptografada];
        mensagemDiv.className = 'mensagem sucesso';
    } else {
        mensagemDiv.textContent = 'Senha incorreta. Tente novamente!';
        mensagemDiv.className = 'mensagem erro';
    }
}

// Adicionar evento de tecla Enter
document.getElementById('senhaInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        verificarSenha();
    }
}); 