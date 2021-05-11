import mongoose, { Schema, Document } from "mongoose";

export interface AssetsInterface extends Document {
  imagem: String;
  name: String;
  description: String;
  assetModel: String;
  responsible: String;
  status: String;
  healthLevel: Number;
  fromUnit: String;
}

const AssetsSchema: Schema = new Schema({
  imagem: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  assetModel: { type: String, required: true },
  responsible: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Em Operaçao", "Em Alerta", "Em Parada"],
  },
  healthLevel: { type: String, required: true },
  fromUnit: { type: Schema.Types.ObjectId, ref: "Units", required: true },
});

export default mongoose.model<AssetsInterface>("Assets", AssetsSchema);
