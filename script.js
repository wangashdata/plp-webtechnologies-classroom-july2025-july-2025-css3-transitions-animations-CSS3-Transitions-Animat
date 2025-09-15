// script.js

// A global variable
let globalMessage = 'Hello from the global scope!';

function showScope() {
  // A local variable
  let localMessage = 'Hello from the local scope!';
  console.log(globalMessage); // This is fine, we can access global variables
  console.log(localMessage);  // This is fine, we are in the local scope
}

// showScope();

// This will cause an error because `localMessage` is not defined in the global scope
// console.log(localMessage);
Functions with Parameters and Return Values
Functions become powerful when they can accept different inputs (parameters) and give back a result (return value).

JavaScript

// script.js

/**
 * Calculates the total price with tax.
 * @param {number} price - The base price of the item.
 * @param {number} taxRate - The tax rate (e.g., 0.05 for 5%).
 * @returns {number} The total price including tax.
 */
function calculateTotalPrice(price, taxRate) {
  const taxAmount = price * taxRate;
  const totalPrice = price + taxAmount;
  return totalPrice;
}

// Example usage
// let finalPrice = calculateTotalPrice(100, 0.08); // Returns 108
// console.log(`The final price is: $${finalPrice}`);

/**
 * Creates a personalized greeting message.
 * @param {string} name - The name of the person to greet.
 * @returns {string} A personalized greeting.
 */
function createGreeting(name) {
  return `Hello, ${name}! Welcome to the interactive page.`;
}

// console.log(createGreeting('Alice')); // Returns "Hello, Alice!..."
