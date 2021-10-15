let canvas = document.getElementById('gameCanvas')

let ctx = canvas.getContext('2d');
ctx.fillStyle = '#f00';
let x = 10;
let y = 10;
ctx.fillRect(x,y,10,10);

document.addEventListener('keydown', event => {
  if(event.keyCode === 68) {
    x = x + 10;
    ctx.clearRect(0,0,800,600);
    ctx.fillRect(x,y,10,10);
    }
    if(event.keyCode === 65) {
    x = x - 10;
    ctx.clearRect(0,0,800,600);
    ctx.fillRect(x,y,10,10);
    }
    if(event.keyCode === 87) {
    y = y - 10;
    ctx.clearRect(0,0,800,600);
    ctx.fillRect(x,y,10,10);
    }
    if(event.keyCode === 83) {
    y = y + 10;
    ctx.clearRect(0,0,800,600);
    ctx.fillRect(x,y,10,10);
    }
  console.log(event.keyCode);
});
