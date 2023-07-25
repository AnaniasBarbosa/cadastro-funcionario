export class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome
    this.idade = idade
    this.cargo = cargo
  }

  seApresentar() {
    return `OLÁ, ME CHAMO ${this.nome}.`
  }
  trabalhar() {
    return "TRABALHANDO..."
  }
}
