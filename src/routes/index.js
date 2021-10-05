const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const { oauth2 } = require('googleapis/build/src/apis/oauth2');
const { gmail } = require('googleapis/build/src/apis/gmail');

router.get('/', (req, res) => {
    res.render('index.html');    
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros.html');
});

router.get('/menu', (req, res) => {
    res.render('menu.html');
})

router.get('/servicio', (req, res) => {
    res.render('servicio.html');
});

router.get('/servicio/reserva', (req, res) => {
    res.render('reserva.html');
});

router.post('/envio-reserva', (req, res) => {
    const {
        nombre,
        email,
        telefono,
        numPersonas,
        servicio,
        fecha,
        hora,
        mensaje
    } = req.body;

    const contentHTML = `
        <h1>Datos de la reserva:<h1>
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Correo: ${email}</li>
            <li>Telefono: ${telefono}</li>
            <li>Numero de personas para la reserva: ${numPersonas}</li>
            <li>Servicio: ${servicio}</li>
            <li>Fecha: ${fecha}</li>
            <li>Hora: ${hora}</li>
        </ul>
        <p>Indicaciones especiales: ${mensaje}</p>
    `;

    const clientId = '6723902174-9ne0jjunq4l3v0aoctdeu42uqs32v90q.apps.googleusercontent.com';
    const secretoCliente = '0EwzpC5BMnUj8i9sebPKbVOX';
    const refreshToken = '1//04H3ipR2d_ZYfCgYIARAAGAQSNwF-L9IrgDROTnQDFewk170-DQZPMIwfjl4SftShPNTl0DKFIlNmPERiOotliaHlGAHFpblL2Eg'
    const redirectURI = 'https://developers.google.com/oauthplayground';

    const oAuth2Client = new google.auth.OAuth2(clientId, secretoCliente, redirectURI);
    oAuth2Client.setCredentials({refresh_token: refreshToken});

    async function sendMail() {
        try {
            const accessToken = await oAuth2Client.getAccessToken();
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth : {
                    type: "OAuth2",
                    user : 'cartooncliente@gmail.com',
                    clientId : clientId,
                    clientSecret : secretoCliente,
                    refreshToken : refreshToken,
                    accessToken : accessToken
                }
            });

            let destinatarios = [email, 'cartooncliente@gmail.com'];

            const mailOptions = {
                    from: "Informacion de la reserva <cartooncliente@gmail.com",
                    to: destinatarios,
                    subject : "Informacion de la reserva",
                    html : contentHTML
                };          

            const result = await transporter.sendMail(mailOptions);
            return result;
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
    sendMail()
        .then(result => res.render('envioreserva.html', {
            nombre : nombre,
            correo : email,
            telefono : telefono,
            numeroPersonas : numPersonas,
            servicio: servicio,
            fecha : fecha,
            hora: hora,
            indicacionesEspeciales : mensaje
        }))
        .catch(error => console.log(error.message));
        
    console.log(req.body);
});

router.get('/contactenos', (req, res) => {
    res.render('contactenos.html');
});

router.get('/carrito-de-compras', (req, res) => {
    res.render('carrito.html');
})

router.get('/mapa-del-sitio', (req, res) => {
    res.render('mapa.html');
})

module.exports = router;