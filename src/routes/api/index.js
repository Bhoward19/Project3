const router = require('express').Router();

router.use('/consoles', require('./consoles'));

module.exports = router;