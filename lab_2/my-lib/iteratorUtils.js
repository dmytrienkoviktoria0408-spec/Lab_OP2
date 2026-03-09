export async function consumeWithTimeout(iterator, seconds) {
    const endTime = Date.now() + seconds * 1000;
    while (Date.now() < endTime) {
        const { value } = iterator.next();
        console.log("Value:", value);
        await new Promise(r => setTimeout(r, 100));
    }
}