let numbers = [];
let target = 0;

// Solving the JS algorithm

function twoSum(nums, targetValue) {
  const seen = new Map(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = targetValue - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }

  return null; // no two numbers add up to the target
}

// DOM REF

const pushForm = document.getElementById("push-form");
const pushInput = document.getElementById("push-input");
const popBtn = document.getElementById("pop-btn");
const targetInput = document.getElementById("target-input");
const arrayDisplay = document.getElementById("array-display");
const resultBox = document.getElementById("result-box");

// Image Render

function render() {
  arrayDisplay.innerHTML = "";

  if (numbers.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "empty-msg";
    emptyMsg.textContent = "Array is empty. Push a number to get started!";
    arrayDisplay.appendChild(emptyMsg);
  }

  const match = numbers.length >= 2 ? twoSum(numbers, target) : null;

  numbers.forEach((num, i) => {
    const box = document.createElement("div");
    box.className = "array-box";

    if (match && (i === match[0] || i === match[1])) {
      box.classList.add("match");
    }

    const valueSpan = document.createElement("span");
    valueSpan.textContent = num;

    const indexSpan = document.createElement("span");
    indexSpan.className = "box-index";
    indexSpan.textContent = "i=" + i;

    box.appendChild(valueSpan);
    box.appendChild(indexSpan);
    arrayDisplay.appendChild(box);
  });

  resultBox.classList.remove("success", "fail");

  if (numbers.length < 2) {
    resultBox.textContent = "Add at least two numbers to check for a Two Sum match.";
  } else if (match) {
    const [i, j] = match;
    resultBox.textContent =
      `✅ Found it! nums[${i}] (${numbers[i]}) + nums[${j}] (${numbers[j]}) = ${target}`;
    resultBox.classList.add("success");
  } else {
    resultBox.textContent =
      `❌ No two numbers in the array add up to ${target}.`;
    resultBox.classList.add("fail");
  }
}

pushForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = Number(pushInput.value);
  if (Number.isNaN(value)) {
    return;
  }

  numbers.push(value);
  pushInput.value = "";
  pushInput.focus();
  render();
});

popBtn.addEventListener("click", () => {
  if (numbers.length === 0) {
    return;
  }
  numbers.pop();
  render();
});

// recalculate every time the target changes, not just on submit
targetInput.addEventListener("input", () => {
  const value = Number(targetInput.value);
  target = Number.isNaN(value) ? 0 : value;
  render();
});

render();