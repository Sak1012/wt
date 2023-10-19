function divideNumbers(numerator, denominator) {
  if (denominator === 0) {
    return "Division by zero is not allowed.";
  }

  return numerator / denominator;
}

// Example usage:
const result = divideNumbers(10, 2); // Result: 5
const errorResult = divideNumbers(5, 0);

console.log(result);
console.log(errorResult); // Result: "Division by zero is not allowed."
