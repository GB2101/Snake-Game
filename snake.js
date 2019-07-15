class Snake {
    constructor(scl, w, h) {
        this.x = w/2;
        this.y = h/2;

        this.w = w;
        this.h = h;
        
        this.s = scl;
        this.a = 1;

        this.sx = 0;
        this.sy = 0;

        this.size = 1;
        this.body = [{x: this.x, y: this.y}];
    }

    press(x, y){
        this.sx = x;
        this.sy = y;
    }

    move() {
        this.x += this.sx * this.s;
        this.y += this.sy * this.s;

        this.x = constrain(this.x, -this.s, this.w);
        this.y = constrain(this.y, -this.s, this.h);
    
        this.body.push({x: this.x, y: this.y});
        if (this.a == 1){
            this.body.shift();
        }
        this.a = 1;
    }

    show() {
        strokeWeight(1);
        stroke(0);
        this.body.map((p, i) => {
            if (i < this.size - 1){
                fill(255);
                rect(p.x, p.y, this.s, this.s);
            }else {
                fill(255, 0, 0);
                rect(p.x, p.y, this.s, this.s);
            }
        });
        
    }

    eat(food) {
        var d = dist(this.x, this.y, food.x, food.y);
        if (d < 1){
            food.eaten(this.body);
            this.size++;
            this.a = 0;
        }
    }

    death() {
        if (this.x < 0 || this.x == this.w || this.y < 0 || this.y == this.h){
            this.reset();
        }
        for (let i = 0; i < this.size - 1; i++){
            var bd = this.body[i];
            var d = dist(this.x, this.y, bd.x, bd.y);
            if (d < 1){
                this.reset();
                i = this.size;
            }
        }
    }

    reset() {
        this.x = this.w/2;
        this.y = this.h/2;

        this.sx = 0;
        this.sy = 0;

        this.size = 1;
        this.body = [{x: this.x, y: this.y}];
    }
}