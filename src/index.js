const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//routes
app.use(require('./routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));


//arrancar servidor
app.listen(app.get('port'), () => console.log('Server on port', app.get('port')));