
function soal() {
    const soal = `Ubah kode Hex berikut ke RGB: $${c}$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    const getRgb = (x, y) => 16*parseInt(x, 16) + parseInt(y, 16);

    if (c.length === 3) {
        c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
    }

    r = getRgb(c[0], c[1]);
    g = getRgb(c[2], c[3]);
    b = getRgb(c[4], c[5]);

    const solusi = `${_b}r &= ${c[0]}${c[1]}_{16} = ${r}_{10}\\\\
        g &= ${c[2]}${c[3]}_{16} = ${g}_{10}\\\\
        b &= ${c[4]}${c[5]}_{16} = ${b}_{10}${_e}
        <div class="color-box" style="background:rgb(${r}, ${g}, ${b})"></div>
        ${_s}\\text{RGB: } (${r}, ${g}, ${b}) ${_t}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    c = input1.value.toUpperCase();
    a = c.split('').map(i => parseInt(i, 16));

    const cond1 = a.length === 3 || a.length === 6;
    const cond2 = a.every(i => !isNaN(i));

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
            i, j, k di [0, 255]
    */

    i = nilaiRandom(0, 255);
    j = nilaiRandom(0, 255);
    k = nilaiRandom(0, 255);

    [r, g, b] = [i, j, k].map(x => {
        let z = x.toString(16).toUpperCase();
        return z.length === 1 ? '0' + z : z;
    });

    c = [r, g, b].join('');

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();