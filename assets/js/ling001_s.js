
function soal() {
    const soal = `Tentukan persamaan lingkaran yang berpusat di $(${a},${b})$ dengan jari-jari $${c}$.`;
    
    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let rKuadrat = c * c;
  
    // (x - a)
    let aSign = defNeg(a);
    let bSign = defNeg(b);

    let strA = (a === 0) ? 'x^2' : `(x${aSign})^2`;
    let strB = (b === 0) ? 'y^2' : `(y${bSign})^2`;

    const solusi = `Persamaan lingkaran dengan pusat $(a,b)$ dan jari-jari $r$ adalah        
        ${_s}(x-a)^2+(y-b)^2=r^2${_t}
        Sehingga persamaannya adalah
        ${_s}${strA} + ${strB} = ${rKuadrat}${_t}`

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 3;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [a, b, c] = arr;
    const cond3 = c > 0;  // jari jari positif

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
            a, b di [-10, 20]
            c di [2,10]
    */

    a = nilaiRandom(-10, 20);
    b = nilaiRandom(-10, 20);
    c = nilaiRandom(2, 10);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();