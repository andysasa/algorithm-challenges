// return array of all obj with matching name value pairs
function whatIsInAName(collection, source) {
    // declare variable to store property names in source
    let sourceKey = Object.keys(source);

    // filter through each obj in collection
    // for every sourceKey property name that's also present in each one of collection's obj
    // and for the property name value pairs to match
    return collection.filter( 
        obj => {return sourceKey.every(
            key => {return obj.hasOwnProperty(key) && obj[key] === source[key]
            });
        });
    
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// → [{ first: "Tybalt", last: "Capulet" }]
