import mongoose, { Schema, Document } from "mongoose";

export interface CompaniesInterface extends Document {
  name: String;
  users?: Array<String>;
  unities?: Array<String>;
}

const CompaniesSchema: Schema = new Schema({
  name: { type: String, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  unities: [{ type: Schema.Types.ObjectId, ref: "Units" }],
});

export default mongoose.model<CompaniesInterface>("Companies", CompaniesSchema);
