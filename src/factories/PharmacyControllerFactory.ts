import { DataSource } from 'typeorm';
import {PharmacyController} from '../controllers/PharmacyController';

export class PharmacyControllerFactory {
    private static instance: PharmacyController | null = null;

    public static create(dataSource: DataSource): PharmacyController {
        if (!PharmacyControllerFactory.instance) {
            PharmacyControllerFactory.instance = new PharmacyController(dataSource);
        }
        return PharmacyControllerFactory.instance;
    }

    public static getpharmacies(dataSource: DataSource): PharmacyController {
        if (!PharmacyControllerFactory.instance) {
            PharmacyControllerFactory.instance = new PharmacyController(dataSource);
        }
        return PharmacyControllerFactory.instance;
    }
}

 
