var app = require('./packages').app();
var port = require('./properties').port();
var config = require('../config');

// start the server
module.exports = {
    start: function() {
        app.listen(process.env.PORT || 8080, function () {
          var port = server.address().port;
          console.log("RUNNING: App now running on port", port);
        });
    }
};
