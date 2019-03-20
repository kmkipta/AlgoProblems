function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// bfs
function traverse(root) {
    if(!root) return [];
    var data = [[]];
    var queue = [root, 'x']; // push x as tail
    while(queue.length > 1){
        let curr_node = queue.shift(); // popfront
        if(curr_node !== 'x'){
            if(curr_node.left) queue.push(curr_node.left);
            if(curr_node.right) queue.push(curr_node.right);
            data[data.length-1].push(curr_node.val);
        } else {
            data.push([]);
            queue.push('x');
        }
    }
    let new_data = [];
    let iterator = 1;
    for(let i = 0; i < data.length; i++){
        if(data[i].length !== 0){
            if(iterator%2 === 0){
                new_data.push(data[i].reverse())
            } else {
                new_data.push(data[i]);
            }
            iterator++;
        } 
    }
    return new_data;
};
