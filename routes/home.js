var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	var servers = [
			{ name: 'saturn', os: 'aix', vers: '6.1' },
			{ name: 'pluto', os: 'solaris', vers: '10' },
			{ name: 'mars', os: 'linux', vers: '7.1' }
		];
	var tagline = "Our server listing";
	res.render('pages/home', {
		tagline: tagline,
		servers: servers
	});
})

module.exports = router;