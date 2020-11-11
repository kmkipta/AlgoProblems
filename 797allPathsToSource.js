
let results
/**
 * @param {number[][]} graph 
 * @param {number[][]} results
 * @param {number[]} path 
 * @param {number} target
 */
var backtrack = (graph, currNode, path, target) => {
  if(currNode == target) {
    results.push(path.slice())
    return results
  } else {
    for (let nextNode of graph[currNode]) {
      path.push(nextNode)
      backtrack(graph, nextNode, path, target)
      
      // remove the previous choice, to try the next choice
      path.pop();
    }
  } 
}

/**
 * @param {number[][]} graph
 * @return {number[][]}
 * find from node 0 to the last node n-1 (backtracking)
    Input: graph = [[1,2],[3],[3],[]]
    Output: [[0,1,3],[0,2,3]]
    Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
 */
var allPathsSourceTarget = (graph) => {
  results = []
  let target = graph.length - 1
  path = []
  path.push(0) // start path
  backtrack(graph, 0, path, target)
  return results
}