class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  // Implementar aqui
  size() {
    return this.elements.length
  }

  add(n) {
    this.elements.push(n)
  }

  peek() {
    return this.elements[0]
  }

  dequeue() {
    this.elements.shift()
  }
}

module.exports = Queue