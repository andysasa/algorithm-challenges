// write higher-order loop function
// take a value, a test function, an update function, and a body function
function loop(n, test, update, action) {
    for (let i = n; test(i); i = update(i)) {
        action(i);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1