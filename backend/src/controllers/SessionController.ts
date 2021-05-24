import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import authConfig from "../config/auth";
import Companies, { CompaniesInterface } from "../models/Companies";

const createSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const company: CompaniesInterface[] = await Companies.find({
      name: req.body.name,
    });

    if (!company[0]) {
      res.status(401).json({ error: "Empresa não encontrada" });
    }

    const { _id, name } = company[0];

    res.json({
      company: {
        _id,
        name,
      },
      token: jwt.sign({ _id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  } catch (err) {
    res.status(500).json(err);
    res.end();
    console.error("Error message:", err);
  }
};
export { createSession };
