const calcular = document.getElementById("calcular");

function media() {
  const pB = parseFloat(document.getElementById("pB").value);
  const sB = parseFloat(document.getElementById("sB").value);
  const tB = parseFloat(document.getElementById("tB").value);
  const qB = parseFloat(document.getElementById("qB").value);

  const resultado = document.getElementById("resultado");

  if (pB !== "" && sB !== "" && tB !== "" && qB !== "") {
    var notaFinal = (pB + sB + tB + qB) / 4;

    var notaFixada = notaFinal.toFixed(1);

    resultado.textContent = `Sua nota final é ${notaFixada}`;
  } else {
    resultado.textContent = "Preencha todos os campos!";
  }
}

calcular.addEventListener("click", media);
