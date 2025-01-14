import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  username: {type: String, required:true, unique: true},
  password: {type: String, required:true}
});

const UserModel = mongoose.model('users', User);

module.exports = {
  UserModel: UserModel
}