import { Router } from "express";
import * as CompaniesController from "./controllers/CompaniesController";
import * as UsersController from "./controllers/UsersController";
import * as UnitsController from "./controllers/UnitsController";

const routes = Router();

//companies
routes.post("/companies/", CompaniesController.createCompany);
routes.delete("/companies/:id/", CompaniesController.deleteCompany);
routes.get("/companies/:name", CompaniesController.getCompany);
routes.get("/companies/", CompaniesController.getAllCompanies);

//users
routes.post("/:company/users/", UsersController.createUser);
routes.delete("/:company/users/:id/", UsersController.deleteUser);
routes.get("/:company/users/:user", UsersController.getUser);
routes.get("/:company/users/", UsersController.getAllUsersFromCompany);

//units
routes.post("/:company/units/", UnitsController.createUnit);

export default routes;
