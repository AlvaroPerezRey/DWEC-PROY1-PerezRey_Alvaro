document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario_contacto").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  
  var nombre = document.getElementById('nombre').value;
  if(nombre.length == 0) {
    alert('No has escrito nada en el nombre');
    return;
  }
  
  var apellidos = document.getElementById('apellidos').value;
  if(apellidos.length == 0) {
    alert('No has escrito nada en los apellidos');
    return;
  }

  var email = document.getElementById('email').value;
  if(email.length == 0) {
    alert('No has escrito nada en los email');
    return;
  }

  var asunto = document.getElementById('asunto').value;
  if(asunto.length == 0) {
    alert('No has escrito nada en los asunto');
    return;
  }

  var captcha = document.getElementById('captcha').value;
  if(captcha != suma) {
    alert('Has escrito incorrectamente el captcha');

  }

  this.submit();
}

  var valor1 = Math.round(Math.random()*10);
  var valor2 = Math.round(Math.random()*10);
  var suma = valor1+valor2;
  var mostrarValor1 = document.getElementById("valor1");
  var mostrarValor2 = document.getElementById("valor2");
  mostrarValor1.innerHTML = valor1;
  mostrarValor2.innerHTML = valor2;