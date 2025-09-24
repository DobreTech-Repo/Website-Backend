const nodemailer = require('nodemailer');
const {notification_template, notification_template_to_admin, welcome_template, contact_template_to_user, contact_template_to_admin} = require('./emailTemplate');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

exports.mail_sender = async(to_email, subject, content) => {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: to_email,
    subject: subject,
    html: content,
    replyTo: 'info@dobretech.com'
  };
  console.log('===========here is email sender starting section============')
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log('Email sent: ' + info.response);
      return true;
    }
  });
  console.log('===========here is email sender ending section============')
}

exports.send_emails = async (req, res, next) => {
  try {
    const {firstName, lastName, email, address, birth, country, date, gender, payment_method, phone, program} = req.body;
    console.log('======req.body===========', req.body)

    const notifiaction_subject = `Thank you ${firstName}, we have received your application`;
    const notifiaction_email_content = notification_template
      .replace(/\${firstName}/g, firstName)
      .replace(/\${lastName}/g, lastName)
      .replace(/\${birth}/g, birth)
      .replace(/\${date}/g, date)
      .replace(/\${country}/g, country)
      .replace(/\${email}/g, email)
      .replace(/\${gender}/g, gender)
      .replace(/\${phone}/g, phone)
      .replace(/\${program}/g, program)
      .replace(/\${address}/g, address)
      .replace(/\${payment_method}/g, payment_method)
    this.mail_sender(email, notifiaction_subject, notifiaction_email_content);

    const notifiaction_to_admin_subject = `You have received new application`;
    const notifiaction_to_admin_email_content = notification_template_to_admin
      .replace(/\${firstName}/g, firstName)
      .replace(/\${lastName}/g, lastName)
      .replace(/\${birth}/g, birth)
      .replace(/\${date}/g, date)
      .replace(/\${country}/g, country)
      .replace(/\${email}/g, email)
      .replace(/\${gender}/g, gender)
      .replace(/\${phone}/g, phone)
      .replace(/\${program}/g, program)
      .replace(/\${address}/g, address)
      .replace(/\${payment_method}/g, payment_method)
    this.mail_sender('info@dobretech.com', notifiaction_to_admin_subject, notifiaction_to_admin_email_content);

    const welcome_subject = `Welcome to Dobretech!`;
    const welcome_email_content = welcome_template
      .replace(/\${firstName}/g, firstName)
      .replace(/\${lastName}/g, lastName)
      .replace(/\${birth}/g, birth)
      .replace(/\${date}/g, date)
      .replace(/\${country}/g, country)
      .replace(/\${email}/g, email)
      .replace(/\${gender}/g, gender)
      .replace(/\${phone}/g, phone)
      .replace(/\${program}/g, program)
      .replace(/\${address}/g, address)
      .replace(/\${payment_method}/g, payment_method)
    this.mail_sender(email, welcome_subject, welcome_email_content);

    return res.status(200).json({
      success: true,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

exports.contact = async (req, res, next) => {
  try {
    const {name, phone, email, message} = req.body;
    console.log('======req.body===========', req.body)

    const contact_to_admin_subject = `Welcome to Dobretech!`;
    const contact_to_admin_email_content = contact_template_to_admin
      .replace(/\${name}/g, name)
      .replace(/\${email}/g, email)
      .replace(/\${phone}/g, phone)
      .replace(/\${message}/g, message)
    this.mail_sender('info@dobretech.com', contact_to_admin_subject, contact_to_admin_email_content);

    const contact_to_user_subject = `From Dobre`;
    const contact_to_user_email_content = contact_template_to_user
      .replace(/\${name}/g, name)
    this.mail_sender(email, contact_to_user_subject, contact_to_user_email_content);

    return res.status(200).json({
      success: true,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
}