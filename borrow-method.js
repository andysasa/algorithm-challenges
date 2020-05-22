// call hasOwnProperty when obj already has property named "hasOwnProperty"
let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));