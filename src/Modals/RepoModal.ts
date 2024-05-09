import mongoose from "mongoose";

const Schema = mongoose.Schema;

const repositorySchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  full_name: { type: String, required: true },
  private: { type: Boolean, required: true },
  owner: {
    login: String,
    id: Number,
  },
  fork: Boolean,
  url: String,
  created_at: Date,
  updated_at: Date,
});

const Repository = mongoose.model("repositories", repositorySchema);
export default Repository;
