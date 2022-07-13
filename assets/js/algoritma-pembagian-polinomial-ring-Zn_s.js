
function soal() {
    const soal = `Tentukan hasil bagi $q(x)$ dan sisa $r(x)$ dari pembagian
        ${_s} f(x)=${a} ${_t}
        dengan
        ${_s} g(x)=${b} ${_t}
        di $Z_${n}[x]$.`;
    
    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let [long, hasil, sisa] = longDivModn(polf, polg, n);
    let qx = makePoly(hasil).join('');
    let rx = makePoly(sisa).join('') || 0;

    const solusi = `Dengan mennggunakan long division:${_s} ${long} ${_t}
        diperoleh
        ${_b} q(x) &= ${qx}\\\\
        r(x) &= ${rx} ${_e}
        Sehingga
        ${_s} ${a} = (${b})(${qx}) + (${rx}) ${_t}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    a = input1.value;
    b = input2.value;
    n = parseInt(input3.value);

    f = splitPolynom(input1.value);
    g = splitPolynom(input2.value);
    polf = getPolynom(f);
    polg = getPolynom(g);

    const cond1 = cekPolynomModn(polf, n);
    const cond2 = cekPolynomModn(polg, n);
    const cond3 = !isNaN(n) && n > 1;

    // cek leading digit di g(x) harus unit
    const cond4 = gcd(polg[polg.length-1], n) === 1;
    const cond5 = polf.length >= polg.length;

    if (!cond1 || !cond2 || !cond3 || !cond4 || !cond5) {
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
            n di [3, 7];
            degf di [3, 5]
            degd di [1, 3] < degf
            case 50:50 1 koefisien 0 di f dan g
    */

    // kosongkan semua variabel
    polf = [];
    polg = [];

    n = nilaiRandom(3, 7);
    degf = nilaiRandom(3, 5);
    degg = nilaiRandom(1, 3);
    if (degf === degg) degg--;

    for (let i = 0; i <= degf; i++) {
        polf[i] = nilaiRandom(1, n-1);
    }

    for (let i = 0; i <= degg; i++) {
        polg[i] = nilaiRandom(1, n-1);
    }

    if (Math.random() < 0.5) {
        nolf = nilaiRandom(0, degf-1);
        nolg = nilaiRandom(0, degg-1);
        polf[nolf] = 0;
        polg[nolg] = 0
    }

    while (gcd(polg[polg.length-1], n) !== 1) {
        polg[polg.length-1] = nilaiRandom(1, n-1);
    }

    a = makePoly(polf).join('');
    b = makePoly(polg).join('');


    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();