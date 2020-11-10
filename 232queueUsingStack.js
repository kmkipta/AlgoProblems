/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.s1 = []
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.s1.push(x)
};

/**
* Removes the element from in front of queue and returns that element.
* could also be implemented using foreach and 2 arrays
* @return {number}
*/
MyQueue.prototype.pop = function() {
  const sz = this.s1.length
  const n = this.s1[0]
  this.s1 = this.s1.slice(1, sz)
  return n
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  return this.s1[0]
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.s1.length > 0 ? false : true
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/