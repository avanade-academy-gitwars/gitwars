
function buscarUsuarioGit(usuarioGit) {
   let dados = fetch('https://api.github.com/users/' + usuarioGit)
      .then(function (response) {
         return response.text();
      })
      .then(function (text) {
         console.log('Request successful', text);
      })
      .catch(function (error) {
         log('Request failed', error)
      });

   return dados;
}

console.log(buscarUsuarioGit("ernaneaugusto"));