module.exports = app => {

    const user = require('../modules/controllers/user');
    const validateuser = require('../middleware/register_validation')
    const userloginValidation = require('../middleware/login_validation')
    const checkAuth = require('../middleware/checkAuth')
    


    app.post('/user_register', validateuser.userValidation, user.register);
    app.post('/user_login',checkAuth.user, userloginValidation.userloginValidation, user.login);
    app.post('/user_logout', user.logout);


}
