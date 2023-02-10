class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            function searchTree(nodes) {
                if (data < nodes.data) {
                    if (nodes.left === null) {
                        nodes.left = new Node(data);
                        return;
                    } else if (nodes.data !== null) {
                        return searchTree(nodes.left);
                    }
                } else if (data > nodes.data) {
                    if (nodes.right === null) {
                        nodes.right = new Node(data);
                        return;
                    } else if (nodes.data !== null) {
                        return searchTree(nodes.right);
                    }
                } else {
                    return null;
                }
            }
            searchTree(node);
        }
    }

    print() {
        return this.root;
    }
}

export { Node, BinarySearchTree };