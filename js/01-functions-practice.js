//STEP 1

function halfHumber(i) {
  let num = i / 2;
  console.log(`Half of ${i} is ${num}`);
}
halfHumber(5);

//STEP 2
function squareNumber(num) {
    let result = num * num ;
    console.log(`The result of squaring the number ${num} is ${result}`);    
}
squareNumber(3);


//STEP 3
function percentOf(num1,num2) {
    let result = (num1 / num2) *100;
     console.log(`${num1} is ${result} % of ${num2}`);   
}
percentOf(50,100);


//STEP 4
function findModulus(num1, num2) {
    let result = num1 % num2;
    console.log(`${result} is modulus of ${num1} ${num2}`);
}
findModulus(10,3);

