import { Gerente } from "../models/Gerente.js"
import { Desenvolvedor } from "../models/Desenvolvedor.js"

export default function cadastraFuncionario(nome, idade, cargo, extra) {
  const campoExtra = cargo == "gerente" ? "DEPARTAMENTO" : "LINGUAGEM"
  const funcionario =
    cargo == "gerente" ? new Gerente(nome, idade, cargo, extra) : new Desenvolvedor(nome, idade, cargo, extra)
  const apresentacao = funcionario.seApresentar()
  const funcao = cargo == "gerente" ? funcionario.gerenciar() : funcionario?.programar()
  const trabalhando = funcionario.trabalhar()

  document.querySelector('[id="nome-cadastro"]').textContent = `NOME: ${funcionario.nome}`
  document.querySelector('[id="idade-cadastro"]').textContent = `IDADE: ${funcionario.idade}`
  document.querySelector('[id="cargo-cadastro"]').textContent = `CARGO: ${funcionario.cargo}`
  document.querySelector('[id="apresentacao"]').textContent = apresentacao
  document.querySelector('[id="trabalhando"]').textContent = trabalhando
  document.querySelector('[id="funcao"]').textContent = funcao
  document.querySelector('[id="extra-cadastro"]').textContent = `${campoExtra}: ${
    funcionario.departamento || funcionario.linguagem
  }`
}
