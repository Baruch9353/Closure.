// Q1 ==========================================
// function createCounter(){
//     let counter = 0;
//     return function () {
//         counter++
//         return counter
//     }
// };
// let counter = createCounter();
// console.log(counter());
// console.log(counter());

// Q2 ==========================================

// function secretHolder(secret){ 
//   return{
//     getSecret: function(){
//         return secret
//     },
//     setSecret: function(newSecret){
//        secret =  newSecret;
//     }
//   };
// }

// const mySecret = secretHolder("abc");
// console.log(mySecret.getSecret()); // "abc"
// mySecret.setSecret("123");
// console.log(mySecret.getSecret()); // "123

// Q3 ==========================================

// function buildFunctions() {
//   const arr = [];
//   for (let i = 0; i < 3; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }
//   return arr;
// }

// const funcs = buildFunctions();
// funcs[0](); // should print 0
// funcs[1](); // should print 1
// funcs[2](); // should print 2