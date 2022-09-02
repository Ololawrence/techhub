import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
import db from './src/Models/index.js';
import { dbConfig } from './src/Db/config.js';
import Routes from "./src/Routes/index.js";

const app = express();
const port = process.env.PORT ?? 4000;
dotEnv.config();



app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// mongodb database conncetions

db.mongoose
  .connect(
    `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}` ?? `${uri}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.log("connection error", err);
  });

//   app home page
app.get("/", (req, res) => {
  res.send("Welcome to coding tech-hub");
});

app.use(Routes)

// start app on dynamic port or 5000

app.listen(port, (rea, res) => {
  console.log(`app runinng on port ${port}`);
});
