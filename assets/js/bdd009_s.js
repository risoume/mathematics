
function soal() {
    const soal = `Suku ke$-${p}$ barisan aritmetika adalah $${s}$ dan suku ke$-${q}$ adalah $${t}$.
        Tentukan jumlah $${r}$ suku pertama barisan tersebut.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let subs1 = t - s; // hasil eliminasi ruas kiri persamaan
    let subs2 = q - p; // hasil eliminasi ruas kanan persamaan
    let beda = subs1 / subs2; // beda = (s - t) / (p - q)
    let subs = defPos((r - 1) * beda);
    let sukuAwal = s - (p - 1) * beda;
    let hasil = r * (2 * sukuAwal + (r - 1) * beda) / 2;

    const solusi = `${_b}u_{${p}} &= ${s} = a + ${p - 1}b\\\\
        u_{${q}} &= ${t} = a + ${q - 1}b ${_e}
        Dengan mengurangkan persamaan kedua ke persamaan pertama diperoleh
        ${_b} ${subs2}b &= ${subs1}\\\\
        b &= ${beda} ${_e}
        Untuk mencari nilai $a$, substitusi beda ke persamaan pertama:
        ${_b}${s} &= a + ${p - 1} (${beda})\\\\
        a &= ${sukuAwal} ${_e}
        Maka jumlah $${r}$ suku pertama adalah
        ${_b} s_n &= \\frac{n}{2}(2a + (n - 1)b)\\\\
        s_{${r}} &= \\frac{${r}}{2}(2 (${sukuAwal}) + (${r} - 1)(${beda}))\\\\
        s_{${r}} &= \\frac{${r}}{2}(${2 * sukuAwal} ${subs})\\\\
        &= ${hasil} ${_e}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 5;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [p, s, q, t, r] = arr;
    const cond3 = [p, q, r].every(i => i > 0); // p, q, r harus positif
    const cond4 = p !== q // p, q harus berbeda
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
            p di [3, 10]    => p > q
            q di [11, 20]
            r di [5, 20]
            suku awal di [2, 10]
            beda di [-2, 6] bukan nol
            s = suku awal + (p - 1) * b di [-16, 64]
            t di [-36, 124]
            s_r = r * (2 * suku awal + (r - 1) * beda) / 2 di [-340, 1340]
    */

    p = nilaiRandom(3, 10);
    q = nilaiRandom(11, 20);
    r = nilaiRandom(5, 20);
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