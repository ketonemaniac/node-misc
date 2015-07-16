/*
 * You don't need to care if the 
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:29998/nodejs');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
	  console.log('meow');
  } else {
	  console.log('miii saved');
	  countKitten();
  }
});

function countKitten() {
	Cat.find( {name: "Zildjian"}, function(err, kitten) {
		console.log(kitten.length);
	} );
}