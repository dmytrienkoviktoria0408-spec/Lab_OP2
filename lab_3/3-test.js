"use strict";

const { memoize } = require("./2-memoize.js");

const sum = (a, b) => {
  console.log(`=> Обчислюю: ${a} + ${b}`);
  return a + b;
};

// Створюємо мемоізовану версію з лімітом 2
const mSum = memoize(sum, { limit: 2, strategy: "LRU" });

console.log(mSum(1, 2)); // Виконає обчислення (Кеш: [1,2])
console.log(mSum(1, 2)); // Візьме з кешу
console.log(mSum(3, 4)); // Виконає обчислення (Кеш: [1,2], [3,4])
console.log(mSum(5, 6)); // Витіснить (1,2), бо ліміт 2 (Кеш: [3,4], [5,6])
console.log(mSum(1, 2)); // Знову обчислить, бо (1,2) було видалено