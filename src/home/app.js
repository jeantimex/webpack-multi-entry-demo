// import
var greetings = require('../utils/greetings');

// render
message = greetings.sayHello() + ' home';
document.write('<div>home: ', message, '</div>');

// export
module.exports = {
    message: message,
};
