function CriaPessoa(nome, sobrenome) {
  let pessoa = {};

  pessoa.nome = nome;
  pessoa.sobrenome = sobrenome;

  function fullName() {
    return `${pessoa.nome} ${pessoa.sobrenome}`;
  }

  pessoa.fullName = fullName;

  return pessoa;
}

const pessoa1 = CriaPessoa('Thiago', 'Valls');

console.log(pessoa1.fullName());