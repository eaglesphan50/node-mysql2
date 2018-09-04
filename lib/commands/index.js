// CUSTOM FILE TO WORK WITH SERVERLESS OPTIMIZE (CHANGED FROM THE MYSQL2 LIBRARY)

// ORIGINAL CODE vvv
/*'client_handshake server_handshake query prepare close_statement execute ping register_slave binlog_dump change_user quit'
  .split(' ')
  .forEach(function(name) {
    var ctor = require('./' + name + '.js');
    module.exports[ctor.name] = ctor;
  });*/

// REVISED CODE vvv
var temp = require('./client_handshake.js');
module.exports[temp.name] = temp;
temp = require('./server_handshake.js');
module.exports[temp.name] = temp;
temp = require('./query.js');
module.exports[temp.name] = temp;
temp = require('./prepare.js');
module.exports[temp.name] = temp;
temp = require('./close_statement.js');
module.exports[temp.name] = temp;
temp = require('./execute.js');
module.exports[temp.name] = temp;
temp = require('./ping.js');
module.exports[temp.name] = temp;
temp = require('./register_slave.js');
module.exports[temp.name] = temp;
temp = require('./binlog_dump.js');
module.exports[temp.name] = temp;
temp = require('./change_user.js');
module.exports[temp.name] = temp;
temp = require('./quit.js');
module.exports[temp.name] = temp;
