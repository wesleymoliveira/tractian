import mongoose, { Schema, Document } from "mongoose";
import { UnitsInterface } from "./Units";

export interface AssetsInterface extends Document {
  image: String;
  name: String;
  description: String;
  assetModel: String;
  responsible: String;
  status: String;
  healthLevel: Number;
  unit: UnitsInterface;
}

const AssetsSchema: Schema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  assetModel: { type: String, required: true },
  responsible: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Em Operaçao", "Em Alerta", "Em Parada"],
  },
  healthLevel: { type: String, min: 0, max: 100, required: true },
  unit: { type: Schema.Types.ObjectId, ref: "Units" },
});

export default mongoose.model<AssetsInterface>("Assets", AssetsSchema);
