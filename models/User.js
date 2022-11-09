const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //TODO: validate email
    },
    thoughts: {
      //TODO: array of _id values reff the Thought model
    },
    friends: {
      //TODO: array of _id values reff the User model (self-reff)
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("user", userSchema);

module.exports = User;
