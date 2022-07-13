
function soal() {
    const soal = `Cari lcm dari${_s}(${a})${_t}`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let l = lcm(...a);
    let lcmNow = a[0];
    let step = '';

    for (let i = 1; i < a.length; i++) {
        let hasil = euclidGcd(lcmNow, a[i]);

        step += `<br>(${i})${hasil[0]}
            Diperoleh $\\gcd(${lcmNow}, ${a[i]})= ${hasil[1]}$
            Maka ${_s}\\text{lcm}(${lcmNow}, ${a[i]})
            = \\frac{${lcmNow} \\times ${a[i]}}{${hasil[1]}} = ${lcmNow * a[i] / hasil[1]}${_t}`;

        lcmNow = lcmNow * a[i] / hasil[1];
    }
    
    const solusi = `${_b}\\text{lcm}(${a}) = ${l}${_e}
        <b>Steps:</b>${step}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    a = input1.value.split(',').map(i => parseInt(i));
    const cond1 = a.length > 1;
    const cond2 = a.every(i => !(isNaN(i) || i < 1)); // cek bilangan bulat positif

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
            a.length di [2,4]
            x di [3,30]
    */

    let len = nilaiRandom(2, 4);
    a = []
    
    for (let i = 1; i <= len; i++) {
        let rand = nilaiRandom(3, 30);

        while (a.includes(rand)) {
            rand = nilaiRandom(3, 30);
        } 

        a.push(rand);
    }
 
    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();