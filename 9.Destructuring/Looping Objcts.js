/**
 * 📌 Looping over objects in JavaScript
 *
 * ⚡ Objects are not iterable directly like arrays,
 *    but we can loop over them indirectly using helper methods.
 *
 * ✅ 1️⃣ Object.keys(obj)
 *    - Returns an array of property names (keys).
 *    - Can use `for...of` loop to iterate over keys.
 *    - Example: Object.keys(openingHours)
 *
 * ✅ 2️⃣ Object.values(obj)
 *    - Returns an array of property values.
 *    - Example: Object.values(openingHours)
 *
 * ✅ 3️⃣ Object.entries(obj)
 *    - Returns an array of [key, value] pairs.
 *    - Example: Object.entries(openingHours)
 *    - Allows us to loop over both keys and values at the same time.
 *
 * 💡 Using Object.entries with destructuring
 *    - You can destructure key and value directly inside the loop.
 *    - When value is an object itself, we can destructure its properties too.
 *    - Example:
 *        for (const [day, { open, close }] of Object.entries(openingHours)) {
 *          console.log(`On ${day} we open at ${open} and close at ${close}`);
 *        }
 *
 * ⭐ Advantages
 *    - Cleaner, more readable way to iterate through objects.
 *    - Avoids manual for-in loops or manual indexing.
 */
