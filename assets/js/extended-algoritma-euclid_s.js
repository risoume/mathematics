
function soal() {
    const soal = `Gunakan algoritma euclid untuk menyatakan gcd$(${a}, ${b})$ sebagai kombinasi linear dari $${a}$ dan $${b}$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    if (a < b) [a, b] = [b, a];
    let [str, gcd, s, t] = extEuclid(a, b);
    
    const solusi = `${str}
        Diperoleh
        ${_s} \\gcd(${a}, ${b})= ${gcd} = (${s})${a} + (${t})${b} ${_t}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 2;
    const cond2 = arr.every(i => !(isNaN(i) || i < 1)); // cek bilangan bulat positif
    
    [a, b] = arr;

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
            a, b di [4,100]
    */

    a = nilaiRandom(4, 100);
    b = nilaiRandom(4, 100);
 
    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();