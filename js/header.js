//Este archivo header lo vamos a utilizar cross en todo el site

/*1-Tenemps que obtener el nav y el user info
  2-Hay que evaluar si tenemos un  usuario logueado

  -Si tenemos el user logueado:
       *Tenemos que evaluar su role y ver si pintamos en el nav
        el boton de admin product y admin user
        *User info:debemos
               -Pintar el nombre del user
               -Pintar el boton logout

-Sino tenemos el user logueado:
           *No pintamos los botones admin
           *No colocamos el name del user
           *Pintamos el boton loguin

  */


// 1-Tenemps que obtener el nav y el user info
const headerNav = document.getElementById('header-nav');
const userInfoHeader = document.getElementById('header-user');

//2-Hay que evaluar si tenemos un  usuario logueado
const loguedUser = JSON.parse(localStorage.getItem("currentUser"))

if(loguedUser){
    //Si Tengo un usuario logueado y CHECKEAR SI ES ADMIN
    if(loguedUser.role === 'ADMIN_ROLE'){
         //Pintar los botones de admin
       const adminUserLink = document.createElement("a")

       adminUserLink.href = '/pages/admin/user-admin.html'
       adminUserLink.innerText = 'User admin'
       adminUserLink.classList =  'header-link'

       headerNav.appendChild(adminUserLink)

       const adminProductLink = document.createElement("a")

       adminProductLink.href = '/pages/admin/product-admin.html'
       adminProductLink.innerText = 'Product admin'
       adminProductLink.classList =  'header-link'

       headerNav.appendChild(adminProductLink)
            
              
}
 const userNameHtml = userInfoHeader.querySelector('.user-name')

userNameHtml.innerText = loguedUser.fullname
 //colocamos la imagen del usuario logueado
const userImg = document.createElement('img')
userImg.src = loguedUser.image;
userImg.alt = `${loguedUser.fullname} profile picture`
userImg.classList.add('user-profile-picture')

userInfoHeader.appendChild(userImg)

//colocamos el boton de  login-out
const userActionHtml = userInfoHeader.querySelector('.user-action')

  const logoutButton = document.createElement('button');
  logoutButton.classList.add('header-link')
  logoutButton.innerText = 'logout'

  logoutButton.onclick = function(){
    localStorage.removeItem("currentUser");
    window.location.href = '/index.html'
  }

  userActionHtml.appendChild(logoutButton)


}else{
  const userActionHtml = userInfoHeader.querySelector('.user-action')

  const loginLink = document.createElement("a")

  loginLink.href = '/pages/login/login.html';
  loginLink.innerText = 'Ingresar'
  loginLink.classList =  'header-link'

    userActionHtml.appendChild(loginLink)
}

