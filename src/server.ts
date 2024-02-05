import express from 'express';
import 'reflect-metadata';
import { createDatabaseConnection } from '../src/database';
import * as pharmacyController from '../src/controllers/PharmacyController';
import * as productController from '../src/controllers/ProductController';
import * as orderController from '../src/controllers/OrderController';

const app = express();
const port = 3000;

const initializeApp = async () => {
    try {
      const dataSource = await createDatabaseConnection();
      app.use(express.json());
      app.get('/api/pharmacies', (req, res) => pharmacyController.getPharmacies(req, res, dataSource));
      app.post('/api/pharmacy', (req, res) => pharmacyController.createPharmacy(req, res, dataSource));
      app.get('/api/products', (req, res) => productController.getProducts(req, res, dataSource));
      app.post('/api/product', (req, res) => productController.createProduct(req, res, dataSource));
      app.get('/api/:pharmacy/orders', (req, res) => orderController.getOrders(req, res, dataSource));
      app.post('/api/:pharmacy/order', (req, res) => orderController.createOrder(req, res, dataSource));
      app.listen(port,  async() => {
        console.log(`Server is running at http://localhost:${port}`);
      });

    } catch (error) {
      console.error('Error initializing the app:', error);
    }
  };

  initializeApp();




