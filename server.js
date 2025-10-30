const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require("./config/db");

// dotenv configuration
dotenv.config();

// DB connection
connectDb();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use("/api/v1/test", require("./routes/testRoute"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));

// root route
app.get('/', (req, res) => {
  res.status(200).send("<h1>Welcome to Food Server APP API BASE PROJECT</h1>");
});

// port
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running on ${PORT}`.white.bgRed);
});
