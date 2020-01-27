const usuarios = [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]

function calculaSaldo(receitas, despesas){
    let saldo = 0;
    
    for (let receita of receitas){
        saldo += receita
    }

    for (let despesa of despesas){
        saldo -= despesa
    }
    return saldo;
}

for (let usuario of usuarios){
    usuario.saldo = calculaSaldo(usuario.receitas, usuario.despesas);

    if (usuario.saldo < 0) console.log(`${usuario.nome} possui o saldo NEGATIVO de ${usuario.saldo.toFixed(2)}.`);
    else console.log(`${usuario.nome} possui o saldo POSITIVO de ${usuario.saldo.toFixed(2)}.`)

}




