
function soal() {
    const soal = `Konversi bilangan $${a}$ ke dalam basis $${b}$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let num = a;
    let str = '';

    while (true) {
        let rem = a % b;
        let quot = Math.floor(a / b);
        str += `${a} &= ${quot} \\times ${b} + \\textbf{ ${ rem.toString(b).toUpperCase() } } \\\\`;
        a = quot;
        if (quot === 0) break;
    }

    const solusi = `${_b} ${str} ${_e}
        Diperoleh $${num} = ( \\text{${ num.toString(b).toUpperCase() }} )_{${b}} $`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    a = parseInt(input1.value);
    b = parseInt(input2.value);
    const cond1 = !isNaN(a);
    const cond2 = !isNaN(b);
    const cond3 = a > 0; // bilangan asli
    const cond4 = b >= 2 && b <= 36;

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
            a di [12, 100]
            b di {2, 3, 4, 6, 8, 12, 16}
    */

    a = nilaiRandom(12, 100);
    let arr = [2, 3, 4, 6, 8, 12, 16];
    let index = nilaiRandom(0, 6);
    b = arr[index];

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();