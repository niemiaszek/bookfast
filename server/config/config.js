const path = require("path");
const output = path.join(__dirname, "./models");
const options = {
  directory: output,
  caseFile: "l",
  caseModel: "p",
  caseProp: "c",
  lang: "ts",
  singularize: true,
  spaces: true,
  indentation: 2,
};

// Edit the configuration below for your database dialect

// mysql
const mysql = {
  dbname: "book_fast_1.2",
  user: "root",
  pass: "",
  options: { dialect: "mysql" },
  autoOptions: { dialect: "mysql", ...options },
};

// Change to export appropriate config for your database
module.exports = mysql;
