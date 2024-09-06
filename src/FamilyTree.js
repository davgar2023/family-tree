const Relationship = require('./Relationship');

class FamilyTree {
    constructor() {
        /**
         * @property {Array} people - A list of people in the family tree.
         */
        this.people = [];
    }

    /**
     * Adds a new person to the family tree.
     *
     * @param {Person} person - The person to add to the family tree.
     * @throws {Error} If a person with the same name and birthdate already exists.
     */
    addPerson(person) {
        if (this.people.some(p => p.name === person.name && p.birthdate.getTime() === person.birthdate.getTime())) {
            throw new Error(`Person with the same name and birthdate already exists: ${person.name}`);
        }
        this.people.push(person);
    }

    /**
     * Defines a relationship between two people in the family tree.
     *
     * @param {Person} person1 - The first person in the relationship (e.g., the parent, spouse, etc.).
     * @param {Person} person2 - The second person in the relationship (e.g., the child, spouse, etc.).
     * @param {string} relationshipType - The type of relationship (e.g., 'parent', 'spouse', 'sibling').
     * @throws {Error} If an unknown relationship type is provided.
     */
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
            default:
                throw new Error(`Unknown relationship type: ${relationshipType}`);
        }
    }

    /**
     * Finds a person in the family tree by their name.
     *
     * @param {string} name - The name of the person to search for.
     * @returns {Person|null} - The person found, or null if no person with that name exists.
     */
    findPersonByName(name) {
        return this.people.find(person => person.name === name);
    }

    /**
     * Retrieves all descendants of a given person in the family tree.
     *
     * @param {Person} person - The person whose descendants are to be found.
     * @returns {Array<Person>} - A list of descendants.
     */
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

