const calcular = document.getElementById("calcular");

function media() {
  const pB = parseInt(document.getElementById("pB").value);
  const sB = parseInt(document.getElementById("sB").value);
  const tB = parseInt(document.getElementById("tB").value);
  const qB = parseInt(document.getElementById("qB").value);

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