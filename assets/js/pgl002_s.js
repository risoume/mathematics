
function soal() {
    const soal = `Tentukan persamaan garis yang melalui titik $(${a}, ${b})$ dan $(${c}, ${d})$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let aSign = defNeg(a);
    let bSign = defNeg(b);

    let subs1 = c - a;
    let subs2 = d - b;
    let subs3 = b*subs1 - a*subs2;

    let subs1Sign = defNeg(subs1);
    let subs3Sign = defPos(subs3);

    // jika didapat hasil seperti 2x + 2y + 4 = 0 bagi dengan gcdnya
    let g = Math.abs(gcd(subs2, subs1, subs3));
    let akhir = '';
    if (g !== 1) {
        akhir = `${subs2 / g}x ${ defNeg(subs1 / g) }y ${ defPos(subs3 / g) } = 0`
    }

    const solusi = `Persamaan garis lurus yang melalui titik $(x_1, y_1)$ dan $(x_2, y_2)$ diberikan oleh
        ${_s}\\frac{y-y_1}{y_2-y_1} = \\frac{x-x_1}{x_2-x_1}${_t}
        Dengan ini didapat persamaan garis pada soal adalah
        ${_s}\\frac{y ${bSign}}{${d} ${bSign}} = \\frac{x ${aSign}}{${c} ${aSign}}\\]
        \\[${subs1} (y ${bSign}) = ${subs2} (x ${aSign})\\]
        \\[${subs2}x ${subs1Sign}y ${subs3Sign} = 0\\]
        \\[${akhir}${_t}`;    

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 4;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [a, b, c, d] = arr;
    const cond3 = a !== c;
    const cond4 = b !== d;

    if (!cond1 || !cond2 || !cond3 || !cond4) {
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
            a, b, c, d di [-10, 10]
    */

    a = nilaiRandom(-10, 10);
    b = nilaiRandom(-10, 10);
  
    do {
        c = nilaiRandom(-10, 10);
        d = nilaiRandom(-10, 10);
    } while (a === c || b === d);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();