
var array = [0,1,3,5,8,13,21];

function iterativeSearch(array, target){
    var stepCounter = 1;
    for(var i = 0; i < array.length; i++){
        if (array[i] != target) {
            stepCounter++;
        } else if (array[i] === target ){
            console.log(target + " is at index " + i);
            console.log(stepCounter + " steps");
        } else if ( array.indexOf(target) === -1 ){
            console.log("Value not found");
        }
    }        
}
