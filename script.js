
  


let currentAudio = null;

function playAudio(id) {
    // Pausa o áudio anterior, se houver
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio.parentElement.classList.remove('audio-playing'); // Remove o brilho do card anterior
    }

    // Toca o novo áudio
    currentAudio = document.getElementById(id);
    currentAudio.play();
    currentAudio.parentElement.classList.add('audio-playing'); // Adiciona o brilho ao card atual

    // Remove o brilho quando o áudio termina
    currentAudio.addEventListener('ended', () => {
        currentAudio.parentElement.classList.remove('audio-playing');
    }, { once: true }); // Garante que o evento seja removido após a execução
}

function stopAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio.parentElement.classList.remove('audio-playing'); // Remove o brilho
    }
}

// Impede que o clique dentro do card dispare o stopAudio() imediatamente
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (event) => {
        event.stopPropagation(); // Impede que o evento de clique se propague para o document
    });
});

// Quando clicar fora do card, o áudio para
document.addEventListener("click", function() {
    stopAudio();
});

// Adiciona a classe 'can-animate' aos cards para controlar a animação
document.querySelectorAll('.card').forEach(card => {
    card.classList.add('can-animate');
});

// Adiciona a animação quando o mouse entra no card
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('animate-border');
    });
});

// Remove a animação quando o mouse sai do card
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseleave', () => {
        card.classList.remove('animate-border');
    });
});
