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

const getCompany = async (req: Request, res: Response): Promise<void> => {
  try {
    const companyName = req.params.name;

    const company: CompaniesInterface[] = await Companies.find({
      name: companyName,
    }).populate(["unities", "users"]);
    if (company[0]) {
      res.status(200);
      res.json(company);
    } else {
      res.status(404);
      res.json({ erro: "Empresa não encontrada" });
    }
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

const getAllCompanies = async (req: Request, res: Response): Promise<void> => {
  try {
    const companies: CompaniesInterface[] = await Companies.find({}).populate([
      "unities",
      "users",
    ]);
    res.json(companies);
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

export { createCompany, deleteCompany, getCompany, getAllCompanies };
