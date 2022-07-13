
// tiap mode mengubah variabel global
let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;

// handle mathjax overflow dan display mode
const _s = '<span class="m-d">\\[';
const _t = '\\]</span>';
const _b = '<span class="m-d">\\begin{align*}';
const _e = '\\end{align*}</span>';


const formInput = document.querySelector('.subject');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');

const acakSoal = document.querySelector('#acak-soal');
acakSoal.addEventListener('click', () => soalRandom(), false);

const buatSoal = document.querySelector('#buat-soal');
buatSoal.addEventListener('click', latihan, false);

const output1 = document.querySelector("#output1");
const output2 = document.querySelector("#output2");
const lihatSolusi = document.querySelector('#look');
lihatSolusi.addEventListener('click', bukaSolusi, false);

const btns = document.querySelectorAll('.btn-mode');
btns[0].addEventListener('click', openInput, false);
btns[1].addEventListener('click', openRandom, false);
btns[2].addEventListener('click', openLatihan, false);

btns.forEach(i => i.addEventListener('click', function() {
    const current = document.querySelector('.mode-active');
    current.className = current.className.replace(' mode-active', '');
    this.className += ' mode-active';
}))

const solveButton = document.querySelector("#solve");
solveButton.addEventListener("click", () => solve(), false); 


//  fokus ke next input
let inputAll = document.querySelectorAll('input');
for (let i = 0; i < inputAll.length; i++){
    inputAll[i].addEventListener('keydown', e => {
        if(e.keyCode === 13) {
            if (i < inputAll.length -1) 
                inputAll[i + 1].focus();
            else {
                solveButton.focus();
                solve();
            }
        }
    }, false);
}


// membuka kembali ipput field pada mode 'solve' setelah user dari mode 'generate' atau 'latihan'
function openInput() {
    formInput.style.display = 'block';
    acakSoal.style.display = 'none';
    buatSoal.style.display = 'none';
    solve();
}

// mode random
function openRandom() {
    formInput.style.display = 'none';
    acakSoal.style.display = 'initial';
    buatSoal.style.display = 'none';
    lihatSolusi.style.display = 'none';
    output1.innerHTML = 'Tekan tombol untuk menampilkan soal dan solusi acak.';
    output2.innerHTML = '';
}

// mode latihan
function openLatihan() {
    formInput.style.display = 'none';
    acakSoal.style.display = 'none';
    buatSoal.style.display = 'initial';
    lihatSolusi.style.display = 'none';
    output1.innerHTML = 'Tekan tombol untuk membuat soal.';
    output2.innerHTML = '';
}

// menampilkan soal latihan
function latihan() {
    try {
        soalRandom();
    }
    finally {
        lihatSolusi.style.display = 'inline';
        output2.style.display = 'none';
    }
}

// membuka solusi saat user menekan tombol 'lihat solusi' untuk mode 'latihan'
function bukaSolusi() {
    output2.style.display = 'block';
    this.style.display = 'none'
}

// mencari nilai random A dengan x <= A <= y untuk mode 'generate' soal
function nilaiRandom(x, y) {
    return Math.floor(Math.random() * (y - x + 1) + x);
}

// mengambil nilai absolute
function absolute(...arr) {
    return [...arr].map(i => Math.abs(i));
}

// gcd 2 atau lebih bilangan bulat non negatif
function gcd(...n){
    const _gcd = (x, y) => (!y ? x : _gcd(y, x % y));
    return [...n].reduce((a, b) => _gcd(a, b));
}

// lcm 2 atau lebih bilangan bulat non negatif
function lcm(...n){
    const gcd = (x, y) => !y ? x : gcd(y, x % y);
    const _lcm = (x, y) => x * y / gcd(x, y);
    return [...n].reduce((a, b) => _lcm(a, b));
}

// pecahan paling sederhana
function simplestFraction(a, b) {
    if (a === 0 || b === 1) return '' + a;

    let g = gcd(Math.abs(a), Math.abs(b));
    if (g == 1) return `\\frac{${a}}{${b}}`;

    [a, b] = [a / g, b / g];
    if (b == 1) return '' + a;
    
    return `\\frac{${a}}{${b}}`;
}

// pecahan paling sederhana di ujung operasi
function simplestFractionEnd(a, b) {
    if (a === 0 || b === 1) return '=' + a;

    let g = gcd(Math.abs(a), Math.abs(b));
    if (g == 1) return '';

    [a, b] = [a / g, b / g];
    if (b == 1) return '=' + a;
    
    return `=\\frac{${a}}{${b}}`;
}

// membuat format 2.3 -> 02.03
function formatJam(j) {
    return j.toString().length === 1 ? '0' + j : '' + j;
}

// default positif. Misal polinomial
function defPos(x) {
    return x < 0 ? String(x) : '+' + String(x);
}

