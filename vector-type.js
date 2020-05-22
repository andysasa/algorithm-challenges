// EJ ch. 6
// write a class vector in two-dimensional space tha takes x and y
// two methods, plus and minus, that return a new vector
// getter property length that computes length from (0, 0) to (x, y)
class Vec {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    plus(change) {
        return new Vec(this.x + change.x, this.y + change.y);
    }

    minus(change) {
        return new Vec(this.x - change.x, this.y - change.y);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5