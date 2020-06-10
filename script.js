// var Person = function(n,a){
//     this.name= n;
//     this.age = a;
//     this.birthYear = function(){
//         console.log(2020 - this.age)
//     }
// }

//these prototypes are inherited by all the objects of person
// Person.prototype.sayHello = function(){
//     console.log('Hello ' + this.name)
// }

// Person.prototype.job = 'webdy'

// var john = new Person('John', 18);
// john.birthYear();
// john.sayHello();
// console.log(john.job)

//to get info about array, do console.info(array_name)

//primitives vs obj
// Only number, string, boolean, null, undefined are primitives, all other things are objects in Js
// var a = 23;
// var b = a;
// a = 46;
// console.log(a,b);

// var obj1 = {
//     mood:'sad',
//     age: 20
// }

// var obj2 = obj1;// here obj2 is a reference to obj1. both point to the same memory location
// obj1.mood = 'happy';
// console.log(obj1, obj2)

// 1st class fn - fn is passed as parameters
// function arrayCalc(arr, fn){
//     var resultArr = [];
//     for(var i =0; i<arr.length; i++){
//         resultArr.push( fn(arr[i]) );
//     }
//     return resultArr;
// }

// var ages = [18, 5, 11, 20];
// function isFullAge( age ){
//     return age>=18;
// }

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges)


// Now the function returns a function. Since a fn is also an obj, it is similar to returning an obj.

// function interviewQue(job){
//     if(job.trim() === 'developer'){
//         return function(name){
//             console.log(name+', What stack do you prefer?');
//         }
//     }
//     else{
//         return function(name){
//             console.log(name+ ' What do you do?');
//         }
//     }
// }

// var question = interviewQue('developer ');
// question('Lavanya');
// interviewQue('teacher')('Mani'); // works from left to right

//IIFE - Immediately Invoked Function Expressions, to mainting privacy of the variable inside
// (function(){
//     var score = Math.round(Math.random()*10)
//     console.log(score>=5)
// })();

//CLOSURES- An inner fn always has access to the variables and parameters of the outer fn, even after the outer fn has returned
// next- bind,call 

// var john = {
//     name: 'John',
//     presentation: function(style, time){
//         if(style === 'formal'){
//             console.log("Hello! Good "+time+" I'm "+ this.name)
//         }
//         else if(style === 'informal'){
//             console.log("Hi all! Good "+time+" I'm "+ this.name)
//         }
//     }
// }

// var emily = {
//     name:'Emily'
// }

// // john.presentation('informal', 'morning');
// // john.presentation.call(emily, 'formal', 'Night')// first argument is "this"(the object), 2nd args are parameters of fn

// var johnFormal = john.presentation.bind(john,'informal');
// johnFormal('Mrng')


// var ans = parseInt(prompt('Write something'));

// function printHi(name){
//     console.log('Hi '+name);
//     printBye(name);
// }
// function printBye(name){
//     console.log('Bye '+name)
// }

// printHi('lavanya');
/**************************************************************/
// Both the above and below fn print the same thing

/************************************************ */
function printHi(name, callback){
    console.log('Hi '+name);
    callback(name);
}
function printBye(name){
    console.log('Bye '+name)
}

printHi('lavanya',printBye);