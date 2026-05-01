"use strict";

async function* largeDataSource(limit) {
  for (let i = 1; i <= limit; i++) {
    // Імітуємо асинхронну затримку (наприклад, читання з мережі або диску)
    yield i;
  }
}

const processStream = async (dataIterator, transformer) => {
  console.log("[Stream] Початок обробки...");
  let count = 0;

  for await (const chunk of dataIterator) {
    const processed = transformer(chunk);
    
    // Виводимо прогрес кожні 1000 елементів, щоб не засмічувати консоль
    if (count % 1000 === 0) {
      console.log(`[Batch] Оброблено елементів: ${count}, Поточне значення: ${processed}`);
    }
    count++;
  }

  console.log(`[Stream] Готово! Всього оброблено: ${count}`);
};

module.exports = { largeDataSource, processStream };