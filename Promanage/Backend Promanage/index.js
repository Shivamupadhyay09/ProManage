const express = require("express");
const db = require("./config/db.jsx");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes.jsx");

dotenv.config();
db();

const app = express();
app.use(cors())
app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));