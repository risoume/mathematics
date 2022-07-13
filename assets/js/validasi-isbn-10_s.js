
function soal() {
    const soal = `Periksa apakah nomor identifikasi berikut valid: $${b}$.`;
    
    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let weightVec = [10,9,8,7,6,5,4,3,2,1];
    let sums = a.map((i, index) => i * weightVec[index]);
    let sumsStr = sums.join('+');
    let result = dotProduct(weightVec, a);

    let hasil = '';
    if (result.mod(11) === 0)
        hasil = 'Sehingga nomor identifikasi tersebut valid.'
    else
        hasil = 'Sehingga nomor identifikasi tersebut tidak valid.'

    const solusi = `
        ${_b}(${a}) \\cdot (10,9,8,7,6,5,4,3,2,1) &= (${sumsStr})\\\\
        & = ${result} \\equiv ${result.mod(11)} \\pmod{11}\\\\${_e}
        ${hasil}`

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    b = input1.value.toUpperCase();
    c = b.split('');
    let cek = c.pop();
    c[c.length] = (cek === "X") ? 10 : cek;
    
    a = c.map(i => parseInt(i));
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

    if (Math.random() < 0.5) {
        let weightVec = [10,9,8,7,6,5,4,3,2];
        let num = nilaiRandom(111111111, 999999999);
        a = num.toString().split('').map(i => parseInt(i));

        let result = -1 * dotProduct(weightVec, a);
        let resultMod = result.mod(11) < 10 ? result.mod(11) : 'X';

        b = num + resultMod.toString();
        a.push(result.mod(11));
    }
    else {
        b = nilaiRandom(1111111111, 9999999999);
        a = b.toString().split('').map(i => parseInt(i));
    }

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();