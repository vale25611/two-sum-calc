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
