class Food {
    constructor(scl, w, h) {
        this.w = w / scl;
        this.h = h / scl;
        this.s = scl;

        this.x = floor(random(0, this.w)) * this.s;
        this.y = floor(random(0, this.h)) * this.s;
    }

    eaten(body) {
        this.x = floor(random(0, this.w)) * this.s;
        this.y = floor(random(0, this.h)) * this.s;
        if (this.x == body.x && this.y == body.y){
            eaten(body);
        }
    }

    show() {
        strokeWeight(1);
        stroke(0);
        fill(0, 0, 255);
        rect(this.x, this.y, this.s, this.s);
    }
}