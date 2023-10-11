// Q1 check given number is even or odd and display the result

// var userNumber = 89;
// if((userNumber % 2) == 0 ){
//     console.log("Provided number is Even !");
// }else{
//     console.log("Provided number is Odd !");
// }

// var userNumber = 89;
// if((userNumber % 2) != 1 ){
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

var count = 0;
var array = [12, 13, 45, 67, 43, 45, 76, 89, 54, 23, 7, 8797, 243, 23234];
for (var i = 0; i < array.length; i++) {
    if (array[i] === 45) {
        count++;
    }
}
// console.log(count);

// Q8. find addition of every second number from  57689 - 346578.

var firstdigit = 57689
var secondtdigit = 346578
var add = 0;
for (var i = firstdigit + 1; i < secondtdigit; i += 2) {
    add = add + i
}
// console.log(add, "add here")

// Q9. find numbers which addition is Target 
// nums = [2,7,11,15], target=9

var nums = [2, 7, 11, 15]
var target = 9
for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
        if ((nums[i] + nums[j]) === target) {
            // console.log(nums[i], nums[j])
        }
    }
}

// Q10. find 3 numbers which addition is Target
// [2,4,6,8,9,10,13,78,12,34,23]
// target = 35

var nums = [2, 4, 6, 8, 9, 10, 13, 78, 12, 34, 23]
var target = 35
for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
        for (var k = j; k < nums.length; k++) {
            if ((nums[i] + nums[j] + nums[k]) === target) {
                // console.log(nums[i],nums[j],nums[k])
            }
        }
    }
}

// Q11. find given number is present in given array or not, if found returns true else false;

// array.includes(23)

var array = [1, 2, 443, 454, 232, 546, 23, 567, 676, 2342, 565, 4, 2, 6]
var number = 2;

// if(array.includes(number)){
//     console.log("true")
// }else{
//     console.log(false)
// }

var flag = false;
for (var i = 0; i < array.length; i++) {
    if (array[i] === number) {
        flag = true;
    }
}
if (flag) {
    // console.log("true")
} else {
    // console.log("false")
}

// Q.12. find out number 689 from given array
// then print only "Got it" and if not found then return "Not Found!"

var array = [2, 4, 6, 23, 56, 3224, 454, 23, 54, 56, 232, 689, 233];
var number = 689;

var flag = flag;
for (var i = 0; i < array.length; i++) {
    if (array[i] === number) {
        flag = true;
    }
}
if (flag) {
    // console.log("Got it")
} else {
    // console.log("Not Found!")
}


// Q.13. given an array make a object with key of that specific index with value;

var array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
var result = {};

for (var i = 0; i < array.length; i++) {
    result[i] = array[i].toString();
}
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

var array = [0, 0, 1, 1, 1, 1, 2, 3, 3];
var unique = []
var duplicate = []

for (var i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
        duplicate.push(array[i]);
    }
    else {
        unique.push(array[i]);
    }
}
// console.log(duplicate);

//constraints means limits of program

// Q.remove element

var num = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9]
var target = 5
for (var i = 0; i < num.length;) {
    if (num[i] === target) {
        num.splice(i, 1);
    }
    else {
        i++
    }
}
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
// var array=[];
// var nums = [[1,2,3],[5,6,7],[9,10,11]]
// for(var i=0; i<nums.length; i++){
//     for(var j=0; j<nums[i].length; j++){
//         if(i === j){
//             array.push(nums[i][j])
//         }
//         if(i+j == nums.length-1){
//             array.push(nums[i][j])
//         }
//     }
// }
// console.log(Prime(array));

// function Prime (array){
//     // console.log(...array);
//     for(var i=0; i<array.length; i++){
//         // console.log(array[i]);
//         for(var j=2; j<array[i]; j++){
//                 if(array[i] %j !==0){

//                 }
//             }

//     }

// }

// var num = 2;
// for(var i=2; i<num; i++){
//     if(num %i===0){
//         console.log("Not Prime");
//         break;
//     }
// }

