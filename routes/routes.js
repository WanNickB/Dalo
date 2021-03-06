var navigation = require('./modules/navigation-module');

var fs = require('fs');

module.exports = function(router, app){
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file === "routes.js" || file.substr(file.lastIndexOf('.') + 1) !== 'js')
            return;
        var name = file.substr(0, file.indexOf('.'));
        require('./' + name)(router, app);
        console.log('./' + name);
    });
};