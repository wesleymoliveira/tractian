import { ObjectId } from "mongodb";
import { Response, Request } from "express";
import Companies from "../models/Companies";
import Notifications, { NotificationsInterface } from "../models/Notifications";

const createNotification = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let foundCompany = await Companies.findOne({
      name: req.params.company,
    });

    if (foundCompany) {
      const companyObjectId = new ObjectId(foundCompany._id);
      const body = req.body;
      const notification: NotificationsInterface = new Notifications({
        content: body.content,
        company: companyObjectId,
        read: body.read,
      });
      await notification.save();

      res.status(201).json(notification);
    }
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

const updateNotification = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    if (id) {
      const notification = await Notifications.findByIdAndUpdate(
        req.params.id,
        { read: true },
        { new: true }
      );

      res.json(notification);
    }
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

const getNotifications = async (req: Request, res: Response): Promise<void> => {
  try {
    let foundCompany = await Companies.findOne({
      name: req.params.company,
    });

    const notification: NotificationsInterface[] = await Notifications.find({
      company: foundCompany?._id,
    });
    res.json(notification);
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

export { createNotification, updateNotification, getNotifications };
