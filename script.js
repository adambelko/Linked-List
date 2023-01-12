// Factory fn that represents the full linked list
const LinkedList = () => {
    let head = null;
    let nodeCount = 0;

    // Adds a new node to the end of the list
    const append = (value) => {
        const newNode = Node(value);
        if (head === null) {
            head = newNode;
        } else {
            let pointer = head;
            while (pointer.nextNode) {
                pointer = pointer.nextNode;
            }
            pointer.nextNode = newNode;
        }
        nodeCount++;
    };

    // Adds a new node to the start of the list
    const prepend = (value) => {
        const newNode = Node(value, head);
        head = newNode;
        nodeCount++;
    };

    // Returns the total number of nodes in the list
    const size = () => nodeCount;

    // Returns the first node in the list
    const headNode = () => head;

    // Returns the last node of the list
    const tailNode = () => {
        let pointer = head;
        while (pointer.nextNode) {
            pointer = pointer.nextNode;
        }
        return pointer;
    };

    // Returns boolean value based on passed value
    const contains = (value) => {
        let pointer = head;
        while (pointer) {
            if (pointer.value === value) return true;
            pointer = pointer.nextNode;
        }
        return false;
    };

    // Returns the index of the node containing value, or null if not found
    const findIndex = (value) => {
        let index = 1;
        let pointer = head;
        while (pointer) {
            if (pointer.value === value) {
                return index;
            } else {
                pointer = pointer.nextNode;
                index++;
            }
        }
        return null;
    };

    // Represent LinkedList objects as strings
    const toString = () => {
        let pointer = head;
        let string = "";
        while (pointer) {
            string += `( ${pointer.value} ) --> `;
            pointer = pointer.nextNode;
        }
        return `${string}null`;
    };

    return {
        append,
        prepend,
        size,
        headNode,
        tailNode,
        contains,
        findIndex,
        toString,
    };
};

// Factory containing a value and a pointer to the next node
const Node = (value, nextNode) => {
    return {
        value: value || null,
        nextNode: nextNode || null,
    };
};

const list = LinkedList();
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.prepend(1);

console.log(list.size());
console.log(list.headNode());
console.log(list.tailNode());
console.log(list.contains(16));
console.log(list.findIndex(2));
console.log(list.toString());
