require('./loadconfig');

var rp = require('request-promise'),
    mailer = require('./mailer'),
    Database = require('./db');

var db = new Database();

var compareIp = function(addr) {
  var msg = '';

  db.get(function(result) {
    if (addr !== result) {
      db.save(addr);

      msg = 'new IP Address: ' + addr + ', previous IP Address: ' + result;
      mailer(config.email.to, msg);
      console.log(msg);
    }
  });

  return addr;
};

rp('http://www.echoip.com')
  .then(compareIp)
  .catch(console.error);
