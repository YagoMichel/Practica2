document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    console.log('Formulario enviado:');
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);

    document.getElementById('contactForm').reset();

    alert('¡Gracias por tu mensaje, nos pondremos en contacto pronto!');
});