import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import authConfig from "../config/auth";

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ erro: "Rota não autorizada! Faça o Login para ter acesso." });
  }

  const [, token] = authHeader.split(" ");

  try {
    const data = jwt.verify(token, authConfig.secret);
    const { id } = data as TokenPayload;
    req.companyId = id;

    return next();
  } catch {
    return res.status(401).json({ erro: "Token inválido" });
  }
};
