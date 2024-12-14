// Funzione per ingrandire il tablet
document.getElementById('zoomIn').addEventListener('click', function() {
    const container = document.getElementById('emulator-container');
    
    // Ottieni larghezza e altezza attuali del contenitore
    const currentWidth = parseFloat(window.getComputedStyle(container).width.replace('px', ''));
    const currentHeight = parseFloat(window.getComputedStyle(container).height.replace('px', ''));

    // Aumenta la dimensione del tablet del 10%
    container.style.width = `${currentWidth * 1.1}px`;
    container.style.height = `${currentHeight * 1.1}px`;
});

// Funzione per ruotare il tablet
document.getElementById('rotate').addEventListener('click', function() {
    const container = document.getElementById('emulator-container');

    // Controlla l'orientamento attuale e alterna tra 0° e 90°
    if (container.style.transform === "rotate(90deg)") {
        container.style.transform = "rotate(0deg)";
    } else {
        container.style.transform = "rotate(90deg)";
    }
});

// Funzione per salvare e caricare l'account
document.getElementById('saveAccount').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        // Salva il nome utente nel localStorage
        localStorage.setItem('username', username);
        document.getElementById('accountStatus').textContent = `Account salvato: ${username}`;
    } else {
        document.getElementById('accountStatus').textContent = 'Inserisci un nome utente';
    }
});

// Carica il nome utente salvato (se esiste)
window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('accountStatus').textContent = `Account caricato: ${savedUsername}`;
        document.getElementById('username').value = savedUsername;
    }
};
