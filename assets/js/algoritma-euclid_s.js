
function soal() {
    const soal = `Gunakan algoritma euclid untuk mencari gcd dari $(${a}, ${b})$`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let hasil = euclidGcd(a, b);
    
    const solusi = `${hasil[0]}
        Diperoleh $\\gcd(${a}, ${b})= ${hasil[1]}$`;

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
            a, b di [4,1000]
    */

    a = nilaiRandom(4, 1000);
    b = nilaiRandom(4, 1000);
 
    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();