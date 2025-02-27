const frases = {
  'KTR847': "Programar não é apenas escrever código, é treinar sua mente para resolver problemas de forma lógica e criativa.",
    'BNM259': "A lógica de programação é a chave para transformar ideias em realidade digital.",
    'HJL123': "Errar faz parte do aprendizado; cada bug corrigido é um passo a mais na jornada do conhecimento.",
    'WXP456': "Aprender a programar é como aprender um novo idioma: no começo parece difícil, mas depois você começa a pensar nessa nova linguagem.",
    'QRS789': "Não tenha medo de desafios, cada problema resolvido fortalece sua lógica e sua capacidade de programar melhor.",
    'VYZ321': "A lógica de programação não ensina apenas a criar softwares, ensina a pensar melhor sobre o mundo.",
    'FGH654': "Cada linha de código que você escreve hoje é um degrau a mais rumo à sua evolução como programador.",
    'MNP987': "Grandes programadores não nasceram sabendo; eles apenas nunca desistiram de aprender.",
    'DCB147': "A programação é como um quebra-cabeça: cada pedaço de lógica que você aprende ajuda a montar uma solução incrível! 🚀"
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