/* Funcion para saber donde y como se ejecute nuestra funcion de validacion posterior*/
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario_contacto").addEventListener('submit', validarFormulario); 
});

/* Funcion para validar el formulario de la pagina contacto */
function validarFormulario(evento) {
  evento.preventDefault();
  
  /* Comprobaciones en el input del nombre */
  var nombre = document.getElementById('nombre').value;
  if(nombre.length == 0) {
    alert('No has escrito nada en el nombre');
    return;
  }
  
  /* Comprobaciones en el campo de apellidos */
  var apellidos = document.getElementById('apellidos').value;
  if(apellidos.length == 0) {
    alert('No has escrito nada en los apellidos');
    return;
  }

  /* Comprobaciones en el campo email */
  var email = document.getElementById('email').value;
  if(email.length == 0) {
    alert('No has escrito nada en los email');
    return;
  }

  /* Comprobaciones en el campo asunto */
  var asunto = document.getElementById('asunto').value;
  if(asunto.length == 0) {
    alert('No has escrito nada en los asunto');
    return;
  }

  /* captcha sencillo para el formulario */
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