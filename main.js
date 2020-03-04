var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = ctx.canvas.width = window.innerWidth;
var height = ctx.canvas.height = window.innerHeight;

const fps = 2;
const rows = 50, cols = 30;
const cellSize = 20;
const aliveCellsPc = 0.1;

function loop() {
    ctx.clearRect(0, 0, width, height);
    environment.draw();
    environment.nextGeneration();
}

setInterval(loop, 1000/fps);

var environment = new Environment(rows, cols, cellSize, aliveCellsPc);