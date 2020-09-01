var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "igalbog@gmail.com",
    pass: "l6512389",
  },
});

var mailOptions = {
  from: "igalbog@gmail.com",
  to: "igalbog+test@gmail.com",
  subject: "Sending lots of love!",
  text: "Haha here's a big hug",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email send: " + info.response);
  }
});
