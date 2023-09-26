// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value: string | number) {
  // TODO: Use a type guard to check the actual type of 'value'
  if (typeof value === "number") {
    return Math.sqrt(value);
  } else if (typeof value === "string") {
    return value.length;
  }
  // if type is string, retrurn the length of the string
  // if type is number return the square of the number
}

// Prompt the user to enter a value as either a string or a number
const usersInput = prompt("Enter a value")!;
const parsedValue = isNaN(Number(usersInput)) ? usersInput : Number(usersInput);

// Call the lengthOrSquare function
const results = lengthOrSquare(parsedValue);
console.log(typeof results);
console.log(results);
