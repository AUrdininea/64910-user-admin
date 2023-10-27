const usersArray = [
  {
    fullname: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    id: '1',
    active: true,
    password: 'password123',
    bornDate: new Date('1993-01-01').getTime(),
    location: 'Buenos Aires',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280'
  },
  {
    fullname: 'Jane Doe',
    age: 25,
    email: 'jane.doe@example.com',
    id: '2',
    active: false,
    password: 'password456',
    bornDate: new Date('1998-05-05').getTime(),
    location: 'Mendoza',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f5/Mk8icondaisy.png?width=1280'
  },
  {
    fullname: 'Alice Johnson',
    age: 35,
    email: 'alice.johnson@example.com',
    id: '3',
    active: true,
    password: 'password789',
    bornDate: new Date('1988-08-08').getTime(),
    location: 'San Luis',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/1/1d/Mk8icontoadette.png?width=325'
  },
  {
    fullname: 'Michael Smith',
    age: 40,
    email: 'michael.smith@example.com',
    id: '4',
    active: false,
    password: 'password101',
    bornDate: new Date('1983-04-10').getTime(),
    location: 'Córdoba',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/d1/Mk8iconrosalina.png?width=1280'
  },
  {
    fullname: 'Emily Johnson',
    age: 28,
    email: 'emily.johnson@example.com',
    id: '5',
    active: true,
    password: 'password202',
    bornDate: new Date('1995-02-15').getTime(),
    location: 'Buenos Aires',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/5/59/Mk8iconpeach.png?width=325'
  },
  {
    fullname: 'Daniel Lee',
    age: 34,
    email: 'daniel.lee@example.com',
    id: '6',
    active: false,
    password: 'password303',
    bornDate: new Date('1989-07-07').getTime(),
    location: 'Mendoza',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/bf/Mk8iconmario.png?width=325'
  },
  // {
  //   fullname: 'Samantha Davis',
  //   age: 22,
  //   email: 'samantha.davis@example.com',
  //   id: '7',
  //   active: true,
  //   password: 'password404',
  //   bornDate: new Date('2001-11-11').getTime(),
  //   location: 'Boston, MA',
  //   image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325'
  // },
  // {
  //   fullname: 'James Moore',
  //   age: 45,
  //   email: 'james.moore@example.com',
  //   id: '8',
  //   active: false,
  //   password: 'password505',
  //   bornDate: new Date('1978-12-19').getTime(),
  //   location: 'Dallas, TX',
  //   image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/3/3a/Mk8iconkoopa.png?width=325'
  // },
  // {
  //   fullname: 'Isabella Taylor',
  //   age: 29,
  //   email: 'isabella.taylor@example.com',
  //   id: '9',
  //   active: true,
  //   password: 'password606',
  //   bornDate: new Date('1994-06-24').getTime(),
  //   location: 'San Diego, CA',
  //   image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/3/3a/Mk8iconkoopa.png?width=325'
  // },
  // {
  //   fullname: 'Ethan Johnson',
  //   age: 31,
  //   email: 'ethan.johnson@example.com',
  //   id: '10',
  //   active: false,
  //   password: 'password707',
  //   bornDate: new Date('1992-03-03').getTime(),
  //   location: 'Denver, CO',
  //   image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b7/Mk8iconbowser.png?width=325'
  // }
];
 //Obtener el body de la tabla atravez del id
 const tableBody =document.getElementById('table-body')

// console.log(tableBody)el console.log lo hacemos para asegurarnos que estamos llamando bien al elemento

 //***Buscador en js**/*********/
 const searchInput= document.querySelector('#search')




 //****OBTENER EL FORMILARIO DESDE EL ID ASI  CREAMOS UNA VARIABLE CON EL NOBRE QUE NOS GUSTE*/
   const userForm = document.querySelector('form#user-form')

 //Cambiiar el nombre del boton a editar usuario para mejor experiencia del usuario
 const submitBtn = userForm.querySelector('button[type=submit]')

   //Aqui escucharemos el evento submit en el formulario
