
function soal() {
    const soal = `Tentukan persamaan lingkaran yang berpusat di $(${a},${b})$ dan melalui titik $(${c},${d})$.`;
    
    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let rKuadrat = (c - a)*(c - a) + (d - b)*(d - b);
  
    // (x - a)
    let aSign = defNeg(a);
    let bSign = defNeg(b);

    let strA = (a === 0) ? 'x^2' : `(x${aSign})^2`;
    let strB = (b === 0) ? 'y^2' : `(y${bSign})^2`;

    const solusi = `Jari-jari lingkaran adalah jarak antara titik pusat dengan suatu titik pada lingkaran,
        yang dalam soal ini adalah jarak titik $(${a},${b})$ ke titik $(${c},${d})$.
        ${_b}r &= \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\\\
        &= \\sqrt{(${c}${aSign})^2 + (${d}${bSign})^2}\\\\
        &= \\sqrt{${rKuadrat}}${_e}
        Sehingga persamaannya adalah
        ${_s}${strA} + ${strB} = ${rKuadrat}${_t};`

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 4;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [a, b, c, d] = arr;

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
            a, b, c, d di [-5, 6]
    */

    a = nilaiRandom(-5, 6);
    b = nilaiRandom(-5, 6);
    c = nilaiRandom(-5, 6);
    d = nilaiRandom(-5, 6);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();