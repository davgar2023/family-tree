
/**
 * Class representing a person in the family tree.
 */
class Person {
    /**
     * Create a person.
     * @param {string} name - The name of the person.
     * @param {string|Date} birthdate - The birthdate of the person.
     * @param {object} [details={}] - Additional details about the person (optional).
     */
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

    /**
     * Adds a parent to the person.
     * @param {Person} parent - The parent to add.
     * @throws {Error} If the parent has already been added.
     */
    addParent(parent) {
        if (this.parents.includes(parent)) {
            throw new Error(`${parent.name} is already a parent of ${this.name}`);
        }
        this.parents.push(parent);
    }

    /**
     * Adds a child to the person.
     * @param {Person} child - The child to add.
     * @throws {Error} If the child has already been added.
     */
    addChild(child) {
        if (this.children.includes(child)) {
            throw new Error(`${child.name} is already a child of ${this.name}`);
        }
        this.children.push(child);
    }

    /**
     * Adds a spouse to the person.
     * @param {Person} spouse - The spouse to add.
     * @throws {Error} If the person is already married to someone.
     */
    addSpouse(spouse) {
        if (this.spouse) {
            throw new Error(`${this.name} is already married to ${this.spouse.name}`);
        }
        this.spouse = spouse;
        spouse.spouse = this; // reciprocal relationship
    }

    /**
     * Adds a sibling to the person.
     * @param {Person} sibling - The sibling to add.
     * @throws {Error} If the sibling has already been added.
     */
    addSibling(sibling) {
        if (this.siblings.includes(sibling)) {
            throw new Error(`${sibling.name} is already a sibling of ${this.name}`);
        }
        this.siblings.push(sibling);
        sibling.siblings.push(this); // reciprocal relationship
    }

    /**
     * Adds a grandparent to the person.
     * @param {Person} grandparent - The grandparent to add.
     * @throws {Error} If the grandparent has already been added.
     */
    addGrandparent(grandparent) {
        if (this.grandparents.includes(grandparent)) {
            throw new Error(`${grandparent.name} is already a grandparent of ${this.name}`);
        }
        this.grandparents.push(grandparent);
    }

    /**
     * Adds a grandchild to the person.
     * @param {Person} grandchild - The grandchild to add.
     * @throws {Error} If the grandchild has already been added.
     */
    addGrandchild(grandchild) {
        if (this.grandchildren.includes(grandchild)) {
            throw new Error(`${grandchild.name} is already a grandchild of ${this.name}`);
        }
        this.grandchildren.push(grandchild);
    }

    /**
     * Updates the additional details of the person.
     * @param {object} newDetails - The new details to update.
     */
    updateDetails(newDetails) {
        this.details = { ...this.details, ...newDetails };
    }
}

module.exports = Person;
