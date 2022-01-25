var sprites = []

function setup() {
  createCanvas(400,400);
s1=createSprite(75,200,30,30);
s2=createSprite(150,150,30,30);
s3=createSprite(300,80,30,30);
s4=createSprite(350,90,30,30);

var sprites=[s1,s2,s3,s4];

for(var i=0; i<sprites.length; i++){
  console.log(sprites[i].position.x);
}



}

function draw() 
{
  background(30);
  drawSprites();
}

 

