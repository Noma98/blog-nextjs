import nodemailer from 'nodemailer';
export type EmailData = {
  from: string;
  subject: string;
  message: string;
};
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});
export async function sendEmail({ subject, from, message }: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[BLOG] ${subject}`,
    from,
    html: `
        <h1>${subject}</h1>
        <div>${message}</div>
        <br/>
        <p>보낸 사람: ${from}</p>
        `,
  };
  return transporter.sendMail(mailData);
}
// type MailOption = {
//   email: string;
//   subject: string;
//   message: string;
// };
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.NODEMAILER_EMAIL,
//     pass: process.env.NODEMAILER_PW,
//   },
// });
// export async function sendMail({ email, subject, message }: MailOption) {
//   const info = await transporter.sendMail({
//     from: process.env.NODEMAILER_EMAIL,
//     to: process.env.NODEMAILER_EMAIL,
//     subject,
//     text: `From: ${email}\n\n${message}`,
//   });
//   return info.messageId;
// }
