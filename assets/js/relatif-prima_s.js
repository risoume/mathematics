
function soal() {
    const soal = `Tentukan pasangan bilangan yang relatif prima dari${_s}${a}${_t}`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let coprime = [];

    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (gcd(a[i], a[j]) ===  1)
              coprime.push(`$(${a[i]}, ${a[j]})$`);
        }
    }

    let str = '';
    if (coprime.length === 0)
        str = 'tidak ada';
    else
        str += coprime.join(', ');

    const solusi = `Pasangan bilangan yang relatif prima: ${str}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    a = input1.value.split(',').map(i => parseInt(i));
    const cond1 = a.length > 1;
    const cond2 = a.every(i => !(isNaN(i) || i < 1)); // cek bilangan bulat positif
    const cond3 = a.length === [...new Set(a)].length; // cek bilangan berbeda

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
            banyak bilangan di [2, 6]
            x di [3, 50]
    */

    let len = nilaiRandom(2, 6);
    a = []
    let rand = 0;

    for (let i = 1; i <= len; i++) {
        do {
            rand = nilaiRandom(2, 50);
        } while (a.includes(rand))

        a.push(rand);
    }
 
    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();