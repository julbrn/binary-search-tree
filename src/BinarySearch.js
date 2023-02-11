import { Node } from './Node.js';
class BinarySearch {
    constructor() {
        this.root = null;
    }

    add(number) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(number);
            return;
        } else {
            function searchTree(node) {
                if (number < node.number) {
                    if (node.left === null) {
                        node.left = new Node(number);
                        console.log(number);
                        return;
                    } else if (node.number !== null) {
                        return searchTree(node.left);
                    }
                } else if (number > node.number) {
                    if (node.right === null) {
                        node.right = new Node(number);
                        console.log(number);
                        return;
                    } else if (node.number !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            }
            searchTree(node);
        }
    }

    render() {
        return this.root;
    }
}

export { BinarySearch };