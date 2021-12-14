/* Funcion para validar el formulario de registro, tiene expresiones regulares y fuertes medidas de seguridad */
function validarForm() {

    /* Validacion del Nombre */
    /* Expresion regular para el nombre */
    var reg=/^[a-zA-Z]+$/;
    var name=document.registro.nombre.value;
    
    /* Diferentes mensajes para los posibles errores */
    if (name=="") {
        alert('No has escrito nada en el usuario');
    }
    else if(reg.test(name)!=true) {
        alert('No cumple los requisitos de nombre de usuario (solo letras min y mayus)');
    }
    else {
        alert('El nombre es valido')
    }

    /* Validacion del Apellido */
    /* Expresion regular para el primer apellido */
    var reg=/^[a-zA-Z]+$/;
    var name=document.registro.apellido.value;
    
    /* Diferentes mensajes para los posibles errores */
    if (name=="") {
        alert('No has escrito nada en el apellido');
    }
    else if(reg.test(name)!=true) {
        alert('No cumple los requisitos de nombre de apellido (solo letras min y mayus)');
    }
    else {
        alert('El apellido es valido')
    }

    /* Validacion del Usuario */
    /* Expresion regular para el usuario, esta vez con numeros tambien */
    var reg=/^[a-zA-Z0-9]+$/;
    var name=document.registro.usuario.value;
    
    /* Diferentes mensajes para los posibles errores */
    if (name=="") {
        alert('No has escrito nada en el usuario');
    }
    else if(reg.test(name)!=true) {
        alert('No cumple los requisitos de nombre de usuario (5-12 caracteres min, mayus y numeros)');
    }
    else {
        alert('El nombre de usuario es valido')
    }
    
    /* Validacion del Contraseña */
    /* Expresiones regulares que debe cumplir la contraseña introducida */
    var regex1=/[0-9]/;
    var regex2=/[a-z]/;
    var regex3=/[A-Z]/;
    var regex4=/.*[!@#$%^&*() =+_-]/;
    var pwd=document.registro.contraseña.value;

    /* Diferentes mensajes para los posibles errores */
    if(pwd=="") {
        alert('No has escrito nada en la contraseña');
    }
    else if(pwd.length<5) {
        alert('Debes introducir al menos 5 caracteres');
    }
    else if(regex1.test(pwd)!=true) {
        alert('Debes introducir al menos un numero');
    }
    else if(regex2.test(pwd)!=true) {
        alert('Debes introducir al menos una minuscula');
    }
    else if(regex3.test(pwd)!=true) {
        alert('Debes introducir al menos una mayuscula');
    }
    else if(regex4.test(pwd)!=true) {
        alert('Debes introducir al menos un caracter especial');
    }
    else {
        alert('Contraseña válida');
    }
    
    /* Validacion del Confirmar contraseña */
    var cp=document.registro.repcontraseña.value;
    if(cp=="") {
        alert('No has escrito nada en la confirmacion de la contraseña');
    }
    else if(cp!==pwd) {
        alert('No coincide con la contraseña previa');
    }
    else {
        alert('Confirmacion correcta');
    }
    
    /* Validacion del Email */
    /* Expresion regular dividida en 3 partes cada una para una parte del email, dominio etc.. */
    var email=document.registro.email.value;
    var emailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;  
    
    /* Diferentes mensajes para los posibles errores */
    if(email=="") {
        alert('No has escrito nada en el email');
    }
    else if(!email.match(emailformat)) {  
        alert('Introduce un email con formato valido');
    } 
    else {
        alert('Email válido');
    }
}