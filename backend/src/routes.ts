import { Router } from "express";
import * as CompaniesController from "./controllers/CompaniesController";
import * as UsersController from "./controllers/UsersController";

const routes = Router();

//companies
routes.post("/companies/", CompaniesController.createCompany);
routes.delete("/companies/:id/", CompaniesController.deleteCompany);
routes.get("/companies/:name", CompaniesController.getCompany);
routes.get("/companies/", CompaniesController.getAllCompanies);

//users
routes.post("/:company/users/", UsersController.createUser);

export default routes;
