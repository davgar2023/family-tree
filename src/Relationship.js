// src/Relationship.js
class Relationship {
    static PARENT = "parent";
    static CHILD = "child";
    static SPOUSE = "spouse";
    static SIBLING = "sibling";
    static GRANDPARENT = "grandparent";
    static GRANDCHILD = "grandchild";
    static COUSIN = "cousin";
    static AUNT_UNCLE = "aunt/uncle";
    static NIECE_NEPHEW = "niece/nephew";

    // Optional utility to check if a relationship is valid
    static isValidRelationship(type) {
        return Object.values(Relationship).includes(type);
    }
}

module.exports = Relationship;
