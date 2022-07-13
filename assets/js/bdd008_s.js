
function soal() {
    const soal = `Banyak kursi pada baris pertama gedung teater ada $${p}$, baris kedua ada $${q}$,
        baris ketiga ada $${r}$, dan seterusya. Jika ada $${n}$ baris kursi,
        tentukan total kursi yang ada di teater tersebut.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let beda = q - p;
    let subs = (n - 1) * beda;
    let hasil = n * (2 * p + (n - 1) * beda) / 2;

    const solusi = `Diketahui
        ${_b}a &= ${p}\\\\
        b &= ${beda} ${_e}
        Total kursi adalah
        ${_b} s_n &= \\frac{n}{2}(2a + (n - 1)b)\\\\
        s_{${n}} &= \\frac{${n}}{2}(2\\cdot ${p} + (${n} - 1)${beda})\\\\
        s_{${n}} &= \\frac{${n}}{2}(${2 * p} + ${subs})\\\\
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
    const cond5 = n > 3 // minimal 4 baris

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
            n di [6, 20]
            beda di [3, 7]
            p di [5, 15]
    */

    n = nilaiRandom(6, 20);
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