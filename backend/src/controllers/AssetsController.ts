import { ObjectId } from "mongodb";
import { Response, Request } from "express";
import Assets, { AssetsInterface } from "../models/Assets";
import Units from "../models/Units";

const createAsset = async (req: Request, res: Response): Promise<void> => {
  try {
    let foundUnit = await Units.findOne({
      name: req.params.unit,
    });
    if (foundUnit) {
      const body = req.body;
      const unitObjectId = new ObjectId(foundUnit._id);

      const asset: AssetsInterface = new Assets({
        image: body.image,
        name: body.name,
        description: body.description,
        assetModel: body.assetModel,
        responsible: body.responsible,
        status: body.status,
        healthLevel: body.healthLevel,
        unit: unitObjectId,
      });

      await asset.save();

      foundUnit.assets?.push(asset._id);
      foundUnit.save();

      res.status(201).json(asset);
    }
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

export { createAsset };
