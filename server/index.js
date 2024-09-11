require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const PORT = process.env.PORT;
const router = require("./routes/index");
const errorHandler = require("./middlewear/ErrorHandlingMiddlewear");
const fileUpload = require("express-fileupload");
const path = require("path");

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // Важно для отправки куки
}));
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, "static")));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use("/api", router);

//последний middlewear
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
