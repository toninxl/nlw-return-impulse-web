import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail.adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b098914aa64abb",
    pass: "aaaede0129f7cd"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData){
  await transport.sendMail({
  from: 'Equipe Feedget <ton@feedget.com>',
  to: 'Antonio Carlos <antonio2937a@gmail.com>',
  subject,
  html: body,
});
  };
}