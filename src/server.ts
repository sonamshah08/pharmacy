import express from 'express';
import 'reflect-metadata';
import { createDatabaseConnection } from '../src/database';
import { OrderControllerFactory } from '../src/factories/OrderControllerFactory';
import { PharmacyControllerFactory } from '../src/factories/PharmacyControllerFactory';
import { ProductControllerFactory } from '../src/factories/ProductControllerFactory';

const app = express();
const port = 3000;

const initializeApp = async () => {
    try {
      const dataSource = await createDatabaseConnection();
      app.use(express.json());

      app.post('/api/pharmacy', (req, res) => {
        const PharmacyController = PharmacyControllerFactory.create(dataSource);
        PharmacyController.createPharmacy(req, res,dataSource);
      });

      app.get('/api/pharmacies', (req, res) => {
        const PharmacyController = PharmacyControllerFactory.getpharmacies(dataSource);
        PharmacyController.getPharmacies(req, res,dataSource);
      });

      app.post('/api/product', (req, res) => {
        const Productontroller = ProductControllerFactory.create(dataSource);
        Productontroller.createProduct(req, res,dataSource);
      });

      app.get('/api/products', (req, res) => {
        const Productontroller = ProductControllerFactory.getproducts(dataSource);
        Productontroller.getProducts(req, res,dataSource);
      });

      app.post('/api/:pharmacy/order', (req, res) => {
        const orderController = OrderControllerFactory.create(dataSource);
        orderController.createOrder(req, res);
      });

      app.get('/api/:pharmacy/orders', (req, res) => {
        const orderController = OrderControllerFactory.getorders(dataSource);
        orderController.getOrders(req, res, dataSource);
      });

      app.listen(port,  async() => {
        console.log(`Server is running at http://localhost:${port}`);
      });

    } catch (error) {
      console.error('Error initializing the app:', error);
    }
  };

  initializeApp();




