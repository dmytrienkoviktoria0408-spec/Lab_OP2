"use strict";

async function* largeDataSource(limit) {
  for (let i = 1; i <= limit; i++) {
    // Імітуємо асинхронну затримку (наприклад, читання з мережі або диску)
    yield i;
  }
}