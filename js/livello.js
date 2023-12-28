function openLevel(livello) {
    var paragrafo = livello.nextElementSibling;
    paragrafo.classList.toggle('open');

    var titolo = livello.querySelector('h2');
    titolo.classList.toggle('active');
}
