
function soal() {
    const soal = `Cari gcd dari${_s}(${a})${_t}`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let g = gcd(...a);
    let gcdNow = a[0];
    let step = '';

    for (let i = 1; i < a.length; i++) {
        if (gcdNow === 1) break;

        let hasil = euclidGcd(gcdNow, a[i]);
        step += `<br>(${i})${hasil[0]} Diperoleh $\\gcd(${gcdNow}, ${a[i]})= ${hasil[1]}$`;
        gcdNow = gcd(gcdNow, a[i]);
    }
    
    const solusi = `${_b}\\gcd(${a}) = ${g}${_e}
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
            a.length di [2, 4]
            x di [3, 200]
    */

    let len = nilaiRandom(2, 4);
    a = []
    
    for (let i = 1; i <= len; i++) {
        let rand = nilaiRandom(3, 200);

        while (a.includes(rand)) {
            rand = nilaiRandom(3, 200);
        } 

        a.push(rand);
    }
 
    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();