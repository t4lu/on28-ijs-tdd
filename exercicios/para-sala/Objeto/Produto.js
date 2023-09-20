/* Instruções:
-> A classe produto deve receber um nome, preço e quantidade no estoque;
-> Deve ser possível consultar, adicionar ou remover itens do estoque;
-> Deve resultar erro, quando a quantidade de produtos for maior que a quantidade disponível no estoque;
*/

class Produto {
    constructor(nome, preco, qtdEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.qtdEstoque = qtdEstoque
    }

    //métodos da classe:
    consultarEstoque() {
        return this.qtdEstoque
    }
    adicionarItens(quantidade) {
        this.qtdEstoque += quantidade
        return this.consultarEstoque() //retorna o valor atualizado
    }
    removerItens(quantidade) {
        if (quantidade > this.qtdEstoque) {
            throw new Error("Estoque insuficiente: a quantidade solicitada é maior que a quantidade de produtos disponível.")
        } else {
            this.qtdEstoque -= quantidade
            return this.consultarEstoque() //retorna o valor atualizado
        }
    }
}

/* para "testar" localmente, no console:
const itens = new Produto("Camiseta Bruno Mars", 150, 5)

console.log(itens)
console.log(itens.consultarEstoque())

console.log(itens.adicionarItens(2)) //retorna undefined. por quê? -> pq o retorno estava indefinido no método, dãrt kkkkkk
console.log(itens) //atualiza para 7


console.log(itens.removerItens(3)) //retorna undefined. por quê? -> idem linha 38kkkkkk
console.log(itens)//retorna 4

console.log(itens.removerItens(8))
console.log(itens)//retorna o erro esperado.
*/
module.exports = Produto