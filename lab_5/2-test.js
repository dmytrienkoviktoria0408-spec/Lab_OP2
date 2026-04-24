"use strict";

const { mapAsync, mapPromise } = require("./1-async-map.js");

// Емуляція асинхронної роботи (наприклад, запит до БД)
const asyncDouble = (n) => new Promise(res => setTimeout(() => res(n * 2), 500));

const main = async () => {
  const numbers = [1, 2, 3, 4, 5];

  console.log("--- Demo: Callback version ---");
  mapAsync(numbers, (item, cb) => cb(null, item + 10), (err, res) => {
    console.log("Callback Result:", res);
  });

  console.log("\n--- Demo: Async/Await version ---");
  try {
    const result = await mapPromise(numbers, asyncDouble);
    console.log("Promise Result:", result);
  } catch (err) {
    console.error(err);
  }

  console.log("\n--- Demo: AbortController (Cancellation) ---");
  const controller = new AbortController();
  
  // Скасовуємо через 200мс, поки виконується asyncDouble (який триває 500мс)
  setTimeout(() => controller.abort(), 200);

  try {
    await mapPromise(numbers, asyncDouble, { signal: controller.signal });
  } catch (err) {
    console.log("Expected Error:", err.message); // Виведе "Aborted"
  }
};

main();