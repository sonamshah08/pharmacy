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
            const orderRepo = this.dataSource.getRepository(Order);
            let newOrder: any = {};
            switch(pharmacyName.toLowerCase()){
                case 'healthmart': 
                        newOrder = orderRepo.create({
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
           
                case 'careplus': 
                        newOrder = orderRepo.create({
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
             
            default:
                return newOrder;      
            }
            

            
        } catch (error) {
            console.error('Something went wrong:', error);
            throw error;
        }
    }
}
 