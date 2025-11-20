document.addEventListener("DOMContentLoaded", function() {

    const quizForm = document.getElementById("quizForm");
    const resultadoDiv = document.getElementById("resultado");

    quizForm.addEventListener("submit", function(event) {
        
        event.preventDefault(); // Impede o recarregamento da página

        let pontuacao = 0;
        let totalPerguntas = 3; // Agora temos 3 perguntas

        // --- Validação e Pontuação da Pergunta 1 (Radio) ---
        const q1Resposta = document.querySelector('input[name="q1"]:checked');
        if (!q1Resposta) {
            resultadoDiv.innerHTML = `<div class="alert alert-warning">Por favor, responda a Pergunta 1.</div>`;
            return;
        }
        // Resposta correta: At The Gates (value="b") - Precursores de Gotemburgo
        if (q1Resposta.value === 'b') {
            pontuacao++;
        }

        // --- Validação e Pontuação da Pergunta 2 (Radio com Imagem) ---
        const q2Resposta = document.querySelector('input[name="q2"]:checked');
        if (!q2Resposta) {
            resultadoDiv.innerHTML = `<div class="alert alert-warning">Por favor, responda a Pergunta 2.</div>`;
            return;
        }
        // Resposta correta: The End of Heartache - Killswitch Engage (value="b")
        if (q2Resposta.value === 'b') {
            pontuacao++;
        }

        // --- Validação e Pontuação da Pergunta 3 (Checkbox) ---
        const q3Converge = document.getElementById("q3-a").checked; // Correto
        const q3Architects = document.getElementById("q3-b").checked; // Incorreto (mais nova)
        const q3MiserySignals = document.getElementById("q3-c").checked; // Correto
        const q3Spiritbox = document.getElementById("q3-d").checked; // Incorreto (nova)

        // Validação: Pelo menos uma opção deve estar marcada
        if (!q3Converge && !q3Architects && !q3MiserySignals && !q3Spiritbox) {
            resultadoDiv.innerHTML = `<div class="alert alert-warning">Por favor, responda a Pergunta 3.</div>`;
            return;
        }
        
        // Cálculo: Acerta se marcou APENAS Converge E Misery Signals
        if (q3Converge && q3MiserySignals && !q3Architects && !q3Spiritbox) {
            pontuacao++;
        }

        // --- Exibição Dinâmica do Resultado ---
        let mensagem = ``;
        if (pontuacao === totalPerguntas) {
            mensagem = `\m/ PARABÉNS! Você é um verdadeiro veterano do metalcore! \m/ (${pontuacao} de ${totalPerguntas})`;
            resultadoDiv.className = "alert alert-success mt-4";
        } else if (pontuacao > 0) {
            mensagem = `Quase lá, headbanger! Você acertou ${pontuacao} de ${totalPerguntas}. Continue treinando!`;
            resultadoDiv.className = "alert alert-warning mt-4";
        } else {
            mensagem = `Ops! Parece que você precisa ouvir mais uns clássicos! Você acertou ${pontuacao} de ${totalPerguntas}.`;
            resultadoDiv.className = "alert alert-danger mt-4";
        }

        resultadoDiv.innerHTML = `<h3>Seu Resultado:</h3><p>${mensagem}</p>`;
    });

});