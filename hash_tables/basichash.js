function HashTable() {
  this.storage = [];
  this.buckets = 8;
  this.size = 0;
}

HashTable.prototype = {
  hash: function(str) {
    var hash = 5381;
    for (var i = 0; i < str.length; i++) {
      char = str.charCodeAt(i);
      hash = ((hash << 5) + hash) + char;
    }
    return hash % this.buckets;
  },
  insert: function(key, value) {
    var placement = this.hash(key);

    if (this.storage[placement] === undefined) {
      this.storage[placement] = [key, value];
    } else {
      for (var i = 0; i < this.storage[placement].length; i++) {
        if (this.storage[placement][i] == key) {
          this.storage[placement][i+1] = value;
          return this;
        }
      }
      this.storage[placement].push(key, value);
    }

    return this;
  },
  delete: function(key) {
    var target = this.hash(key);
    if (this.storage[target][0] === key) {
      this.storage.splice(target);
    }

    return this;
  },
  retrieve: function(key) {
    var target = this.hash(key);

    for (var i = 0; i < this.storage[target].length; i++) {
      if (this.storage[target][i] == key) {
        return this.storage[target][i+1];
      }
    }
  }
};

var hashTableau = new HashTable();
hashTableau.insert('hello', 'world');
hashTableau.insert('apple', 'banana');
console.log(hashTableau.retrieve('hello'));
console.log(hashTableau.retrieve('apple'));
hashTableau.insert('apple', 'cherries');
console.log(hashTableau.retrieve('apple'));
console.log(hashTableau.storage);