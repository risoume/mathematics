
function soal() {
    const soal = `Banyak kursi pada baris pertama gedung teater ada $${p}$, baris kedua ada $${q}$,
        baris ketiga ada $${r}$, dan seterusya. Tentukan banyaknya kursi pada baris ke$-${n}$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let beda = q - p;
    let hasil = p + (n - 1) * beda;

    const solusi = `Diketahui
        ${_b}a &= ${p}\\\\
        b &= ${beda} ${_e}
        Kursi pada baris ke$-${n}$ adalah
        ${_b}u_n &= a + (n-1)b\\\\
        u_{${n}} &= ${p} + (${n} - 1)${beda}\\\\
        &= ${p} + (${n-1})${beda}\\\\
        &= ${hasil} ${_e}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 4;
    const cond2 = arr.every(i => !(isNaN(i) || i < 1)); // cek bilangan bulat positif
    
    [p, q, r, n] = arr;
    const cond3 = ujiBarisanAritmetika([p, q, r]); // cek barisan aritmetika
    const cond4 = q > p // beda harus positif

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
            n di [10, 30]
            beda di [3, 7]
            p di [5, 15]
    */

    n = nilaiRandom(10, 30);
    let beda = nilaiRandom(3, 7);
    p = nilaiRandom(5, 15);
    q = p + beda
    r = q + beda
        
    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();