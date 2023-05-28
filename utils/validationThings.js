const yup = require('yup');

const ThingSCHEMA = yup({
    body: yup.string().required().min(3).max(100)
});

module.exports.validateThing = async (req, res, next) => {
    const {body} = req;
    try {
        const validated = await ThingSCHEMA.validate(body);
        if(validated) {
            next();
        }
    } catch(error) {
        next(error);
    }
}