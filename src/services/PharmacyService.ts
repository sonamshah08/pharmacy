import { DataSource  } from 'typeorm';
import { PharmacyEntity } from '../entities/PharmacyEntity';
 
 export class PharmacyService   {
    
    //private pharmacyRepository: Repository<PharmacyEntity>;

    constructor(private dataSource: DataSource) {}

    async getPharmacies(): Promise<PharmacyEntity[]> {
        try {
          const pharmacyRepo = this.dataSource.getRepository(PharmacyEntity); 
          return await pharmacyRepo.find();
        } catch (error) {
          console.error('Something went wrong:', error);
          throw error;
        }
    }

    async createPharmacy(pharmacyData: Partial<PharmacyEntity>) {
        try {
            const pharmacyRepo = this.dataSource.getRepository(PharmacyEntity);
            const pharmacy = await pharmacyRepo.create(pharmacyData);
            return pharmacyRepo.save(pharmacy);
        } catch (error) {
            console.error('Something went wrong:', error);
            throw error;
        }
    }

    async getPharmacyByName(pharmacyName: string) : Promise<PharmacyEntity | any> {
        try {
            const lowercaseName = pharmacyName.toLowerCase();
            const pharmacyRepo = this.dataSource.getRepository(PharmacyEntity);
            const pharmacy = await pharmacyRepo.createQueryBuilder('pharmacy')
                                    .where('pharmacy.integrationName = :pharmacyName', { pharmacyName })
                                    .getOne();
            return pharmacy ? pharmacy : 0;
        } catch (error) {
            console.error('Something went wrong:', error);
            throw error;
        }
    }

    
}
 