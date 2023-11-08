/*
-Cragar usuarios de la (localStorage)
-Tomar el formulario
-Tomar datos cargados
-Ver si existe el email como el que el usuario ingreso
corroborar que exista la contraseña contraseña
         *Cuando no exista el email
         *Existe el email pero la contraseña no coincide
           Mensaje error      
          

         -Hacer login
           *Guardar en localStorage un curretUser
           *Redirecionar al home
*/

const users = JSON.parse(localStorage.getItem("users"))

const loginForm = document.getElementById("login-form")

loginForm.addEventListener("submit",(evt) =>{
   evt.preventDefault()

   const email = loginForm.elements.email.value;
   const password = evt.target.elements.password.value;

  const user = users.find((usr)=> {


      if(usr.email.toLowerCase() === email.toLowerCase()){
        return true

      }
      return false
  })
   //Si el correo no existe Cortamos el submit asi
   if(!user ){
    Swal.fire({
        icon: 'error',
        title: 'Login Incorrecto',
        text: 'alguno de los datos ingresados no es correcto' ,
        timer: 2000
    })
     return
   }
   //*Aqui comprobamos si el password no coinciden
    if(user.password != password   ){
        Swal.fire({
            icon: 'error',
            title: 'Login Incorrecto',
            text: 'alguno de los datos ingresados no es correcto' ,
            timer: 2000
        })
            return
    }

     delete user.password;
   localStorage.setItem("currentUser",JSON.stringify(user))

   Swal.fire({
    icon: 'success',
    title: 'Login correcto',
    text: 'Sera redireccionado en un momento' ,
    
})
     setTimeout(function(){
        window.location.href = '/index.html'
     },2500)
 
})

