// Factory fn that represents the full linked list
const LinkedList = () => {
    let headNode = null;

    // Adds a new node to the end of the list
    const append = (value) => {};

    // Adds a new node to the start of the list
    const prepend = () => {};

    // Returns the total number of nodes in the list
    const size = () => {};

    // Returns the first node in the list
    const head = () => {};

    // Returns the last node of the list
    const tail = () => {};

    // Returns boolean value based on passed value
    const contains = (value) => {};

    // Returns the index of the node containing value, or null if not found
    const find = () => {};

    // Represent LinkedList objects as strings
    const toString = () => {};

    return { append, prepend, size, head, tail, contains, find, toString };
};

// Factory containing a value and a link to the next node
const Node = (value, link) => {
    return {
        value: value || null,
        link: link || null,
    };
};

const nodeList = LinkedList();
nodeList.append();
nodeList.append(1);
