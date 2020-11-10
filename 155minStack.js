
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.min = 0
  this.conQ = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.conQ.push(x)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.conQ.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.conQ[this.conQ.length-1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return Math.min(...this.conQ)
};


/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
