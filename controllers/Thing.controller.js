const {Thing} = require('../models');

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

module.exports.getAllThings = async (req, res, next) => {
    try {
        const things = await Thing.findAll();
        return res.status(200).send(things);
    } catch(error) {
        next(error);
    }
}

module.exports.getOne = async (req,res,next) => {
    const {params: {id}} = req;
    try {
        console.log(id);
        const thing = await Thing.findByPk(id);
        res.status(200).send(thing);
    } catch(error) {
        next(error);
    }
}

module.exports.deleteOne = async (req, res, next) => {
    const {params: {id}} = req;
    try {
        const deleted = await Thing.deleteByPk(id);
        res.status(200).send(deleted);
    } catch(error) {
        next(error);
    }
}

module.exports.updateOne = async (req, res, next) => {
    const {params: {id}, body} = req;
    try {
        const updated = await Thing.updateByPk({id, updateValues: body});
        res.status(200).send(updated);
    } catch(error) {
        next(error);
    }
}