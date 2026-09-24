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
