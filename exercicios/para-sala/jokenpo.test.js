const jokenpo = require("./jokenpo")

describe("Testes da função jokenpo", () => {

    test("Verificar se deu empate", () => {
        expect(jokenpo("pedra","pedra")).toEqual("Empate!")
        expect(jokenpo("tesoura","tesoura")).toEqual("Empate!")
        expect(jokenpo("papel","papel")).toEqual("Empate!")
    })

    test("Verificar se o jogador 1 ganhou", () => {
        expect(jokenpo("pedra","tesoura")).toEqual("Jogador 1 venceu!")
        expect(jokenpo("tesoura","papel")).toEqual("Jogador 1 venceu!")
        expect(jokenpo("papel","pedra")).toEqual("Jogador 1 venceu!")
    })

    test("Verificar se o jogador 2 ganhou", () => {
        expect(jokenpo("tesoura","pedra")).toEqual("Jogador 2 venceu!")
        expect(jokenpo("papel","tesoura")).toEqual("Jogador 2 venceu!")
        expect(jokenpo("pedra","papel")).toEqual("Jogador 2 venceu!")
    })
})