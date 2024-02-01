import sgMail from "@sendgrid/mail";

const sendEmail = async (username, email, password) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "mirajhadish48@gmail.com", 
    subject: "Registeration Successful",
    text: "Here is is Registration Details",
    html: `<strong>Username: ${username}</strong><br><strong>Email: ${email}</strong><br> <strong>Password: ${password}</strong>`,
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
