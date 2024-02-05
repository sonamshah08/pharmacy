import { DataSource  } from 'typeorm';
import { ProductEntity } from '../entities/ProductEntity';
 
 export class ProductService   {
   
    constructor(private dataSource: DataSource) {}

    async getProducts(): Promise<ProductEntity[]> {
        try {
          const productRepo = this.dataSource.getRepository(ProductEntity); 
          return await productRepo.find();
        } catch (error) {
          console.error('Something went wrong:', error);
          throw error;
        }
    }

    async createProduct(productData: Partial<ProductEntity>) {
        try {
            const productRepo = this.dataSource.getRepository(ProductEntity);
            const productResult = await productRepo.create(productData);
            return productRepo.save(productResult);
        } catch (error) {
            console.error('Something went wrong:', error);
            throw error;
        }
    }

    async getPharmacyNameByProductName(productName:string) {
        try {
            const product = await this.dataSource.getRepository(ProductEntity)
                            .createQueryBuilder('product')
                            .select(['product.name as productName', 'pharmacy.name as pharmacyName'])
                            .innerJoin('product.pharmacy', 'pharmacy')
                            .where('product.name = :productName', { productName })
                            .getRawOne();

            const lowercaseProductName = product.pharmacyName.toLowerCase();
            switch (true) {
                case lowercaseProductName.includes('healthmart'):
                    return 'healthMart';
                case lowercaseProductName.includes('careplus'):
                    return 'carePlus';
                default:
                    return null;
            }
        return product ? lowercaseProductName : null;
        //return product;
        } catch (error) {
            console.error('Something went wrong:', error);
            throw error;
        }
    }
    
}
 