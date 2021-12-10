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

    var captcha = document.getElementById('captcha').value;
    if(captcha != suma) {
      alert('Has escrito incorrectamente el captcha');

    }

    this.submit();
  }

    
    var arrayCaracteres = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
    var valor2 = Math.round(Math.random()*10);
    var suma = valor1+valor2;
    var mostrarValor1 = document.getElementById("valor1");
    var mostrarValor2 = document.getElementById("valor2");
    mostrarValor1.innerHTML = valor1;
    mostrarValor2.innerHTML = valor2;