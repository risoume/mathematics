
function soal() {
    const soal = `Tentukan bentuk umum persamaan lingkaran yang berpusat di $(${a},${b})$ dan berjari-jari $${c}$.`;
    
    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let C = a*a + b*b - c*c;
    let CSign = (C === 0) ? '' : defPos(C);
    
    // ( x - a )
    let aSign = defNeg(a);
    let bSign = defNeg(b);
    let ASign = (a === 0) ? '' : defNeg(2*a) + 'x';
    let BSign = (b === 0) ? '' : defNeg(2*b) + 'y';

    const solusi = `Persamaan lingkaran dengan pusat $(a,b)$ dan jari-jari $r$ adalah
        ${_s}(x-a)^2 + (y-b)^2 = r^2\\]
        \\[x^2 + y^2 - 2ax - 2by + a^2 + b^2 - r^2 = 0${_t}
        Sehingga bentuk umum persamaannya adalah
        ${_s}(x ${aSign})^2 + (y ${bSign})^2 = ${c}^2\\]
        \\[x^2 + y^2 ${ASign} ${BSign} ${CSign} = 0${_t}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 3;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [a, b, c] = arr;
    const cond3 = c > 0;  // jari jari positif

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
            a, b di [-5, 8]
            c di [2,7]
    */

    a = nilaiRandom(-5, 8);
    b = nilaiRandom(-5, 8);
    c = nilaiRandom(2, 7);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();