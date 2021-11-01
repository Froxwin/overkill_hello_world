const fs = require('fs');
function read () {
  return fs.readFileSync('./hello.txt').toString();
}
module.exports = { read };
