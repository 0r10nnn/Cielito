function mostrarMensaje(idMensaje) {
    var mensajes = document.querySelectorAll('.mensaje');
    mensajes.forEach(function(mensaje) {
      mensaje.classList.remove('visible');
    });
    document.getElementById(idMensaje).classList.add('visible');
  }