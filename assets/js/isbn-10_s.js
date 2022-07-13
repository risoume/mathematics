
function soal() {
    const soal = `Hitung check digit dari bilangan $${b}$.`;
    
    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let weightVec = [10,9,8,7,6,5,4,3,2];
    let sums = a.map((i, index) => i * weightVec[index]);
    let sumsStr = sums.join('+');
    let result = -1 * dotProduct(weightVec, a);
    let resultMod = result.mod(11) < 10 ? result.mod(11) : 'X';

    const solusi = `Check digit $a_{10}$ pada ISBN harus memenuhi kondisi
        ${_s}(a_1, a_2, \\ldots, a_{10}) \\cdot (10,9,8,7,6,5,4,3,2,1) \\equiv 0\\pmod{11}${_t}
        yakni,
        ${_s}a_{9}\\equiv -(a_1, a_2, \\ldots, a_{9}) \\cdot (10,9,8,7,6,5,4,3,2) \\pmod{11}${_t}
        ${_b}a_{9} & \\equiv -(${a}) \\cdot (10,9,8,7,6,5,4,3,2) \\pmod{11}\\\\
        & \\equiv -(${sumsStr}) \\pmod{11}\\\\
        & \\equiv ${result} \\equiv ${resultMod} \\pmod{11}\\\\${_e}
        Jadi check digitnya adalah $${resultMod}$.`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    b = input1.value;
    a = b.split('').map(i => parseInt(i));
    const cond1 = a.length === 9;
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
            b di [111111111, 999999999]
    */

    b = nilaiRandom(111111111, 999999999);
    a = b.toString().split('').map(i => parseInt(i));

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();