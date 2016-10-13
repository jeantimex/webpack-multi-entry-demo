// import
var aboutMessage = require('./about/app');
var homeMessage = require('./home/app');

// render
document.write('<div>index: ', aboutMessage.message, '</div>');
document.write('<div>index: ', homeMessage.message, '</div>');
