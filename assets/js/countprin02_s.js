
function soal() {
    const soal = `Berapa banyak bilangan $${a}$ digit dengan digit-digit berbeda dan tidak nol?`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    const digit = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    const arr = Array(a).fill(1);

    const bilangan = arr.map((_, i) => digit[i]).join('');
    const pasangan = arr.map((_, i) => digit[i]).join(', ');
    const perkalian = arr.map((_, i) => 9 - i).join('\\times ');
    const hasil = arr.reduce((acc, _, i) => acc * (9 - i), 1);

    const solusi = `Bilangan $${a}-$digit $${bilangan}$ dapat dinyatakan sebagai pasangan terurut $(${pasangan})$.
        Ada $9$ pilihan angka untuk $a$, yaitu $1, 2, \\ldots, 9$. Karena tiap digit harus berbeda, maka ada $8$
        pilihan angka untuk $b$, dan seterusnya. Dari aturan perkalian, diperoleh solusinya adalah
        $${perkalian}$ $=${hasil}$`;

    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b> ${solusi}`;
}

function solve() {
    a = parseInt(input1.value);
    const cond1 = !isNaN(a);
    const cond2 = a >= 2 && a <= 9;

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
            a di [2, 9]
    */

    a = nilaiRandom(2, 9);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();