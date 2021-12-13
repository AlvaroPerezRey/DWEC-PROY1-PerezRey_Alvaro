/* Funcion para saber donde y como se ejecute nuestra funcion de validacion posterior*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login").addEventListener('submit', validarFormulario); 
});
  
/* Funcion para validar el formulario de la pagina iniciar sesion */
function validarFormulario(evento) {
    evento.preventDefault();
    
    /* Comprobaciones en el input de usuario */
    var usuario = document.getElementById('usuario').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    
    /* Comprobaciones en el input de contraseña */
    var contraseña = document.getElementById('contraseña').value;
    if(contraseña.length == 0) {
      alert('No has escrito nada en los contraseña');
      return;
    }

    /* Comprobaciones para el captcha */
    var captcha = document.getElementById('captcha').value;
    if(captcha != suma) {
      alert('Has escrito incorrectamente el captcha');

    }
    this.submit();
  }

    /* variables para la realizacion del captcha */
    var valor1 = Math.round(Math.random()*10);
    var valor2 = Math.round(Math.random()*10);
    var suma = valor1+valor2;
    var mostrarValor1 = document.getElementById("valor1");
    var mostrarValor2 = document.getElementById("valor2");
    mostrarValor1.innerHTML = valor1;
    mostrarValor2.innerHTML = valor2;