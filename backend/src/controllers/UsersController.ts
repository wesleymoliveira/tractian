import { ObjectId } from "mongodb";
import { Response, Request } from "express";
import Companies from "../models/Companies";
import Users, { UsersInterface } from "../models/Users";

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userExists = await Users.findOne({ name: req.body.name });
    if (userExists) {
      res.status(400).json({ error: "Este nome já foi utilizado" });
      return;
    }
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
    } else {
      res.status(404);
      res.json({ erro: "Empresa não encontrada" });
    }
  } catch (err) {
    res.status(500).json(err);
    res.end();
    console.error("Error message:", err);
  }
};
const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const company = req.params.company;

    let foundCompany = await Companies.findOne({
      name: company,
    });

    if (Users.findById(id) && foundCompany) {
      await Users.findByIdAndDelete(id);

      if (foundCompany.users) {
        var index = foundCompany.users.indexOf(id);
        if (index > -1) {
          foundCompany.users?.splice(index, 1);
          foundCompany.save();
        }
      }

      res.status(204);
      res.end();
    } else {
      res.status(404);
      res.json({ erro: "ID não encontrada" });
    }
  } catch (err) {
    res.status(500).json(err);
    res.end();
    console.error("Error message:", err);
  }
};
const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const foundUser = await Users.findOne({
      _id: req.params.user,
    }).populate("company");
    if (foundUser) {
      res.json(foundUser);
    } else {
      res.status(404);
      res.json({ erro: "Usuário não en contrado" });
    }
  } catch (err) {
    res.status(500).json(err);
    res.end();
    console.error("Error message:", err);
  }
};
const getAllUsersFromCompany = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let foundCompany = await Companies.findOne({
      name: req.params.company,
    });
    if (foundCompany) {
      const users: UsersInterface[] = await Users.find({
        company: foundCompany?._id,
      }).populate(["company"]);
      res.json(users);
    } else {
      res.status(404);
      res.json({ erro: "Empresa não encontrada" });
    }
  } catch (err) {
    res.status(500).json(err);
    res.end();
    console.error("Error message:", err);
  }
};

export { createUser, deleteUser, getUser, getAllUsersFromCompany };
