
/*Write a code to print the numbers in the array*/
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 1; i < 11; i--) {
 new_string += numsArr[i] 
}
console.log(new_string);



var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 1; i < 11; i++) {
 new_string += numsArr[i] + 
}
console.log(new_string);


/*code to replace the array value — If the number is even, odd replace it with ‘even’.*/




var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = odd
 }
}
console.log(numsArr);


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = even
 }
}
console.log(numsArr);

/*Write a code to add all the numbers in the array*/




var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 var sum;
 sum += numsArr[i]
}
console.log(sum);

/*add elements in the inner arrays based on odd or even values*/


var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr[i]%2!=0)
 {
 sum_odd += numsArr[i]
 }
 else
 {
 sum_even += numsArr[i]
 }
}
}
console.log(sum_odd);
console.log(sum_even);


/*print elements in the inner arrays in reverse*/




var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length; j < 0 ;j-- )
     str_all +=inner_array[j]
}
console.log(str_all);

/*print elements in the inner arrays*/


var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
     str_all +=inner_array[j]
}
console.log(str_all);

/*rotate an array by k times and return rotated array using IIFE function*/

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function() {
 arr = {};
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})();

 /*code to remove duplicates.*/
 var res = function(arr){
    for(var i=0; i < arr.length; i++){
    newArr = [];
    if(newArr.indexOf(arr[i]) == -1) {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
   }
   res([guvi,geek,guvi,duplicate,geeK])



var array =[[[firstname,vasanth],[lastname,Raje],[age,24],[role,JSWizard]],[[firstname,Sri],[lastname,Devi],[age,28],[role, Coder]]];
var final=[]
while(array.length!=0)
{
 var outer_remove = array.shift();
 
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value
 }
 final.push(new_object)
}

/*Sum of odd numbers in an array*/

var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
 return a+c;
 }
 return a;});
console.log(s);