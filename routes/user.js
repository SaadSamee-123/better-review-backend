const express = require("express");
const router = express.Router();

const { create, loginUser } = require("../controllers/user");
const { userValidtor, validate } = require("../middlewares/validator");

router.post("/create", userValidtor, validate, create);

// router.get("/about", loginUser);

module.exports = router;
