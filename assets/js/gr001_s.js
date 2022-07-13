
function soal() {
    const soal = `Tentukan panjang segmen dari titik $P_1(${a})$ ke $P_2(${b})$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let [x1, y1, z1] = a;
    let [x2, y2, z2] = b;

    let delx = x2 - x1;
    let dely = y2 - y1;
    let delz = z2 - z1;
    let hasil = delx * delx + dely * dely + delz * delz;

    let final = cekBilKuadrat(hasil) ? '=' + Math.sqrt(hasil) : '';

    const solusi = `${_s}d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}${_t}
        Maka panjang segmen adalah
        ${_b}|P_1P_2| &= \\sqrt{(${x2} ${defNeg(x1)})^2 + (${y2} ${defNeg(y1)})^2 + (${z2} ${defNeg(z1)})^2}\\\\
        &= \\sqrt{(${ delx })^2 + (${ dely })^2 + (${ delz })^2}\\\\
        &= \\sqrt{${ hasil }} ${final} ${_e}`;

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