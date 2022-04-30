const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_nodejs_mysql",
});

conexion.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos: " + err);
    return;
  }
  console.log("Conectado a la base de datos");
});

module.exports = conexion;
