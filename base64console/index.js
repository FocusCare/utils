var fs = require('fs');
var argv = process.argv;

fs.readFile(argv[2], function(err, data) {
    console.log(data.toString('base64'))
});
