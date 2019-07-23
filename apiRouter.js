const path = require("path");
const express = require("express");
const passport = require("./passport/myPassport.js");

const router = express.Router();

router.use(passport.authenticate("jwt", { session: false }));
// router.get("/kanban", express.static(path.join(__dirname+ "/public/index.html")));

module.exports = router;