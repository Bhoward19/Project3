var mongoose = require('mongoose');

var PartySchema = new mongoose.Schema({
    title: String,
    platform: String,
    tag: String,
    description: String
 
});

module.exports = mongoose.model('Party', PartySchema);