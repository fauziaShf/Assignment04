let num1, num2, opera;
// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, oper) {
  switch ((x, y, oper)) {
    case (oper = "+"):
      alert(`Result of operation is ${x + y}`);

      break;
    case (oper = "-"):
      alert(`Result of operation is ${x - y}`);

      break;
    case (oper = "*"):
      alert(`Result of operation is ${x * y}`);

      break;
    case (oper = "/"):
      alert(`Result of operation is ${x / y}`);

      break;

    default:
      console.log("ERROR");
      break;
  }
}

function askUser() {
  // COLLECT FIRST NUMBER FROM USER
  num1 = Number(prompt("Enter your first number"));

  // COLLECT SECOND NUMBER FROM USER
  num2 = Number(prompt("Enter your second number"));
  operation();
}

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

function operation() {
  opera = prompt("Enter your operation +,-,*,/ ");
  if (opera === "+" || opera === "-" || opera === "*" || opera === "/") {
    calculate(num1, num2, opera);
  } else {
    alert("please select between +,-,*,/");
    askUser();
  }
}

askUser();
