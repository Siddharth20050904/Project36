//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var feedButton , addButton;
var foodObj, foodImg;

function preload()
{
	//load images here
  happyDog1 = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg.png");
  foodImg = loadImage("images/Milk.png");
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database();

  dog = createSprite(450,250, 50, 50);
  dog.addImage("dogImage", happyDog);
  dog.scale = 0.2;

 feedButton = createButton("Feed");
  feedButton.mousePressed(feedDog);

  addButton = createButton("Add Food");
  addButton.mousePressed(addFood);

  foodObj = new Food();
  foodObj.getFoodStock();
}

function draw() {  
  background(46, 139, 87);
  foodObj.display();
  drawSprites();
  //add styles here
  textSize(20);

}
function feedDog(){
  dog.addImage(happyDog1);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food : foodObj.getFoodStock()
  })
}
function addFood(){
  foodS++;
  database.ref('/').update({
    Food : foodS
  })
}