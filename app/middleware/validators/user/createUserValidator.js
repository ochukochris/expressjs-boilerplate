const { query } = require("express-validator");

const messages = {
  firstName: "First name is required",
  lastName: "Last name is required",
  email: "Invalid email address",
  password: "Password must not be less than 5 characters"
}

const rules = [
  query("firstName", messages.firstName).not().isEmpty(),
  query("lastName", messages.lastName).not().isEmpty(),
  query("email", messages.email).isEmail(),
  // password must be at least 5 chars long
  query("password", messages.password).isLength({ min: 5 }),
]


module.exports = rules