// default negatif. Misal pers lingkaran (x-a)^2 + (y-b)^2 = r^2
function defNeg(x) {
    return x < 0 ? '+' + String(-x) : '-' + String(x);
}

// ex: mengubah -4 => (-4)
function kurungNeg(x) {
    return x < 0 ? `(${x})` : '' + x;
}

// periksa apakah menghasilkan bilangan bulat jika diakarkan
function cekBilKuadrat(x) {
    return Math.sqrt(x) === Math.floor(Math.sqrt(x));
}

function cekPrima(n) {
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i === 0) return false;
    return n >= 2;
}

// return semua faktor prima, 8 => [2, 2, 2]
function faktorPrima(n) {
    let faktor = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            faktor.push(i);
            n /= i;
        }
    }

    if (n !== 1) faktor.push(n);
    return faktor;
}

// return algortima euclid dalam bentuk latex serta gcdnya
function euclidGcd(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let str = '';
    
    while (true) {
        let rem = max % min;
        let quot = Math.floor(max / min);
        
        if (rem === 0) {
            str += `${max} &= ${quot} \\times \\textbf{${min}} + ${rem}`;
            break;
        }
        
        str += `${max} &= ${quot} \\times ${min} + ${rem}\\\\`;
        max = min;
        min = rem;
    }

    let txt = `${_b}${str}${_e}`;
    return [txt, min];
}

function ujiBarisanAritmetika(a) {
    if (a.length === 1) return true;
    const beda = a[1] - a[0];
    for (let i = 2; i < a.length; i++) {
        if (a[i] - a[i - 1] !== beda) return false;
    }
    return true;
}

// memeriksa apakah anggota array tidak ada yang sama
function ujiUnik(arr) {
    return arr.length === [...new Set(arr)].length;
}

function dotProduct(v1, v2) {
    return v1.reduce((acc, curr, index) => acc + (curr * v2[index]), 0);
}

// property modulo, khususnya untuk bilangan negatif
Number.prototype.mod = function(n) {
    return ((this % n) + n) % n; 
}

// Menyatakan gcd(a,b) sebagai sa + tb
function extEuclid(a, b) {
    if (a < b) [a, b] = [b, a];
    
    let [old_r, r] = [a, b];
    let [old_s, s] = [1, 0];
    let [old_t, t] = [0, 1];

    let str = '';
    let tempA = '';
    let tempB = '';
    let count = 1;
    
    while (true) {
        let rem = old_r % r;
        let q = Math.floor(old_r / r);
        
        [old_s, s] = [s, old_s - q * s];
        [old_t, t] = [t, old_t - q * t];

        if (rem === 0) {
            str += `${old_r} &= ${q} \\times \\textbf{${r}} + ${rem}`;
            break;
        }
        
        str += `${old_r} &= ${q} \\times ${r} + ${rem} &\\to ${rem} &= ${old_r} - ${q} \\times ${r} \\\\`;

        if (count === 2)
            str += `& & &= ${old_r} - ${q} \\times [${tempB}] \\\\`
        else if (count > 2)
            str += `& & &= [${tempA}] - ${q} \\times [${tempB}] \\\\`            

        str += `& & &= (${s})${a} + (${t})${b} \\\\`
        
        tempA = `(${old_s})${a} + (${old_t})${b}`;
        tempB = `(${s})${a} + (${t})${b}`;

        [old_r, r] = [r, old_r - q * r];
        count++;
    }

    let txt = `${_b}${str}${_e}`;
    return [txt, r, old_s, old_t];
}

// Mengekstrak suku polinom dari string ke array
function splitPolynom(s) {
    return s.replace(/\s+/g, '').match(/[+-]?[^-+]+/g);
}

// Menaruh koefisien polinom ke array dengan posisi sesuai pangkatnya untuk dioperasikan
function getPolynom(p){
    let pArr = [];

    for (let i = 0; i < p.length; i++) {
        let a = p[i].split('^');
        let koef = parseInt(a[0]);

        if (isNaN(koef) && a[0].includes('-')) koef = -1; // Jika koefisien -1
        else if (isNaN(koef)) koef = 1; // Jika koefisien 1

        let power = parseInt(a[1]);
        //console.log(`koef: ${koef}. power: ${power}. term: ${p[i]}. split koef, pangkat: ${a}`)

        if (a.length == 1 && a[0].includes('x')) pArr[1] = koef; // Untuk pangkat 1
        else if (a.length == 1) pArr[0] = koef; // Untuk a_0
        else pArr[power] = koef; // untuk pangkat > 1
    }
    for (let i = 0; i < pArr.length; i++) {
        if (pArr[i] == undefined || pArr[i] == null) pArr[i] = 0
    }
    return pArr;
}

// Memeriksa apakah koefisien polinom berada dalam ring Zn
function cekPolynomModn(p, n) {
    return p.every(i => i ? i === i.mod(n) : true);
}

