function computerchoice() {
  const num = Math.random();

  if (num < 0.33) {
    return "Pedra";
  } else if (num < 0.66) {
    return "Papel";
  } else {
    return "Tesoura";
  }
}

function winner(player, computer) {
  if (player === computer) {
    document.getElementById("result").style.color = "#FFC300";
    return "Deu Empate!";
  } else if (
    (player === "Pedra" && computer === "Tesoura") ||
    (player === "Tesoura" && computer === "Papel") ||
    (player === "Papel" && computer === "Pedra")
  ) {
    document.getElementById("result").style.color = "green";

    return "Você Venceu!!!";
  } else {
    document.getElementById("result").style.color = "red";

    return "Você Perdeu!";
  }
}

function play(choice) {
  const computer = computerchoice();
  console.log("Apertou");
  const result = winner(choice, computer);

  document.getElementById("choices").innerText = "Você escolheu: " + choice + "\n\nComputador escolheu: " + computer;

  document.getElementById("result").innerText = result;
}
