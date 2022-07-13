
function soal() {
    const soal = `Tentukan invers dari $${a}$ di grup $U(${n})$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let [str, g, s, t] = extEuclid(n, a);
    let txt = '';

    if (t > 0)
        txt = `${_s}(${t})${a}\\equiv 1 \\pmod{${n}}${_t}`
    else
        txt = `${_s}(${t})${a}\\equiv (${t.mod(n)})${a}\\equiv 1 \\pmod{${n}}${_t}`

    const solusi = `Dengan menggunakan extended euclidean algorithm ${str}
        diperoleh
        ${_s}${g} = (${s})${n} + (${t})${a}${_t}
        Sehingga
        ${txt}
        Jadi invers $${a}$ di $U(${n})$ adalah $${t.mod(n)}$.`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 2;
    const cond2 = arr.every(i => !(isNaN(i) || i < 1)); // cek bilangan bulat positif
    [a, n] = arr;
    const cond3 = a < n;
    const cond4 = gcd(n, a) === 1;

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
            n di [7, 50]
            a di U(n)
    */

    n = nilaiRandom(7, 50);

    let elems = [];
    for (let i = 1; i < n; i++) {
        if (gcd(i, n) === 1) {
            elems.push(i);
        }
    }

    let temp = nilaiRandom(1, elems.length-1);
    a = elems[temp];
 
    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();