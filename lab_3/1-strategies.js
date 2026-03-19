"use strict";

const strategies = {
  LRU: (cache) => {
    let oldest = Infinity;
    let keyToEvict = null;
    for (const [key, entry] of cache.entries()) {
      if (entry.lastAccessed < oldest) {
        oldest = entry.lastAccessed;
        keyToEvict = key;
      }
    }
    return keyToEvict;
  },
  LFU: (cache) => {
    let minUsage = Infinity;
    let keyToEvict = null;
    for (const [key, entry] of cache.entries()) {
      if (entry.count < minUsage) {
        minUsage = entry.count;
        keyToEvict = key;
      }
    }
    return keyToEvict;
  }
};

module.exports = { strategies };