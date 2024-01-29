import sgMail from "@sendgrid/mail";

const sendEmail = async (options) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: options.to,
    from: "mirajhadish48@gmail.com", // Use the email address or domain you verified above
    subject: options.subject,
    text: "and easy to do anywhere, even with Node.js",
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  console.log(process.env.SENDGRID_API_KEY);
  console.log(msg);
  //ES6
  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};

export default sendEmail;
