const main = document.getElementById("main");

var aluno1 = new Object();
aluno1.ra = "00001234";
aluno1.nome = "Ken";
main.innerHTML += `<br>Ra: ${aluno1.ra}, nome: ${aluno1.nome}`;

//usando {}
var aluno2 = {};
aluno2.ra = "1234";
aluno2["nome"] = "Mayara";

main.innerHTML += `<br>Ra: ${aluno2.ra}, nome: ${aluno2.nome}`;

var aluno3 = {
  ra: "1234567",
  nome: "Gabriel",
};

main.innerHTML += `<br>Ra: ${aluno3.ra}, nome: ${aluno3.nome}`;

function Aluno(ra, nome) {
  this.ra = ra;
  this.nome = nome;

  this.MostraDados = function () {
    return `Ra: ${this.ra}, nome: ${this.nome}`;
  };
}

var aluno4 = new Aluno("123", "Jaquiel");
main.innerHTML += `<br>${aluno4.MostraDados()}`;

var aluno5 = {};
var nome_propriedade = "ra";
aluno5[nome_propriedade] = "123";
aluno5["nome"] = "Vitor";
main.innerHTML += `<br>Ra: ${aluno5.ra}, nome: ${aluno5.nome}`;

function Aluno2() {
  var ra;
  var nome;

  this.setRa = function (value) {
    this.ra = value;
  };
  this.getRa = function () {
    return this.ra;
  };
  this.setNome = function (value) {
    this.nome = value;
  };
  this.getNome = function () {
    return this.nome;
  };
}

var aluno6 = new Aluno2();
aluno6.setRa("123456");
aluno6.setNome("Igor");

main.innerHTML += `<br>Ra: ${aluno6.getRa()}, nome: ${aluno6.getNome()}`;
