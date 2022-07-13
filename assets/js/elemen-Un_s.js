
function soal() {
    const soal = `Tentukan elemen dari grup $U(${a})$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let elems = [];
    for (let i = 1; i < a; i++) {
        if (gcd(i, a) === 1) {
            elems.push(i);
        }
    }

    const solusi = `Elemen dari $U(${a})$ adalah bilangan bulat positif yang kurang dari $${a}$
        dan relatif prima dengan $${a}$. Yaitu
        ${_s}\\{${ elems }\\}${_t}`;

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
            a di [4, 30]
    */

    a = nilaiRandom(4, 30);
 
    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();