config = {};

(function(){
  var file = 'config.json';
  try {
    config = require(__dirname + '/' + file);
  } catch(err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      console.error('Unable to load file', file);
    } else {
      console.error(err);
    }
    // gtfo
    process.exit(1);
  }
})();
