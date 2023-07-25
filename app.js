//Classe funcionário geral.
class Funcionario {
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
//Classe para gerente
class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo)
    this.departamento = departamento
  }

  gerenciar() {
    return "ESTOU GERENCIANDO..."
  }
}
//Classe desenvolvedor
class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo)
    this.linguagem = linguagem
  }

  programar() {
    return "PROGRAMANDO..."
  }
}

//---------------//-----------------------//
