
function soal() {
    const soal = `Suatu barisan aritmetika punya rumus $u_n=${p}n ${ defPos(q) }$. Tentukan suku ke$-${r}$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let qSign = defPos(q);
    let all = [];
    let allStr = [];

    for (let i = 1; i <= r; i++) {
        let sukuKeI = p * i + q;
        let str = `u_{${i}} &= ${p}(${i}) ${qSign} = ${sukuKeI}`;
        all.push(sukuKeI);
        allStr.push(str);
    }

    let hasil = allStr.join('\\\\');

    const solusi = `$${r}$ suku pertama:
        ${_s} ${all} ${_t}
        Langkah:
        ${_b}u_n &= ${p}n ${qSign}\\\\
        ${hasil}${_e}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 3;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [p, q, r] = arr;
    const cond3 = r > 0;

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
            p di [-5, 8] bukan nol
            q di [-10, 15] bukan nol
            r di [2, 5]
    */

    do {
        p = nilaiRandom(-5, 8);
        q = nilaiRandom(-10, 15);
    } while (p * q === 0);

    r = nilaiRandom(2, 5);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();