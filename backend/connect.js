const express = require("express"); // express module
const mongoose = require("mongoose"); // mongoose module
const app = express();
const cors = require("cors");
//connecting to the database
const url =
  "mongodb+srv://rajendraprasad:prasad2021@cluster0.axa6w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 
app.use(cors());
mongoose.connect(url, { useNewUrlParser: true }).then(() => {
  console.log("connection success");
});

const con = mongoose.connection;

con.on("open", function () {
  console.log("connected...");
});

app.use(express.json());

const userRouter = require("./operations"); //path
app.use("/", userRouter);

app.listen(1109, function () {
  console.log("server started");
});
