import { DataSource } from 'typeorm';
import { ProductController } from '../controllers/ProductController';

export class ProductControllerFactory {
    private static instance: ProductController | null = null;

    public static create(dataSource: DataSource): ProductController {
        if (!ProductControllerFactory.instance) {
            ProductControllerFactory.instance = new ProductController(dataSource);
        }
        return ProductControllerFactory.instance;
    }

    public static getproducts(dataSource: DataSource): ProductController {
        if (!ProductControllerFactory.instance) {
            ProductControllerFactory.instance = new ProductController(dataSource);
        }
        return ProductControllerFactory.instance;
    }
}
