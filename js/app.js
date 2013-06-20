var appName = process.argv[2], //0 = node, 1 = js file, 2 = app name, 3 = options
    appOptions = process.argv[3],
    app = require('./app-express.js')(appName, appOptions);
var appName = process.argv[2], //0 = node, 1 = js file, 2 = app name, 3 = options
    appOptions = process.argv[3],
    app = require('./app-express.js')(appName, appOptions);