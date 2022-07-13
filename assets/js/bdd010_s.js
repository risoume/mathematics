
function soal() {
    const soal = `Jumlah $${p}$ suku pertama barisan aritmetika adalah $${q}$.
    Jika suku pertama adalah $${r}$, tentukan suku terakhir.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let rSign = defNeg(r);
    let hasil = 2 * q / p - r;

    const solusi = `${_b} s_n &= \\frac{n}{2}(a + u_n)\\\\
        u_n &= \\frac{2 s_n}{n} - a\\\\
        u_{${p}} &= \\frac{2 s_{${p}}}{${p}} ${rSign}\\\\
        &= \\frac{2(${q})}{${p}} ${rSign}\\\\
        &= ${hasil} ${_e}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 3;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [p, q, r] = arr;
    const cond3 = p > 0; // p harus positif
    const cond4 = 2 * q % p === 0 // p habis membagi 2q
  
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
            p di [10, 30]
            q di [-40, 300]
            r di [-10, 20]
    */

    do {
        p = nilaiRandom(10, 30);
        q = nilaiRandom(-40, 300);
    } while (2 * q % p !== 0);

    r = nilaiRandom(-10, 20);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();