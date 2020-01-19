/*const inpUsername = document.querySelector('#inp-username');
const btnLogin = document.querySelector('#btn-login');
const msgError = document.querySelector('#msg-error');
const inpPassword = document.querySelector('#inpu-password');

btnLogin.addEventListener('click', login);
inpUsername.addEventListener('focus', focusInput);
inpPassword.addEventListener('focus', focusInput);

function login() {

console.log('inicio funcion login')
   
if (!inpUsername.value || !inpPassword.value) return;

console.log('Validar campos')
    
   if (inpUsername.value !== 'ejemplo@gmail.com' || inpPassword.value !== '123456') {
       msgError.classList.remove(['hide']);
    
       console.log('error!');
       }else{ 
        console.log('acceso correcto!');
        document.location.assign('../layout/index.html');
     }

   }

function focusInput() {
    msgError.classList.add(['hide']);
}

const boton = document.querySelector(#'btn-login');
boton.addEventListener('click', funcionQueRedirecciona);

function funcionQueRedirecciona() {
	document.location.assign('../Home/index.html');
}*/

function validar(){
    /*variables*/
var inpusername = document.getElementById("inp-username").value;
var inpupassword = document.getElementById("inpu-password").value;

if ( inpusername =="" || inpupassword== "") {
  alert("El campo correo y/o contraseña no pueden estar vacios")
}else {
   if (inpusername ==  "ejemplo@gmail.com" && inpupassword== "123456") {
        alert("Iniciando Sesión...");
     }
     else{
       alert("Email y/o contraseña son incorrectos");
    }
     }
    }
    