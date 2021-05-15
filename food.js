class Food{
    constructor(){
        foodStock = this.foodStock;
        this.image = loadImage("images/Milk.png");
    }
    display(){
        var x = 40 , y = 150; 
        if(this.
            foodStock !== 0){
            for(var i=0; i<foodStock; i++){
                if(i%10===0){
                    x=40;
                    y=y+50;
                }
                imageMode(CENTER);
                image(this.image, x, y, 50,50);
                x=x+30;
            }
        }
    }
    getFoodStock(){
        var foodStockRef = database.ref('Food');
        foodStockRef.on("value", function(data){
                foodStock = data.val();
        })
    }
    updateFoodStock(foodStock){
        database.ref('/').update({
            'Food' : foodStock
        })
    }
    deductFoodStock(){

    }
}