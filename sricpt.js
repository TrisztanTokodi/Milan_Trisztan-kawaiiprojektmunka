// Megkeressük a figurát a HTML-ben az ID alapján
const figura = document.getElementById('figuram');

// Képek elérési útjai (Írd át a saját képeid / GIF-jeid nevére!)
const alapKep = 'lany1.gif';      // Pl. alapértelmezett lebegő/integető GIF
const reakcioKep = 'lany2.gif'; // Pl. pörgő, ugráló vagy szivecskés GIF

// Eseményfigyelő: amikor valaki rákattint a figurára
figura.addEventListener('click', () => {
    // Kicseréljük a képet a reakció képre
    figura.src = reakcioKep;

    // 2 másodperc (2000 ms) múlva visszaváltunk az alapértelmezett képre
    setTimeout(() => {
        figura.src = alapKep;
    }, 2000);
});

function megnyit(forras) {
    document.getElementById('nagykepImg').src = forras;
    document.getElementById('nagykep').style.display = 'flex';
}

function bezar() {
    document.getElementById('nagykep').style.display = 'none';
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') bezar();
});