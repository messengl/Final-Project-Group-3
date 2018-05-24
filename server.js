var express = require('express');
var app = express();

app.listen(3000, function (err) {
  if (!err) {
    console.log("== Server listening on port 3000");
  }
});
