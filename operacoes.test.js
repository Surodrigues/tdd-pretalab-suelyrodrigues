const operacoes = require('./soma.js')

const soma = operacoes.soma()

describe('Soma', () => {
  it('deverá somar dois números inteiros', () => {
    //seu código aqui
    expect(soma(2,2)).toBe(4) 
  })
})