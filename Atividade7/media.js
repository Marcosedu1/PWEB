var nome = prompt("Digite seu nome:");
var nota1 = prompt("Digite a nota 1");
var nota2 = prompt("Digite a nota 2");
var nota3 = prompt("Digite a nota 3");

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

media = (nota1 + nota2 + nota3) / 3

alert(`Nome: ${nome}\nMedia: ${media.toFixed(2)}`);