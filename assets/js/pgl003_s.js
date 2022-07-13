
function soal() {
    const soal = `Tentukan persamaan garis yang melalui titik $(${a}, ${b})$
        dan sejajar garis $${c}x ${ defPos(d)}y ${ defPos(e)} = 0$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let aSign = defNeg(a);
    let bSign = defNeg(b);
    let dSign = defPos(d);
    let eSign = defPos(e);
    let konstan = d*b + a*c;

    // ambil nilai absolute
    let [cAbs, dAbs, eAbs] = absolute(c, d, e);

    // gradien
    let grad = (c/d < 0) ?  simplestFraction(cAbs, dAbs) : '-' + simplestFraction(cAbs, dAbs);
  
    // b pada y = ax + b
    let sisa = (e/d < 0) ? '+' + simplestFraction(eAbs, dAbs) : '-' + simplestFraction(eAbs, dAbs);
  
    // persamaan garis berbentuk cx + dy - (db + ac) = 0
    let hasil = `${c}x ${ defPos(d) }y ${ defNeg(konstan) } = 0`;
    if (c < 0) {
        hasil = `${-c}x ${ defNeg(d) }y ${ defPos(konstan) } = 0`; // dikali dengan -1
    }

    // sederhanakan jika didapat hasil seperti 2x + 2y + 4 = 0
    let g = Math.abs(gcd(c, d, konstan));
    if (g !== 1) {
        hasil = `${c / g}x ${ defPos(d / g) }y ${ defNeg(konstan / g) } = 0`;
        if (c < 0) {
            hasil = `${-c / g}x ${ defNeg(d / g) }y ${ defPos(konstan / g) } = 0`; // dikali dengan -1
        }
    }

    let solusi = '';
    
    // jika c dan d bukan 0
    if (c*d !== 0) {
        solusi = `Garis sejajar apabila gradiennya sama.
            ${_s}${c}x ${dSign}y ${eSign} = 0\\]
            \\[y = ${grad}x ${sisa}${_t}
            didapat gradiennya $${grad}$<br>
            Maka persamaan garis yang dicari adalah
            ${_s}y ${bSign} = ${grad} (x ${aSign})\\]
            \\[${hasil}${_t}`;
    }

    // handle kasus c = 0, yakni persamaan garis dy + e = 0
    else if (c === 0) {
        solusi = `Garis pada soal adalah garis mendatar dengan gradien $0$. Maka persamaan garis yang dicari
            adalah persamaan garis datar yang melalui titik $(${a}, ${b})$, yaitu $y = ${b}$`;
    }

    // handle kasus d = 0, yakni persamaan garis cx + e = 0
    else if (d === 0) {
        solusi = `Garis pada soal adalah garis tegak.  Maka persamaan garis yang dicari
            adalah persamaan garis tegak yang melalui titik $(${a}, ${b})$, yaitu $x = ${a}$`;
    }

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 5;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [a, b, c, d, e] = arr;
    const cond3 = (c !== 0) || (d !== 0); // c dan d tidak keduanya 0

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
            a, b, e di [-10, 10]
            c, d di [-5, 5] tidak keduanya nol
    */

    a = nilaiRandom(-10, 10);
    b = nilaiRandom(-10, 10);
    e = nilaiRandom(-10, 10);

    do {
        c = nilaiRandom(-5, 5);
        d = nilaiRandom(-5, 5);
    } while (c === 0 && d === 0);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();