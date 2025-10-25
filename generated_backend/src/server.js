
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
const allowedOrigins = [
  "https://webcoder-beta.vercel.app",
  "https://portfolio-nu-orpin-30.vercel.app",
  "http://localhost:5173" // for local development (optional)
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(helmet());


app.use("/newproject", router)
// Open Server on selected Port
app.listen(
    PORT,
    () => console.info('Server listening on port ', PORT)
);
