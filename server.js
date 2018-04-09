const e = require('express');
const app = e();
const axios = require('axios');
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partial');
app.set('view engine','hbs');//setting hbs as view engine



app.use((req, res, next) => {
  console.log( new Date().toString() + req.url);
  next();
});
app.use((req, res, next) => {
  res.render('maintenance.hbs', {
    content: 'website under maintenance',
  });
});
//static is for e not for app.
app.use(e.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send({
    king: 'Lokesh',
    position: 'MTS',
  });
});

app.listen(3000, ()=> {
  console.log('Server started and listening to 3000');
});
