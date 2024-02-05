let usuarios = [];  //Almacenamiento de informacion de los usuarios

function ingresarInformacionUsuario() {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let edad = prompt("Ingrese su edad:");

    // Verificar si la información 
    if (nombre !== null && nombre !== "" && apellido !== null && apellido !== "" && !isNaN(edad)) {
    
        let edadNumero = parseInt(edad);

        if (edadNumero < 18) {
            alert("Lo siento, debes ser mayor de 18 años para acceder a esta página.");
            // Volver a iniciar del proceso
            ingresarInformacionUsuario();
        } else {
            let usuario = {
                nombre: nombre,
                apellido: apellido,
                edad: edadNumero
            };

            usuarios.push(usuario); 
            alert("¡Bienvenido a LrKinesio, " + nombre + " " + apellido + "!");
        }
    } else {
        alert("Por favor, ingrese información válida.");
        // Volver a iniciar el proceso
        ingresarInformacionUsuario();  
    }
}

ingresarInformacionUsuario();

console.log("Información de usuarios ingresada:", usuarios);


// Definir un array de objetos para representar las opciones
const especialidades = [
    { codigo: "1", nombre: "Kinesiología" },
    { codigo: "2", nombre: "Quiropraxia" },
    { codigo: "3", nombre: "Osteopatia" },
    { codigo: "4", nombre: "Suscribirte" },
  ];
  
  // Mostrar las opciones al usuario
  let mensaje = "En qué especialidad estás interesado:\n";
  especialidades.forEach((especialidad) => {
    mensaje += `-${especialidad.nombre}\n`;
  });
  
  // Obtener la opción del usuario
  let opcion = prompt(mensaje);
  
  // Buscar la opción seleccionada en el array de objetos
  const especialidadSeleccionada = especialidades.find((especialidad) => especialidad.codigo === opcion);
  
  // Mostrar el resultado
  if (especialidadSeleccionada) {
    console.log(`Elegiste ${especialidadSeleccionada.nombre}`);
  } else {
    console.log("Elegiste una opción no válida");
  }
  