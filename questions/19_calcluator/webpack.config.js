const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.join(__dirname, './client/index.js'),
    
}

// npm i react react-dom redux react-redux