const { response } = require('express');
const express = require('express')
const app = express()

app.use(express.static('public'));
 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
 
app.use((request, response) => {
  response.status(404).render('404');
});

app.listen(3000)