
function soal() {
    const soal = `Gambarkan tabel Cayley untuk grup $U(${a})$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let elems = [];
    for (let i = 1; i < a; i++) {
        if (gcd(i, a) === 1) {
            elems.push(i);
        }
    }

    let align = 'c|' + Array(a-1).fill('c').join('');
    let row = [];
    row[0] =  `\\bmod ${a} &` + elems.join('&') + '\\\\\\hline';

    for (let i = 0; i < elems.length; i++) {
        row[i+1] = elems[i] + '&';
        for (let j = 0; j < elems.length; j++) {
            row[i+1] += (elems[i]*elems[j]).mod(a) + '&'
        }
        row[i+1] += '\\\\';
    }

    let result = row.join('');

    const solusi = `${_s}\\begin{array}{${align}}
        ${result}
        \\end{array}${_t}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    a = parseInt(input1.value);
    const cond1 = !isNaN(a);
    const cond2 = a > 1 && a < 31;

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
            a di [4, 30]
    */

    a = nilaiRandom(4, 30);
 
    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();