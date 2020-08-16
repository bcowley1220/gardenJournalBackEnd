let express = require("express");
let journalRoutes = express.Router();
let testFile = require("./testFile");

journalRoutes.get("/testFile", (req, res) => {
  res.send(testFile);
});

module.exports = journalRoutes;
