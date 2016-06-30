function bstNode(value) {
  this.value = value;
  this.leftChild = null;
  this.rightChild = null;
}

function binarySearchTree() {
  this.rootNode = null;
  
  this.insert = function(element) {
    if (this.rootNode === null) {
      this.rootNode = new bstNode(element);
    }
    else {
      var current = this.rootNode;
      var newNode = new bstNode(element);
      
      while (true) {
        if (current.value < element) {
          if (current.rightChild === null) {
            current.rightChild = newNode;
            return;
          }
          current = current.rightChild;
        }
        else if (current.value > element) {
          if (current.leftChild === null) {
            current.leftChild = newNode;
            return;
          }
          current = current.leftChild;
        }
      }
    } 
  };
  
  this.insertMulti = function(array) {
    for (var i = 0; i < array.length; i++) {
      this.insert(array[i]);
    }
  }
}

binarySearchTree.prototype.search = function(targetValue) {
  var check = false;

  var traverse = function(cNode) {
    if (cNode === null) {
      return;
    } else if (cNode.value === targetValue) {
      check = true;
      return;
    }

    if (targetValue > cNode.value) {
      traverse(cNode.rightChild);
    } else if (targetValue < cNode.value) {
      traverse(cNode.leftChild);
    }
  }

  traverse(this.rootNode);
  
  return check;
}

binarySearchTree.prototype.depth = function() {
	var result = [];

	var traverse = function(cNode) {
		if (cNode === null) {
			return;
		}

		// Depending on where this is placed it becomes pre-order,
		// in-order, or post-order
		result.push(cNode.value);

		traverse(cNode.left);
		traverse(cNode.right);
	}

	traverse(this.rootNode);
	return result;
};

binarySearchTree.prototype.pureDepth = function(cNode) {
	if (cNode === undefined) {
		cNode = this.rootNode;
	} else if (cNode === null) {
		return [];
	}

	// pre-order
	return [cNode.value].concat(this.pureDepth(cNode.left)).concat(this.pureDepth(cNode.right));
};