import { DataSource } from 'typeorm';
import { OrderController } from '../controllers/OrderController';

export class OrderControllerFactory {
    private static instance: OrderController | null = null;

    public static create(dataSource: DataSource): OrderController {
        if (!OrderControllerFactory.instance) {
            OrderControllerFactory.instance = new OrderController(dataSource);
        }
        return OrderControllerFactory.instance;
    }

    public static getorders(dataSource: DataSource): OrderController {
        if (!OrderControllerFactory.instance) {
            OrderControllerFactory.instance = new OrderController(dataSource);
        }
        return OrderControllerFactory.instance;
    }
}
