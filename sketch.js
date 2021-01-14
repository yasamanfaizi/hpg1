var gameState = "start"


function preload(){
  forest = loadImage ("Forbidden_Forest.png")
  hp = loadImage("Harry.png")
  rw = loadImage("ron weasley.png")
  hg = loadImage("hermione.png")
  hogwarts = loadImage("hogwarts-castle-.jpg")
  DM = loadImage("Dementor.png")
  hpp = loadImage("harryspatronus.png")
  rwp = loadImage("rons patronous.png")
  hgp = loadImage("Hermions patronus.png")
}

function setup() {
  createCanvas(800,400);
  trail = createSprite(400,200,2800,400)
  
  player1 = createSprite(200,200)
  player1.addImage(hp)
  player1.scale = 0.5

  player2 = createSprite(400,200)
  player2.addImage(rw)
  player2.scale = 0.7

  player3 = createSprite(600,200)
  player3.addImage(hg)
  player3.scale = 0.45

  prop1 = createSprite(30,270)
  prop1.addImage(hpp)
  prop1.visible = false

  prop2 = createSprite(70,270)
  prop2.addImage(rwp)
  prop2.visible = false
  
  prop3 = createSprite(50,270)
  prop3.addImage(hgp)
  prop3.visible = false
  
  edges = createEdgeSprites()
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  if (gameState === "start"){
  trail.addImage(hogwarts)
  trail.scale = 0.3
  textSize(20)
  fill("white")
  text("Harry Potter",160,370)
  text("Ron Weasley",330,370)
  text("Hermione Granger",520,370)

  textSize(30)
  fill("white")
  text("Pick Your Character",280,40)
  if (mousePressedOver(player1)){
    player = player1
    prop = prop1
    player2.destroy()
    player3.destroy()
    gameState = "play"
    player.setCollider("rectangle",0,0,200,600)
    player.x = 100
    player.y = 300
    player.scale = 0.29
  }
  if (mousePressedOver(player2)){
    player = player2
    player1.destroy()
    player3.destroy()
    prop = prop2
    player.x = 100
    player.y = 300
    player.setCollider("rectangle",0,0,140,400)
    player.scale = 0.5
    gameState = "play"
  }
  if (mousePressedOver(player3)){
    player = player3
    player1.destroy()
    player2.destroy()
    prop = prop3
    player.scale = 0.3
    player.x = 100
    player.y = 300
    player.setCollider("rectangle",0,0,200,600)
    gameState = "play"
  }
  }

  if (gameState === "play"){
    player.collide(edges)
    trail.addImage(forest)
    Dementor()
    trail.scale = 1.7
    trail.velocityX = -8
  if(trail.x<0){
    trail.x = trail.width/4
  }
    player.velocityX = 0
    if (keyDown("left")){
      player.velocityX = -3
    }
    if (keyDown("right")){
      player.velocityX = 3
    }
    if (keyDown("e")&& keyDown("p")){
      prop.visible = true
      prop.x = player.x
      prop.velocityY = -7
    }
  }
}

function Dementor(){
  if (frameCount%80 === 0){
    dm = createSprite(random(100,700),0)
    dm.addImage(DM)
    dm.scale = 0.4
    dm.velocityY = 6
  }
}
