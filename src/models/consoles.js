var mongoose = require('mongoose');

var consolesSchema = mongoose.Schema({
    title: { type: String, required: true },
    platform: { type: String, required: true},
    tag: { type: String, required: true},
    description: { type: String, required: true }
});


var consoles = module.exports = mongoose.model('consoles', consolesSchema);

// Get Consoles
module.exports.getConsoles = function(callback, limit){
    consoles.find(callback).limit(limit);
}
    // Get Consoles
module.exports.addConsoles = function(consoles, callback){
    consoles.create(consoles, callback);

}