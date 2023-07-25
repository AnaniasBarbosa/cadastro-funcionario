import { Gerente } from "../models/Gerente.js"
import { Desenvolvedor } from "../models/Desenvolvedor.js"

export default function cadastraFuncionario(nome, idade, cargo, extra) {
  const campoExtra = cargo == "gerente" ? "DEPARTAMENTO" : "LINGUAGEM"
  const funcionario =
    cargo == "gerente" ? new Gerente(nome, idade, cargo, extra) : new Desenvolvedor(nome, idade, cargo, extra)

  const modalNome = (document.querySelector('[id="nome-cadastro"]').textContent = `NOME: ${funcionario.nome}`)
  const modalIdade = (document.querySelector('[id="idade-cadastro"]').textContent = `IDADE: ${funcionario.idade}`)
  const modalCargo = (document.querySelector('[id="cargo-cadastro"]').textContent = `CARGO: ${funcionario.cargo}`)
  const modalCampoExtra = (document.querySelector('[id="extra-cadastro"]').textContent = `${campoExtra}: ${
    funcionario.departamento || funcionario.linguagem
  }`)
}
