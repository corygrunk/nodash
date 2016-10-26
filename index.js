var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));


var getTime = function () {
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  if (m < 10) { m = '0' + m; }
  if (s < 10) { s = '0' + s; }
  return(h + ':' + m + ':' + s);
};

var interval = setInterval(function() {
  console.log(getTime());
}, 1000);




// EXPRESS SERVER
app.listen(port, function () {
  console.log('Listening on port ' + port + '.');
});

app.get('/', function (req, res) {
    res.render('index.jade',
  	{}
  );
});
