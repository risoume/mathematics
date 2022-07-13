
function soal() {
    let str = a.reduce((arr, i) => [...arr, `\\frac{${i[0]}}{${i[1]}}`], []).join(', ');

    const soal = `Tentukan hasil penjumlahan dari pecahan berikut${_s}${str}${_t}`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let den = a.reduce((arr, i) => [...arr, i[1]], []); // ambil semua penyebut
    let denNow = lcm(...den); // samakan penyebut

    let numNow = a.reduce((arr, i) => [...arr, i[0] * denNow / i[1]], []); // sesuaikan pembilang
    let sumNum = numNow.reduce((sum, current) => sum + current); // jumlahkan semua pembilang

    // menampilkan penjumlahan pecahan setelah disamakan penyebut
    // tanda pecahan mengikuti
    let sumArr = numNow.reduce((arr, i) => {
        const sign = i < 0 ? '-' : '+'; // tanda pecahan
        const numAbs = Math.abs(i);     // pembilang jadi positif
        return [...arr, sign, `\\frac{${numAbs}}{${denNow}}`];
    }, []);
    
    sumArr[0] = numNow[0] < 0 ? '-' : ''; // jika pecahan pertama positif tidak perlu tanda +
    let sumStr = sumArr.join('');

    let sol = `\\frac{${sumNum}}{${denNow}}`
    let solFinal = simplestFractionEnd(sumNum, denNow);

    const solusi = `${_s} ${sumStr} ${_t}
        ${_s}=${sol} ${solFinal} ${_t}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    a = input1.value.split(',').map(i => i.split('/').map(j => parseInt(j)));
    const cond1 = a.length > 1; // minimal 2 pecahan
    const cond2 = a.every(i => i.every(j => !(isNaN(j) || j == 0))); // bilangan bulat selain nol
    const cond3 = a.every(i => i[1] > 0); // penyebut positif

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
            banyak pecahan di [2, 3]
            untuk p/q:
            p di [-10, 10] selain 0
            q di [2, 11]
    */

    let len = nilaiRandom(2, 3);
    let listDen = [];
    a = [];
    
    for (let i = 1; i <= len; i++) {
        let p = nilaiRandom(-10, 10);
        if (p === 0) p++;

        let q = nilaiRandom(2, 11);
        while (gcd(Math.abs(p), q) !== 1 || listDen.includes(q)) { // worst case listDen = [5, 7], p = 6
            q = nilaiRandom(2, 11);
        }

        listDen.push(q);
        a.push([p, q]);
    }
 
    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();