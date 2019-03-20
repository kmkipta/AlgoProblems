var test_arr = [10, 15, 3, 7];
var target = 17;

// bf soln On^2 runtime
function two_sum (arr, target) {
    var flag = false;
    arr.forEach(e => {
        arr.forEach(f => {
           if ((e + f) === target) {
             flag = true;   
           }
        });
    });
    return flag;
}

// set soln On O(1) access
function two_sum_set (arr, target) {
    var seen = new Set([]);
    var flag = false;
    arr.forEach(e => {
        var toFind = target - e; 
        if (seen.has(toFind)) {
            flag = true;
        }
        seen.add(e);
    });
    return flag;
}

console.log(two_sum_set(test_arr, target));