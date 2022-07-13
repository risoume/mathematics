
function soal() {
    const soal = `Hitung check digit dari bilangan $${b}$.`;
    
    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let sum = a.reduce((acc, curr) => acc + curr);

    const solusi = `Check digitnya adalah bilangan tersebut modulo $9$,
        atau sama dengan jumlah digit-digitnya modulo $9$. Yaitu
        ${_s}${sum} \\bmod 9 = ${sum % 9}${_t}`

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    b = input1.value;
    a = b.split('').map(i => parseInt(i));
    const cond1 = a.length === 10;
    const cond2 = a.every(i => !isNaN(i)); // cek bilangan bulat

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
            b di [1111111111, 9999999999]
    */

    b = nilaiRandom(1111111111, 9999999999);
    a = b.toString().split('').map(i => parseInt(i));

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();