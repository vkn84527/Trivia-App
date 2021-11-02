const responce = require('../common_functions/responses')
const status_code = require('../constants/constants')
const execute_query = require('./db_query').execute_query

module.exports.history = async function (req, res) {

  try {
    var sql_query = 'SELECT * FROM form_details WHERE user_id = ?'
    var values = req["user_id"]
    var results = await execute_query(sql_query, values)

    return responce.sendhistoryResponse(res, results[0].user_id,results[0].user_name,results[0].answer1,results[0].answer2, status_code.STATUS_CODES.SUCCESS)

      }
      
  catch {
    return responce.sendResponse(res, 'There are some error with query', status_code.STATUS_CODES.UNAUTHORIZED)
  }
}

module.exports.insert_name = async function (req, res) {

    try {
        user_id=req["user_id"]
        var sql_query1 = 'INSERT INTO form_details(user_id,user_name) values(?,?)'
        var values1 = [user_id,req.body.user_name]

        const results1 = await execute_query(sql_query1, values1)

        if (results1) {
            return responce.sendResponse(res, "name sucessfully inserted", status_code.STATUS_CODES.SUCCESS)
        }
        else {
            return responce.sendResponse(res, 'Please Enter all Required Filed', status_code.STATUS_CODES.UNAUTHORIZED)
        }
    }
    catch {
        return responce.sendResponse(res, 'There are some error with query', status_code.STATUS_CODES.UNAUTHORIZED)
    }
}

module.exports.insert_answer1 = async function (req, res) {

    try {
        user_id=req["user_id"]
        var sql_query1 = 'INSERT INTO form_details(user_id,answer1) where user_id=? values(?)'
        var values1 = [user_id,req.body.answer1]

        const results1 = await execute_query(sql_query1, values1)

        if (results1) {
            return responce.sendResponse(res, "answer1 sucessfully inserted", status_code.STATUS_CODES.SUCCESS)
        }
        else {
            return responce.sendResponse(res, 'Please Enter all Required Filed', status_code.STATUS_CODES.UNAUTHORIZED)
        }
    }
    catch {
        return responce.sendResponse(res, 'There are some error with query', status_code.STATUS_CODES.UNAUTHORIZED)
    }
}

module.exports.insert_answer2 = async function (req, res) {

    try {
        user_id=req["user_id"]
        var sql_query1 = 'INSERT INTO form_details(user_id,answer2) where user_id=? values(?)'
        var values1 = [user_id,req.body.answer2]

        const results1 = await execute_query(sql_query1, values1)

        if (results1) {
            return responce.sendResponse(res, "answer1 sucessfully inserted", status_code.STATUS_CODES.SUCCESS)
        }
        else {
            return responce.sendResponse(res, 'Please Enter all Required Filed', status_code.STATUS_CODES.UNAUTHORIZED)
        }
    }
    catch {
        return responce.sendResponse(res, 'There are some error with query', status_code.STATUS_CODES.UNAUTHORIZED)
    }
}