// console.log(3<2<1<0);

var array = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(array.reverse());
var newArray = [];
for (let i = array.length - 1; i >= 0; i--) {

    newArray.push(array[i]);
}
// console.log(newArray);

// let i = array.length-1;
// while(i>=0){
//      newArray.push(array[i]);
//      i--;
// }
// console.log(newArray);

// let i=array.length-1;
// do{
//      newArray.push(array[i]);
//      i--;
// }while(i>=0);

// console.log(newArray);


// var str = "tower";
// for (var i = str.length - 1; i >= 0; i--) {
//     console.log(str[i])
// }

// var str = "tower";
// var newSTR = []
// for(let i=str.length - 1; i>=0; i--){
//     newSTR.push(str[i])
// }
// console.log(newSTR);


// To find duplicate values of objects in an array and store them in another array.

var objArray = [{ foo: 1, a: 2 }, { foo: 1 }, { c: 6 }];
var duplicateKeysArray = [];
var seenKeys = {};

for (var i = 0; i < objArray.length; i++) {
    var currentObj = objArray[i];

    for (var key in currentObj) {
        if (currentObj.hasOwnProperty(key)) {
            var keyString = key + '=' + currentObj[key];

            if (seenKeys[keyString]) {
                duplicateKeysArray.push(keyString);
            } else {
                seenKeys[keyString] = true;
            }
        }
    }
}

// console.log(duplicateKeysArray);

// console.log(this);



function removeDuplicates(arr) {
    const uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

// Example usage:
const originalArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(originalArray);
//   console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]


// let string = "i am sneha";
// let stringone = string.split("");
// let reverse = string.split("").reverse().join("");
// console.log(reverse);

// for (var i = 100; i >= 0; i--) {
//     console.log(i);
// }



// let nums = 12358;
// let numberone = nums.toString();
// let reversnumber = ""

// for(let i = numberone.length-1; i>=0; i--){
//     reversnumber += numberone[i];
// }
// console.log(parseInt(reversnumber));



// Reverses the words in the given string if the word's length is greater than 3

// var a = "my name is sneha";
// var b = a.split(' ');

// for (var i = 0; i < b.length; i++) {
//     if (b[i].length > 3) {
// b[i] = b[i].split('').reverse().join('');
// console.log(b[i].split('').reverse().join(''));
// }
// console.log(b[i]);
// }


//FIBONACCI SERIES:-
// function printFibonacci(n) {
//     let a = 0, b = 1, c;
//     console.log(a);
//     console.log(b);
//     for (let i = 2; i < n; i++) {
//         c = a + b;
//         console.log(c);
//         a = b;
//         b = c;
//     }
// }
// printFibonacci(6);


//OBJECT METHOD:-
let obj = { id: "1", name: "user22", age: "26", work: "programmer" };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


//SET-TIMEOUT:-
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 3000);
// }



// ARRAY SPLICE METHOD (starting index, removing no. from starting index, replace no.)
let numbers = [1, 2, 3, 4, 100, 6, 7, 8, 9];
numbers.splice(4, 1, 5);
// console.log(numbers);


// ARRAY SLICE METHOD (starting index, removing no index)
const name = ["sneha", "tanvi", "chaitu", "abc", "xyz", "pqr"];
const sliceName = name.slice(1, 3);
// console.log(sliceName);


// ARRAY MAP METHOD (AND FOREACH METHOD)(by using map method we can add any value in our object or array)
let employee = [
    { id: 1, name: "sneha", salary: 30000, position: "software developer" },
    { id: 2, name: "tanvi", salary: 28000, position: "web developer" },
    { id: 3, name: "chaitu", salary: 25000, position: "python developer" }
];

let employeeBonous = employee.map((employee) => ({
    ...employee,
    bonous: 5000
})); /*by using map method*/
employee.forEach((employee) => {
    employee.bonous = 5000;
}); /*by using forEach method*/

// console.log(employeeBonous);
// console.log(employee);
