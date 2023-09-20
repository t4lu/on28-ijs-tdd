const checkEvenNumber = require("./numeroPar");

describe("Valida a funçao de número par", () => {

    test("Verificar se é um número par", () => {
        expect(checkEvenNumber(2)).toEqual("2 é um número par")

    })

    test("Verificar se é um número ímpar", () => {
        expect(checkEvenNumber(3)).toEqual("3 é um número ímpar")
    })

    test("Verificar se o input é um número", () => {
        expect(checkEvenNumber("batata")).toEqual("batata não é um número")
    })
}) 