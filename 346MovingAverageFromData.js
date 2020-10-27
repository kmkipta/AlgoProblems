/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.avgCount = size  
  this.queue = []
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  let sum = 0
  
  if (this.queue.length < this.avgCount) {
    this.queue.push(val)
    this.queue.forEach(x => {sum += x})
    return sum/this.queue.length
  } else {
    this.queue.shift()
    this.queue.push(val)
    this.queue.forEach(x => {sum += x})
    return sum/this.avgCount
  }
};