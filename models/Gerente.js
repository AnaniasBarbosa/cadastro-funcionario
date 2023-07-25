import { Funcionario } from "./Funcionario.js"

export class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo)
    this.departamento = departamento
  }

  gerenciar() {
    return "ESTOU GERENCIANDO..."
  }
}

//module.exports = Gerente
