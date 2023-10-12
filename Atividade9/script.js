// Lista de valores possíveis para sexo e opinião
const sexos = [1, 2];
const opinioes = [1, 2, 3, 4];

// Gera 45 registros aleatórios
const dados = [];

function registrarResposta() {
  // Obter valores do formulário
  const idade = parseInt(document.getElementById("idade").value, 10);
  const sexo = parseInt(document.getElementById("sexo").value, 10);
  const opiniao = parseInt(document.getElementById("opiniao").value, 10);

  // Verificar se os valores são válidos
  if (isNaN(idade) || isNaN(sexo) || isNaN(opiniao)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // Adicionar os dados ao array
  dados.push({ idade, sexo, opiniao });

  // Chamar a função para recalcular as estatísticas
  recalcularEstatisticas();
}

function recalcularEstatisticas() {
  // Calcular a média das idades
  const somaDasIdades = dados.reduce(
    (soma, registro) => soma + registro.idade,
    0
  );

  const mediaDasIdades = somaDasIdades / dados.length;
  const mediaIdade = document.getElementById("media-idade");
  mediaIdade.innerHTML = `Média da idade das pessoas: ${mediaDasIdades.toFixed(2).toString()}`;

  const idadeMaisVelha = dados.reduce(
    (maisAlta, registro) => Math.max(maisAlta, registro.idade),
    0
  );
  const idadeMaisAlta = document.getElementById("mais-velha");
  idadeMaisAlta.innerHTML = `Idade da pessoa mais velha: ${idadeMaisVelha.toString()}`;

  const idadeMaisNova = dados.reduce(
    (maisNova, registro) => Math.min(maisNova, registro.idade),
    Infinity
  );
  const idadeMaisBaixa = document.getElementById("mais-nova");
  idadeMaisBaixa.innerHTML = `Idade da pessoa mais nova: ${idadeMaisNova}`;

  const qtdOpiniaoPessimo = dados.filter(
    (registro) => registro.opiniao === 1
  ).length;
  const qtdeOpiniaoPessimo = document.getElementById("qtde-pessimo");
  qtdeOpiniaoPessimo.innerHTML = `A quantidade de pessoas que responderam péssimo: ${qtdOpiniaoPessimo.toString()}`;

  const qtdOpiniao3ou4 = dados.filter(
    (registro) => registro.opiniao === 3 || registro.opiniao === 4
  ).length;
  const porcentagemOpiniaoBom = (qtdOpiniao3ou4 / dados.length) * 100;
  const porcentagemOpiniaoBomElement =
    document.getElementById("porcentagem-bom");
  porcentagemOpiniaoBomElement.innerHTML = `A porcentagem de pessoas que responderam ótimo e bom: ${porcentagemOpiniaoBom.toFixed(
    2
  )}%`;

  const qtdHomens = dados.filter((registro) => registro.sexo === 1).length;
  const qtdHomensElement = document.getElementById("qtde-homens");
  qtdHomensElement.innerHTML = `O numero de homens que responderam ao questionario: ${qtdHomens}`;

  const qtdMulheres = dados.filter((registro) => registro.sexo === 2).length;
  const qtdMulheresElement = document.getElementById("qtde-mulheres");
  qtdMulheresElement.innerHTML = `O numero de mulheres que responderam ao questionario: ${qtdMulheres}`;
}
