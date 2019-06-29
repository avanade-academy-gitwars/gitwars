
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


let usuario1 = buscarUsuarioGit("ernaneaugusto")
   .then(usuario => {
      return usuario;
   })
   .catch(err => console.log(err))

let usuario2 = buscarUsuarioGit("camilaIT")
   .then(usuario => {
      return usuario;
   })
   .catch(err => console.log(err))
