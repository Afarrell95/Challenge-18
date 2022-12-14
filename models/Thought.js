const { Schema, model } = require("mongoose");

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      createdAt: { type: Date, default: Date.now },
    },
    userName: {
      type: String,
      required: true,
    },
    reactions: {
      //TODO: array of nested docs created with the reactionSchema
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
