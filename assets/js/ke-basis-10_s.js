
function soal() {
    const soal = `Konversi bilangan $(\\text{${a}})_{${b}}$ ke dalam basis $10$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let digits = [...a];
    let len = digits.length;
    let str = digits.map((i, index) => `${parseInt(i, b)} (${b}^{${len - index - 1}})`).join('+');
    let str2 = digits.map((i, index) => '' + parseInt(i, b) * b ** (len - index - 1)).join('+');

    const solusi = `${_b} (\\text{${a}})_{${b}} &= ${str}\\\\
        &= ${str2}\\\\
        &= ${parseInt(a, b)} ${_e}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    a = input1.value.toUpperCase();
    b = parseInt(input2.value);
    const cond1 = a.match(/[a-z0-9]/gi).length === a.length
    const cond2 = !isNaN(b);
    const cond3 = b >= 2 && b <= 36; // basis di antara 2 - 36
    const cond4 = [...a].map(i => parseInt(i, b)).sort((a, b) => a - b).pop() < b; // nilai max harus di bawah basis

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
            a di [12, 400]
            b di {2, 3, 4, 6, 8, 12, 16}
    */

    let num = nilaiRandom(12, 400);
    let arr = [2, 3, 4, 6, 8, 12, 16];
    let index = nilaiRandom(0, 6);
    b = arr[index];
    a = num.toString(b).toUpperCase();

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();