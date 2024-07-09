//document.getElementById("paragraph 1").innerHTML ="I am making my first dynamic Webpage using <i>";
let item1;
let item2;
let item3;
let item4;
let item5;

document.getElementById("changeList").onclick = newList;

function newList(){
    item1 = prompt("Enter a new first thing: ");
    item2 = prompt("Enter a new second thing: ");
    item3 = prompt("Enter a new third thing: ");
    item4 = prompt("Enter a new fourth thing: ");
    item5 = prompt("Enter a new fivth thing: ");
    updateList();
    }

function updateList(){
    document.getElementById("uno").innerHTML = item1;
    document.getElementById("dos").innerHTML = item2;
    document.getElementById("tres").innerHTML = item3;
    document.getElementById("cuatro").innerHTML = item4;
    document.getElementById("cinco").innerHTML = item5;
}