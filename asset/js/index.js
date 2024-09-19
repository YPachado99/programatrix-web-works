//Funcion para el Formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbws4ZpftopdUUr4k9_RhPQUkKaHBEAtfXupndX6O3aiXSJ2zAQDmHYl3XYDFNTCwJvJzQ/exec', {
        method: 'POST',
        body: data
    })
    .then(response => response.text())
    .then(text => {
        if (text.includes("Datos enviados correctamente")) {
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: '¡Formulario enviado con éxito!',
                confirmButtonText: 'Aceptar'
            });
            form.reset(); 
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al enviar el formulario. Inténtalo de nuevo.',
                confirmButtonText: 'Aceptar'
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.',
            confirmButtonText: 'Aceptar'
        });
    });
});

