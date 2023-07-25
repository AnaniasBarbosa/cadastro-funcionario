const cargoFunc = document.querySelector("#cargo-funcionario")

const campoExtraCargo = document.querySelector(".cargo-campo-extra")
const labelInput = document.querySelector(".cargo-campo-extra > label")

cargoFunc.addEventListener("change", function () {
  const cargoSelecionado = cargoFunc.value.toUpperCase()

  const textoCampo = defineLabel(cargoSelecionado)
  labelInput.textContent = textoCampo
  campoExtraCargo.style.display = "block"
})

const defineLabel = (cargo) => {
  switch (cargo) {
    case "DESENVOLVEDOR":
      return "LINGUAGEM"
    case "GERENTE":
      return "DEPARTAMENTO"
    default:
      return "OBSERVAÇÕES"
  }
}
