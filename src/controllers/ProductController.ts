import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';
import { DataSource } from 'typeorm';

export const getProducts = async (req: Request, res: Response, dataSource: DataSource) => {
  try {
    const productService = new ProductService(dataSource);
    const products = await productService.getProducts();
    res.status(200).json({ products });
  } catch (error) {
    console.error('Something went wrong:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

 export const createProduct = async (req: Request, res: Response, dataSource: DataSource) => {
  try {
  const productData = req.body; 
  const productService = new ProductService(dataSource);
  let dataProduct = await productService.createProduct(productData);
  res.status(201).json({ success: true,message: "Product created successfully", payload: dataProduct });
  } catch (error) {
    console.error('Something went wrong:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};