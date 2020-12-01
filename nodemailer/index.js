const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  pool: true,
  auth: {
    user: "leaves.reminders@gmail.com",
    pass: "Leaves-04x",
  },
});

function mailReminder({ email, careType, plantName, nextReminder }) {
  const mailOptions = {
    from: "Leaves <leaves.reminders@gmail.com>",
    to: email,
    subject: `Reminder to ${careType} ${plantName}`,
    html: `<h4>Reminder!</h4>
        <p>Dear plant lover,</p>
        <p>This is a reminder to ${careType} your plant ${plantName} today.<br>
        ${
          nextReminder
            ? `The next reminder is set for ${nextReminder}`
            : "No new reminder set, since there is no period defined"
        }</p>
        <br>
        <p>With love,</p>
        <p><strong>Leaves Team</strong></p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = { mailReminder };
