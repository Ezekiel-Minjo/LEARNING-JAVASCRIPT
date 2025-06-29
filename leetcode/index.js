/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function numSubseq(nums, target) {
    const MOD = 1000000007;
    const n = nums.length;
    
    // Sort the array to make finding min/max easier
    nums.sort((a, b) => a - b);
    
    // Precompute powers of 2 to avoid repeated calculations
    const powers = new Array(n);
    powers[0] = 1;
    for (let i = 1; i < n; i++) {
        powers[i] = (powers[i - 1] * 2) % MOD;
    }
    
    let left = 0;
    let right = n - 1;
    let result = 0;
    
    while (left <= right) {
        // Check if current window satisfies the condition
        if (nums[left] + nums[right] <= target) {
            // All subsequences starting with nums[left] and ending 
            // anywhere from left to right are valid
            // Count = 2^(right - left) subsequences
            result = (result + powers[right - left]) % MOD;
            left++;
        } else {
            // Current max is too large, shrink window from right
            right--;
        }
    }
    
    return result;
}

// Test cases
console.log("Test Case 1:");
console.log("Input: nums = [3,5,6,7], target = 9");
console.log("Output:", numSubseq([3,5,6,7], 9));
console.log("Expected: 4\n");

console.log("Test Case 2:");
console.log("Input: nums = [3,3,6,8], target = 10");
console.log("Output:", numSubseq([3,3,6,8], 10));
console.log("Expected: 6\n");

console.log("Test Case 3:");
console.log("Input: nums = [2,3,3,4,6,7], target = 12");
console.log("Output:", numSubseq([2,3,3,4,6,7], 12));
console.log("Expected: 61\n");

// Additional test cases
console.log("Edge Case - Single element:");
console.log("Input: nums = [5], target = 10");
console.log("Output:", numSubseq([5], 10));
console.log("Expected: 1\n");

console.log("Edge Case - No valid subsequences:");
console.log("Input: nums = [5,6], target = 10");
console.log("Output:", numSubseq([5,6], 10));
console.log("Expected: 2 (subsequences [5] and [6])\n");

// Helper function to explain the algorithm
function explainAlgorithm() {
    console.log("Algorithm Explanation:");
    console.log("1. Sort array so min/max are at endpoints of any subarray");
    console.log("2. Use two pointers (left, right)");
    console.log("3. If nums[left] + nums[right] <= target:");
    console.log("   - All subsequences starting with nums[left] are valid");
    console.log("   - Count = 2^(right-left) subsequences");
    console.log("   - Move left pointer forward");
    console.log("4. Otherwise, move right pointer backward");
    console.log("5. Continue until pointers meet");
    console.log("\nTime Complexity: O(n log n) - dominated by sorting");
    console.log("Space Complexity: O(n) - for powers array");
}

explainAlgorithm();