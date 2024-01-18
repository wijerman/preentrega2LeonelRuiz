//validacion de nombre

let nombre = prompt("Ingrese su Nombre");

while (nombre === null || nombre === "") {
  nombre = prompt("Por favor, ingrese su nombre");

  // Display an alert message if the name is empty
  alert("El nombre no puede estar vacío. Por favor, complete el campo requerido");
}


// Validacion de Apellido

let apellido = prompt("Ingrese su Apellido");

while (apellido === null || apellido === "") {
  apellido = prompt("Por favor, ingrese su Apellido");
  alert("El apellido no puede estar vacío. Por favor, complete el campo requerido");
}
// Validacion de edad

let edad =parseInt(prompt("Ingresa tu edad"))
while (isNaN(edad) || edad < 18 ){
  let edadString=prompt ("Hola " + nombre + " " + apellido + " Ingresa tu edad");

if(!isNaN (edadString)){
edad = parseInt(edadString);

if (isNaN(edad) || edad < 18){
  alert("Lo siento, debes ser mayor de 18 años para continuar.");
  console.log ("no podes continunar sin ser mayor de edad");
}
} else{
  alert("Por favor, ingresa un numero valido para la edad.");

}
}
;alert("Bienvendo a LrKinesio " + nombre + " " + apellido);

//Opciones de tratamiento
let opcion = prompt(
  "Elija la especialidad en la que está interesado:\n- 1) Kinesiología\n- 2) Quiropraxia\n- 3) Osteopatia\n- 4) Suscribirte"
);

// Validate if the input is a number between 1 and 4
if (opcion >= 1 && opcion <= 4) {
  switch (opcion) {
    case "1":
      console.log("Elegiste Kinesiología");
      break;
    case "2":
      console.log("Elegiste Quiropraxia");
      break;
    case "3":
      console.log("Elegiste Osteopatía");
      break;
    case "4":
      console.log("Elegiste Suscribirte");
      break;
  }
} else {
  console.log("Elegiste una opción no válida");
}