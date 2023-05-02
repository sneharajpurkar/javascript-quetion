// Q1 check given number is even or odd and display the result

// var userNumber = 89;
// if((userNumber % 2) == 0 ){
//     console.log("Provided number is Even !");
// }else{
//     console.log("Provided number is Odd !");
// }

// var userNumber = 89;
// if((userNumber % 2) == 1 ){
//     console.log("Provided number is Even !");
// }else{
//     console.log("Provided number is Odd !");
// }

// var userNumber = 88;
// if((userNumber % 2) == 0 ){
//     console.log("Provided number is Even !");
// }else{
//     console.log("Provided number is Odd !");
// }

// var userNumber = 88;
// if((userNumber % 2) == 1 ){
//     console.log("Provided number is Even !");
// }else{
//     console.log("Provided number is Odd !");
// }


// // Q2- Check is user applicable for licence or not?

// var userage = 18;
// if(userage > 18){
//     console.log("user is applicable for liecence")
// }else if(userage == 18){
//     console.log("user is applicable for learning liecence")
// }else{
//     console.log("user is not applicable for liecence")
// }

// var userage = 21;
// if(userage > 18){
//     console.log("user is applicable for liecence")
// }else if(userage == 18){
//     console.log("user is applicable for learning liecence")
// }else{
//     console.log("user is not applicable for liecence")
// }

// var userage = 0;
// if(userage > 18){
//     console.log("user is applicable for liecence")
// }else if(userage == 18){
//     console.log("user is applicable for learning liecence")
// }else{
//     console.log("user is not applicable for liecence")
// }


// // Q3- check given number is even or odd and display the result

// var userNumber = 89;
// if((userNumber % 2) == 0 ){
//     console.log("Provided number is Even !");
// }else{
//     console.log("Provided number is Odd !");
// }

// var userNumber = 80;
// if((userNumber % 2) == 0 ){
//     console.log("Provided number is Even !");
// }else{
//     console.log("Provided number is Odd !");
// }


// Q4 Print the numbers from 20-40, which are even.
// for (var i=20; i<=40; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }


// Q5 Print the count from 20-40, which are even.

// var count = 0;
// for (var i=20; i<=40; i++){
//     if(i%2===0){
//         count++;
//     }
// }
// console.log(count)


// Q6 print count of number from 147-254, which are divisible by 3 and odd.

// var count = 0;
// for (var i=147; i<=254; i++){
//     if((i%3 === 0) && (i%2 !== 0)){
//         count++;
//     }
// }
// console.log(count)

// Q7. Find count of number 45 from given Array.
// [12,13,45,67,43,45,76,89,54,23,7,8797,243,23234]

// var count = 0;
// var array = [12,13,45,67,43,45,76,89,54,23,7,8797,243,23234];
// for(var i = 0; i < array.length ; i++){
//     if( array[i] === 45){
//     count++;
// }
// }
// console.log(count);

// Q8. find addition of every second number from  57689 - 346578.

// var firstdigit = 57689
// var secondtdigit = 346578
// var add = 0;
// for(var i = firstdigit + 1; i < secondtdigit; i+=2){
//     add = add + i
// }
// console.log(add, "add here")

// Q9. find numbers which addition is Target 
// nums = [2,7,11,15], target=9

// var nums = [2,7,11,15]
// var target = 9
// for(var i=0; i<nums.length - 1; i++){
//         for(var j= i + 1; j<nums.length; j++){
//        if((nums[i] + nums[j]) === target){
//           console.log(nums[i],nums[j])
//        }
//     }
// }

// Q10. find 3 numbers which addition is Target
// [2,4,6,8,9,10,13,78,12,34,23]
// target = 35

// var nums = [2, 4, 6, 8, 9, 10, 13, 78, 12, 34, 23]
// var target = 35
// for (var i = 0; i < nums.length; i++) {
//     for (var j = 0; j < nums.length; j++) {
//         for (var k = j; k < nums.length; k++){
//             if((nums[i] + nums[j] + nums[k]) === target){
//                 console.log(nums[i],nums[j],nums[k])
//             }
//         }
//     }
// }

// Q11. find given number is present in given array or not, if found returns true else false;

// array.includes(23)

// var array = [1, 2, 443, 454, 232, 546, 23, 567, 676, 2342, 565, 4, 2, 6]
// var number = 6;

// if(array.includes(number)){
//     console.log("true")
// }else{
//     console.log(false)
// }

// var flag = false;
// for (var i = 0; i < array.length; i++) {
//     if (array[i] === number) {
//         flag = true;
//     }
// }
// if (flag === true) {
//     console.log("true")
// } else {
//     console.log("false")
// }

// Q.12. find out number 689 from given array
// then print only "Got it" and if not found then return "Not Found!"

// var array = [2, 4, 6, 23, 56, 3224, 454, 23, 54, 56, 232, 689, 233];
// var number = 689;

// var flag = flag;
// for (var i = 0; i < array.length; i++) {
//     if (array[i] === number) {
//         flag = true;
//     }
// }
// if (flag === true) {
//     console.log("Got it")
// } else {
//     console.log("Not Found!")
// }


// Q.13. given an array make a object with key of that specific index with value;

// var array = [9,8,7,6,5,4,3,2,1,0]
// var result = {};

// for(var i=0; i<array.length; i++){
//     result[i] = array[i].toString();
// }
// console.log(result);


// nums = [2,7,11,15], target = 9

// var twoSum = function(nums, target){
//     var array = []
//     for(var i=0; i<nums.length; i++){
//         for(var j=i+1; j<nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 array.push(i,j);
//             }
//         }
//     }
//     return array;
// };


// Q.remove duplicates

// var array = [0,0,1,1,1,1,2,3,3];
// var unique = []
// var duplicate = []

// for(var i=0; i<array.length; i++){
//     if(array[i] == array[i+1]){
//         duplicate.push(array[i]);
//     }
//     else{
//         unique.push(array[i]);
//     }
// }
// console.log(unique);

//constraints means limits of program

// Q.remove element

// var num = [1,2,3,4,5,5,6,7,8,9]
// var target = 5
// for( var i = 0; i < num.length;){ 
//     if ( num[i] === target) { 
//         num.splice(i,1); 
//     }
//     else{
//         i++
//     }
// }
// console.log(num);

//Q.. Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.

// var num = 7;
// var sum = 0;
// for(var i=1; i<=num; i++){
//     if(i%3==0 || i%5==0 || i%7==0){
//         sum+=i //sum = sum + 1
//     }
// }
// console.log(sum);

// var num = 11;
// var max=0;
// for(var i=1; i<=num; i++){
//     if(i%2==1){
//       if(i > max){
//         max= i;
//       }  
//     }
// }
// console.log(max)
var array=[];
var nums = [[1,2,3],[5,6,7],[9,10,11]]
for(var i=0; i<nums.length; i++){
    for(var j=0; j<nums[i].length; j++){
        if(i === j){
            array.push(nums[i][j])
        }
        if(i+j == nums.length-1){
            array.push(nums[i][j])
        }
    }
}
// console.log(array);
var num= 12;
var temp= false;
for(var k=2; k<num; k++){

    if(k%num !==0){
        temp = true;
    }
    else{
        temp= false
    }
}
console.log(temp);