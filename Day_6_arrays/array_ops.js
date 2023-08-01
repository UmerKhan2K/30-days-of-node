arr = ['a','e','j','i','o'];
console.log(arr);
arr.push(1);// can have more that 1 type in array
console.log(arr);	

arr.pop();
console.log(arr);	


arr.unshift(1);//push at beginning
console.log(arr);

arr.shift();//pop from start
console.log(arr);

arr.reverse();
console.log(arr);	

arr.sort();
console.log(arr);

arr.splice(2,3,'rj','nodejs');//replace at position (1st for the starting index, 2nd for how many elements to remove) (3rd and 4th with what to replace with, if left empty nothing will be inserted in place of removed elements)
console.log(arr);

arr2 = ['mango','peach','apple'];
var new_arr = arr.concat(arr2);
console.log(new_arr);

var pos1 = arr.indexOf('rj');
console.log("index of rj is : " + pos1);

arr1 = [ 5 , 2 , 8 , 5 , 6 ];//for repeating elements
var pos = arr1.lastIndexOf(5);
console.log("index of 5 is : " + pos);	

arrn = [ 5 , 2 , 8 , 5 , 6 ];
arrm = ['a','b','c','d'];
console.log(arrn);
console.log(arrm);
var str = arrn.join();//convert to string
var str1 = arrm.join(":");
console.log(str);
console.log(str1);

var strn = arrn.slice(2,4);
var strm = arrm.slice(-2,-1);
console.log(strn);
console.log(strm);

arr = [2,4,6,8,10];
arr1 = [2,3,4,6,8];//works like loop
function even(value){
    if( (value % 2) == 0){
        return true;
    }else{
        return false;
    }
}

var out = arr.every(even);//every
var out1 = arr1.every(even);
console.log("Output of array 1 : " + out);
console.log("Output of array 2 :" + out1);	

out = arr.filter(even);//filter
out1 = arr1.filter(even);
console.log("Output of array 1 : " + out);
console.log("Output of array 2 :" + out1);	


arr = [2,4,6,8,10];
arr1 = [2,3,4,7,8];
function odd(value){//find
    if( (value % 2) == 1){
        return true;
    }else{
        return false;
    }
}

out = arr.find(odd);
out1 = arr1.find(odd);
console.log("Output of array 1 : " + out);
console.log("Output of array 2 :" + out1);	

//foreach
arr = ['1', '2', '3','5','8'];

arr.forEach(function(element) {//loop
    console.log(element);
});	

//reducer: whole array to 1 value
arr = [ 5 , 5 , 8 , 7 , 6 ];
console.log(arr);
function mul(value ,total){
    total = value * total;
    return total;
}
var output = arr.reduce(mul);
console.log("The product of the array is : " + output);