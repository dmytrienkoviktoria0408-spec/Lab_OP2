"use strict";

class BiDirectionalPriorityQueue {
  constructor() {
    // Зберігаємо елементи в масиві. Кожен елемент - це об'єкт {item, priority, id}
    this.elements = [];
    this.counter = 0; // Для відстеження черговості додавання (insertion order)
  }

  // Вставити елемент з пріоритетом
  enqueue(item, priority) {
    this.elements.push({ item, priority, id: this.counter++ });
  }

  // Допоміжний метод для пошуку індексу на основі типу (highest, lowest, oldest, newest)
  _getTargetIndex(type) {
    if (this.elements.length === 0) return -1;

    let targetIdx = 0;
    for (let i = 1; i < this.elements.length; i++) {
      const current = this.elements[i];
      const best = this.elements[targetIdx];

      let isBetter = false;
      switch (type) {
        case 'highest': isBetter = current.priority > best.priority; break;
        case 'lowest':  isBetter = current.priority < best.priority; break;
        case 'oldest':  isBetter = current.id < best.id; break;
        case 'newest':  isBetter = current.id > best.id; break;
      }

      if (isBetter) targetIdx = i;
    }
    return targetIdx;
  }

  // Видалити та повернути елемент
  dequeue(type) {
    const index = this._getTargetIndex(type);
    if (index === -1) return null;
    return this.elements.splice(index, 1)[0].item;
  }

  peek(type) {
    const index = this._getTargetIndex(type);
    if (index === -1) return null;
    return this.elements[index].item;
  }
}

module.exports = { BiDirectionalPriorityQueue };