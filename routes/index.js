var express = require('express');
var router = express.Router();
const ticketdataController = require('../controllers').ticketdata;
const reportdataController = require('../controllers').reportdata;

router.get('/api/reportdata', reportdataController.daySummary);
router.get('/api/reportdata/:day', reportdataController.dayAverage);

router.get('/api/ticketdata', ticketdataController.list);
router.get('/api/total', ticketdataController.total);
router.get('/api/average', ticketdataController.average);
router.get('/api/ticketdata/:id', ticketdataController.getById);
router.post('/api/ticketdata', ticketdataController.add);
router.put('/api/ticketdata/:id', ticketdataController.update);
router.delete('/api/ticketdata/:id', ticketdataController.delete);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
