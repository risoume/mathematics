
function soal() {
    const soal = `Tentukan posisi titik $(${a},${b})$ terhadap lingkaran $x^2+y^2=${c}$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let subs = a*a + b*b;
    let sign = (subs > c) ? '>' : (subs === c) ? '=' : '<';
    let str = (subs > c) ? 'di luar' : (subs === c) ? 'pada' : 'di dalam';

    const solusi = `Substitusi titik tersebut ke dalam persamaaan, diperoleh
        ${_s}(${a})^2 + (${b})^2 = ${subs} ${sign} ${c}${_t}
        Jadi titik $(${a},${b})$ terletak ${str} lingkaran.`;
        
    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 3;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [a, b, c] = arr;
    const cond3 = c > 0;

    if (!cond1 || !cond2 || !cond3) {
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
            a, b di [-10, 10]
            c di [2,100]
    */

    a = nilaiRandom(-10, 10);
    b = nilaiRandom(-10, 10);
    c = nilaiRandom(2, 100);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();