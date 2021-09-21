// //function expression
// const doSomething = function (n1, n2, n3) {

//     return n1 + n2 + n3;

// };
// //named function expression
// console.log(doSomething(5, 2, 1)); //8



// const findSum = function sum(n) {
//     if (n <= 1)
//         return 1;
//     else
//         return n + sum(n - 1); //5+sum(4)+sum(3)+sum(2)+sum(1) // 5+4+3+2+1
// };

// console.log(findSum(5)); //15

// //simple function

// function area(width, height) {

//     return width * height;
  
//   }
  
//   console.log(area(5, 4));


// function helloSomeone(name){
//     return `Hello, ${name}`;
// }

const helloSomeone = name => `Hello, ${name}` ;

// function area(width, height){
//     return width * height;
// }

const area = (w, h) => w * h;

// function evenNum(num) {
//     if (num % 2 === 0) return true;
//     else return false;
//   }

const evenNum = num => (num % 2 === 0);



console.log(helloSomeone('asdas'));

console.log(area(2, 3));

console.log(evenNum(654655));




function helloSomeone(name) {
    let greeting = `Hello`;
    return `${greeting} ${name}`;  
  }
  //greeting and num are local variables, you can refer only inside function



