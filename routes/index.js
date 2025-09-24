var express = require('express');
var router = express.Router();
const multer = require('multer');
const mainController = require('../controllers/mainController');

const upload = multer();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello world!');
});

router.post('/send_emails', mainController.send_emails);
router.post('/contact', mainController.contact);

module.exports = router;