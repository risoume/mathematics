
function soal() {
    const soal = `Cari lcm dari${_s}(${a})${_t}`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let str = '';
    const pangkatTerbesar = {};

    for (let i = 0; i < a.length; i++) {
        let faktor = faktorPrima(a[i]);

        const pangkat = {};
        faktor.forEach(e => !(e in pangkat) ? pangkat[e] = 1 : pangkat[e]++);

        // mencari pangkat terbesar
        for (let i in pangkat) {
            if (i in pangkatTerbesar && pangkat[i] <= pangkatTerbesar[i])
                continue;
            pangkatTerbesar[i] = pangkat[i];
        }

        let pair = [];
        for (let i in pangkat) {
            pair.push(`${i}^${pangkat[i]}`);
        }

        str += `<br>${a[i]} &= ${pair.join('\\times ')}\\\\`;
    }

    let pair2 = [];
    for (let i in pangkatTerbesar) {
        pair2.push(`${i}^${pangkatTerbesar[i]}`);
    }

    let strLcm = `${pair2.join('\\times ')}`;

    const solusi = `Faktorisasi:${_b}${str}${_e}<br>
        Kpk diperoleh dengan mengalikan faktor-faktor dengan pangkat terbesar di antara setiap bilangan, yakni:
        ${_s}${strLcm} = ${lcm(...a)}${_t}`;

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