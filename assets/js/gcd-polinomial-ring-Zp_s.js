
function soal() {
    const soal = `Tentukan gcd dari
        ${_s} f(x)=${a} ${_t}
        dan
        ${_s} g(x)=${b} ${_t}
        di $Z_${p}[x]$.`;
    
    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let hasil = euclidPolinom(polf, polg, p);

    const solusi = `Dengan algoritma euclid:
        ${hasil[0]}
        <b>Langkah-langkah:</b><br>
        ${hasil[1]}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    a = input1.value;
    b = input2.value;
    p = parseInt(input3.value);

    f = splitPolynom(input1.value);
    g = splitPolynom(input2.value);
    polf = getPolynom(f);
    polg = getPolynom(g);

    const cond1 = cekPolynomModn(polf, p);
    const cond2 = cekPolynomModn(polg, p);
    const cond3 = !isNaN(p) && cekPrima(p);

    if (!cond1 || !cond2 || !cond3) {
        output1.innerHTML = 'Input tidak valid. Periksa kembali batasan.';
        output2.style.display = 'none';
        return;
    }

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

function soalRandom() {
    /*  
        Batasan untuk soal random:
            p di [3, 7];
            degf di [3, 5]
            degd di [1, 3] < degf
            case 50:50 1 koefisien 0 di f dan g
    */

    // kosongkan semua variabel
    polf = [];
    polg = [];

    p = nilaiRandom(3, 7);
    while (!cekPrima(p)) {
        p = nilaiRandom(3, 7); 
    }

    degf = nilaiRandom(3, 5);
    degg = nilaiRandom(1, 3);
    if (degf === degg) degg--;

    for (let i = 0; i <= degf; i++) {
        polf[i] = nilaiRandom(1, p-1);
    }

    for (let i = 0; i <= degg; i++) {
        polg[i] = nilaiRandom(1, p-1);
    }

    if (Math.random() < 0.5) {
        nolf = nilaiRandom(0, degf-1);
        nolg = nilaiRandom(0, degg-1);
        polf[nolf] = 0;
        polg[nolg] = 0
    }

    while (gcd(polg[polg.length-1], p) !== 1) {
        polg[polg.length-1] = nilaiRandom(1, p-1);
    }

    a = makePoly(polf).join('');
    b = makePoly(polg).join('');


    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();