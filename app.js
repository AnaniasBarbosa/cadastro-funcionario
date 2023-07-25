import validaCadastro from "./util/validaCadastro.js"
import cadastraFuncionario from "./util/cadastraFuncionario.js"
import chamaModal from "./util/mostrarModal.js"

const btnCadastro = document.querySelector("#cadastrar")
const btnConfirmaCadastro = document.querySelector("#confirmar-cadastro")

btnCadastro.addEventListener("click", () => {
  const validacao = validaCadastro()

  if (!validacao) return false

  const nomeFunc = document.querySelector("#nome-funcionario").value
  const idadeFunc = document.querySelector("#idade-funcionario").value
  const cargoFunc = document.querySelector("#cargo-funcionario").value
  const extraFunc = document.querySelector("#campo-extra").value

  cadastraFuncionario(nomeFunc, idadeFunc, cargoFunc, extraFunc)

  chamaModal("modal-cadastro")
})

btnConfirmaCadastro.addEventListener("click", () => {
  const meuModal = new bootstrap.Modal(document.getElementById("modal-cadastro"))

  meuModal.dispose()
})
