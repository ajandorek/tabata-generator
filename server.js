var express = require('express');
var path = require("path");

const app = express();

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});