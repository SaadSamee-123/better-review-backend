const User = require("../models/user");

exports.create = async (req, res) => {
  const { name, email, password } = req.body;
  // if we have user already we will get that object if dont we will get null
  const oldUser = await User.findOne({ email });
  if (oldUser)
    // 401 = unothorized or user already exists
    return res.status(401).json({ error: "This email is already in use!" });

  // creating new user
  const newUser = new User({ name, email, password });
  // saving that new user and saving is an asynchronous task
  await newUser.save();
// 201 for succesful created
  res.status(201).json({ user: newUser });
};
