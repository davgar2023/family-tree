/**
 * Class representing the types of relationships in the family tree.
 */
class Relationship {
    /**
     * @constant {string} PARENT - Represents a parent-child relationship.
     */
    static PARENT = "parent";

    /**
     * @constant {string} CHILD - Represents a child-parent relationship.
     */
    static CHILD = "child";

    /**
     * @constant {string} SPOUSE - Represents a spouse relationship.
     */
    static SPOUSE = "spouse";

    /**
     * @constant {string} SIBLING - Represents a sibling relationship.
     */
    static SIBLING = "sibling";

    /**
     * @constant {string} GRANDPARENT - Represents a grandparent-grandchild relationship.
     */
    static GRANDPARENT = "grandparent";

    /**
     * @constant {string} GRANDCHILD - Represents a grandchild-grandparent relationship.
     */
    static GRANDCHILD = "grandchild";

    /**
     * @constant {string} COUSIN - Represents a cousin relationship.
     */
    static COUSIN = "cousin";

    /**
     * @constant {string} AUNT_UNCLE - Represents an aunt or uncle relationship.
     */
    static AUNT_UNCLE = "aunt/uncle";

    /**
     * @constant {string} NIECE_NEPHEW - Represents a niece or nephew relationship.
     */
    static NIECE_NEPHEW = "niece/nephew";

    /**
     * Utility method to check if a relationship type is valid.
     *
     * @param {string} type - The relationship type to validate.
     * @returns {boolean} - Returns true if the relationship type is valid, false otherwise.
     */
    static isValidRelationship(type) {
        return Object.values(Relationship).includes(type);
    }
}

module.exports = Relationship;
