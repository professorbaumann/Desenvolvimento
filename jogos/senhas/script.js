const frases = {
    'ABC123': "Programar não é apenas escrever código, é treinar sua mente para resolver problemas de forma lógica e criativa.",
    'DEF456': "A lógica de programação é a chave para transformar ideias em realidade digital.",
    'GHI789': "Errar faz parte do aprendizado; cada bug corrigido é um passo a mais na jornada do conhecimento.",
    'JKL321': "Aprender a programar é como aprender um novo idioma: no começo parece difícil, mas depois você começa a pensar nessa nova linguagem.",
    'MNO654': "Não tenha medo de desafios, cada problema resolvido fortalece sua lógica e sua capacidade de programar melhor.",
    'PQR987': "A lógica de programação não ensina apenas a criar softwares, ensina a pensar melhor sobre o mundo.",
    'STU147': "Cada linha de código que você escreve hoje é um degrau a mais rumo à sua evolução como programador.",
    'VWX258': "Grandes programadores não nasceram sabendo; eles apenas nunca desistiram de aprender.",
    'YZA369': "A programação é como um quebra-cabeça: cada pedaço de lógica que você aprende ajuda a montar uma solução incrível! 🚀"
};

function verificarSenha() {
    const senha = document.getElementById('senhaInput').value.toUpperCase();
    const mensagemDiv = document.getElementById('mensagem');
    
    if (frases[senha]) {
        mensagemDiv.textContent = frases[senha];
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