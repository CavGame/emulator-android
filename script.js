// Funzione per ruotare il tablet
document.getElementById('toggleOrientation').addEventListener('click', function() {
    const container = document.getElementById('emulator-container');
    if (container.style.transform === "rotate(90deg)") {
        container.style.transform = "rotate(0deg)";
    } else {
        container.style.transform = "rotate(90deg)";
    }
});

// Funzione per accendere/spegnere il tablet
document.getElementById('togglePower').addEventListener('click', function() {
    const button = document.getElementById('togglePower');
    if (button.textContent === "Accendi") {
        button.textContent = "Spegni";
        // Aggiungi altre azioni per simulare l'accensione
    } else {
        button.textContent = "Accendi";
        // Aggiungi altre azioni per simulare lo spegnimento
    }
});

// Funzione per ingrandire il tablet
document.getElementById('zoomIn').addEventListener('click', function() {
    const container = document.getElementById('emulator-container');
    const currentWidth = parseInt(window.getComputedStyle(container).width);
    const currentHeight = parseInt(window.getComputedStyle(container).height);
    
    // Aumenta la dimensione del tablet di 10%
    container.style.width = `${currentWidth * 1.1}px`;
    container.style.height = `${currentHeight * 1.1}px`;
});
