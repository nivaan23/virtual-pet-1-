//Create variables here
var dog, happyDog, database, foodS, foodStock, doggy, canvas
function preload()
{
  //load images here
  dog=loadImage("dogImg.png")
  happyDog=loadImage("dogImg1.png")
}

function setup() {
  canvas=createCanvas(500, 500);
  database = firebase.database();
  doggy.addImage(dog)
  foodStock=database.ref('Food')
  foodStock.on("value", readStock)
  
}


function draw() {  
background(46,139,87)
if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
}
  drawSprites();
  //add styles here

}

function writeStock(){
  if (x<=0){
x=0
  }else{
    x=x-1
  }
  
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

