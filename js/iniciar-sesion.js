document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login").addEventListener('submit', validarFormulario); 
  });
  
function validarFormulario(evento) {
    evento.preventDefault();
    
    var usuario = document.getElementById('usuario').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    
    var contraseña = document.getElementById('contraseña').value;
    if(contraseña.length == 0) {
      alert('No has escrito nada en los contraseña');
      return;
    }

    this.submit();
}