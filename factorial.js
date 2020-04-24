// factorial function through recursion
function factorialize(n) {
    if  (n == 1) return n;
    else return n * factorialize(n-1);
}

console.log(factorialize(5));
// → 120
