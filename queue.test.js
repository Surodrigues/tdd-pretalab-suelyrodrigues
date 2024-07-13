const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    // Seu código aqui
    const queue = new Queue()
    expect(queue.size()).toEqual(0)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
   // Seu código aqui
   const queue = new Queue()
   expect(queue.add()).toEqual(queue.length)
  })

  it('Deve escolher o primeiro item da fila', () => {
    // Seu código aqui
    const queue = new Queue()
    expect(queue.peek()).toEqual(queue[0])
  })

  it('Deve remover o primeiro item da fila', () => {
    // Seu código aqui
    const queue = new Queue()
    expect(queue.dequeue()).toEqual(queue[0])
  })
})