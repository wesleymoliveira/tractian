import mongoose, { Schema, Document } from "mongoose";

export interface UnitsInterface extends Document {
  name: String;
  company: String;
  assets?: Array<String>;
}

const UnitsSchema: Schema = new Schema({
  name: { type: String, required: true },
  company: { type: Schema.Types.ObjectId, ref: "Companies", required: true },
  assets: [{ type: Schema.Types.ObjectId, ref: "Assets" }],
});

export default mongoose.model<UnitsInterface>("Units", UnitsSchema);
