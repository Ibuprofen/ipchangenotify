module.exports = function(to, message) {
  if (typeof to !== 'string') {
    throw new Error('argument "to" must be a string');
  }
  if (typeof message !== 'string') {
    throw new Error('argument "subject" must be a string');
  }

  var nodemailer = require('nodemailer');

  // create reusable transporter object using SMTP transport
  var transporter = nodemailer.createTransport(config.smtp);

  // NB! No need to recreate the transporter object. You can use
  // the same transporter object for all e-mails

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: config.email.from, // sender address
      to: to, // list of receivers (can be comma separated)
      subject: 'IP Address Change Detected', // Subject line
      text: message, // plaintext body
      html: message // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });
}
