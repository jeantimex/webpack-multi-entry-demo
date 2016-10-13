var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        home: './home/app.js',
        about: './about/app.js',
    },
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: '[name].bundle.js',
    },
};
