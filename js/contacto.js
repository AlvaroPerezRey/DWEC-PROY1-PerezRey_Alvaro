document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario_contacto").addEventListener('submit', validarFormulario); 
  });
  
function validarFormulario(evento) {
    evento.preventDefault();

    var usuario = document.getElementById('nombre').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    
    var apellidos = document.getElementById('apellidos').value;
    if(apellidos.length == 0) {
      alert('No has escrito nada en los apellidos');
      return;
    }

    var email = document.getElementById('email').value;
    if(email.length == 0) {
      alert('No has escrito nada en el email');
      return;
    }

    var asunto = document.getElementById('asunto').value;
    if (asunto.length == 0) {
      alert('El asunto esta vacio');
      return;
    }

    this.submit();
}