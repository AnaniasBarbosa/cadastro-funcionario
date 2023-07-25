import { Funcionario } from "./Funcionario.js"

export class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo)
    this.linguagem = linguagem
  }

  programar() {
    return "PROGRAMANDO..."
  }
}
