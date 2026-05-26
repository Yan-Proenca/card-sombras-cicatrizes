let currentAudio = null;
let currentCard = null;

function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    // Encontra o card pai mais próximo do elemento de áudio clicado
    const card = audio.closest('.card');

    // Se já houver um áudio tocando, para ele
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentCard) currentCard.classList.remove('card-active');
    }

    // Gerencia o áudio atual
    if (audio.paused) {
        audio.play();
        card.classList.add('card-active');
        currentAudio = audio;
        currentCard = card;

        // Remove a classe de destaque quando o áudio terminar sozinho
        audio.onended = function() {
            card.classList.remove('card-active');
            currentAudio = null;
            currentCard = null;
        };
    } else {
        audio.pause();
        card.classList.remove('card-active');
        currentAudio = null;
        currentCard = null;
    }
}