export class OrderDTO {
  id: number;
  product: string;
  quantity: number;
  customerInfo: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
  };

  [key: string]: any;
  
}
