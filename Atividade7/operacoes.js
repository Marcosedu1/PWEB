var num1 = parseFloat(prompt("Digite o primeiro número"));
var num2 = parseFloat(prompt("Digite o segundo número"));

var soma = num1 + num2;
var subtracao = num1 - num2;
var produto = num1 * num2;
var divisao = num1 / num2;
var resto = num1 % num2;

alert(
  `Resultado soma: ${soma.toFixed(2)}\nResultado subtração: ${subtracao.toFixed(
    2
  )}\nResultado produto: ${produto.toFixed(
    2
  )}\nResultado divisão: ${divisao.toFixed(
    2
  )}\nResultado resto da divisão: ${resto.toFixed(2)}`
);
