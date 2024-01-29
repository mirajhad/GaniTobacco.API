import sendEmail from "../utils/sendEmails.js"

const sendEmailSG = async (req, res) => {
    try {
        const { email, message } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required." });
        }

        const options = {
            to: email,
            subject: "sent from sendGrid",
            message: message,
        };

        await sendEmail(options);

        res.status(200).json({
            message: "Check your mail!",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default sendEmailSG;