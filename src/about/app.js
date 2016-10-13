// import
var greetings = require('../utils/greetings'),
    drinking = require('../utils/drinking');

// render
var message = greetings.sayHello() + ', ' + drinking.drink();
document.write('<div>about: ', message, '</div>');

// export
module.exports = {
    message: message,
};
