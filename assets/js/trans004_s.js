
function soal() {
    const soal = `Tentukan bayangan dari garis $${a}x ${defPos(b)}y ${defPos(c)}=0$
        oleh translasi $T=(${d},${e})$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let sub = c - a*d - b*e;
 
    // (x + a)
    let bSign = defPos(b);
    let cSign = defPos(c);
    let subSign = defPos(sub);
   
    // (x - a)
    let dSign = defNeg(d);
    let eSign = defNeg(e);

    let aFix = (a === 0) ? '' : a + 'x';
    let bFix = (b === 0) ? '' : (a === 0) ? b + 'y' : bSign + 'y';
    let subFix = (sub === 0) ? '' : subSign;

    const solusi = `Misal titik $(x,y)$ memenuhi persamaan dan $(x\',y\')$ adalah bayangannya, maka
        ${_b}(x\',y\') &= (${d},${e}) + (x,y)\\\\
        (x,y) &= (x\',y\') - (${d},${e})\\\\
        (x,y) &= (x\' ${dSign}, y\' ${eSign})${_e}
        Dengan mensubstitusi $x$ dan $y$ ke persamaan garis diperoleh
        ${_s}${a}(x\' ${dSign}) ${bSign}(y\' ${eSign}) ${cSign} = 0\\]
        \\[${a} x\' ${bSign} y\' ${subSign} = 0${_t}
        Jadi bayangan garisnya adalah
        ${_s}${aFix} ${bFix} ${subFix} = 0${_t}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 5;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [a, b, c, d, e] = arr;
    const cond3 = (b !== 0) || (a !== 0);

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
            a, b tidak keduanya nol
            a, b, c, d di [-5, 6]
            e di [-10,15]
    */

    do {
        a = nilaiRandom(-5, 6);
        b = nilaiRandom(-5, 6);
    } while (a === 0 && b === 0);

    c = nilaiRandom(-5, 6);
    d = nilaiRandom(-5, 6);
    e = nilaiRandom(-10, 15);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();