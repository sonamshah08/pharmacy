export class CarePlusOrderDTO {
    id: number;
    product: string;
    quantity: number;
    clientInfo: {
      name: string;
      address: string;
      city: string;
      state: string;
      zipcode: string;
      country: string;
    };
  
    [key: string]: any;
    
  }
  