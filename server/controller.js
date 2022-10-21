var model = require('./model');
var FBviews = model.fbviewsdb;
var FBmsg = model.fbmessagedb;
var IGviews = model.igviewsdb;
var IGmsg = model.igmessagedb;
var sendmail = require('./sendemail');
const url = require('url');

exports.fbview = (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }

    var viewdata = new FBviews({
        ip: req.socket.remoteAddress,
        visittime: req.body.currenttime,
        session: req.session.id
    })
    
    viewdata
        .save()
        .catch(err => {
            console.log(err, " while saving the first data");
        });

    res.status(200).end();

}


exports.fbmessage = (req, res) => {
    if (req.body) {

        let name = req.body.name ? req.body.name : 'Anonymous';
        let message = req.body.message;


        var messagedata = new FBmsg({
            name: name,
            message: message,
            session: req.session.id
        })
        console.log(messagedata);
        messagedata
            .save()
            .catch(err => {
                console.log(err, " while saving the first data");
            });

        res.send('<h1>Thanks for the message</h1>');
        sendmail.sendEmail(name, message);
        res.status(200).end();
    }
    else {
        return;
    }

}
exports.igview = (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }

    var viewdata = new IGviews({
        ip: req.socket.remoteAddress,
        visittime: req.body.currenttime,
        session: req.session.id
    })

    viewdata
        .save()
        .catch(err => {
            console.log(err, " while saving the first data");
        });

    res.status(200).end();

}


exports.igmessage = (req, res) => {
    if (req.body) {
        let name = req.body.name ? req.body.name : 'Anonymous';
        let message = req.body.message;


        var messagedata = new IGmsg({
            name: name,
            message: message,
            session: req.session.id
        })

        messagedata
            .save()
            .catch(err => {
                console.log(err, " while saving the first data");
            });

        res.send('<h1>Thanks for the message</h1>');
        sendmail.sendEmail( name, message);
        res.status(200).end();
    }
    else {
        return;
    }

}
exports.getFBviews = (req, res) => {
    FBviews.find()
        .sort({ created_at: 1 })
        .then(views => {
            res.send(views)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving Views db information" })
        })
}
exports.getIGviews = (req, res) => {
    IGviews.find()
        .sort({ created_at: 1 })
        .then(views => {
            res.send(views)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving Views db information" })
        })
}
exports.getFBmsg = (req, res) => {
    FBmsg.find()
        .sort({ created_at: 1 })
        .then(msgs => {
            res.send(msgs)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving Views db information" })
        })
}
exports.getIGmsg = (req, res) => {
    IGmsg.find()
        .sort({ created_at: 1 })
        .then(msg => {
            res.send(msg)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving Views db information" })
        })
}


