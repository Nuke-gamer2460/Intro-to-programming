// listen for button clicks
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */
function placeOrder() {
    // get form values
    let numPizzas = document.getElementById("numPizzas").value;
    let typePizza = document.getElementById("typePizza").value;
    let deliveryCity = document.getElementById("deliveryCity").value;

    // get the pizza price
    let orderPrice = calculatePrice(numPizzas, typePizza);

    // get the delivery price
    let deliveryPrice = calculateDelivery(orderPrice, deliveryCity);

    // create the output
    let theOutput = "<p>Thank you for your order.</p>";

    // todo: output the delivery price, if there is one
    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
        } else {
        theOutput += "<p>Your delivery cost is: $" + deliveryPrice;
        }

    theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice);

    // display the output
    document.getElementById("displayTotal").innerHTML = theOutput;

    let birthday = document.getElementById("birthday").value;

}

/**
 * calculates pizza price
 */

function calculatePrice(numPizzas, typePizza) {
    let orderPrice = Number(numPizzas) * 10;
    let extraCharge = 0;
    
    // todo: calculate extraCharge, if there is one.
    if (typePizza === "supreme") {
        extraCharge = Number(numPizzas) * 2;
        }
      
    orderPrice += extraCharge;
    return orderPrice;
}

/**
 * calculates delivery price
 */
function calculateDelivery(orderPrice, deliveryCity, birthday) {

    

    if ((deliveryCity === "Anytown") && ((orderPrice > 10)) || (birthday === "yes"))
        {
        deliveryPrice = 0;
        } else {
        deliveryPrice = 5;
        }
    // todo: calculate delivery price, if there is one
    
    return deliveryPrice;
}

