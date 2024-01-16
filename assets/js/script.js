//Validacion de Nombre

let Nombre = prompt("Ingrese su Nombre ");
let userName = "";

while (Nombre === userName) {
  Nombre = prompt("Por favor, ingrese su nombre ");
  if (Nombre === userName) {
    alert(
      "El nombre no puede estar vacio. Por favor, complete el campo requerido"
    );
  }
}
// Validacion de Apellido

let Apellido= prompt("Ingrese su Apellido");
while (Apellido === userName) {
  Apellido = prompt("Por favor, ingrese su Apellido ");
  if (Apellido === userName) {
    alert(
      "El apellido no puede estar vacio. Por favor, complete el campo requerido"
    );
  }
}
// Validacion de edad

let edad =parseInt(prompt("Ingresa tu edad"))
while (isNaN(edad) || edad < 18 ){
  let edadString= prompt ("Hola " + Nombre + " Ingresa tu edad:");

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
;alert("Bienvendo a LrKinesio " + Nombre + " " + Apellido);

//Opciones de tratamiento
let opcion = prompt(
  "Elija la especialidad en la que esta interesado:\n- 1) Kinesiología\n- 2) Quiropraxia\n- 3) Osteopatia\n- 4) Suscribirte"
);
switch (opcion) {
  case "1":
    console.log("elegiste Kinesiología");
    break;
  case "2":
    console.log("elegiste Quiropraxia");
    break;
  case "3":
    console.log("elegiste Osteopatia");
    break;
  case "4":
    console.log("Elegiste Suscribirte");
    break;
  default:
    console.log("Elegiste una opcion no valida");
}

