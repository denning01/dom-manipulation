// ===========================================
// 🎯 PART 1: JavaScript Basics
// ===========================================

// Variable declarations and conditionals
let name = prompt("What is your name?");
let hour = new Date().getHours();
let greetingMessage;

if (hour < 12) {
  greetingMessage = `Good morning, ${name}!`;
} else if (hour < 18) {
  greetingMessage = `Good afternoon, ${name}!`;
} else {
  greetingMessage = `Good evening, ${name}!`;
}

document.getElementById("greeting").textContent = greetingMessage;

// ===========================================
// ❤️ PART 2: Functions
// ===========================================

// Function to calculate sum
function calculateSum(a, b) {
  return a + b;
}

// Function to display result
function displaySum() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const result = calculateSum(num1, num2);
  document.getElementById("sumResult").textContent = `The sum is: ${result}`;
}

document.getElementById("calcBtn").addEventListener("click", displaySum);

// ===========================================
// 🔁 PART 3: Loops
// ===========================================

// Using a for loop to list numbers
const numberList = document.getElementById("numberList");
for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Number ${i}`;
  numberList.appendChild(li);
}

// Using a while loop for countdown
let count = 3;
while (count > 0) {
  console.log(`Countdown: ${count}`);
  count--;
}
console.log("Go!");

// ===========================================
// 🌐 PART 4: DOM Manipulation
// ===========================================

const colorToggle = document.getElementById("colorToggle");
const addItem = document.getElementById("addItem");
const dynamicList = document.getElementById("dynamicList");

// Toggle background color
colorToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Add new list items dynamically
addItem.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = `New item added at ${new Date().toLocaleTimeString()}`;
  dynamicList.appendChild(newItem);
});

// Example DOM style toggle
document.body.classList.add("light-mode");
