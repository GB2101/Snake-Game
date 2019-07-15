const scl = 20;
const w = 1200, h = 600;
var snake;
var food;

function setup() {
    createCanvas(w, h);
    frameRate(10);
    snake = new Snake(scl, w, h)
    food = new Food(scl, w, h);
}
console.log(snake);

function mousePressed(){
    snake.size++;
    snake.body.push({x: snake.x, y: snake.y});
}

function keyPressed(){
    if (keyCode === UP_ARROW && snake.sy == 0){
        snake.press(0, -1);
    }else if (keyCode === RIGHT_ARROW && snake.sx == 0){
        snake.press(1, 0);
    }else if (keyCode === LEFT_ARROW && snake.sx == 0){
        snake.press(-1, 0);
    }else if (keyCode === DOWN_ARROW && snake.sy == 0){
        snake.press(0, 1);
    }
}

function draw() {
    background(0);
    snake.move();
    snake.death();
    snake.eat(food);
    snake.show();
    food.show();
    var t = "Snake size: " + snake.size;
    fill(255, 100);
    noStroke();
    textSize(24);
    text(t, 30, 30);
}

