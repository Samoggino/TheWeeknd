document.addEventListener('DOMContentLoaded', function () {
    const tempImg = new Image();
    tempImg.src = '../img/low-quality.jpeg'; // Immagine di sfondo più leggera
    tempImg.onload = function () {
        const background = document.getElementById('background');
        background.style.backgroundImage = `url('../img/Wallpaper.png')`; // Immagine di sfondo completa
        background.style.display = 'block'; // Mostra l'immagine completa
    };
});
