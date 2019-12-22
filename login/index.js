function validar (){
    /*variables*/
var correo = document.getElementById("correo").value;
var contrasena = document.getElementById("contrasena").value;

if (correo =="" || contrasena== "") {
  alert("El campo correo y/o contraseña no pueden estar vacios")
}else {
   if (correo ==  "ejemplo@gmail.com" && contrasena== "123456") {
        alert("Iniciando Sesión...");
     }
     else{
       alert("Email y/o contraseña son incorrectos");
    }
     }
    }
    


