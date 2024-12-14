// Funzione per ingrandire il tablet
document.getElementById('zoomIn').addEventListener('click', function() {
    const container = document.getElementById('emulator-container');
    const currentWidth = parseInt(window.getComputedStyle(container).width);
    const currentHeight = parseInt(window.getComputedStyle(container).height);
    container.style.width = `${currentWidth * 1.1}px`;
    container.style.height = `${currentHeight * 1.1}px`;
});

// Funzione per ruotare il tablet
document.getElementById('rotate').addEventListener('click', function() {
    const container = document.getElementById('emulator-container');
    const currentRotation = container.style.transform;
    container.style.transform = currentRotation === "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)";
});

// Funzione per accendere/spegnere il tablet
document.getElementById('togglePower').addEventListener('click', function() {
    const button = document.getElementById('togglePower');
    const screen = document.getElementById('screen');
    if (button.textContent === "Accendi") {
        button.textContent = "Spegni";
        screen.style.backgroundColor = "#FFF";
    } else {
        button.textContent = "Accendi";
        screen.style.backgroundColor = "#000";
    }
});

// Funzione per salvare l'account
document.getElementById('saveAccount').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    if (username) {
        localStorage.setItem('username', username);
        document.getElementById('accountStatus').textContent = `Account salvato: ${username}`;
    } else {
        document.getElementById('accountStatus').textContent = "Inserisci un nome utente valido!";
    }
});

// Caricamento del nome utente salvato
window.addEventListener('load', function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
        document.getElementById('accountStatus').textContent = `Account caricato: ${savedUsername}`;
    }
});
