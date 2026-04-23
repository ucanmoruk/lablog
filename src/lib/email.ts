import nodemailer from 'nodemailer';

export async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  // Transporter configuration using environment variables
  // If these are not provided, it will log to console as a fallback
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("Mail configuration missing (SMTP_USER/SMTP_PASS). Email content:");
      console.log(`To: ${to}\nSubject: ${subject}\nContent: ${html}`);
      return { success: true, mocked: true };
    }

    const info = await transporter.sendMail({
      from: `"LabLog Bildirim" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    console.log("Email sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
