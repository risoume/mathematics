
function soal() {
    const soal = `Cari gcd dari${_s}(${a})${_t}`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let str = '';
    const pangkatTerkecil = {};

    // mulai dengan faktor-faktor bilangan pertama pada array a
    let faktorBilAwal = faktorPrima(a[0]);
    faktorBilAwal.forEach(e => !(e in pangkatTerkecil) ? pangkatTerkecil[e] = [1,0] : pangkatTerkecil[e][0]++);

    for (let i = 0; i < a.length; i++) {
        let faktor = faktorPrima(a[i]);

        const pangkat = {};
        faktor.forEach(e => !(e in pangkat) ? pangkat[e] = 1 : pangkat[e]++);

        // cari pangkat bersama terkecil
        for (let i in pangkat) {
            if (i in pangkatTerkecil) {
                pangkatTerkecil[i][1]++;
                if (pangkat[i] < pangkatTerkecil[i][0])
                    pangkatTerkecil[i][0] = pangkat[i];
            }
        }

        let pair = [];
        for (let i in pangkat) {
            pair.push(`${i}^${pangkat[i]}`);
        }

        str += `<br>${a[i]} &= ${pair.join('\\times ')}\\\\`;
    }

    let pair2 = [];
    for (let i in pangkatTerkecil) {
        if (pangkatTerkecil[i][1] === a.length) // memeriksa apakah ini merupakan pangkat bersama
            pair2.push(`${i}^${pangkatTerkecil[i][0]}`);
    }

    // perhatikan juga kasus gcd = 1, terjadi jika pair2 kosong
    let strGcd = (pair2.length === 0) ? '' : `${pair2.join('\\times ')}=`;

    const solusi = `Faktorisasi:${_b}${str}${_e}<br>
        Fpb diperoleh dengan mengalikan faktor-faktor bersama dengan pangkat terkecil di antara setiap bilangan, yakni:
        ${_s}${strGcd} ${gcd(...a)}${_t}`;

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