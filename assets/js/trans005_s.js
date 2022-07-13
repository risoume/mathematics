
function soal() {
    const soal = `Tentukan bayangan lingkaran $(x ${defNeg(a)})^2 + (y ${defNeg(b)})^2 = ${c}$
        oleh translasi $T=(${d}, ${e})$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let sub1 = d + a;
    let sub2 = e + b;
   
    let sub1Sign = defNeg(sub1);
    let sub2Sign = defNeg(sub2);
  
    const solusi = `Lingkaran pada soal berpusat di $(${a}, ${b})$. Dengan translasi $T$ diperoleh bayangan pusatnya
        ${_s}(${d}, ${e}) + (${a}, ${b}) = (${a+d}, ${b+e})${_t}
        Sehingga bayangan lingkarannya adalah
        ${_s}(x ${sub1Sign})^2 + (y ${sub2Sign})^2 = ${c}${_t}`;    

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 5;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [a, b, c, d, e] = arr;
    const cond3 = c > 0; // jari jari positif

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
            a, b, d, e di [-10, 10]
            c di [5, 50]
    */

    a = nilaiRandom(-10, 10);
    b = nilaiRandom(-10, 10);
    d = nilaiRandom(-10, 10);
    e = nilaiRandom(-10, 10);
    c = nilaiRandom(5, 50);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();