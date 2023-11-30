import nodemailer from 'nodemailer';

type MailOption = {
  email: string;
  subject: string;
  message: string;
};
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PW,
  },
});
export async function sendMail({ email, subject, message }: MailOption) {
  const info = await transporter.sendMail({
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject,
    text: `From: ${email}\n\n${message}`,
  });
  return info.messageId;
}
