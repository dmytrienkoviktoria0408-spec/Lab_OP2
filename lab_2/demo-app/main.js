import { fibonacciGenerator, consumeWithTimeout } from 'core-lib';

const fib = fibonacciGenerator();
consumeWithTimeout(fib, 3); 