var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser');

var homeRoutes    = require('./routes/home');
var serverRoutes    = require('./routes/servers');
var aboutRoutes    = require('./routes/about');

app.use(bodyParser.urlencoded({extended: true}));

// serve public directory. By default express only serves 'views'
app.use(express.static(__dirname + '/public'));

// Expect ejs files, so we don't have to specify .ejs on each file
app.set('view engine', 'ejs');

// Use/include the routes
app.use(homeRoutes);
app.use(serverRoutes);
app.use(aboutRoutes);

app.listen(3000, () => {
	console.log('Server started!');
})