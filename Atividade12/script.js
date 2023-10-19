function calcularArea() {
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (!isNaN(base) && !isNaN(altura)) {
    const area = base * altura;
    document.getElementById(
      "resultadoRetangulo"
    ).innerHTML = `Área do Retângulo: ${area}`;
  } else {
    alert("Por favor, insira valores numéricos para base e altura.");
  }
}

const tipoContaSelect = document.getElementById("tipoConta");
const correnteCampos = document.getElementById("correnteCampos");
const poupancaCampos = document.getElementById("poupancaCampos");

tipoContaSelect.addEventListener("change", function () {
  if (tipoContaSelect.value === "corrente") {
    correnteCampos.style.display = "block";
    poupancaCampos.style.display = "none";
  } else if (tipoContaSelect.value === "poupanca") {
    correnteCampos.style.display = "none";
    poupancaCampos.style.display = "block";
  } else {
    correnteCampos.style.display = "none";
    poupancaCampos.style.display = "none";
  }
});

function Conta(nome, banco, numero, saldo) {
  this.nome = nome;
  this.banco = banco;
  this.numero = numero;
  this.saldo = saldo;

  this.setNome = function (value) {
    this.nome = value;
  };

  this.getNome = function () {
    return this.nome;
  };

  this.setBanco = function (value) {
    this.banco = value;
  };

  this.getBanco = function () {
    return this.banco;
  };

  this.setNumero = function (value) {
    this.numero = value;
  };

  this.getNumero = function () {
    return this.numero;
  };

  this.setSaldo = function (value) {
    this.saldo = value;
  };

  this.getSaldo = function () {
    return this.saldo;
  };
}

function Corrente() {
  this.setSaldoEspecial = function (value) {
    this.saldoEspecial = value;
  };
  this.getSaldoEspecial = function () {
    return this.saldoEspecial;
  };
}
Corrente.prototype = new Conta();

function Poupanca() {
  this.setJuros = function (value) {
    this.juros = value;
  };
  this.getJuros = function () {
    return this.juros;
  };
  this.setDataVencimento = function (value) {
    this.dataVencimento = value;
  };
  this.getDataVencimento = function () {
    return this.dataVencimento;
  };
}
Poupanca.prototype = new Conta();

function exibirInfoConta() {
  const tipoContaSelect = document.getElementById("tipoConta").value;
  const nome = document.getElementById("nome").value;
  const banco = document.getElementById("banco").value;
  const numero = document.getElementById("numero").value;
  const saldo = document.getElementById("saldo").value;

  let infoConta = `<strong>Tipo de Conta:</strong> ${tipoContaSelect}<br>`;
  infoConta += `<strong>Nome:</strong> ${nome}<br>`;
  infoConta += `<strong>Banco:</strong> ${banco}<br>`;
  infoConta += `<strong>Número da Conta:</strong> ${numero}<br>`;
  infoConta += `<strong>Saldo:</strong> ${saldo}<br>`;

  if (tipoContaSelect === "corrente") {
      const saldoEspecial = document.getElementById("saldoEspecial").value;
      infoConta += `<strong>Saldo Especial:</strong> ${saldoEspecial}<br>`;
  } else if (tipoContaSelect === "poupanca") {
      const juros = document.getElementById("juros").value;
      const dataVencimento = document.getElementById("dataVencimento").value;
      infoConta += `<strong>Juros:</strong> ${juros}<br>`;
      infoConta += `<strong>Data de Vencimento:</strong> ${dataVencimento}<br>`;
  }

  document.getElementById("resultadoConta").innerHTML = infoConta;
}