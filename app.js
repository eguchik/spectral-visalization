var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', (req, res, next) => {
  res.render('index', {});
})

app.listen(3000);