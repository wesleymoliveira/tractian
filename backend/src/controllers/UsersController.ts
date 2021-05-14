import { ObjectId } from "mongodb";
import { Response, Request } from "express";
import Companies from "../models/Companies";
import Users, { UsersInterface } from "../models/Users";

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    let foundCompany = await Companies.findOne({
      name: req.params.company,
    });

    if (foundCompany) {
      const companyObjectId = new ObjectId(foundCompany._id);
      const body = req.body;
      const user: UsersInterface = new Users({
        name: body.name,
        company: companyObjectId,
      });
      await user.save();

      foundCompany.users?.push(user._id);
      foundCompany.save();

      res.status(201).json(user);
    }
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

export { createUser };
