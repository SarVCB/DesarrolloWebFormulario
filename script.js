function mostrarConsultorio() {
    var tipoSeleccionado = document.getElementById("tipo").value;
    var consultorio = document.getElementById("consultorioSection");
  
    if (tipoSeleccionado === "paciente") {
      consultorio.style.display = "none";
    } else {
      consultorio.style.display = "block";
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("formulario");
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto
      
      var tipo = document.getElementById("tipo").value;
      var nombre = document.getElementById("nombre").value;
      var apellido = document.getElementById("apellido").value;
      var cedula = document.getElementById("cedula").value;
      var correo = document.getElementById("correo").value;
      var consultorio = document.getElementById("consultorio").value;
      var especialidad = document.getElementById("especialidad").value;
  
      var datosFormulario = {
        tipo: tipo,
        nombre: nombre,
        apellido: apellido,
        cedula: cedula,
        correo: correo,
        consultorio: consultorio,
        especialidad: especialidad
      };
  
      var jsonData = JSON.stringify(datosFormulario, null, 2);
  
      var link = document.createElement("a");
      link.setAttribute("href", "data:text/json;charset=utf-8," + encodeURIComponent(jsonData));
      if (tipo === "paciente") {
        link.setAttribute("download", "formulario_paciente.json");
      } else if (tipo === "doctor") {
        link.setAttribute("download", "formulario_doctor.json");
      }
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });