const mongoose = require('mongoose');

var fbviews = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    visittime: String,
    session: String
})

const fbviewsdb = mongoose.model('fbviews', fbviews);

var fbmessage = new mongoose.Schema({
    name: String,
    message: String,
    session: String
})
const fbmessagedb = mongoose.model('fbmessage', fbmessage);

var igviews = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    visittime: String,
    session: String
})

const igviewsdb = mongoose.model('igviews', igviews);

var igmessage = new mongoose.Schema({
    name: String,
    message: String,
    session: String
})
const igmessagedb = mongoose.model('igmessage', igmessage);

module.exports = {
    fbviewsdb,
    fbmessagedb,
    igviewsdb,
    igmessagedb
};
