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

export { createCompany };
