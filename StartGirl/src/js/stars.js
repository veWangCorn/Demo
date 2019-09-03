class Star{
    constructor(){
        this.x
        this.y
        this.starIndex
        this.timer,
        this.xSpd
        this.ySpd,
        this.beta
    }
    init(){
        //star位置
        this.x = Math.random()*girlWidth + padLeft
        this.y = Math.random()*girlHeight + padTop
        //动画方向
        this.xSpd = Math.random() * 0.2 - 0.1
        this.ySpd = Math.random() * 0.6 - 0.3;
        //轮播帧
        this.starIndex = Math.floor(Math.random()*7)
        //闪烁间隔
        this.timer = 0
        //绘画间隔
        this.beta = Math.random() * Math.PI * 0.5
    }
    update(){
        this.xSpd = Math.random() * 0.2 - 0.1
        this.x += this.xSpd
        this.y += this.ySpd

        //超出区域重置
        if(this.x > (padLeft+girlWidth -10) || this.x < (padLeft+10)){
            this.init()
        }else if(this.y > (padTop + girlHeight -10) || this.y < (padTop + 10)){
            this.init()
        }

        //超出时间重播
        this.timer += deltaTime
        if(this.timer>30){
            this.starIndex += 1
            this.starIndex %= 7
            this.timer = 0
        }
        
    }
    draw(){
        this.beta += deltaTime * 0.005
        //局部透明度
        ctx.save()
        ctx.globalAlpha = Math.sin(this.beta)*alive
        //画星星
        //ctx.drawImage(img,sx,sy,sw,sh,x,y,w,h)
        //sx,sy:剪切帧初始的坐标
        //sw,sh:剪切图像宽高
        //x,y:图像在画布上的位置
        //w,h:使用的图像宽高（可伸缩）
        ctx.drawImage(starPic, this.starIndex * 7, 0, 7, 7, this.x, this.y, 7, 7)
        ctx.restore()
    }
}

function drawStar(){
    for(var i = 0; i<num; i++){
        stars[i].update()
        stars[i].draw()
    }
}
function aliveUpdate(){
    if(switchy){
        alive += 0.03
        if(alive>0.7){
            alive = 0.7
        }
    } else {
        alive -= 0.03
        if(alive<0){
            alive = 0
        }
    }
}