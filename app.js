const { render } = require('ejs');
const { response } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blog');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://user:password1234@henzelnet.zm5jf.mongodb.net/henzelnet?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(
  app.listen(process.env.PORT || 3000)
);

app.get('/', (req, res) => {
  // const blogs = [
  //   {
  //     title: "Test",
  //     description: "bloga",
  //     name: "Mikolaj"
  //   },
  //   {
  //     title: "blog2",
  //     description: "bloga",
  //     name: "henzel"
  //   }
  // ];
  Blog.find().sort('-createdAt').then((blogs) => {
    //console.log(blogs);
    res.render('index', { blogs });
  }).catch((error) => {
    console.log(error);
  });
})

app.post('/', (request, response) => {
  const blog = new Blog(request.body)
  blog.save()
  .then(()=>{
    response.redirect('/');
  }).catch((error) => {
    console.log(error);
  })
});

app.use((request, response) => {
  response.status(404).render('404');
});