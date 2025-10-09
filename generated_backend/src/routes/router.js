const router = require('express').Router();
const upload = require('../controllers/upload');
const database = require('../models/database');
const images = require('../models/images');
const mongoose = require("mongoose")
const Brevo = require('@getbrevo/brevo');


const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey,process.env.BREVO_API_KEY);

router.post("/project", async (req, res) => {
    const { name, description, link, tool, image } = req.body

    if (!name && !description && !link && !tool) {
        return res.status(400).json({
            message: "please your all fields complete"
        })
    }

    const project = await database.create({
        name,
        description,
        tool,
        link,
        image
    })

    res.status(200).json({ project, message: "your project done" })
})

router.post("/uploadimage",upload.single("image"), async(req, res)=>{
     const imageurl = req.file?.path

     if(!imageurl){
        return res.status(400).json("image path not upload")
     }

     const image = await images.create({imageurl})

     res.status(200).json({ message: "Image successfully uploaded", image: image })
})


// Get all projects
router.get("/allprojects", async (req, res) => {
  try {
    const projects = await database.find(); // database = mongoose model
    res.status(200).json({ projects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
});

router.get("/detailproject/:id",async(req, res)=>{
    const projectid = req.params.id
    if (!projectid || projectid === "null" || !mongoose.Types.ObjectId.isValid(projectid)) {
      return res.status(400).json({ error: "Invalid project id" });
    }
    const project = await database.findById(projectid)
    if(!project){
        return res.status(400).json('project not found')
    }

    res.status(200).json(project)


})
router.post("/sendmessage", async (req, res)=>{
  const {name, email, message } = req.body
  
  if(!name || !email || !message){
    return res.status(400).json({message: "please your all fields complete"})
  }

const sendSmtpEmail = new Brevo.SendSmtpEmail();
   sendSmtpEmail.sender = { email: process.env.FROM_EMAIL, name: "Portfolio" };
  sendSmtpEmail.to = [{ email: process.env.TO_EMAIL }];
  sendSmtpEmail.subject = `New message from ${name}`;
  sendSmtpEmail.htmlContent = `<h3>New message from ${name}</h3>
                                <p>Email: ${email}</p>
                                <p>Message: ${message}</p>`;
try{

  await apiInstance.sendTransacEmail(sendSmtpEmail);
  
  res.status(200).send({ success: true, msg: "Message sent!" });
} catch (error) {
  console.error("Error sending email:", error);
  res.status(500).send({ success: false, msg: "Failed to send message." });
}


})


module.exports = router;