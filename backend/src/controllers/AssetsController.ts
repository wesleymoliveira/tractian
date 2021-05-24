import { ObjectId } from "mongodb";
import { Response, Request } from "express";
import Assets, { AssetsInterface } from "../models/Assets";
import Units from "../models/Units";
import Companies from "../models/Companies";

const createAsset = async (req: Request, res: Response): Promise<void> => {
  try {
    let foundUnit = await Units.findOne({
      name: req.params.unit,
    });
    let foundCompany = await Companies.findOne({
      name: req.params.company,
    });
    if (foundUnit && foundCompany) {
      const body = req.body;
      const unitObjectId = new ObjectId(foundUnit._id);
      const companyObjectId = new ObjectId(foundCompany._id);

      const asset: AssetsInterface = new Assets({
        image: req.file.filename,
        name: body.name,
        description: body.description,
        assetModel: body.assetModel,
        responsable: body.responsable,
        status: body.status,
        healthLevel: body.healthLevel,
        unit: unitObjectId,
        company: companyObjectId,
      });

      await asset.save();

      foundUnit.assets?.push(asset._id);
      foundUnit.save();

      foundCompany.assets?.push(asset._id);
      foundCompany.save();

      res.status(201).json(asset);
    } else {
      res.status(500);
      res.json({ erro: "Empresa ou unidade não encontradas" });
    }
  } catch (err) {
    res.status(500).json(err);
    console.error("Error message:", err);
    res.end();
  }
};

const deleteAsset = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    let foundUnit = await Units.findOne({
      assets: id,
    });

    let foundCompany = await Companies.findOne({
      assets: id,
    });

    if (Assets.findById(id) && foundUnit && foundCompany) {
      await Assets.findByIdAndDelete(id);

      if (foundUnit.assets) {
        var index = foundUnit.assets.indexOf(id);
        if (index > -1) {
          foundUnit.assets?.splice(index, 1);
          foundUnit.save();
        }
      }

      if (foundCompany.assets) {
        var index = foundCompany.assets.indexOf(id);
        if (index > -1) {
          foundCompany.assets?.splice(index, 1);
          foundCompany.save();
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
      _id: req.query.unit,
    });

    if (foundUnit) {
      const assets: AssetsInterface[] = await Assets.find({
        unit: foundUnit?._id,
      });

      res.json(assets);
    } else {
      res.status(404);
      res.json({ erro: "ID não encontrada" });
    }
  } catch (err) {
    res.status(500).json(err);
    res.end();
    console.error("Error message:", err);
  }
};

const getAllAssetsFromCompany = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let foundCompany = await Companies.findOne({
      name: req.params.company,
    });
    if (foundCompany) {
      const assets: AssetsInterface[] = await Assets.find({
        company: foundCompany?._id,
      });

      res.json(assets);
    } else {
      res.status(404);
      res.json({ erro: "ID não encontrada" });
    }
  } catch (err) {
    res.status(500).json(err);
    res.end();
    console.error("Error message:", err);
  }
};

const getAsset = async (req: Request, res: Response): Promise<void> => {
  try {
    const foundAsset = await Assets.findOne({
      _id: req.params.id,
    }).populate(["unit", "company"]);

    if (foundAsset) {
      res.json(foundAsset);
      res.status(200);
    } else {
      res.status(404);
      res.json({ erro: "Ativo não encontrado" });
    }
  } catch (err) {
    res.status(500).json(err);
    res.end();
    console.error("Error message:", err);
  }
};

const getAssetStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    let foundCompany = await Companies.findOne({
      name: req.params.company,
    });
    if (foundCompany) {
      const qtdEmOperacao = await Assets.countDocuments({
        company: foundCompany?._id,
        status: "Em Operação",
      });
      const qtdEmParada = await Assets.countDocuments({
        company: foundCompany?._id,
        status: "Em Parada",
      });
      const qtdEmAlerta = await Assets.countDocuments({
        company: foundCompany?._id,
        status: "Em Alerta",
      });
      const qtdDesligado = await Assets.countDocuments({
        company: foundCompany?._id,
        status: "Desligado",
      });
      const total = qtdDesligado + qtdEmAlerta + qtdEmOperacao + qtdEmParada;

      res.json({
        qtdEmOperacao: qtdEmOperacao,
        qtdEmParada: qtdEmParada,
        qtdDesligado: qtdDesligado,
        qtdEmAlerta: qtdEmAlerta,
        total: total,
      });
    } else {
      res.status(404);
      res.json({ erro: "ID não encontrada" });
    }
  } catch (err) {
    res.status(500).json(err);
    res.end();
    console.error("Error message:", err);
  }
};

export {
  createAsset,
  deleteAsset,
  getAllAssetsFromCompany,
  getAllAssetsFromUnit,
  getAsset,
  getAssetStatus,
};
