
  



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

// Quando clicar fora do card, o áudio para
document.addEventListener("click", function() {
    stopAudio();
});

// Impede que o clique dentro do card acione o evento do documento
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function(event) {
        event.stopPropagation();
        const audioId = this.querySelector('audio').id;
        playAudio(audioId);
    });
});
