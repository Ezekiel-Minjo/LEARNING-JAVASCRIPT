/**
 * 📌 ES2025: New Set Methods in JavaScript (Summary)
 *
 * ⚠️ These methods are new in ES2025 — use only in modern environments.
 * ✅ Sets are now more useful and similar to those in other languages.
 * ✅ Great when combined with arrays using the spread (...) operator.
 *
 * 🥗 Example Datasets:
 *    const italianFoods = new Set(['🍝 Pasta', '🍅 Tomato', '🧄 Garlic', '🧈 Olive Oil', '🥬 Basil', '🥔 Gnocchi']);
 *    const mexicanFoods = new Set(['🌮 Taco', '🥑 Avocado', '🧄 Garlic', '🍅 Tomato', '🌽 Corn', '🌶️ Chili']);
 *
 * ─────────────────────────────────────
 *
 * ✅ 1. .intersection(set)
 *    → Returns elements common to both sets.
 *
 *    const commonFoods = italianFoods.intersection(mexicanFoods);
 *    console.log(commonFoods); // 🧄 Garlic, 🍅 Tomato
 *
 * ✅ 2. .union(set)
 *    → Merges both sets (no duplicates).
 *
 *    const fusion = italianFoods.union(mexicanFoods);
 *    console.log(fusion); // All unique items from both
 *
 * ✅ 3. .difference(set)
 *    → Elements in first set but NOT in second.
 *
 *    const uniqueItalian = italianFoods.difference(mexicanFoods);
 *    const uniqueMexican = mexicanFoods.difference(italianFoods);
 *
 * ✅ 4. .symmetricDifference(set)
 *    → Elements in either set, but NOT in both.
 *
 *    const uniqueToEach = italianFoods.symmetricDifference(mexicanFoods);
 *
 * ✅ 5. .isDisjointFrom(set)
 *    → true if sets share NO common elements.
 *
 *    italianFoods.isDisjointFrom(mexicanFoods); // false (they share garlic, tomato)
 *
 * ✅ 6. .isSubsetOf(set)
 *    → true if all elements of current set exist in another set.
 *
 * ✅ 7. .isSupersetOf(set)
 *    → true if current set contains all elements of another set.
 *
 * ─────────────────────────────────────
 *
 * 💡 Extra Tip: Convert between Sets and Arrays
 *
 *    const arr = [...italianFoods]; // Set → Array
 *    const newSet = new Set(arr);   // Array → Set
 *
 * 🔁 Real-World Use Cases:
 *    - Find shared tags, skills, preferences
 *    - Remove duplicates from combined data
 *    - Compare user permissions or roles
 */
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);
// intersection method to find common elements
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection: ', commonFoods);
console.log([...commonFoods]);
// Union Method
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union: ', italianMexicanFusion);

console.log(...[[...italianFoods, ...mexicanFoods]]);

// Diffrence Method
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const uniqueMexicanFood = mexicanFoods.difference(italianFoods);
console.log('Differnece mexican', uniqueMexicanFood);

// SYMETRIC DIFFRENCE
const uniqueItalianMexicanFood = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianMexicanFood);
// disjoint from method
const x = italianFoods.isDisjointFrom(mexicanFoods);
console.log(x);
