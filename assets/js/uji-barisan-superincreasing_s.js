
function soal() {
    const soal = `Tentukan apakah barisan berikut superincreasing${_s}${a}${_t}`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let sum = a[0];
    let supInc = true;
    let all = [];

    for (let i = 1; i < a.length; i++) {
        all.push(`$${ a[0] }`);
        
        for (let j = 1; j < i; j++) {
            all.push(`+${ a[j] }`);
        }
        
        if (sum >= a[i]) {
            supInc = false;
            all.push(`= ${sum} \\geq ${ a[i] } $<br>`);
            break;
        }

        all.push(`= ${sum} < ${ a[i] } $<br>`);
        sum += a[i];
    }

    let boolStr = 'Bukan barisan superincreasing.';
    if (supInc) boolStr = 'Barisan tersebut superincreasing.';

    const solusi = `<span class="m-d">${all.join('')}</span> ${boolStr}`;

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
            banyak suku di [3, 5]
            suku-i di [suku-{i-1}, 3 * suku-{i-1}]
    */

    let len = nilaiRandom(3, 5);
    a = [];

    let suku = 5; // nilai max saat ini
    
    for (let i = 1; i <= len; i++) {
        suku = nilaiRandom(suku, 3*suku);
        a.push(suku);
    }

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();