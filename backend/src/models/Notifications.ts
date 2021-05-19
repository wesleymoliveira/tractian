import mongoose, { Schema, Document } from "mongoose";

export interface NotificationsInterface extends Document {
  content: String;
  company: String;
  read: Boolean;
}

const NotificationsSchema: Schema = new Schema(
  {
    content: { type: String, required: true },
    company: { type: Schema.Types.ObjectId, ref: "Companies", required: true },
    read: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<NotificationsInterface>(
  "Notifications",
  NotificationsSchema
);
