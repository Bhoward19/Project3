var mongoose = require('mongoose');

var companiesSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});


var Companies = module.exports = mongoose.model('Companies', companiesSchema);

// Get Companies
module.exports.getCompanies = function(callback, limit){
    Companies.find(callback).limit(limit);

}

// Add Companies
module.exports.addCompanie = function(companie, callback){
    companie.create(companie, callback);

}