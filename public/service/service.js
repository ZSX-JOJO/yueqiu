const http = require("http.js");
function getHome() {
  return http.post("books/overview");
}
module.exports = {
  getHome
};
