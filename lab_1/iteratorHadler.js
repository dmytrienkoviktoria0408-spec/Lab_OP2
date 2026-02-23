export async function consumeWithTimeout(iterator, seconds) {
  const timeoutMs = seconds * 1000;
  const startTime = Date.now();
  let count = 1;

  console.log("Розпочато виконання...");

  while (Date.now() - startTime < timeoutMs) {
    const { value } = iterator.next();
    
    console.log("Ітерація №" + count + " | Значення: " + value);

    count++;
    
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log("Час вичерпано. Роботу завершено.");
}