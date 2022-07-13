
function soal() {
    const soal = `Tentukan dot product dari
        ${_b} \\mathbf{u} &= (${a})\\\\
        \\mathbf{v} &= (${b})${_e}`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let strDot = a.reduce((arr, curr, index) => {
        return [...arr, `${ kurungNeg(curr) } \\cdot ${ kurungNeg(b[index]) }`];
    }, []);

    let strDotNext = String(a[0] * b[0]);
    for (let i = 1; i < a.length; i++){
        strDotNext += defPos(a[i] * b[i]);
    }

    let result = dotProduct(a,b);

    const solusi = `${_b}\\mathbf{u} \\cdot \\mathbf{v} &= ${ strDot.join('+') }\\\\
        &= ${ strDotNext }\\\\
        &= ${ result }${_e}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    a = input1.value.split(',').map(i => parseInt(i));
    b = input2.value.split(',').map(i => parseInt(i));
    
    const cond1 = a.length === b.length;   // dimensi harus sama
    const cond2 = a.every(i => !isNaN(i)); // cek bilangan bulat
    const cond3 = b.every(i => !isNaN(i)); // cek bilangan bulat

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
            dimensi di [2, 4]
            e di [-10, 10]
    */

    let dim = nilaiRandom(2, 4);
    a = [];
    b = [];
   
    for (let i = 1; i <= dim; i++) {
        a.push(nilaiRandom(-10, 10));
        b.push(nilaiRandom(-10, 10));
    }

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();