function inversModn(a, n) {
    if (gcd(a, n) !== 1) return '';

    a = a.mod(n);    
    let [old_r, r] = [n, a];
    let [old_t, t] = [0, 1];

    while (r !== 0) {
        let q = Math.floor(old_r / r);

        [old_r, r] = [r, old_r - q * r];
        [old_t, t] = [t, old_t - q * t];
    }
    return old_t.mod(n);
}

// Mennyusun polinom dari array koefisiennya
function makePoly(f) {
    let degf = 0;
    for (let i = f.length - 1; i >= 0; i--) {
        if (f[i] > 0) {
            degf = i;
            break;
        }
    }

    g = f.map((i, index) => {
        if (index === 0) return i;
        if (index === 1) return i+'x';
        return i+'x^'+index;
    });

    for (let i = 0; i < f.length; i ++) {
        if (i < degf) g[i] = f[i] >= 0 ? '+'+g[i] : g[i];
        if (f[i] === 0) g[i] = '';
    }
    return g.reverse();
}

// derajat polinom
function degPolinom(p) {
    let deg = 0;
    for (let i = p.length - 1; i >= 0; i--) {
        if (p[i] !== 0) {
            deg = i;
            break;
        }
    }
    return deg;
}

// pembagian f/g di Zn[x] mengembalikan long division, q(x), r(x)
function longDivModn(f, g, n) {
    let str = '';
    let degf = degPolinom(f); // derajat f(x)
    let degg = degPolinom(g); // derajat g(x)
    let column = f.length - 1;
    let ampNum = Array(column).fill('&').join(' ');

    let quot = []; // array koefisien q(x) hasil bagi
    let temp = []; // memuat perkalian g(x) dengan multiplier x^{degf - degg}
    let step = 1;

    while (degg <= degf) {
        let leadg = g[degg];
        let multiplier = (f[degf] * inversModn(leadg, n)).mod(n);
        let degMul = degf - degg;
        quot[degMul] = multiplier;

        for (let i = 0; i <= degg; i++) {
            temp[i + degMul] = (multiplier*g[i]).mod(n);
        }
       
        for (let i = 0; i < f.length; i++) {
            if (temp[i] == undefined || temp[i] == null) temp[i] = 0
        }

        str += `${makePoly(f).join('&')} \\\\
            ${makePoly(temp).join('&')}  \\\\ ${ampNum} -\\\\`;

        for (let i = 0; i < temp.length; i++) {
            f[i] = (f[i] - temp[i]).mod(n);
        }

        degf = degPolinom(f);
        step++;
        temp = [];

        // kasus g|f
        let sum = f.reduce((acc, curr) => acc + curr);
        if (sum === 0) break;
    }

    let colNum = Array(column).fill('r').join('');
    let rowNum = Array(3*(step -1) + 1).fill('\\\\').join('');

    str = `\\begin{array}{rr}
        \\begin{array}{r}
            ${makePoly(g).join('')} \\quad)${rowNum}
        \\end{array}&
        \\begin{array}{${colNum}} ${str}
            ${makePoly(f).join('&')}
        \\end{array}&
        \\begin{array}{r}
            \\quad = \\mathbf{${makePoly(quot).join('')}} ${rowNum}
        \\end{array}
        \\end{array}`;

    return [str, quot, f];
}

// algoritma euclid untuk polinomial ring Zp
function euclidPolinom(f, g, p) {
    let strEuclid = '';
    let str = '';
    let i = 1;

    while (true) {
        let t = makePoly(f).join('');
        let [long, hasil, sisa] = longDivModn(f, g, p);
        let qx = makePoly(hasil).join('');
        let rx = makePoly(sisa).join('') || 0;

        str += `<b>Step (${i})</b>${_s} ${long} ${_t}
            diperoleh
            ${_b} q(x) &= ${qx}\\\\
            r(x) &= ${rx} ${_e}
            Sehingga
            ${_s} ${t} = (${qx})(${makePoly(g).join('')}) + (${rx}) ${_t}<hr>`;
        
        strEuclid += `${t} &= (${qx})(${makePoly(g).join('')}) + (${rx})\\\\`;

        [f, g] = [g, sisa];
        i++;

        if (rx === 0) break;
    }

    let leadf = f[degPolinom(f)];
    let gcd = makePoly(f).join('');
    let gcdtxt = '';

    if (leadf === 1) {
        gcdtxt = `${_s} d(x) = ${gcd} ${_t}`
    }
    else {
        let invers = inversModn(leadf, p);
        let newf = f.map(i => (i * invers).mod(p));

        gcdtxt = `${_b} d(x) &= ${leadf}^{-1}(${gcd})\\\\
            &= ${invers}(${gcd})\\\\
            &= ${makePoly(newf).join('')} ${_e}`;
    }

    strEuclid = `${_b} ${strEuclid} ${_e}
        didapat sisa tak nol terakhir adalah $${gcd}$.
        Sehingga gcdnya adalah ${gcdtxt}`;

    return [strEuclid, str];
}