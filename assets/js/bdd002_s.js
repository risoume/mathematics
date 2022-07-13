
function soal() {
    const soal = `Tentukan rumus suku ke$-n$ dari barisan aritmetika $${a}, \\ldots$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    // u_n = a + (n - 1)b
    //     = nb + a - b

    let beda = a[1] - a[0];
    let konstan = (a[0] !== beda) ? defPos(a[0] - beda) : ''; // ex: barisan 2, 4, 6 menghasilkan u_n = 2n

    let hasil = `${beda}n ${konstan}`;
    // jika beda = 1, -1 tidak ditulis 1n atau -1n
    if (beda === 1) {
        hasil = `n ${konstan}`;
    }
    else if (beda === -1) {
        hasil = `-n ${konstan}`;
    }
    // jika beda 0 maka u_n = suku awal
    else if (beda === 0) {
        hasil = `${a[0]}` ;
    }

    const solusi = `${_b}a &= u_1 = ${a[0]}\\\\
        b &= u_2 - u_1 = ${beda} ${_e}
        Rumus suku ke$-n$ adalah
        ${_b}u_n &= a + (n-1)b\\\\
        &= ${a[0]} + (n - 1)(${beda})\\\\
        &= ${hasil} ${_e}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    a = input1.value.split(',').map(i => parseInt(i)); // hapus tanda kurung
    a.pop(); // hapus ... yang sudah jadi NaN

    const cond1 = a.length > 1; // minimal dua suku
    const cond2 = a.every(i => !isNaN(i)); // cek bilangan bulat
    const cond3 = ujiBarisanAritmetika(a);
  
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
            beda di [-2, 7] bukan nol
            panjang barisan di [3, 5]
            suku awal di [5, 15]
    */

    let beda = nilaiRandom(-2, 7);

    while (beda === 0) {
        beda = nilaiRandom(-2, 7);
    }

    let panjangBarisan = nilaiRandom(3, 5);
    let sukuAwal = nilaiRandom(5, 15);
    a = [sukuAwal];

    for (let i = 1; i < panjangBarisan; i++) {
        a.push(sukuAwal + i * beda);
    }

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();