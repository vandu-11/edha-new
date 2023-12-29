import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, phone, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'mail.edhadigitalservices.com',
      port: 465,
      secure: true,
      auth: {
        user: 'contact@edhadigitalservices.com',
        pass: 'R2+RrK*xdJb2',
      },
      tls: {
        rejectUnauthorized: false, // Ignore self-signed certificate errors
      },
    });
    
    const mailOptions = {
      from: 'contact@edhadigitalservices.com',
      to: 'contact@edhadigitalservices.com', // Set the recipient's email address
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone Number: ${phone}`,
    };

    try {
      // Sending email code here
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
    
  } else {
    res.status(405).end(); // Method not allowed
  }
};
