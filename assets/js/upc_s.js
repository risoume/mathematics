
function soal() {
    const soal = `Hitung check digit dari bilangan $${b}$.`;
    
    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let weightVec = [3,1,3,1,3,1,3,1,3,1,3];
    let sums = a.map((i, index) => i * weightVec[index]);
    let sumsStr = sums.join('+');
    let result = -1 * dotProduct(weightVec, a);

    const solusi = `Check digit $a_{12}$ pada UPC harus memenuhi kondisi
        ${_s}(a_1, a_2, \\ldots, a_{12}) \\cdot (3,1,3,1,3,1,3,1,3,1,3,1) \\equiv 0\\pmod{10}${_t}
        yakni,
        ${_s}a_{12}\\equiv -(a_1, a_2, \\ldots, a_{11}) \\cdot (3,1,3,1,3,1,3,1,3,1,3) \\pmod{10}${_t}
        ${_b}a_{12} & \\equiv -(${a}) \\cdot (3,1,3,1,3,1,3,1,3,1,3) \\pmod{10}\\\\
        & \\equiv -(${sumsStr}) \\pmod{10}\\\\
        & \\equiv ${result} \\equiv ${result.mod(10)} \\pmod{10}\\\\${_e}
        Jadi check digitnya adalah $${result.mod(10)}$.`;

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

    b = nilaiRandom(11111111111, 99999999999);
    a = b.toString().split('').map(i => parseInt(i));

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();