const { response } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.static('public'));
 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const blogs = [
    {
      title: "Test",
      description: "bloga",
      name: "Mikolaj"
    }
  ];
  res.render('index', { blogs });
});
 
app.use((request, response) => {
  response.status(404).render('404');
});

app.listen(3000);