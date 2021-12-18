import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/RegistrationDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database is successfully connected");
  }
);

// Mongoose Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
  gender: String,
  dob: Date,
  mobile: Number,
});

//modal
const User = new mongoose.model("User", userSchema);

//Routes
app.post("/login", (req, res) => {
  res.send("API IS CREATED for login");
});

app.post("/register", (req, res) => {
  res.send("API IS for Created for register");
});

app.listen(9002, () => {
  console.log("DB started at port 9002 ");
});
