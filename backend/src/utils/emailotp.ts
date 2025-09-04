import nodemailer from "nodemailer";

const user = "hajareswapnil.2502@gmail.com"
const pass = "heiezqqvvgpyqvwy"
const from = "hajareswapnil.2502@gmail.com"

const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user: user,
    pass: pass
  }
});

export const sendOTP = async (to: string, otp: string) => {
    const ttl = process.env.OTP_TTL_MINUTES || "10";
    const subject = "Your OTP — Snapdeal Clone";
    const html = `
        <div style="font-family: Arial, sans-serif; line-height:1.4;">
            <p>Your one-time code is: <strong style="font-size: 20px;">${otp}</strong></p>
            <p>This code will expire in ${ttl} minutes.</p>
        </div>
    `;

    const info = await transporter.sendMail({
        from,
        to,
        subject,
        html,
    });

    return info;
}