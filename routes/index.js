var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

//get new message form
router.get('/new', function(req, res, next) {
  res.render('form', {title: 'New message'});
});

//post new message
router.post('/new', function(req, res, next) {
  newText = req.body.text
  newUser = req.body.user
  messages.push({text: newText, user: newUser, added: new Date()});
  res.redirect('/');
});

module.exports = router;
