import { Response, Request } from "express";
import Units, { UnitsInterface } from "../models/Units";
import Companies from "../models/Companies";
import { ObjectId } from "mongodb";

const createUnit = async (req: Request, res: Response): Promise<void> => {
  try {
    let foundCompany = await Companies.findOne({
      name: req.params.company,
    });
    if (foundCompany) {
      const companyObjectId = new ObjectId(foundCompany._id);
      const body = req.body;
      const unit: UnitsInterface = new Units({
        name: body.name,
        company: companyObjectId,
      });
      await unit.save();

      foundCompany.unities?.push(unit._id);
      foundCompany.save();

      res.status(201).json(unit);
    }
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

export { createUnit };
