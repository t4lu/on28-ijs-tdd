const convertCelsiusToFahrenheit = require('./conversorTemp')

test("Validar se a conversão de Celcius para Fahrenheit funciona", () => {
    expect(convertCelsiusToFahrenheit(35)).toEqual(95);
})

test("linha de um novo teste", () => {
    expect(convertCelsiusToFahrenheit(40)).toBe(104);
})