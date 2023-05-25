const {Thing} = require('../models/index');

module.exports.createThing = async (req, res, next) => {
    const {body} = req;
    try {
    const createdThing = await Thing.create(body);
    if (createdThing) {
        return res.status(201).send(createdThing);
    }else {
        return res.status(400).send();
    }
    } catch(error) {
        next(error);
    }
}