let palavras = [];
let palavraAtual = '';
let letrasDescobertas = [];
let letrasErradas = [];
let maxErros = 6;
let canvas, ctx;

function iniciarJogo() {
    const palavrasInput = document.getElementById('palavras').value;
    palavras = palavrasInput.split(',').map(p => p.trim().toUpperCase());
    
    if (palavras.length === 0 || palavras[0] === '') {
        alert('Por favor, insira pelo menos uma palavra!');
        return;
    }

    document.getElementById('setup-game').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    
    // Inicializar canvas
    canvas = document.getElementById('forca');
    ctx = canvas.getContext('2d');
    desenharForca();
    
    iniciarRodada();
    criarTeclado();
}

function desenharForca() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#333';
    
    // Base
    ctx.beginPath();
    ctx.moveTo(50, 270);
    ctx.lineTo(150, 270);
    ctx.stroke();

    // Poste vertical
    ctx.beginPath();
    ctx.moveTo(100, 270);
    ctx.lineTo(100, 50);
    ctx.stroke();

    // Topo
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(200, 50);
    ctx.stroke();

    // Corda
    ctx.beginPath();
    ctx.moveTo(200, 50);
    ctx.lineTo(200, 80);
    ctx.stroke();
}

function desenharParteCorpo(erros) {
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#333';

    switch(erros) {
        case 1: // Cabeça
            ctx.beginPath();
            ctx.arc(200, 100, 20, 0, Math.PI * 2);
            ctx.stroke();
            break;
        case 2: // Corpo
            ctx.beginPath();
            ctx.moveTo(200, 120);
            ctx.lineTo(200, 190);
            ctx.stroke();
            break;
        case 3: // Braço esquerdo
            ctx.beginPath();
            ctx.moveTo(200, 140);
            ctx.lineTo(160, 160);
            ctx.stroke();
            break;
        case 4: // Braço direito
            ctx.beginPath();
            ctx.moveTo(200, 140);
            ctx.lineTo(240, 160);
            ctx.stroke();
            break;
        case 5: // Perna esquerda
            ctx.beginPath();
            ctx.moveTo(200, 190);
            ctx.lineTo(170, 230);
            ctx.stroke();
            break;
        case 6: // Perna direita
            ctx.beginPath();
            ctx.moveTo(200, 190);
            ctx.lineTo(230, 230);
            ctx.stroke();
            break;
    }
}

function iniciarRodada() {
    palavraAtual = palavras[Math.floor(Math.random() * palavras.length)];
    letrasDescobertas = new Array(palavraAtual.length).fill(false);
    letrasErradas = [];
    atualizarDisplay();
}

function criarTeclado() {
    const teclado = document.getElementById('teclado');
    teclado.innerHTML = '';
    
    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);
        const botao = document.createElement('button');
        botao.textContent = letra;
        botao.className = 'tecla';
        botao.onclick = () => tentarLetra(letra);
        teclado.appendChild(botao);
    }
}

function tentarLetra(letra) {
    const botao = Array.from(document.getElementsByClassName('tecla'))
        .find(b => b.textContent === letra);
    botao.classList.add('usada');
    botao.disabled = true;

    if (palavraAtual.includes(letra)) {
        for (let i = 0; i < palavraAtual.length; i++) {
            if (palavraAtual[i] === letra) {
                letrasDescobertas[i] = true;
            }
        }
    } else {
        letrasErradas.push(letra);
        desenharParteCorpo(letrasErradas.length);
    }

    atualizarDisplay();
    verificarFimDeJogo();
}

function atualizarDisplay() {
    const palavraContainer = document.getElementById('palavra-container');
    const letrasErradasContainer = document.getElementById('letras-erradas');
    
    palavraContainer.textContent = palavraAtual
        .split('')
        .map((letra, i) => letrasDescobertas[i] ? letra : '_')
        .join(' ');
    
    letrasErradasContainer.textContent = `Letras erradas: ${letrasErradas.join(', ')}`;
}

function verificarFimDeJogo() {
    const ganhou = letrasDescobertas.every(l => l);
    const perdeu = letrasErradas.length >= maxErros;
    
    if (ganhou || perdeu) {
        const mensagem = document.getElementById('mensagem');
        mensagem.textContent = ganhou ? 'Parabéns! Você venceu!' : 'Game Over! Você perdeu!';
        
        const teclado = document.getElementById('teclado');
        Array.from(teclado.children).forEach(botao => botao.disabled = true);
        
        document.getElementById('btn-reiniciar').style.display = 'block';
    }
}

function reiniciarJogo() {
    document.getElementById('mensagem').textContent = '';
    document.getElementById('btn-reiniciar').style.display = 'none';
    desenharForca();
    iniciarRodada();
    
    const teclado = document.getElementById('teclado');
    Array.from(teclado.children).forEach(botao => {
        botao.classList.remove('usada');
        botao.disabled = false;
    });
} 