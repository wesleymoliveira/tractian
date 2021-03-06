import { Response, Request } from "express";
import slugify from "slugify";
import Units, { UnitsInterface } from "../models/Units";
import Companies from "../models/Companies";
import { ObjectId } from "mongodb";

const createUnit = async (req: Request, res: Response): Promise<void> => {
  try {
    const unitExists = await Units.findOne({ name: req.body.name });
    if (unitExists) {
      res.status(400).json({ error: "Este nome já foi utilizado" });
      return;
    }
    let foundCompany = await Companies.findOne({
      name: req.params.company,
    });
    if (foundCompany) {
      const companyObjectId = new ObjectId(foundCompany._id);
      const body = req.body;
      const unit: UnitsInterface = new Units({
        name: slugify(body.name).toLowerCase(),
        company: companyObjectId,
      });
      await unit.save();

      foundCompany.unities?.push(unit._id);
      foundCompany.save();

      res.status(201).json(unit);
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

const deleteUnit = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const company = req.params.company;

    let foundCompany = await Companies.findOne({
      name: company,
    });

    if (Units.findById(id) && foundCompany) {
      await Units.findByIdAndDelete(id);

      if (foundCompany.unities) {
        var index = foundCompany.unities.indexOf(id);
        if (index > -1) {
          foundCompany.unities?.splice(index, 1);
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

const getUnit = async (req: Request, res: Response): Promise<void> => {
  try {
    let foundUnit = await Units.findOne({
      _id: req.params.unit,
    }).populate(["assets", "company"]);
    if (foundUnit) {
      res.json(foundUnit);
    } else {
      res.status(404);
      res.json({ erro: "unidade não encontrada" });
    }
  } catch (err) {
    res.status(500).json(err);
    res.end();
    console.error("Error message:", err);
  }
};

const getUnitsByCompany = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let foundCompany = await Companies.findOne({
      name: req.params.company,
    });
    if (foundCompany) {
      const units: UnitsInterface[] = await Units.find({
        company: foundCompany?._id,
      }).populate(["assets", "company"]);
      res.json(units);
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

export { createUnit, deleteUnit, getUnit, getUnitsByCompany };
