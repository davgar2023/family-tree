# Family Tree Application

A simple family tree application built using Node.js, implementing class-based structures for managing people, relationships, and family tree traversal. The project includes features such as adding family members, defining relationships, retrieving descendants, and preventing duplicate connections.

## Features

- **Add Family Members**: Create family members with basic details (name, birthdate, and other optional details).
- **Define Relationships**: Support for different types of relationships (parent-child, spouse, sibling, grandparent, grandchild).
- **Retrieve Descendants**: Get all descendants for any person in the family tree.
- **Prevent Duplicates**: Ensure the same relationship (e.g., parent-child or spouse) cannot be added twice.
- **Comprehensive Testing**: Includes unit tests for relationship management and descendant retrieval.

## Directory Structure

```plaintext
family-tree/
├── src/
│   ├── Person.js  
│   ├── Relationship.js 
│   ├── FamilyTree.js 
│   ├── index.js  
│   └── __test__/
│       └── descendants.test.js 
├── package.json 
├── .gitignore
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/davgar2023/family-tree.git
cd family-tree
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
node src/index.js
```

## Running Tests

To execute the unit tests:

```bash
npm test
```

### Test Output Example

```
FamilyTree Relationship Tests
    ✓ should add parent-child relationship correctly
    ✓ should correctly retrieve descendants
    ✓ should add spouse relationship correctly
    ✓ should add sibling relationship correctly
    ✓ should not allow duplicate parent-child relationship
    ✓ should not allow duplicate spouse relationship
    ✓ should correctly handle grandparent relationship
```

## Usage

### Creating a Family Tree

```javascript
const FamilyTree = require('./src/FamilyTree');
const Person = require('./src/Person');

const tree = new FamilyTree();

// Add family members
const john = new Person('John Doe', '1960-01-15');
const jane = new Person('Jane Doe', '1962-03-20');
const child = new Person('Alice Doe', '1985-06-10');

tree.addPerson(john);
tree.addPerson(jane);
tree.addPerson(child);

// Define relationships
tree.addRelationship(john, child, 'parent-child');
tree.addRelationship(jane, child, 'parent-child');

// Retrieve descendants
const descendants = tree.getDescendants(john);
console.log(descendants);
```

## API Reference

### Person Class

- `Person(name, birthdate)`: Create a new person with name and birthdate.
- `name`: Get or set the person's name.
- `birthdate`: Get or set the person's birthdate.

### FamilyTree Class

- `addPerson(person)`: Add a person to the family tree.
- `addRelationship(person1, person2, type)`: Add a relationship between two people.
- `getDescendants(person)`: Get all descendants of a specific person.
- `getRelationships(person)`: Get all relationships for a specific person.

### Relationship Types

- `parent-child`: Parent-child relationship
- `spouse`: Spouse relationship
- `sibling`: Sibling relationship
- `grandparent`: Grandparent relationship
- `grandchild`: Grandchild relationship

## Project Structure

- **src/Person.js**: Defines the Person class for representing family members.
- **src/Relationship.js**: Defines the Relationship class for representing connections between people.
- **src/FamilyTree.js**: Main class managing the family tree and relationships.
- **src/index.js**: Entry point demonstrating basic usage.
- **src/__test__/descendants.test.js**: Unit tests for the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

[davgar2023](https://github.com/davgar2023)

## Support

If you have any questions or need assistance, please open an issue on the [GitHub repository](https://github.com/davgar2023/family-tree/issues).

---

**Last Updated**: 2026-09-01
