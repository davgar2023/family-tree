// src/test/descendants.test.js
const assert = require('assert');
const Person = require('../Person');
const FamilyTree = require('../FamilyTree');
const Relationship = require('../Relationship');

describe('FamilyTree Relationship Tests', () => {

    let familyTree;
    let john, mary, alice, linda;

    // Setup the family tree and persons for each test
    beforeEach(() => {
        familyTree = new FamilyTree();
        john = new Person('John', '1950-01-01');
        mary = new Person('Mary', '1980-06-15');
        alice = new Person('Alice', '2010-03-05');
        linda = new Person('Linda', '1981-04-10');

        familyTree.addPerson(john);
        familyTree.addPerson(mary);
        familyTree.addPerson(alice);
        familyTree.addPerson(linda);
    });

    it('should add parent-child relationship correctly', () => {
        familyTree.defineRelationship(john, mary, Relationship.PARENT);
        familyTree.defineRelationship(mary, alice, Relationship.PARENT);

        assert.strictEqual(john.children.length, 1);
        assert.strictEqual(john.children[0].name, 'Mary');
        assert.strictEqual(mary.children.length, 1);
        assert.strictEqual(mary.children[0].name, 'Alice');
    });

    it('should correctly retrieve descendants', () => {
        familyTree.defineRelationship(john, mary, Relationship.PARENT);
        familyTree.defineRelationship(mary, alice, Relationship.PARENT);

        const descendants = familyTree.getDescendants(john);
        assert.strictEqual(descendants.length, 2);  // Mary and Alice
        assert.strictEqual(descendants[0].name, 'Mary');
        assert.strictEqual(descendants[1].name, 'Alice');
    });

    it('should add spouse relationship correctly', () => {
        familyTree.defineRelationship(john, linda, Relationship.SPOUSE);

        assert.strictEqual(john.spouse.name, 'Linda');
        assert.strictEqual(linda.spouse.name, 'John');
    });

    it('should add sibling relationship correctly', () => {
        familyTree.defineRelationship(mary, linda, Relationship.SIBLING);

        assert.strictEqual(mary.siblings.length, 1);
        assert.strictEqual(mary.siblings[0].name, 'Linda');
        assert.strictEqual(linda.siblings.length, 1);
        assert.strictEqual(linda.siblings[0].name, 'Mary');
    });

    it('should not allow duplicate parent-child relationship', () => {
        familyTree.defineRelationship(john, mary, Relationship.PARENT);

        assert.throws(() => {
            familyTree.defineRelationship(john, mary, Relationship.PARENT);
        }, /already a child/);
    });

    it('should not allow duplicate spouse relationship', () => {
        familyTree.defineRelationship(john, linda, Relationship.SPOUSE);

        assert.throws(() => {
            familyTree.defineRelationship(john, linda, Relationship.SPOUSE);
        }, /already married/);
    });

    it('should correctly handle grandparent relationship', () => {
        familyTree.defineRelationship(john, mary, Relationship.PARENT);
        familyTree.defineRelationship(mary, alice, Relationship.PARENT);

        familyTree.defineRelationship(john, alice, Relationship.GRANDPARENT);

        assert.strictEqual(john.grandchildren.length, 1);
        assert.strictEqual(john.grandchildren[0].name, 'Alice');
        assert.strictEqual(alice.grandparents.length, 1);
        assert.strictEqual(alice.grandparents[0].name, 'John');
    });

});

