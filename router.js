const express = require("express");
const router = express.Router();
const conexion = require("./database/db");

router.get("/", (req, res) => {
  conexion.query("SELECT * FROM users", (err, results) => {
    if (err) {
      throw err;
    } else {
      res.render("index", { results: results });
    }
  });
});

router.get("/create", (req, res) => {
  res.render("create");
});

router.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  conexion.query("SELECT * FROM users WHERE id=?", [id], (err, results) => {
    if (err) {
      throw err;
    } else {
      res.render("edit", { user: results[0] });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  conexion.query("DELETE FROM users WHERE id = ?", [id], (err, results) => {
    if (err) {
      throw err;
    } else {
      res.redirect("/");
    }
  });
});

const crud = require("./controller/crud");

router.post("/save", crud.save);
router.post("/update", crud.update);

module.exports = router;
