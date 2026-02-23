import { colorCycleGenerator } from './generators.js';
import { consumeWithTimeout } from './iteratorHandler.js';

const colors = ["red", "green", "blue", "yellow"];
const myGen = colorCycleGenerator(colors);

[span_14](start_span)
consumeWithTimeout(myGen, 10);