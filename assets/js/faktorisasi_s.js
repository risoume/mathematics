
function soal() {
    const soal = `Tentukan faktorisasi prima dan pohon faktor dari ${a}.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let arr = faktorPrima(a);
    let str = '';
    let pohon = '';

    if (arr.length === 1) {
        str = `${a} adalah bilangan prima`;
    }

    else {
        const pangkat = {};
        arr.forEach(e => !(e in pangkat) ? pangkat[e] = 1 : pangkat[e]++);

        let pair = [];
        for (let i in pangkat) {
            pair.push(`${i}^${pangkat[i]}`);
        }

        str = `$${pair.join('\\times ')}$`;
    
        pohon = `Pohon faktor:${_b}${a}\\\\`;
        for (let i = 0; i < arr.length - 2; i++) {
            a /= arr[i];
            pohon += `\\downarrow\\\\ ${a} &\\times \\textbf{${arr[i]}} \\\\`;
        }
        pohon += `\\downarrow\\\\ \\textbf{${a/arr[arr.length-1]}} &\\times \\textbf{${arr[arr.length-1]}}${_e}`;
    }

    const solusi = `Faktorisasi: ${str}<br>${pohon}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    a = parseInt(input1.value);
    const cond1 = !isNaN(a);
    const cond2 = a > 1;

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
            a di [12, 300]
    */

    a = nilaiRandom(12, 300);
 
    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();