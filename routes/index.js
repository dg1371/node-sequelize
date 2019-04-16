var express = require('express');
var router = express.Router();
const ticketdataController = require('../controllers').ticketdata;

router.get('/api/ticketdata', ticketdataController.list);
router.get('/api/ticketdata/:id', ticketdataController.getById);
router.post('/api/ticketdata', ticketdataController.add);
router.put('/api/ticketdata/:id', ticketdataController.update);
router.delete('/api/ticketdata/:id', ticketdataController.delete);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
