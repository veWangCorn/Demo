const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const cw = canvas.width
const ch = canvas.height
const girlPic = document.getElementById('girl')
const starPic = document.getElementById('star')
const girlWidth = 600
const girlHeight = 300
const padLeft = 100;
const padTop = 100;
const num = 30
var deltaTime
var lastTime
var stars = []

var alive = 0
var switchy = false
function init(){
    ctx.fillStyle = '#393550';
    ctx.fillRect(0, 0, cw, ch)

    canvas.addEventListener('mousemove',mousemove)
    for(var i=0;i<num;i++){
        stars[i] = new Star()
        stars[i].init()
    }
    lastTime = new Date()
    gameLoop()
}
function drawImage(img, x, y, w, h){
    ctx.drawImage(img,x,y,w,h)
}
function gameLoop(){
    window.requestAnimFrame(gameLoop)
    const now = new Date()
    deltaTime = now - lastTime
    lastTime = now

    drawImage(girlPic, 100, 100, 600, 300)
    drawStar()
    aliveUpdate()
}
function mousemove(e){
    const { offsetX, offsetY } = e
    if(offsetX < (girlWidth+padLeft) && offsetX >padLeft && offsetY <(girlHeight+padTop) && offsetY > padTop){
        switchy = true
    } else {
        switchy = false
    }
}