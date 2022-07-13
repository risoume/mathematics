
function soal() {
    const soal = `Tentukan persamaan garis yang melalui titik $(${a}, ${b})$ dengan gradien $${c}$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let aSign = defNeg(a);
    let bSign = defNeg(b);
    let caSign = defNeg(c * a);
    let subSign1 = defPos(b - c * a);
    let subSign2 = defNeg(b - c * a);

    let hasil = c > 0 ? `${c}x - y ${subSign1} = 0` : `${-c}x + y ${subSign2} = 0`;

    let solusiAkhir = '';
    if (c === 0) {
        solusiAkhir = `${_s}y ${bSign} = 0(x ${aSign})\\]
            \\[y = ${b} ${_t}`;
    }
    else {
        solusiAkhir =  `${_s}y ${bSign} = ${c} (x ${aSign})\\]
            \\[y ${bSign} = ${c}x ${caSign}\\]
            \\[${hasil} ${_t}`;
    }

    const solusi = `Persamaan garis lurus yang melalui titik $(x_1, y_1)$ dengan gradien $m$ diberikan oleh
        ${_s}y - y_1 = m (x - x_1)${_t}
        Dengan ini didapat persamaan garis pada soal adalah ${solusiAkhir}`;    

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 3;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [a, b, c] = arr;

    if (!cond1 || !cond2) {
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
            a, b di [-10, 10]
            c di [-5, 5]
    */

    a = nilaiRandom(-10, 10);
    b = nilaiRandom(-10, 10);
    c = nilaiRandom(-5, 5);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();