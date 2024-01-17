// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

      // Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// userPin = prompt("gali bin: ")

// pin = 1234


// if (pin == userPin) {
// console.log("Welcome to EVC!");

// // evc program that will show evc data option

//     console.log("1: Itus haraagaaga ")
//     console.log("2: Kaarka hadalka ")
//     console.log("3: Bixi bil ")
//     console.log("4: U wareeji EVC ")
//     console.log("5: Warbixin kooban ")
//     console.log("6: Badal binka ")
//     console.log("7: warbixin guud ")
//     console.log("8: Gadaal u laabo")
    
//     balance = 50
//     kaarka = 2
//     bill=20
    
//     choice = prompt("dooro number: ")
//     // balance
//     if (choice == 1) {
//     console.log("haragaaga waa ", balance, "dolar")
    
//     }
    
//     // kaarka hadal ka
//      if (choice == 2) {
//     console.log("1: ku shubo ")
//     console.log("2: ugu shub ")
//     console.log("3: haraagaaga ")
//     console.log("4: ka bax")
    
//     choice = prompt("dooro number: ")
//     if (choice == 1) {
//          kushubo = prompt("ku shubo kaar: ")
    
//         if (kushubo < balance) {
//             console.log("waxaa ku shubatay: ", kushubo, "haraaga EVC ga waa  ", balance - kushubo)
//         } else {
//             console.log("kuguma filna: ")
//         }

    
   
//      }
// }
//     // pay bill
//     if(choice===3){
//        console.log("1: post paid: ")
//      console.log("2:pay bill ") 
//      bill =prompt("enter bill")
//        if (bill== 1) {
//              console.log("1: query bill payment ")
//               console.log("2:pay post paid bill ") 
//               console.log("2:pay friend post paid bill ") 
//        }
//        querry_bill=prompt("query bill payment")
//        if( querry_bill===1){
//            console.log("you have paid:$", balance-bill, "of bi bill");
//        }
//     }
    
   
//    // Exit option
//     else if (choice == 9) {
//         console.log("Exiting EVC program. Goodbye!");
    
// } else {
//     console.log("bin aad galisay waa qalad")
// }
// }

// // correct
// numb = prompt("Enter your number:");
// iscorrect=true;
// // Extract the first two 
//  prefix = numb.substring(0, 2);

// if (numb.length === 9 || numb.length === 10) {
//     // Check "61", "77", or "68" or "06"
//     if (prefix === "61" || prefix === "77" || prefix === "68" || prefix === "06") {
//         // console.log("Correct number:");

//         for (let  i = 0; i < numb.length; i++) {
//        if (!(numb.charCodeAt(i)>=48 && numb.charCodeAt(i)< 58 )){
//           iscorrect=false;
//         break;
    
//         } else{
//            iscorrect=true; 
//         }
      
//     } 
//       if (iscorrect==true){
//           console.log("Correct number:");
//       }else{
//            console.log("incorrect number:");
//       }
//     } else {
//     console.log("Incorrect number length.");
// }
// }
// else {
//     console.log("Incorrect number length.");
// }

// functions starts here
// in function, function declaration and function definition are the same

// thsi is a fuction with out a paramer
// function printme(){   
//     console.log("printing--");
//   }
//   printme(); 

//   parameter is somthing that you pass to a function when you are declering 
// when you are calling a function the actual value you pass is called an argument

 

// thsi is a function with paramer
// function param(pram){
//     console.log(pram);
// }
// param('this prints prameter');

// athird way to declare a function 

// const printagain=function(){
//     console.log("print again")
// }
// printagain();

// a forthy way to declare a function 
// const forthyway=function(a, b){
// console.log(a, b)
// }
// forthyway('2,4')


// function sum(a,b){
//     let ret=2+4
//     return ret;
// }
// resul=sum(2+4);
// console.log(resul)

// rest parameters: is somethin that allows the function to accept any number of arument as an array
// function definition can have one rest parameter 

function collectthing(x, ...y){
    console.log(x);
    console.log(y);
}
collectthing(1,2,3,4,5,6,7,8,6,7);

//   arrow fucntion:
const add = (x,y) => {
    return x+y;
}
result=add(2,5);
console.log(result)

//   nested function:
function outer(){
    console.log('outer')
    function inner(){
        
    }
    inner()
}
result=outer()
console.log(result)
//   function scope
//there are two rules:
//1. a varible that is defined inside a function can not be accessed outside the funcion
//2. function can acces all the variables inside the scope it is defined
// exmaple.1
// function dosomething(){
//     let x=30;
//     var y=3;
//     const z=2;
//     console.log(x,y,z);
// }
// dosomething();

// example.2

// let x=30;
// var y=3;
// const z=2;
// function doagain(){
//     console.log(x,y,x)
// }
// doagain();

// ##
// closures:the nested function is a closure
// function outer(x){
//     function inner(y){
//         return x+y
//     }
//     return inner
    
// }
// reout=outer(10);

//     const result = reout(2);
// console.log(result); // Output: 12 (because 10 + 2 = 12)
// // ## callback function:
// function foo(bar){
//   console.log("bar")
// bar() 
// }

// foo(function(){
//  console.log("bar")
// })
 