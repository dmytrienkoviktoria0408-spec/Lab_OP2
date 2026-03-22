"use strict";

const { strategies } = require("./1-strategies.js");

const memoize = (fn, options = {}) => {
  const cache = new Map();
  const limit = options.limit || Infinity;
  const strategy = options.strategy || "LRU";

  return (...args) => {
    const key = JSON.stringify(args);
    const now = Date.now();

    if (cache.has(key)) {
      const entry = cache.get(key);
      entry.lastAccessed = now;
      entry.count++;
      return entry.value;
    }

    const result = fn(...args);

    if (cache.size >= limit) {
      const evictKey = strategies[strategy](cache);
      if (evictKey) cache.delete(evictKey);
    }

    cache.set(key, {
      value: result,
      lastAccessed: now,
      count: 1,
    });

    return result;
  };
};

module.exports = { memoize };