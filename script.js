/*var jsonString = '{"nome":"Maria","idade":25,"cidade":"Rio de Janeiro"}';

// Convertendo a string JSON em um objeto JavaScript
var objeto = JSON.parse(jsonString);

// Acessando propriedades do objeto resultante
// console.log("Nome:", objeto.nome); // Saída: Nome: Maria
// console.log("Idade:", objeto.idade); // Saída: Idade: 25
// console.log("Cidade:", objeto.cidade); // Saída: Cidade: Rio de Janeiro
console.log(objeto) */

/*// Definindo um objeto JSON
var pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo"
};

// Convertendo o objeto JSON em uma string JSON
var pessoaString = JSON.stringify(pessoa);

// Exibindo a string JSON resultante
console.log(typeof pessoa);*/

var objeto = [{ nome: "João", idade: 30, cidade: "São Paulo" }, { nome: "João", idade: 30, cidade: "São Paulo" }];

var arrayDeObjeto = [objeto];
console.log(arrayDeObjeto);