
function soal() {
    const soal = `Tentukan posisi titik $(${a}, ${b})$ terhadap lingkaran
        $(x ${defNeg(c)})^2 + (y ${defNeg(d)})^2 = ${e}$`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let subs = (a-c)*(a-c) + (b-d)*(b-d);
    let cSign = defNeg(c);
    let dSign = defNeg(d);

    let sign = (subs > e) ? '>' : (subs === e) ? '=' : '<';
    let str = (subs > e) ? 'di luar' : (subs === e) ? 'pada' : 'di dalam';

    const solusi = `Substitusi titik tersebut ke dalam persamaaan, diperoleh
        ${_s}(${a} ${cSign})^2 + (${b} ${dSign})^2 = ${subs} ${sign} ${e}${_t}
        Jadi titik $(${a},${b})$ terletak ${str} lingkaran.`;
        
    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 5;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [a, b, c, d, e] = arr;
    const cond3 = e > 0;

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
            a, b, c, d di [-6, 6]
            e di [2,100]
    */

    a = nilaiRandom(-6, 6);
    b = nilaiRandom(-6, 6);
    c = nilaiRandom(-6, 6);
    d = nilaiRandom(-6, 6);
    e = nilaiRandom(2, 100);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();