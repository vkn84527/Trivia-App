const responses = require('..//modules/common_functions/responses')
const constants = require('../modules/constants/constants')
const jwt = require('jsonwebtoken')
require('dotenv').config();
var secret_key = process.env.secret_key


module.exports.user = (req, res, next) => {
    try {
        var token = req.headers.authorization;
        const decoded = jwt.verify(token, secret_key);
        req.userData = decoded;
        req.user_id = req.userData.user_id
        next();
    } catch (error) {
        responses.sendResponse(res, 'Auth Failed', constants.STATUS_CODES.UNAUTHORIZED)
    }
};
