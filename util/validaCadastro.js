import chamaModal from "./mostrarModal.js"

export default function validaCadastro() {
  const idModalErroCadastro = "erro-cadastro"

  const nomeFunc = document.querySelector("#nome-funcionario").value
  const idadeFunc = document.querySelector("#idade-funcionario").value
  const cargoFunc = document.querySelector("#cargo-funcionario").value
  const extraFunc = document.querySelector("#campo-extra").value

  try {
    if (!nomeFunc || !idadeFunc || !cargoFunc || !extraFunc) {
      throw new Error("ERRO AO CADASTRAR FUNCIONÁRIO, INFORMAÇÕES INSUFICIENTES!")
    }
    return true
  } catch (error) {
    chamaModal(idModalErroCadastro)
    return false
  }
}
