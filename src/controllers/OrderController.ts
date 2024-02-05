import { Request, Response } from 'express';
import { OrderDTO } from '../dtos/OrderDTO';
import { OrderService } from '../services/OrderService';
import { DataSource } from 'typeorm';
import { OrderMapper } from '../mappers/OrderMapper';
import { ProductService } from '../services/ProductService';
import { PharmacyService } from '../services/PharmacyService';

export const getOrders = async (req: Request, res: Response, dataSource: DataSource) => {
    try {
      const pharmacyName = req.params.pharmacy;
      const pharmacyService = new PharmacyService(dataSource);
      const pharmacy = await pharmacyService.getPharmacyByName(pharmacyName);

      const orderService = new OrderService(dataSource);
      let pharmacyid = pharmacy?.id;
      const orders = await orderService.getOrders(pharmacyid);

      const simplifiedArray = orders.map(order => ({ ...order }));
      let ordersDTO: any[] = [];
      for (const simplifiedOrder of simplifiedArray) {
        const orderDTO = OrderMapper.toDTO(simplifiedOrder, pharmacyName.toLowerCase());
        ordersDTO.push(orderDTO);
      }
      res.status(200).json({ordersDTO });


    } catch (error) {
      console.error('Something went wrong:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export const createOrder = async (req: Request, res: Response, dataSource: DataSource) => {
    try {
        const orderData = req.body; 
        const orderService = new OrderService(dataSource);

        const pharmacyName = req.params.pharmacy;
        const pharmacyService = new PharmacyService(dataSource);
        const pharmacy = await pharmacyService.getPharmacyByName(pharmacyName);
        
        const orderDTO = OrderMapper.convertToOrderDTO(orderData,pharmacyName);
        orderDTO.pharmacyid = pharmacy?.id;

        let orderResult = await orderService.createOrder(orderDTO,pharmacyName);

        const mapPayload = OrderMapper.toDTO(orderResult, pharmacyName);
        res.status(201).json({ success: true,message: "Order created successfully", payload:mapPayload});
    } catch (error) {
        console.error('Something went wrong:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

    
};

