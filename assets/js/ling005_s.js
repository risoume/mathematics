
function soal() {
    const soal = `Tentukan pusat dan jari-jari lingkaran $x^2 + y^2 ${defPos(a)}x ${defPos(b)}y ${defPos(c)} = 0$.`;

    output1.innerHTML = `<b>Soal:</b> ${soal}`;
}

function solusi() {
    let cSign = defNeg(c);

    // pembilang dan penyebut dalam tanda akar
    let radiusNum = a*a + b*b - 4*c;
    let radiusDen = 4;
    let strRadius = simplestFraction(radiusNum, radiusDen);

    // pusat lingkaran
    let strA = (a % 2 === 0) ? '' + (Math.abs(a) / 2) : `\\frac{${Math.abs(a)}}{2}`;
    let strB = (b % 2 === 0) ? '' + (Math.abs(b) / 2) : `\\frac{${Math.abs(b)}}{2}`;

    let strASign = (a < 0) ? '' : '-';
    let strBSign = (b < 0) ? '' : '-';

    // Jika radius yang didapat berupa bilangan bulat
    let radiusInteger = '';
    if (Math.floor(Math.sqrt(radiusNum / radiusDen)) === Math.sqrt(radiusNum / radiusDen)) {
        radiusInteger = '=' + Math.sqrt(radiusNum / radiusDen);
    }

    const solusi = `Titik pusat:
        ${_b}P &= (-\\frac{A}{2}, -\\frac{B}{2})\\\\
        &= (${strASign} ${strA}, ${strBSign} ${strB}) ${_e}
        Jari-jari:
        ${_b}r &= \\sqrt{\\frac{A^2}{4} + \\frac{B^2}{4} - C}\\\\
        &= \\sqrt{\\frac{(${a})^2}{4} + \\frac{(${b})^2}{4} ${cSign}}\\\\
        &= \\sqrt{${strRadius}} ${radiusInteger} ${_e}`     
  
    output2.style.display = 'block';
    output2.innerHTML = `<b>Solusi:</b><br> ${solusi}`;
}

function solve() {
    let arr = input1.value.split(',').map(i => parseInt(i));
    const cond1 = arr.length === 3;
    const cond2 = arr.every(i => !isNaN(i)); // cek bilangan bulat
    
    [a, b, c] = arr;
    const cond3 = a*a + b*b - 4*c > 0;

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
            a, b, c di [-10, 10]
    */

    do {
        a = nilaiRandom(-10, 10);
        b = nilaiRandom(-10, 10);
        c = nilaiRandom(-10, 10);
    } while (a*a + b*b - 4*c <= 0);

    soal();
    solusi();
    lihatSolusi.style.display = 'none';
    MathJax.typeset();
}

solve();