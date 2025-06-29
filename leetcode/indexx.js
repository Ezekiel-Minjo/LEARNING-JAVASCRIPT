/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSubsequence(nums, k) {
    // Create array of [value, original_index] pairs
    const indexedNums = nums.map((num, index) => [num, index]);
    
    // Sort by value in descending order to get largest elements first
    // If values are equal, we can use any tie-breaking (here by index)
    indexedNums.sort((a, b) => {
        if (a[0] !== b[0]) {
            return b[0] - a[0]; // Sort by value descending
        }
        return a[1] - b[1]; // If equal values, sort by index ascending
    });
    
    // Take the first k elements (which are the k largest)
    const selectedElements = indexedNums.slice(0, k);
    
    // Sort by original indices to maintain the original order
    selectedElements.sort((a, b) => a[1] - b[1]);
    
    // Extract just the values
    return selectedElements.map(element => element[0]);
}

// Test cases
console.log("Test Case 1:");
console.log("Input: nums = [2,1,3,3], k = 2");
console.log("Output:", maxSubsequence([2,1,3,3], 2));
console.log("Expected: [3,3]");
console.log("Sum:", maxSubsequence([2,1,3,3], 2).reduce((a, b) => a + b, 0));
console.log();

console.log("Test Case 2:");
console.log("Input: nums = [-1,-2,3,4], k = 3");
console.log("Output:", maxSubsequence([-1,-2,3,4], 3));
console.log("Expected: [-1,3,4]");
console.log("Sum:", maxSubsequence([-1,-2,3,4], 3).reduce((a, b) => a + b, 0));
console.log();

console.log("Test Case 3:");
console.log("Input: nums = [3,4,3,3], k = 2");
console.log("Output:", maxSubsequence([3,4,3,3], 2));
console.log("Expected: [3,4] or [4,3]");
console.log("Sum:", maxSubsequence([3,4,3,3], 2).reduce((a, b) => a + b, 0));
console.log();

// Additional test cases
console.log("Edge Case - All negative:");
console.log("Input: nums = [-5,-3,-1,-4], k = 2");
console.log("Output:", maxSubsequence([-5,-3,-1,-4], 2));
console.log("Sum:", maxSubsequence([-5,-3,-1,-4], 2).reduce((a, b) => a + b, 0));
console.log();

console.log("Edge Case - k equals array length:");
console.log("Input: nums = [1,2,3], k = 3");
console.log("Output:", maxSubsequence([1,2,3], 3));
console.log("Sum:", maxSubsequence([1,2,3], 3).reduce((a, b) => a + b, 0));
console.log();

console.log("Edge Case - Single element:");
console.log("Input: nums = [5], k = 1");
console.log("Output:", maxSubsequence([5], 1));
console.log("Sum:", maxSubsequence([5], 1).reduce((a, b) => a + b, 0));
console.log();

// Alternative solution using priority queue approach (simulated with sorting)
function maxSubsequenceAlternative(nums, k) {
    // Create min-heap simulation by keeping track of k largest elements
    const candidates = [];
    
    for (let i = 0; i < nums.length; i++) {
        candidates.push([nums[i], i]);
        
        // Keep only k largest elements
        if (candidates.length > k) {
            candidates.sort((a, b) => a[0] - b[0]); // Sort ascending
            candidates.shift(); // Remove smallest
        }
    }
    
    // Sort by original indices to maintain order
    candidates.sort((a, b) => a[1] - b[1]);
    
    return candidates.map(element => element[0]);
}

console.log("\n--- Alternative Solution Test ---");
console.log("Input: nums = [2,1,3,3], k = 2");
console.log("Alternative Output:", maxSubsequenceAlternative([2,1,3,3], 2));

// Helper function to explain the algorithm
function explainAlgorithm() {
    console.log("\n=== Algorithm Explanation ===");
    console.log("1. Create pairs of [value, original_index] to track positions");
    console.log("2. Sort pairs by value in descending order (largest first)");
    console.log("3. Take the first k pairs (k largest values)");
    console.log("4. Sort these k pairs by original index to preserve order");
    console.log("5. Extract and return just the values");
    console.log("\nTime Complexity: O(n log n) - dominated by sorting");
    console.log("Space Complexity: O(n) - for the indexed array");
    console.log("\nKey insight: We need the k largest values in their original order!");
}

explainAlgorithm();