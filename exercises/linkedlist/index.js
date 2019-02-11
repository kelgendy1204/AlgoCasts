// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document


// InsertAt
// ✕ inserts a new node with data at the 0 index when the list is empty
// ✕ inserts a new node with data at the 0 index when the list has elements (1ms)
// ✕ inserts a new node with data at a middle index
// ✕ inserts a new node with data at a last index
// ✕ insert a new node when index is out of bounds (1ms)
// ForEach
// ✕ applies a transform to each node
// for...of loops
// ✕ works with the linked list
// ✕ for...of works on an empty list (7ms)

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let size = 0;
        let currentNode = this.head;
        if(currentNode) {
            size = 1;
            while(currentNode.next) {
                size++;
                currentNode = currentNode.next;
            }
        }
        return size;
    }

    getFirst(data) {
        return this.head;
    }

    getLast() {
        if(!this.head) {
            return null;
        }
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    removeFirst() {
        this.head = this.head.next;
    }

    removeLast() {
        if(!this.head) {
            return;
        }

        if(!this.head.next) {
            return this.removeFirst();
        }

        let currentNode = this.head;
        let previousNode = null;
        while(currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
    }

    clear() {
        this.head = null;
    }

    insertLast(data) {
        const last = this.getLast();
        if(last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        if(!this.head) {
            return null;
        }

        let count = 0;
        let currentNode = this.head;
        while(currentNode) {
            if(count === index) {
                return currentNode;
            }
            currentNode = currentNode.next;
            count++;
        }
        return null;
    }

    removeAt(index) {
        const currentNode = this.getAt(index);
        if(!currentNode) {
            return;
        }

        const previousNode = this.getAt(index - 1);
        if(!previousNode) {
            this.head = this.head.next;
            return;
        }

        const nextNode = this.getAt(index + 1);
        previousNode.next = nextNode;
    }

    insertAt(data, index) {
        const newNode = new Node(data);
        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        if(index >= this.size()) {
            const latestNode = this.getLast();
            latestNode.next = newNode;
            return;
        }

        const previousNode = this.getAt(index - 1);
        const nextNode = this.getAt(index);
        previousNode.next = newNode;
        newNode.next = nextNode;
        return;
    }

    forEach(callback) {
        let currentNode = this.head;
        while(currentNode) {
            callback(currentNode);
            currentNode = currentNode.next;
        }
    }

    *[Symbol.iterator]() {
        let currentNode = this.head;
        while(currentNode) {
            yield currentNode;
            currentNode = currentNode.next;
        }
    }
}

module.exports = { Node, LinkedList };
