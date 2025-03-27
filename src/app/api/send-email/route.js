import nodemailer from "nodemailer";


export async function POST(req) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use TLS
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email, 
        to: process.env.EMAIL_USER, 
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    };

    try {
        await transporter.verify();
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: "Email sent successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ message: "Failed to send email", error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}