function car(pair) {
  return pair.second;   
}

function cons(a, b) {
  var pair = {first: a, second: b};
  return pair;
}

console.log(car(cons(3, 4)));