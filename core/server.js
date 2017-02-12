var app = require('./packages').app();
var port = require('./properties').port();
var config = require('../config');

// start the server
module.exports = {
    start: function() {
        //app.listen(config.port);
        //app.set('port', (process.env.PORT || 5000));
        var server = app.listen(process.env.PORT || 8080, function () {
          var port = server.address().port;
          console.log("App now running on port", port);
        });
        console.log('RUNNING: api running on port: ' + config.port);
    }
};
