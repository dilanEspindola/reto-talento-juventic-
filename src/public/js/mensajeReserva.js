window.addEventListener('DOMContentLoaded', () => {
    swal({
        title : 'Envio Exitoso',
        text : 'La reserva se ha enviado a tu correo electronico, revisar la bandeja de entrada',
        icon : 'success',
        button : 'OK' 
    });
})

function almacenarDatos() {
    let nombre = document.querySelector('#nombre').textContent;
    let email = document.querySelector('#email').textContent;
    let telefono = document.querySelector('#tel').textContent;
    let numPersonas = document.querySelector('#numPersonas').textContent;
    let servicio = document.querySelector('#servicio').textContent;
    let fecha = document.querySelector('#fecha').textContent;
    let hora = document.querySelector('#hora').textContent;
    let indicacionesEspeciales = document.querySelector('#mensaje').textContent;

    let datos = {
        nombre,
        email,
        telefono,
        numPersonas,
        servicio,
        fecha,
        hora,
        indicacionesEspeciales
    }

    if(JSON.parse(localStorage.getItem('listas')) === null) {
        let alamcenarDatos = [];
        alamcenarDatos.push(datos);
        localStorage.setItem('listas', JSON.stringify(alamcenarDatos));
    } else {
        let actualizar = JSON.parse(localStorage.getItem('listas'));
        actualizar.push(datos);
        localStorage.setItem('listas', JSON.stringify(actualizar));
    }
}
almacenarDatos();

function guardarDatos() {
    JSON.parse(localStorage.getItem('listas'));
}