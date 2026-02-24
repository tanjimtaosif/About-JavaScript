const btn = document.querySelector("button");
const ul = document.querySelector("ul");

// 1. MATH LOGIC: Pure addition helper
function add(n1, n2) {
  return n1 + n2;
}

// 2. UTILITY: Helper to generate a random digit
// WHY: If you want to change the range to 100 later, you only change it in ONE place.
function getRandomDigit() {
  return Math.floor(Math.random() * 10);
}

// 3. UI ORCHESTRATOR
btn.addEventListener("click", function () {
  // HOW: Calling our helper function twice
  const num1 = getRandomDigit();
  const num2 = getRandomDigit();

  let finalAdd = add(num1, num2);

  let li = document.createElement("li");
  li.textContent = finalAdd;

  ul.appendChild(li);
});
