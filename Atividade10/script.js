// Função para encontrar o maior número entre três
function encontrarMaior(numero1, numero2, numero3) {
  return Math.max(numero1, numero2, numero3);
}

// Função para ordenar três números em ordem crescente
function ordenarCrescente(numero1, numero2, numero3) {
  const numerosOrdenados = [numero1, numero2, numero3].sort((a, b) => a - b);
  return numerosOrdenados;
}

// Solicitar três números ao usuário
const inputNumero1 = prompt("Digite o primeiro número:");
const inputNumero2 = prompt("Digite o segundo número:");
const inputNumero3 = prompt("Digite o terceiro número:");

// Converter os inputs para números
const numero1 = parseFloat(inputNumero1);
const numero2 = parseFloat(inputNumero2);
const numero3 = parseFloat(inputNumero3);

// Verificar se os inputs são válidos
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
  alert("Por favor, digite números válidos.");
} else {
  // Encontrar e exibir o maior número
  const maiorNumero = encontrarMaior(numero1, numero2, numero3);
  alert(`O maior número é: ${maiorNumero}`);

  // Ordenar e exibir os números em ordem crescente
  const numerosOrdenados = ordenarCrescente(numero1, numero2, numero3);
  alert(`Números em ordem crescente: ${numerosOrdenados.join(', ')}`);
}





