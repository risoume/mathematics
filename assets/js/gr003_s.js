
function soal() {
    const soal = `Nyatakan vektor $\\mathbf{u}=[${a}]$ sebagai perkalian konstanta dengan
        vektor satuan yang berarah sama dengan $u$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let [x, y, z] = a;
    let subs = x*x + y*y + z*z;

    let final = cekBilKuadrat(subs) ? '=' + Math.sqrt(subs) : '';
    let d = cekBilKuadrat(subs) ? Math.sqrt(subs) : `\\sqrt{${ subs }}`;

    const solusi = `Panjang vektor $\\textbf{u}$ adalah
        ${_b}|\\textbf{u}| &= \\sqrt{(${x})^2 + (${y})^2 + (${z})^2}\\\\
        &= \\sqrt{${subs}} ${final} ${_e}
        Sehingga vector $\\textbf{u}$ dapat dinyatakan sebagai
        ${_b}\\textbf{u} &= |\\textbf{u}|\\frac{\\textbf{u}}{|\\textbf{u}|}\\\\
        &= ${d} \\left[\\frac{${x}}{${d}}, \\frac{${y}}{${d}},\\frac{${z}}{${d}}\\right]${_e}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    a = input1.value.split(',').map(i => parseInt(i));
    const cond1 = a.length === 3;
    const cond2 = a.every(i => !isNaN(i)); // cek bilangan bulat
    const cond3 = a[0] != 0 || a[1] != 0 || a[2] != 0 // bukan vektor nol

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
            komponen di [-6, 6]
    */

    a = [];
    
    for (let i = 1; i <= 3; i++) {
        a.push(nilaiRandom(-6, 6));
    }

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();