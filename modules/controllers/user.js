const responce = require('../common_functions/responses')
const status_code = require('../constants/constants')
const execute_query = require('./db_query').execute_query
const hash_service = require('../common_functions/hashing');
const jwt = require('jsonwebtoken')
var secret_key = process.env.secret_key
const sendmail = require('../service/user_signup__mail')

module.exports.register = async function (req, res) {

  try {
    var sql_query = 'SELECT * FROM user WHERE user_email = ?'
    var values = [req.body.user_email]
    var results = await execute_query(sql_query, values)
  

    if (results.length !== 0) {
      return responce.sendResponse(res, "Email already Registered", status_code.STATUS_CODES.BAD_REQUEST);
    }
    else {
      var hash = await hash_service.hash_password(req.body.user_password)
      var sql_query = 'INSERT INTO user(user_name,user_phone,user_email,user_password) values(?,?,?,?)'
      var values = [req.body.user_name, req.body.user_phone, req.body.user_email, hash]
      //console.log(values)
      const results = await execute_query(sql_query, values)
      

      if (results) {
        console.log("user registered sucessfully.........")
        console.log("Email send on your Mail :)")
        //sendmail.ab2() 

        const user = { user_email: req.body.user_email, user_id: results.insertId }

        token = jwt.sign(user, secret_key)

        return responce.sendtokenuserResponse(res, 'user registered sucessfully', token, req.body.user_email, results.insertId, status_code.STATUS_CODES.SUCCESS)
      }
      else {
        return responce.sendResponse(res, 'Please Enter all Required Filed', status_code.STATUS_CODES.UNAUTHORIZED)
      }
    }
  }
  catch {
    return responce.sendResponse(res, 'There are some error with query', status_code.STATUS_CODES.UNAUTHORIZED)
  }
}

module.exports.login = async function (req, res) {
  try {
    var sql_query = 'SELECT * FROM user WHERE user_email = ?'
    var values = [req.body.user_email]
    var results = await execute_query(sql_query, values)

    if (results.length === 0) {
      return responce.sendResponse(res, "Email Not Registered", status_code.STATUS_CODES.BAD_REQUEST);
    }
    else {
      const user = { user_email: req.body.user_email, user_id: results[0].user_id }
      var result = await hash_service.compare_password(req.body.user_password, results[0].user_password);

      if (result) {
        token = jwt.sign(user, secret_key)
        responce.sendtokenuserResponse(res, 'Auth Successful', token, req.body.user_email, results[0].user_id, status_code.STATUS_CODES.SUCCESS)
      }
      else {
        return responce.sendResponse(res, "Invalid password", status_code.STATUS_CODES.UNAUTHORIZED);
      }
    }
  }
  catch {
    responce.sendResponse(res, "Some Error", status_code.STATUS_CODES.BAD_REQUEST);
  }
}



module.exports.logout = function (req, res) {
  return responce.sendResponse(res, 'successfully logout', status_code.STATUS_CODES.SUCCESS)
}




