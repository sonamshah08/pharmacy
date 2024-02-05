import { DataSource  } from 'typeorm';
import { Order } from '../entities/OrderEntity';

 export class OrderService   {

    constructor(private dataSource: DataSource) {}

    async getOrders(pharmacyid: number): Promise<Order[]> {
        try {
            let orderRepo = this.dataSource.getRepository(Order); 
            return await orderRepo.find({
                where: {
                  pharmacyid: pharmacyid,
                },
              });
        } catch (error) {
          console.error('Something went wrong:', error);
          throw error;
        }
    }
    async createOrder(orderDTO: any,pharmacyName : string): Promise<Order> {
        try {
            console.log(orderDTO,"orderDTO");
            const orderRepo = this.dataSource.getRepository(Order);
            let newOrder: any = {};
            switch(pharmacyName.toLowerCase()){
                case 'healthmart':
                        return this.saveHealthMartRecord(orderDTO);
                case 'careplus':
                        return this.saveCarePlusRecord(orderDTO);
                case 'quickcare':
                        return this.saveQuickCareRecord(orderDTO);
            default:
                return newOrder;
            }
        } catch (error) {
            console.error('Something went wrong:', error);
            throw error;
        }
    }

    async saveHealthMartRecord(orderDTO : any): Promise<Order>{
        const orderRepo = this.dataSource.getRepository(Order);
        let newOrder = orderRepo.create({
            product: orderDTO.product,
            quantity: orderDTO.quantity,
            customerName: orderDTO.customerInfo.name,
            customerAddress: orderDTO.customerInfo.address,
            customerCity: orderDTO.customerInfo.city,
            customerState: orderDTO.customerInfo.state,
            customerZipcode: orderDTO.customerInfo.zipcode,
            customerCountry: orderDTO.customerInfo.country,
            pharmacyid:orderDTO.pharmacyid,
        });
        return  await orderRepo.save(newOrder);
    }

    async saveCarePlusRecord(orderDTO : any): Promise<Order>{ 
        const orderRepo = this.dataSource.getRepository(Order);
        let newOrder = orderRepo.create({
            product: orderDTO.product,
            quantity: orderDTO.quantity,
            customerName: orderDTO.clientInfo.name,
            customerAddress: orderDTO.clientInfo.address,
            customerCity: orderDTO.clientInfo.city,
            customerState: orderDTO.clientInfo.state,
            customerZipcode: orderDTO.clientInfo.zipcode,
            customerCountry: orderDTO.clientInfo.country,
            pharmacyid:orderDTO.pharmacyid,
        });
        return await orderRepo.save(newOrder);
    }

    async saveQuickCareRecord(orderDTO : any): Promise<Order>{ 
        const orderRepo = this.dataSource.getRepository(Order);
        let newOrder = orderRepo.create({
            product: orderDTO.product,
            quantity: orderDTO.quantity,
            customerName: orderDTO.userData.name,
            customerAddress: orderDTO.userData.address,
            customerCity: orderDTO.userData.city,
            customerState: orderDTO.userData.state,
            customerZipcode: orderDTO.userData.zipcode,
            customerCountry: orderDTO.userData.country,
            pharmacyid:orderDTO.pharmacyid,
        });
        return await orderRepo.save(newOrder);
    }
}
 