var express = require('express');
var path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!')
});
