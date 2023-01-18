// only cheack will ot work we have another called validationResult to catch the errors
// if we get any valodatio errors inside this condtion wll get insside this validatiuon

const { check, validationResult } = require("express-validator");

exports.userValidtor = [
  check("name").trim().not().isEmpty().withMessage("Name is missing"),
  check("email").normalizeEmail().isEmail().withMessage("Email is invalid"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is missing")
    .isLength({ min: 8, max: 8 })
    .withMessage("Password must be 8 to 10 charcaters long"),
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) {
    return res.json({ error: error[0].msg });
  }
  console.log(error);
  next();
};
