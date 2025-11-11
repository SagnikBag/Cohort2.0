//  Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”





// let age = prompt("enter you age")

// if(age === null){
//     alert('tumi cancel keno tiple');
    
// }else{
//     age = +age
//     if(age>=18){
//        alert("you are elegible for vote");
        
//     }
//     else{
//         alert("you are under age")    }
// }



// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// for(let i =1;i<=10;i++){
//     console.log(`${5} * ${i} = ${5*i}`);
    
// }



// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

// for(let i =1;i<=15;i++){
//     if(i>8){
//         console.log(i);
//         }
//     }




// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// let password = "sagnik"
// let userPassword = prompt("enter your password")
// if(password === userPassword){
//  alert("access granted")
// }else{
//  alert("access denied")
// }



// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let password = "sagnik"
// let attempts = 0;
// let userPassword = prompt("enter your password")
// attempts++

// while(password !==userPassword && attempts<3){
//  userPassword = prompt("enter your password")
//  attempts++
// }



// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let word = prompt("enter your word")
// let count = 0;
// while(word !== "stop"){
//  if(word === "yes"){
//   count++
//  }
//   word = prompt("enter your word")
// }
// alert(`${count}`)

// let word = prompt("Enter a word (type 'stop' to end)");
// let count = 0;

// while (word !== "stop") {
//   if (word === "yes") {
//     count++;
//   }
//   word = prompt("Enter another word (type 'stop' to end)");
// }

// alert(`You entered "yes" ${count} times.`);



// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.



// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// let amount = 1000;
// let attempts = 0;
// let withdrawal = +prompt("enter your amount")

// while(attempts<3){
//   if(withdrawal>amount){
//     alert("insufficiant balance")
//     attempts++
//   }else{
//     alert(`${amount-withdrawal}`)
//     withdrawal = +prompt("enter your amount")
//     attempts++

//   }
// }