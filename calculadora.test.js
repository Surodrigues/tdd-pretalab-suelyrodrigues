const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    //Seu código aqui
    const calculadora = new Calculadora()
    expect(calculadora.soma(2,2)).toEqual(4)
    
  })

  it('Deverá retornar a subtração de dois números', () => {
    //Seu código aqui
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    //Seu código aqui
  })

  it('Deverá retornar a divisao entre dois números', () => {
    //Seu código aqui
  })
})