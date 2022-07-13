
function soal() {
    const soal = `Periksa apakah nomor identifikasi berikut valid: $${b}$.`;
    
    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let checkDigit = a.pop();
    let sum = a.reduce((acc, curr) => acc + curr);
    let checkDigit2 = sum % 9;

    let hasil = '';
    if (checkDigit === checkDigit2)
        hasil = 'Karena kedua check digit sama, maka nomor identifikasi tersebut valid.'
    else
        hasil = 'Karena kedua check digit berbeda, maka nomor identifikasi tersebut tidak valid.'

    const solusi = `Check digitnya adalah $${checkDigit}$. Dari $10$ digit pertama didapat check digit 
        ${_s}${sum} \\bmod 9 = ${checkDigit2}${_t}
        ${hasil}`


    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    b = input1.value;
    a = b.split('').map(i => parseInt(i));
    const cond1 = a.length === 11;
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
            b di [11111111111, 99999999999]
    */

    if (Math.random() < 0.5) {
        let num = nilaiRandom(1111111111, 9999999999);
        b = num * 10 + (num % 9);
    }
    else {
        b = nilaiRandom(11111111111, 99999999999);
    }
    a = b.toString().split('').map(i => parseInt(i));

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();