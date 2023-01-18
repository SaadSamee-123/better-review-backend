const mongoose = require("mongoose");
const bycrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// hashing passwords whenver we are saving this file before saving this file we want to run this function
// we want to hash tthis password only if we are chaiging this passwrd
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    // hashing is async process
    this.password = await bycrypt.hash(this.password, 10);
  }
  next();
});
module.exports = mongoose.model("User", userSchema);
