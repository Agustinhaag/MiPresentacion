const nodemailer = require("nodemailer");

const postEmail = async (body) => {
  const { name, email, message, asunto } = body;
  let content = `
  <h2>Información del usuario</h2>
   <ul>
      <li>Nombre completo: ${name}</li>
      <li>Email: ${email}</li>
      <li>Asunto: ${asunto}</li>
   </ul> 
   <p>Consulta: ${message}</p> 
   `;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: process.env.portEmail,
    secure: false,
    auth: {
      user: process.env.userEmail,
      pass: process.env.passEmail,
    },
  });

  const info = await transporter.sendMail({
    from: " 'Portfolio' agushaag30@gmail.com",
    to: process.env.userEmail,
    subject: "Formulario de contacto de Portfolio",
    html: content,
  });
};
module.exports = {
  postEmail,
};
