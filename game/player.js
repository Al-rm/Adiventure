var keyDown = {};

class Player {
    constructor(x, y) {
        this.position = {x: x, y: y};
        this.dirX = 0;
        this.dirY = 0;
        this.size = 50;
        this.color = (100,11,111);
        this.border = {
            weigth: 5,
            radius: 5,
            shadow: 1
        };
        this.speed = this.border.radius *.432;
        this.strength = this.size * .1
        this.attack = this.border.radius * .1;
        this.items = {};
        this.weapon = {
            type: "none",
            range: 0,
            atk_delay: 1,
            dmg: 0
        };

    }
    update() {
        this.position.x += this.dirX * this.speed;
        this.position.y += this.dirY * this.speed;
    }
    inputListener(event) {
        if (keyDown[event.key]) {
            return
        }
        if (keys.mov.includes(key)) {
            keyDown[event.key] = true;
            if (key == 'a') {
                this.dirX = -1;
            }
            if (key === 'd') {
                this.dirX = 1;
            }
            if (key === 'w') {
                this.dirY = -1;
            }
            if (key === 's'){
                this.dirY = 1;
            }
        } 
        if (key == ' ') {
            
        }
        if (key == 'q') {
            
        }
        if (key == 'e') {
            
        }
    }
    keyReleased(event) {
        // console.log(event.key)
        if (keys.mov.includes(key)) {
            if (key == 'a' || key == 'd') {
                this.dirX = 0;
            }
            if (key == 'w' || key == 's') {
                    this.dirY = 0;
            }
            delete keyDown[event.key]
        }
    }

    show() {
        push()
        rectMode(CENTER)
        fill(this.color)
        stroke(200)
        strokeWeight(this.border.weigth)
        rect(this.position.x, this.position.y, this.size, this.size, this.border.radius)

        pop()
    }
}