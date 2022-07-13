
const areaInput = document.getElementById('input1');
const board = document.getElementById('board');
const button = document.querySelector('#solve');
button.addEventListener('click', clickHandler, false); 
const canvas = document.getElementById('canvas1');
const c = canvas.getContext('2d');

let size = 240;
canvas.style.width = size + "px";
canvas.style.height = size + "px";

scale = 4;
canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);
c.scale(scale, scale);

const color = ['#f5166361', '#f86f1561', '#33512061', '#ff606061',
                  '#9373ff61', '#e8000061', '#c850b061', '#0d5f8a61', '#00a5a561' ];
let txt = '';
let point = {};
let stack = [];

class Cube {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.xp = Math.floor(size / 3);
        this.yp = Math.floor(2 * this.xp / 3);
        this.initCube();
        this.getPoint();
        this.showPoint();
    }
    
    initCube(){
        c.strokeStyle = 'black';
        c.strokeRect(this.x, this.y, this.size, this.size);             
        
        c.beginPath();
        c.moveTo(this.x + this.xp, this.y - this.yp);
        c.lineTo(this.x + this.size + this.xp, this.y - this.yp);
        c.stroke();
        
        c.beginPath();
        c.moveTo(this.x + this.size + this.xp, this.y - this.yp);
        c.lineTo(this.x + this.size + this.xp, this.y + this.size - this.yp);
        c.stroke();

        c.beginPath();
        c.moveTo(this.x + this.size, this.y + this.size);
        c.lineTo(this.x + this.size + this.xp, this.y + this.size - this.yp);
        c.stroke();
    
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x + this.xp, this.y - this.yp);
        c.stroke();

        c.beginPath();
        c.moveTo(this.x + this.size, this.y);
        c.lineTo(this.x + this.size + this.xp, this.y - this.yp);
        c.stroke();

        c.beginPath();
        c.setLineDash([3, 3]);
        c.moveTo(this.x + this.xp, this.y - this.yp);
        c.lineTo(this.x + this.xp, this.y + this.size - this.yp);
        c.stroke();
        
        c.beginPath();
        c.moveTo(this.x + this.xp, this.y + this.size - this.yp);
        c.lineTo(this.x + this.size + this.xp, this.y + this.size - this.yp);
        c.stroke();

        c.beginPath();
        c.moveTo(this.x, this.y + this.size);
        c.lineTo(this.x + this.xp, this.y + this.size - this.yp);
        c.stroke();

        c.setLineDash([]);
    }
    
    getPoint() {
        point.A = [this.x, this.y + this.size];
        point.B = [this.x + this.size, this.y + this.size];
        point.C = [this.x + this.size + this.xp, this.y + this.size - this.yp];     
        point.D = [this.x + this.xp, this.y + this.size - this.yp];
        point.E = [this.x, this.y];
        point.F = [this.x + this.size, this.y];
        point.G = [this.x + this.size + this.xp, this.y - this.yp];
        point.H = [this.x + this.xp, this.y - this.yp];
    }
  
    showPoint() {
        c.font = 'bold 16px Arial';
        c.textAlign = 'center';
        c.fillStyle = '#fb475e';
        
        let count = 0;
        for (var k of Object.keys(point)) {
            if (count < 4){
                c.textBaseline = 'top';
                c.fillText(k, point[k][0], point[k][1] + 10);
            }
            else {
                c.textBaseline = 'bottom';
                c.fillText(k, point[k][0], point[k][1] - 10);
            } 
            count++;
        }
    }
  
    drawArea(stack) {
        c.clearRect(0, 0, canvas.width, canvas.height);
        let i = 0;
    
        stack.forEach(e => {
            c.strokeStyle = e[2] ? '#ffffff00' : '#ff8800';
            c.lineWidth = 2;
           
            c.beginPath();
            c.setLineDash([6, 6]);
            c.moveTo(e[0][0], e[0][1]);
            c.lineTo(e[1][0], e[1][1]);
            
            if (e[2]) {
                c.lineTo(e[2][0], e[2][1]);
                
                if (e[3])
                    c.lineTo(e[3][0], e[3][1]);
              
                c.fillStyle = color[i];
                c.fill();
                i++;
            }
            c.stroke();
        });
        c.lineWidth = 1;
        c.setLineDash([]);
    
        this.initCube();
        this.showPoint();
    }    
}

let cube = new Cube(20,63,150);
let num = 0;

function clickHandler() {
    if (!areaInput.value) return;
    const co = areaInput.value.toUpperCase().split('');
    let cond = co.every(i => 'ABCDEFGH'.includes(i));
    if (!cond) return;
    
    if (co.length === 2) {
        stack.push([point[co[0]], point[co[1]]]);
        txt = '<span style="color: #ff8800; font-weight:bold">---</span> '+areaInput.value.toUpperCase()+'<br>'+txt;
    }
    else if (co.length === 3 || co.length === 4) {
        stack.push([point[co[0]], point[co[1]], point[co[2]], point[co[3]]]);
        txt = '<span style="background:'+color[num]+';color:transparent">---</span> '+areaInput.value.toUpperCase()+'<br>'+txt;
        num++;
    }
  
    cube.drawArea(stack);
    board.innerHTML = txt;
    areaInput.value = '';
}

function erase() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    num = 0;
    stack = [];
    txt = '';
    areaInput.value = '';
    board.innerHTML = 'Input Anda akan ditampilkan di sini.';
    cube.initCube();
    cube.showPoint();
}