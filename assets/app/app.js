const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", handleSubmit);

function calculate(watts, kwhPrice, hours) {
  return ((watts * hours * 30) / 1000) * kwhPrice;
}

function handleSubmit(e) {
  e.preventDefault();

  const totalWatts = document.getElementById("input-watts").value;
  const totalKwhPrice = document.getElementById("input-kwh").value;
  const totalHours = document.getElementById("input-hours").value;
  const totalPrice = Math.round(
    calculate(totalWatts, totalKwhPrice, totalHours)
  );
  let resultLayout = "";

  if (!totalWatts || !totalKwhPrice || !totalHours) {
    resultLayout = `Preencha todos os campos!`;
  } else {
    resultLayout = `A média de gasto do seu computador é de R$${totalPrice} por mês.`;
  }

  const result = document.getElementById("result");
  result.innerHTML = resultLayout;
}
