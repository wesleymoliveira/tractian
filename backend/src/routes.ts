import { Router } from "express";
import * as CompaniesController from "./controllers/CompaniesController";

const routes = Router();

//companies
routes.post("/companies/", CompaniesController.createCompany);

export default routes;
