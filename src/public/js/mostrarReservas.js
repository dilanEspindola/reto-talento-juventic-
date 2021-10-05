function mostrarDatos() {
    let datos = JSON.parse(localStorage.getItem('listas'));
    let mostrar = document.querySelector('.contenedor-reservas');

    for(let i = 0; i < datos.length; i++) {
        let nombre = datos[i].nombre;
        let email = datos[i].email;
        let telefono = datos[i].telefono;
        let numPersonas = datos[i].numPersonas;
        let servicio = datos[i].servicio;
        let fecha = datos[i].fecha;
        let hora = datos[i].hora;
        let indicacionesEspeciales = datos[i].indicacionesEspeciales;

        mostrar.innerHTML += `
            <div class="info-reserva">
                <h2>Informacion de la reserva</h2>

                <div class="datos-reserva">
                    <p>${nombre}</p>
                    <p>${email}</p>
                    <p>${telefono}</p>
                    <p>${numPersonas}</p>
                    <p>${servicio}</p>
                    <p>${fecha}</p>
                    <p>${hora}</p>
                    <p>${indicacionesEspeciales}</p>
                </div>
            </div>
        `;
    } 
}
mostrarDatos();