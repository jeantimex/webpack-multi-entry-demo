var greetings = require('../utils/greetings');
var drinking = require('../utils/drinking');
var message = greetings.sayHello() + ', ' + drinking.drink();
alert(message);
