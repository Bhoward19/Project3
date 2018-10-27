var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Party = require('../models/Party.js');

/* GET ALL partys */
router.get('/', function(req, res, next) {
  Party.find(function (err, partys) {
    if (err) return next(err);
    res.json(partys);
  });
});

/* GET SINGLE Party BY ID */
router.get('/:id', function(req, res, next) {
  Party.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Party */
router.post('/', function(req, res, next) {
  Party.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Party */
router.put('/:id', function(req, res, next) {
  Party.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Party */
router.delete('/:id', function(req, res, next) {
  Party.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;