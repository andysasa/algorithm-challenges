// class Group has
// constructor to create an empty group
// add adds a value to the group only if it isn't already a member
// delete removes its argument from the group if it was a member
// has returns a boolean value indicating if its argument is a membeer of the group
// static from method takes an iterable obj as argument and creates a group that contains all the values
class Group {
    constructor() {
        this.members = [];
    }

    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }

    delete(value) {
        if(this.members.includes(value)) {
            this.members.splice(this.members.indexOf(value), 1);
        }
    }

    has(value) {
      return this.members.includes(value);
    }

    static from(collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }

        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false