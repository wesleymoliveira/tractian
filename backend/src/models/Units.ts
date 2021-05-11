import mongoose, { Schema, Document } from "mongoose";

export interface UnitsInterface extends Document {
  name: String;
  company: String;
}

const UnitsSchema: Schema = new Schema({
  name: { type: String, required: true },
  company: { type: Schema.Types.ObjectId, ref: "Companies", required: true },
});

export default mongoose.model<UnitsInterface>("Units", UnitsSchema);
