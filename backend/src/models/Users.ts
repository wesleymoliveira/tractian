import mongoose, { Schema, Document } from "mongoose";

export interface UsersInterface extends Document {
  name: String;
  company: String;
}

const UsersSchema: Schema = new Schema({
  name: { type: String, required: true },
  company: { type: Schema.Types.ObjectId, ref: "Companies", required: true },
});

export default mongoose.model<UsersInterface>("Users", UsersSchema);
