let enemySize = 25;

class Enemy {

	constructor(x, y, size) {
		this.x = x + scrollX;
		this.y = y + scrollY;
		this.size = size;
	}
	
	draw() {
		// Renders the Enemy
		noStroke();
		fill(255, 0, 0);
		ellipse(this.x - scrollX, this.y - scrollY, this.size);
	}
}