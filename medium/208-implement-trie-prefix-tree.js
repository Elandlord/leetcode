class Node {
    constructor(ch) {
        this.val = ch;
        this.children = new Map();
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let index = this.root;
        for (let ch of word) {
            const node = index.children.get(ch) || new Node(ch);
            index.children.set(ch, node);
            index = node;
        }
        index.isEnd = true;
    }

    search(word) {
        let index = this.root;
        for (let ch of word) {
            index = index.children.get(ch);
            if (!index) return false;
        }
        return index.isEnd === true;
    }

    startsWith(prefix) {
        let index = this.root;
        for (let ch of prefix) {
            index = index.children.get(ch);
            if (!index) return false;
        }
        return true;
    }
}
