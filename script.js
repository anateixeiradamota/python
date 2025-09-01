const keywords = ['if', 'for', 'while', 'def', 'class', 'import', 'return', 'print'];
let currentWord = '';

function newGame() {
    // Escolhe uma palavra aleatória da lista
    currentWord = keywords[Math.floor(Math.random() * keywords.length)];
    
    // Esconde a palavra com underlines
    const hiddenWord = '_ '.repeat(currentWord.length);
    document.getElementById('display-word').textContent = hiddenWord;
    
    // Limpa a entrada do usuário e a mensagem de feedback
    document.getElementById('guess-input').value = '';
    document.getElementById('feedback-message').textContent = '';
    
    // Esconde o botão de nova palavra
    document.getElementById('new-word-button').style.display = 'none';
}

function checkGuess() {
    const userGuess = document.getElementById('guess-input').value.toLowerCase();
    const feedback = document.getElementById('feedback-message');
    
    if (userGuess === currentWord) {
        // Se a resposta estiver correta
        feedback.textContent = 'Parabéns, você acertou!';
        feedback.className = 'feedback success';
        document.getElementById('display-word').textContent = currentWord;
        document.getElementById('new-word-button').style.display = 'block';
    } else {
        // Se a resposta estiver errada
        feedback.textContent = 'Ops, tente novamente.';
        feedback.className = 'feedback error';
    }
}

// Inicia o jogo quando a página carrega
document.addEventListener('DOMContentLoaded', newGame);