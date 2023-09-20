const Produto = require('./Produto')

describe("Validar o funcionamento dos métodos da classe Produto", () => {
    /* A classe produto tem a variável "itens" sendo manipulada (no console.log hehe).
    Pra aplicar isso ao teste, é necessário criá-la e instanciar o método beforeEach com os valores mockados.
    Isso significa que esse método vai reiniciar os valores, em cada um dos testes.*/

    let itens
    beforeEach(() => {
        itens = new Produto("Camiseta Bruno Mars", 150, 5)
    })

    test("Verificar o método consultar estoque", () => {
        expect(itens.consultarEstoque()).toEqual(5)
    })
    test("Verificar o método adicionar ao estoque", () => {
        expect(itens.adicionarItens(2)).toEqual(7)
    })
    test("Verificar o método remover do estoque", () => {
        expect(itens.removerItens(3)).toEqual(2)
    })
    test("Verificar o método remover do estoque, quando não há quantidade de produtos suficiente (erro).", () => {
        expect(() => {
            itens.removerItens(8)
        }).toThrow("Estoque insuficiente: a quantidade solicitada é maior que a quantidade de produtos disponível.")
    })
})