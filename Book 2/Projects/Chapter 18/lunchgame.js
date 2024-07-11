// declare globals
var money = 20;
var lunches = 0;

//display lunch budget
document.getElementById("money").innerHTML = money;

//listen for order
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/*
buys specified number of sandwiches per day at current prices
*/
function buyLunches() {
    /*
    todo: 
     * reset the form */
     resetForm();
     var day = 0;
    
     /* start a loop*/
    while (money > 0) { 
    
    
     /* get daily sandwich order*/
        var priceToday = getSandwichPrice();
        var numberOfSandwiches = document.getElementById("numSandwiches").value;
        
        
     /* calculate total price*/
        var totalPrice = numberOfSandwiches * priceToday;
        
        
     /* figure out if there's enough money*/
        if (money >= totalPrice) {
            money = money - totalPrice;
            day++;
            
     /* if so: subtract money, increment number of lunches, and start loop over*/
            lunches ++;
            document.getElementById("receipt").innerHTML += "<p>On day " + day + ", sandwiches are: $" + priceToday + ".  You have $" + money.toFixed(2) + " left.</P>";
            
            
      /* if not: display 'out of money' message*/
        } else { 
            document.getElementById("receipt").innerHTML += "<p>On day " + day + ", sandwiches are: $" + priceToday + ".  You don't have enough money.</P>";
          money = 0;
        }
    }
    
     /* display total lunches after loop exits
    */
    document.getElementById("receipt").innerHTML += "<p>You were able to buy " + lunches + "this week.</p>";
}

/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
    var sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
    return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
    money = 20;
    lunches = 0;
    document.getElementById("receipt").innerHTML = "";

}