var Db = function () {
  var Datastore = require('nedb');
  this.db = new Datastore({ filename: __dirname + '/datafile', autoload: true });
};

Db.prototype.get = function(cb) {
  this.db.findOne({}, function (err, doc) {
    if (doc) {
      cb(doc.address);
    } else {
      cb(doc);
    }
  });
};

Db.prototype.save = function(addr, cb) {
  this.db.update({}, { address: addr }, { upsert: true },  function(err, doc) {});
};

module.exports = Db;
