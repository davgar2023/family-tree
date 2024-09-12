# Family Tree Application

A simple family tree application built using Node.js, implementing class-based structures for managing people, relationships, and family tree traversal. The project includes features such as adding family members, defining relationships (e.g., parent, child, spouse, sibling), and retrieving descendants of a specific family member. It follows a test-driven approach with several unit tests to ensure correctness.

## Features
- Add family members with basic details (name, birthdate, and other optional details).
- Define different types of relationships (parent-child, spouse, sibling, grandparent, grandchild).
- Retrieve descendants for any person in the family tree.
- Prevent duplicate relationships (e.g., the same parent-child or spouse relationship can't be added twice).
- Unit tests for relationship management and descendant retrieval.

## Directory Structure

```plaintext
family-tree/
    ├── src/
    │        ├── Person.js  
    │        ├── Relationship.js 
    │        ├── FamilyTree.js 
    │        ├── index.js  
    │        └── __test__/
    │                └── descendants.test.js 
    ├── package.json 
    └── README.md


## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/davgar2023/family-tree.git
cd family-tree


### 2. Install dependencies

```bash
npm install


3. Run the Application

```bash
node src/index.js

Running Tests

npm test


Test Output:

FamilyTree Relationship Tests
    ✓ should add parent-child relationship correctly
    ✓ should correctly retrieve descendants
    ✓ should add spouse relationship correctly
    ✓ should add sibling relationship correctly
    ✓ should not allow duplicate parent-child relationship
    ✓ should not allow duplicate spouse relationship
    ✓ should correctly handle grandparent relationship
