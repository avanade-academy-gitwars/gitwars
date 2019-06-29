let botao = document.getElementById('lutar')

const pontosGit = [
    { repositorioPublico: 20 },
    { seguidores: 10 },
    { seguindo: 5 },
    { estrelasPorRepositorio: 10 },
    { gists: 5 }
  ]

botao.addEventListener('click', function () {
    let input1 = document.getElementById('user1').value;
    let input2 = document.getElementById('user2').value;
    
    let usuario1 = buscarUsuarioGit(input1)
        .then(usuario => {
            return usuario;
        })
        .catch(err => console.log(err))

    let usuario2 = buscarUsuarioGit(input2)
        .then(usuario => {
            return usuario;
        })
        .catch(err => console.log(err))

        console.log(input1, input2)
})


function buscarUsuarioGit(usuarioGit) {
    let dados = fetch('https://api.github.com/users/' + usuarioGit)
        .then(function (response) {
            return response.json();
        })
        .then(function (usuario) {
            return usuario;
        })
        .catch(function (error) {
            log('Request failed', error)
        });

    return dados;
}



