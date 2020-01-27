const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
  ];

function percorrerUsuario(usuario){
    for (let u of usuario){
        console.log(`${u.nome} trabalha com ${u.tecnologias[0]}, ${u.tecnologias[1]}`);
    }
}

percorrerUsuario(usuarios);


function checaSeUsuarioUsaCSS (usuario){
    for (let tech of usuario.tecnologias){
        if (tech == 'CSS')
            return true;   
    }
    return false;
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])
  
    if(usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
  }



  