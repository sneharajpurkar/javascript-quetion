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

// Q. find 3 numbers which addition is Target
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
