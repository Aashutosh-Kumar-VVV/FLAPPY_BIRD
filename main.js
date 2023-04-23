/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 1;
let score = 0;
let gameSpeed = 2;
// let temp = canvas.height - 90;

window.addEventListener('keydown',function(e){
    if(e.code === 'Space'){
        spacePressed = true;
        // temp -= 20
    } 
})
window.addEventListener('keyup',function(e){
    if(e.code === 'Space') spacePressed = false
    bird.frameX = 0;
})

const bang = new Image()
bang.src = 'bang.png'
function handleCollisions(){
    for (let i = 0; i < obstacleArray.length; i++) {
        if(bird.x < obstacleArray[i].x + obstacleArray[i].width && bird.x + bird.width > obstacleArray[i].x && ((bird.y < 0 + obstacleArray[i].top && bird.y + bird.height>0) || (bird.y > canvas.height - obstacleArray[i].bottom && bird.y + bird.height < canvas.height))){
            ctx.drawImage(bang,bird.x,bird.y,50,50)
            ctx.font = "25px Georgia";
            ctx.fillStyle = 'black'
            ctx.fillText(`Game Over, Your Score is ${score}`,160,canvas.height/2);
            return true
        }
    }
}
const background = new Image()
background.src = 'BG.png'
const BG = {
    x1:0,
    x2:canvas.width,
    y:0,
    width: canvas.width,
    height: canvas.height
}

function handleBackground(){
    if(BG.x1 <= 0) BG.x1 = 0;
    else BG.x1 -= gameSpeed;
    // if(BG.x1 <= -BG.width+gameSpeed) BG.x1 = BG.width;
    // else BG.x1 -= gameSpeed;
    // if(BG.x2 <= -BG.width+gameSpeed) BG.x2 = BG.width;
    // else BG.x2 -= gameSpeed;
    ctx.drawImage(background,BG.x1,BG.y,BG.width,BG.height)
    // ctx.drawImage(background,BG.x2,BG.y,BG.width,BG.height)
}
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    handleBackground()
    bird.update()
    bird.draw()
    ctx.fillStyle = 'green'
    ctx.font = '90px Georgia'
    ctx.strokeText(score,450,70)
    ctx.fillText(score,450,70)
    handleParticles()
    handleObstacles()
    handleCollisions()
    if(handleCollisions()) return;
    angle += 0.12;
    hue ++;
    frame++;
    // if(frame % 1000 ===0 ){
    //     gameSpeed +=9;
    // }
    requestAnimationFrame(animate)
}
animate()