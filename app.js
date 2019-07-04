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
    let divOne = document.getElementById('one');
    let divTwo = document.getElementById('two');
    divOne.classList.add("hidden");
    divTwo.classList.add("show");

    let fotoUsuario1 = document.getElementById('img-usuario1');
    let repositorioInfoUsuario1 = document.getElementById('qtd1-rep-pub');
    let repositorioPtsUsuario1 = document.getElementById('pts1-rep-pub');
    let seguidoresInfoUsuario1 = document.getElementById('qtd1-fol-pub');
    let seguidoresPtsUsuario1 = document.getElementById('pts1-fol-pub');
    let seguindoInfoUsuario1 = document.getElementById('qtd1-seg-pub');
    let seguindoPtsUsuario1 = document.getElementById('pts1-seg-pub');
    // let estrelasInfoUsuario1 = document.getElementById('qtd1-est-pub');
    // let estrelasPtsUsuario1 = document.getElementById('pts1-est-pub');
    let gistsInfoUsuario1 = document.getElementById('qtd1-gists-pub');
    let gistsPtsUsuario1 = document.getElementById('pts1-gists-pub');
    let totalPtsUsuario1 = document.getElementById('pts1-total-pub');

    let fotoUsuario2 = document.getElementById('img-usuario2');
    let repositorioInfoUsuario2 = document.getElementById('qtd2-rep-pub');
    let repositorioPtsUsuario2 = document.getElementById('pts2-rep-pub');
    let seguidoresInfoUsuario2 = document.getElementById('qtd2-fol-pub');
    let seguidoresPtsUsuario2 = document.getElementById('pts2-fol-pub');
    let seguindoInfoUsuario2 = document.getElementById('qtd2-seg-pub');
    let seguindoPtsUsuario2 = document.getElementById('pts2-seg-pub');
    // let estrelasInfoUsuario2 = document.getElementById('qtd2-est-pub');
    // let estrelasPtsUsuario2 = document.getElementById('pts2-est-pub');
    let gistsInfoUsuario2 = document.getElementById('qtd2-gists-pub');
    let gistsPtsUsuario2 = document.getElementById('pts2-gists-pub');
    let totalPtsUsuario2 = document.getElementById('pts2-total-pub');

    let usuario1 = buscarUsuarioGit(input1)
        .then(usuario => {
            let pontosRepo = usuario.public_repos * pontosGit[0].repositorioPublico;
            let pontosSeguidores = usuario.followers * pontosGit[1].seguidores;
            let pontosSeguindo = usuario.following * pontosGit[2].seguindo;
            let pontosGists = usuario.public_gists * pontosGit[4].gists;
            let total = pontosRepo + pontosSeguidores + pontosSeguindo + pontosGists;

            fotoUsuario1.setAttribute("src", usuario.avatar_url);

            repositorioInfoUsuario1.innerHTML = usuario.public_repos;
            repositorioPtsUsuario1.innerHTML = pontosRepo;
            
            seguidoresInfoUsuario1.innerHTML = usuario.followers;
            seguidoresPtsUsuario1.innerHTML = pontosSeguidores;
            
            seguindoInfoUsuario1.innerHTML = usuario.following;
            seguindoPtsUsuario1.innerHTML = pontosSeguindo;
            
            gistsInfoUsuario1.innerHTML = usuario.public_gists;
            gistsPtsUsuario1.innerHTML = pontosGists;

            totalPtsUsuario1.innerHTML = total;
        })
        .catch(err => console.log(err));

    let usuario2 = buscarUsuarioGit(input2)
        .then(usuario => {
            let pontosRepo = usuario.public_repos * pontosGit[0].repositorioPublico;
            let pontosSeguidores = usuario.followers * pontosGit[1].seguidores;
            let pontosSeguindo = usuario.following * pontosGit[2].seguindo;
            let pontosGists = usuario.public_gists * pontosGit[4].gists;
            let total = pontosRepo + pontosSeguidores + pontosSeguindo + pontosGists;

            fotoUsuario2.setAttribute("src", usuario.avatar_url);

            repositorioInfoUsuario2.innerHTML = usuario.public_repos;
            repositorioPtsUsuario2.innerHTML = pontosRepo;
            
            seguidoresInfoUsuario2.innerHTML = usuario.followers;
            seguidoresPtsUsuario2.innerHTML = pontosSeguidores;
            
            seguindoInfoUsuario2.innerHTML = usuario.following;
            seguindoPtsUsuario2.innerHTML = pontosSeguindo;
            
            gistsInfoUsuario2.innerHTML = usuario.public_gists;
            gistsPtsUsuario2.innerHTML = pontosGists;

            totalPtsUsuario2.innerHTML = total;
        })
        .catch(err => console.log(err));

        Promise.all([usuario1, usuario2]).then(() => {
            console.log(totalPtsUsuario1.innerHTML)
            console.log(totalPtsUsuario2.innerHTML)
        });
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
            console.log('Request failed', error)
        });

    return dados;
}



