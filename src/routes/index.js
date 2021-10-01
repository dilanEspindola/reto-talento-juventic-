const express = require('express');
const router = express.Router();

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