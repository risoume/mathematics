
function soal() {
    const soal = `Periksa apakah nomor identifikasi berikut valid: $${b}$.`;
    
    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let weightVec = [3,1,3,1,3,1,3,1,3,1,3,1];
    let sums = a.map((i, index) => i * weightVec[index]);
    let sumsStr = sums.join('+');
    let result = dotProduct(weightVec, a);

    let hasil = '';
    if (result.mod(10) === 0)
        hasil = 'Sehingga nomor identifikasi tersebut valid.'
    else
        hasil = 'Sehingga nomor identifikasi tersebut tidak valid.'

    const solusi = `
        ${_b}(${a}) \\cdot (3,1,3,1,3,1,3,1,3,1,3,1) &= (${sumsStr})\\\\
        & = ${result} \\equiv ${result.mod(10)} \\pmod{10}\\\\${_e}
        ${hasil}`

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    b = input1.value;
    a = b.split('').map(i => parseInt(i));
    const cond1 = a.length === 12;
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
            b di [111111111111, 999999999999]
    */

    if (Math.random() < 0.5) {
        let weightVec = [3,1,3,1,3,1,3,1,3,1,3];
        let num = nilaiRandom(11111111111, 99999999999);
        c = num.toString().split('').map(i => parseInt(i));

        let result = -1 * dotProduct(weightVec, c);
        b = num * 10 + result.mod(10);
    }
    else {
        b = nilaiRandom(111111111111, 999999999999);
    }
    a = b.toString().split('').map(i => parseInt(i));

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();