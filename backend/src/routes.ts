import { Router } from "express";
import * as CompaniesController from "./controllers/CompaniesController";
import * as UsersController from "./controllers/UsersController";
import * as UnitsController from "./controllers/UnitsController";
import * as AssetsController from "./controllers/AssetsController";

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
routes.delete("/:company/units/:id/", UnitsController.deleteUnit);
routes.get("/:company/units/:unit/", UnitsController.getUnit);
routes.get("/:company/units/", UnitsController.getUnitsByCompany);

//assets
routes.post("/:unit/assets", AssetsController.createAsset);
routes.delete("/assets/:id/", AssetsController.deleteAsset);

export default routes;
