var express = require('express');
var router = express.Router();

/* GET home page. */
<<<<<<< HEAD
router.get('/exampledirectory', function(req, res, next) {
=======
router.get('/', function(req, res, next) {
>>>>>>> a5bb24f62ec9dcdcc80c5a4b3fd437c0a8392db5
  res.render('index', { title: 'Express' });
});

module.exports = router;
