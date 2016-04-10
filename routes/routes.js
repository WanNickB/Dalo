var fs = require('fs');

module.exports = function(router){
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file === "routes.js" || file.substr(file.lastIndexOf('.') + 1) !== 'js')
            return;
        var name = file.substr(0, file.indexOf('.'));
        require('./' + name)(router);
        console.log('./' + name);
    });
}