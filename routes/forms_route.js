

const form = require('../modules/controllers/forms');
const checkAuth = require('../middleware/checkAuth')

module.exports = app => {

    app.get('/see_history', checkAuth.user, form.history);
    app.post('/insert_name', checkAuth.user, form.insert_name);
    app.post('/insert_answer1', checkAuth.user, form.insert_answer1);
    app.post('/insert_answer2', checkAuth.user, form.insert_answer2);


}