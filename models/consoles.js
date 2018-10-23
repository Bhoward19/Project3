var mongoose = require('mongoose');

var consolesSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});


var Consoles = module.exports = mongoose.model('Consoles', consolesSchema);

// Get Consoles
module.exports.getConsoles = function(callback, limit){
    Consoles.find(callback).limit(limit);
}
    // Get Consoles
module.exports.addConsoles = function(Consoles, callback){
    Consoles.create(Consoles, callback);

}