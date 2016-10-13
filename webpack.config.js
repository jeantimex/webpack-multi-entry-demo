var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'app.js'),
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: 'main.bundle.js',
    },
};
