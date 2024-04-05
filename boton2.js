document.getElementById("porta").addEventListener("click", function() {
    // Mostrar un cuadro de diálogo de confirmación al usuario
    var confirmacion = window.confirm("¿Estás seguro?");
    
    // Si el usuario confirma, esperar 3 segundos antes de cambiar la ubicación de la ventana
    if(confirmacion) {
        setTimeout(function() {
            window.location.href = "https://music.youtube.com/watch?v=QUZUVYHegRo&list=RDAMVMQUZUVYHegRo";
        }, 3000); // Cambia la ubicación de la ventana después de 3 segundos (3000 milisegundos)
    }
});
