// src/Person.js
class Person {
    constructor(name, birthdate, details = {}) {
        this.name = name;
        this.birthdate = new Date(birthdate);
        this.details = details;
        this.parents = [];
        this.children = [];
        this.spouse = null;
        this.siblings = [];
        this.grandparents = [];
        this.grandchildren = [];
    }

    addParent(parent) {
        if (this.parents.includes(parent)) {
            throw new Error(`${parent.name} is already a parent of ${this.name}`);
        }
        this.parents.push(parent);
    }

    addChild(child) {
        if (this.children.includes(child)) {
            throw new Error(`${child.name} is already a child of ${this.name}`);
        }
        this.children.push(child);
    }

    addSpouse(spouse) {
        if (this.spouse) {
            throw new Error(`${this.name} is already married to ${this.spouse.name}`);
        }
        this.spouse = spouse;
        spouse.spouse = this; // reciprocal relationship
    }

    addSibling(sibling) {
        if (this.siblings.includes(sibling)) {
            throw new Error(`${sibling.name} is already a sibling of ${this.name}`);
        }
        this.siblings.push(sibling);
        sibling.siblings.push(this); // reciprocal relationship
    }

    addGrandparent(grandparent) {
        if (this.grandparents.includes(grandparent)) {
            throw new Error(`${grandparent.name} is already a grandparent of ${this.name}`);
        }
        this.grandparents.push(grandparent);
    }

    addGrandchild(grandchild) {
        if (this.grandchildren.includes(grandchild)) {
            throw new Error(`${grandchild.name} is already a grandchild of ${this.name}`);
        }
        this.grandchildren.push(grandchild);
    }

    updateDetails(newDetails) {
        this.details = { ...this.details, ...newDetails };
    }
}

module.exports = Person;
