const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

function filterBirthYear() {
    return inventors.filter(
        inventor => {
            if (inventor.year >= 1500 && inventor.year < 1600) return inventor;
        }
    );
}
console.log('1.', filterBirthYear());

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
function mapFirstLast() {
    return inventors.map(inventor => `${inventor.first} ${inventor.last}`);
}
console.log('2.', mapFirstLast());

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
function sortBirthdate() {

    return inventors.concat().sort(
        (inventorA, inventorB) => inventorA.year - inventorB.year
    );
}
console.log('3.', sortBirthdate());

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
function totalAge() {
    return inventors.reduce((total, current) => total + (current.passed - current.year), 0);

    /*const ages = [];
    for (inventor of inventors) {
        const age = inventor.passed - inventor.year;
        ages.push(age);
    }

    return ages.reduce((total, current)  => total + current, 0);*/
}
console.log('4. ' + totalAge() + ' years');

// 5. Sort the inventors by years lived youngest to oldest
function sortAge() {
    return inventors.sort((inventorA, inventorB) => {
        let lastInventor = inventorA.passed - inventorA.year;
        const nextInventor = inventorB.passed - inventorB.year;
        return lastInventor > nextInventor ? 1 : -1});

    /*
    const inventorsList = [].concat(inventors);
    for (inventor of inventorsList) {
        inventor.age = inventor.passed - inventor.year;
    }

    return inventorsList.sort((inventorA, inventorB) => inventorA.age - inventorB.age);*/
}
console.log('5.', sortAge());

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/* on-page console code
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes('de'));*/

// modified list
function deInParisBoulevards() {
    const boulevards = ['Boulevards of Paris', 'City walls of Paris', 'Thiers wall', 'Wall of Charles V', 'Wall of Philip II Augustus', 'City gates of Paris', 'Boulevard de l\'Amiral-Bruix', 'Boulevard des Capucines', "Boulevard du Général-d'Armée-Jean-Simon", 'Boulevard des Italiens'];

    return boulevards.filter(streetName => streetName.includes('de'));
}
console.log('6.', deInParisBoulevards());

// 7. sort Exercise
// Sort the people alphabetically by last name
function sortLastName() {
    return inventors.map(inventor => inventor.last).sort();
}
console.log('7.', sortLastName());

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const countedData = data.reduce(
    (allData, currData) => {
        if (currData in allData) {
            allData[currData]++
        }
        else {
            allData[currData] = 1;
        }
        return allData;
    }, {});
console.log('8.', countedData);

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
const countedPeople = people.reduce(
    (allPeople, person) => {
        if (!allPeople[person]){
            allPeople[person] = 1;
        }
        else {
            allPeople[person]++;
        }
        return allPeople;
    }, {}
)
console.log('8.', countedPeople);



