
function soal() {
    const soal = `Tentukan cross product dari
        ${_b} \\mathbf{u} &= (${a})\\\\
        \\mathbf{v} &= (${b})${_e}`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    const _w = '\\begin{vmatrix}';
    const _z = '\\end{vmatrix}';

    let comp_i = a[1] * b[2] - a[2] * b[1];
    let comp_j = defNeg(a[0] * b[2] - a[2] * b[0]);
    let comp_k = defPos(a[0] * b[1] - a[1] * b[0]);

    const solusi = `${_b}\\mathbf{u} \\times \\mathbf{v}
        &= ${_w} \\textbf{i} & \\textbf{j} & \\textbf{k}\\\\
        ${ a[0] } & ${ a[1] } & ${ a[2] }\\\\
        ${ b[0] } & ${ b[1] } & ${ b[2] } ${_z}\\\\
        &= ${_w} ${ a[1] } & ${ a[2] }\\\\ ${ b[1] } & ${ b[2] } ${_z} \\;\\textbf{i}
        - ${_w} ${ a[0] } & ${ a[2] }\\\\ ${ b[0] } & ${ b[2] } ${_z} \\;\\textbf{j}
        + ${_w} ${ a[0] } & ${ a[1] }\\\\ ${ b[0] } & ${ b[1] } ${_z} \\;\\textbf{k}\\\\
        &= ${comp_i}\\:\\textbf{i} ${comp_j}\\;\\textbf{j} ${comp_k}\\;\\textbf{k} ${_e}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    a = input1.value.split(',').map(i => parseInt(i));
    b = input2.value.split(',').map(i => parseInt(i));
    
    const cond1 = a.length === 3;   // berdimensi 3
    const cond2 = b.length === 3;   // berdimensi 3
    const cond3 = a.every(i => !isNaN(i)); // cek bilangan bulat
    const cond4 = b.every(i => !isNaN(i)); // cek bilangan bulat

    if (!cond1 || !cond2 || !cond3 || !cond4) {
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
            e di [-6, 6]
    */

    a = [];
    b = [];
   
    for (let i = 1; i <= 3; i++) {
        a.push(nilaiRandom(-6, 6));
        b.push(nilaiRandom(-6, 6));
    }

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();