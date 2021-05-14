import { Router } from "express";
import * as CompaniesController from "./controllers/CompaniesController";

const routes = Router();

//companies
routes.post("/companies/", CompaniesController.createCompany);
routes.delete("/companies/:id/", CompaniesController.deleteCompany);
routes.get("/companies/:name", CompaniesController.getCompany);
routes.get("/companies/", CompaniesController.getAllCompanies);

export default routes;
