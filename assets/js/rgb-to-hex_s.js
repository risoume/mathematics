
function soal() {
    const soal = `Ubah kode RGB berikut ke Hex: $(${i}, ${j}, ${k})$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    [r, g, b] = [i, j, k].map(x => {
        let z = x.toString(16).toUpperCase();
        return z.length === 1 ? '0' + z : z;
    });

    const solusi = `${_b}r &= ${i}_{10} = ${r}_{16}\\\\
        g &= ${j}_{10} = ${g}_{16}\\\\
        b &= ${k}_{10} = ${b}_{16}${_e}
        <div class="color-box" style="background:#${r}${g}${b}"></div>
        ${_s}\\text{Hex: }${r}${g}${b}${_t}`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    a = input1.value.split(',').map(i => parseInt(i));
    const cond1 = a.length === 3;
    const cond2 = a.every(i => !isNaN(i));
    const cond3 = a.every(i => i >= 0 && i <=255);

    [i, j, k] = a;

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
            i, j, k di [0, 255]
    */

    i = nilaiRandom(0, 255);
    j = nilaiRandom(0, 255);
    k = nilaiRandom(0, 255);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();