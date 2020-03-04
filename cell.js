class Cell {

    constructor(size, alive, pos) {
        this.size = size;
        this.alive = alive;
        this.pos = pos;
    }

    draw() {
        ctx.fillStyle = this.alive ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)";
        ctx.fillRect(this.size * this.pos.i, this.size * this.pos.j, this.size, this.size);
        ctx.strokeRect(this.size * this.pos.i, this.size * this.pos.j, this.size, this.size);
    }

    changeState() {
        this.alive = !this.alive;
    }

}