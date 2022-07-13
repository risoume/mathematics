
function soal() {
    const soal = `Berapa banyak pembagi positif berbeda yang dimiliki oleh bilangan $${a}$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let arr = faktorPrima(a);
    const pangkat = {};
    arr.forEach(e => !(e in pangkat) ? pangkat[e] = 1 : pangkat[e]++);

    let pangkatArr = Object.entries(pangkat);

    const faktorisasi = pangkatArr.map(i => `${ i[0] }^${ i[1] }`).join('\\times ');
    const divisors = pangkatArr.map((i, index) => `${ i[0] }^{e_{${ index + 1 }}}`).join('\\times '); // bentuk umum pembagi positif a
    const constraint = pangkatArr.map((i, index) => `$0\\leq e_{${ index + 1 }}\\leq ${ i[1] }$`).join(', ');
    const hasilStr = pangkatArr.map(i => i[1] + 1).join('\\times ');
    const hasil = pangkatArr.reduce((acc, curr) => acc * (curr[1] + 1), 1); // banyak faktor positif

    let solusi = '';
    if (pangkatArr.length > 1) {
        solusi = `Faktorisasi prima dari $${a}$ adalah
            ${_s} ${faktorisasi} ${_t}
            Setiap faktor dari bilangan ini berbentuk
            ${_s} ${divisors} ${_t}
            dengan ${constraint}. Dari aturan perkalian, banyak faktor positifnya adalah
            ${_s} ${hasilStr} = ${hasil} ${_t}`;
    }
    else {
        solusi = `Faktorisasi prima dari $${a}$ adalah
            ${_s} ${faktorisasi} ${_t}
            Setiap faktor dari bilangan ini berbentuk
            ${_s} ${divisors} ${_t}
            dengan ${constraint}. Maka banyak faktor positifnya adalah
            ${_s} ${hasil} ${_t}`;
    }

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    a = parseInt(input1.value);
    const cond1 = !isNaN(a);
    const cond2 = a > 1;

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
            a di [10, 200]
    */

    a = nilaiRandom(10, 200);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();