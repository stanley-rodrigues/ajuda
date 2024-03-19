const objeto = {
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "complemento": "lado ímpar",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP",
    "ibge": "3550308",
    "gia": "1004",
    "ddd": "11",
    "siafi": "7107"
};

// Obtendo uma matriz de pares chave-valor usando Object.entries()
const matrizChaveValor = Object.entries(objeto);

// Mapeando a matriz para formatá-la como um array de objetos
const arrayFormatado = matrizChaveValor.map(([chave, valor]) => {
    return { chave, valor };
});

console.log(arrayFormatado);