const path = require('path');

module.exports = {
  mode:"production",
  entry: "./opentutorials/src/index.js",
  output: {
    path:path.resolve(__dirname, "./opentutorials/public"),
    filename:'index_bundle.js'
  }
}