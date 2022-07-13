
function soal() {
    const soal = `Tentukan persamaan lingkaran yang berpusat di $(${a},${b})$
        dan menyinggung garis $${c}x${defPos(d)}y${defPos(e)}=0$.`;
    
    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function cekBilKuadrat(x) {
    return Math.sqrt(x) === Math.floor(Math.sqrt(x));
}

function solusi() {
    let num =  (c * a) + (d * b) + e;
    let den = (c*c) + (d*d);
    let numSquare = num * num;
    
    // (x - a)
    let aSign = defNeg(a);
    let bSign = defNeg(b);
  
    // (x + a)
    let dSign = defPos(d);
    let eSign = defPos(e);

    let radiusAbs = `\\frac{${num}}{\\sqrt{${den}}}`;
    let radius = '';

    if (cekBilKuadrat(den)) {
        let denNew = Math.sqrt(den);
        radiusAbs = `\\frac{${num}}{${denNew}}`;

        if (num % denNew === 0)
        radius = '=' + Math.abs(num / denNew);
    }

    let strA = (a === 0) ? 'x^2' : `(x${aSign})^2`;
    let strB = (b === 0) ? 'y^2' : `(y${bSign})^2`;

    let sol = simplestFractionEnd(numSquare, den);
    if (sol === '')
        sol = `=\\frac{${numSquare}}{${den}}`;

    const solusi = `Panjang jari-jari adalah jarak titik $(${a},${b})$ ke garis $${c}x${dSign}y${eSign}=0$, yaitu
        ${_b}r &= \\left|\\frac{${c}(${a})${dSign}(${b})${eSign}}{\\sqrt{(${c})^2+(${d})^2}}\\right|\\\\
        &= \\left|${radiusAbs}\\right|${radius}${_e}
        Jadi persamaan lingkarannya adalah
        ${_s}${strA} + ${strB} ${sol}${_t}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 5;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [a, b, c, d, e] = arr;
    const cond3 = (c !== 0) || (d !== 0);

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
            c, d tidak keduanya nol
            a, b, c, d di [-5, 6]
            e di [-10,15]
    */

    a = nilaiRandom(-5, 6);
    b = nilaiRandom(-5, 6);
    e = nilaiRandom(-10, 15);

    do {
        c = nilaiRandom(-5, 6);
        d = nilaiRandom(-5, 6);
    } while (c === 0 && d === 0);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();