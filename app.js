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
    },
    {
      title: "blog2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id pretium mi, vitae hendrerit magna. Vivamus pharetra erat quis turpis aliquet volutpat. In volutpat eros a dolor lacinia placerat. Maecenas in euismod sem. Quisque ullamcorper egestas libero ultricies varius. Pellentesque porttitor quam aliquam gravida dapibus. Fusce nibh purus, suscipit ut elementum ut, porta sed ligula. Duis congue fermentum justo quis suscipit. Quisque eget nisi tempor turpis faucibus ullamcorper. Aenean in est nec erat finibus eleifend. Nullam aliquam lorem in tortor consequat vulputate. Praesent nisl ipsum, tristique a diam sed, aliquet posuere tortor. Ut blandit ante ante, at pharetra orci elementum quis. Morbi id ultrices justo, sit amet egestas dui. Nulla bibendum lorem ac scelerisque tincidunt. Sed sit amet justo fringilla, gravida odio eu, posuere neque. Ut pellentesque nulla sed mauris sagittis consectetur. Ut iaculis risus dolor, a posuere risus tincidunt eget. Vivamus vitae varius nibh, nec imperdiet ipsum. Nunc interdum nisl id velit venenatis tempor. Duis dignissim, magna sit amet condimentum dapibus, felis ante blandit enim, ut bibendum ipsum tortor in eros. Proin euismod tempus dolor, sit amet bibendum risus convallis sed. Curabitur varius elementum felis eget lacinia. Phasellus at commodo felis, non ornare nisi. Nulla quis congue mi. Sed vitae cursus purus. Sed felis neque, commodo a ligula sed, ornare euismod risus. Nulla eget enim erat. Fusce nec pulvinar magna. Sed consectetur urna sed venenatis gravida. Donec id elit elementum, eleifend urna pellentesque, porta felis. Etiam vitae nibh eleifend, accumsan velit sit amet, vehicula est. Quisque at condimentum enim.",
      name: "henzel"
    }
  ];
  res.render('index', { blogs });
});
 
app.use((request, response) => {
  response.status(404).render('404');
});

app.listen(3000);