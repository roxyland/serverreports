var express = require('express');
var router = express.Router();

var serverdata = [
        { 
		    name: 'saturn', 
			os: 'AIX',
			release: '7.2',
			files: [ 
		        { 
					name: '/etc/motd', 
					contents: 'Property of Westpac'
				},
		        { 
					name: '/etc/hosts', 
					contents: 'This is the hosts file'
				}
            ],
			nics: [
				{
					name: 'eth0',
					ips: [ '192.168.0.1', '175.0.0.2' ]
				},
				{
					name: 'eth1',
					ips: [ '192.168.1.1', '175.0.1.2' ]
				}
			]
        }
	];

router.get('/server/:servername', function(req, res){
	const server = req.params.servername;
	var data = serverdata.find( ({ name }) => name === server );
    console.log('Found server: ' + server);
    console.log('Got ' + server + "'s data:-");
    console.log(data);
    // var jsonParsed = JSON.parse(data);
	// res.send(data);
	res.render('pages/server', {
		server: server,
		serverdata: data
	});
})

module.exports = router;