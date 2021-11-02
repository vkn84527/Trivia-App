const { json } = require("body-parser")
const { insert_answer1 } = require("../controllers/form")

const sendResponse = (res, msg, status) => {
    return res.json({
        message: msg,
        status: status
    })
}

const sendResponse2 = (res, msg,msg2, status) => {
    return res.json({
        message: msg,
        Total: msg2,
        status: status
    })
}

const sendtokenuserResponse = (res, msg, token, student_email, student_id, status) => {
    return res.json({
        'Message': msg,
        Token: token,
        student_email: student_email,
        student_ID: student_id,
        Status: status
    })
}

const sendhistoryResponse = (res, user_id,user_name,answer1,answer2,status) => {
    return res.json({
        'GAME': user_id,
        'Name': user_name,
        'Who is the best cricketer in the world?': answer1,
        'What are the colours in the national flag?': answer2,
        Status: status
    })
}


module.exports = { sendResponse, sendtokenuserResponse ,sendResponse2,sendhistoryResponse}
