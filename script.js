// Funzione per ingrandire il tablet
document.getElementById('zoomIn').addEventListener('click', function () {
    const container = document.getElementById('emulator-container');
    const currentWidth = parseInt(window.getComputedStyle(container).width);
    const currentHeight = parseInt(window.getComputedStyle(container).height);

    // Aumenta la dimensione del tablet di 10%
    container.style.width = `${currentWidth * 1.1}px`;
    container.style.height = `${currentHeight * 1.1}px`;
});

// Funzione per ruotare il tablet
document.getElementById('rotate').addEventListener('click', function () {
    const container = document.getElementById('emulator-container');
    if (container.style.transform === "rotate(90deg)") {
        container.style.transform = "rotate(0deg)";
    } else {
        container.style.transform = "rotate(90deg)";
    }
});

// Funzione per salvare l'account
document.getElementById('saveAccount').addEventListener('click', function () {
    const username = document.getElementById('username').value.trim();
    const status = document.getElementById('status');

    if (username) {
        localStorage.setItem('account', username);
        status.textContent = `Account salvato: ${username}`;
        status.style.color = 'green';
    } else {
        status.textContent = 'Inserisci un nome utente valido.';
        status.style.color = 'red';
    }
});

// Carica l'account salvato al caricamento della pagina
window.addEventListener('load', function () {
    const savedUsername = localStorage.getItem('account');
    const status = document.getElementById('status');
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
        status.textContent = `Account caricato: ${savedUsername}`;
        status.style.color = 'blue';
    }
});
