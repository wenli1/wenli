var arr = [1,1,1,2,2,3,4,4,5,5,5];
function uniq(array){
    var temp = []; 
    for(var i = 0; i < array.length; i++){
    if(temp.indexOf(array[i]) == -1){
    temp.push(array[i]);
    }
    }
    return temp;
    }
 
    console.log(uniq(arr));