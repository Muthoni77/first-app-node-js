var url = "http://my logger.io/log";

function log(message) {
  // send an http request
  console.log(message);
}
module.exports.log = log;

