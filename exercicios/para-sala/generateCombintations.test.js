const generateCombinations = require ("./generateCombinations")

describe("Validar o funcionamento da função generateCombinations", () => {
    const mockedCombination = [
        'd',   'i',
        'di',  'a',
        'da',  'ia',
        'dia'
      ]

    test("Verificar se o parâmetro recebido é vazio", () => {
        expect(generateCombinations("")).toEqual([])
    })

    test("Verificar as combinações por tamanho",() =>{
        expect(generateCombinations("dia")).toHaveLength(7)
    })

    test("Verificar as combinações por array/mock", () => {
        expect(generateCombinations("dia")).toEqual(mockedCombination)
    })
})