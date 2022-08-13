const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  userName: {
    type: String,
  },
  passWord: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