userForm.addEventListener("submit",(evt)=> {

 evt.preventDefault()

  //Ahora agregaremos un nuevo usuario y para eso crearemos un objeto
  const el = evt.target.elements; //en esta variable resumimos lo que obtuvimos en console.dir

//Se deberia cortar la ejecucion de la funcion callback del evento submit cuando password y password2 sean distintos
//  if(el.password.value !== el.password2.value ){
//     alert(`Las contraseñas no coinciden`)
//       return;
//  }

//  //Si el email ya existe lo cortamos asi e informamos
 const emailExist = usersArray.find((user) =>{
  if(user.email === el.email.value){
    return true
  }
 })

if(emailExist && el.id.value != emailExist.id){
  Swal.fire({
    title:'El correo ya existe',
    icon: 'error'
  })
  return
}

//como saber si es un usuario nuevo o es uno que ya existe
//let id;
// if(el.id.value){
//   id = el.id.value
// }else{
//   id = crypto.randomUUID()
// }
//segunda opcion para para saber si el usuario existe o es nuevo
//Con operador ternario
//            condicion true-ya existe    false-es nuevo
const id = el.id.value ? el.id.value : crypto.randomUUID()




  const user = {
     fullname: el.fullname.value,
     age: el.age.valueAsNumber,
     email: el.email.value,
     password: el.password.value,
     active:el.active.checked,
     bornDate:new Date( el.bornDate.value).getTime(),
     location: el.location.value,
     id:id,
     image:el.image.value

}

// Tenemos 2 posibles acciones a realizar
//1-Al estar editando deberia reemplazar el usuario a editar con su info actualizada
//2-Agregar un usuario nuevo
if(el.id.value){
   //Editando
   const indice = usersArray.findIndex(usuario =>{
    if(usuario.id === el.id.value){
      return true
    }
     
   })
    //Reemplazo el usuario con lops datos nuevos del formilario
   usersArray[indice] = user
   Swal.fire({
    title:'Usuario Editado',
    text:'Los datos fueron actualizados correctamente',
    icon:'success',
    timer: 1000
   })

   

}else{
   //Agragando usuario nuevo
  usersArray.push(user)
  Swal.fire({
    title:'Usuario Agregado',
    text:'Usuario creado correctamente',
    icon:'success',
    timer: 1000
  })
}


pintarUsuarios(usersArray)

resetearFormulario()
})

function resetearFormulario(){
  userForm.reset()
  userForm.elements.password.disabled = false
  userForm.elements.password2.disabled = false
  submitBtn.classList.remove('btn-edit')
  submitBtn.innerText = 'Agregar usuario'
  userForm.elements.fullname.focus()
}


 //Filtro de usuarios
 //con este codigo escuchamos cuando el usuario presiona una tecla
 searchInput.addEventListener('keyup', (eventito)=>{

  //obtener el valor el input y lo pasamos a minusculas
     const inputValue = eventito.target.value.toLowerCase();
  
     //Buscar en todos los usuarios a aquellos donde su nombre tenga este texto
   const usuariosFiltrados = usersArray.filter((usuario)=>{
  
     const nombre = usuario.fullname.toLowerCase()
     
     
     return  nombre.includes(inputValue)

     
   })


  //Pintar solo a los usuarios que hayan coincidido
   pintarUsuarios(usuariosFiltrados)
   console.log(usuariosFiltrados)
 })





//***Pintar(agregar) y Borrar usuaria ****/
 function pintarUsuarios(arrayPintar){
  //Iterar el array  y agregar un tr por cada alumno que tengamos
  tableBody.innerHTML = "";

 arrayPintar.forEach((user, indiceActual) =>{

    tableBody.innerHTML += `<tr class="table-body">
    <td class="user-image">
        <img src="${user.image}" alt=${user.fullname} avatar">
    </td>
    <td class="user-name">${user.fullname}</td>
    <td class="user-email">${user.email}</td>
    <td class="user-location">${user.location}</td>
    <td class="user-age">${user.age}</td>
    <td class="user-date">${formatDate(user.bornDate)}</td>
    
    <td>
 
    <button class="action-btn btn-danger"
     title="Borrar usuario"
     onclick="borrarUsuario ('${user.id}')"
     >
    <i class="fa-solid fa-trash-can"></i>
    </button>

    <button class="action-btn"
             title="Editar usuario"
             onclick = "editarUsuario('${user.id}')">

             <i class="fa-solid fa-pen-to-square"></i>
             </button> 
    </td>
 </tr>`
  })
 }


 pintarUsuarios(usersArray)

///**Como borrar  usuarios con una funcion**

 function borrarUsuario(ID){

  const confirmDelete = confirm('Realmente desea borrar este usuario')

  if(confirm){

  const indice = usersArray.findIndex(user => user.id === ID)

  usersArray.splice(indice,1)
  pintarUsuarios(usersArray)
  }

 }

  //**Como editar un usuario**
 function editarUsuario(id){
  //Buscar un usuario con ese id y obtenerlo
  const userEdit =usersArray.find((usuario) => {
//esta funcion debe devolver un true si coincide cel id con el usuario buscado
if(usuario.id === id){
  return true ;
}

})
  //Indicar que el usuario no fue encontrado
  if(userEdit === undefined){
    
    Swal.fire('Error al editar','No se pudo editar el usuario','error' )
    return
  }

   console.log(userEdit)

  //Rellenar el formulario con los datos del usuario a editar

     const el = userForm.elements;
     
     el.id.value = userEdit.id;//input oculto para poder editar ocultando el id

     el.age.value = userEdit.age
     el.fullname.value = userEdit.fullname
     el.email.value = userEdit.email
     el.image.value = userEdit.image
     el.location.value = userEdit.location
     el.active.checked = userEdit.active
     //Deshabilatr input de contraseña
     el.password.value = userEdit.password
     el.password.disabled = true
     el.password2.value = userEdit.password
     el.password2.disabled = true

    el.bornDate.value = formatInputDate(userEdit.bornDate)
  
  //Cambiiar el nombre  y el color del boton al editar usuario
  


 submitBtn.classList.add('btn-edit')//color
 submitBtn.innerText = 'Editar usuario'//nombre
       
 }



 




















  