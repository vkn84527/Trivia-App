const joi = require("joi");
const responses = require('../modules/common_functions/responses')
const constants = require('../modules/constants/constants')

const validation = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(5).required()
});

const userloginValidation = async (req, res, next) => {
    const payload = {
        email: req.body.user_email,
        password: req.body.user_password
    };

    const { error } = validation.validate(payload);
    if (error) {
        responses.sendResponse(res, `Error in user Data : ${error.message}`, constants.STATUS_CODES.UNAUTHORIZED)
    } else {
        next();
    }
};



module.exports = { userloginValidation }