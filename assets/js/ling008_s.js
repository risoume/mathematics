
function soal() {
    const soal = `Tentukan posisi titik $(${a}, ${b})$ terhadap
        lingkaran $x^2 + y^2 ${defPos(c)}x ${defPos(d)}y ${defPos(e)} = 0$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let  subs = a*a + b*b + a*c + b*d + e;
   
    let cSign = defPos(c);
    let dSign = defPos(d);
    let eSign = defPos(e);

    let sign = (subs > 0) ? '>' : (subs === 0) ? '=' : '<';
    let str = (subs > 0) ? 'di luar' : (subs === 0) ? 'pada' : 'di dalam';

    const solusi = `Substitusi titik tersebut ke dalam persamaaan, diperoleh
        ${_s}(${a})^2 + (${b})^2 ${cSign} (${a}) ${dSign} (${b}) ${eSign} = ${subs} ${sign} 0 ${_t}                             
        Jadi titik $(${a},${b})$ terletak ${str} lingkaran.`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 5;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [a, b, c, d, e] = arr;
    const cond3 = c*c + d*d - 4*e > 0;

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
            a, b di [-6, 6]
            c, d di [-8, 6] selain 0
            e di [-12, 6] selain 0
    */

    a = nilaiRandom(-6, 6);
    b = nilaiRandom(-6, 6);

    do {
        c = nilaiRandom(-8, 6);
        d = nilaiRandom(-8, 6);
        e = nilaiRandom(-12, 6);
    } while (c*c + d*d - 4*e <= 0 || c*d*e === 0);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();