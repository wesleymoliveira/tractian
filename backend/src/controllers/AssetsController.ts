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
        image: req.file.filename,
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

const deleteAsset = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;

    let foundUnit = await Units.findOne({
      assets: id,
    });

    if (Assets.findById(id) && foundUnit) {
      await Assets.findByIdAndDelete(id);

      if (foundUnit.assets) {
        var index = foundUnit.assets.indexOf(id);
        if (index > -1) {
          foundUnit.assets?.splice(index, 1);
          foundUnit.save();
        }
      }

      res.status(204);
      res.end();
    } else {
      res.status(404);
      res.json({ erro: "ID não encontrada" });
    }
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

const getAllAssetsFromUnit = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let foundUnit = await Units.findOne({
      _id: req.params.unit,
    });
    if (foundUnit) {
      const assets: AssetsInterface[] = await Assets.find({
        unit: foundUnit?._id,
      }).populate("unit");

      res.json(assets);
    }
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

const getAsset = async (req: Request, res: Response): Promise<void> => {
  try {
    const foundAsset = await Assets.findOne({
      _id: req.params.id,
    }).populate("unit");

    if (foundAsset) {
      res.json(foundAsset);
      res.status(200);
    } else {
      res.status(404);
      res.json({ erro: "Ativo não encontrado" });
    }
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

export { createAsset, deleteAsset, getAllAssetsFromUnit, getAsset };
