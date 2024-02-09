const router = require('express').Router();

const serviceController = require('../controllers/service.controller');

router.route("/service").post((req,res) => serviceController.create(req,res));

module.exports = router;