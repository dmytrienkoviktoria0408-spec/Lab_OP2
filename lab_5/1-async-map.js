"use strict";

const mapAsync = (array, callback, finalDone) => {
  const result = [];
  let completed = 0;

  if (array.length === 0) return finalDone(null, []);

  array.forEach((item, index) => {
    // Викликаємо колбек для кожного елемента
    callback(item, (err, mappedValue) => {
      if (err) return finalDone(err);
      
      result[index] = mappedValue;
      completed++;

      if (completed === array.length) {
        finalDone(null, result);
      }
    });
  });
};

const mapPromise = (array, fn, options = {}) => {
  const { signal } = options;

  return new Promise((resolve, reject) => {
    // Перевірка, чи не було скасовано процес заздалегідь
    if (signal?.aborted) return reject(new Error("Aborted"));

    const promises = array.map(async (item) => {
      if (signal?.aborted) throw new Error("Aborted");
      return await fn(item);
    });

    // Додаємо слухач на випадок відміни під час виконання
    signal?.addEventListener("abort", () => reject(new Error("Aborted")));

    Promise.all(promises).then(resolve).catch(reject);
  });
};

module.exports = { mapAsync, mapPromise };