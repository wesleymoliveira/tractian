import { Response, Request } from "express";
import Companies, { CompaniesInterface } from "../models/Companies";

const createCompany = async (req: Request, res: Response): Promise<void> => {
  try {
    const company: CompaniesInterface = new Companies(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

const deleteCompany = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id.toString();

    if (Companies.findById(id)) {
      await Companies.findByIdAndDelete(id);
      res.status(204);
      res.end();
    } else {
      res.status(404);
      res.json({ erro: "ID não encontrada" });
    }
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

export { createCompany, deleteCompany };
