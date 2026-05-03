"use strict";

const { largeDataSource, processStream } = require("./1-stream.js");

const main = async () => {
  // Симулюємо "величезний" набір даних (наприклад, 10,000 записів)
  const HUGE_LIMIT = 10000;
  const dataStream = largeDataSource(HUGE_LIMIT);

  // Функція-трансформер (наприклад, піднесення до квадрату)
  const squareTransformer = (n) => n * n;

  try {
    await processStream(dataStream, squareTransformer);
  } catch (err) {
    console.error("[Error] Помилка під час стрімінгу:", err);
  }
};

main();