import { Request, Response } from 'express';
import { PharmacyService } from '../services/PharmacyService';
import { DataSource } from 'typeorm';

export class PharmacyController {
  private dataSource: DataSource;

    constructor(dataSource: DataSource) {
        this.dataSource = dataSource;
    }

    public async getPharmacies(req: Request, res: Response, dataSource: DataSource){
      try {
        const pharmacyService = new PharmacyService(dataSource);
        const pharmacies = await pharmacyService.getPharmacies();
        res.status(200).json({ pharmacies });
      } catch (error) {
        console.error('Something went wrong:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };


  public async  createPharmacy(req: Request, res: Response, dataSource: DataSource){
    try {
    const pharmacyData = req.body;
    const pharmacyService = new PharmacyService(dataSource);
    let dataPharmacy = await pharmacyService.createPharmacy(pharmacyData);
    res.status(201).json({success: true,message: "Pharmacy created successfully", payload: dataPharmacy });
    } catch (error) {
      console.error('Something went wrong:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

}

