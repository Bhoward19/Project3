const mongoose = require('mongoose');
const router = require('express').Router();
const consoles = mongoose.model('consoles');

router.post('/', (req, res, next) => {
  const { body } = req;

  if(!body.title) {
    return res.status(422).json({
      errors: {
        title: 'is required',
      },
    });
  }

  if(!body.author) {
    return res.status(422).json({
      errors: {
        author: 'is required',
      },
    });
  }

  if(!body.body) {
    return res.status(422).json({
      errors: {
        body: 'is required',
      },
    });
  }

  const finalconsoles = new consoles(body);
  return finalconsoles.save()
    .then(() => res.json({ consoles: finalconsoles.toJSON() }))
    .catch(next);
});

router.get('/', (req, res, next) => {
  return consoles.find()
    .sort({ createdAt: 'descending' })
    .then((consoles) => res.json({ consoles: consoles.map(consoles => consoles.toJSON()) }))
    .catch(next);
});

router.param('id', (req, res, next, id) => {
  return consoles.findById(id, (err, consoles) => {
    if(err) {
      return res.sendStatus(404);
    } else if(consoles) {
      req.consoles = consoles;
      return next();
    }
  }).catch(next);
});

router.get('/:id', (req, res, next) => {
  return res.json({
    consoles: req.consoles.toJSON(),
  });
});

router.patch('/:id', (req, res, next) => {
  const { body } = req;

  if(typeof body.title !== 'undefined') {
    req.consoles.title = body.title;
  }

  if(typeof body.author !== 'undefined') {
    req.consoles.author = body.author;
  }

  if(typeof body.body !== 'undefined') {
    req.consoles.body = body.body;
  }

  return req.consoles.save()
    .then(() => res.json({ consoles: req.consoles.toJSON() }))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  return consoles.findByIdAndRemove(req.consoles._id)
    .then(() => res.sendStatus(200))
    .catch(next);
});

module.exports = router;