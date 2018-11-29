var shopper = {
    name : "Suzy",
    money : 250,
    isUsingCreditCard : true,
    groceryCart : ["milk", "cereal", "eggs"],
    addToCart : function(food) {
        shopper.groceryCart.push(food);
    },
    buySomething : function(price, item) {
        
        if (isNaN(price)) {                                           //Check if price is a number
            return console.log("That's not a number")
        }
        else if (price === null || price === undefined) {           //Check if price is null or undefined
           return console.log("That's not a number")
        }
        else if (price > shopper.money) {                          //Check if price is too much to afford
            return console.log("Sorry you don't have enough for that")
        }
        else {                                                    //Otherwise subtract price from money and add it
        shopper.money -= price;                                   //to the grocery cart
        shopper.addToCart(item);
        return console.log("Thank you for your business")
        }

    }
}


// Test Cases ----------------------

// Should subtract price from money and add bread to the cart
shopper.buySomething(25, "bread");

console.log(shopper.money);
console.log(shopper.groceryCart);

// Should console log that you don't have enough money

shopper.buySomething(500, "soup");
console.log(shopper.money);
console.log (shopper.groceryCart);

// Should console log that this is not a number

shopper.buySomething("apple", "bacon");
console.log(shopper.money);
console.log(shopper.gerceryCart);

// I did not check to see if the second value passed to the buysomething function was a string, through I know that I should
// for good use cases

