class Queue {

    constructor() {
        this.items = []
    }

    enqueue(item) {
        this.items = [ item, ...this.items]
    }

    enqueues(items) {
        items.forEach(item => {
            this.items = [ item, ...this.items]
        })
    }

    dequeue(arg) {
        if (this.items.length <= 0) return
        this.items[this.items.length - 1](arg)
        this.items.pop()
    }
    
    dequeues() {
        this.items.forEach(item => {
            if (this.items.length <= 0) return
            this.items[this.items.length - 1]()
            this.items.pop()
        })
    }

    print() {
        console.log(this.items)
    }

}

export default Queue

// F(n) sera une fonction qui aura pour role de remplir la queue d'un array de fonction qui vont faire bouger le vaissaux

/*

actions := [ () => move , () => turn , () => move ]

F1 (queue, actions):= actions.forEach(action => {
    queue.enqueue(action)
})



*/