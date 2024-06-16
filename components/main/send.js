import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'flowsiters@gmail.com',
        pass: 'IvanaVreco123' 
      }
    });

    const mailOptions = {
      from: email,
      to: 'flowsiters@gmail.com',
      subject: `Message from ${firstName} ${lastName}`,
      text: message
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: 'success' });
    } catch (error) {
      res.status(500).json({ status: 'fail', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
