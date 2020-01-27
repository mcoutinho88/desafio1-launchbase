const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programacao',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260,
    }
};

console.log(`A empresa ${empresa.nome} esta localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}.`);

const techs = [
    { nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
];

const usuario = {
    username: 'Carlos',
    idade: 32,
    ...techs[0]
}

console.log(`O usuario ${usuario.username} tem ${usuario.idade} anos e usa a tecnologia ${usuario.nome}
com especialidade em ${usuario.especialidade}`);
