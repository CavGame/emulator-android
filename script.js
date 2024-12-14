// Aggiungi l'evento per il pulsante di rotazione
const rotateButton = document.getElementById('rotate-btn');
const emulator = document.getElementById('emulator-container');
let isRotated = false; // Variabile per controllare la rotazione

rotateButton.addEventListener('click', () => {
    if (isRotated) {
        // Ruota il tablet di 0 gradi (reset)
        emulator.style.transform = 'rotate(0deg)';
    } else {
        // Ruota il tablet di 90 gradi
        emulator.style.transform = 'rotate(90deg)';
    }

    // Cambia lo stato della rotazione
    isRotated = !isRotated;
});
