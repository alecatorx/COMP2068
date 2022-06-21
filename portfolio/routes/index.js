//about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

//projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' });
});

//contact page
router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Contact Me' });
});

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
