// src/index.js
const Person = require('./Person');
const FamilyTree = require('./FamilyTree');
const Relationship = require('./Relationship');

const familyTree = new FamilyTree();

const john = new Person('John', '1950-01-01');
const mary = new Person('Mary', '1980-06-15');
const alice = new Person('Alice', '2010-03-05');
const linda = new Person('Linda', '1981-04-10');

familyTree.addPerson(john);
familyTree.addPerson(mary);
familyTree.addPerson(alice);
familyTree.addPerson(linda);

// Define parent-child relationships
familyTree.defineRelationship(john, mary, Relationship.PARENT);
familyTree.defineRelationship(mary, alice, Relationship.PARENT);

// Define spouse relationships
familyTree.defineRelationship(john, linda, Relationship.SPOUSE);

// Define sibling relationship
familyTree.defineRelationship(mary, linda, Relationship.SIBLING);

// Find descendants of John
const johnDescendants = familyTree.getDescendants(john);
console.log(`John's descendants: ${johnDescendants.map(p => p.name).join(', ')}`);

// Check John's spouse
console.log(`${john.name}'s spouse is ${john.spouse.name}`);
