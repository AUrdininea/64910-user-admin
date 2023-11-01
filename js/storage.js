//Guardar datos uso una key y el valor

const user = [1,2,3,4,5]
localStorage.setItem("usuario", JSON.stringify(user))

//Obtenr datos del localStorage

const resulatado = JSON.parse(localStorage.getItem("usuario"))

console.log (resulatado)

//Borrar un dato guradado
localStorage.removeItem("")

//Borrar todo locaStorage
localStorage.clear//()