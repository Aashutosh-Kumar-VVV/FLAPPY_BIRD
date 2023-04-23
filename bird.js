const birdImage = new Image()
birdImage.src = 'bird.png'
class Bird {
    constructor() {
        this.x = 150,
        this.y = 200,
        this.vy = 0,
        this.originalWidth = 941,
        this.originalHeight = 680,
        this.width = this.originalWidth/20,
        this.height = this.originalHeight/20,
        this.weight = 1,
        this.frameX = 0
    }
    update() {
        let curve = Math.sin(angle) * 20;
        if (this.y > canvas.height - this.height*2 + curve) {
            this.y = canvas.height - this.height*2 + curve
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy
        }
        if (this.y < 0) {
            this.y = 0
            this.vy = 0
        }
        if (spacePressed) this.flap();
    }
    draw() {
        ctx.fillStyle = 'red'
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(birdImage,this.frameX*this.originalWidth,0,this.originalWidth,this.originalHeight,this.x-20,this.y-12,this.width*1.7,this.height*1.7)
    }
    flap() {
        this.vy -= 3;
        if(this.frameX >= 2) this.frameX = 0
        else if(frame%2===0) this.frameX++;
    }
}
const bird = new Bird()