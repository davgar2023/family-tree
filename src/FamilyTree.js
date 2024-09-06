// src/FamilyTree.js
//const Person = require('./Person');
const Relationship = require('./Relationship');

class FamilyTree {
    constructor() {
        this.people = [];
    }

    addPerson(person) {
        if (this.people.some(p => p.name === person.name && p.birthdate.getTime() === person.birthdate.getTime())) {
            throw new Error(`Person with the same name and birthdate already exists: ${person.name}`);
        }
        this.people.push(person);
    }

    defineRelationship(person1, person2, relationshipType) {
        switch (relationshipType) {
            case Relationship.PARENT:
                person1.addChild(person2);  // person1 is the parent of person2
                person2.addParent(person1); // person2 is the child of person1
                break;
            case Relationship.SPOUSE:
                person1.addSpouse(person2); // Reciprocal relationship
                break;
            case Relationship.SIBLING:
                person1.addSibling(person2); // Reciprocal relationship
                break;
            case Relationship.GRANDPARENT:
                person1.addGrandchild(person2);  // person1 is the grandparent of person2
                person2.addGrandparent(person1); // person2 is the grandchild of person1
                break;
            // You can add more relationships here (e.g., aunt/uncle, cousin)
            default:
                throw new Error(`Unknown relationship type: ${relationshipType}`);
        }
    }

    findPersonByName(name) {
        return this.people.find(person => person.name === name);
    }

    getDescendants(person) {
        const descendants = [];

        const findDescendantsRecursive = (currentPerson) => {
            for (const child of currentPerson.children) {
                descendants.push(child);
                findDescendantsRecursive(child);
            }
        };

        findDescendantsRecursive(person);
        return descendants;
    }
}

module.exports = FamilyTree;
