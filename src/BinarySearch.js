import { Node } from './Node.js';
class BinarySearch {
    constructor() {
        this.root = null;
    }

    add(value) {
        const currentRoot = this.root;
        if (!currentRoot) {
            this.root = new Node(value);
            return;
        } else {
            const searchTree = (node) => {
                if (value < node.number) {
                    if (node.left === null) {
                        node.left = new Node(value);
                        return;
                    } else if (node.number !== null) {
                        return searchTree(node.left);
                    }
                } else if (value > node.number) {
                    if (node.right === null) {
                        node.right = new Node(value);
                        return;
                    } else if (node.number !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            }
            searchTree(currentRoot);
        }
    }
}

export default BinarySearch;