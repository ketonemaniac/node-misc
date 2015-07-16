/**
 * New node file
 */
var net = require('net');


var loggedIn = false;
var sessionSent = false;

var client = net.connect({port: 17001, host: "10.112.125.76"},
	    function() { //'connect' listener
			  console.log('connected to server!');
			  client.write('SignOn\tS002\tS002\r\n');
			});
client.on('data', function(data) {
	console.log(data.toString());
	if(!loggedIn) {
		login();
	}
	else if(!sessionSent) {
		session();
	}
	
});
client.on('end', function() {
	console.log('disconnected from server');
});


function login() {
	client.write('12345A\t123451\tLogin\t32320\t000000016\ta12345678\t1\t10.112.125.147\t\r\n');
	loggedIn = true;
}

function session() {
	client.write('12345\t123452\tConnect Start\t12345\r\n');
	sessionSent = true;
}


function disconnect() {
	client.end();			// disconnect
}



