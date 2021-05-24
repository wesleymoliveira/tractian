import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multerConfig";

import authMiddleware from "./middlewares/auth";
import * as SessionController from "./controllers/SessionController";
import * as CompaniesController from "./controllers/CompaniesController";
import * as UsersController from "./controllers/UsersController";
import * as UnitsController from "./controllers/UnitsController";
import * as AssetsController from "./controllers/AssetsController";
import * as NotificationsController from "./controllers/NotificationsController";

const routes = Router();
const upload = multer(multerConfig);

//sessions
routes.post("/sessions", SessionController.createSession);

//companies
routes.get("/companies/", CompaniesController.getAllCompanies);
routes.post("/companies/", CompaniesController.createCompany);
routes.use(authMiddleware);
routes.get("/companies/:id", CompaniesController.getCompany);
routes.delete("/companies/:id/", CompaniesController.deleteCompany);

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
routes.post(
  "/:company/:unit/assets",
  upload.single("image"),
  AssetsController.createAsset
);
routes.delete("/assets/:id/", AssetsController.deleteAsset);
routes.get("/assets/", AssetsController.getAllAssetsFromUnit);
routes.get("/:company/assets", AssetsController.getAllAssetsFromCompany);
routes.get("/:company/status", AssetsController.getAssetStatus);
routes.get("/assets/:id/", AssetsController.getAsset);

//notifications
routes.post(
  "/:company/notifications/",
  NotificationsController.createNotification
);
routes.put("/notifications/:id", NotificationsController.updateNotification);
routes.get(
  "/:company/notifications/",
  NotificationsController.getNotifications
);

export default routes;
