
const areaInput = document.getElementById('input1');
const pink = document.getElementById('pink-radio');
const blue = document.getElementById('blue-radio');
const orange = document.getElementById('orange-radio');
const board = document.getElementById('board');
const button = document.querySelector('#solve');
button.addEventListener('click', clickHandler, false); 
const canvas = document.getElementById('canvas1');
const c = canvas.getContext('2d');

let size = 240;
canvas.style.width = size + "px";
canvas.style.height = size + "px";

var scale = 4;
canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);
c.scale(scale, scale);

canvas.style.border = '1px solid black'

var r = 60
var s = 10

function drawCircles(n){
    c.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i <= n-1; i++) {
        let x = Math.round(r * Math.cos(2 * i * Math.PI / n))          
        let y = Math.round(r * Math.sin(2 * i *  Math.PI / n))
        let xr = Math.round(s * Math.cos(2 * i * Math.PI / n))          
        let yr = Math.round(s * Math.sin(2 * i *  Math.PI / n))

        if (pink.checked) 
            c.fillStyle = 'rgba(245,22,99,0.3)';
        
        else if (blue.checked) 
            c.fillStyle = 'rgba(61,145,224,0.3)'
        
        else if (orange.checked)
            c.fillStyle = 'rgba(248,111,21,0.3)'
          
        else 
            c.fillStyle = 'rgba(248,111,21,0)'
           
        c.beginPath();
        c.arc(120+x-xr, 120+y-yr, 60, 0, 2 * Math.PI);
        c.stroke();
        c.fill();
    }
}

function clickHandler() {
    if (!areaInput.value) return;
    let num = parseInt(areaInput.value);
  
    if (isNaN(num) || num < 1) {
        board.innerHTML = 'Masukkan hanya bilangan asli.';
        drawCircles(0);
    }
    else {
        drawCircles(num);

        let area = num * num - num + 2;
        board.innerHTML = `Banyak area yang terbentuk dari $${num}$
            lingkaran adalah $${area}$. Ini didapat dari formula $h_n=n^2-n+2$.`;
    }
    MathJax.typeset();
}

clickHandler();