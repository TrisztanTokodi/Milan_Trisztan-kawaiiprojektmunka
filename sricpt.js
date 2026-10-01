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

// Csomag popup
document.querySelectorAll('.card').forEach(function (kartya) {
    kartya.addEventListener('click', function () {
        document.getElementById('csomagKep').src = kartya.dataset.kep;
        document.getElementById('csomagTartalom').innerHTML = kartya.querySelector('.popup-szoveg').innerHTML;
        document.getElementById('csomagModal').style.display = 'flex';
    });
});

function csomagBezar() {
    document.getElementById('csomagModal').style.display = 'none';
}

// Esc mindkettőt bezárja (ez váltja le a régi keydown részt)
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        bezar();
        csomagBezar();
    }
});

// FIZETÉSI MODAL KEZELÉSE
const openPayBtn = document.getElementById('open-pay-btn');
const payModal = document.getElementById('pay-modal');
const payForm = document.getElementById('pay-form');

// Megnyitás a gombra kattintva
openPayBtn.addEventListener('click', () => {
    payModal.style.display = 'flex';
});

// Bezárás függvény
function payModalBezar() {
    payModal.style.display = 'none';
}

// Bezárás ha a háttérre kattintanak
payModal.addEventListener('click', (e) => {
    if (e.target === payModal) {
        payModalBezar();
    }
});

// Űrlap beküldése
payForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Megakadályozza az oldal újratöltését
    
    const email = document.getElementById('pay-email').value;
    
    alert(`Köszönjük az előrendelést! Hinata értesít majd a(z) ${email} címen, amint elérhető lesz. 💕`);
    
    // Itt állíthatod be, ha át akarod irányítani pl. Stripe / Barion fizetési oldalra:
    // window.location.href = "https://fizetesi-szolgaltato.hu?email=" + encodeURIComponent(email);
    
    payModalBezar();
    payForm.reset(); // Kiüríti a beviteli mezőt
});
