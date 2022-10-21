const express = require('express');
const route = express.Router()

// const services = require('./render');
const controller = require('./controller');

/**
 *  @description Root Route
 *  @method GET /
 */


route.post('/fbview', controller.fbview);
route.post('/fbmsg', controller.fbmessage);

route.post('/igview', controller.igview);
route.post('/igmsg', controller.igmessage);

route.get('/fbviews',controller.getFBviews);
route.get('/fbmsg',controller.getFBmsg);
route.get('/igviews', controller.getIGviews);
route.get('/igmsg', controller.getIGmsg);
// route.put('/api/users/:id', controller.update);
// route.delete('/api/users/:id', controller.delete);


module.exports = route