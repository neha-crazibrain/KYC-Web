const nodemailer = require("nodemailer")
const SERVICE = "gmail";
const USER_MAIL = "nehacrazibraincrazibrain@gmail.com";
const PASSWORD = "rgyiubqgekcjhzvw";


const transporter = nodemailer.createTransport({
    service: SERVICE,
    auth: {
        user: USER_MAIL,
        pass: PASSWORD
    }
});

const sendOtpOnMail = async (Email, OTP = 99) => {
    var mailOptions = {
        from: USER_MAIL,
        to: Email,
        subject: 'Verification OTP',
        text: `Your OTP is: ${OTP}`
    };
    return transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return error;
        } else {
            return info.response;
        }
    });
}


module.exports = { sendOtpOnMail }
