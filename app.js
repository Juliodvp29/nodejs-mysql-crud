const { json } = require("express");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express(json));

app.use("/", require("./router"));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
