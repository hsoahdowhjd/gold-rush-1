var bg
var coinimg
var coin
var score = 0
var level = 1

function preload()
{
 bg = loadImage("bg.jpeg")
 coinimg = loadImage("coin.png")
}

function setup() {
  createCanvas(1000,700);
  coin = createSprite(100,100,40,40)
  coin.addImage(coinimg)
  coin.scale= 0.2
}

function draw() 
{
  background(bg);
  textSize(25)
  text("score = " + score, 40 , 40)
  
if(mousePressedOver(coin)){
    score = score + 1
    console.log(score)
    coin.remove()
    coin = null
    addCoins()
}

  drawSprites();
}

function addCoins(){
    coin = createSprite(random(100, 900),random(100, 600),40,40)
    coin.addImage(coinimg)
    coin.scale= 0.2   
}
