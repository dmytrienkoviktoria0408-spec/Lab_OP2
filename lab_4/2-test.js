"use strict";

const { BiDirectionalPriorityQueue } = require("./1-queue.js");

const pq = new BiDirectionalPriorityQueue();

// Додаємо дані
pq.enqueue("Завдання А", 10); // Низький пріоритет, додано першим
pq.enqueue("Завдання Б", 50); // Високий пріоритет
pq.enqueue("Завдання В", 30); // Середній пріоритет, додано останнім

console.log("Найвищий пріоритет:", pq.peek("highest"));
console.log("Найнижчий пріоритет:", pq.peek("lowest"));
console.log("Найстаріше (FIFO):", pq.peek("oldest"));
console.log("Найновіше (LIFO):", pq.peek("newest"));

console.log("--- Видалення ---");
console.log("Видаляємо найвищий:", pq.dequeue("highest"));
console.log("Тепер найвищий:", pq.peek("highest"));