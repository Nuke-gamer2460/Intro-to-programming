var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}

function remove_selection(x){
    console.log(x)

    if(quantities[x] > 0){
        quantities[x] = quantities[x] - 1;
        totals[x] = prices[x] * quantities[x];
        totalOrderAmt[x] -= prices[x];
    } else{
        console.log()
    }

    display_all();
}
 

//document.getElementById("checkoutbutton").onclick = checkout;


function checkout(){
//alert("Your is total order is " + totalOrderAmt);
//document.getElementById("total").style.fontSize = "20px";
document.getElementById("total").innerHTML = "Total: " + "R" + totalOrderAmt;
// let x = document.getElementById("totals").innerHTML;
// document.getElementById("demo").innerHTML = x;
display_all();
}

function display_all() {



    let myTable = "<table><th style='width: 100px; color: blue; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
    }

    myTable += "</table>";
    // myTable += "<br>";
    //myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";
  
    


//document.write(myTable);
    myTable += "<br/><td><button onclick='checkout()' style = 'font-size: 30px;'>Checkout</button></td>"
    //myTable += "<br></br>" + document.getElementById("total");
    //myTable += "<br></br>Total:" + checkout();
    //document.getElementById("total").innerHTML = checkout();
    document.getElementById("demo").innerHTML = myTable;
    document.getElementById("total").style.fontSize = "20px";

}

window.onload = function() {
    display_all();
}



