
function soal() {
    const soal = `Tentukan bayangan titik $A(${a},${b})$ oleh translasi $T=(${c},${d})$.`;
    
    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    sub1 = a + c;
    sub2 = b + d;

    const solusi = `${_b}(a',b') &= (${c},${d})+(${a},${b})\\\\ &= (${sub1},${sub2})${_e}
        Jadi bayangannya adalah $A'(${sub1},${sub2})$`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 4;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [a, b, c, d] = arr;

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
            a, b, c, d di [-10, 10]
    */

    a = nilaiRandom(-10, 10);
    b = nilaiRandom(-10, 10);
    c = nilaiRandom(-10, 10);
    d = nilaiRandom(-10, 10);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();