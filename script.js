// script.js
function verificarDesafio(desafioId) {
    const feedbackElement = document.getElementById(`challenge${desafioId}-feedback`);
    const code = document.getElementById(`challenge${desafioId}-code`).value;

    let resultadoCorreto = false;

    // Lógica de verificação para cada desafio
    if (desafioId === 1) {
        // Exemplo: Simular a verificação do desafio de soma
        // Neste caso, você pode pedir ao usuário para escrever a resposta da função
        // e verificar se ela está correta.
        // Por exemplo, o usuário deve escrever 'def somar_numeros(a,b): return a+b'
        if (code.includes("return a + b") || code.includes("return a+b")) {
            resultadoCorreto = true;
        }
    }

    // Atualiza a interface com base no resultado
    if (resultadoCorreto) {
        feedbackElement.textContent = "Parabéns! Desafio completo!";
        feedbackElement.className = "feedback success";
    } else {
        feedbackElement.textContent = "Ops, tente novamente. A solução não está correta.";
        feedbackElement.className = "feedback error";
    }
}