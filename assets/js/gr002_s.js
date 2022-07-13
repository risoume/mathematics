
function soal() {
    const soal = `Tentukan kosinus arah segmen dari titik $P_1(${a})$ ke $P_2(${b})$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function simplest(a, b) {
    if (a === 0) return '=' + a;

    if (isNaN(b)) return '';

    let g = gcd(Math.abs(a), Math.abs(b));
    if (g == 1) return '';

    [a, b] = [a / g, b / g];
    if (b == 1) return '=' + a;
    
    return `=\\frac{${a}}{${b}}`;
}

function solusi() {
    let [x1, y1, z1] = a;
    let [x2, y2, z2] = b;

    let delx = x2 - x1;
    let dely = y2 - y1;
    let delz = z2 - z1;
    let hasil = delx * delx + dely * dely + delz * delz;

    let final = cekBilKuadrat(hasil) ? '=' + Math.sqrt(hasil) : '';
    let d = cekBilKuadrat(hasil) ? Math.sqrt(hasil) : `\\sqrt{${ hasil }}`;

    const solusi = `Panjang segmen $P_1P_2$ adalah
        ${_b}d &= \\sqrt{(${x2} ${defNeg(x1)})^2 + (${y2} ${defNeg(y1)})^2 + (${z2} ${defNeg(z1)})^2}\\\\
        &= \\sqrt{(${ delx })^2 + (${ dely })^2 + (${ delz })^2}\\\\
        &= \\sqrt{${ hasil }} ${final} ${_e}
        Kosinus arah dari segmen yang menghubungkan $P_1$ dan $P_2$ adalah
        ${_b}\\cos \\alpha &= \\frac{x_2 - x_1}{d} = \\frac{${x2} ${defNeg(x1)}}{${ d }} = \\frac{${ delx }}{${ d }} ${simplest(delx, d)}\\\\
        \\cos \\beta &= \\frac{y_2 - y_1}{d} = \\frac{${y2} ${defNeg(y1)}}{${ d }} = \\frac{${ dely }}{${ d }} ${simplest(dely, d)}\\\\
        \\cos \\gamma &= \\frac{z_2 - z_1}{d} = \\frac{${z2} ${defNeg(z1)}}{${ d }} = \\frac{${ delz }}{${ d }} ${simplest(delz, d)}${_e}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    a = input1.value.split(',').map(i => parseInt(i));
    b = input2.value.split(',').map(i => parseInt(i));

    const cond1 = a.length === 3;   // berdimensi 3
    const cond2 = b.length === 3;   // berdimensi 3
    const cond3 = a.every(i => !isNaN(i)); // cek bilangan bulat
    const cond4 = b.every(i => !isNaN(i)); // cek bilangan bulat
    const cond5 = a[0] != b[0] || a[1] != b[1] || a[2] != b[2]; // P_1 tidak sama dengan P_2

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
            koordinat di [-6, 6]
    */

    a = [];
    b = [];
    
    for (let i = 1; i <= 3; i++) {
        a.push(nilaiRandom(-6, 6));
        b.push(nilaiRandom(-6, 6));
    }

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();