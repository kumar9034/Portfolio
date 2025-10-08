
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config()
const helmet = require('helmet');
const connectDB = require("./controllers/DB");
const router = require('./routes/router');

// Load .env Enviroment Variables to process.env

require('mandatoryenv').load([
    'DB_URL',
    'PORT',
    'SECRET'
]);

const { PORT } = process.env;


// Instantiate an Express Application
const app = express();

connectDB()
// Configure Express App Instance
app.use(express.json());
app.use(express.urlencoded( { extended: true,} ));

app.use(cookieParser());
app.use(cors({origin: "https://webcoder-beta.vercel.app/",  // ✅ sirf React frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true}));
app.use(helmet());


app.use("/newproject", router)
// Open Server on selected Port
app.listen(
    PORT,
    () => console.info('Server listening on port ', PORT)
);