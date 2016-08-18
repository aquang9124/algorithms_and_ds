// basic stack
function Stack() {
    this.store = [];
}

Stack.prototype = {
    peek: function() {
        return this.store[this.store.length - 1];
    },
    push: function(val) {
        this.store.push(val);
        return this;
    },
    pop: function() {
        return this.store.pop();
    },
    contains: function(val) {
        for (let i = 0; i < this.store.length; i++) {
            if (arr[i] === val) {
                return true;
            }
        }

        return false;
    },
    quickSearch: function(val) {
        // this method only works on sorted stacks
        let min = 0, max = this.store.length - 1;

        while (min <= max) 
        {
            let mid = Math.floor( ( min + max ) / 2 );

            if (this.store[mid] > val) {
                max = mid - 1;
            }
            else if (this.store[mid] < val) {
                min = mid + 1;
            }
            else {
                return mid;
            }
        }

        return false;
    }
};