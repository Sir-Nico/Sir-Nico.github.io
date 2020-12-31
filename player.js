var scrollX = 0;
var scrollY = 0;

// Player Setup
let playerSize = 25;
let playerX = screenW / 2;
let playerY = screenH / 2;
var topSpeed = 10;

// Player Class
class Player {

	// Player Constructor Function
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.xSpeed = 0;
		this.ySpeed = 0;
	}

	draw() {
		// Renders the Player
		noStroke();
		fill(255);
		ellipse(this.x, this.y, this.size);
	}

	move() {

		// detects if either WASD or the arrow keys are pressed, and accelerates the player accordingly
		if(keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
			this.xSpeed -= 0.5;
		}
		if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
			this.xSpeed += 0.5;
		}
		if(keyIsDown(UP_ARROW) || keyIsDown(87)) {
			this.ySpeed -= 0.5;
		}
		if(keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
			this.ySpeed += 0.5;
		}

		// Drifting	
		if(this.xSpeed > 0) {
			this.xSpeed -= 0.125;
		}
		if(this.xSpeed < 0) {
			this.xSpeed += 0.125;
		}
		if(this.ySpeed < 0) {
			this.ySpeed += 0.125;
		}
		if(this.ySpeed > 0) {
			this.ySpeed -= 0.125;
		}

		// Limits player speed
		if(this.xSpeed >= topSpeed) {
			this.xSpeed = topSpeed;
		}
		if(this.ySpeed >= topSpeed) {
			this.ySpeed = topSpeed;
		}
		if(this.xSpeed <= topSpeed * -1) {
			this.xSpeed = topSpeed * -1;
		}
		if(this.ySpeed <= topSpeed * -1) {
			this.ySpeed = topSpeed * -1;
		}

		// Changes scrolling x and y positions by the current speed
		scrollX += this.xSpeed;
		scrollY += this.ySpeed;

 		// Detects if the player is touching an edge, and prohibits the player from moving further
/*         if (this.x + scrollX < 500) {
            this.x -= xSpeed;
			this.xSpeed = 0;
			this.ySpeed = 0;
        }
		if (this.x > width - this.size / 2) {
            this.x = width - this.size / 2;
			this.xSpeed = 0;
			this.ySpeed = 0;
        }
		if (this.y < 0 + this.size / 2) {
            this.y = 0 + this.size / 2;
			this.xSpeed = 0;
			this.ySpeed = 0;
        }
		if (this.y > height - this.size / 2) {
            this.y = height - this.size / 2;
			this.xSpeed = 0;
			this.ySpeed = 0;
        } */
	}
}
