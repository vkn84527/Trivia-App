
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vikas.kumar1@jungleworks.com',
    pass: 'Enter your password'
  }
});

var mailOptions = {
  form: 'vikas.kumar1@jungleworks.com',
  to: 'vkn84527@gmail.com',
  subject: 'Successfully Register',
  html: '<h1>Hello, Dear </h1><p>Welcome to this project! You have\
  Successfully Register </p>' 
};
function ab2() {
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
exports.ab2 = ab2;

