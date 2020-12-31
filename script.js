// screen and player instance setup
let player;
let screenW = 1200;
let screenH = 800;
let enemies = [];


// creates canvas and player instance
function setup() {
	createCanvas(screenW, screenH);
	player = new Player(playerX, playerY, playerSize);

    for (var i = 0; i < 50; i++) {
        enemies[i] = new Enemy(random(-1000, 1000), random(-1000, 1000), enemySize);
    }
};

// renders the current frame
function draw() {
	background(0);
	player.move();
	player.draw();
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].draw();
    }
};

function mouseClicked() {
	enemies.push(new Enemy(mouseX, mouseY, enemySize));
}