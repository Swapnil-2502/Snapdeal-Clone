import dotenv from "dotenv";
dotenv.config();
import { sendOTP } from "./emailotp";
import { generateOTP } from "./otp";


const testEmail = async () => {
  try {
    console.log("📧 Sending test email...");

    const otpNum = generateOTP()
    
    const result = await sendOTP(
      "hajareswapnil.2502@gmail.com", 
      otpNum              
    );
    
    console.log("✅ Email sent successfully!");
    console.log("Message ID:", result.messageId);
   
  } catch (error) {
    console.error("❌ Failed to send email:");
    console.error(error);
  }
};

testEmail();