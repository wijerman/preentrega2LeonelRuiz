document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("loginForm");
  
    formulario.addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      const nombre = document.getElementById("username").value;
      const apellido = document.getElementById("lastname").value;
      const edad = parseInt(document.getElementById("edad").value);
  
      // Validar que se hayan ingresado todos los datos
      if (nombre.trim() === '' || apellido.trim() === '' || isNaN(edad)) {
        alert("Por favor, complete todos los campos correctamente.");
        return; 
      }
  
      // Validar la edad del usuario
      if (edad < 18) {
        alert("Lo siento, debes ser mayor de 18 años para ingresar.");
        return; 
      }
  
      const usuario = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
      };
  
      // Convertir el objeto de usuario a una cadena JSON
      const usuarioJSON = JSON.stringify(usuario);
  
      // Almacenar los datos del usuario en localStorage
      localStorage.setItem("usuario", usuarioJSON);
  
      console.log("Datos del usuario almacenados en localStorage:", usuario);
      window.location.href = "/";
    });
  });
