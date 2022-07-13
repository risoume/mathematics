
function soal() {
    const soal = `Suku ke$-${p}$ barisan aritmetika adalah $${s}$ dan suku ke$-${q}$ adalah $${t}$.
        Tentukan suku ke$-${r}$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let subs1 = t - s; // hasil eliminasi ruas kiri persamaan
    let subs2 = q - p; // hasil eliminasi ruas kanan persamaan
    let beda = subs1 / subs2; // beda = (s - t) / (p - q)
    let sukuAwal = s - (p - 1) * beda;
    let hasil = sukuAwal + (r - 1) * beda;

    const solusi = `${_b}u_{${p}} &= ${s} = a + ${p - 1}b\\\\
        u_{${q}} &= ${t} = a + ${q - 1}b ${_e}
        Dengan mengurangkan persamaan kedua ke persamaan pertama diperoleh
        ${_b} ${subs2}b &= ${subs1}\\\\
        b &= ${beda} ${_e}
        Untuk mencari nilai $a$, substitusi beda ke persamaan pertama:
        ${_b}${s} &= a + ${p - 1} (${beda})\\\\
        a &= ${sukuAwal} ${_e}
        Maka suku ke$-${r}$ adalah
        ${_b}u_n &= a + (n-1)b\\\\
        u_{${r}} &= ${sukuAwal} + (${r} - 1)(${beda})\\\\
        &= ${sukuAwal} + (${r-1})(${beda})\\\\
        &= ${hasil} ${_e}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 5;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [p, s, q, t, r] = arr;
    const cond3 = [p, q, r].every(i => i > 0); // p, q, r harus positif
    const cond4 = ujiUnik([p, q, r]) // p, q, r harus berbeda
    const cond5 = (t - s) % (q - p) === 0 // beda yang dihasilkan harus bulat
  
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
            p di [3, 10]    => p, q, r naik
            q di [11, 20]
            r di [21, 50]
            suku awal di [2, 10]
            beda di [-2, 6] bukan nol
            s = suku awal + (p - 1) * b di [-16, 64]
            t di [-36, 124]
            u_r di [-96, 304]
    */

    p = nilaiRandom(3, 10);
    q = nilaiRandom(11, 20);
    r = nilaiRandom(21, 50);
    let sukuAwal = nilaiRandom(2, 10);
    let beda = nilaiRandom(-2, 6);

    while (beda === 0) {
        beda = nilaiRandom(-2, 6);
    }

    s = sukuAwal + (p - 1) * beda;
    t = sukuAwal + (q - 1) * beda;

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();