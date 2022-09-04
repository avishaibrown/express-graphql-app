const mongoose = require("mongoose");

//new mongoose schema (separate to GraphQL schema)
const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  client: {
    //objectId is a type specific to mongoose
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

module.exports = mongoose.model("Client", ProjectSchema);
