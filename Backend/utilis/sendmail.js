const nodemailer = require("nodemailer");


const sendEmail=(email,subject,text)=>{

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "lou76@ethereal.email",
          pass: "kZc9cXyvemr7w9GvRY",
        },
      });
      
      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"Support@pny.com', // sender address
          to: email,
          subject: subject, // Subject line
          text: text, // plain text body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }
      
      main().catch(console.error);
      


}
module.exports=sendEmail;
