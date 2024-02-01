import client from "twilio";
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = client(accountSid, authToken);

export default async function sendMessage(data) {
 
  try {
    const message = await client.messages.create({
      body,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });
   
  } catch (error) {
    res.status(500).json({ error });
  }
}


/***/