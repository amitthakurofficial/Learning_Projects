class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;

    }
}



class Linked {
    constructor() {
        this.head = null;
        this.size = 0;
        // console.log("constructer called")
    }

    // insert first node
    insertFirstNode = (data) => {
        console.log("heade value",this.head)
        this.head = new Node(data, this.head)
    }

}

const obj = new Linked();
obj.insertFirstNode(100);
obj.insertFirstNode(200);

console.log(obj)