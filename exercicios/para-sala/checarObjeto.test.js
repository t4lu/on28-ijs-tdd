const {allKeys, isObject} = require("./checarObjeto")

describe("Validar o funcionamento das funções presentes no arquivo checarObjeto", () => {
    //recomendável quebrar o teste em partes, sendo assim:

    //se estamos retornando as chaves (função allKeys que recebe um objeto).
    test("Verificar se a função allKeys retorna as chaves do objeto", () => {
        //implementação de um mock, para testar:
        const pessoa = {
            nome:"",
            sobrenome:""
        }

        const pessoaArray = ['nome', 'sobrenome']

        // sintaxe para o resultado esperado:
        expect(allKeys(pessoa)).toEqual(pessoaArray)

    })

    //se o parâmetro não for um objeto, retorna o array vazio: []
    test("Verificar se o parâmetro recebido na função não é um objeto; retorna um array vazio", () => {
        expect(allKeys("Aqui é um objeto string")).toEqual([])
    })

    //se o parametro é um objeto (função isObject)
    test("Verificar se o parâmetro recebido na função isObjetc é um objeto", () => {
        expect(isObject(pessoa)).toEqual(true)
    })
})