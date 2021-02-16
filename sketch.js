var fixed , moving


function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(100,100,80,30);

  fixed.shapeColor = "red";
  moving.shapeColor = "red";

}

function draw() {
  background(255,255,255); 
  
  moving.x = World.mouseX ;
  moving.y = World.mouseY ;
  

   if ( fixed.x - moving.x <= fixed.width/2 + moving.width/2 && 
     moving.x - fixed.x <= fixed.width/2 + moving.width/2 && 
     fixed.y - moving.y <= fixed.height/2 + moving.height/2 && 
     moving.y - fixed.y <= fixed.height/2 + moving.height/2){
    fixed.shapeColor = "blue";
    moving.shapeColor = "blue";
   }

   else {
     fixed.shapeColor = "red";
     moving.shapeColor = "red";
   }
  
  drawSprites();
}