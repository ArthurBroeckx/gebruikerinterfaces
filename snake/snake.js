var canvas = document.getElementById('playfield');
var HEIGHT = canvas.height;
var WIDTH = canvas.width;
var draw = canvas.getContext('2d');

var x = 10;
var y = 10;
var paused = false;
// every 100 milliseconds we redraw EVERYTHING.
setInterval(redraw, 100);

document.addEventListener('keydown', canvasMove);

//wipes the canvas context
function clear(c) {
    c.clearRect(0, 0, WIDTH, HEIGHT);
}

//clears the canvas and draws the rectangle at the appropriate location
function redraw() {
    clear(draw);
    //draw.fillStyle = 'rgba(0,0,0,0.5)';
    draw.fillRect(x, y, 30, 30);
}

function canvasMove(e) {
    if (!paused) {
        if(e.key === 'ArrowUp') { y -= 1; } // higher y is lower on canvas!!!
        if(e.key === 'ArrowDown') { y += 1; }
        if(e.key === 'ArrowLeft') { x -= 1; }
        if(e.key === "ArrowRight") { x += 1; }
    }
    if(e.key === "p") { paused = !paused; }

}