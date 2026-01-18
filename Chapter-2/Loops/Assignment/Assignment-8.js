//Ask the user for a number and check the number it id even or odd Number

let num; 

while (true) {
  let input = prompt("Enter a number:");

  if (input === null) {
    console.error("You cancelled the input!");
    break;
  }

  num = Number(input);

  if (isNaN(num)) {
    console.log("Invalid input! Enter a number.");
    continue;
  }

  if (!Number.isInteger(num)) {
    console.log("Floating values not allowed!");
    continue;
  }

  if (num % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }

  break;
}
