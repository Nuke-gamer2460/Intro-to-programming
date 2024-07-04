//#1
function multiply(){
    36325 * 9824;
}

function add(multiply){
    + 777;
}

//#2

function areArraysSame(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }


    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}
console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3])); 
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));